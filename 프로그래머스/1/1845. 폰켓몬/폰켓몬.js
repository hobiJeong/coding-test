function solution(nums) {
    const canPickNum = nums.length / 2;
    const differentMap = new Map();
    
    nums.forEach((num) => {
        differentMap.set(num, (differentMap.get(num) || 0) + 1)
    })
    
    return canPickNum >= differentMap.size ? differentMap.size : canPickNum
}