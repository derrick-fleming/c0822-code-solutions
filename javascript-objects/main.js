var student = {
  firstName: 'Derrick',
  lastName: 'Fleming',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Teacher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: 2016
};

vehicle['color'] = 'charcoal';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Ellie',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
