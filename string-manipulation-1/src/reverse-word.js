/* exported reverseWord */

/* Create a storage container for the reversed string
4. Cycle through a loop that stores the furtherest string value into a new string
6. Reutrn the output  */

function reverseWord(string) {
  var reverseOutput = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseOutput += string[i];
  }
  return reverseOutput;
}
