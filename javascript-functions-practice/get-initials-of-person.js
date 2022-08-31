/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstInitial = person.firstName[0];
  var lastInitial = person.lastName[0];
  return firstInitial + lastInitial;
}
