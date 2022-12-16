/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}

// input: words (array of strings), suffix (word adding to the end)
// output: A new array containing each word with the suffix appended to it.

// create an empty array for the output
// create a loop to access the words in the input
//   - initalize i to be 0
//   - have the loop stop when it is greater than the length of the array
//   - increment i by 1 at the end of the loop
// for each number
//   - add current word with the suffix and push it into the array
// return array from the function
