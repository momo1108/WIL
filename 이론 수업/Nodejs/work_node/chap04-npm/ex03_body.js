const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 1
// 미들웨어에 res.end();에서 연결이 끊어지기 때문에 뒤의 명령어는 실행이 안됌
app.use((req,res,next) => {
    console.log('사용자 미들웨어 1');
    req.body2 = {};
    req.body2.id = 'hong';
    // 미들웨어가 다음 미들웨어를 불러오는게 위에서 설정해준 next
    next();
})

app.use((req,res,next) => {
    console.log('사용자 미들웨어 2');
    req.body2.name = 'gildong';
    next();
})


// app.use((req,res,next) => {
//     console.log('사용자 미들웨어 2');
//     res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
//     res.write(`<h1>${req.body.id}</h1>`);
//     res.end();
// })

app.get('/', (req,res) => {
    console.log('/ 요청 받음');
    res.send(`<h1>${req.body2.name}</h1><h1>${req.body2.id}</h1>`);
})

app.listen(port, () => {
    console.log('Server listening...', port);
})