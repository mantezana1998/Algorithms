function palindrome(string){
    if(string.length < 1) return false;
    if(string === string.split("").reverse().join("")){
        return true;
    }
    return false;
}