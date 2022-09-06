/* exported chunk */

/* 1. define a function with two parameters: array & size
. Create an empty array variable to store the final output.
. Create a variable that will represent the # of containers in the output array
. Group the size# of array values into the separate containers
. Combine the separate containers into the final output.
. Insert the remaining values into the final array output
*/

function chunk(array, size) {
  var chunkOutput = [];
  var container = Math.floor(array.length / size);
  var firstArray = array.slice(0, size);
  var otherArrays = [];
  chunkOutput.push(firstArray);
  for (var x = 1; x <= container; x++) {
    if (size * x < array.length) {
      otherArrays = array.slice(size * x, 2 * (size * x));
      chunkOutput.push(otherArrays);
    }
  }
  return chunkOutput;
}
