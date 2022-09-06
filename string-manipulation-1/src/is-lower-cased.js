/* exported isLowerCased */

/* 1. Compare the original word with the original word all lowercased.
3. Check if they are both all lowercase.
4. If they are, return "true"
5. If they are not, return "false */

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
