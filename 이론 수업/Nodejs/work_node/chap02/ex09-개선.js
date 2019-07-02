var sayNode = function () {
    console.log('Node');
 };
 var es = 'ES';
 const newObject = {
    sayJS() { // define function 함수정의시 원래는 키 : 밸류 형식으로 선언했으나 ES6는 생략해서 선언가능
        console.log('JS');
    },
    sayNode, // key=value 인 경우 생략 가능
    [es + 6]: 'Fantastic', // dynamic key
 };
 newObject.sayNode(); // Node
 newObject.sayJS(); // JS
 console.log(newObject.ES6);
 