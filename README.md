<div align='center'>
  <img width='300px' src='public/logo.png' />
  <h1 style='font-size: 50px'>Party Time Job</h1>
</div>

<br /><br />

# ⭐️ 프로젝트 개요

<img width='1200px' src='public/readme-1.png' />

<p>일자리가 급한 사람들을 위한 구인구직 서비스. 구인구직 과정을 파티처럼 즐겁고, 더욱 쉽게 만들고자 합니다.</p>
<p>당신의 다음 파티는 어디에서 시작될까요? 지금 바로 시작해 보세요!</p>

<br /><br />

# 👨‍👨‍👧‍👧 팀원 소개

<table>
    <tr align="center">
        <td><img width="150" src="https://avatars.githubusercontent.com/u/150772344?v=4" /></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/85405709?v=4" /></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/135799803?v=4" /></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/122016324?v=4" /></td>
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

# 📆 개발 기간

### 2024.03.07 ~ 2024.03/25

<img width='800px' src='https://github.com/Party-Time-Job/Party-Time-Job/assets/150772344/0f161b98-864b-437b-b9e1-3a3aafe6b978' />

<br /><br />

# 📚 기술 스택

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

# 📁 FSD(Feature-Sliced Design) 폴더 구조

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

# ⚙️ 주요 기능

### 📄 랜딩페이지 및 로그인/회원가입 페이지

- 사용자 경험을 개선하기 위한 랜딩페이지 제작 및 디자인 변경
- react-hook-form을 이용한 로그인 및 회원가입 기능

### 📄 일반회원 페이지

- 프로필 등록/편집 버튼 클릭 시 프로필 등록 모달로 이동
- 연락처, 선호 지역에 맞지 않는 값 입력 시 에러 메세지 출력 기능
- 신청한 공고 데이터를 가져와 테이블 컴포넌트에 보여주며, page를 url에 반영하는 페이지네이션 기능

### 📄 사장님 페이지

(핵심 기능 작성)

### 📄 공고 페이지

(핵심 기능 작성)

<br /><br />

# ⏏️ 추가 기능 구현

- 커스텀 훅을 사용한 드롭다운 리스트 검색 기능 및 닫기 기능

<br /><br />

# 문제점 및 해결방법? 코어타임? 필요한 리팩토링?

(이 부분은 필요하면 넣고 필요없으면 빼도록 하겠습니다!)

<br /><br />

# 💻 설치 방법

### 1. 프로젝트 설치

```bash
git clone https://github.com/Party-Time-Job/Party-Time-Job.git
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 실행

```bash
npm run dev
```

<br /><br />

# QnA

(QnA 이미지 파일)
