// express 확장모듈을 가져와라
const express = require('express');
// express 모듈 쉽게 사용하기 위해 변수로 설정
const app = express();
const port = 3000;


app.get('/', function (req, res) {
    console.log('/ 요청이 들어옴');
    res.send('<h1>Home page</h1><h2>Okay</h2><hr>');
    // send는 한번 보내면 res.end가 되었기 때문에 request에 대한 응답이 끝나버려서 뒤에것은 동작하지 않는다.

    // res.send('<h1>Never mind</h1>');
    // 이렇게 한번 더 써주는 경우
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // client에 response가 sent된경우 header를 set해줄수 없다고 오류가 뜬다.
})

app.get('/about', (req, res) => {
    console.log('/about 요청이 들어옴');
    // res.send는 res.writeHead, res.write, res.end를 합친 기능
    // res.send('<h1>/About</h1>');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>/About</h1>');
    res.end();
})

// http://localhost:3000/query?id=hong&name=gildong
app.get('/query', (req,res) => {
    // express 모듈은 querystring에 대한 기본기능을 가지고있어서
    // req.qeury 객체에 저장해준다.
    var id = req.query.id;
    var name = req.query.name;
    console.log(id, ', ', name);
    console.log(req.query);
})

// sementic url을 사용하면 query가 더럽게 나오지 않고 깔끔하게 url형태로 나타낼 수 있다.
app.get('/sementic/:book/:page', (req,res) => {
    var book = req.params.book;
    var page = req.params.page;
    console.log(req.params);
    res.send(req.params);
});

app.listen(port, function () {
    console.log('server listen at ...' + port);
})