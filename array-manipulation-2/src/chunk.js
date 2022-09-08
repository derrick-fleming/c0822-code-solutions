/* exported chunk */

/* 1. define a function with two parameters: array & size
. Create an empty array variable to store the final output.
. Create an empty array variable that will store each sub array
. Create a variable that will represent the # of containers in the output array
. Group the size# of array values into the separate containers
. Check if the size# of the array multiplied by "i" is smaller than the array's length.
. Start by slicing index 0 and ending with the "size" array.
. Assign this slice to the subArray array.
. Push that value into the ChunkOutput array.
. Repeat the steps
. Return the chunkOutput once (size * i) is larger than the array's length.
*/

function chunk(array, size) {
  var chunkOutput = [];
  var subArray = [];
  var numberContainers = Math.floor(array.length / size);
  for (var i = 0; i <= numberContainers; i++) {
    if (size * i < array.length) {
      subArray = array.slice(size * i, size * i + size);
      chunkOutput.push(subArray);
    }
  }
  return chunkOutput;
}
