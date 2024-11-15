
// function solution(n) {
// let str = String(n);
// let int = str.split('');
// let nmap = int.map(Number);
// let answer = 0;
// for(i = 0; i < nmap.length; i++) {
//   answer += nmap[i];
// }
//   return answer;
// }

// function solution(n) {
//     let answer = 0;
//     let strlength = 0;

//     n = String(n);
//     n = n.split('');
//     strlength = n.length;

//     for (let i = 0;i < strlength;i++){
//         answer += Number(n[i]);
//     }
//     return answer;
// }

// function solution(n)
// {
//     let sum = 0
//     const nString = n.toString()  
//     const nArray = nString.split('')
    
//     for (let i = 0; i < nArray.length; i++){
//         sum += +nArray[i]
//     }                             
//     return sum;
    
// }
function solution(n) {
    let sum = 0
    const Arr = String(n).split('').map(Number);
    Arr.forEach(num => sum += num )
    console.log(sum);
    return sum;
}