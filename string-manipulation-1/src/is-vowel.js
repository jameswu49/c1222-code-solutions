/* exported isVowel */

// input: char - A single JavaScript String character
// output: A Boolean indicating whether or not char is a vowel.
// isVowel should handle both uppercase and lowercase characters.

// change the input into lowercase or uppercase and assign to a variable
// use an if statement to check if the input is either a, e, i, o, u
// if they match, return true or false if they don't

function isVowel(char) {
  var lowerCase = char.toLowerCase();
  if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o' || lowerCase === 'u') {
    return true;
  }
  return false;
}
