// function solution(array, commands) {
//     let arrsum = [];
//     const answer = [];
      
//       for (let i = 0; i < commands.length; i++) {
//         arrsum = array.slice(commands[i][0] - 1 , commands[i][1]);
//         arrsum.sort((a,b) => a-b);
//         answer.push(arrsum[commands[i][2] - 1] );
//       }
//     return answer;
//   }
// function solution(array, commands) {
//   let i;
//   let j;
//   let k;
//   let ArrNum = commands.length;
//   let answer = 0;
//   const arr = new Array();
//     console.log(arr);
//   for (let a = 0; a < ArrNum; a++) {
//     i = commands[a][0];
//     j = commands[a][1];
//     k = commands[a][2];
//     let array1 = array.slice(i - 1, j);
//     array1.sort((a, b) => a - b);
//     answer = array1[k - 1];
//     arr[a] = answer;
//   }

//   return arr;
// }

function solution(array, commands) {
  const result = [];
  for (let i=0; i<commands.length; i++) {
    const answer = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b);
    result.push(answer[(commands[i][2])-1]);
  }
  return result;
}