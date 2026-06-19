const categories = [
  { id: "layout", label: "레이아웃", icon: "panel-left" },
  { id: "panel", label: "패널/카드", icon: "panel-top" },
  { id: "button", label: "버튼", icon: "mouse-pointer-click" },
  { id: "form", label: "폼", icon: "text-cursor-input" },
  { id: "badge", label: "태그/배지", icon: "badge" },
  { id: "feedback", label: "피드백", icon: "message-square" },
];

const devices = {
  pc: {
    title: "PC 기준",
    badge: "Desktop",
    label: "1440 x 900",
    copy: "넓은 작업 화면, 사이드바, 테이블, 대량 정보 탐색을 기준으로 검수합니다.",
    specs: [
      ["기준 해상도", "1440 x 900"],
      ["최소 폭", "1280px"],
      ["입력 방식", "마우스/키보드"],
      ["주요 UI", "테이블, 패널, 다중 열"],
    ],
  },
  iphone: {
    title: "모바일 기준",
    badge: "iPhone Mobile",
    label: "393 x 852",
    copy: "iPhone 15 계열 폭을 기준으로 하단 접근성, 세이프 영역, 터치 크기를 확인합니다.",
    specs: [
      ["기준 해상도", "393 x 852"],
      ["최소 폭", "375px"],
      ["입력 방식", "터치/제스처"],
      ["주요 UI", "단일 열, 하단 액션"],
    ],
  },
  galaxy: {
    title: "Galaxy 기준",
    badge: "Android Mobile",
    label: "412 x 915",
    copy: "Galaxy S 계열 폭을 기준으로 Android 브라우저 높이, 뒤로가기, 터치 영역을 확인합니다.",
    specs: [
      ["기준 해상도", "412 x 915"],
      ["최소 폭", "360px"],
      ["입력 방식", "터치/시스템 뒤로가기"],
      ["주요 UI", "단일 열, 상단/하단 바"],
    ],
  },
};

const elements = [
  {
    id: "requirements",
    category: "strategy",
    title: "요구사항 백로그",
    owner: "Product",
    status: "ready",
    priority: "high",
    icon: "list-checks",
    color: "#0f766e",
    summary: "사용자 목표, 기능 범위, 비즈니스 규칙, 릴리즈 기준을 한곳에서 관리합니다.",
    outputs: ["PRD", "사용자 스토리", "릴리즈 범위", "수용 기준"],
    dependencies: ["stakeholders", "design-system"],
    checks: ["핵심 사용자 여정 정의", "MVP 범위 합의", "예외 정책 문서화"],
    devices: {
      pc: "관리자와 실무자용 대량 작업 흐름을 분리합니다.",
      iphone: "핵심 사용자 여정을 1분 안에 끝낼 수 있게 줄입니다.",
      galaxy: "Android 뒤로가기와 브라우저 UI 높이를 고려합니다.",
    },
  },
  {
    id: "information-architecture",
    category: "strategy",
    title: "정보 구조",
    owner: "Product Design",
    status: "progress",
    priority: "medium",
    icon: "network",
    color: "#2563eb",
    summary: "메뉴, 페이지, 권한별 접근 흐름을 구조화해 화면과 API 범위를 정렬합니다.",
    outputs: ["사이트맵", "페이지 목록", "권한 매트릭스"],
    dependencies: ["requirements", "auth"],
    checks: ["빈 상태 포함", "모바일 진입점 확인", "권한별 메뉴 노출 검토"],
    devices: {
      pc: "좌측 내비게이션과 상단 작업 영역을 함께 설계합니다.",
      iphone: "하단 탭 또는 햄버거 메뉴 기준으로 깊이를 제한합니다.",
      galaxy: "시스템 뒤로가기와 앱 내부 뒤로가기를 충돌 없이 둡니다.",
    },
  },
  {
    id: "design-system",
    category: "design",
    title: "디자인 시스템",
    owner: "Design System",
    status: "progress",
    priority: "high",
    icon: "blocks",
    color: "#7c3aed",
    summary: "색상, 타이포그래피, 컴포넌트, 상태 패턴을 제품 전반에 일관되게 적용합니다.",
    outputs: ["토큰", "컴포넌트 라이브러리", "상태 가이드", "접근성 기준"],
    dependencies: ["requirements"],
    checks: ["포커스 상태", "오류 상태", "반응형 규칙", "다크 모드 필요성"],
    devices: {
      pc: "테이블, 모달, 밀도 높은 폼 컴포넌트를 우선 검수합니다.",
      iphone: "44px 이상 터치 영역과 세이프 영역 여백을 확인합니다.",
      galaxy: "48dp 터치 영역과 Android 폰트 렌더링을 확인합니다.",
    },
  },
  {
    id: "wireframes",
    category: "design",
    title: "화면 설계",
    owner: "UX",
    status: "ready",
    priority: "medium",
    icon: "square-dashed",
    color: "#0891b2",
    summary: "주요 화면의 레이아웃, 액션, 상태 전환을 구현 전 검증합니다.",
    outputs: ["와이어프레임", "프로토타입", "사용성 테스트 메모"],
    dependencies: ["information-architecture", "design-system"],
    checks: ["주요 CTA 식별", "에러/로딩/빈 상태", "키보드 사용성"],
    devices: {
      pc: "다중 열 레이아웃과 사이드 패널 흐름을 설계합니다.",
      iphone: "주요 CTA를 엄지 영역 안에 배치합니다.",
      galaxy: "주소창 높이 변화에도 주요 액션이 가려지지 않게 합니다.",
    },
  },
  {
    id: "frontend-shell",
    category: "frontend",
    title: "프론트엔드 앱 셸",
    owner: "Frontend",
    status: "progress",
    priority: "high",
    icon: "layout-template",
    color: "#16a34a",
    summary: "라우팅, 레이아웃, 상태 관리, 공통 UI 패턴을 제공하는 클라이언트 기반입니다.",
    outputs: ["라우트 구조", "상태 저장소", "공통 레이아웃", "에러 바운더리"],
    dependencies: ["design-system", "api-contract"],
    checks: ["라우트 보호", "로딩 전략", "캐시 무효화", "접근성 랜드마크"],
    devices: {
      pc: "분할 화면, 단축키, 테이블 가상 스크롤을 점검합니다.",
      iphone: "초기 로드와 스크롤 성능을 모바일 네트워크 기준으로 봅니다.",
      galaxy: "Android Chrome 뷰포트 변화와 입력 포커스를 점검합니다.",
    },
  },
  {
    id: "api-contract",
    category: "backend",
    title: "API 계약",
    owner: "Backend",
    status: "ready",
    priority: "high",
    icon: "braces",
    color: "#ea580c",
    summary: "프론트엔드와 백엔드가 공유하는 요청, 응답, 에러, 버전 규칙을 정의합니다.",
    outputs: ["OpenAPI", "에러 코드", "스키마", "Mock 서버"],
    dependencies: ["requirements", "data-model"],
    checks: ["페이지네이션", "권한 오류", "버전 정책", "속도 제한"],
    devices: {
      pc: "대량 조회와 정렬/필터 요청을 안정적으로 지원합니다.",
      iphone: "작은 화면에서 필요한 응답만 가져오도록 필드를 줄입니다.",
      galaxy: "느린 네트워크 재시도와 중복 요청 방지를 확인합니다.",
    },
  },
  {
    id: "business-logic",
    category: "backend",
    title: "도메인 로직",
    owner: "Backend",
    status: "progress",
    priority: "high",
    icon: "workflow",
    color: "#dc2626",
    summary: "서비스 규칙, 트랜잭션, 비동기 작업, 외부 연동을 안정적으로 처리합니다.",
    outputs: ["서비스 모듈", "작업 큐", "도메인 테스트", "연동 어댑터"],
    dependencies: ["api-contract", "data-model", "integrations"],
    checks: ["멱등성", "재시도 정책", "트랜잭션 경계", "실패 보상"],
    devices: {
      pc: "관리 작업의 대량 처리와 취소 가능성을 확인합니다.",
      iphone: "중단된 모바일 작업을 안전하게 재개하게 합니다.",
      galaxy: "뒤로가기 후 재요청이 중복 처리되지 않게 합니다.",
    },
  },
  {
    id: "data-model",
    category: "data",
    title: "데이터 모델",
    owner: "Data",
    status: "ready",
    priority: "high",
    icon: "table-properties",
    color: "#4f46e5",
    summary: "엔티티, 관계, 인덱스, 보존 정책을 정의해 기능과 분석의 기반을 만듭니다.",
    outputs: ["ERD", "마이그레이션", "인덱스 계획", "데이터 사전"],
    dependencies: ["requirements"],
    checks: ["개인정보 분류", "삭제 정책", "고유 제약", "조회 패턴 인덱스"],
    devices: {
      pc: "관리자 테이블 조회 패턴에 맞는 인덱스를 둡니다.",
      iphone: "모바일 목록은 요약 필드와 상세 필드를 분리합니다.",
      galaxy: "오프라인/재시도 흐름에서 임시 데이터를 구분합니다.",
    },
  },
  {
    id: "auth",
    category: "security",
    title: "인증/인가",
    owner: "Security",
    status: "risk",
    priority: "high",
    icon: "key-round",
    color: "#b91c1c",
    summary: "로그인, 세션, 권한, 조직/역할 정책을 서비스 전체 액세스 제어와 연결합니다.",
    outputs: ["권한 모델", "세션 정책", "SSO 설정", "감사 로그"],
    dependencies: ["information-architecture", "api-contract"],
    checks: ["권한 상승 방지", "세션 만료", "MFA", "관리자 감사 추적"],
    devices: {
      pc: "관리자 권한과 일반 사용자 권한을 화면 단위로 분리합니다.",
      iphone: "Face ID, 패스키, 자동완성 흐름을 고려합니다.",
      galaxy: "생체 인증과 Android 비밀번호 관리자를 고려합니다.",
    },
  },
  {
    id: "security-controls",
    category: "security",
    title: "보안 통제",
    owner: "Security",
    status: "progress",
    priority: "high",
    icon: "lock-keyhole",
    color: "#be123c",
    summary: "입력 검증, 비밀 관리, 취약점 점검, 데이터 보호 체계를 운영 기준에 맞춥니다.",
    outputs: ["위협 모델", "보안 체크리스트", "시크릿 관리", "취약점 리포트"],
    dependencies: ["auth", "infra-pipeline"],
    checks: ["XSS/CSRF", "시크릿 노출", "의존성 스캔", "암호화 범위"],
    devices: {
      pc: "관리 콘솔의 위험 액션과 다운로드 보안을 점검합니다.",
      iphone: "클립보드, 공유 시트, 자동완성 노출을 확인합니다.",
      galaxy: "파일 업로드와 권한 요청 문구를 Android 기준으로 점검합니다.",
    },
  },
  {
    id: "infra-pipeline",
    category: "infra",
    title: "배포 파이프라인",
    owner: "DevOps",
    status: "progress",
    priority: "medium",
    icon: "rocket",
    color: "#0284c7",
    summary: "빌드, 테스트, 배포, 롤백, 환경 변수를 자동화해 반복 가능한 출시를 만듭니다.",
    outputs: ["CI/CD", "환경 구성", "롤백 절차", "릴리즈 노트"],
    dependencies: ["frontend-shell", "business-logic"],
    checks: ["스테이징 분리", "마이그레이션 순서", "롤백 검증", "배포 승인"],
    devices: {
      pc: "데스크톱 브라우저 호환성과 고해상도 화면을 검증합니다.",
      iphone: "iOS Safari 캐시와 PWA 설정을 확인합니다.",
      galaxy: "Android Chrome, Samsung Internet 호환성을 확인합니다.",
    },
  },
  {
    id: "observability",
    category: "quality",
    title: "관측성",
    owner: "Platform",
    status: "risk",
    priority: "medium",
    icon: "radar",
    color: "#ca8a04",
    summary: "로그, 메트릭, 트레이스, 알림을 연결해 장애 원인과 사용자 영향을 빠르게 확인합니다.",
    outputs: ["대시보드", "알림 정책", "로그 스키마", "SLO"],
    dependencies: ["infra-pipeline", "business-logic"],
    checks: ["핵심 이벤트", "알림 피로도", "PII 마스킹", "장애 런북"],
    devices: {
      pc: "관리 작업 이벤트와 테이블 성능 지표를 분리합니다.",
      iphone: "모바일 웹 바이탈과 이탈 지점을 별도로 추적합니다.",
      galaxy: "Android 브라우저별 오류와 네트워크 상태를 기록합니다.",
    },
  },
  {
    id: "testing",
    category: "quality",
    title: "테스트 전략",
    owner: "QA",
    status: "progress",
    priority: "medium",
    icon: "test-tube-2",
    color: "#9333ea",
    summary: "단위, 통합, E2E, 접근성, 성능 테스트를 위험도에 맞춰 배치합니다.",
    outputs: ["테스트 피라미드", "E2E 시나리오", "성능 기준", "회귀 목록"],
    dependencies: ["frontend-shell", "api-contract", "auth"],
    checks: ["중요 흐름 자동화", "테스트 데이터", "접근성 검사", "부하 기준"],
    devices: {
      pc: "Chrome, Edge, Firefox 데스크톱 회귀를 포함합니다.",
      iphone: "iOS Safari 실제 기기 또는 시뮬레이터 검수를 둡니다.",
      galaxy: "Galaxy 실제 기기와 Android Chrome 검수를 둡니다.",
    },
  },
  {
    id: "integrations",
    category: "backend",
    title: "외부 연동",
    owner: "Backend",
    status: "ready",
    priority: "low",
    icon: "plug-zap",
    color: "#0d9488",
    summary: "결제, 이메일, 메시징, 분석 도구 등 외부 시스템과의 계약과 장애 대응을 관리합니다.",
    outputs: ["연동 목록", "Webhook 계약", "샌드박스 키", "장애 대응표"],
    dependencies: ["requirements", "security-controls"],
    checks: ["서명 검증", "재처리", "쿼터", "벤더 장애 플랜"],
    devices: {
      pc: "관리자 연동 설정과 테스트 호출 화면을 제공합니다.",
      iphone: "모바일 결제/공유 전환에서 앱 이동을 확인합니다.",
      galaxy: "Android 앱 링크와 외부 브라우저 복귀를 확인합니다.",
    },
  },
  {
    id: "admin-console",
    category: "frontend",
    title: "관리자 콘솔",
    owner: "Ops",
    status: "risk",
    priority: "medium",
    icon: "sliders-horizontal",
    color: "#475569",
    summary: "운영자가 사용자, 설정, 콘텐츠, 정책을 안전하게 관리하는 내부 도구입니다.",
    outputs: ["관리 화면", "작업 로그", "승인 플로우", "권한별 액션"],
    dependencies: ["auth", "data-model", "observability"],
    checks: ["파괴적 작업 확인", "작업 감사", "권한별 버튼", "검색/필터"],
    devices: {
      pc: "관리자 콘솔은 PC 기준을 기본 운영 화면으로 둡니다.",
      iphone: "긴급 확인과 승인만 가능한 축약 화면을 제공합니다.",
      galaxy: "모바일 승인 후 뒤로가기 흐름을 명확히 합니다.",
    },
  },
];

const statusLabel = {
  ready: "준비됨",
  progress: "진행",
  risk: "리스크",
};

const priorityLabel = {
  high: "높음",
  medium: "중간",
  low: "낮음",
};

const uiComponents = [
  {
    id: "app-shell",
    name: "앱 셸",
    type: "layout",
    role: "전체 화면 레이아웃",
    className: ".app-shell",
    radius: "없음",
    size: "PC 280px + 1fr, 모바일 1열",
    state: "반응형",
    usage: "사이드바와 작업 영역을 나누는 최상위 그리드입니다.",
    sample: "sidebar",
  },
  {
    id: "sidebar",
    name: "사이드바",
    type: "layout",
    role: "주요 탐색 영역",
    className: ".sidebar",
    radius: "없음",
    size: "280px, 100vh",
    state: "sticky / mobile static",
    usage: "서비스 영역 카테고리와 준비 상태를 고정해 보여줍니다.",
    sample: "sidebar",
  },
  {
    id: "workspace",
    name: "워크스페이스",
    type: "layout",
    role: "본문 컨테이너",
    className: ".workspace",
    radius: "없음",
    size: "padding 28px, gap 22px",
    state: "반응형",
    usage: "요약, 필터, 인벤토리, 상세, 흐름 지도를 쌓는 본문 영역입니다.",
    sample: "panel",
  },
  {
    id: "metric",
    name: "메트릭 카드",
    type: "panel",
    role: "요약 지표",
    className: ".metric",
    radius: "8px",
    size: "min-height 118px",
    state: "기본",
    usage: "전체 요소, 진행 중, 리스크, 담당 영역 같은 숫자를 강조합니다.",
    sample: "metric",
  },
  {
    id: "metric-label",
    name: "메트릭 라벨",
    type: "badge",
    role: "지표 이름",
    className: ".metric span",
    radius: "없음",
    size: "12-14px text",
    state: "기본",
    usage: "카드 안의 숫자가 어떤 지표인지 알려주는 짧은 제목입니다.",
    sample: "pill",
  },
  {
    id: "metric-value",
    name: "메트릭 값",
    type: "badge",
    role: "핵심 수치",
    className: ".metric strong",
    radius: "없음",
    size: "28-34px text",
    state: "강조",
    usage: "대시보드에서 가장 먼저 읽어야 하는 숫자 값을 크게 보여줍니다.",
    sample: "metric",
  },
  {
    id: "metric-caption",
    name: "메트릭 보조문",
    type: "badge",
    role: "증감/설명 텍스트",
    className: ".metric small",
    radius: "없음",
    size: "12-14px text",
    state: "보조",
    usage: "전월 대비, 목표 대비, 업데이트 시간처럼 수치의 맥락을 짧게 설명합니다.",
    sample: "pill",
  },
  {
    id: "inventory-pane",
    name: "인벤토리 패널",
    type: "panel",
    role: "요소 목록 컨테이너",
    className: ".inventory-pane",
    radius: "8px",
    size: "1fr 영역, padding 18px",
    state: "기본",
    usage: "개발 구성 요소 카드 목록을 담습니다.",
    sample: "panel",
  },
  {
    id: "detail-pane",
    name: "상세 패널",
    type: "panel",
    role: "선택 요소 상세",
    className: ".detail-pane",
    radius: "8px",
    size: "360px, min-height 520px",
    state: "empty / selected",
    usage: "선택한 요소의 범위, 산출물, 의존성, 체크리스트를 보여줍니다.",
    sample: "panel",
  },
  {
    id: "element-card",
    name: "요소 카드",
    type: "panel",
    role: "클릭 가능한 항목 카드",
    className: ".element-card",
    radius: "8px",
    size: "padding 14px, gap 12px",
    state: "default / hover / selected",
    usage: "각 개발 요소를 목록에서 선택할 수 있게 합니다.",
    sample: "card",
  },
  {
    id: "primary-button",
    name: "주요 버튼",
    type: "button",
    role: "강조 액션",
    className: ".primary-button",
    radius: "8px",
    size: "min-height 40px",
    state: "default",
    usage: "내보내기처럼 명확한 실행 액션에 사용합니다.",
    sample: "button",
  },
  {
    id: "icon-button",
    name: "아이콘 버튼",
    type: "button",
    role: "도구 액션",
    className: ".icon-button",
    radius: "8px",
    size: "42px x 42px",
    state: "default",
    usage: "필터 초기화처럼 좁은 공간의 단일 도구 액션에 사용합니다.",
    sample: "icon",
  },
  {
    id: "ghost-button",
    name: "보조 버튼",
    type: "button",
    role: "부가 액션",
    className: ".ghost-button",
    radius: "8px",
    size: "min-height 40px",
    state: "default",
    usage: "밀도 전환처럼 주요 흐름을 방해하지 않는 액션에 사용합니다.",
    sample: "ghost",
  },
  {
    id: "nav-item",
    name: "내비게이션 항목",
    type: "button",
    role: "카테고리 전환",
    className: ".nav-item",
    radius: "8px",
    size: "padding 10px 12px",
    state: "default / hover / active",
    usage: "좌측 서비스 영역 카테고리를 전환합니다.",
    sample: "nav",
  },
  {
    id: "search-box",
    name: "검색 필드",
    type: "form",
    role: "키워드 검색",
    className: ".search-box",
    radius: "8px",
    size: "min-height 42px",
    state: "empty / typing / focus",
    usage: "요소명, 담당자, 산출물, UI 클래스명을 검색합니다.",
    sample: "field",
  },
  {
    id: "select-wrap",
    name: "셀렉트 필드",
    type: "form",
    role: "옵션 선택",
    className: ".select-wrap select",
    radius: "8px",
    size: "min-height 42px",
    state: "default / open",
    usage: "우선순위처럼 고정된 옵션 하나를 선택합니다.",
    sample: "field",
  },
  {
    id: "segmented-control",
    name: "세그먼트 컨트롤",
    type: "form",
    role: "상태 필터",
    className: ".segmented-control",
    radius: "8px",
    size: "button min-height 36px",
    state: "active / inactive",
    usage: "전체, 준비됨, 진행, 리스크 상태를 빠르게 전환합니다.",
    sample: "segments",
  },
  {
    id: "device-control",
    name: "디바이스 컨트롤",
    type: "form",
    role: "화면 기준 전환",
    className: ".device-control",
    radius: "8px outer, 6px item",
    size: "3 columns, item 36px",
    state: "PC / 모바일",
    usage: "PC와 모바일 기준의 화면 검수 정보를 바꿉니다.",
    sample: "segments",
  },
  {
    id: "pill",
    name: "태그",
    type: "badge",
    role: "보조 메타 정보",
    className: ".pill",
    radius: "999px",
    size: "min-height 24px",
    state: "default",
    usage: "담당자, 산출물 수, 디바이스 기준 같은 짧은 정보를 표시합니다.",
    sample: "pill",
  },
  {
    id: "status-pill",
    name: "상태 배지",
    type: "badge",
    role: "상태 표시",
    className: ".status-pill",
    radius: "999px",
    size: "min-height 24px",
    state: "ready / progress / risk",
    usage: "준비됨, 진행, 리스크 상태를 색으로 구분합니다.",
    sample: "status",
  },
  {
    id: "icon-tile",
    name: "아이콘 타일",
    type: "badge",
    role: "카드 시각 식별자",
    className: ".icon-tile",
    radius: "8px",
    size: "34px x 34px",
    state: "category color",
    usage: "요소 카드와 상세 헤더에서 카테고리를 빠르게 구분합니다.",
    sample: "iconTile",
  },
  {
    id: "progress-track",
    name: "진행 바",
    type: "feedback",
    role: "준비도 표시",
    className: ".progress-track",
    radius: "999px",
    size: "height 8px",
    state: "0-100%",
    usage: "출시 준비 상태 비율을 시각적으로 보여줍니다.",
    sample: "progress",
  },
  {
    id: "check-row",
    name: "체크 행",
    type: "form",
    role: "점검 항목",
    className: ".check-row",
    radius: "8px",
    size: "padding 9px 10px",
    state: "checked / unchecked",
    usage: "상세 패널에서 검수 완료 여부를 표시합니다.",
    sample: "row",
  },
  {
    id: "dependency-row",
    name: "의존성 행",
    type: "button",
    role: "관련 요소 이동",
    className: ".dependency-row",
    radius: "8px",
    size: "padding 9px 10px",
    state: "default",
    usage: "상세 패널에서 연결된 요소로 이동합니다.",
    sample: "row",
  },
  {
    id: "viewport-preview",
    name: "뷰포트 미리보기",
    type: "panel",
    role: "디바이스 화면 샘플",
    className: ".viewport-preview .preview-surface",
    radius: "PC 8px, 모바일 28px",
    size: "PC 100%, 모바일 156x312",
    state: "pc / mobile",
    usage: "선택한 화면 기준의 레이아웃 느낌을 축약해서 보여줍니다.",
    sample: "device",
  },
  {
    id: "flow-node",
    name: "흐름 노드",
    type: "panel",
    role: "개발 단계",
    className: ".flow-node",
    radius: "8px",
    size: "min-height 108px",
    state: "기본",
    usage: "기획부터 운영까지 개발 흐름 단계를 표시합니다.",
    sample: "card",
  },
  {
    id: "toast",
    name: "토스트",
    type: "feedback",
    role: "작업 결과 알림",
    className: ".toast",
    radius: "8px",
    size: "max-width 320px",
    state: "hidden / visible",
    usage: "체크, 초기화, 내보내기 같은 작업 결과를 짧게 알려줍니다.",
    sample: "toast",
  },
  {
    id: "text-input",
    name: "텍스트 입력",
    type: "form",
    role: "단일 값 입력",
    className: ".sample-text-input",
    radius: "8px",
    size: "height 42px",
    state: "empty / focus / error / disabled",
    usage: "이름, 이메일, 검색어처럼 짧은 값을 입력받습니다.",
    sample: "textInput",
  },
  {
    id: "textarea",
    name: "텍스트 영역",
    type: "form",
    role: "긴 문장 입력",
    className: ".sample-textarea",
    radius: "8px",
    size: "min-height 86px",
    state: "empty / typing / error",
    usage: "문의 내용, 설명, 메모처럼 긴 텍스트를 입력받습니다.",
    sample: "textarea",
  },
  {
    id: "radio-group",
    name: "라디오 그룹",
    type: "form",
    role: "단일 선택",
    className: ".sample-radio-group",
    radius: "999px control",
    size: "option 28px+",
    state: "selected / unselected",
    usage: "배송 방식, 요금제, 공개 범위처럼 하나만 선택하는 옵션에 사용합니다.",
    sample: "radioGroup",
  },
  {
    id: "switch",
    name: "스위치",
    type: "form",
    role: "켜기/끄기",
    className: ".sample-switch",
    radius: "999px",
    size: "46px x 26px",
    state: "on / off / disabled",
    usage: "알림, 공개 여부, 자동 갱신처럼 즉시 켜고 끄는 설정에 사용합니다.",
    sample: "switch",
  },
  {
    id: "file-upload",
    name: "파일 업로드",
    type: "form",
    role: "파일 선택",
    className: ".sample-upload",
    radius: "8px",
    size: "min-height 92px",
    state: "empty / dragging / uploaded",
    usage: "프로필 이미지, 첨부파일, 문서 업로드 영역으로 사용합니다.",
    sample: "upload",
  },
  {
    id: "table",
    name: "데이터 테이블",
    type: "panel",
    role: "행/열 데이터 표시",
    className: ".sample-table",
    radius: "8px",
    size: "responsive rows",
    state: "default / sorted / selected",
    usage: "주문, 고객, 정산 내역처럼 비교와 스캔이 필요한 데이터를 표시합니다.",
    sample: "table",
  },
  {
    id: "tabs",
    name: "탭",
    type: "button",
    role: "같은 레벨 화면 전환",
    className: ".sample-tabs",
    radius: "8px",
    size: "item 34px",
    state: "active / inactive",
    usage: "프로필/보안/결제처럼 같은 맥락의 섹션을 전환합니다.",
    sample: "tabs",
  },
  {
    id: "pagination",
    name: "페이지네이션",
    type: "button",
    role: "목록 페이지 이동",
    className: ".sample-pagination",
    radius: "8px",
    size: "button 32px",
    state: "current / disabled",
    usage: "긴 목록이나 검색 결과를 여러 페이지로 나눌 때 사용합니다.",
    sample: "pagination",
  },
  {
    id: "modal",
    name: "모달",
    type: "panel",
    role: "중요 작업 확인",
    className: ".sample-modal",
    radius: "8px",
    size: "dialog",
    state: "open / closed",
    usage: "삭제 확인, 결제 확인, 필수 입력처럼 흐름을 잠시 멈춰야 할 때 사용합니다.",
    sample: "modal",
  },
  {
    id: "drawer",
    name: "드로어",
    type: "panel",
    role: "측면 보조 패널",
    className: ".sample-drawer",
    radius: "8px",
    size: "side panel",
    state: "open / closed",
    usage: "필터, 장바구니, 상세 정보처럼 현재 화면 옆에 보조 내용을 띄웁니다.",
    sample: "drawer",
  },
  {
    id: "dropdown",
    name: "드롭다운",
    type: "button",
    role: "메뉴 선택",
    className: ".sample-dropdown",
    radius: "8px",
    size: "trigger + menu",
    state: "closed / open",
    usage: "정렬, 계정 메뉴, 더보기 액션처럼 숨겨진 선택지를 제공합니다.",
    sample: "dropdown",
  },
  {
    id: "tooltip",
    name: "툴팁",
    type: "feedback",
    role: "짧은 보조 설명",
    className: ".sample-tooltip",
    radius: "6px",
    size: "content fit",
    state: "hover / focus",
    usage: "아이콘 버튼이나 어려운 용어에 짧은 설명을 붙입니다.",
    sample: "tooltip",
  },
  {
    id: "alert",
    name: "알럿",
    type: "feedback",
    role: "중요 메시지",
    className: ".sample-alert",
    radius: "8px",
    size: "full width message",
    state: "info / warning / error / success",
    usage: "저장 실패, 권한 안내, 시스템 점검처럼 사용자가 알아야 할 메시지를 표시합니다.",
    sample: "alert",
  },
  {
    id: "skeleton",
    name: "스켈레톤",
    type: "feedback",
    role: "로딩 자리 표시",
    className: ".sample-skeleton",
    radius: "6px",
    size: "content placeholder",
    state: "loading",
    usage: "데이터가 로딩되는 동안 실제 콘텐츠의 형태를 미리 보여줍니다.",
    sample: "skeleton",
  },
  {
    id: "empty-state",
    name: "빈 상태",
    type: "feedback",
    role: "데이터 없음 안내",
    className: ".sample-empty",
    radius: "8px",
    size: "centered block",
    state: "empty",
    usage: "검색 결과 없음, 아직 항목 없음 같은 상태에서 다음 행동을 안내합니다.",
    sample: "empty",
  },
  {
    id: "breadcrumb",
    name: "브레드크럼",
    type: "layout",
    role: "현재 위치 표시",
    className: ".sample-breadcrumb",
    radius: "없음",
    size: "inline path",
    state: "default",
    usage: "깊은 페이지에서 사용자가 현재 위치와 상위 경로를 알 수 있게 합니다.",
    sample: "breadcrumb",
  },
  {
    id: "topbar",
    name: "상단바",
    type: "layout",
    role: "전역 헤더",
    className: ".sample-topbar",
    radius: "8px",
    size: "height 52px",
    state: "desktop / mobile",
    usage: "검색, 알림, 계정 메뉴, 주요 액션을 화면 상단에 배치합니다.",
    sample: "topbar",
  },
  {
    id: "avatar",
    name: "아바타",
    type: "badge",
    role: "사용자 식별",
    className: ".sample-avatar",
    radius: "999px",
    size: "40px x 40px",
    state: "image / initials / offline",
    usage: "사용자, 담당자, 작성자를 작게 식별할 때 사용합니다.",
    sample: "avatar",
  },
  {
    id: "notification-item",
    name: "알림 항목",
    type: "panel",
    role: "알림 리스트 아이템",
    className: ".sample-notification",
    radius: "8px",
    size: "row item",
    state: "read / unread",
    usage: "새 댓글, 승인 요청, 시스템 알림을 목록 형태로 보여줍니다.",
    sample: "notification",
  },
];

const componentTypeLabel = {
  layout: "레이아웃",
  panel: "패널",
  button: "버튼",
  form: "폼",
  badge: "태그/배지",
  feedback: "피드백",
};

const state = {
  activeView: "components",
  category: "all",
  status: "all",
  priority: "all",
  device: "pc",
  componentType: "all",
  componentQuery: "",
  componentDevice: "pc",
  componentMode: "preview",
  selectedComponentId: uiComponents[0].id,
  practice: {
    padX: 18,
    padY: 18,
    radius: 8,
    fontSize: 16,
    lineHeight: 1.1,
  },
  componentText: {},
  componentSettings: {},
  uploadedImage: null,
  detectedElements: [],
  query: "",
  selectedId: elements[0].id,
  compact: false,
  checks: {},
};

const $ = (selector) => document.querySelector(selector);

function getFilteredElements() {
  const query = state.query.trim().toLowerCase();
  return elements.filter((item) => {
    const inCategory = state.category === "all" || item.category === state.category;
    const inStatus = state.status === "all" || item.status === state.status;
    const inPriority = state.priority === "all" || item.priority === state.priority;
    const haystack = [item.title, item.owner, item.summary, ...item.outputs, ...item.checks].join(" ").toLowerCase();
    return inCategory && inStatus && inPriority && (!query || haystack.includes(query));
  });
}

function renderCategories() {
  const nav = $("#categoryNav");
  if (!nav) return;
  nav.innerHTML = categories
    .map((category) => {
      const count = uiComponents.filter((item) => item.type === category.id).length;
      return `
        <button class="nav-item ${state.activeView === "components" && state.componentType === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
          <i data-lucide="${category.icon}"></i>
          <span>${category.label}</span>
          <small>${count}</small>
        </button>
      `;
    })
    .join("");

  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = "components";
      state.componentType = button.dataset.category;
      state.componentMode = "preview";
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function selectComponentPage(id, options = {}) {
  if (!uiComponents.some((item) => item.id === id)) return;
  state.activeView = "components";
  state.componentType = "all";
  state.componentMode = "detail";
  state.selectedComponentId = id;
  render();
}

function renderComponentSideNav() {
  const nav = $("#componentSideNav");
  if (!nav) return;

  const iconByType = {
    layout: "layout-template",
    panel: "panel-top",
    button: "mouse-pointer-click",
    form: "text-cursor-input",
    badge: "badge",
    feedback: "message-square",
  };

  nav.innerHTML = uiComponents
    .map((item) => `
      <button class="component-side-item ${state.activeView === "components" && state.selectedComponentId === item.id ? "is-active" : ""}" type="button" data-side-component="${item.id}">
        <i data-lucide="${iconByType[item.type]}"></i>
        <span>${item.name}</span>
        <small>${componentTypeLabel[item.type]}</small>
      </button>
    `)
    .join("");

  nav.querySelectorAll("[data-side-component]").forEach((button) => {
    button.addEventListener("click", () => {
      selectComponentPage(button.dataset.sideComponent);
    });
  });
}

function renderActiveView() {
  document.querySelectorAll(".view-section").forEach((section) => {
    section.classList.toggle("is-hidden", section.dataset.view !== state.activeView);
  });

  const sidebarButton = $("#componentSidebarButton");
  if (sidebarButton) {
    sidebarButton.classList.toggle("is-active", state.activeView === "components" && state.componentType === "all");
  }
  const analysisButton = $("#imageAnalysisButton");
  if (analysisButton) {
    analysisButton.classList.toggle("is-active", state.activeView === "analysis");
  }

  const eyebrow = $(".topbar .eyebrow");
  eyebrow.textContent = state.activeView === "analysis" ? "스크린샷 웹서비스 UI 분석" : "웹서비스 UI 미리보기";
}

function renderMetrics(filtered) {
  const owners = new Set(elements.map((item) => item.owner));
  $("#totalCount").textContent = elements.length;
  $("#activeCount").textContent = elements.filter((item) => item.status === "progress").length;
  $("#riskCount").textContent = elements.filter((item) => item.status === "risk").length;
  $("#ownerCount").textContent = owners.size;
  $("#resultCopy").textContent = `${filtered.length}개 요소가 현재 조건과 일치합니다.`;
}

function getFilteredComponents() {
  const query = state.componentQuery.trim().toLowerCase();
  return uiComponents.filter((item) => {
    const inType = state.componentType === "all" || item.type === state.componentType;
    const haystack = [
      item.name,
      item.type,
      componentTypeLabel[item.type],
      item.role,
      item.className,
      item.radius,
      item.size,
      item.state,
      item.usage,
    ].join(" ").toLowerCase();
    return inType && (!query || haystack.includes(query));
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getComponentText(item) {
  return state.componentText[item.id] ?? getComponentExamples(item)[0] ?? item.name;
}

function getComponentSettings(item) {
  if (!state.componentSettings[item.id]) {
    state.componentSettings[item.id] = { ...state.practice };
  }
  return state.componentSettings[item.id];
}

function getComponentExamples(item) {
  const examples = {
    "app-shell": ["관리자 콘솔 기본 구조", "SaaS 대시보드", "모바일 1열 앱"],
    sidebar: ["좌측 메뉴", "설정 내비게이션", "카테고리 탐색"],
    workspace: ["본문 작업 영역", "리스트+상세 화면", "편집 캔버스"],
    metric: ["매출 요약", "방문자 수", "진행률 지표"],
    "metric-label": ["전체 기준", "검토중", "완료율"],
    "metric-value": ["61", "7", "84%"],
    "metric-caption": ["전월 대비 +8", "오늘 2건 추가", "목표 90%"],
    "inventory-pane": ["상품 목록", "고객 목록", "콘텐츠 카드 목록"],
    "detail-pane": ["주문 상세", "사용자 프로필", "설정 상세"],
    "element-card": ["상품 카드", "게시글 카드", "템플릿 선택 카드"],
    "primary-button": ["저장", "결제하기", "다음 단계"],
    "icon-button": ["닫기", "초기화", "새로고침"],
    "ghost-button": ["취소", "더보기", "보조 액션"],
    "nav-item": ["사이드 메뉴", "마이페이지 탭", "관리 메뉴"],
    "search-box": ["상품 검색", "고객 검색", "문서 검색"],
    "select-wrap": ["정렬 선택", "카테고리 선택", "상태 선택"],
    "segmented-control": ["기간 전환", "상태 필터", "보기 방식 전환"],
    "device-control": ["PC/모바일 미리보기", "반응형 테스트", "브레이크포인트 확인"],
    pill: ["카테고리 태그", "담당자 표시", "키워드 라벨"],
    "status-pill": ["승인 상태", "배송 상태", "작업 상태"],
    "icon-tile": ["앱 아이콘", "카테고리 심볼", "기능 구분"],
    "progress-track": ["업로드 진행률", "온보딩 단계", "목표 달성률"],
    "check-row": ["할 일 목록", "약관 동의", "검수 체크리스트"],
    "dependency-row": ["관련 문서 이동", "연결 항목", "참조 링크"],
    "viewport-preview": ["반응형 검수", "디바이스 비교", "레이아웃 프리뷰"],
    "flow-node": ["가입 단계", "결제 흐름", "작업 프로세스"],
    toast: ["저장 완료", "오류 알림", "복사 완료"],
    "text-input": ["이메일 주소", "사용자 이름", "쿠폰 코드"],
    textarea: ["문의 내용을 입력하세요", "관리자 메모", "상품 설명"],
    "radio-group": ["무료 배송", "유료 배송", "직접 수령"],
    switch: ["알림 켜기", "프로필 공개", "자동 갱신"],
    "file-upload": ["파일 선택", "이미지 업로드", "문서 첨부"],
    table: ["주문 내역", "고객 목록", "정산 데이터"],
    tabs: ["상세 정보", "리뷰", "문의"],
    pagination: ["검색 결과", "주문 목록", "게시글 목록"],
    modal: ["삭제 확인", "결제 확인", "초대 보내기"],
    drawer: ["필터 열기", "장바구니", "상세 정보"],
    dropdown: ["최신순", "계정 메뉴", "더보기"],
    tooltip: ["도움말", "권한 설명", "단축키 안내"],
    alert: ["저장에 실패했습니다", "권한이 필요합니다", "점검 예정"],
    skeleton: ["목록 로딩", "카드 로딩", "상세 로딩"],
    "empty-state": ["결과가 없습니다", "아직 항목이 없습니다", "첫 항목 만들기"],
    breadcrumb: ["상품 상세", "설정", "결제 내역"],
    topbar: ["대시보드", "검색", "계정"],
    avatar: ["김민수", "PM", "관리자"],
    "notification-item": ["새 댓글", "승인 요청", "결제 완료"],
  };

  return examples[item.id] ?? ["목록 화면", "상세 화면", "설정 화면"];
}

function getComponentUsageCases(item) {
  const cases = {
    "primary-button": [
      ["회원가입 화면", "필수 입력을 마친 뒤 다음 단계로 이동하는 CTA로 사용합니다."],
      ["결제 화면", "최종 결제, 주문 확정처럼 되돌리기 어려운 주요 액션에 사용합니다."],
      ["설정 화면", "변경한 내용을 저장하는 가장 중요한 액션으로 배치합니다."],
    ],
    "search-box": [
      ["상품 목록", "상품명, SKU, 브랜드명을 빠르게 찾는 검색 필드로 사용합니다."],
      ["관리자 콘솔", "고객명, 이메일, 주문번호를 검색하는 상단 도구 영역에 배치합니다."],
      ["문서 센터", "도움말, 정책, 가이드 문서를 찾는 진입점으로 사용합니다."],
    ],
    "status-pill": [
      ["주문 목록", "결제 완료, 배송 중, 취소됨 같은 상태를 한눈에 구분합니다."],
      ["승인 플로우", "대기, 승인, 반려 상태를 행 안에서 짧게 표시합니다."],
      ["작업 보드", "진행 중, 위험, 완료 같은 태스크 상태를 색상과 함께 보여줍니다."],
    ],
    metric: [
      ["대시보드 첫 화면", "매출, 방문자, 전환율 같은 핵심 숫자를 크게 보여줍니다."],
      ["운영 리포트", "오늘 처리 건수, 실패율, 평균 응답 시간처럼 모니터링 지표를 표시합니다."],
      ["팀 성과 화면", "목표 대비 달성률이나 전월 대비 증감을 요약합니다."],
    ],
    "detail-pane": [
      ["주문 상세", "목록에서 선택한 주문의 배송지, 결제, 처리 이력을 보여줍니다."],
      ["사용자 관리", "선택한 사용자의 프로필, 권한, 최근 활동을 확인합니다."],
      ["설정 상세", "왼쪽 목록에서 고른 설정 항목의 세부 옵션을 편집합니다."],
    ],
    toast: [
      ["저장 완료", "사용자가 저장 버튼을 눌렀을 때 성공 여부를 짧게 알려줍니다."],
      ["복사 완료", "링크나 코드가 클립보드에 복사됐음을 화면 하단에 표시합니다."],
      ["오류 알림", "작업 실패를 흐름을 막지 않는 방식으로 알려줍니다."],
    ],
  };

  return cases[item.id] ?? getComponentExamples(item).map((example) => [
    example,
    `${item.name}은 ${example} 같은 실제 화면에서 ${item.role} 역할로 사용합니다.`,
  ]);
}

function renderComponentSample(sample, text = "샘플 텍스트") {
  const safeText = escapeHtml(text);
  const samples = {
    panel: `<div class="sample-panel"></div>`,
    card: `<div class="sample-card">${safeText}<span></span><span></span></div>`,
    metric: `<div class="sample-metric"><span>지표 값</span><strong>${safeText}</strong></div>`,
    button: `<button class="sample-button" type="button">${safeText}</button>`,
    ghost: `<button class="ghost-button" type="button">${safeText}</button>`,
    icon: `<button class="sample-icon-button" type="button"><i data-lucide="rotate-ccw"></i></button>`,
    nav: `<button class="nav-item" type="button"><i data-lucide="layout-dashboard"></i><span>${safeText}</span><small>8</small></button>`,
    field: `<div class="sample-field"></div>`,
    segments: `<div class="segmented-control"><button class="is-active" type="button">${safeText}</button><button type="button">B</button></div>`,
    pill: `<span class="sample-pill">${safeText}</span>`,
    status: `<span class="sample-status">${safeText}</span>`,
    iconTile: `<span class="icon-tile" style="background:#0f766e"><i data-lucide="blocks"></i></span>`,
    progress: `<div class="sample-progress"><span></span></div>`,
    row: `<div class="sample-row"><span>${safeText}</span><input type="checkbox" checked /></div>`,
    sidebar: `<div class="sample-sidebar">${safeText}</div>`,
    device: `<div class="sample-device"></div>`,
    toast: `<div class="toast is-visible" style="position:static; transform:none; opacity:1;">${safeText}</div>`,
    textInput: `<div class="sample-text-input">${safeText}</div>`,
    textarea: `<div class="sample-textarea">${safeText}</div>`,
    radioGroup: `<div class="sample-radio-group"><span></span><strong>${safeText}</strong><span></span></div>`,
    switch: `<div class="sample-switch"><span></span></div>`,
    upload: `<div class="sample-upload"><i data-lucide="upload"></i><strong>${safeText}</strong></div>`,
    table: `<div class="sample-table"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    tabs: `<div class="sample-tabs"><span>${safeText}</span><span>탭</span></div>`,
    pagination: `<div class="sample-pagination"><span>1</span><span>2</span><span>3</span></div>`,
    modal: `<div class="sample-modal"><strong>${safeText}</strong><span></span><button type="button">확인</button></div>`,
    drawer: `<div class="sample-drawer"><strong>${safeText}</strong><span></span><span></span></div>`,
    dropdown: `<div class="sample-dropdown"><button type="button">${safeText}</button><span></span><span></span></div>`,
    tooltip: `<div class="sample-tooltip"><button type="button">?</button><span>${safeText}</span></div>`,
    alert: `<div class="sample-alert">${safeText}</div>`,
    skeleton: `<div class="sample-skeleton"><span></span><span></span><span></span></div>`,
    empty: `<div class="sample-empty"><i data-lucide="inbox"></i><strong>${safeText}</strong></div>`,
    breadcrumb: `<div class="sample-breadcrumb"><span>홈</span><b>/</b><span>${safeText}</span></div>`,
    topbar: `<div class="sample-topbar"><strong>${safeText}</strong><span></span><span></span></div>`,
    avatar: `<div class="sample-avatar">${safeText.slice(0, 2)}</div>`,
    notification: `<div class="sample-notification"><span></span><div><strong>${safeText}</strong><small>방금 전</small></div></div>`,
  };
  return samples[sample] || samples.panel;
}

function renderUsageMock(item, title, text) {
  const sample = renderComponentSample(item.sample, text);
  const safeTitle = escapeHtml(title);
  const key = title.replace(/\s/g, "");

  const scenarioMocks = {
    상품카드: `
      <div class="usage-mock usage-product-card">
        <div class="usage-image"></div>
        <div class="usage-copy">
          <strong>프리미엄 플랜</strong>
          <span>월간 구독 상품</span>
        </div>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    게시글카드: `
      <div class="usage-mock usage-post-card">
        <div class="usage-avatar"></div>
        <div class="usage-copy">
          <strong>릴리즈 노트</strong>
          <span>새 기능과 변경 사항을 요약합니다.</span>
        </div>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    템플릿선택카드: `
      <div class="usage-mock usage-template-picker">
        <div class="usage-template-grid"><span></span><span></span><span></span></div>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    회원가입화면: `
      <div class="usage-mock usage-signup">
        <strong>계정 만들기</strong>
        <span></span><span></span>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    결제화면: `
      <div class="usage-mock usage-checkout">
        <div class="usage-row"><strong>주문 합계</strong><b>49,000원</b></div>
        <div class="usage-row"><span></span><span></span></div>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    설정화면: `
      <div class="usage-mock usage-settings">
        <div class="usage-row"><strong>프로필 공개</strong><span></span></div>
        <div class="usage-row"><strong>알림 수신</strong><span></span></div>
        <div class="usage-inline">${sample}</div>
      </div>
    `,
    상품목록: `
      <div class="usage-mock usage-list-page">
        <div class="usage-toolbar">${sample}<span></span></div>
        <div class="usage-table"><span></span><span></span><span></span></div>
      </div>
    `,
    관리자콘솔: `
      <div class="usage-mock usage-admin">
        <div class="usage-mini-sidebar"></div>
        <div class="usage-admin-body">${sample}<span></span><span></span></div>
      </div>
    `,
    문서센터: `
      <div class="usage-mock usage-docs">
        <strong>무엇을 찾고 있나요?</strong>
        ${sample}
        <div class="usage-doc-list"><span></span><span></span><span></span></div>
      </div>
    `,
    주문목록: `
      <div class="usage-mock usage-list-page">
        <div class="usage-table usage-with-badges">
          <div><span></span>${sample}</div>
          <div><span></span>${sample}</div>
          <div><span></span>${sample}</div>
        </div>
      </div>
    `,
    승인플로우: `
      <div class="usage-mock usage-kanban">
        <div><strong>대기</strong>${sample}</div>
        <div><strong>검토</strong>${sample}</div>
        <div><strong>완료</strong>${sample}</div>
      </div>
    `,
    작업보드: `
      <div class="usage-mock usage-board">
        <div class="usage-task"><span></span>${sample}</div>
        <div class="usage-task"><span></span>${sample}</div>
      </div>
    `,
    대시보드첫화면: `
      <div class="usage-mock usage-dashboard">
        <div class="usage-chart"></div>
        <div class="usage-metric-slot">${sample}</div>
      </div>
    `,
    운영리포트: `
      <div class="usage-mock usage-report">
        <div class="usage-row"><strong>오늘 처리 건수</strong>${sample}</div>
        <div class="usage-row"><strong>실패율</strong><span></span></div>
      </div>
    `,
    팀성과화면: `
      <div class="usage-mock usage-score">
        <div class="usage-rank">1</div>
        <div class="usage-metric-slot">${sample}</div>
      </div>
    `,
    주문상세: `
      <div class="usage-mock usage-detail-layout">
        <div class="usage-list-column"><span></span><span></span><span></span></div>
        <div class="usage-detail-slot">${sample}</div>
      </div>
    `,
    사용자관리: `
      <div class="usage-mock usage-user-admin">
        <div class="usage-avatar"></div>
        <div class="usage-detail-slot">${sample}</div>
      </div>
    `,
    설정상세: `
      <div class="usage-mock usage-settings-detail">
        <div class="usage-tabs"><span></span><span></span></div>
        <div class="usage-detail-slot">${sample}</div>
      </div>
    `,
    저장완료: `
      <div class="usage-mock usage-feedback-screen">
        <div class="usage-content-lines"><span></span><span></span></div>
        <div class="usage-toast-slot">${sample}</div>
      </div>
    `,
    복사완료: `
      <div class="usage-mock usage-feedback-screen">
        <div class="usage-code-box"></div>
        <div class="usage-toast-slot">${sample}</div>
      </div>
    `,
    오류알림: `
      <div class="usage-mock usage-feedback-screen">
        <div class="usage-error-field"></div>
        <div class="usage-toast-slot">${sample}</div>
      </div>
    `,
  };

  if (scenarioMocks[key]) {
    return scenarioMocks[key];
  }

  const mockByType = {
    layout: `
      <div class="usage-mock usage-mock-layout">
        <div class="usage-mock-sidebar">
          <strong>${text}</strong>
          <span></span><span></span><span></span>
        </div>
        <div class="usage-mock-body">
          <span></span><span></span><span></span>
          <div class="usage-layout-cards"><b></b><b></b><b></b></div>
        </div>
      </div>
    `,
    panel: `
      <div class="usage-mock usage-mock-page">
        <div class="usage-mock-toolbar"><strong>${safeTitle}</strong><span></span></div>
        <div class="usage-mock-content">${sample}</div>
      </div>
    `,
    button: `
      <div class="usage-mock usage-mock-form">
        <span></span><span></span><span></span>
        <div class="usage-mock-actions">${sample}</div>
      </div>
    `,
    form: `
      <div class="usage-mock usage-mock-form">
        <strong>${safeTitle}</strong>
        ${sample}
        <span></span><span></span>
      </div>
    `,
    badge: `
      <div class="usage-mock usage-mock-list">
        <div><span></span>${sample}</div>
        <div><span></span>${sample}</div>
        <div><span></span>${sample}</div>
      </div>
    `,
    feedback: `
      <div class="usage-mock usage-mock-feedback">
        <div class="usage-mock-content"><span></span><span></span></div>
        ${sample}
      </div>
    `,
  };

  return mockByType[item.type] ?? `
    <div class="usage-mock usage-mock-page">
      <div class="usage-mock-content">${sample}</div>
    </div>
  `;
}

function renderComponents() {
  const filtered = getFilteredComponents();
  const grid = $("#componentGrid");
  const exampleSection = document.querySelector(".example-page-section");
  const componentLayout = document.querySelector(".component-layout");
  const componentSection = $("#componentSection");
  const isDetailMode = state.componentMode === "detail";

  componentSection?.classList.toggle("is-preview-mode", !isDetailMode);
  componentSection?.classList.toggle("is-detail-mode", isDetailMode);
  exampleSection?.classList.toggle("is-hidden", isDetailMode);
  componentLayout?.classList.toggle("is-hidden", !isDetailMode);

  $("#componentTypeFilter").querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.type === state.componentType);
  });

  $("#componentDeviceFilter").querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.componentDevice === state.componentDevice);
  });

  $("#sidebarDeviceControl")?.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sidebarDevice === state.componentDevice);
  });

  if (!grid) {
    const selected = uiComponents.find((item) => item.id === state.selectedComponentId) ?? uiComponents[0];
    renderComponentViewer(isDetailMode ? selected : null);
    return;
  }

  if (!filtered.length) {
    grid.innerHTML = `<article class="component-card"><p>조건에 맞는 웹서비스 UI가 없습니다.</p></article>`;
    renderComponentViewer(null);
    return;
  }

  if (!filtered.some((item) => item.id === state.selectedComponentId)) {
    state.selectedComponentId = filtered[0].id;
  }

  grid.innerHTML = filtered
    .map((item) => `
      <article class="component-card ${state.selectedComponentId === item.id ? "is-selected" : ""}" data-component-id="${item.id}" tabindex="0" role="button" aria-label="${item.name} 샘플 보기">
        <div class="component-top">
          <div>
            <h3>${item.name}</h3>
            <p>${item.role}</p>
          </div>
          <span class="pill">${componentTypeLabel[item.type]}</span>
        </div>
        <div class="component-sample">${renderComponentSample(item.sample, getComponentText(item))}</div>
        <div class="component-specs">
          <div><span>클래스</span><strong class="component-class">${item.className}</strong></div>
          <div><span>라운드</span><strong>${item.radius}</strong></div>
          <div><span>크기</span><strong>${item.size}</strong></div>
          <div><span>상태</span><strong>${item.state}</strong></div>
        </div>
        <p>${item.usage}</p>
        <div class="component-examples">
          <span>활용 예시</span>
          <div>
            ${getComponentExamples(item).map((example) => `<small>${example}</small>`).join("")}
          </div>
        </div>
      </article>
    `)
    .join("");

  grid.querySelectorAll(".component-card").forEach((card) => {
    const select = () => {
      state.selectedComponentId = card.dataset.componentId;
      renderComponents();
      refreshIcons();
    };
    card.addEventListener("click", select);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });
  });

  renderComponentViewer(uiComponents.find((item) => item.id === state.selectedComponentId));
}

function renderExamplePage() {
  const page = $("#uiExamplePage");
  if (!page) return;

  const selectedId = state.selectedComponentId;
  const mark = (id, extraClass = "") => `data-example-component="${id}" class="example-hotspot ${extraClass} ${selectedId === id ? "is-selected" : ""}"`;

  page.classList.remove("is-pc", "is-iphone", "is-galaxy");
  page.classList.add(`is-${state.componentDevice}`);

  page.innerHTML = `
    <div ${mark("app-shell", `example-app-frame is-${state.componentDevice}`)}>
      <aside ${mark("sidebar", "example-side-nav")}>
        <div class="example-brand-row">
          <button ${mark("icon-tile", "example-icon-tile")} type="button"><i data-lucide="shield-check"></i></button>
          <div>
            <strong>체크리스트 마스터</strong>
            <span>운영 관리 콘솔</span>
          </div>
        </div>
        <nav>
          <button ${mark("nav-item", "example-nav-item is-active")} type="button"><i data-lucide="layout-dashboard"></i><span>대시보드</span></button>
          <button ${mark("nav-item", "example-nav-item")} type="button"><i data-lucide="clipboard-list"></i><span>요청 현황</span></button>
          <button ${mark("nav-item", "example-nav-item")} type="button"><i data-lucide="settings"></i><span>설정</span></button>
        </nav>
        <div ${mark("progress-track", "example-side-progress")}><span style="width:68%"></span></div>
      </aside>

      <main ${mark("workspace", "example-workspace")}>
        <header ${mark("topbar", "example-topbar")}>
          <div>
            <div ${mark("breadcrumb", "example-breadcrumb")}>홈 / 점검 / 요청 현황</div>
            <h3>체크리스트 운영 현황</h3>
          </div>
          <label ${mark("search-box", "example-search")}>
            <i data-lucide="search"></i>
            <input type="search" value="보안 점검" aria-label="예시 검색어" />
          </label>
          <button ${mark("icon-button", "example-icon-button")} type="button" aria-label="알림"><i data-lucide="bell"></i></button>
          <button ${mark("avatar", "example-avatar")} type="button">김</button>
        </header>

        <section class="example-summary-row">
          <article ${mark("metric", "example-metric")}>
            <span ${mark("metric-label", "example-metric-label")}>전체 기준</span>
            <strong ${mark("metric-value", "example-metric-value")}>61</strong>
            <small ${mark("metric-caption", "example-metric-caption")}>전월 대비 +8</small>
          </article>
          <article ${mark("metric", "example-metric")}>
            <span ${mark("metric-label", "example-metric-label")}>검토중</span>
            <strong ${mark("metric-value", "example-metric-value")}>7</strong>
            <small ${mark("metric-caption", "example-metric-caption")}>오늘 2건 추가</small>
          </article>
          <article ${mark("metric", "example-metric")}>
            <span ${mark("metric-label", "example-metric-label")}>완료율</span>
            <strong ${mark("metric-value", "example-metric-value")}>84%</strong>
            <small ${mark("metric-caption", "example-metric-caption")}>목표 90%</small>
          </article>
        </section>

        <section ${mark("inventory-pane", "example-toolbar-panel")}>
          <div ${mark("tabs", "example-tabs")}>
            <button type="button" class="is-active">요청 현황</button>
            <button type="button">최근 검토</button>
            <button type="button">리포트</button>
          </div>
          <div ${mark("segmented-control", "example-segments")}>
            <button type="button" class="is-active">전체</button>
            <button type="button">작성중</button>
            <button type="button">검토중</button>
          </div>
          <label ${mark("select-wrap", "example-select")}>
            <span>정렬</span>
            <select><option>최근 업데이트순</option></select>
          </label>
          <button ${mark("ghost-button", "example-ghost")} type="button"><i data-lucide="sliders-horizontal"></i>필터</button>
          <button ${mark("primary-button", "example-primary")} type="button"><i data-lucide="plus"></i>새 요청</button>
        </section>

        <section ${mark("alert", "example-alert")}>
          <i data-lucide="info"></i>
          <strong>보안 점검 기준 3개가 오늘 만료됩니다.</strong>
          <span>담당자에게 검토 요청을 보내세요.</span>
        </section>

        <section class="example-main-grid">
          <article ${mark("table", "example-table-card")}>
            <div class="example-card-heading">
              <strong>최근 요청</strong>
              <button ${mark("dropdown", "example-dropdown")} type="button">작업 <i data-lucide="chevron-down"></i></button>
            </div>
            <div class="example-table">
              <div class="example-table-head"><span>상태</span><span>제목</span><span>담당</span><span>일자</span></div>
              <button ${mark("element-card", "example-table-row")} type="button">
                <span ${mark("status-pill", "example-status green")}>작성중</span>
                <strong>인증 로그 관리</strong>
                <span ${mark("pill", "example-pill")}>Security</span>
                <span>2026. 5. 7.</span>
              </button>
              <button ${mark("element-card", "example-table-row")} type="button">
                <span ${mark("status-pill", "example-status yellow")}>검토중</span>
                <strong>입출력 관리</strong>
                <span ${mark("pill", "example-pill")}>Backend</span>
                <span>2026. 5. 7.</span>
              </button>
              <button ${mark("empty-state", "example-empty-row")} type="button">
                <i data-lucide="inbox"></i>
                <span>완료된 항목이 없습니다.</span>
              </button>
            </div>
            <div ${mark("pagination", "example-pagination")}>
              <button type="button">이전</button><button type="button" class="is-active">1</button><button type="button">2</button><button type="button">다음</button>
            </div>
          </article>

          <aside ${mark("detail-pane", "example-detail-panel")}>
            <div class="example-card-heading">
              <strong>요청 상세</strong>
              <span ${mark("tooltip", "example-tooltip")}><i data-lucide="help-circle"></i><em>선택한 요청의 상세 정보</em></span>
            </div>
            <label ${mark("text-input", "example-field")}>
              <span>요청 제목</span>
              <input type="text" value="인증 로그 관리" />
            </label>
            <label ${mark("textarea", "example-textarea")}>
              <span>검토 메모</span>
              <textarea>로그 보존 기간과 접근 권한을 확인합니다.</textarea>
            </label>
            <div ${mark("radio-group", "example-radio")}>
              <label><input type="radio" checked /> 필수</label>
              <label><input type="radio" /> 선택</label>
            </div>
            <label ${mark("switch", "example-switch-row")}>
              <span>검토 완료 알림</span>
              <i></i>
            </label>
            <label ${mark("file-upload", "example-upload")}>
              <i data-lucide="upload-cloud"></i>
              <span>증빙 파일 업로드</span>
            </label>
            <label ${mark("check-row", "example-check-row")}>
              <input type="checkbox" checked />
              <span>개인정보 포함 여부 확인</span>
            </label>
            <button ${mark("dependency-row", "example-dependency")} type="button">
              <span>관련 기준 보기</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </aside>
        </section>

        <section ${mark("progress-track", "example-progress-panel")}>
          <div class="example-card-heading">
            <strong>전체 검토 진행률</strong>
            <span>84%</span>
          </div>
          <div class="example-progress-bar" aria-label="전체 검토 진행률 84%">
            <span style="width:84%"></span>
          </div>
          <p>작성중 5건, 검토중 1건을 완료하면 이번 주 점검이 끝납니다.</p>
        </section>

        <section class="example-lower-grid">
          <article ${mark("drawer", "example-drawer-panel")}>
            <strong>필터 드로어</strong>
            <p>카테고리, 담당자, 기간 조건을 오른쪽 패널에서 조정합니다.</p>
            <div class="example-filter-lines"><span></span><span></span><span></span></div>
          </article>
          <article ${mark("modal", "example-modal-card")}>
            <strong>삭제 확인 모달</strong>
            <p>중요 작업을 실행하기 전에 사용자의 확인을 받습니다.</p>
            <div><button type="button">취소</button><button type="button">삭제</button></div>
          </article>
          <article ${mark("notification-item", "example-notification")}>
            <span></span>
            <div>
              <strong>승인 요청이 도착했습니다.</strong>
              <small>방금 전</small>
            </div>
          </article>
        </section>

        <section class="example-feedback-row">
          <div ${mark("skeleton", "example-skeleton")}>
            <span></span><span></span><span></span>
          </div>
          <div ${mark("flow-node", "example-flow-node")}>
            <strong>작성중</strong>
            <span>검토중</span>
            <span>검토완료</span>
          </div>
          <div ${mark("toast", "example-toast")}>저장 완료</div>
          <div ${mark("device-control", "example-device-control")}>
            <button type="button" class="is-active">PC</button><button type="button">모바일</button>
          </div>
          <div ${mark("viewport-preview", "example-viewport")}>
            <span></span><span></span><span></span>
          </div>
        </section>
      </main>
    </div>
  `;

  page.querySelectorAll("[data-example-component]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const id = node.dataset.exampleComponent;
      if (!uiComponents.some((item) => item.id === id)) return;
      selectComponentPage(id);
    });
  });

}

function renderComponentViewer(item) {
  const viewer = $("#componentViewer");
  const device = devices[state.componentDevice];

  if (!item) {
    viewer.innerHTML = `
      <div class="detail-empty">
        <i data-lucide="component"></i>
        <p>웹서비스 UI를 선택하면 실제 형태가 크게 표시됩니다.</p>
      </div>
    `;
    return;
  }

  const selectedText = getComponentText(item);
  const settings = getComponentSettings(item);

  viewer.innerHTML = `
    <div class="viewer-content">
      <div class="viewer-header">
        <div class="chips">
          <span class="pill">${componentTypeLabel[item.type]}</span>
          <span class="pill">${item.state}</span>
          <span class="pill">${device.title}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.role}</p>
      </div>
      <div class="viewer-stage is-${state.componentDevice}">
        <div class="device-frame is-${state.componentDevice}">
          <div class="device-frame-content">
            <div class="viewer-tunable" id="viewerTunable" style="--practice-pad-x:${settings.padX}px; --practice-pad-y:${settings.padY}px; --practice-radius:${settings.radius}px; --practice-font-size:${settings.fontSize}px; --practice-line-height:${settings.lineHeight};">
              ${renderComponentSample(item.sample, selectedText)}
            </div>
          </div>
        </div>
      </div>
      <p class="device-test-copy">${device.copy}</p>
      <div class="viewer-examples">
        <strong>이 요소에 넣어볼 실제 문구</strong>
        <div class="viewer-example-list">
          ${getComponentExamples(item).map((example) => `<button type="button" data-example="${escapeHtml(example)}">${example}</button>`).join("")}
        </div>
      </div>
      <div class="practice-controls" aria-label="샘플 스타일 연습">
        <div class="text-practice">
          <label for="sampleTextControl">요소 텍스트</label>
          <input id="sampleTextControl" type="text" value="${escapeHtml(selectedText)}" placeholder="샘플에 넣을 텍스트" />
        </div>
        <div class="practice-control">
          <label for="padXControl">좌우 패딩</label>
          <input id="padXControl" data-practice="padX" type="range" min="0" max="48" value="${settings.padX}" />
          <output>${settings.padX}px</output>
        </div>
        <div class="practice-control">
          <label for="padYControl">상하 패딩</label>
          <input id="padYControl" data-practice="padY" type="range" min="0" max="48" value="${settings.padY}" />
          <output>${settings.padY}px</output>
        </div>
        <div class="practice-control">
          <label for="radiusControl">라운드</label>
          <input id="radiusControl" data-practice="radius" type="range" min="0" max="40" value="${settings.radius}" />
          <output>${settings.radius}px</output>
        </div>
        <div class="practice-control">
          <label for="fontSizeControl">텍스트 크기</label>
          <input id="fontSizeControl" data-practice="fontSize" type="range" min="10" max="48" value="${settings.fontSize}" />
          <output>${settings.fontSize}px</output>
        </div>
        <div class="practice-control">
          <label for="lineHeightControl">줄간격</label>
          <input id="lineHeightControl" data-practice="lineHeight" type="range" min="1.1" max="2.4" step="0.1" value="${settings.lineHeight}" />
          <output>${settings.lineHeight}</output>
        </div>
      </div>
      <div class="viewer-spec-table">
        <div class="viewer-spec-row"><span>클래스</span><strong class="component-class">${item.className}</strong></div>
        <div class="viewer-spec-row"><span>라운드</span><strong>${item.radius}</strong></div>
        <div class="viewer-spec-row"><span>크기</span><strong>${item.size}</strong></div>
        <div class="viewer-spec-row"><span>상태</span><strong>${item.state}</strong></div>
      </div>
      <p class="viewer-note">${item.usage}</p>
      <div class="viewer-usage-cases">
        <strong>실제 사용 UI 예시</strong>
        <div class="usage-case-row">
          ${getComponentUsageCases(item).map(([title, description]) => `
            <article class="usage-case-card">
              <h4>${title}</h4>
              ${renderUsageMock(item, title, getComponentText(item))}
              <p>${description}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  viewer.querySelectorAll("[data-practice]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const key = event.target.dataset.practice;
      const value = Number(event.target.value);
      const settings = getComponentSettings(item);
      settings[key] = value;
      const tunable = $("#viewerTunable");
      if (tunable) {
        tunable.style.setProperty("--practice-pad-x", `${settings.padX}px`);
        tunable.style.setProperty("--practice-pad-y", `${settings.padY}px`);
        tunable.style.setProperty("--practice-radius", `${settings.radius}px`);
        tunable.style.setProperty("--practice-font-size", `${settings.fontSize}px`);
        tunable.style.setProperty("--practice-line-height", `${settings.lineHeight}`);
      }
      event.target.nextElementSibling.textContent = key === "lineHeight" ? `${value}` : `${value}px`;
      renderReadiness();
    });
  });

  const textInput = $("#sampleTextControl");
  if (textInput) {
    textInput.addEventListener("input", (event) => {
      state.componentText[item.id] = event.target.value;
      const tunable = $("#viewerTunable");
      if (tunable) {
        tunable.innerHTML = renderComponentSample(item.sample, event.target.value);
      }
      const selectedCardSample = document.querySelector(`.component-card[data-component-id="${item.id}"] .component-sample`);
      if (selectedCardSample) {
        selectedCardSample.innerHTML = renderComponentSample(item.sample, event.target.value);
      }
      refreshIcons();
    });
  }

  viewer.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => {
      state.componentText[item.id] = button.dataset.example;
      renderComponents();
      refreshIcons();
    });
  });
}

function renderDevice() {
  const device = devices[state.device];
  $("#deviceTitle").textContent = device.title;
  $("#deviceCopy").textContent = device.copy;
  $("#deviceBadge").textContent = device.badge;
  $("#previewLabel").textContent = device.label;
  $("#deviceSpecs").innerHTML = device.specs
    .map(([label, value]) => `
      <div class="spec-item">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");

  const preview = $("#viewportPreview");
  preview.classList.remove("is-pc", "is-iphone", "is-galaxy");
  preview.classList.add(`is-${state.device}`);
}

function createDemoDetections() {
  return [
    {
      id: "metric",
      label: "요약/통계 카드",
      type: "panel",
      confidence: 0.92,
      reason: "상단에 숫자와 짧은 라벨이 반복되는 카드 패턴",
    },
    {
      id: "status-pill",
      label: "상태 배지",
      type: "badge",
      confidence: 0.89,
      reason: "작성중, 검토중처럼 상태를 짧은 pill 형태로 표시",
    },
    {
      id: "element-card",
      label: "리스트/칸반 카드",
      type: "panel",
      confidence: 0.86,
      reason: "제목, 날짜, 상태가 들어간 반복 카드 구조",
    },
    {
      id: "empty-state",
      label: "빈 상태",
      type: "feedback",
      confidence: 0.82,
      reason: "항목 없음 메시지와 빈 영역 안내 패턴",
    },
    {
      id: "table",
      label: "행 목록",
      type: "panel",
      confidence: 0.78,
      reason: "최근 내역처럼 가로 행이 반복되는 데이터 표시",
    },
    {
      id: "icon-tile",
      label: "섹션 아이콘",
      type: "badge",
      confidence: 0.72,
      reason: "제목 왼쪽에 작은 의미 아이콘이 배치됨",
    },
  ];
}

function mapOcrLineToComponent(text) {
  const value = text.trim();
  const compact = value.replace(/\s/g, "");
  const numeric = /^[0-9,.]+%?$/.test(compact);

  if (!value) return null;
  if (/작성중|검토중|완료|승인|반려|대기|진행중|오류/.test(compact)) {
    return ["status-pill", "상태 배지", 0.78, "상태를 짧은 라벨로 표시하는 문구입니다."];
  }
  if (numeric || /%$/.test(compact)) {
    return ["metric-value", "메트릭 값", 0.76, "숫자 또는 퍼센트 형태의 핵심 지표로 보입니다."];
  }
  if (/전월|오늘|목표|대비|추가|최근|방금|업데이트/.test(compact)) {
    return ["metric-caption", "메트릭 보조문", 0.7, "수치의 맥락을 설명하는 보조 텍스트입니다."];
  }
  if (/전체|기준|완료율|검토중|매출|방문자|요약|지표/.test(compact) && value.length <= 16) {
    return ["metric-label", "메트릭 라벨", 0.68, "짧은 지표 이름 또는 요약 라벨로 보입니다."];
  }
  if (/검색|Search|search/.test(value)) {
    return ["search-box", "검색 필드", 0.74, "검색 관련 텍스트가 포함되어 검색 입력 영역 후보입니다."];
  }
  if (/저장|등록|추가|확인|시작|완료|보내기|생성/.test(compact)) {
    return ["primary-button", "주요 버튼", 0.72, "실행 액션으로 쓰이는 짧은 명령 문구입니다."];
  }
  if (/취소|닫기|더보기|필터|정렬|작업/.test(compact)) {
    return ["ghost-button", "보조 버튼", 0.66, "보조 액션 또는 메뉴 트리거 문구입니다."];
  }
  if (/홈|설정|대시보드|요청현황|관리|메뉴/.test(compact)) {
    return ["nav-item", "내비게이션 항목", 0.66, "화면 이동이나 메뉴에 쓰이는 텍스트입니다."];
  }
  if (/\d{4}\.|년|월|일/.test(value)) {
    return ["table", "데이터 테이블", 0.62, "날짜가 포함된 행 데이터 후보입니다."];
  }
  if (value.length <= 10) {
    return ["pill", "태그", 0.58, "짧은 메타 정보 라벨로 보입니다."];
  }
  return ["element-card", "텍스트 콘텐츠 카드", 0.54, "OCR로 감지된 문장이 카드나 리스트 항목 안의 텍스트일 가능성이 있습니다."];
}

function buildOcrDetections(ocrData) {
  const lines = (ocrData.lines && ocrData.lines.length ? ocrData.lines : [])
    .map((line) => ({
      text: String(line.text || "").trim(),
      confidence: Number(line.confidence || 60) / 100,
      bbox: line.bbox || line.boundingBox || {},
    }))
    .filter((line) => line.text);

  const sourceLines = lines.length
    ? lines
    : String(ocrData.text || "")
        .split(/\r?\n/)
        .map((text) => ({ text: text.trim(), confidence: 0.55, bbox: {} }))
        .filter((line) => line.text);

  const grouped = new Map();
  for (const line of sourceLines) {
    const match = mapOcrLineToComponent(line.text);
    if (!match) continue;
    const [id, label, baseConfidence, reason] = match;
    const component = uiComponents.find((item) => item.id === id);
    const entry = grouped.get(id) || {
      id,
      label,
      type: component?.type || "panel",
      confidence: 0,
      count: 0,
      visibleTexts: [],
      reason,
      location: "OCR 텍스트 영역",
      parent: "업로드 이미지",
    };
    entry.count += 1;
    entry.confidence = Math.max(entry.confidence, Math.min(0.95, baseConfidence * 0.7 + line.confidence * 0.3));
    if (entry.visibleTexts.length < 4) entry.visibleTexts.push(line.text);
    grouped.set(id, entry);
  }

  const detections = [...grouped.values()].map((entry) => ({
    id: entry.id,
    label: entry.label,
    type: entry.type,
    confidence: entry.confidence || 0.55,
    count: entry.count,
    visibleText: entry.visibleTexts.join(", "),
    parent: entry.parent,
    location: entry.location,
    reason: entry.reason,
  }));

  if (sourceLines.length >= 3 && !detections.some((item) => item.id === "table")) {
    detections.push({
      id: "table",
      label: "텍스트 목록/테이블",
      type: "panel",
      confidence: 0.5,
      count: sourceLines.length,
      visibleText: sourceLines.slice(0, 4).map((line) => line.text).join(", "),
      parent: "업로드 이미지",
      location: "OCR 텍스트 반복 영역",
      reason: "여러 줄의 텍스트가 반복되어 목록 또는 테이블 후보로 분류했습니다.",
    });
  }

  return detections.slice(0, 30);
}

async function analyzeUploadedImage() {
  const summary = $("#analysisSummary");
  if (summary) summary.textContent = "OCR 엔진을 불러오는 중입니다.";

  const tesseractModule = await import("https://cdn.jsdelivr.net/npm/tesseract.js@5/+esm");
  const recognize = tesseractModule.recognize || tesseractModule.default?.recognize;
  if (!recognize) {
    throw new Error("OCR 엔진을 불러오지 못했습니다.");
  }

  if (summary) summary.textContent = "OCR로 텍스트를 읽는 중입니다. 이미지 크기에 따라 시간이 걸릴 수 있습니다.";

  const result = await recognize(state.uploadedImage.dataUrl, "kor+eng", {
    logger: (message) => {
      if (!summary || message.status !== "recognizing text") return;
      const progress = Math.round((message.progress || 0) * 100);
      summary.textContent = `OCR 분석 중 ${progress}%`;
    },
  });

  const detections = buildOcrDetections(result.data || {});
  if (!detections.length) {
    throw new Error("OCR로 읽힌 텍스트가 부족합니다. 해상도가 높은 이미지를 올리거나 수동으로 요소를 선택하세요.");
  }
  return detections;
}

function renderAnalysisResults() {
  const list = $("#analysisResultList");
  const summary = $("#analysisSummary");
  if (!list || !summary) return;

  if (!state.uploadedImage) {
    summary.textContent = "이미지를 업로드하고 분석을 실행하세요.";
    list.innerHTML = "";
    return;
  }

  if (!state.detectedElements.length) {
    summary.textContent = "업로드 완료. 분석 실행 버튼을 누르세요.";
    list.innerHTML = "";
    return;
  }

  summary.textContent = `${state.detectedElements.length}개 웹서비스 UI 후보를 찾았습니다. 항목을 누르면 웹서비스 UI로 이동합니다.`;
  list.innerHTML = state.detectedElements
    .map((item) => `
      <button class="analysis-result-card" type="button" data-detected-component="${item.id}">
        <span class="analysis-result-top">
          <strong>${item.label}</strong>
          <span class="pill">${componentTypeLabel[item.type] ?? item.type}</span>
        </span>
        <span class="card-meta">
          ${item.count ? `<span class="pill">개수 ${item.count}</span>` : ""}
          ${item.visibleText ? `<span class="pill">텍스트 ${item.visibleText}</span>` : ""}
        </span>
        <div class="confidence-bar" aria-label="신뢰도 ${Math.round(item.confidence * 100)}%">
          <span style="width:${Math.round(item.confidence * 100)}%"></span>
        </div>
        ${item.location ? `<span class="pill">위치 ${item.location}</span>` : ""}
        ${item.parent ? `<span class="pill">상위 ${item.parent}</span>` : ""}
        <p>${item.reason}</p>
      </button>
    `)
    .join("");

  list.querySelectorAll("[data-detected-component]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.detectedComponent;
      const target = uiComponents.find((item) => item.id === id);
      if (!target) return;
      state.activeView = "components";
      state.componentType = "all";
      state.componentMode = "detail";
      state.selectedComponentId = id;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderReadiness() {
  const deviceShortLabel = {
    pc: "PC",
    iphone: "모바일",
  };
  const selected = uiComponents.find((item) => item.id === state.selectedComponentId) ?? uiComponents[0];
  const settings = getComponentSettings(selected);
  $("#readinessScore").textContent = deviceShortLabel[state.componentDevice];
  $("#readinessBar").style.width = `${Math.max(12, settings.radius * 2.5)}%`;
  $("#readinessCopy").textContent = `좌우 ${settings.padX}px · 상하 ${settings.padY}px · 라운드 ${settings.radius}px · 글자 ${settings.fontSize}px · 줄간격 ${settings.lineHeight}`;
}

function renderCards(filtered) {
  const grid = $("#elementGrid");
  grid.classList.toggle("is-compact", state.compact);

  if (!filtered.length) {
    grid.innerHTML = `<div class="element-card"><p>조건에 맞는 요소가 없습니다. 필터를 조정해 주세요.</p></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item) => `
      <button class="element-card ${state.selectedId === item.id ? "is-selected" : ""}" type="button" data-id="${item.id}">
        <span class="card-top">
          <span class="card-title">
            <span class="icon-tile" style="background:${item.color}"><i data-lucide="${item.icon}"></i></span>
            <span>${item.title}</span>
          </span>
          <span class="status-pill status-${item.status}">${statusLabel[item.status]}</span>
        </span>
        <p>${item.summary}</p>
        <span class="card-meta">
          <span class="pill">담당 ${item.owner}</span>
          <span class="pill priority-${item.priority}">우선순위 ${priorityLabel[item.priority]}</span>
          <span class="pill">${devices[state.device].title}</span>
          <span class="pill">산출물 ${item.outputs.length}</span>
        </span>
      </button>
    `)
    .join("");

  grid.querySelectorAll(".element-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = card.dataset.id;
      render();
    });
  });
}

function renderDetail() {
  const item = elements.find((entry) => entry.id === state.selectedId);
  const empty = $("#detailEmpty");
  const content = $("#detailContent");

  if (!item) {
    empty.hidden = false;
    content.hidden = true;
    content.innerHTML = "";
    return;
  }

  empty.hidden = true;
  content.hidden = false;

  content.innerHTML = `
    <div class="detail-header">
      <span class="icon-tile" style="background:${item.color}"><i data-lucide="${item.icon}"></i></span>
      <div>
        <h2>${item.title}</h2>
        <div class="chips">
          <span class="status-pill status-${item.status}">${statusLabel[item.status]}</span>
          <span class="pill priority-${item.priority}">우선순위 ${priorityLabel[item.priority]}</span>
          <span class="pill">${item.owner}</span>
        </div>
      </div>
    </div>
    <div class="detail-block">
      <h3>범위</h3>
      <p>${item.summary}</p>
    </div>
    <div class="detail-block">
      <h3>${devices[state.device].title} 검수 기준</h3>
      <p>${item.devices[state.device]}</p>
      <div class="device-badges">
        <span class="pill">PC ${item.devices.pc ? "포함" : "제외"}</span>
        <span class="pill">모바일 ${item.devices.iphone ? "포함" : "제외"}</span>
      </div>
    </div>
    <div class="detail-block">
      <h3>산출물</h3>
      <ul class="detail-list">${item.outputs.map((output) => `<li>${output}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h3>의존성</h3>
      <div class="dependency-list">
        ${item.dependencies.map((dependency) => {
          const target = elements.find((entry) => entry.id === dependency);
          return `<button class="dependency-row" type="button" data-id="${dependency}">${target ? target.title : dependency}</button>`;
        }).join("")}
      </div>
    </div>
    <div class="detail-block">
      <h3>점검 항목</h3>
      <div class="detail-list">
        ${item.checks.map((check, index) => {
          const checkId = `${item.id}-${index}`;
          return `
            <label class="check-row">
              <span>${check}</span>
              <input type="checkbox" data-check="${checkId}" ${state.checks[checkId] ? "checked" : ""} />
            </label>
          `;
        }).join("")}
      </div>
    </div>
  `;

  content.querySelectorAll(".dependency-row").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.id;
      render();
    });
  });

  content.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.checks[checkbox.dataset.check] = checkbox.checked;
      showToast(checkbox.checked ? "점검 항목을 완료로 표시했습니다." : "점검 항목을 다시 열었습니다.");
    });
  });
}

function renderFlowMap() {
  const flow = [
    ["기획", "요구사항, 정보 구조"],
    ["설계", "디자인 시스템, 화면 설계"],
    ["구현", "프론트엔드, API, 도메인 로직"],
    ["데이터", "모델, 마이그레이션, 보존"],
    ["보안", "인증, 권한, 통제"],
    ["운영", "배포, 테스트, 관측성"],
  ];

  $("#flowMap").innerHTML = flow
    .map(([title, copy], index) => `
      <div class="flow-node">
        <span class="pill">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <strong>${title}</strong>
          <small>${copy}</small>
        </div>
      </div>
    `)
    .join("");
}

function wireControls() {
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  $("#statusFilter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.status = button.dataset.status;
      $("#statusFilter").querySelectorAll("button").forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  $("#priorityFilter").addEventListener("change", (event) => {
    state.priority = event.target.value;
    render();
  });

  $("#componentSearch").addEventListener("input", (event) => {
    state.componentQuery = event.target.value;
    render();
  });

  $("#componentTypeFilter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.componentType = button.dataset.type;
      $("#componentTypeFilter").querySelectorAll("button").forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  $("#componentDeviceFilter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.componentDevice = button.dataset.componentDevice;
      $("#componentDeviceFilter").querySelectorAll("button").forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  $("#sidebarDeviceControl")?.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.componentDevice = button.dataset.sidebarDevice;
      render();
    });
  });

  $("#deviceFilter").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.device = button.dataset.device;
      $("#deviceFilter").querySelectorAll("button").forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  $("#compactButton").addEventListener("click", () => {
    state.compact = !state.compact;
    render();
  });

  $("#componentJumpButton").addEventListener("click", () => {
    state.activeView = "components";
    state.componentMode = "preview";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#componentSidebarButton").addEventListener("click", () => {
    state.activeView = "components";
    state.componentType = "all";
    state.componentMode = "preview";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#imageAnalysisButton").addEventListener("click", () => {
    state.activeView = "analysis";
    render();
    renderAnalysisResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#uiImageInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      state.uploadedImage = {
        name: file.name,
        type: file.type,
        dataUrl: reader.result,
      };
      state.detectedElements = [];
      const preview = $("#uploadedImagePreview");
      const empty = $("#imagePreviewEmpty");
      preview.src = reader.result;
      preview.hidden = false;
      empty.hidden = true;
      renderAnalysisResults();
      showToast("이미지를 업로드했습니다.");
    });
    reader.readAsDataURL(file);
  });

  $("#runImageAnalysisButton").addEventListener("click", async () => {
    if (!state.uploadedImage) {
      showToast("먼저 이미지를 업로드하세요.");
      return;
    }
    const button = $("#runImageAnalysisButton");
    button.disabled = true;
    button.innerHTML = `<i data-lucide="loader-circle"></i> 분석 중`;
    refreshIcons();
    try {
      state.detectedElements = await analyzeUploadedImage();
      renderAnalysisResults();
      refreshIcons();
      showToast("이미지 분석을 완료했습니다.");
    } catch (error) {
      showToast(error.message);
    } finally {
      button.disabled = false;
      button.innerHTML = `<i data-lucide="scan-search"></i> OCR 분석`;
      refreshIcons();
    }
  });

  $("#clearImageAnalysisButton").addEventListener("click", () => {
    state.uploadedImage = null;
    state.detectedElements = [];
    $("#uiImageInput").value = "";
    $("#uploadedImagePreview").src = "";
    $("#uploadedImagePreview").hidden = true;
    $("#imagePreviewEmpty").hidden = false;
    renderAnalysisResults();
  });

  $("#resetButton").addEventListener("click", () => {
    state.category = "all";
    state.activeView = "components";
    state.status = "all";
    state.priority = "all";
    state.query = "";
    state.componentType = "all";
    state.componentQuery = "";
    state.componentDevice = "pc";
    $("#searchInput").value = "";
    $("#componentSearch").value = "";
    $("#priorityFilter").value = "all";
    $("#statusFilter").querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.status === "all");
    });
    state.device = "pc";
    $("#deviceFilter").querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.device === "pc");
    });
    $("#componentTypeFilter").querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.type === "all");
    });
    $("#componentDeviceFilter").querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.componentDevice === "pc");
    });
    render();
    showToast("필터를 초기화했습니다.");
  });

  $("#exportButton").addEventListener("click", () => {
    const filtered = getFilteredComponents();
    const payload = JSON.stringify(filtered, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ui-components.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast("현재 목록을 JSON으로 내보냈습니다.");
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function syncDesktopFit() {
  const canvasWidth = 1280;
  const shouldScale = window.innerWidth < 900;
  const scale = shouldScale ? window.innerWidth / canvasWidth : 1;
  const minHeight = shouldScale ? window.innerHeight / scale : window.innerHeight;

  document.documentElement.classList.toggle("is-scaled-desktop", shouldScale);
  document.documentElement.style.setProperty("--desktop-canvas-width", `${canvasWidth}px`);
  document.documentElement.style.setProperty("--desktop-fit-scale", String(scale));
  document.documentElement.style.setProperty("--desktop-fit-min-height", `${minHeight}px`);
}

function render() {
  const filtered = getFilteredElements();
  renderCategories();
  renderComponentSideNav();
  renderActiveView();
  renderMetrics(filtered);
  renderDevice();
  renderReadiness();
  renderCards(filtered);
  renderDetail();
  renderComponents();
  renderExamplePage();
  renderFlowMap();
  renderAnalysisResults();
  refreshIcons();
}

syncDesktopFit();
window.addEventListener("resize", syncDesktopFit);
window.addEventListener("orientationchange", syncDesktopFit);
wireControls();
render();
