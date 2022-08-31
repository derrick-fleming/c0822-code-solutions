/* exported getLastCharacter */
function getLastCharacter(string) {
  var stringArray = string.split('');
  var lastCharacter = stringArray[stringArray.length - 1];
  return lastCharacter;
}
