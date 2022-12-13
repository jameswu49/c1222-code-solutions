function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutesToSecondsResult = convertMinutesToSeconds(5);
console.log('minutesToSecondsResult:', minutesToSecondsResult);

function greetName(name) {
  return 'Hey, ' + name;
}
var greetNameResult = greetName('Jimmy');
console.log('greetNameResult:', greetNameResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(2, 4);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperogue' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
