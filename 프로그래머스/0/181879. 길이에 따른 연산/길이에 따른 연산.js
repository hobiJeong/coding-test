function solution(num_list) {
    console.log('문자열을 입력해주세요 : \n ex) solution([1, 2, 3, 4])');
    let answer = 0;
    let multi = 1;
    if(num_list.length>20) {
        console.log('배열이 너무 깁니다.');
    }
    else if(num_list.length<2) {
        console.log('배열이 너무 짧습니다.');
    }
    else if(num_list.length>=11) {
        for(let i of num_list) {
            answer += i;
        }
        console.log('answer = ', answer);
        return answer;
    }
    else if(num_list.length<=10) {
        for(let i=0; i<num_list.length; i++) {
            multi = multi * num_list[i];
        }
        answer = multi;
        console.log('answer = ', answer);
        return answer;
    }
}
