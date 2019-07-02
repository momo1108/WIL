// callback 함수
function add(a,b,callback) {
    var result = a+b;
    // callback변수명은 그냥 설정해준것. 아무거나 가능
    callback(result);
    console.log('콜백함수1');
    console.log('result1= ', result);
}

function callback2 (result) {
    console.log('콜백함수2');
    console.log('result2= ', result);
}

add (10, 20, callback2);