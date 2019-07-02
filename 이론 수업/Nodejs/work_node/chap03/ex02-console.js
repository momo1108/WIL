// console.log 수행 시간 출력

console.time('asd');
for (let i = 0; i < 10000; i++) {
   continue;
}
console.timeEnd('asd');

// console.trace 에러 위치 추적

function b() {
    console.trace('에러 위치 추적');
 }
 
 function a() {
    b();
 }
 a();