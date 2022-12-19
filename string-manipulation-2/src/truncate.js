/* exported truncate */

// input: length - an integral JavaScript Number
// string - any JavaScript String

// output: A shortened version of string, plus in an ellipsis.

// slice the string using 0 as the start and the length parameter as the end
// add ... to it
// return it

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
