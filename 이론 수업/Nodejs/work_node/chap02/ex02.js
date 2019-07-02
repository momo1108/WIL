let name = '길동 홍';
let age = 30;

console.log(name);
console.log(age);

// 객체 선언 및 대입
let User = {};
User["age"] = 20;
User["name"] = '심청이';
User.phonenumber = '010-1111-2222';

// 객체 사용
console.log("이름 :", User.name);
console.log("나이 : %d", User.age);
console.log("전화번호 : %s", User.phonenumber);

let arr = [10,20,30,40];
console.log(arr);