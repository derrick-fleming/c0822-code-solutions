/* exported getValues */

/* 1. Define function that takes one parameter: object
2. Create an empty array to store the object key's values.
3. Cycle through the object to find each of the key's values.
4. Push the value into the array.
5. Return the array. */

function getValues(object) {
  var getValuesOutput = [];
  for (var key in object) {
    getValuesOutput.push(object[key]);
  }
  return getValuesOutput;
}
