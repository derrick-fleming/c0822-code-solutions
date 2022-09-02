/* exported reverseWord */

/* Create a storage container for the reversed string
4. Cycle through a loop that stores the furtherest string value into a new string
6. Reutrn the output  */

function reverseWord(string) {
  var reverseOutput = string[string.length - 1];
  for (var i = string.length - 2; i > 0; i--) {
    reverseOutput = reverseOutput.concat(reverseOutput[i]);
  }
  return reverseOutput;
}
