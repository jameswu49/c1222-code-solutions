/* exported takeRight */

// input: Array, count

// output: return a new array that contains the last elements of the array based on the count input
// return whole array if count is larger than length of array

// use and return slice method
//   - multiply slice parameter with -1 to find last elements

function takeRight(array, count) {
  return array.slice(count * -1);
}
