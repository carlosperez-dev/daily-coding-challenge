// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return h*3600000 + m*60000 + s*1000
}


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//
// Return True if yes, False otherwise

function hero(bullets, dragons){
  if(bullets >= (dragons * 2)){
    return true
  }
  else{
    return false
  }
}
