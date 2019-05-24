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
  - 요청 헤더의 끝이 개행문자로 끝나는 요청의 구조를 이용한 공격

  ​		![1558661040793](C:\Users\student\AppData\Roaming\Typora\typora-user-images\1558661040793.png)

  (본문)