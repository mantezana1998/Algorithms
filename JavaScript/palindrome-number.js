function palindromeNumber(x){
    if (x < 0) return false;

    let number = x;
    let rev_number = 0;

    while(number > 0){
        rev_number = (rev_number * 10) + number % 10;
        number = parseInt(number / 10);
    }
    return x === rev_number
}

console.log(palindromeNumber(1221))