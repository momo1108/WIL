var num1 = 1;
var num2 = 2;
var result = num1 + num2;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
// 템플릿 문자열은 백틱(`)을 이용해서 문자열 표현 시 
// 내부에 변수 및 개행문자, 공백, 탭 등을 그대로 사용 가능하다
// 자바스크립트의 표현방식도 사용 가능하다.
var string2 = `${num1} 더하기 ${num2}는 '${result}'`;


console.log(string1);
console.log(string2);
