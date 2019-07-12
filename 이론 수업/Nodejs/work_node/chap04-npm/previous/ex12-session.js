const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;
// 세션을 사용한다 선언


app.set(path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname,'public')));

app.use(cookieparser());

// 기초 옵션을 주고 초기화해서 사용
// 디폴트 저장위치는 서버이므로 사용자가 극단적으로 많아지면 그에 맞는 메모리를 서버에서 갖춰야한다.(비효율)
app.use(session({
    // 암호화 키 (임의지정 가능)
    secret: '1q2w3e4r',
    // 변화가 없어도 요청할 때마다 저장할것이냐
    resave: false,
    // uninitialized 저장된 상태로 시작하겠다.
    // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.
    saveUninitialized: true,
}));

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
// 세션과 쿠키 모두 클라이언트의 연결을 서버가 구분하기 위한 것이다.
// 세션은 연결 상태정보를 저장한다. 연결이 끊기면 사라짐. 누군가 로그인하면 로그인 상태를 세션에 저장.
// 쿠키는 브라우저에 저장되지만, 세션은 서버에 저장. 쿠키는 키 값 자체를 브라우저에 저장했지만 
// 세션은 키값들은 서버에 저장되고 접속된 클라이언트들을 구분할 수 있는 id값만 생성해(connect.sid)
// 쿠키에 저장시켜주고 클라이언트들을 구분한다. 세션도 디폴트 수명이 있다.
// 세션은 서버에 저장되기 때문에 서버를 껐다키면 연결되어있었던 모든 세션들이 끊어지게 된다.
// 이를 방지하기 위해 세션 정보를 파일로 저장하거나 데이터베이스에 저장한다.
app.get('/test/setsession', (req, res) => {
    console.log('/test/setsession');
 
    req.session.myname = '홍길동';
    req.session.myid = 'hong';
    // 세션이 저장되기 전에 리다이렉트되는 경우를 방지하기 위해 save를 사용
    req.session.save(function () {
        res.redirect('/test/getsession');
    })
 })
 
 app.get('/test/getsession', (req, res) => {
    console.log('/test/getsession');
    console.log('session.myname = ', req.session.myname);
 
    res.render('test/getsession.html', {
        myname : req.session.myname,
        myid : req.session.myid
    });
 }) 

app.listen(port, ()=>{
    console.log('Server is listening to the port number',port);
})