function solution(participant, completion) {
    const participantMap = new Map();
    
    participant.forEach((p) => {
      if (participantMap.has(p)) {
        const count = participantMap.get(p);

        participantMap.set(p, count + 1);
      } else {
        participantMap.set(p, 1);
      }
    });
    
    completion.forEach((c) => {
        if (participantMap.has(c)) {
            const setCount = participantMap.get(c) - 1;
            
            if (setCount === 0) {
                participantMap.delete(c);
                return;
            }
            
            participantMap.set(c, setCount);
            return;
        }
    });
    
    const kv = [...participantMap.entries()].map(([k, v]) => ({ k, v }));
    
    return kv[0].k;
}