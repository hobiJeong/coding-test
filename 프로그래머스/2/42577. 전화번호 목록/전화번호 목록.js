function solution(phone_book) {
    const phoneBookMap = new Map();
    
    phone_book.map((phone) => {
        phoneBookMap.set(phone, true);
    })
    
    for (const el of phone_book) {
        for (let x = 1; x < el.length; x++) {
            const prefix = el.substring(0, x);
            
            if (phoneBookMap.get(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}