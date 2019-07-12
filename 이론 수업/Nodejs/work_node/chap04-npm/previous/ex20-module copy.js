const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
// const flash = require('connect-flash');
const port = 3000;
// pbkdf2 는 모두 암호화해주는 모듈. pbkdf2-password는 암호를 암호화해줄 때 사용하는 모듈.
const hasher = require('pbkdf2-password')();
const fs = require('fs');

// 패스워드 암호화
// 회원 가입 시 입력한 패스워드를 암호화 해서 저장
// 로그인 시 인증 처리

// 모듈을 사용할 수 있다.
var part1 = require('../router/part.js');
var part2 = require('../router/module.js');
var router1 = require('../router/testrouter.js');
var router2 = require('../router/rootrouter.js');
// 기본 경로도 설정해줄 수 있다. /test/router의 경우 모듈 js 파일 안에서 /test부분을 안써줘도 된다.
// https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
app.use('/test',router1);
app.use(router2);
console.log(part1.c);
part2.funca();

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

// fs.writeFile - 파일을 생성해라 라는 비동기함수
// fs.writeFileSync - 뒤에 Sync를 붙어있는 동기함수를 사용
// JSON.stringify로 json 포맷으로 변환시킨 후 저장해야 내용 확인 가능(옵션을 줘서 이쁘게 저장 가능).
// JSON.stringify(Userlist, null, 스페이스 개수)
// fs.writeFileSync('data/userlist.json', JSON.stringify(Userlist, null, 4));
// 저장 한 후에 저장된 내용을 불러와 변수에 저장하자.
// 만약 userlist 파일이 존재하면 불러오고 아니면 지나간다.
if (fs.existsSync('data/userlist.json')) {
    let rawdata1 = fs.readFileSync('data/userlist.json');
    // 그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    sampleUserList = JSON.parse(rawdata1);
    console.log(sampleUserList);
    // 지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    // 뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
}

// if (fs.existsSync('data/userlist.json')) {
//     let rawdata2 = fs.readFileSync('data/userlist.json');
//     sampleCarList = JSON.parse(rawdata2);
//     console.log(sampleCarList);
// }



app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})