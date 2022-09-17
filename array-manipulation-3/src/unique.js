/* exported unique */

/* 1. Create an empty array literal for the unique Output.
2. Check if the contents in unique Output includes the first index from the argument array.
3. If it does not, then add the first index from the arguments array into the output.
3. Continue through this checking process until you reach the end of the argument array.
. Return the output array value. */

function unique(array) {
  var uniqueOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueOutput.includes(array[i])) {
      uniqueOutput.push(array[i]);
    }
  }
  return uniqueOutput;
}
