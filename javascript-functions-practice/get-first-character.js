/* exported getFirstCharacter */
function getFirstCharacter(string) {
  var stringArray = string.split(' ');
  var firstCharacter = stringArray[0][0];
  return firstCharacter;
}
