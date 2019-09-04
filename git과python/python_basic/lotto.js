const _ = require('lodash');
// 1부터 45까지의 숫자 중, 6개를 '비복원 추출'한다.
// > []
// let lotto = [];
// let num = [];
// lotto = _.range(1,45);
// lotto = _.shuffle(lotto);
// for (let i = 0; i < 6; i++) {
//     num.push(lotto.pop());
// }
// sampleSize로 편하게 가능 (_.sampleSize(lotto, 6))
// var bubbleSort = function (array) {
//     var length = array.length-1;
//     var i, j, temp;
//     for (i = 0; i < length; i++) { 
//         for (j = 0; j < length - i; j++) {
//             if (array[j] > array[j + 1]) { 
//                 temp = array[j]; 
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// };
// num = bubbleSort(num);

// console.log(_.sortBy(_.sampleSize(_.range(1, 45), 6)));

// const winner = [1, 15, 19, 23, 28, 42];
// const bonus = [7];
// let lotto = _.sortBy(_.sampleSize(_.range(1, 45), 6));
// let lottobonus = _.xor([7], _.sortBy(_.sampleSize(_.range(1, 45), 6)));
// let match = (12 - _.xor([1, 15, 19, 23, 28, 42], _.sortBy(_.sampleSize(_.range(1, 45), 6))).length) / 2;
// console.log(match);
// _.intersection 활용하자
switch ((12 - _.xor([1, 15, 19, 23, 28, 42], _.sortBy(_.sampleSize(_.range(1, 45), 6))).length) / 2) {
    case 0:
        console.log('꽝!');
        break;
    case 1:
        console.log('꽝!');
        break;
    case 2:
        console.log('꽝!');
        break;
    case 3:
        console.log('5등 당첨!');
        break;
    case 4:
        console.log('4등 당첨!');
        break;
    case 5:
        if(_.xor([7], _.sortBy(_.sampleSize(_.range(1, 45), 6))).length===5) console.log('2등 당첨!')
        console.log('3등 당첨!');
        break;
    case 6:
        console.log('1등 당첨!');
        break;
    default:
        console.log('뭐지?')
}
