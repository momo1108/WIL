console.log('Async Programming');
// 2초 타임아웃 뒤에 실행
setTimeout(function() {
    console.log('Hello Async');
}, 2000);
// setTimeout함수를 호출했다. 호출한 뒤에 결과를 받기전에 다른 명령을 실행한다.(비동기)
console.log('Done!');