/* exported equal */

/* 1. Compare the two arguments together by:
2. Checking if the lengths of the two indexes are the same. If not...automatic return false.
2. Creating a loop that will cycle through each of the arguments at their same index
3. If a value is not equal, then you need to return out of the loop with: false
4. If they are equal, continue through the cycle to check if any of the values are false.
5. If no values are false, return true. */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
