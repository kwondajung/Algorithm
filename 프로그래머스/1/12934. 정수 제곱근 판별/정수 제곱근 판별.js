function solution(n) {
    var answer = 0;
    
    // 1. n이 x의 제곱인지 판단
    // 2. x의 제곱이라면 x+1의 제곱 리턴
    // 3. x의 제곱이 아니라면 -1을 리턴 
    
    let x = Math.sqrt(n);
    if(n % x === 0){
        answer = Math.pow((x + 1), 2);
    } else {
        answer = -1;
    }

    return answer;
}