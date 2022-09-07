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
  var subArray = [];
  var numberContainers = Math.floor(array.length / size);
  if (numberContainers === 0) {
    return chunkOutput;
  } else {
    for (var i = 0; i <= numberContainers; i++) {
      if (size * i < array.length) {
        subArray = array.slice(size * i, size * i + size);
        chunkOutput.push(subArray);
      } else {
        break;
      }
    }
    return chunkOutput;
  }
}
