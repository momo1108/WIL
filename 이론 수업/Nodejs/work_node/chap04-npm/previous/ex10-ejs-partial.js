const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// express의 환경변수를 setting해준다.
app.set(path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// 실제로 엔진을 세팅해준다.
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname,'public')));

// 받아오는 데이터를 json으로 받아온다.
app.use(express.json());

var Userlist = [
    {
        number : 1,
        name : '방혜찬',
        age : 27,
        address : '인천'
    },
    {
        number : 2,
        name : '안동원',
        age : 26,
        address : '서울'
    },
    {
        number : 3,
        name : '황상욱',
        age : 26,
        address : '인천'
    }
];

app.get('/',(req,res)=>{
    res.redirect('/userlist');
})

app.get('/userlist',(req,res)=>{
    res.render('ex07-test.html');
})

app.get('/api/userlist', (yochung, baneung) => {
    baneung.json(Userlist);
})

app.post('/submit',(req,res)=>{
    console.log('새로운 회원\n',req.body);
    Userlist.push(req.body);
    res.json(Userlist);
})

app.get('/ejs',(req,res)=>{
    res.render('ejs.html', {userid: 'momo1108', name: '방혜찬', age: 27, loop: 5});
})

app.get('/ejs2',(req,res)=>{
    res.render('ejs2.html', {list: Userlist});
})

app.get('/ejs3',(req,res)=>{
    res.render('ejs3.html', Userlist[0]);
})
// render는 ejs의 기능이므로 입력받는 인자의 확장자 default가 .ejs이다. 따라서 ejs 확장자를 쓰는 파일은
// 확장자를 안붙여줘도 된다.
app.get('/main',(req,res)=>{
    res.render('main');
})

app.listen(port, ()=>{
    console.log('Server is listening to the port number',port);
})