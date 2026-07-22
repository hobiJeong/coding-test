function solution(priorities, location) {
    let count = 0;
    
    while (true) {
        const maxPriority = Math.max(...priorities);
        
        if (priorities[0] < maxPriority) {
            const shifted = priorities.shift();
            
            priorities.push(shifted);
            
            location = location === 0 ? priorities.length - 1 : location - 1;
        } else {
            priorities.shift();
            count++;
            
            if (location === 0) {
                return count;
            }
            
            location--;
        }
    }
}