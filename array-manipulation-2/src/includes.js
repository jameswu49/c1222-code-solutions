/* exported includes */

// input: array, value

// output: return a boolean of whether the value is at that index

// create for loop and loop over each value in array
// create if statement
//   - if element matches the value, then return true
//   - else return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
