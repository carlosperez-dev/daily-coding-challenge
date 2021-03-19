//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 let array = Array.from(str)
 array.pop()
 array.shift()
 return array.join('')
};

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('')

}

//Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(" ")
}
