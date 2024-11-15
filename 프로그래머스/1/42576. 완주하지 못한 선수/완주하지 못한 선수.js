// function solution(lottos, win_nums) {
//   const ranknum = { 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2};
//   const answer = [];
//   let zerocount = 0;
//   let min = 0;
  
//   for(let i of win_nums) {
//     if(lottos[i]) {
//       min += 1;
//     }
//   }
  
//   for(let i = 0; i < 6; i++) {
//     if(lottos[i] === 0) {
//       zerocount += 1;
//     } 
//   }
//   max = min + zerocount;
  
//   for(let i = 0; i < 6; i++) {
//     if(ranknum[i] === max) {
//       answer.push[i]
//     }
//   }
//   console.log(answer);

//     return answer;
// }
// function solution(participant, completion) {
//     let answer = '';
    
//     participant.sort();
//     completion.sort();
//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             break;
//         }
//     }
//     return answer;
// }
function solution(participant, completion, answer = "") {
  const players = {};
  for (i of participant) {
    //객체 만들어주기
    players[i] = 0;
  }
  for (i of participant) {
    //동일한 객체 찾기
    players[i] += 1;
  }
    
  for (i of completion) {
    //없는 이름 찾기
    players[i] -= 1;
  }
    
  for (i in players) {
    //i 가 0 이 아닌 이름 찾기
    if (players[i]) {
      return i;
    }
  }
}