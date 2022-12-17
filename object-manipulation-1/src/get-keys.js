/* exported getKeys */

// input: object - Any JavaScript Object

// output: An Array of the object's property keys.

// create an empty array and assign to a variable
// create a for in loop to loop over the keys
// push key into empty array
// return array

function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
