function solution(a, b, c) {
    let equalCount = 0;
    let sum = 0;
    
    if (a === b) {
        equalCount++;
    }
    if (a === c) {
        equalCount++;
    }
    if (b === c) {
        equalCount++;
    }
    
    switch (equalCount) {
        case 0:
            sum = a + b + c
            break;
        case 1:
            sum = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
            break;
        case 3:
            sum = 
                (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    }
    
    return sum;
}