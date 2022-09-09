/* exported take */

/* 1. Define function with two parameters: array & count
2. Use slice to begin the array range at index 0
3. Have the 2nd argument in the slice method be "count"
4. Return the new array value. */

function take(array, count) {
  var takeOutput = [];
  takeOutput = array.slice(0, count);
  return takeOutput;
}
