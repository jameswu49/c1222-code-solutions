/* exported getIndexes */

function getIndexes(array) {
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}

// input: array
// output: return an array containing the indexes from the input array

// create an empty array for output
// create a for loop to loop over the each item in the array
//   - have i = 0
//   - loop i until it is greater than the length of the input
//   - increment i by 1 each iteration
// code block
//   - push i into the empty array
// return
//   - return array from the function
