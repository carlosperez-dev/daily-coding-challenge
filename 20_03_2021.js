//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0]
    for(let i=0; i<args.length; i++){
      if(args[i]<result){
        result = args[i]
      }
    }
    return result
  }
}
