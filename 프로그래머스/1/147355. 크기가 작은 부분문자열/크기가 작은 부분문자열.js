function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){
        let sliceNum = t.substr(i, p.length);
        
        if(Number(sliceNum) <= Number(p)){
            answer++;
        }
    }
    
    return answer;
}