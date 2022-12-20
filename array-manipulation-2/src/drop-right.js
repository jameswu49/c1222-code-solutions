/* exported dropRight */

// input: Array, count

// output: return a new array that contains the elements of array before last count elements

// return and use slice method
//   - set start of index to 0 and end to count multiplied by -1

function dropRight(array, count) {
  return array.slice(0, count * -1);
}
