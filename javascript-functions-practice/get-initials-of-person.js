/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var firstNameArray = firstName.split('');
  var firstInitial = firstNameArray[0];
  var lastName = person.lastName;
  var lastNameArray = lastName.split('');
  var lastInitial = lastNameArray[0];
  return firstInitial + lastInitial;
}
