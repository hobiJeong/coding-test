function solution(players, callings) {
    const obj = players.reduce((acc, cur, idx) => {
        acc[cur] = idx
        
        return acc;
    }, {});
    
    for (let i = 0; i < callings.length; i++) {
        const index = obj[callings[i]];
        const temp = players[index - 1];
        
        obj[callings[i]] -= 1;
        obj[temp] += 1;
        
        players[index - 1] = players[index];
        players[index] = temp;
    }
    
    return players;
}