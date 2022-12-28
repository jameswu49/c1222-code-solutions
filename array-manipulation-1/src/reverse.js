/* exported reverse */

// input: array - Any JavaScript Array
// output: A new array containing all elements of array in reverse order.

// create an empty array and assign to a variable
// create a for loop to loop over it in reverse order
//   - assign initializer to be the last index of the array
//   - stop the loop when it loops over the final element in the array
//   - decrement the initializer by 1 each iteration
// code block
//   - push the elements into the empty array
//   - return new array from function

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
