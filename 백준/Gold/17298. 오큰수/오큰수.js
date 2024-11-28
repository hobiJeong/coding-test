const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberInput = input[1].split(" ").map(Number);

function solution(input) {
  const stack = [];
  const answer = [];

  for (let i = input.length - 1; i >= 0; i--) {
    while (stack[stack.length - 1] <= input[i]) {
      stack.pop();
    }

    stack.push(input[i]);

    if (stack.length === 1) {
      answer.push(-1);

      continue;
    }

    answer.push(stack[stack.length - 2]);
  }

  return answer.reverse().join(" ");
}

console.log(solution(numberInput));
