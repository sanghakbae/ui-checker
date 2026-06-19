const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

function loadEnv() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readJsonBody(request, limitBytes = 12 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > limitBytes) {
        reject(new Error("요청 이미지가 너무 큽니다."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("JSON 요청을 읽을 수 없습니다."));
      }
    });
    request.on("error", reject);
  });
}

function extractResponseText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const chunks = [];
  for (const output of data.output || []) {
    for (const content of output.content || []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function parseAnalysisJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("분석 결과가 JSON 형식이 아닙니다.");
    return JSON.parse(match[0]);
  }
}

function normalizeDetections(payload) {
  const detections = Array.isArray(payload.detections) ? payload.detections : [];
  return detections.slice(0, 60).map((item, index) => ({
    id: String(item.id || "element-card"),
    label: String(item.label || item.name || `UI 요소 ${index + 1}`),
    type: String(item.type || "panel"),
    confidence: Math.max(0, Math.min(1, Number(item.confidence || 0.6))),
    reason: String(item.reason || "이미지에서 유사한 UI 패턴을 찾았습니다."),
    location: item.location ? String(item.location) : "",
    visibleText: item.visibleText ? String(item.visibleText) : "",
    parent: item.parent ? String(item.parent) : "",
    count: Number.isFinite(Number(item.count)) ? Number(item.count) : 1,
  }));
}

async function analyzeImage(image, components) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(".env에 OPENAI_API_KEY가 없습니다.");
  }

  const catalog = (components || [])
    .slice(0, 80)
    .map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      role: item.role,
    }));

  const prompt = [
    "너는 웹/앱 UI 스크린샷을 해부하는 시니어 프로덕트 디자이너다.",
    "목표: 이미지에 실제로 보이는 UI 요소를 빠짐없이 식별하고, 아래 컴포넌트 카탈로그의 id로 매칭한다.",
    "",
    "중요 규칙:",
    "1. 화면을 상단→중앙→하단, 좌→우 순서로 스캔한다.",
    "2. 실제로 보이는 요소만 반환한다. 추측으로 없는 요소를 만들지 않는다.",
    "3. 단순히 '카드'라고 뭉개지 말고, 통계 카드/칸반 컬럼/리스트 행/상태 배지/빈 상태/섹션 헤더처럼 역할을 구체화한다.",
    "4. 반복되는 요소는 같은 패턴이면 하나로 묶되 count에 개수를 적는다. 예: 상태 배지 6개, 요청 카드 5개.",
    "5. visibleText에는 화면에서 읽히는 실제 텍스트 일부를 넣는다. 없으면 빈 문자열.",
    "6. parent에는 그 요소가 들어있는 상위 영역을 넣는다. 예: '요청 현황 > 작성중 컬럼'.",
    "7. location은 사람이 찾을 수 있게 구체적으로 쓴다. 예: '상단 요약 카드 행 3번째', '중앙 칸반 보드 왼쪽 컬럼'.",
    "8. reason에는 왜 그 컴포넌트 id로 판단했는지 시각적 근거를 한국어로 쓴다.",
    "9. 카탈로그에 완벽한 id가 없으면 가장 가까운 id를 고르고 confidence를 낮춘다.",
    "10. 반드시 JSON만 반환한다. markdown, 설명 문장, 코드블록 금지.",
    "",
    "반환 JSON 형식:",
    '{"detections":[{"id":"status-pill","label":"작성중 상태 배지","type":"badge","confidence":0.93,"count":5,"visibleText":"작성중","parent":"요청 현황 > 작성중 컬럼","location":"중앙 왼쪽 컬럼 카드 오른쪽","reason":"둥근 초록 배경의 짧은 상태 라벨이 반복됨"}]}',
    "",
    "가능하면 12~30개 사이의 의미 있는 UI 요소 후보를 반환한다.",
    "단, 화면이 단순하면 더 적어도 된다.",
    "",
    `컴포넌트 카탈로그: ${JSON.stringify(catalog)}`,
  ].join("\n");

  const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_VISION_MODEL || "gpt-5.5",
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_url: image },
          ],
        },
      ],
      max_output_tokens: 5000,
    }),
  });

  const data = await openaiResponse.json();
  if (!openaiResponse.ok) {
    const message = data.error?.message || "OpenAI API 호출에 실패했습니다.";
    throw new Error(message);
  }

  return normalizeDetections(parseAnalysisJson(extractResponseText(data)));
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://localhost:${port}`);
  const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const ext = path.extname(filePath);
    const type = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".js": "text/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".webp": "image/webp",
    }[ext] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": type });
    response.end(content);
  });
}

loadEnv();

const server = http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/analyze-image") {
    try {
      const body = await readJsonBody(request);
      if (!body.image || typeof body.image !== "string") {
        sendJson(response, 400, { error: "image 값이 필요합니다." });
        return;
      }
      const detections = await analyzeImage(body.image, body.components);
      sendJson(response, 200, { detections });
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (request.method === "GET") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
});

server.listen(port, () => {
  console.log(`UI Practice server running at http://localhost:${port}`);
});
