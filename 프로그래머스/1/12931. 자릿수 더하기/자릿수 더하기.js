function solution(n)
{
    var answer = 0;

    let nString = n.toString().split("").map(Number);
    
    for(let i = 0; i < nString.length; i++){
        answer = answer + nString[i];
    }
    
    console.log(answer);

    return answer;
}