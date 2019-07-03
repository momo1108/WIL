
const express = require('express');

const app = express();
const port = 3000;


app.get('/', function (req, res) {
    console.log('/ 요청이 들어옴');
    res.send('<h1>Home page</h1><h2>Okay</h2><hr>');
});

app.get('/about', (req, res) => {
    console.log('/about 요청이 들어옴');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>/About</h1>');
    res.end();
});

app.get('/query', (req,res) => {
    var id = req.query.id;
    var name = req.query.name;
    console.log(id, ', ', name);
    console.log(req.query);
});

app.get('/sementic/:book/:page', (req,res) => {
    var book = req.params.book;
    var page = req.params.page;
    console.log(req.params);
    res.send(req.params);
});

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.post('/post', (req,res) => {
    console.log('/post 요청');
    console.log(req.body);
    res.send(`<h1>이름 : ${req.body.name}</h1><h1>id : ${req.body.id}</h1><h1>pw : ${req.body.password}</h1>`);
})

app.listen(port, function () {
    console.log('server listen at ...' + port);
});