/*Summation
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0. */

var summation = function (num) {
  let num1 = 0
  for(let i = 0; i <= num; i++){
    num1 += i;
  }
  return num1;
}
