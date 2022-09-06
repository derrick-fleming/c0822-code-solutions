/* exported capitalize */

/*
1. create storage container for the word value in lower-case (capitalized word)
3. Change all letters in string to lowercase (in case some are uppercased)
3. Get the first letter of the original string and capitalize it & store it in a container.
4. Concatenate the first letter with the original string minus the first index.
6. Return the word output value
*/

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  var wordOutput = firstLetter + lowerCase.slice(1);
  return wordOutput;
}
