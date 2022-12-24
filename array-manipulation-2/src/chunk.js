/* exported chunk */

// input: Array, size

// output: return a new array with subarrays that has a length equal to the size input
// Remaining elements are put into the final array

// use slice method
//   - index starts at 0 and end point is size input

function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array.slice(i, size));
  }
  // console.log(arr);
}
