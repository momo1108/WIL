const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let info = [];
let user = {};
let i = 0;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.render('index.html');
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