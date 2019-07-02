function print(i,cb) {
    console.log(i,'줄의 스타 트리를 출력합니다.');
    let count = 1;
    while(count<=5){
        let time = count * 500;
        setTimeout(function() {
            console.log('.\n');
        }, time);
        count++;
    }
    setTimeout(function() {
        console.log('---Tree---');
        cb(i);
    }, 3000);
    
}

function star(starnum) {
    var output = '';

    for (var i = 1; i <= starnum; i++) {
        for (j = 0; j < i; j++) {
            output += "*";
        }
        if (i == starnum) break;
        output += "\n";
    }
    console.log(output);
}

print(7,star);