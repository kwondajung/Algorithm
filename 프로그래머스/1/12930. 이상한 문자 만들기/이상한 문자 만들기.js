function solution(s) {
    var answer = '';
    
    const words = s.split(" ");
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(j % 2 === 0){
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
           
       }
        answer += " ";
    }
    answer = answer.substr(0, answer.length -1);
        
    return answer;
}