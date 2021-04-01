// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  return x.split('').map(item => item < 5 ? '0' : '1')
}

//Array plus Array
function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((acc, c) => acc + c, 0)
  let sum2 = arr2.reduce((acc, c) => acc + c, 0)
  return sum1 + sum2;
}


//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia)

function bonusTime(salary, bonus) {
  return bonus === true ? `£${salary * 10}` : `£${salary}`
}

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let x = []
  for(let i = 1; i <= n; i++){
    x.unshift(i)
}
  return x;
};
