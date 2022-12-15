var x = 1;
var y = 2;
var z = 5;

var maximumValue = Math.max(x, y, z);
console.log('value of maximumValue(x,y,z):', maximumValue);

var heroes = ['batman', 'superman', 'flash', 'spiderman'];

var randomNumber = Math.random() * heroes.length;
console.log('value of randomNumber:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Chronicles of Narnia',
    author: 'C.S. Lewis'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Hatchet',
    author: 'Gary Paulsen'
  }
];

var lastBook = library.pop();
console.log('value of lastBook', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Jimmy Wu';

var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
