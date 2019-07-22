const proxy = require('http-proxy-middleware');
// 라우터와는 다른 개념
module.exports = (app) =>{
    app.use(
        proxy('/api', {
            target: 'http://localhost:3002'
        })
    )
}