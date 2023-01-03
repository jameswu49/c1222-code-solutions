// /* exported omit */

// input: source - a javascript object
//        keys - an array of javascript strings

// create empty object and assign to variable
// loop through sources properties
// use include method to check whether keys array contains any of the sources properties
//   - if it doesn't, assign that current object key and value to empty object
// return empty object

// function omit(source, keys) {
//   var object = {};
//   for (var key in source) {
//     if (!keys.includes(key)) {
//       object[key] = source[key];
//     }
//   }
//   return object;
// }
