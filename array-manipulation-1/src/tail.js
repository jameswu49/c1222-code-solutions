/* exported tail */

// input: array - Any JavaScript Array
// output: A new array containing all elements of array after the first.

// create an empty array and assign to variable
// create a for loop to loop over the array
//   - assign initializer to the second index of the array
//   - stop the loop when initializer is less than the length of the array
//   - increment initializer by 1 at the end of the loop
// code block
//   - push elements into new array
//   - return new array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
