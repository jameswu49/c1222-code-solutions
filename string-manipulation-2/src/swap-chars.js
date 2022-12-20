/* exported swapChars */

// input: firstIndex, secondIndex, string

// output: swap the first index position with the second index position of the string

// create new variable and assign string to
// replace newString's first index with second index and assign to a new variable
// replace new variable's second index with first index of the newStrings first index and assign to a new variable
// return final new variable

// function swapChars(firstIndex, secondIndex, string) {
//   var newString = string;
//   var firstSwap = newString.replace(newString[firstIndex], newString[secondIndex]);
//   var secondSwap = firstSwap.replace(firstSwap[secondIndex], newString[firstIndex]);
//   return secondSwap;
// }

// create empty string variable
// create for loop to loop over each letter
// create if statement
//   - if index of word is same as firstindex then assign secondindex to it
//   - else if index of word is secondindex then assign firstindex to it
// return variable

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split();
  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[firstIndex]) {
      split[i] = string[firstIndex];
    } else if (split[i] === split[secondIndex]) {
      split[i] = split[secondIndex];
    }
  }
  return split;
}
