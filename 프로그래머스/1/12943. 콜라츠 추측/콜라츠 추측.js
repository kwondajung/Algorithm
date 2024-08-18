function solution(num) {
    var answer = 0;
    
    // while문은 조건이 참일 경우 계속 반복
    while(num !== 1){
        if( num % 2 === 0){
            num = num / 2;
        } else{
            num = (num * 3) + 1;
        }
        // 반복 횟수 구하기
        answer = answer + 1;
    }
    
    // 반복 횟수가 500번 이상일 경우
    if(answer >= 500){
        return -1;
    } else{
        return answer;
    }
    
    return answer;
}