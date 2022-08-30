function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('The value of convertMinutesToSeconds at 5 is:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}

var greetResult = greet('Beavis');

console.log('The value of greetResult is:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('The value of getAreaResult at 17 and 42 is:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('The value of getFirstNameResult is:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('The value of getLastElementResult is:', getLastElementResult);
