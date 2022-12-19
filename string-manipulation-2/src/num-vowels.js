/* exported numVowels */

// input: String

// output: return number of vowels in the string

// create variable to count that increments by one each time it finds a vowel
// make string all lowercase
// define vowels and check if string has it
// create if statement
//   - if it has it, increment the variable by 1
// return variable

function numVowels(string) {
  var counter = 0;
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
