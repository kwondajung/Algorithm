function solution(phone_number) {
    var answer = '';

    // const len = phone_number.length;
    // answer = len - 4;
    
    const privateNumber = "*".repeat(phone_number.length - 4);
    
    const sliceNumber = phone_number.slice(-4);
    
    answer = privateNumber + sliceNumber;
    
    return answer;
}