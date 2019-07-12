// global 변수 사용
module.exports = function (param1, param2) {
    let mymodule = {
        a : param1,
        b : param2,
        // global.myval로 써도 됨.
        c : myval,
        funca : function (val) {
            console.log(val);
        }
    }
    return mymodule;
}