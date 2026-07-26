function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j] || j + 1 === prices.length) {
               answer.push(j - i);

               break;
            }
        }
    }
    
    answer.push(0);
    return answer;
}