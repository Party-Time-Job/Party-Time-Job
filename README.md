<div align='center'>
  <img width='300px' src='public/logo.png' />
</div>

<br /><br />

# 프로젝트 개요

<img width='1200px' src='public/readme-1.png' />

<p>일자리가 급한 사람들을 위한 구인구직 서비스. 구인구직 과정을 파티처럼 즐겁고, 더욱 쉽게 만들고자 합니다.</p>
<p>당신의 다음 파티는 어디에서 시작될까요? 지금 바로 시작해 보세요!</p>

<br /><br />

# 팀원 소개

<table>
    <tr align="center">
        <td><img width="150" src='public/readme-2.png' /></td>
        <td><img width="150" src='public/readme-3.png' /></td>
        <td><img width="150" src='public/readme-4.png' /></td>
        <td><img width="150" src='public/readme-5.png'/></td>
    </tr>
    <tr align="center">
      <td><a href="https://github.com/DanteSnow">이치현</a></td>
      <td><a href="https://github.com/siyeol97">이시열</a></td>
      <td><a href="https://github.com/yunsunglee2">이윤성</a></td>
      <td><a href="https://github.com/Crack-Egg">이재명</a></td>
    </tr>
    <tr align="center">
      <td>팀장</td>
      <td>팀원</td>
      <td>팀원</td>
      <td>팀원</td>
    </tr>
</table>

<br /><br />

# 개발 기간

### 2024.03.07 ~ 2024.03/25

<img width='800px' src='https://github.com/Party-Time-Job/Party-Time-Job/assets/150772344/0f161b98-864b-437b-b9e1-3a3aafe6b978' />

<br /><br />

# 기술 스택

### 개발

<div>
  <img height='26px' src='https://img.shields.io/badge/nextjs14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/react-3178C6?style=for-the-badge&logo=react&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white' />
</div>

<br />

### 라이브러리

<div>
  <img height='26px' src='https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white' />
</div>

<br />

### 협업

<div>
  <img height='26px' src='https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/husky-E94E2D?style=for-the-badge&logo=styledcomponent&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white' />
</div>

### 배포

<img height='26px' src='https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white' />

<br /><br />

# FSD(Feature-Sliced Design) 폴더 구조

```bash
src
├── app
│   └─ detail
│   └─ notice
│   └─ profile
│       └── page.tsx
├── pages
│   └─ EmployerPage
│       └── api
│   └─ NoticePage
│       └── api
├── widgets
│   └─ api
│       └── getApplication.ts
│   └─ Header
│   └─ Footer
├── features
│   └─ AcceptModal
│   └─ Filter
│   └─ Sort
├── entities
│   └─ Post
│       └── hooks
│       └── utils
├── shared
│   └─ api
│   └─ hooks
│   └─ utils
│   └─ ui
│       └── Table
│       └── Button
└──     └── Input
```

<br /><br />

# 주요 기능

### 📄 랜딩페이지 및 로그인/회원가입 페이지

- 사용자 경험을 개선하기 위한 랜딩페이지 제작 및 디자인 변경
- 사장 및 알바 유형에 따른 가입 방식 선택 기능 (리액트 훅 폼)

### 📄 일반회원 페이지

- 내 프로필 등록/편집 기능 (리액트 훅 폼)
- 공고 신청 내역 렌더링 (페이지네이션)
- 신청 내역 없을 시 공고 페이지 이동 기능

### 📄 사장님 페이지

- 내 가게 등록하기 기능 (리액트 훅 폼)
- 공고 등록하기 기능 (리액트 훅 폼)
- 내 공고 클릭 시 공고 상세 페이지 이동

### 📄 공고 페이지

- 유저 지역에 따른 맞춤 공고 렌더링
- 전체 공고 렌더링 (페이지네이션)
- 전체 공고 필터 기능 (마감임박순, 시급많은순, 시간적은순, 가나다순)
- 상세 필터 기능 (위치, 시작일, 금액)
- 공고 검색 기능

### 📄 공고 상세 페이지

- 공고 지원자 목록 렌더링 (페이지네이션)
- 지원자 승인/거부 기능

### 📄 공통

- 헤더 네비게이션 바 로그인 유형에 따라 다른 메뉴 렌더링
- 헤더 공고 승인/거부 알림 모달창 팝업 기능
- 전체 UI 디자인 변경

<br /><br />
