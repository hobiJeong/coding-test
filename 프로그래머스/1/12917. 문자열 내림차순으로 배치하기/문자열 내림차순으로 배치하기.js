// function solution(s) {
//     let arr = s.split('');
//     let sor = arr.sort();
//     let res = sor.reverse();
//     const answer = res.join('');
//     return answer;   
// }

// function solution(s) {
//         const answer = [];
//     for (let i=0;i<s.length;i++) {
//       answer.push(s[i]);
//     }
//     return answer.sort().reverse().join('');
//   }
function solution(s) {
    let answer = '';
    

    const key = s.split('');

    key.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });
    answer = key.join('');

    return answer;
}