// 터미널에서 express --view=ejs 프로젝트명 으로 프로젝트 생성 가능
// 터미널에서 express --view=pug 프로젝트명 으로 프로젝트 생성 가능
// 터미널에서 express --view=hbs 프로젝트명 으로 프로젝트 생성 가능
const express = require('express');
const app = express();
// const flash = require('connect-flash');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const port = 3000;
// pbkdf2 는 모두 암호화해주는 모듈. pbkdf2-password는 암호를 암호화해줄 때 사용하는 모듈.

app.set(path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// path.join은 두 경로를 이어주는 역할 - string으로 붙여줘도 되지 않나?
// path.join 은 윈도우, 리눅스 등 OS에 맞춰서 자동으로 이어주기 때문에 편하다.
app.use(express.static(path.join(__dirname, '/public')));
app.use('/files', express.static(path.join(__dirname, '/uploads')))
// extended: false → querystring library 사용, true → qs library 사용
app.use(express.urlencoded({
    extended: false
}))

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
// 패스워드 암호화
// 회원 가입 시 입력한 패스워드를 암호화 해서 저장
// 로그인 시 인증 처리
global.myval = 1000;
// 모듈을 사용할 수 있다.
// require로 불러올 때 js파일은 확장자 생략 가능
var part1 = require('./router/module1.js');
var part2 = require('./router/module2.js');
var part3 = require('./router/module3.js')(100,200);
// module3, module4는 함수를 require하기 때문에 뒤에 파라미터를 정해주거나 아래에서 사용할 때 파라미터를 정해줘야한다.
var part4 = require('./router/module4.js')();
var router1 = require('./router/testrouter.js')(path);
var router2 = require('./router/rootrouter.js');
// node 자체에서 사용할 수 있는 global 변수를 선언해줄 수 있다.

// 기본 경로도 설정해줄 수 있다. /test/router의 경우 모듈 js 파일 안에서 /test부분을 안써줘도 된다.
// https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
app.use('/test',router1);
app.use(router2);
part2.funca();
part1.b();
console.log(part3.a);
console.log(part3.b);
part3.funca(10);
// 자바스크립트같은 경우는 함수의 다른 parameter를 지정해주지 않아도 undefined로 자동 지정(친절)
// 자바같이 엄격한 언어는 함수의 parameter를 빈칸으로 비워두면 에러가 난다.
console.log(part4.a);
console.log(part4.b);
console.log(part4.c);


// app.use(flash());



// 배열을 하나씩 전부다 읽는 건 비효율적이다.
// 배열 구조가 아닌 하나의 객체로 만들어보자.


// fs.writeFile - 파일을 생성해라 라는 비동기함수
// fs.writeFileSync - 뒤에 Sync를 붙어있는 동기함수를 사용
// JSON.stringify로 json 포맷으로 변환시킨 후 저장해야 내용 확인 가능(옵션을 줘서 이쁘게 저장 가능).
// JSON.stringify(Userlist, null, 스페이스 개수)
// fs.writeFileSync('data/userlist.json', JSON.stringify(Userlist, null, 4));
// 저장 한 후에 저장된 내용을 불러와 변수에 저장하자.
// 만약 userlist 파일이 존재하면 불러오고 아니면 지나간다.


// if (fs.existsSync('data/userlist.json')) {
//     let rawdata2 = fs.readFileSync('data/userlist.json');
//     sampleCarList = JSON.parse(rawdata2);
//     console.log(sampleCarList);
// }



app.listen(port, () => {
    console.log('Server is listening to the port number', port);
})