/* exported isAnagram */

/* 1. Get rid of all of the extra spaces within a word (use replace)
2. Compare the different string lengths once the spaces have been taken out.
3. If the lengths of the two strings are now different...return false (b/c they are not anagrams)
4. Check if each character in the 2nd string is somewhere contained in the 1st string's list
5. If it is NOT included, return false.
6. If it is located in the string, replace the value with 0 (to avoid including repetitive letters)
7. End once you hit the 2nd string's length.
8. If there is a complete match, return true.
*/

function isAnagram(firstString, secondString) {
  var revisedFirstString = firstString.replaceAll(' ', '');
  var revisedSecondString = secondString.replaceAll(' ', '');
  if (revisedFirstString.length < revisedSecondString.length) {
    return false;
  }
  for (var i = 0; i < revisedSecondString.length; i++) {
    if (!revisedFirstString.includes(revisedSecondString[i])) {
      return false;
    }
    revisedFirstString = revisedFirstString.replace(secondString[i], 0);
  }
  return true;
}
