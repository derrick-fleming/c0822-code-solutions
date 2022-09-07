/* exported swapChars */

/* 1. Define a function with three parameters: (firstIndex #, secondIndex#, string)
2. Create an array of characters with the value of the string.
3. Change the value of the aray at the firstIndex with the value of the Second Index.
4. Swap the letter of the secondIndex # with the first Index# in the original string
5. Change the array back into a string.
6. Return the value of the new string. */

function swapChars(firstIndex, secondIndex, string) {
  var swapOutput = string.split('');
  swapOutput[firstIndex] = string[secondIndex];
  swapOutput[secondIndex] = string[firstIndex];
  return swapOutput.join('');
}
