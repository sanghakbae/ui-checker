# UI Checker

웹서비스 화면을 구성하는 UI 요소를 직접 확인하고, PC/모바일 기준으로 배치와 형태를 점검하는 UI 관리 도구입니다.

## 주요 기능

- 웹서비스 예시 화면에서 UI 요소 클릭 후 상세 정보 확인
- PC / 모바일 기준 미리보기
- 요소별 클래스, 라운드, 크기, 상태, 사용 예시 확인
- 패딩, 라운드, 텍스트, 줄간격 등 기본 스타일 조정 연습
- 이미지 업로드 후 OCR 기반 UI 점검 결과 확인
- OpenAI API 없이 브라우저 기반 OCR 분석 사용

## 실행 방법

```bash
npm start
```

브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:4173
```

## 파일 구조

```text
index.html   화면 마크업
styles.css   전체 UI 스타일
app.js       UI 요소 데이터, 화면 전환, 미리보기, OCR 분석 로직
server.js    로컬 정적 서버
package.json 실행 스크립트
```

## 환경 변수

현재 프론트 화면은 OpenAI API 없이 동작합니다. `.env` 파일은 로컬 개발용으로만 사용하고 Git에는 올리지 않습니다.

```text
.env
```

## 배포 메모

정적 웹앱 형태라 DB 없이 외부 URL에서 사용할 수 있습니다. GitHub Pages, Cloudflare Pages, Vercel 같은 정적 배포 환경에 올릴 수 있습니다.

커스텀 도메인으로 `ui.sanghak.kr`을 사용할 경우 배포 서비스에서 도메인을 연결하고 DNS 레코드를 설정하면 됩니다.
