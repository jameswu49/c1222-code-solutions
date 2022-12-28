/* exported isLowerCased */

// input: word - A single word as a JavaScript String
// output: A Boolean indicating whether or not all characters in word are lowercased.

// use an if statement to check if input is the same as it being lowercased
// if they are, return true, else return false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
