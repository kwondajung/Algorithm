function solution(x) {
    var answer = true;
    let sum = 0;
  
    // 배열 이용해서 풀어보기
    // 1. x를 배열로 만들기
    // 2. for문 이용해서 배열의 합 구하기 => sum
    // 3. x % sum === 0이면 true, 아니면 false
    
    const arr = [...String(x)].map(Number);
    for(let i = 0; i < arr.length; i++){
      sum = sum + arr[i]; 
  }
    if(x % sum === 0){
       answer = true;
    } else {
      answer = false; 
    }
    
    return answer;
}