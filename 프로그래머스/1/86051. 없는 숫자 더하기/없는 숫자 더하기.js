function solution(n) {
    const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    
    zeroToNine.forEach((el) => {
        if (!n.includes(el)) {
            answer += el;
        }
    })
    
    return answer;
}