// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

function greet(name){
    if(name === "Johnny"){
    return "Hello, my love!";
    }
  return "Hello, " + name + "!";
}

// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  let total = marks.reduce((acc, c) => acc + c, 0)
  return Math.floor(total/marks.length)

}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {

  if(input === null || input.length === 0){
      return []
    }
  else {
    let array = []
    let countPositives = (input.filter((item) => item>0) ).length
    array.push(countPositives)
    let negatives = input.filter(item => item < 0 )
    let sumNegatives = negatives.reduce((acc, c) => acc + c, 0)
    array.push(sumNegatives)
    return array;
    }
}
