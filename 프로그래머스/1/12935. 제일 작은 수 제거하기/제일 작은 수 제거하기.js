function solution(arr) {
    var answer = [];
    
    const min = Math.min(...arr);
    
    const newArr = arr.filter(function(num){
        if(num !== min){
            return true;
        } else {
            return false;
        }
    });
    
    if(newArr.length > 0){
        answer = newArr;
    }else{
        answer = [-1];
    }
    
    return answer;
}