/* exported swapChars */

// input: firstIndex, secondIndex, string

// output: swap the first index position with the second index position of the string

// target index of string
// replace string's first index with second index and assign to a new variable
// replace string's second index with first index and assign to a new variable
// replace first new variable's second index with

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  var firstSwap = string.replace(string[firstIndex], split[secondIndex]);
  var secondSwap = firstSwap.replace(firstSwap[secondIndex], split[firstIndex]);
  return secondSwap;
}

// swap first index with second index of string

// oodash

// lldash

// first = oodash

// second = lldash

// third = oodash

// oldash
