var number1 = 8;
var number2 = 15;
var number3 = 11;

var maximumValue = Math.max(number1, number2, number3);

console.log('maximumValue:', maximumValue);

var heroes = ['Spider-Man', 'Wonderwoman', 'Storm', 'Black Panther'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'JK Rowling'
  },
  {
    title: 'Grapes of Wrath',
    author: 'John Steinbeck'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe',
    author: 'C.S. Lewis'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

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

console.log('library:', library);

var fullName = 'Derrick Fleming';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
