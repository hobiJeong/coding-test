function solution(name, yearning, photo) {
    const result = [];
    
    photo.forEach((el) => {
        let sum = 0;
        
        el.forEach((el) => {
            const index = name.indexOf(el);
            
            if (index !== -1) {
                sum += yearning[index];
            }
        });
        
        result.push(sum);
    })
    
    return result;
}