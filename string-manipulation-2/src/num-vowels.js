/* exported numVowels */

/* Define a function with one parameter: string
2. Create a variable that will store the number of vowels in a string.
3. Check if the letter is a vowel
4. If it is a vowel, add one, move onto next letter. If it is not a vowel, move onto the next letter.
5. Return the output that contains just numbers. */

function numVowels(string) {
  var stringLower = string.toLowerCase();
  var numberVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (stringLower[i] === 'a' ||
    stringLower[i] === 'e' ||
    stringLower[i] === 'i' ||
    stringLower[i] === 'o' ||
    stringLower[i] === 'u') {
      numberVowels += 1;
    }
  }
  return numberVowels;
}
