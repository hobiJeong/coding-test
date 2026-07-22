function solution(s) {
    const sStack = [];
    
    const sArray = s.split('');
    
    sArray.forEach((el, idx) => {
        if (idx === 0) {
            sStack.push(el);
            
            return;
        }
        
        if (sStack[sStack.length - 1] === '(' && el === ')') {
            sStack.pop();
            
            return;
        } else {
            sStack.push(el)
            
            return;
        }
    })
    
    console.log(sStack)

    return !sStack.length;
}