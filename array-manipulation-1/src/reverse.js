/* exported reverse */

/* 1. Create an empty array to store the new array.
2. Create a loop that cylces through the old array.
3. Insert the old array's value into the new array starting at index (length -1)
4. Process through all of them until ending @ 0.
5. Return the new array value. */

function reverse(array) {
  var reverseOutput = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseOutput.push(array[i]);
  }
  return reverseOutput;
}
