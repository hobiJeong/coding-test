function solution(s) {
  let answer = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") { // 공백일 경우
      count = 0;
      answer += " ";
    } else if (count % 2 === 0) { // 짝수일 경우
      answer += s[i].toUpperCase();
      count++;
    } else { // 홀수일 경우
      answer += s[i].toLowerCase();
      count++;
    }
  }
  return answer;
}