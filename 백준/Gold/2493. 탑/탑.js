const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberInput = input[1].split(" ").map(Number);

function solution(input) {
  let answer = "0";
  const stack = [{ index: 0, height: input[0] }];

  for (let i = 1; i < input.length; i++) {
    while (stack[stack.length - 1]?.height < input[i]) {
      stack.pop();
    }

    stack.push({ index: i, height: input[i] });

    if (stack.length === 1) {
      answer += " 0";

      continue;
    }

    answer += ` ${stack[stack.length - 2].index + 1}`;
  }

  return answer;
}

console.log(solution(numberInput));
