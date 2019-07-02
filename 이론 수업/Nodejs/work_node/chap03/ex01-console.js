// global 객체는 브라우저의 window와 같은 전역 객체이다.
// 전역변수는 전부 global객체로 들어간다.
// 브라우저도 마찬가지로 전부 window객체로 들어간다.

var a = 'test';
var b = 10;
var c = true;
console.log(a,' ',b,' ',c);

// console.dir 객체 출력
// 객체 출력에 좀더 용이
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
 };
 console.log(obj);
 console.dir(obj);
 console.dir(obj, {
    colors: false,
    depth: 2
 });
 console.dir(obj, {
    colors: true,
    depth: 1
 });
 