// 비구조화 할당
// 구조 분해 할당(destructuring assignment)라고도 함
// 배열이나 객체의 속성 값을 변수에 꺼내 올 때 사용

// 배열의 비구조화 할당
// 배열의 구조 분해
var foo = ["one", "two", "three"];
var [o, t, th] = foo;
console.log(o); // "one"
console.log(t); // "two"
console.log(th); // "three"

// 나머지 할당
var [a, b, ...c] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2;
console.log(c); // [3, 4, 5];

// 리턴값 비구조화 할당

// 함수 반환값 분해
function f() {
    return [1, 2];
}

var a, b;

[a, b] = f();
console.log(a); // 1
console.log(b); // 2

// 객체의 비구조화 할당

var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true

var a, b;

({ a, b }= { a: 1, b: 2});
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);