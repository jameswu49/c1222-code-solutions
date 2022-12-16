/* exported getWords */

// input: string - A JavaScript String containing zero or more words, separated by spaces.

// output: An Array of JavaScript String. Each String is one of the words in the string parameter.

// split string and check the length to see if it's greater than 0
// if greater, return the string split up
// if less, return an empty array
// return the string split by their words

function getWords(string) {
  if (string.split(string).length > 0) {
    return string.split(' ');
  }
  return [];
}
