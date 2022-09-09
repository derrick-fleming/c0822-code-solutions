/* exported dropRight */

/* 1. Define function with two parameters: array & count
2. Create an empty array variable.
4. Slice the array beginning at 0 (start of the array) and ending at arraylength - count.
5. Store that value into the empty array variable.
7. Return the array variable.
*/

function dropRight(array, count) {
  var dropRightOutput = [];
  dropRightOutput = array.slice(0, array.length - count);
  return dropRightOutput;
}
