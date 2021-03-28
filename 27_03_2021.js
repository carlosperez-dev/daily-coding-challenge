/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

const object = {}
object.name = "John"
object.surname = "Smith"
object.name = "Pete"
delete object.name;
console.log(object)

/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:*/

function isEmpty(obj){
  for(let key in obj){
    return false
  }
  return true
}

isEmpty(object)


/* Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalary(sal){
  let total = 0;
  for(let person in sal){
    total += sal[person]
  }
  console.log(total)
}

/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for(let key in obj){
    if(typeof obj[key] == 'number'){
       obj[key]*=2
    }
  }
};
multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
