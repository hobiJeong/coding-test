function solution(num_list) {
    let mulResult = 1;
    let powResult = 0;
    
    num_list.forEach((num) => {
        mulResult *= num;                
        powResult += num;
    });
    
    powResult = powResult ** 2;
    
    return mulResult < powResult ? 1 : 0;
}