//Using a for loop 

arr = [1, 2, 3, 4, 5]

function minMaxSum(arr){
  //set my variables
  var sum = arr[0],
      min = arr[0],
      max = arr[0]
  //loop inside the array
  for (let i = 1; i < arr.length; i++){
    //find the sum
    sum += arr[i]
    //find the min and max
    if (max < arr[i]) max = arr[i]
    if (min > arr[i]) min = arr[i]
  }
  console.log(sum - max, sum - min)
  //return and console log min and max
}

minMaxSum(arr)

//