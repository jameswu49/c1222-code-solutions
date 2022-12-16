/* exported sumAll */

function sumAll(numbers) {
  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = numbers[i] + result;
  }
  return result;
}

// create an empty array to return out of the function
// create a result variable to hold the values we will be adding and updating
// parameter(number) accepts an array, so we can loop over it using a for loop
//   - initalize i and assign it as 0
//   - have it loop based on the length of the parameter, numbers
//   - increment i by 1 at the end of the loop iteration
// in the code block, add the current number to the result variable and update it
//    - loop will add the next number to the result variable and update it
// return result out of the for loop
