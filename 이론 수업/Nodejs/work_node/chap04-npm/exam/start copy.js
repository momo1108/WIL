const express = require('express');
const path = require('path');
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const hasher = require('pbkdf2-password')();
const morgan = require('morgan');
const port = 3000;
let info = [];
let imagelist = [];
let sampleUserList = [];

// 기능을 호출한다는 개념이다. ejs에게 렌더링을 해달라 요청하기 때문에 랜더링을 할 기능들의 경로를 설정해준다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: false
}));

// 받아오는 데이터를 json으로 받아온다.
app.use(express.json());
// 쿠키파서 미들웨어 등록
app.use(cookieparser());

app.use(session({
    // 암호화 키 (임의지정 가능)
    secret: '1q2w3e4r',
    // 변화가 없어도 요청할 때마다 저장할것이냐
    resave: false,
    // uninitialized 저장된 상태로 시작하겠다.
    saveUninitialized: true,
    store: new FileStore()
}));

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
    console.log(req.body);
    // 회원가입
    let userid = req.body.id;
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
            salt: salt
        }
        sampleUserList.push(user);
        console.log('user added : ', user.userid);
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
    let bFound = false;

    for (let i = 0; i < sampleUserList.length; i++) {
        let user = sampleUserList[i];
        console.log(sampleUserList[i]);
        if (userid === user.userid) {
            console.log('[found] userid = ', userid);
            bFound = true;

            // hasher는 비동기이기 때문에 break문이 어떤것을 break할건지 모른다.
            // hasher를 비동기로 실행시키고 다 되면 뒤에 이어지는 함수를 실행시켜달라함.
            // https://dev.eyegood.co.kr/entry/Javascript-%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-return%EA%B3%BC-break%EC%9D%98-%EC%B0%A8%EC%9D%B4
            hasher({
                password: password,
                salt: user.salt
            }, function (err, pass, salt, hash) {
                if (err) {
                    console.log('ERR : ', err);

                }
                if (hash === user.password) {
                    console.log('INFO : ', userid, ' logged in successfully')

                    req.session.user = sampleUserList[i];
                    req.session.save(function () {
                        res.redirect('/carlist');
                    })
                    return;
                } else {
                    console.log('Wrong passwd.');
                    res.redirect('/login_form');
                    return;
                }
            });
        }
        if (bFound) break;
    }

    if (!bFound) {
        console.log('Theres no such ID.');
        res.redirect('/login_form');
    }
    
});

app.get('/carlist', (req, res) => {
    // cookie의 user 정보 가져와서 carlist.html 에 뿌려주기
    res.render('carlist.html', { myid: req.session.user.userid });
})

app.get('/carlist2',(req,res)=>{
    // if의 ()와 같은 조건문에서는 변수값이 들어가는게 아닌 true false로 들어간다.
    if(req.session.user){
        console.log('로그인된 사용자');
        res.render('carlist.html', { myid: req.session.user.userid });
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