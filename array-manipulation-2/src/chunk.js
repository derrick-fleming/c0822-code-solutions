/* exported chunk */

/* 1. define a function with two parameters: array & size
. Create an empty array variable to store the final output.
. Create a sizeContainer to modify the size of the "size" input
. Create a loop that will continue until i = array.length
. Inside that loop, adjust the sizeContainer to (size + i (will become size later on))
. Create another loop that will continue until the variable (x) is equal to the size variable.
. Check if the variable is smaller than the array's length. If it is not, break out of loop.
. Push value (x) into the Subarray & cycle through until it is equal to the size variable
. Push the subArray into the OutputArray
. Repeat the steps until the entire array length has been passed.
. Return the array Output at the end.
*/

function chunk(array, size) {
  var outputArray = [];
  var sizeContainer = size;
  for (var i = 0; i < array.length; i += size) {
    sizeContainer = size + i;
    var subArray = [];
    for (var x = i; x < sizeContainer; x++) {
      if (x < array.length) {
        subArray.push(array[x]);
      } else {
        break;
      }
    }
    outputArray.push(subArray);
  }
  return outputArray;
}
