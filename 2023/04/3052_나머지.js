let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let arr = input.map(x => Number(x));
let temp = new Array();

for(let i = 0; i < arr.length; i++) {
    temp.push(arr[i] % 42);
}

temp = [...new Set(temp)];

console.log(temp.length);

/*
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

// 원소를 하나씩 확인하며
for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}
// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);
*/