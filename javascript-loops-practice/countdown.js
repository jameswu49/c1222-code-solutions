/* exported countdown */

function countdown(number) {
  var arr = [];
  for (let i = number; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}

// Start with an empty array to add values into
// create a for loop
//   - initalize i and assign to number
//   - condtion will stop when i is less than the length of number
//   - take away 1 from i at the end of the loop
// In the code block, add the value of i into the empty array for each iteration
// return array at the end of the function
