// function solution(n) {
//     const water = '수';
//     const park = '박';
//     let answer = '';
//     for(let i=1; i<=n; i++) {
//       if(i % 2 === 1){
//        answer += water;
//       } else {
//        answer += park;
//       }
// }
//         return answer;

// }

// function solution(n) {
//     var answer = '';
//     for(let i=0;i<n;i++)
//     if(i%2==0)
//         answer+='수';
//     else
//         answer+='박';
//     return answer;
// }

function solution(n) {
    let answer = "";
    let a = "";
    for (let i = 1; i <= n; i++)
        {
            if(i%2===1)
            {
                answer = "수";
            }
            else
            {
                answer = "박";
            }
            a += answer; 

        }
    return a;
}