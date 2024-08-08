function solution(n)
{
    var answer = 0;

    while(n!==0){
        answer = answer + (n % 10);
        n = Math.floor(n / 10);
    }
    
    console.log(answer);

    return answer;
}