function solution(sizes) {
    var answer = 0;
    
    const width = [];
    const height = [];
    
    for(let i = 0; i < sizes.length; i++){
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        
        width.push(max);
        height.push(min);
    }
    answer = Math.max(...width) * Math.max(...height);
    
    
    return answer;
}