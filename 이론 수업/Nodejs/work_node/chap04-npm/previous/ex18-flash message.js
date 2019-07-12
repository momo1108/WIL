const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
// const flash = require('connect-flash');
const port = 3000;
// pbkdf2 는 모두 암호화해주는 모듈. pbkdf2-password는 암호만 암호화해주는 모듈.
const hasher = require('pbkdf2-password')();
const fs = require('fs');

// 패스워드 암호화
// 회원 가입 시 입력한 패스워드를 암호화 해서 저장
// 로그인 시 인증 처리

app.set(path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieparser());

// app.use(flash());

app.use(session({
    secret: '1q2w3e4r',
    resave: false,
    saveUninitialized: true,
    // store 미들웨어를 선언해준다.
    store: new FileStore()
}));

app.use((req,res,next)=>{
    res.locals.user = req.session.user;
    next();
});

app.use(express.json());
// 배열을 하나씩 전부다 읽는 건 비효율적이다.
// 배열 구조가 아닌 하나의 객체로 만들어보자.
var sampleUserList = {};

// fs.writeFile - 파일을 생성해라 라는 비동기함수
// fs.writeFileSync - 뒤에 Sync를 붙어있는 동기함수를 사용
// JSON.stringify로 json 포맷으로 변환시킨 후 저장해야 내용 확인 가능(옵션을 줘서 이쁘게 저장 가능).
// JSON.stringify(Userlist, null, 스페이스 개수)
// fs.writeFileSync('data/userlist.json', JSON.stringify(Userlist, null, 4));
// 저장 한 후에 저장된 내용을 불러와 변수에 저장하자.
// 만약 userlist 파일이 존재하면 불러오고 아니면 지나간다.
if (fs.existsSync('data/userlist.json')) {
    let rawdata = fs.readFileSync('data/userlist.json');
    // 그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    sampleUserList = JSON.parse(rawdata);
    console.log(sampleUserList);
    // 지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    // 뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
}

app.get('/', (req, res) => {
    res.render('tmpindex.html');
})

app.get('/signin_form', (req, res) => {
    console.log('회원가입신청');
    res.render('signin_form.html');
})

app.post('/signin', (req, res) => {
    console.log(req.body);
    // 회원가입
    let userid = req.body.id;
    let password = req.body.password;
    console.log('userid = ', userid);
    console.log('password = ', password);

    hasher({
        password: req.body.password
    }, (err, pass, salt, hash) => {
        if (err) {
            console.log('ERR: ', err);
            res.redirect('/signup_form');
        }
        let user = {
            userid: userid,
            originpass: pass,
            password: hash,
            salt: salt
        }
        sampleUserList[userid] = user;
        fs.writeFileSync('data/userlist.json', JSON.stringify(sampleUserList, null, 4));
        console.log('user added : ', user);
        res.redirect('/login_form');
    });
});

app.get('/login_form', (req, res) => {
    res.render('login_form.html');
})

app.post('/login', (req, res) => {
    console.log(req.body);
    let userid = req.body.id;
    let password = req.body.password;
    console.log('userid = ', userid);
    console.log('password = ', password);
    console.log('userlist = ', sampleUserList);
    let user = sampleUserList[userid];
    if (user) {
        return hasher({
            password: password,
            salt: user.salt
        }, function (err, pass, salt, hash) {
            if (err) {
                console.log('ERR : ', err);
                // req.flash('fmsg','에러 발생.');
                res.redirect('login_form');
            }
            if (hash === user.password) {
                console.log('INFO : ', userid, ' 로그인 성공')
                req.session.user = user.userid;
                req.session.save(function () {
                    res.redirect('/carlist');
                })
            } else {
                console.log('아이디가 없습니다.');
                // req.flash('fmsg','비밀번호가 틀렸습니다.');
                res.redirect('login_form');
            }
        });
    } else {
        // req.flash('fmsg','아이디가 존재하지 않습니다.');
        res.redirect('login_form');        
    }

    //req.flash.msg('')
    console.log('not found');

    res.redirect('/login_form');
});

app.get('/carlist', (req, res) => {
    // if의 ()와 같은 조건문에서는 변수값이 들어가는게 아닌 true false로 들어간다.
    if (req.session.user) {
        console.log('로그인된 사용자');
        // session 정보를 다른 url에도 쓰고 싶으면 이렇게 객체형태로 렌더할 때 보내줘야 했다.
        res.render('carlist.html');
    } else {
        console.log('로그인 안됨. 로그인 페이지로 이동');
        res.redirect('/login_form');
    }
})

// 
app.get('/test/setlocals',(req,res)=>{
    res.locals.test2 = 'test2';
    res.render('test/locals.html',{test1: 'test1'});
})

app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})