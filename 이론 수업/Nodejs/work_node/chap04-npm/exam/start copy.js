const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let info = [];
let user = {};
let i = 0;

// 기능을 호출한다는 개념이다. ejs에게 렌더링을 해달라 요청하기 때문에 랜더링을 할 기능들의 경로를 설정해준다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}));
// 클라이언트가 기능을 호출하면 서버에서 기능의 경로를 확인하고 불러온 뒤 그 안에서 필요한
// static한 소스 파일(ex 이미지)들이 있을 때 다시 서버로 불러와달라고 요청을 한다.
// 서버는 static한 소스파일을 달라는 요청을 받으면 static 경로를 찾아간다.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('tmpindex.html');
})

app.get('/signin_form', (req, res) => {
    res.render('signin_form.html');
})

app.post('/signin', (req, res) => {
    let k = 0;
    user = req.body;
    while (1) {
        if (i==0) {
            info.push(user);
            //res.render('carlist.html');
            res.redirect('/carlist');
            break;
        }
        if (info[k].id == user.id) {
            res.redirect('/signin_form');
            break;
        }
        k++;
        if (k >= i) {
            info.push(user);
            res.redirect('/carlist.html');
            break;
        }
    }
    console.log('현재 유저 목록\n', info);
    i++;
})

app.get('/login_form', (req, res) => {
    res.render('login_form.html');
})

app.get('/carlist', (req, res) => {
    console.log('들어옴');
    res.render('carlist.html');
})

app.post('/login', (req, res) => {
    let j = 0;
    user = req.body;
    while (1) {
        if (info[j].id == user.id && info[j].password == user.password) {
            res.redirect('/carlist');
            break;
        }
        j++;
        if (j >= i) {
            res.redirect('/login_form');
            break;
        }
    }
})



app.listen(port, function () {
    console.log('server listen at ...' + port);
});