/* exported invert */

// input: source - an object

// output: return an object containing all properties of source but with keys and values swapped

// create empty object and assign to variable
// loop through properties in source
// set sources values as the key and assign it the sources key as a value to the empty object
// return object

function invert(source) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
