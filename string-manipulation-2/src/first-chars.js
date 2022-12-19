/* exported firstChars */

// input: length and string

// output: return the number of characters based on the length input

// create empty string variable
// create a for loop to loop over array
// create if statement
//  - if string is empty, return empty string
//  - else use slice method and start at 0 ending at the length input
// return variable

function firstChars(length, string) {
  var result = '';
  if (string === '') {
    return result;
  } else {
    result = string.slice(0, length);
  }
  return result;
}
