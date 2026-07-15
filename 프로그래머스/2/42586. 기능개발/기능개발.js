function solution(progresses, speeds) {
    const answer = [];
    
    while(progresses.length) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        let continuity = false;
        let deployedCount = 0;
        
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                i = -1;
                
                deployedCount++;                
                continuity = progresses.length === 0 ? false : true;
            } else {
                continuity = false;
            }
            
            if (deployedCount > 0 && continuity === false) {
                answer.push(deployedCount);
                deployedCount = 0;
            }
        }
    }
    
    return answer;
}