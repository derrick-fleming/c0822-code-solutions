/* exported findIndex */

/* 1. Create container to store the outcome value starting at -1.
2. cylce through an array that starts at index 0 and continues until it reaches the  array length;
3. Check if the array at the specified index # matches the value argument;
4. If yes, return the index # & break out of the loop;
5. If no, continue through the next loop iteration;
6. If no match, return outcome (-1); */

function findIndex(array, value) {
  var indexOutcome = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOutcome = i;
      break;
    }
  }
  return indexOutcome;
}
