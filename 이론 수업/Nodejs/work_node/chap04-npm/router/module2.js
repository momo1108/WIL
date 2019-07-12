var myobj = {
    a: 'a',
    b: 'b',
    'funca': function(){
        console.log('funca 출력');
    },
    'funcb': function(){
        console.log('funcb 출력');
    }
    // fs.writeFileSync 함수도 같은 방식으로 모듈화 되어있을 것이다.
    // writeFileSync: funtion(~~~) {~~~~}  형식으로
}

// module.exports 를 exports보다 더 많이쓴다.
module.exports = myobj;