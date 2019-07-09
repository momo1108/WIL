const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const port = 3000;
const hasher = require('pbkdf2-password')();

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

app.post('/signup', (req, res) => {
    console.log(req.body);
    // 회원가입
    let userid = req.body.userid;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    console.log('userid = ', userid);
    console.log('password = ', password);
    console.log('name = ', name);
    console.log('email = ', email);

    hasher({
        password: req.body.password
        // pass = 내가 패스워드 값으로 넘겨준 값
        // salt = 패스워드를 암호화를 할 때 복잡도를 늘리기 위해 시스템이 자릿 수를 늘려줌
        // hash = 그 결과인 hash값
    }, (err, pass, salt, hash) => {
        // 에러 발생시 사인업 폼으로 다시 돌아가게
        if (err) {
            console.log('ERR: ', err);
            res.redirect('/signup_form');
        }
        // 자바 스크립트 안에서만 사용한다하면 키들을 ''로 감싸주지 않아도 된다.
        // JSON 형식으로 나타낸다 하면 키를 ''로 감싸주고 value값들을 형식에 맞게 표현해주어야 한다."" {} []
        // JSON.stringify(객체); ← 자바스크립트의 객체값을 JSON 문자열로 변환한다.
        // console.log(JSON.stringify({ x: 5, y: 6 }));
        // expected output: "{"x":5,"y":6}"
        // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.
        // var json = '{"result":true, "count":42}';
        // obj = JSON.parse(json);
        // console.log(obj.count);
        // expected output: 42
        let user = {
            userid: userid,
            password: hash,
            salt: salt,
            name: name,
            email: email
        }
        sampleUserList.push(user);
        console.log('user added : ', user);
        res.redirect('/login_form');
    });
});

app.post('/login', (req, res) => {
    console.log(req.body);
    let userid = req.body.userid;
    let password = req.body.password;    console.log('userid = ', userid);
    console.log('password = ', password);
    console.log('userlist = ', sampleUserList);
 
    for (let i = 0; i < sampleUserList.length; i++) {
        let user = sampleUserList[i];
        console.log(sampleUserList[i]);
        if (userid === user.userid) {
            console.log('[found] userid = ', userid);
 
            return hasher({
                password: password,
                salt: user.salt
            }, function (err, pass, salt, hash) {
                if (err) {
                    console.log('ERR : ', err);
                    
                    break;
                }
                if (hash === user.password) {
                    console.log('INFO : ', userid, ' 로그인 성공')
                    req.session.userid = user.userid;
                    req.session.save(function () {
                        res.redirect('/carlist');
                    })
                    return;
                } else {
                    
                    break;
                }
            });
        }
    }
    //req.flash.msg('')
    console.log('not found');
 
    res.redirect('/login_form');
 }); 

app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})