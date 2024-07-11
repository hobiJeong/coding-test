function solution(a, d, included) {
    let sum = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            if (i === 0) {
                sum += a;
                
                continue;
            }
            
            sum += a + d * i;
        }
    }
    
    return sum;
}