// 입력 100
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString();
let score = "";

if(input >= 90 && input <= 100) score = "A";
else if(input < 90 && input >= 80) score = "B";
else if(input < 80 && input >= 70) score = "C";
else if(input < 70 && input >= 60) score = "D";
else score = "F";

console.log(score);

/*

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
data = Number(input[0]);

function check(a) {
if (90 <= a && a <= 100) console.log('A'); 
else if (80 <= a && a <= 89) console.log('B'); 
else if (70 <= a && a <= 79) console.log('C'); 
else if (60 <= a && a <= 69) console.log('D'); 
else console.log('F');
}

check(data);
*/