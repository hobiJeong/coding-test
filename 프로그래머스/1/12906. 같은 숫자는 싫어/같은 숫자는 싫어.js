function solution(arr) {
    const solution = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (solution[solution.length - 1] !== arr[i]) {
            solution.push(arr[i]);
        }
    }
    
    return solution
}