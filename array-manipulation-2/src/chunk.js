/* exported chunk */

// input: Array, size

// output: return a new array with subarrays that has a length equal to the size input
// Remaining elements are put into the final array

// create an empty array and assign to variable
// use slice method to get values
//   - create end variable and assign to size input as the end for slice
// create for loop to iterate a certain number of times
//   - set i to 0
//   - stop loop when i is the length of array
//   - increment i by size and end varible by size
//     - i is starting point of slice index and will increment by size
//     - end is ending point and will increment by size
//   - create if statement
//     - if i is less than the length of array, slice and push values into the array
//     - else, stop the loop
// return array variable

function chunk(array, size) {
  var arr = [];
  var end = size;
  for (var i = 0; i < array.length; i += size, end += size) {
    if (i < array.length) {
      arr.push(array.slice(i, end));
    } else {
      break;
    }
  }
  return arr;
}
