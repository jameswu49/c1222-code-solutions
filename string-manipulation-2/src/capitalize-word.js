/* exported capitalizeWord */

// input: word - A single word as a JavaScript String

// output: return each word with the first letter capitalized and the rest lowercased

// set all words to lowercase
// use if statement
// if
//   - if words starts with java, capitalize the first letter
//   - lowercase the rest
//   - slice and captizalize the 4th one
//   - lowercase the rest again
//   - add them all together
// else
//   - capitalize first letter of the input
// - slice the rest of the word and lower case it
// - add them together and return it

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase.startsWith('java')) {
    return lowerCase[0].toUpperCase() + lowerCase.slice(1, 4) + lowerCase[4].toUpperCase() + lowerCase.slice(5);
  } else {
    var upper = lowerCase[0].toUpperCase() + lowerCase.slice(1).toLowerCase();
    return upper;
  }
}
