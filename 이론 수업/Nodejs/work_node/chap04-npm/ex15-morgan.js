const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
const app = express();
const port = 3000;
const hasher = require('pbkdf2-password')();

// 패스워드 암호화
// 회원 가입 시 입력한 패스워드를 암호화 해서 저장
// 로그인 시 인증 처리

app.set(path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieparser());

app.use(session({
    secret: '1q2w3e4r',
    resave: false,
    saveUninitialized: true,
    // store 미들웨어를 선언해준다.
    store: new FileStore()
}));

app.use(express.json());

var Userlist = [
    {
        number: 1,
        name: '방혜찬',
        age: 27,
        address: '인천'
    },
    {
        number: 2,
        name: '안동원',
        age: 26,
        address: '서울'
    },
    {
        number: 3,
        name: '황상욱',
        age: 26,
        address: '인천'
    }
];

app.get('/', (req, res) => {
    res.redirect('/userlist');
})

app.get('/userlist', (req, res) => {
    res.render('ex07-test.html');
})

app.get('/api/userlist', (yochung, baneung) => {
    baneung.json(Userlist);
})

app.get('/test/setsession', (req, res) => {
    console.log('/test/setsession');
    // 이제 setsession에 접속을 하면 sessions 디렉터리가 생성되고 세션정보가 저장이 된다.
    // 같은 컴퓨터로 접속할 경우 정보가 변하지 않는다.
    req.session.myname = '홍길동';
    req.session.myid = 'hong'
    req.session.save(function () {
        res.redirect('/test/getsession');
    })
})

app.get('/test/getsession', (req, res) => {
    console.log('/test/getsession');
    console.log('session.myname = ', req.session.myname);

    res.render('test/getsession.html', {
        myname: req.session.myname,
        myid: req.session.myid
    });
})

app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})