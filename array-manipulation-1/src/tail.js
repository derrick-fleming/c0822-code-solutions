/* exported tail */

/* 1. Create a container to store an empty array (this will be the ending output)
2. Cycle through a loop
3. Start the cycle at an index of [1] push the array parameter's value into the empty array
4. Repeat the step to include everything afterward until the array's length
4. Return the output of the array. */

function tail(array) {
  var tailOutput = [];
  for (var i = 1; i < array.length; i++) {
    tailOutput.push(array[i]);
  }
  return tailOutput;
}
