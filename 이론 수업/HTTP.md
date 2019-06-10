# HTTP

요청, 응답 시스템

- Request

  시작	방식(method)	URL	HTTP/1.1(CRLF)

  ​			**방식(method)**

  GET(자료 요청), POST

  DELETE

  PUT

  OPTIONS - 어떤 method있는지 요청

  HEAD - 본문 말고 헤더만(상태코드 확인할 때 사용=스캐닝)

  ​										**URL**

  www.naver.com/a,b,.../.... (이 결과의 파일은 unique하다)

  

  헤더 : HTTP 프로토콜은 확장 가능

  slowloris 공격 기법 

  - DoS 공격 기법 중 하나
  - HTTP 요청 헤더와 본문이 개행문자로 구분되는 특징을 이용한 공격 = 요청 헤더의 끝이 개행문자로 끝나는 것을 활용한 공격
- 요청 헤더의 끝을 나타내는 개행문자를 서버로 전달하지 않고, 헤더를 계속해서 전달해, 연결을 유지시키는 공격 기법
  
​		![1558661040793](/image/1.jpg)
  
  (본문)
  
  슬로 HTTP POST 공격 = RUDY 공격
  
  - 요청 헤더의 Content-Length의 값을 크게 설정해서 서버가 요청 본문을 기다리도록 하는 공격
  - <https://crefunx.tistory.com/35>
  
  HTTP 응답분할
  
  - 외부입력값을 응답헤더에 값으로 사용하는 경우 
  - 개행문자를 이용해서 응답을 여러개로 분할해 전달하고, 
  - 분할된 응답 중 본문 영역에 악성행위를 하는 코드를 집어넣어서 공격하는 공격 기법

# 쿠키

Request : 쿠키

Responses : 셋-쿠키

운영 원칙

- 중요정보 포함하지 않는다.
- 암호화해서 전달
- 유효기간(Expired), 지속시간(MaxAge)의 최소화(이 쿠키를 언제까지 유지한다 라는 조정 속성이 있다.)
- Secure 속성을 활성화한다. Https 통신을 할 경우에만 서버로 쿠키를 전달
- HttpOnly 속성을 활성화(모든 브라우져에서 지원하진 않음)
  - 클라이언트(웹브라우져)에서 자바스크립트를 이용한 Cookie 접근을 방지



http://abc.com/data/ 이런 형식의 url은 디렉토리를 요청하는 것

1. 디렉토리의 default page를 불러온다 ← Web Server에 설정

2. directory listing 옵션

   - 켜져있는경우

   ![](https://www.acunetix.com/wp-content/uploads/2012/11/backup-dir3.png)

   - 꺼져있는경우

     404 Not found

   

