/* exported takeRight */

/* 1. Define function with two parameters: array & count
2. Create an empty array variable.
3. Check if count is < the array length. If it is then...
4. Slice the array beginning at the array length - count.
5. Store that value into the empty array variable.
6. If the count is > than the array length, then return a copy of the entire array
7. Return the array variable.
*/

function takeRight(array, count) {
  var takeRightOutput = [];
  if (count < array.length) {
    takeRightOutput = array.slice(array.length - count);
  } else {
    takeRightOutput = array;
  }
  return takeRightOutput;
}
