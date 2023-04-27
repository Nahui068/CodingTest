function solution(s){
    
    let answer = true;
    let str = s.toLowerCase();
    let pcount = 0;
    let ycount = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'p') pcount++;
        if(str[i] == 'y') ycount++;
    }
    
    if(pcount == ycount) answer = true;
    else answer = false;
    

    return answer;
    
}

console.log(solution("pPooYy"));

