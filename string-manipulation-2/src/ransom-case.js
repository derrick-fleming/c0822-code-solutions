/* exported ransomCase */

/* 1. Define a function with one parameter: string
2. Create a new variable that will store the output.
3. Store the ransomOutput value [0] as lowercased into a new  output string.
4. Check if the index value is an odd #.
5. If it is, then change that index value to an uppercase letter.
6. Concatenate that value with output string.
7. If it is even, concatenate the lowercase value with the output.
8. Return the new output. */

function ransomCase(string) {
  var ransomOutput = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      ransomOutput += string[i].toUpperCase();
    } else {
      ransomOutput += string[i].toLowerCase();
    }
  }
  return ransomOutput;
}
