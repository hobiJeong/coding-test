function solution(n) {
    let answer = 0;
    for (let i = n; i >= 0; i--)
    if (n % 2 === 1 && i % 2 === 1) {
        answer += i;
    } else if (n % 2 === 0 && i % 2 === 0) {
        answer += i ** 2; 
    }
    return answer;
}