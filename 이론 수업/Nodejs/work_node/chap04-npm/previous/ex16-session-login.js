const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const port = 3000;
// pbkdf2 는 모두 암호화해주는 모듈. pbkdf2-password는 암호만 암호화해주는 모듈.
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
    }, (err, pass, salt, hash) => {
        if (err) {
            console.log('ERR: ', err);
            res.redirect('/signup_form');
        }
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

app.get('/carlist2',(req,res)=>{
    // if의 ()와 같은 조건문에서는 변수값이 들어가는게 아닌 true false로 들어간다.
    if(req.session.user){
        console.log('로그인된 사용자');
        res.render('carlist2.html', {
            list: sampleCarList,
            user: req.session.user
        });
    } else {
        console.log('로그인 안됨. 로그인 페이지로 이동');
        res.redirect('/login_form');
    }
})

app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})