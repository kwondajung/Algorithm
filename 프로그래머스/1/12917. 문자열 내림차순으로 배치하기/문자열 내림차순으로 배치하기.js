function solution(s) {
    var answer = '';
    
    arr = [...s];
    arr.sort(function compare(a, b){
        if(a > b) {
            return -1;
        } 
        if (a < b) {
            return 1;
        }
        return 0;
        
    })
    answer = arr.join("");
    return answer;
}