var books = [
  { isbn: '1112286865', title: 'The Giver', author: 'Lois Lowry' },
  { isbn: '0021147789', title: 'Green Eggs and Ham', author: 'Dr. Seuss' },
  { isbn: '5540772992', title: 'Holy Bible', author: 'Someone' }
];

console.log('books array:', books);
console.log('typeof books:', typeof books);

console.log('JSON of books:', JSON.stringify(books));
console.log('typeof JSON of books:', typeof JSON.stringify(books));

var string = '{"Number id": 15385, "String name": "Jason" }';
console.log('typeof String:', typeof string);
var js = JSON.parse(string);
console.log('js object:', js);
console.log('typeof js object:', typeof js);
