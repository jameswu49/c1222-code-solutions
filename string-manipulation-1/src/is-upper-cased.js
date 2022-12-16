/* exported isUpperCased */

// input: word - A single word as a JavaScript String
// output: A Boolean indicating whether or not all characters in word are uppercased.

// use if statement to check if string is strictly equal to it being uppercased
// return true if yes or false for no

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
