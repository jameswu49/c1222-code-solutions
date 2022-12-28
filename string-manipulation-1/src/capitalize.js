/* exported capitalize */

// input: word - A single word as a JavaScript String

// output: The original word, but with its first character uppercased
// and the rest of its characters lowercased.

// target first character of the string
// capitalize the string using the upper case method
// slice the rest of the word after the first letter and assign to a variable and make it lower cased
// add the first letter with the sliced letters and assign to a variable
// return value

function capitalize(word) {
  var upperCase = word[0].toUpperCase();
  var sliced = word.slice(1).toLowerCase();
  return upperCase + sliced;
}
