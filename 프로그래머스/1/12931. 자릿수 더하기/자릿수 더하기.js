function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    while(n!==0){
        answer = answer + (n % 10);
        n = Math.floor(n / 10);
    }
    console.log(answer);

    return answer;
}