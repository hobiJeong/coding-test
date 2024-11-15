function solution(a, d, included) {
    let sum = 0;
    let b;
    
    for (let i = 0; i < included.length; i++) {
        included[i] && i === 0 ? 
            sum += a : included[i] && i !== 0 ? 
            sum += a + d * i : b = 'ab';
    }
    
    return sum;
}