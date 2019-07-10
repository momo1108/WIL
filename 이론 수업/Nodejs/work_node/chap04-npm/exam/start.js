const express = require('express');
const path = require('path');
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const hasher = require('pbkdf2-password')();
const flash = require('express-flash-messages');
const morgan = require('morgan');
const fs = require('fs');
const port = 3000;

let imagelist = [];
let sampleUserList = {};

// 기능을 호출한다는 개념이다. ejs에게 렌더링을 해달라 요청하기 때문에 랜더링을 할 기능들의 경로를 설정해준다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: false
}));

// 받아오는 데이터를 json으로 받아온다.
app.use(express.json());
// 쿠키파서 미들웨어 등록
app.use(cookieparser());
app.use(flash());
app.use(session({
    // 암호화 키 (임의지정 가능)
    secret: '1q2w3e4r',
    // 변화가 없어도 요청할 때마다 저장할것이냐
    resave: false,
    // uninitialized 저장된 상태로 시작하겠다.
    saveUninitialized: true,
    store: new FileStore()
}));
// fs.writeFile - 파일을 생성해라 라는 비동기함수
// fs.writeFileSync - 뒤에 Sync를 붙어있는 동기함수를 사용
// JSON.stringify로 json 포맷으로 변환시킨 후 저장해야 내용 확인 가능(옵션을 줘서 이쁘게 저장 가능).
// JSON.stringify(Userlist, null, 스페이스 개수)
// fs.writeFileSync('data/userlist.json', JSON.stringify(Userlist, null, 4));
// 저장 한 후에 저장된 내용을 불러와 변수에 저장하자.
// 만약 userlist 파일이 존재하면 불러오고 아니면 지나간다.
if (fs.existsSync('data/userlist.json')) {
    let rawdata = fs.readFileSync('data/userlist.json');
    //     그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    sampleUserList = JSON.parse(rawdata);
    console.log(sampleUserList);
    //     지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    //     뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
}
// 클라이언트가 기능을 호출하면 서버에서 기능의 경로를 확인하고 불러온 뒤 그 안에서 필요한
// static한 소스 파일(ex 이미지)들이 있을 때 다시 서버로 불러와달라고 요청을 한다.
// 서버는 static한 소스파일을 달라는 요청을 받으면 static 경로를 찾아간다.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('tmpindex.html');
})

app.get('/signin_form', (req, res) => {
    console.log('회원가입신청');
    res.render('signin_form.html');
})

app.post('/signin', (req, res) => {
    // console.log(req.body);
    // 회원가입
    let userid = req.body.id;
    if (sampleUserList[userid]) {
        console.log('같은 아이디로 회원가입 요청 : 거부');
        res.redirect('/signin_form');
        return;
    }
    let password = req.body.password;
    console.log('userid = ', userid);
    console.log('password = ', password);

    hasher({
        // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
        password: req.body.password
    }, (err, pass, salt, hash) => {
        if (err) {
            console.log('ERR: ', err);
            res.redirect('/signup_form');
        }
        let user = {
            userid: userid,
            password: hash,
            originpass: pass,
            salt: salt
        }
        sampleUserList[userid] = user;
        fs.writeFileSync('data/userlist.json', JSON.stringify(sampleUserList, null, 4));
        console.log('user added : ', user.userid);
        res.redirect('/login_form');
    });
});

app.get('/login_form', (req, res) => {
    res.render('login_form.html', { fmsg: req.flash('fmsg') });
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
        console.log('[found] userid = ', userid);
        return hasher({
            password: password,
            salt: user.salt
        }, function (err, pass, salt, hash) {
            if (err) {
                console.log('ERR : ', err);
                res.redirect('/login_form');
                req.flash('fmsg', '오류가 발생했습니다.');
            }
            if (hash === user.password) {
                console.log('INFO : ', userid, ' 로그인 성공')
                req.session.user = sampleUserList[userid];
                // 세션 정보가 한번 저장이 되면 세션 정보가 변경되지 않는 이상 
                // 다시 req.session.save 를 해줄 필요가 없다.
                req.session.save(function () {
                    res.redirect('/carlist');
                })
            } else {
                req.flash('fmsg', '패스워드가 맞지 않습니다.');
                console.log('비밀번호가 틀렸습니다.');
                res.redirect('/login_form');
            }
        });
    } else {
        req.flash('fmsg', '아이디가 없습니다.');
        res.redirect('/login_form');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(function () {
        req.session;
    });
    res.redirect('/');
})

app.get('/carlist', (req, res) => {
    // cookie의 user 정보 가져와서 carlist.html 에 뿌려주기
    if (req.session.user) {
        console.log('로그인된 사용자');
        res.render('carlist.html', { myid: req.session.user.userid });
    } else {
        console.log('로그인 안됨. 로그인 페이지로 이동');
        res.redirect('/login_form');
    }
})

app.get('/carinfo', (req, res) => {
    if (req.session.user) {
        console.log('차 정보 확인');
        res.render('carinfo.html', { myid: req.session.user.userid })
    } else {
        console.log('로그인 안됨. 로그인 페이지로 이동');
        res.redirect('/login_form');
    }
})

app.get('/carhistory', (req, res) => {
    if (req.session.user) {
        console.log('차 정보 확인');
        res.render('carhistory.html', { myid: req.session.user.userid })
    } else {
        console.log('로그인 안됨. 로그인 페이지로 이동');
        res.redirect('/login_form');
    }
})

app.post('/carimg', (req, res) => {
    console.log(req.body);
    imagelist = [];
    if (req.body.company == '벤츠' && req.body.size == '경형') {
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '소형') {
        imagelist.push(`<div class='mercedes'><img src='image/m1.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '준중형') {
        for (let i = 2; i < 16; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '중형') {
        for (let i = 16; i < 29; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '준대형') {
        for (let i = 51; i < 56; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '대형') {
        for (let i = 29; i < 43; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠' && req.body.size == '스포츠카') {
        for (let i = 43; i < 51; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }
    if (req.body.company == '벤츠') {
        for (let i = 1; i < 56; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
        res.json(imagelist);
        return;
    }

})



app.listen(port, function () {
    console.log('server listen at ...' + port);
});