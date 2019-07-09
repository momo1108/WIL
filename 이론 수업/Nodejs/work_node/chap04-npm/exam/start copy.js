const express = require('express');
const path = require('path');
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const port = 3000;
let info = [];
let imagelist = [];
let user = {};

// 기능을 호출한다는 개념이다. ejs에게 렌더링을 해달라 요청하기 때문에 랜더링을 할 기능들의 경로를 설정해준다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

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
    let k = 0;
    user = req.body;
    console.log(req.body);
    while (1) {
        if (info.length==0){
            info.push(user);
            console.log(`회원수 : ${info.length} 명`);
            console.log(info);
            req.session.user = user;
            req.session.save(function () {
                res.redirect('/carlist');
            })
            break;
        }else if (info[k].id == user.id) {
            res.redirect('/signin_form');
            break;
        }
        k++;
        if (k >=info.length) {
            info.push(user);
            console.log(`회원수 : ${info.length} 명`);
            console.log(info);
            res.session = user;
            req.session.save(function () {
                res.redirect('/carlist');
            })
            break;
        }
    }
})

app.get('/login_form', (req, res) => {
    res.render('login_form.html');
})

app.post('/login', (req, res) => {
    let j = 0;
    user = req.body;
    while (1) {
        if (info.length==0){
            res.redirect('/login_form');
            break;
        }else if (info[j].id == user.id && info[j].password == user.password) {
            res.redirect('/carlist');
            break;
        }
        j++;
        if (j >=info.length) {
            res.redirect('/login_form');
            break;
        }
    }
})

app.get('/carlist', (req, res) => {
    // cookie의 user 정보 가져와서 carlist.html 에 뿌려주기
    res.render('carlist.html',{myid: req.session.user.id});
})

app.post('/carimg', (req,res)=>{
    console.log(req.body);
    imagelist = [];
    if(req.body.company=='벤츠') {
        for(let i=1; i<56; i++) {
            imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><form action="/carinfo" class="lokup"><input type="submit" value="정보 조회"></form>│<form action="/carhistory" class="lokup"><input type="submit" value="이력 조회"></form></div></div>`);
        }
    }
    res.json(imagelist);
})



app.listen(port, function () {
    console.log('server listen at ...' + port);
});