//Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  let monkeyCount = []
  for(let i = 1; i <=n; i++){
    monkeyCount.push(i)
  }
  return monkeyCount
}


// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  //your code here
  const stringRep = b === true ? 'true' : 'false'
  return stringRep
}

// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  // your code here
  let avg = (array.reduce((acc, c) => acc + c))/array.length
  return avg;
}

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
