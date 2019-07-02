// 화살표 함수
// 화살표 방식의 함수 선언 추가됨
// 기존 function 키워드 대신 ‘=>’ 화살표 사용
// 간단한 리턴문의 경우 {, }, return 없이 사용 가능


// ( ) => { … }   	// 매개변수가 없는 경우
// x => { … } 		// 매개변수가 하나인경우 ( ) 생략 가능
// (x, y) => { … }  // 매개변수가 여러 개인 경우 , 사용, ( ) 생략 불가
// x => (x * x)		// 함수 몸체가 return 문인 경우 축약 가능

function add1(x, y) {
    return x + y;
}
//  함수 선언과정을 줄였다.
const add2 = (x, y) => {
    return x + y;
}
//  괄호와 리턴또한 생략 가능
const add3 = (x, y) => (x + y);

const time = (a,b) => (a*b);
console.log(time(10,20));
const print = (a) => (console.log(a));
print('이게뭐야');

// 인자가 없는 함수도 가능
