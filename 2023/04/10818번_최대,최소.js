/*
입력
5
20 10 35 30 7
*/
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let max = arr[0];
let min = arr[0];

for(let i = 0 ; i < n; i++) {
    if(max < arr[i]) max = arr[i];
    if(min > arr[i]) min = arr[i];
}

console.log(`${min} ${max}`);

/*
1. 
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

let minValue = 1000001; // 일단 큰 수로 초기화 
let maxValue = -1000001; // 일단 작은 수로 초기화 

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
if (maxValue < arr[i]) maxValue = arr[i]; }
console.log(minValue, maxValue);

2.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));
let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));
console.log(minValue + " " + maxValue);
*/