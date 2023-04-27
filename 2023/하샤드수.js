function solution(x) {
    
    let answer = true;
    
    let num = x.toString().split("").map(x => Number(x)).reduce((a,b) => a+b);
    
    if(x % num == 0) answer = true;
    else answer = false;
    
    return answer;
}

console.log(solution(10));