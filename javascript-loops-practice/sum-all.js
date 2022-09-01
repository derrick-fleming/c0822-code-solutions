/* exported sumAll */

/* 1. Create storage for the sum of the array values;
2. Look at each number from the first index to the last index;
3. Check if index is less than the length array;
4. If it is, add the value of the index to the sum storage;
5. Return the sum list.;

*/

function sumAll(numbers) {
  var sumStorage = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumStorage = sumStorage + numbers[i];
  }
  return sumStorage;
}
