/* exported isUpperCased */

/* 1. Create a stroage container for the word with all uppercase letters
2. Compare the output with the original word.
3. Check if they are both all uppercase.
4. If they are, return "true"
5. If they are not, return "false */

function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
