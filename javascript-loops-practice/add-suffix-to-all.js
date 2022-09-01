/* exported addSuffixToAll */

/* 1. Create array storage for new array of string suffixes
2. Look at each word from an index # starting at 0 to the array length;
3. Check if index # is less than array length;
4. If it is, add the suffix argument to the word array at words[i] and store the;
value in the storage variable by using "push";
5. Give back list of factors. */

function addSuffixToAll(words, suffix) {
  var suffixToAllStorage = [];
  for (var i = 0; i < words.length; i++) {
    suffixToAllStorage.push(words[i] + suffix);
  }
  return suffixToAllStorage;
}
