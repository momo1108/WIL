// exports에 변수들을(객체, string) 선언해줄 수 있다.
exports.part = {a: 'a', b: 'b'};
exports.a = 'parta';
exports.b = 'partb';

exports.func = {
    funca : function(req){
        console.log(req+' is what I want');
    }
}
// 아무것도 없이 app.use, app.get들을 쓰려하면 오류가 난다. app이 선언되지 않았기 때문이다.
// app.use((req,res,next)=>{
//     console.log('파트 미들웨어부분');
//     next();
// });

// app.get('/moduletest', (req,res)=>{
//     console.log('파트 테스트');
//     res.send('파트 테스트');
// })