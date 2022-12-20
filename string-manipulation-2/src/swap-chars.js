/* exported swapChars */

// input: firstIndex, secondIndex, string

// output: swap the first index position with the second index position of the string

// split string into an array
// loop over array
//   - start with first index as the initalizer
//   - stop loop when it reaches the end of the split length
//   - increment by one at the end of loop
// if statement
//   - if string index is equal to first input, then swap it with the second one
//   - else swap second input with first one
// join and return array as a string

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  for (var i = firstIndex; i < split.length; i++) {
    if (split[i] === string[firstIndex]) {
      split[i] = string[secondIndex];
    } else if (split[i] === string[secondIndex]) {
      split[i] = string[firstIndex];
    }
  }
  return split.join('');
}
