function solution(s) {
    var answer = '';
    
    answer = [...s].sort().reverse().join("");
    
    return answer;
}