/* exported getWords */

/* 1. Create a storage of an empty container for the array
2. If the string has a value inside of it...
3. Split the string into an array using the split method.
4. If it does NOT have an array inside of it, return empty array
5. Return the value of the array */

function getWords(string) {
  var getWordsOutput = [];
  if (string !== '') {
    getWordsOutput = string.split(' ');
  } else {
    return getWordsOutput;
  }
  return getWordsOutput;
}
