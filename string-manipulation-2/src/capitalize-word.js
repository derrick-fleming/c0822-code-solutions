/* exported capitalizeWord */

/* 1. Define a function with the parameter for the  string.
2. Create a variable that will store the word in all lowercase (capitalized).
3. Check if the word matches the word "javascript"
4. If it does...change the word to "JavaScript"
5. If it does not....
6. Concatenate the first index value with the lowercased output (with all the letters except the first).
6. Return the value of the new word. */

function capitalizeWord(word) {
  var capitalized = word.toLowerCase();
  if (capitalized === 'javascript') {
    capitalized = 'JavaScript';
  } else {
    capitalized = capitalized[0].toUpperCase() + capitalized.slice(1);
  }
  return capitalized;
}
