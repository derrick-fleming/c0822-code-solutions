/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  var firstName = person.firstName;
  var firstNameArray = firstName.split('');
  return firstNameArray[0];
}
