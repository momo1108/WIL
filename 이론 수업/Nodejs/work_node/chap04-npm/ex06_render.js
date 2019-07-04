const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 여태까지 화면을 띄워주고싶으면 res.write, res.send 등등을 이용해서 코드로 직접 띄워주었다.
// 이런 불편함을 해소하기위해 이것을 사용한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// 위의 세줄이 핵심 : html 파일을 ejs 엔진을 통해 렌더링(클라이언트 웹 브라우저에 뿌려준다)한다.

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}))
var sampleCarList = [{
    carNumber: '11주1111',
    owner: '홍길동',
    model: 'SONATA',
    company: 'HYUNDAI',
    numOfAccident: 2,
    numOfOwnerChange: 1
},

{
    carNumber: '22주2222',
    owner: '손오공',
    model: 'MORNING',
    company: 'KIA',
    numOfAccident: 1,
    numOfOwnerChange: 3
}
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1>');
})

app.get('/html', (req,res) => {
    res.render('test.html');
})

app.get('/carlist', (req,res) => {
    res.render('carlist.html');
})

app.get('/api/carlist', (req,res) => {
    res.json(sampleCarList);
})

app.listen(port, () => {
    console.log('Server is litening to port number',port);
})