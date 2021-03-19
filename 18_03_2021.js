/* In this simple assignment you are given a
number and have to make it negative. But
maybe the number is already negative? */

function makeNegative(num) {
  if(num<0){
    return num
  }
  else if(num>0){
    return -num
  }
  else{
    return num
  }
}

//We need a function that can transform a number into a string.
function numberToString(num) {
  return String(num)
}
/*Complete the method that takes a boolean
value and return a "Yes" string for true,
or a "No" string for false.
*/
function boolToWord( bool ){
  if(bool==true){
    return "Yes"
  }
  else{
    return "No"
  }
}

//Write a function called repeat_string which repeats the given string str exactly count times.
function repeatStr (n, s) {
  let result = "";
  for(let i=1;i<=n;i++){
    result+=s
  }
  return result
}
