/* exported pick */

// input: source - An object literal
//        keys - An array containing strings

// output: Return a new object containing only the keys and values that match the string

// create empty variable and assign empty object to it
// loop through object and get key names
// compare key names to key array and check whether array has the object key
//   - if it does, assign key and value of the key to empty object
// return empty object

function pick(source, keys) {
  var object = {};
  for (var key in source) {
    if (keys.includes(key)) {
      object[key] = source[key];
    }
  }
  // console.log('value of', object);
}
