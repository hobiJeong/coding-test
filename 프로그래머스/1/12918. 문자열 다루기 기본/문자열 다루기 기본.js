// function solution(s) {
//     if (s.length === 4 || s.length === 6) {
//         for (let i = 0; i < s.length; i++) {
//             if (isNaN(+s[i])) {
//                 return false;
//             }
//         }
//         return true;
//     } else {
//         return false;
//     }
// }
// function solution(s) {
//     let answer = true;
//     let key = [];
//     let strlength = 0;

//     strlength = s.length;
    
//     key = s.split('');
    
//     if (strlength === 4 || strlength === 6){
     
//         for (let i = 0; i < strlength; i++)
//         {
//          if (isNaN(key[i]))
//            {
//                return answer = false;
//            }
//         }
//   } else {
//     return answer = false
//   }
//     return answer;
// }

// function solution(s) {
//   if (s.length === 4 || s.length === 6) {
//     let splitS = s.split("");
//     let answer = true;
//     for (let i = 0; i < splitS.length; i++) {
//       if (isNaN(splitS[i]) === true) {
//         answer = false;
//         return answer;
//       } else {
//         answer = true;
//       }
//     }
//     return answer;
//   } else {
//       return false;
//   }
// }

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
