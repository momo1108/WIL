const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let info = [];
let i = 0;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req,res) => {
    res.render('select.html');
})

app.post('/signin', (req,res) => {
    // info.push(req.body.id, req.body.password);
    info.push(req.body);
    // res.send(`<h1>id : ${req.body.id}</h1><h1>password : ${req.body.password}</h1><h1>회원가입 되었습니다.</h1>`);
    res.render('select.html');
    req.body = {};
    console.log('회원가입 완료');
    console.log('현재 유저 목록\n',info);
    i++;
})

app.post('/login', (req,res) => {
    let j = 0;
    while(1){
        if(info[j].id==req.body.id && info[j].password==req.body.password){
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