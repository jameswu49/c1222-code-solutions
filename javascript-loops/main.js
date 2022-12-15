/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeatWord(hello, 4)', repeatWord('hello ', 4));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter', 'Jimmy');
logEachCharacter('Jimmy');
console.log('logEachCharacter', '');
logEachCharacter('');
console.log('logEachCharacter', 'Hello, there!');
logEachCharacter('Hello, there!');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll([1,2,3,4,5]):', doubleAll([1, 2, 3, 4, 5]));
console.log('doubleAll([3,6,9,12,15]):', doubleAll([3, 6, 9, 12, 15]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

var person = {
  firstName: 'Jimmy',
  lastName: 'Wu'
};

var info = {
  age: 29,
  birthday: '4/02/1993'
};

console.log('getKeys({ firstName: "Jimmy", lastName: "Wu" }):', getKeys(person));
console.log('getKeys({ age: "29", birthday: "4/02/1993" }):', getKeys(info));

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}

console.log('getValues({ firstName: "Jimmy", lastName: "Wu" }):', getValues(person));
console.log('getValues({ age: "29", birthday: "4/02/1993" }):', getValues(info));
