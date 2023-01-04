/* exported pick */

// input: source - An object literal
//        keys - An array containing strings

// output: Return a new object containing only the keys and values that match the string

// create empty variable and assign empty object to it
// loop through keys array
// compare keys array elements with source key's
//   - if their value isn't undefined, add them into the empty object
// return object variable

function pick(source, keys) {
  var object = {};
  for (var key of keys) {
    if (source[key] !== undefined) {
      object[key] = source[key];
    }
  }
  return object;
}
