/* exported ransomCase */

// input: string - any JavaScript String

// output: Returns string with every - other character uppercased.

// create empty string variable
// use for loop and loop over each letter in string
// use modulo to figure out whether string index is odd or even
// if
//   - if initializer is even, lowercase it
//   - add it to to the result and update it
// else
//   - if initializer is odd, lowercase it
//   - add it to the result and update it
// return result

function ransomCase(string) {
  var result = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else if (i % 2 !== 0) {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
