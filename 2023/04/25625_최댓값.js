/*
입력
3
29
38
12
57
74
40
85
61
*/

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
let arr = input.map(x => Number(x));
let max = 0;
let num = 0;

for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]){
        max = arr[i];
        num = i;
    }
}

console.log(max);
console.log(num);

/*
1. 
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let maxIndex = 0;
let maxValue = 0;

for (let i = 0; i < 9; i++) { // 모든 데이터를 하나씩 확인하며
  let data = Number(input[i]);
  if (maxValue < data) {
    maxValue = data;
    maxIndex = i;
  }
}
console.log(maxValue);
console.log(maxIndex + 1);

2.
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let data = input.map(x => Number(x)); 
let max = Math.max(...data)

console.log(max)
console.log(input.indexOf(max) + 1)
*/