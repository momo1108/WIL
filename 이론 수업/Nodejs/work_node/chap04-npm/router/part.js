// var로 변수를 선언해줘도 모듈이 분리되어있으면 다른 곳에서 그 변수를 쓰지 못한다.
var a = 'parta';
var b = 'partb';

var funcd = function(req){
        console.log(req+' is what I want');
    };


// exports에 변수들을(객체, string) 다른곳에서 쓸 수 있게 선언해줄 수 있다.
exports.c = 'partc';
exports.funcc = function(){
    console.log('funcc 출력');
}