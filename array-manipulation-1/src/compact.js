/* exported compact */

// input: array - Any javascript array
// output: remove false, null, NaN, 0, -0, undefined, ""
// from the array and return the new array

// create an empty array
// create a for loop to loop over elements
//   - assign 0 to the initializer
//   - stop the loop when it reaches the last element of the array
//   - increment initializer by 1 at the end of the loop
// code block
//   - create an if statement
//     - condtion is whether elements value are true or not
//       - if it is push it into the new array
//   - return new array

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
