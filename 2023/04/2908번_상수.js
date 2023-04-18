let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let a = input[0].split(" ")[0];
let b = input[0].split(" ")[1];

a = a[2] + a[1] + a[0];
b = b[2] + b[1] + b[0];

let max = Math.max(Number(a), Number(b))
console.log(max);

/* 
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].split(' ')[0]; 
let b = input[0].split(' ')[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];
console.log(Math.max(Number(newA), Number(newB)));

*/