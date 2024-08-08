function solution(numbers) {
    var answer = 0;
    
    var sum = 0 // 배열의 합
    
    // 1. 일단 다 더하기
    // 2. 다 더한 값 나누기
    
    for(var i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    answer = sum / numbers.length;
    
    return answer;
}