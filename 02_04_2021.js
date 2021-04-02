// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
  return numbers.reduce((acc, c) => acc + c, 0);
};

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  // Implement me
  if(name[0] === 'r' || name[0] === 'R'){
    return name + " plays banjo"
  }
  else{
    return name + " does not play banjo"
  }
}
