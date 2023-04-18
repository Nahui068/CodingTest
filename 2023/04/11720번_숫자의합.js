let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = input[0];
let arr = input[1].split("").map(x => Number(x));

console.log(arr.reduce((a,b) => a +b));

/*
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); 
let string = input[1];

let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며 
for (let x of string) {
    // 모든 숫자를 더하기
    answer += Number(x);
}
console.log(answer);

*/