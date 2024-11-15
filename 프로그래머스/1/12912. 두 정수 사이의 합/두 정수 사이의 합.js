// function solution(a,b) {
    
//     let answer = 0;
//     if ( a > b ) {
//         for (b; b<=a; b++) {
//             answer += b;
//         }
//         } else if ( b > a ) {
//             for (a; a<=b; a++) {
//                 answer += a;
//             }
//         } else {
//             answer = a;
//         }
//     return answer;
// }

// function solution(a, b) {
//   let result = 0;
//   const start = a - b > 0 ? b : a;
//   const stop = a - b > 0 ? a : b;
    
    
//   for (let i = start; i <= stop; i++) {
//     result += i;
//   }
//   return result;
// }

function solution(a, b) {
    let answer = 0;

    if (a <= b){
        for (a;a<=b;a++){
            answer += a;
        }
    } else {
        for(b;b<=a;b++){
            answer +=b;
        }
    }

    return answer;
}