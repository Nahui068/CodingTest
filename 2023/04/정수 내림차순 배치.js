function solution(n) {
    
    let num = n.toString().split("").map(x => Number(x));
    num.sort(function(a,b) {
        return b-a;
    });
    
    return Number(num.join(""));
}

console.log(solution(118372));