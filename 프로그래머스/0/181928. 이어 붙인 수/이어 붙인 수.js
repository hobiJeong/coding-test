function solution(num_list) {
    let evenString = '';
    let oddString = '';
    
    num_list.forEach((num) => {
        num % 2 === 0 ? evenString += num : oddString += num;
    })
    
    return Number(evenString) + Number(oddString);
}