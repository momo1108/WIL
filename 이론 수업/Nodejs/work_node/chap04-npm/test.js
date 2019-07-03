
const express = require('express');

const app = express();
const port = 3000;
let info = [];
let i = 0;

app.get('/', function (req, res) {
    console.log('/ 요청이 들어옴');
    res.send('<h1>Home page</h1><h2>Okay</h2><hr>');
});

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.post('/signin', (req,res) => {
    // info.push(req.body.id, req.body.password);
    info.push(req.body);
    res.send(`<h1>id : ${req.body.id}</h1><h1>password : ${req.body.password}</h1><h1>회원가입 되었습니다.</h1>`);
    req.body = {};
    console.log('회원가입 완료');
    console.log('현재 유저 목록<br>',info);
    i++;
})

app.post('/login', (req,res) => {
    let j = 0;
    while(1){
        if(info[j]==req.body){
            res.send(`<h1>id : ${info[j].id}</h1><h1>password : ${info[j].password}</h1><h1>로그인 되었습니다.</h1>`);
            break;
        }
        j++;
        if(j>i) {
            res.send('일치하는 계정이 없습니다!');
            break;
        }
    }    
})

app.listen(port, function () {
    console.log('server listen at ...' + port);
});