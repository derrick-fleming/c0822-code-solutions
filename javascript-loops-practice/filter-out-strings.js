/* exported filterOutStrings */
/* 1. Create an empty array as a storage container for the output of arrays without strings;
2. Look at each array index beginning at 0 and ending at the array length;
3. Check if the type of the array's value at each index is a string;
4. If it is NOT a string, store the value into the output variable.;
5. If it IS a string, ignore it.;
6. After finishing the loop, return the value of the output variable */

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
