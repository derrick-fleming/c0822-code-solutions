/* exported flatten */

/* 1. Creae an empty array literal
2. Cycle through each array value starting at 0 and ending at the array's length.
3. Check if the array index is another array.
4. If it is not...continue oneward
5. If it is...then change the array index value to be just the array's value (minus the array part)
6. Continue with the loop
7. Return the array output. */

function flatten(array) {
  var flattenOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var subIndex = 0; subIndex < array[i].length; subIndex++) {
        flattenOutput.push(array[i][subIndex]);
      }
    } else {
      flattenOutput.push(array[i]);
    }
  }
  return flattenOutput;
}
