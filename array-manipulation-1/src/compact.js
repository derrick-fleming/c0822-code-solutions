/* exported compact */

/* 1. Define a function with one parameter: the array
2. Create an empty array.
3. Check if array value contains a boolean value of true.
4. if it does, push that value into the array (if it is a falsy, don't push it)
5. Add all other values to the array
6. Return the output */

function compact(array) {
  var compactOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      compactOutput.push(array[i]);
    }
  }
  return compactOutput;
}
