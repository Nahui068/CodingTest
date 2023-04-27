function solution(n) {
    
    let answer = [];
    
    answer = n.toString().split("").map(x => Number(x)).reverse();
    
    return answer;
}

console.log(solution(12345));