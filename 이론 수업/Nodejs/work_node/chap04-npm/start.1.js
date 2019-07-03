const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let info = [];
let i = 0;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res, next) => {
    res.render('select.html');
    next();
})
app.use((req,res) => {
    res.render('Register.html');
})


app.listen(port, function () {
    console.log('server listen at ...' + port);
});