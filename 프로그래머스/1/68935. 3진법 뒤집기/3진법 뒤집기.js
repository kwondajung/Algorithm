function solution(n) {
    var answer = 0;
    
    // 3진수로 변환
    const ternary = n.toString(3);
    console.log(ternary);
    
    const reverseTernary = ternary.split('').reverse().join('');
    console.log(reverseTernary);
    
    // 3진수를 10진수로 변환
    const decimal = parseInt(reverseTernary,3);
    answer = decimal;
    
    return answer;
}