/* exported capitalizeWords */

/* 1. Define a function that will have one parameter: string.
2. Change the string to be entirely lowercased.
3. Convert the string to an array using the split method & separating spaces.
4. Search through the array and convert the first letter of each array value into uppercase. [i][0]
5. Concatenate the array into an output.
6. Return the output. */

function capitalizeWords(string) {
  var lowerString = string.toLowerCase();
  var stringArray = lowerString.split(' ');
  var firstLetter = '';
  for (var i = 0; i < stringArray.length; i++) {
    firstLetter = stringArray[i][0].toUpperCase();
    stringArray[i] = firstLetter + stringArray[i].slice(1);
  }
  return stringArray.join(' ');
}
