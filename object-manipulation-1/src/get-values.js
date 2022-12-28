/* exported getValues */

// input: object - Any JavaScript Object

// output: An Array of the object's property values.

// create an empty array and assign to variable
// create a for in loop to loop through the keys of the object
//   - push the values of the object in the array
// return array

function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}
