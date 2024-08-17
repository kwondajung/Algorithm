function solution(a, b) {
    var answer = 0;
    let arr = [];

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