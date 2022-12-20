/* exported capitalizeWords */

// input: String

// output: return a string with every first word capitalized

// lowercase all words first
// empty string variable
// loop over each word in string
// uppercase the first letter of each word and slice the rest
// add them back together with spacing between each word
// return the result and trim the extra space at the end

function capitalizeWords(string) {
  var result = '';
  var lowerCase = string.toLowerCase();
  var splitString = lowerCase.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    result += splitString[i][0].toUpperCase() + splitString[i].slice(1) + ' ';
  }
  return result.trimEnd();
}
