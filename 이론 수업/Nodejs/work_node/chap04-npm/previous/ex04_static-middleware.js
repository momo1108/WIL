const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 사용법
// app.use(서비스 경로(안넣어도됨),express.static(path.join(__dirname, '서비스경로')));
// app.use();
app.use(express.static(path.join(__dirname, 'public')));
// 찾아보고 있으면 출력, 없으면 넘어감
// 아파치는 자동으로 경로를 url에 매핑을 해주나
// node(와스)의 경우에는 스태틱 미들웨어를 사용하지 않으면 url 매핑이 되어있지않다.

app.get('/', (req,res) => {
    res.send('<h1>home page</h1>');
});

app.listen(port, () => {
    console.log('Server is listening to the port',port);
})