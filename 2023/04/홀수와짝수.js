function solution(num) {
    
    let result = "";
    
    if(num % 2 == 0) {
        result = "Even";    
    } else {
        result = "Odd";
    }
    
    return result;
}

let result = solution(3);
console.log(result);