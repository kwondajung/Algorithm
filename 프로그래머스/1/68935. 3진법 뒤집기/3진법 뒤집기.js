function solution(n) {
    var answer = 0;
    
    // 3진수로 변환
    const ternary = n.toString(3);
    
    const reverseTernary = ternary.split('').reverse().join('');
    
    // 3진수를 10진수로 변환
    const decimal = parseInt(reverseTernary,3);
    answer = decimal;
    
    return answer;
}