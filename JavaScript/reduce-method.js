let numbers = [100, 50, 15, 3, 2]

let addition = numbers.reduce(function(currentValue, presentValue) {
    return currentValue += presentValue
})

// output is 170

let subtraction = numbers.reduce(function(currentValue, presentValue) {
    return currentValue -= presentValue
})

// output is 30

let multiplication = numbers.reduce(function(currentValue, presentValue) {
    return currentValue *= presentValue;
})

// output is 450,000