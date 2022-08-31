/* exported getSecondCharacter */
function getSecondCharacter(string) {
  var stringArray = string.split();
  var secondCharacter = stringArray[0][1];
  return secondCharacter;
}
