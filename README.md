### < 프로젝트 세팅 >
린트 프리티어 에어비엔비 허스키 테일윈드 폴더구조

1. npx create-next-app@latest

2. eslint 및 prettier 설치 : npm install -D eslint prettier

3. airbnb eslint 설정 패키지 설치: npx install-peerdeps --dev eslint-config-airbnb

4. eslint & prettier 충돌 방지를 위한 플러그인 및 설정 패키지 설치: npm install -D eslint-config-prettier eslint-plugin-prettier

5. typescript를 위한 eslint-config-airbnb 설치: npm install -D eslint-config-airbnb-typescript

6. .eslintrc.js 작성 

7. .prettier.js 작성 

8. husky 설치 : npx husky install (처음 설치시)

9. package.json 에 스크립트 추가 

10. 터미널에서 명령어 실행 후 husky 폴더에 pre-commit, pre-push 폴더 확인
- npx husky .husky/pre-commit "npm run format"
- npx husky .husky/pre-push "npm run lint"