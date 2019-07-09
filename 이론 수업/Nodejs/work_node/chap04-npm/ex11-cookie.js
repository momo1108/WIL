const express = require('express');
const path = require('path');
// 쿠키파서를 설치해준다. npm install --save cookie-parser
const cookieparser = require('cookie-parser');
const app = express();
const port = 3000;

// express의 환경변수를 setting해준다.
app.set(path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// 실제로 엔진을 세팅해준다.
app.engine('html', require('ejs').renderFile);
// 쿠키 파서를 미들웨어에 등록해놓는다.
app.use(cookieparser());

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname,'public')));

// 받아오는 데이터를 json으로 받아온다.
app.use(express.json());

var Userlist = [
    {
        number : 1,
        name : '방혜찬',
        age : 27,
        address : '인천'
    },
    {
        number : 2,
        name : '안동원',
        age : 26,
        address : '서울'
    },
    {
        number : 3,
        name : '황상욱',
        age : 26,
        address : '인천'
    }
];

app.get('/',(req,res)=>{
    res.redirect('/userlist');
})

app.get('/userlist',(req,res)=>{
    res.render('ex07-test.html');
})

app.get('/api/userlist', (yochung, baneung) => {
    baneung.json(Userlist);
})

// 쿠키를 설정하는걸 실습해보자.
app.get('/test/setCookie', (req,res)=>{
    console.log('/test/setCookie');
    // 쿠키를 클라이언트에 저장해준다.
    res.cookie('user', {'name': '홍길동'}, {
        // 쿠키의 유지시간과 쿠키의 유효 사이트를 한정해줄 수 있다.
        maxAge: 10*1000,
        httpOnly: true
    });
    // 쿠키의 정보가 실려서 getCookie로 넘어간다.
    res.redirect('/test/getCookie');
});

app.get('/test/getCookie', (req,res)=>{
    console.log(req.cookies);
    // 넘겨준 쿠키정보를 지정해준다.
    res.render('test/getcookie.html', {cookie: req.cookies});
    // 쿠키가 어디있는지 확인 - 브라우져 F12 - Application - Storage - Cookies
});

app.listen(port, ()=>{
    console.log('Server is listening to the port number',port);
})