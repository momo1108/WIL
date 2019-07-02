var output = '';

for (var i = 1; i <= 16; i++) {
    for (j = 0; j < i; j++) {
        output += "*";
    }
    if (i==16) break;
    output += "\n";
    
}
console.log(output);