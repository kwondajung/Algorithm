function solution(arr, divisor) {
    var answer = [];
    
    const newArr = arr.filter(function(filteredArr){
            if(filteredArr % divisor === 0){
            return true ;
        }else {
            return false;
        }   
    }) 
    
    if(newArr.length === 0){
        return [-1];
    } else {
        answer = newArr.sort(function(a, b){
        return a - b;
    });
    }
    
    return answer;
}