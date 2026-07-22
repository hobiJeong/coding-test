function solution(s) {
    const sStack = [];
    
    const sArray = s.split('');
    
    sArray.forEach((el, idx) => {
        if (sStack[sStack.length - 1] === '(' && el === ')') {
            sStack.pop();
            
            return;
        } else {
            sStack.push(el)
            
            return;
        }
    })
    
    return !sStack.length;
}