function solution(s) {
    var answer = '';
    
    len = Math.floor(s.length / 2 );
    
    if(s.length % 2 === 0){
        answer= s[len-1] + s[len];
    } else {
        answer = s[len];
    }
    
    return answer;
}