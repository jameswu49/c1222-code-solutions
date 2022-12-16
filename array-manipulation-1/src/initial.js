/* exported initial */

// input: array - Any JavaScript Array
// output: A new array containing all elements of array except the last.

// create an empty array and assign to variable
// create a for loop to loop over the input
//   - assign initializer as the first index of the array
//   - stop the loop when it 1 less than the length of the array
//   - increment the initializer by 1 at the end of each loop
// code block
//   - push each element into the new array
//   - return new array  from function

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
