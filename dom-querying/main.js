console.log('hello, world!');

var heading = document.querySelector('h1');
console.log('heading', heading);
console.dir(heading);

var explanationID = document.getElementById('explanation');
console.log('#explanation', explanationID);
console.dir(explanationID);

var $hint = document.querySelectorAll('p.hint');
console.log('p.hint', $hint);
console.dir($hint);

var p = document.querySelectorAll('p');
console.log('p elements', p);

var $exampleLink = document.querySelectorAll('.example-link');
console.log('.example-link', $exampleLink);
