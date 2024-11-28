const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
const a = input[2].split(" ").map(Number);
const b = input[4].split(" ").map(Number);

function solution(t, a, b) {
  let answer = 0;
  const aSumMap = new Map();

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = i; j < a.length; j++) {
      sum += a[j];
      aSumMap.set(sum, (aSumMap.get(sum) ?? 0) + 1);
    }
  }

  for (let i = 0; i < b.length; i++) {
    let sum = 0;
    for (let j = i; j < b.length; j++) {
      sum += b[j];
      answer += aSumMap.get(t - sum) ?? 0;
    }
  }

  return answer;
}

console.log(solution(t, a, b));
