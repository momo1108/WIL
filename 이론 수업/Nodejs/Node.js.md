# Node.js

### 설치

- https://nodejs.org/ko/



### 실행

- node 버전 확인

  node -v

- npm 버전 확인

  npm -v

- npm 업데이트

  npm install -g npm

- code . (비주얼 스튜디오 실행)

- cmd 창에서 node를 실행하면 node js가 실행된다.

- npm install --save express (웹 서버에 특화된 모듈)

- npm install --save ejs

- npm install --save-dev nodemon



### 파일 생성과 실행

- js 확장자 파일을 만들고 자바스크립트 언어로 작성
- node 파일이름 ←을 통해 실행



### middleware

- static middleware

html form (POST) → body-parser (req.body에 객체로 넣어줌)

ajax

ejs (템플릿 엔진)

- <%= 변수 %>

  <% 자바스크립트 코드 %>

- <% for (let i=0; i<10; i++) { %>

  

  <% } %>



### 세션

쿠키 - 클라이언트에 쿠키를 설정해준다.  Cookie {user: a}

   ↓	여러가지 보안이슈

세션 - 클라이언트와 서버간의 세션을 생성하고 연결정보를 가지고 있는다.