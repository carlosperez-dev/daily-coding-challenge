//Arrays
// Please create a function that reverses your list and prints it to the console.

function reverse(arr){
  console.log(arr.reverse())
}

reverse(['squirtle' , 'bulbasaur', 'charmander'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function dos(a, b){
  let squared = a.reduce((total, item) => total + item**2, 0)
  let cubed = b.reduce((total, item) => total + item**3, 0)
  console.log(squared>cubed)
}
dos([1,2,3,4,5], [3,2,4,5,6])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexito(arr){
  let newArray = []
  arr.map((item, index) => {
    if(item%index === 0){
      newArray.push(item)
    }
  })
  console.log(newArray)
}

//OR

function isMultiple(arr){
  return arr.filter((e,i) => e % i === 0)
}


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumito(arr){
  return arr.reduce( (acc,c)=> acc + Number(c), 0)
}
