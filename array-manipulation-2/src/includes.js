/* exported includes */

/* 1. Define function with two parameters: array & value
2. Check if the first array value is equal to "value"
3. Cycle through all the array values to see if they match with "includes"
4. If a value does, return "true", if it does not, return "false"
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
