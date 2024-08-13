function solution(n) {
    var answer = [];
    
    // 1. 자연수를 배열로 만들어야 함
    const newArr = [...String(n)].map(Number);
    
    // 2. 그 배열을 뒤집기
    answer = newArr.reverse();
    
    return answer;
}