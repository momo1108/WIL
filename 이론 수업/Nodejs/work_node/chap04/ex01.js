// http란 모듈을 사용하겠다 선언
const http = require('http');
// url란 모듈을 사용하겠다 선언
const url = require('url');

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