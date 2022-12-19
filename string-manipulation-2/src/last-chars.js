/* exported lastChars */

// input: length and string

// output: return the last words of the string based on the length input

// create an empty string variable
// if statment
//   - if string is empty, return an empty string
//   - else add empty string with negative index of number by multiplying 1 by a negative and
//     using slice method
// return string

function lastChars(length, string) {
  var newString = '';
  if (string === '') {
    return newString;
  } else {
    newString += string.slice(length * -1);
  }
  return newString;
}
