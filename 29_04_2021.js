//Given a year, return the century it is in.

function century(year) {
  // Finish this :)
  return Math.ceil(year/100);
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
  let index = haystack.findIndex((item) => item === "needle")
  return `found the needle at position ${index}`
}

//Given an array of integers, return a new array with each value doubled.

function maps(x){
  let newArr = x.map((item)=> item * 2)
  return newArr;
}
