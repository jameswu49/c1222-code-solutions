/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// var bart = {
//   name: 'Bartholomew JoJo Simpson',
//   age: 10
// };

// var homer = {
//   name: 'Homer Jay Simpson',
//   age: 39
// };

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH <= 7) {
    return 'acid';
  } else if (pH <= 14 && pH >= 7) {
    return 'base';
  }
  return 'Invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  }
  return 'Goodnight everybody!';
}
