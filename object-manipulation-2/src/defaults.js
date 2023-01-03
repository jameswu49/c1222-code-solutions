/* exported defaults */

// input: target - object
//        source - object

// output: modifies the target with missing values from source

// loop through keys in target object
// check if target object contains source keys name
//   - if it doesn't assign the source key's name to the target object and sources value to the target objects value
// console log target object

function defaults(target, source) {
  for (var key in source) {
    if (!Object.hasOwn(target, key)) {
      target[key] = source[key];
    }
  }
  // console.log(target);
}
