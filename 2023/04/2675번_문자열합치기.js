let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = input[0];
let arr = new Array();

for(let i = 1; i <= n; i++) {
    arr = input[i].split(" ");
    
    count = arr[0];
    let result = "";
    
    for(let j = 0; j < arr[1].length; j++){
        result += arr[1][j].repeat(count);
       
    }
    console.log(result);

}

/* 
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let testCase = Number(input[0]);
// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";
// 현재 문자열의 각 문자를 하나씩 확인하며 
for (let j = 0; j <= s.length; j++) {
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r); }
    console.log(result);
}
*/