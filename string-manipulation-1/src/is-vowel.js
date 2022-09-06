/* exported isVowel */

/* 1. Compare if the character is equal to "a" or "A" --> if it is, return true
2. If not, compare if character is equal to "e" or "E" --> if it is, return true
3. If not, compare if character is equal to "i" or "I" --> if it is, return true
4. If not, compare if character is equal to "o" or "O" --> if it is, return true
5. If not, compare if character is equal to "u" or "U" --> if it is, return true
6. If it is not any of the above options, return false */

function isVowel(char) {
  if (char === 'a' || char === 'A' ||
      char === 'e' || char === 'E' ||
      char === 'i' || char === 'I' ||
      char === 'o' || char === 'O' ||
      char === 'u' || char === 'U') {
    return true;
  }
  return false;
}
