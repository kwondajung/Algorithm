function solution(left, right) {
    var answer = 0;
    
    // 1. left와 right 사이의 수 구하기
    for(let i = left; i <= right; i++){
        let count = 0;
        
        // 2. 약수의 개수 구하기
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        // 3. 약수의 개수 홀짝 판단
         answer = count % 2 === 0 ? answer + i : answer - i;
    }

    return answer;
}