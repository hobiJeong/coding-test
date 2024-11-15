// function solution(s){
//     let countp = 0;
//     let county = 0;
//     const low = s.toLowerCase();
//     for (i = 0; i < low.length; i++) {
//         if (low[i] === 'p') {
//             countp ++;
//         } else if (low[i] === 'y'){
//             county ++;
//         }
//     }
//     if (countp === county) return true;
//     return false;
// }
// function solution(s) {
//   upper_s = s.toUpperCase();
//   let pNum = 0;
//   let yNum = 0;
//   for (let i = 0; i < upper_s.length; i++) {
//    if (upper_s[i] === "P") {
//       pNum++;
//     } else if (upper_s[i] === "Y") {
//       yNum++;
//     }
//   }
//   if (pNum === yNum) {
//     return true;
//   } else {
//     return false;
//   }
// }
function solution(s){
    if (s.split(/p/gi).length === s.split(/y/gi).length)
    {
     return true;
    }
    else
    {
     return false;   
    }
}