/* exported dropRight */

// input: Array, count

// output: return a new array that contains the elements of array before last count elements

function dropRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
