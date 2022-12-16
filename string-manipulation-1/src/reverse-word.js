/* exported reverseWord */

// input: word - A single word as a JavaScript String

// output: A JavaScript String containing the characters of word in reverse order.

// create empty string variable to be returned
// create a loop to loop over each index of the input
//   - have the initializer be assigned to the last index of the word by using the length property - 1
//   - condition will stop when i is less than or equal to 0
//   - decrement i at the end of each loop
// code block
//   - add string variable with the input at the index and update it to the string variable
//  return string variable

function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
