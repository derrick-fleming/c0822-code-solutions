/* exported drop */

/* 1. Define function with two parameters: array & count
2. Create an empty array for the output.
3. Use slice to begin the array range at count.
4. Return the new array value. */

function drop(array, count) {
  var dropOutput = [];
  dropOutput = array.slice(count);
  return dropOutput;
}
