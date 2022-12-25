/* exported pick */

// input: source - An object literal
//        keys - An array containing strings

// output: Return a new object containing only the keys and values that match the string

// create empty object and assign to variable
// loop through each key
// create if statement
//   - if keys input matches the object key
//     - dot notation key into the object
// return object

function pick(source, keys) {
  var newKeys = Object.keys(source);
  for (var i = 0; i < newKeys.length; i++) {
    if (newKeys[i] === keys[i]) {
      // console.log(keys[i]);
    }
  }
}
