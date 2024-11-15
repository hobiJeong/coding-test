function solution(a, b) {
    let ab = Number(a.toString() + b.toString());
    return ab > 2 * a * b || ab === 2 * a * b ? ab : 2 * a * b
    
}