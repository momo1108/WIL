const _ = require('lodash');
let count = 0;
while((12 - _.xor([1, 15, 19, 23, 28, 42], _.sortBy(_.sampleSize(_.range(1, 45), 6))).length) / 2 !== 6){
    count++;
}
// for(let i=0; i<1000000; i++){
//     if((12 - _.xor([1, 15, 19, 23, 28, 42], _.sortBy(_.sampleSize(_.range(1, 45), 6))).length) / 2 === 6) count++;
// }
console.log(`1등에 ${count}번만에 당첨되셨습니다!`);