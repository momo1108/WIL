const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.set(path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname,'public')));

var Userlist = [
    {
        number : 1,
        name : '방혜찬',
        age : 27,
        address : '인천',
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

app.listen(port, ()=>{
    console.log('Server is listening to the port number',port);
})