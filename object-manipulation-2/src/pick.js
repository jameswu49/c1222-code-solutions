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

// function pick(source, keys) {
//   var object = {};
//   var objKeys = Object.keys(source);
//   for (var i = 0; i < keys.length; i++) {
//     if (objKeys.includes(keys[i])) {
//       object[keys[i]] = source[keys[i]];
//     }
//     console.log(object);
//   }
//   return object;
// }

// create empty object and assign to variable
// target source keys and assign to variable
// create for loop to loop through the keys input
//   - start at 0, stop when less than keys input length, and iterate by 1
// create if statement
//   - if first element in the keys input array matches first key in the source object,
//   assign the first key and value of the source input to the object variable
//   - else compared element to every other value

//   how to loop over every other value?
//   - use while loop and nested if statements?
