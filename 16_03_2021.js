//Very simple, given a number, find its opposite.

function opposite(number) {
  number = number*-1
  return number
}

/* You get an array of numbers, return the
sum of all of the positives ones. */

function positiveSum(arr) {
  let result = 0
  for(i = 0; i <= arr.length; i++) {
    if(arr[i]>0){
      result += arr[i]
    }
  }
  return result
}

/*Complete the solution so that it reverses
the string passed into it.*/

function solution(str){
  //Conver to an array
  let arr = Array.from(str)

  //Flip the characters
  arr = arr.reverse()

  //Make into string
  arr = arr.join("")

  return arr
}
