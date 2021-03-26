// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  const fact = n%x == 0 && n%y == 0 ? true : false
  return fact
}

//We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

var stringToNumber = function(str){
  let a = Number(str)
  return a;
}
