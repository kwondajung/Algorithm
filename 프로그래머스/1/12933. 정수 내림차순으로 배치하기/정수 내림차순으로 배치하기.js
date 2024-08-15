function solution(n) {
    var answer = 0;
    
    // 1. n을 배열로 만들기
    const arr = [...String(n)].map(String);
    
    // 2. sort()
    newArr = arr.sort(function(a, b){
        return b - a;
    })
    
    // 3. 배열을 하나의 문자열로 합치기
    const newString = newArr.join('');
    
    // 4. 문자열을 정수로 형변환하기
    answer = parseInt(newString);
    
    return answer;
}