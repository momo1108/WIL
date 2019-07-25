// '리퀘스트가 올 때 마다' 모든 코드가 순서대로 쭉 실행된다.
const express = require('express');
const path = require('path');
const app = express();
// const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const hasher = require('pbkdf2-password')();
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
// const flash = require('connect-messages');
// const morgan = require('morgan');
const port = 3002;
let sampleUserList = {};
let cardscr = [];
global.a = 0;
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
// app.use(cookieparser());
// app.use(flash());
app.use(session({
    // 암호화 키 (임의지정 가능)
    secret: '1q2w3e4r',
    // 변화가 없어도 요청할 때마다 저장할것이냐
    resave: false,
    // uninitialized 저장된 상태로 시작하겠다.
    saveUninitialized: true,
    store: new FileStore()
}));
app.use((req,res,next)=>{
    res.locals.user = req.session.user;
    next();
});
// fs.writeFile - 파일을 생성해라 라는 비동기함수
// fs.writeFileSync - 뒤에 Sync를 붙어있는 동기함수를 사용
// JSON.stringify로 json 포맷으로 변환시킨 후 저장해야 내용 확인 가능(옵션을 줘서 이쁘게 저장 가능).
// JSON.stringify(Userlist, null, 스페이스 개수)
// fs.writeFileSync('data/userlist.json', JSON.stringify(Userlist, null, 4));
// 저장 한 후에 저장된 내용을 불러와 변수에 저장하자.
// 만약 userlist 파일이 존재하면 불러오고 아니면 지나간다.
// if (fs.existsSync('data/userlist.json')) {
//     let rawdata1 = fs.readFileSync('data/userlist.json');
//     let rawdata2 = fs.readFileSync('data/carlist.json');
    //     그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    // sampleUserList = JSON.parse(rawdata1);
    // cardscr = JSON.parse(rawdata2);
    // console.log(sampleUserList);
    // console.log(cardscr);
    //     지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    //     뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
// }
// 클라이언트가 기능을 호출하면 서버에서 기능의 경로를 확인하고 불러온 뒤 그 안에서 필요한
// static한 소스 파일(ex 이미지)들이 있을 때 다시 서버로 불러와달라고 요청을 한다.
// 서버는 static한 소스파일을 달라는 요청을 받으면 static 경로를 찾아간다.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/files', express.static(path.join(__dirname, '/uploads')));
if (fs.existsSync('data/userlist.json')) {
    let rawdata1 = fs.readFileSync('data/userlist.json');
    //     그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
    sampleUserList = JSON.parse(rawdata1);
    console.log(sampleUserList);
    //     지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
    //     뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
}
app.use(cors());

var router1 = require('./router/login.js')(hasher, fs, sampleUserList, multer, path);
var router2 = require('./router/cars.js')(fs,cardscr,sampleUserList);
var mysqlrouter = require('./router/mysqlpool.js')(hasher);
// 기본 경로도 설정해줄 수 있다. /test/router의 경우 모듈 js 파일 안에서 /test부분을 안써줘도 된다.
// https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
app.use(router1);
app.use(router2);
app.use('/mysql', mysqlrouter);


app.listen(port, function () {
    console.log('server listen at ...' + port);
});