const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const numberInput = input.map((v) => +v);

function solution(input) {
  let sum = 0;

  const stack = [];

  stack.push(input[0]);

  for (let i = 1; i < input.length; i++) {
    while (stack[stack.length - 1] <= input[i]) {
      stack.pop();
    }

    sum += stack.length;

    stack.push(input[i]);
  }

  return sum;
}

console.log(solution(numberInput));
