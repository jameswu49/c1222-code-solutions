var books = [
  {
    isbn: '9780449819531',
    title: 'Eragon',
    author: 'Christopher Paolini'
  },
  {
    isbn: '9780060598242',
    title: 'The Chronicles Of Narnia',
    author: 'C.S. Lewis'
  },
  {
    isbn: '9780606104111',
    title: 'Hatchet',
    author: 'Gary Paulsen'
  }
];

console.log('value of books:', books);
console.log('typeof books:', typeof books);

console.log('value of JSON.stringify(books):', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));

var string = '{"Number id": 12345, "Name": "Jimmy"}';

console.log('value of string:', string);
console.log('type of string:', typeof string);

console.log('value of JSON.parse(string)', JSON.parse(string));
console.log('type of JSON.parse(string)', typeof JSON.parse(string));
