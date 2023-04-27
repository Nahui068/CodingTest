function solution(n) {
    
    let answer = 0;
    
    let x = Math.sqrt(n) ;
    
    if(Number.isInteger(x)) answer = (x+1)*(x+1);
    else answer = -1;
    
    
    return answer;
}

console.log(solution(121));