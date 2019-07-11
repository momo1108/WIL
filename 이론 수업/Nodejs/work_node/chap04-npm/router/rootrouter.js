var express = require('express');
const app = express();
const hasher = require('pbkdf2-password')();
const fs = require('fs');
var sampleUserList = {};
var sampleCarList = [
    {
        carNumber: '22주2222',
        owner: '손오공',
        model: 'Morning',
        company: 'KIA',
        numOfAccident: 1,
        numOfOwnerChange: 3
    },
    {
        carNumber: '11주1111',
        owner: '홍길동',
        model: 'SONATA',
        company: 'HYUNDAI',
        numOfAccident: 2,
        numOfOwnerChange: 1
    },
    {
        carNumber: '33주3333',
        owner: '김의중',
        model: 'I30',
        company: 'HYUNDAI',
        numOfAccident: 4,
        numOfOwnerChange: 2
    },
    {
        carNumber: '44주4444',
        owner: '전용준',
        model: 'K5',
        company: 'HYUNDAI',
        numOfAccident: 5,
        numOfOwnerChange: 6
    }
]

var router = express.Router();

if (fs.existsSync('data/userlist.json')) {
    let rawdata1 = fs.readFileSync('data/userlist.json');
    // 그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    sampleUserList = JSON.parse(rawdata1);
    console.log(sampleUserList);
    // 지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    // 뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
}

router.get('/', (req, res) => {
    res.render('tmpindex.html');
})

router.get('/signin_form', (req, res) => {
    console.log('회원가입신청');
    res.render('signin_form.html');
})

router.post('/signin', (req, res) => {
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

router.get('/login_form', (req, res) => {
    res.render('login_form.html');
})

router.post('/login', (req, res) => {
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

router.get('/carlist', (req, res) => {
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
router.get('/test/setlocals',(req,res)=>{
    res.locals.test2 = 'test2';
    res.render('test/locals.html',{test1: 'test1'});
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
 
    // if(req.session.user) {
    //     delete req.session.user;
    // }
 });
 
router.get('/print',(req,res)=>{
    res.json(sampleCarList);
})

router.post('/api/search',(req,res)=>{
    console.log(req.body);
    console.log(req.body.searchText);

    let carNum = req.body.searchText;
    // let carNum = '22주2222';
    // find 함수는 하나만 찾아준다. 여러개 찾아주는것은 filter
    let found = sampleCarList.find(function(element) {
        console.log('element = ', element);
        if (element.carNumber === carNum) {
            console.log('found');
            return element;
        }
    });

    console.log('found = ', found);
    res.json(found);
})

router.post('/api/filter',(req,res)=>{
    console.log(req.body);
    console.log(req.body.searchText);

    let company = req.body.searchText;
    let found = sampleCarList.filter(function(element) {
        console.log('element = ', element);
        if (element.company === company) {
            console.log('found');
            return element;
        }
    });

    console.log('found = ', found);
    res.json(found);
})

module.exports = router;