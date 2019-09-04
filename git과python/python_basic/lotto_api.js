const axios = require('axios');
const _ = require('lodash');
// axios를 활용하여
// https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874
// 로 요청을 보내서

// 1등 번호 6개가 담긴 winner 배열을 만들어 출력하세요
// > [1, 5, 19, 23, 28, 42]
let response;
let arr = [];
// axios는 결과값이 프로미스 객체로 오기때문에 .then을 사용해야한다.
axios.get('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874')
    .then((res)=>{
        response = res.data;
        for(let i=1; i<=6; i++){
            // let name = 'drwtNo'+i;
            arr.push(response[`drwtNo${i}`]);
        }
        console.log(_.sortBy(arr));
    })
    .catch((err)=>{
        console.log('오류 : '+err);
    })
// json 파일은 그저 문자열일 뿐이다. object와 비슷하게 생겼을 뿐.