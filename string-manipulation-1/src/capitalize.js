/* exported capitalize */

/*
1. create storage container for the output (capitalized word)
2. Create a storage container for the output (capitalized first letter)
3. change all letters in string to lowercase (in case some are uppercased)
4. Change the output[0] to be uppcase using the toUpperCase method
5. Replace the output[0] with the variable that stored the uppercase letter.
6. Return the word output value
*/

function capitalize(word) {
  var wordOutput = word.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  wordOutput = wordOutput.replace(wordOutput[0], firstLetter);
  return wordOutput;
}
