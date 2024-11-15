function solution(bandage, health, attacks) {
    const healTime = bandage[0];
    const healSize = bandage[1];
    const bonusHeal = bandage[2];
    
    const originalHealth = health;
    
    let continuitySuccess = 0;
    
    const lastTime = attacks[attacks.length - 1][0];
    
    for (let i = 1; i <= lastTime; i++) {
        if (attacks[0][0] === i) {
            continuitySuccess = 0;     
            health -= attacks[0][1];
            
            attacks.shift();
            
            if (health <= 0) {
                return -1;
            }
            
            if (attacks.length === 0) {
                return health;
            }
            
            continue;
        }
        
        continuitySuccess++;
        
        health += healSize;
        
        if (continuitySuccess === healTime) {
            continuitySuccess = 0;
            
            health += bonusHeal;
        }
        
        if (health >= originalHealth) {
            health = originalHealth;
        }
    }
    
    return answer;
}