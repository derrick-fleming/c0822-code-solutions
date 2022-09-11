/* exported zip */

/* 1. Create an empty array.
2. Create an empty subArray.
3. Determine which array in the arguments are the longest by comparing the lengths.
4. Assign the shortest length # to a variable: shortest length.
5. Cycle through a loop beginning at 0 and ending at the shortest length.
6. Insert into the empty sub array the values of the first array at index _ & second array at index _
7. Push the values into the output Array
8. Reset the subArray to an empty array.
9. Keep going until reach end of shortest length
10. Return the zipOutput array. */

function zip(first, second) {
  var zipOutput = [];
  var subArray = [];
  var shortLength = first.length;

  if (second.length < first.length) {
    shortLength = second.length;
  }

  for (var i = 0; i < shortLength; i++) {
    subArray.push(first[i], second[i]);
    zipOutput.push(subArray);
    subArray = [];
  }

  return zipOutput;
}
