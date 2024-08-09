function solution(n) {
    var answer = 0;
    
    // 1. n의 약수 구하기 => 나눴을 때 나머지가 0인 것
    // 2. 약수 다 더하기
    
    for(let i = 0; i<=n; i++){
        if(n % i === 0){
            answer = answer + i;
        } else {
            answer = answer;
        }
    }
    
    return answer;
}