/* exported isPalindromic */

/* 1. Create middle variable & floor it.
2. Create a loop to cycle through the string.
3. Create a variable for the length (string.length -1)
3. Check if string(i) [start] is equal to string(length - i)
4. If they are equal, progress to next stage. If NOT equal...
5. return false */

function isPalindromic(string) {
  var middleNumber = Math.floor(string.length / 2);
  var length = string.length - 1;
  var endIndex = 0;
  for (var i = 0; i < middleNumber; i++) {
    if (string[i] === ' ') {
      i++;
    }
    if (string[length - endIndex] === ' ') {
      endIndex++;
    }
    if (string[i] !== string[length - endIndex]) {
      return false;
    }
    endIndex++;
  }
  return true;
}
