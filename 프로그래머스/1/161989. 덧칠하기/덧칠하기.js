function solution(n, m, section) {
    let answer = 0
    
    let arr = new Array(n).fill(true);
    
    section.forEach((el) => {
        arr[el-1] = false
    });
    
    // 덧칠한 m 만큼 i 증가
    for(let i = 0 ; i < arr.length ; i++) {
        if(!arr[i]) {
            answer += 1
            i += m-1
        }    
    }
    
    return answer
}