function solution(num_list) {
    const nLL = num_list.length;
    
    num_list[nLL - 1] > num_list[nLL - 2] ?
        num_list.push(num_list[nLL - 1] - num_list[nLL - 2]) :
        num_list.push(num_list[nLL - 1] * 2)
    
    return num_list;
}