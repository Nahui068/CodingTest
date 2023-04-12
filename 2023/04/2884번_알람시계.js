// 입력 10  10
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString();

let h = Number(input.split(' ')[0]);
let m = Number(input.split(' ')[1]);
let total = 0;

if (h == 0) h = 24;

total = h*60 + m - 45;

h = parseInt(total/60);
m = total%60;

console.log(h, m);

/*

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let hour = Number(input[0].split(' ')[0]); let minute = Number(input[0].split(' ')[1]);

if (minute < 45) { // 분이 45분 미만이라면 hour -= 1;
    minute += 15;
    if (hour < 0) hour = 23;
}
else minute -= 45;

console.log(hour + " " + minute);

*/

