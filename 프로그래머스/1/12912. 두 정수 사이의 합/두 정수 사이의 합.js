function solution(a, b) {
    var answer = 0;

    if (a < b) {
        for (let i = a; i <= b; i++){
            answer = answer + i;
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--){
            answer = answer + i;
        }
    } else {
        answer = a;
    }
    
    return answer;
}