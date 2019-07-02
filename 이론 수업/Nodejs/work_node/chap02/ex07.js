// 상수를 선언할 때
// const y = 3;
// const또한 let처럼 중복선언이 안됀다.
// 하지만 let은 값을 바꿀 수 있고, const는 바꾸지 못한다.
var a = 10;
let b = 10;
const c = 10;

var a = 20;
// let b = 20;
// c = 20;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);