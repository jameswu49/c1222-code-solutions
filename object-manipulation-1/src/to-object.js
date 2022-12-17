/* exported toObject */

// input: keyValuePair - An Array containing two elements; a String key and any other JavaScript value.

// output: An Object with one property consisting of the passed keyValuePair.

// create an empty object and assign to variable
// target the empty object to the first element in the input using bracket notation and assign it to the second
// element in the array to assign the key and value
// return the object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
