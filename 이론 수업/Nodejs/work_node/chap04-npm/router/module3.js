// 초기값이 있는 모듈 (생성자 패턴)
module.exports = function (param1, param2) {
    let mymodule = {
        a : param1,
        b : param2,
        funca : function (val) {
            console.log(val);
        }
    }
    return mymodule;
}