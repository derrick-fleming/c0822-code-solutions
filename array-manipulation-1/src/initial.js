/* exported initial */

/* 1. Create an empty array to store the output (initialOutput)
2. Cycle through a loop that adds each array value into the empty array
3. Stop the loop before you reach the array's length.
4. Return the value of the array output. */

function initial(array) {
  var initialOutput = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialOutput.push(array[i]);
  }
  return initialOutput;
}
