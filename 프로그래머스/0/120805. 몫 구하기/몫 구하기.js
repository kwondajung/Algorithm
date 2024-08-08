function solution(num1, num2) {
    var answer = 0;
    
    //소수점 버리기
    answer = Math.floor(num1 / num2);
   
    return answer;
}