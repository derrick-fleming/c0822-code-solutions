var booksArray = [
  {
    isbn: '979-8745274824',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    isbn: '978-0147514011',
    title: 'Little Women',
    author: 'Louisa May Alcott'
  },
  {
    isbn: '978-0141439471',
    title: 'Frankenstein',
    author: 'Mary Shelley'
  }
];
console.log('booksArray:', booksArray);
console.log('typeof booksArray:', typeof booksArray);

var jsonBooksArray = JSON.stringify(booksArray);
console.log('JSON.stringify of booksArray:', jsonBooksArray);
console.log('typeof jsonBooksArray:', typeof jsonBooksArray);

var studentData = '{"id":"10034","name":"Catherine Jones"}';
console.log('studentData:', studentData);
console.log('typeof studentData:', typeof studentData);

var jsonStudentData = JSON.parse(studentData);
console.log('jsonStudentData:', jsonStudentData);
console.log('typeof jsonStudentData:', typeof jsonStudentData);
