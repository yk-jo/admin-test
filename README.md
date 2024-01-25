## 기본 환경

- node : 18.14.0

## 적용 모듈

```json
{
  // dependencies
  "@tanstack/react-query": "^4.36.1",
  "axios": "^1.6.5",
  "qs": "^6.11.2",
  "react-router-dom": "^6.15.0",
  "vite-plugin-html": "^3.2.1",
  "zustand": "^4.4.7",
  "react-use": "^17.4.2",
  "classnames": "^2.5.1",
  // dependencies-theme
  "@mui/material": "^5.15.4",
  "@mui/x-date-pickers": "^6.19.0",
  "@mui/x-data-grid": "^6.18.7",
  "@mui/x-tree-view": "^6.17.0",
  "dayjs": "^1.11.10",
  "@emotion/react": "^11.11.3",
  "@emotion/styled": "^11.11.0",
  // wysiwyg
  "jodit-react": "^4.0.4",
  // icons
  "@mdi/js": "^7.4.47",
  "@mdi/react": "^1.6.1",
  // charts
  "chart.js": "^4.4.1",
  "react-chartjs-2": "^5.2.0",

  // dev dependencies
  "prettier": "^3.1.1",
  "eslint-config-prettier": "^9.1.0",
  "vite-plugin-svgr": "^4.2.0"
}
```

## 스크립트 명령

```bash
# eslint 적용 (rc파일이 없을 경우 생성)
npm run lint

# .env.local 프로젝트 실행
npm run dev
```
