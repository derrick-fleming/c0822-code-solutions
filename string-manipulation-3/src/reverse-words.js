/* exported reverseWords */

/* 1. split the word into an array with the spaces separated out
2. Create an empty string
2. Cycle through a loop that will begin at the first array index.
3. Within that loop, cycle through the letters of the index word.
4. Begin at the index[0]'s last letter & insert it into the new string.
5. At the end of the word, move onto the next word & repeat the cycle.
6. Return the final word at the end. */

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseOutput = '';
  for (var index = 0; index <= stringArray.length - 1; index++) {
    for (var end = stringArray[index].length - 1; end >= 0; end--) {
      reverseOutput += stringArray[index][end];
    }
    if (index !== stringArray.length - 1) {
      reverseOutput += ' ';
    }
  }
  return reverseOutput;
}
