/*
입력
23 48
25
*/
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let h = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let waitTime = Number(input[1]);
let total = 0;

total = h * 60 + m + waitTime;

h = parseInt(total/60);
m = total % 60;

if (h == 24) h = 0;


console.log(h + " " + m);

/*

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [a, b] = input[0].split(' ').map(Number); 
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기 totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);

*/



