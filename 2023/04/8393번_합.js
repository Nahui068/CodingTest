/*
입력
3
*/

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let sum = 0;

for(let i = 1 ; i <= input[0]; i++) {
    sum += i;
}

console.log(sum);

/*

1. 
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]); let summary = 0;
for (let i = 1; i <= n; i++) {
  summary += i;
}
console.log(summary);

2. 등차수열 이용

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

// 등차수열의 합 공식
console.log(n * (n + 1) / 2);

*/