function birthdayCakeCandles(candles) {
    let count = 0;
    let max = 0;
    for(let i = 0; i < candles.length ; i++){
        let birthdayCandles = candles[i];
        if(birthdayCandles > max){
            max = birthdayCandles;
            count = 1;
        }else if(birthdayCandles == max){
            count++;
        }
    }
    return count;
}