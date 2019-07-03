// 내장 모듈
// 노드를 설치하면 제공하는 내장모듈을 사용한다고 선언해보자
// 필요없는 것은 쓰지않고 필요한 것만 꺼내쓰도록 해놓았다.
// http란 모듈을 사용하겠다 선언
const http = require('http');
// url란 모듈을 사용하겠다 선언
const url = require('url');
const querystring = require('querystring');

var port = 3000;
// 서버 생성
const server = http.createServer();

// 포트 지정후 클라이언트 접속 받을 준비 끝나면 출력
server.listen(port, function () {
    console.log('웹 서버 대기중... : %d', port);
});

// 서버가 동작하면 on request를 이용해서 이벤트를 달아줄 수 있다.
server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('클라이언트 : (' + addr.address + ':' + addr.port + ')이 접속했습니다.');
});

server.on('close', function () {
    console.log('웹 서버 종료됨.');
});
// 클라이언트가 request 할 때의 동작과 response를 정해준다.
server.on('request', function (req, res) {
    var urlp = url.parse(req.url, true);
    console.log(urlp.pathname);
    var samplequery = "id=hong&password=1234";
    var query = querystring.parse(samplequery);
    console.log(query.id);
    console.log(query.password);
    // console.log('클라이언트 요청');
    // console.dir(req);
    if (urlp.pathname == '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Log in here</h1>');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h2>${urlp.pathname}</h2>`)
        res.end();
    }
})