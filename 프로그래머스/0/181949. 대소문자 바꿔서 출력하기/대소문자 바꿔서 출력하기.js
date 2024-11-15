const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let strr = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(i = 0; i < str.length; i++) {
        if (str[i] == str.charAt(i).toUpperCase()) {
            strr += str.charAt(i).toLowerCase()
        } else {
            strr += str.charAt(i).toUpperCase()
        } 
    }
    console.log(strr);
});