function solution(n) {
    
    let min = 1000000;
    
    for(let i = 1; i <= n; i++) {
        if(n % i == 1) {
            if(min > i) {
               min = i; 
            }
        }
    }
    
    return min;
}

console.log(solution(10));