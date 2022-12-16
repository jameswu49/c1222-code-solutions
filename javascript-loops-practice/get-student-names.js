/* exported getStudentNames */

function getStudentNames(students) {
  var arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}

// input: students - an array of objects; each with a string name property.
// output: A new array containing only the name of each student object.

// create an empty array to be returned
// create a loop to access each item in the array
//   - initlialiize i = 0
//   - loop will stop when i is less than the length of the array
//   - increment i each iteration
// code block
//   - access the current item in the array and use dot notation and target the Key
//   - push it into the empty array
// return array from function
