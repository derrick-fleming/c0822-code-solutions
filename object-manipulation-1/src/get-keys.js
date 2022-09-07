/* exported getKeys */

/* 1. Define function that takes one parameter: object
2. Create an empty array to store the object keys
3. Cycle through the object to find each of the keys.
4. Push the value into the array.
5. Return the array. */

function getKeys(object) {
  var getKeysOutput = [];
  for (var key in object) {
    getKeysOutput.push(key);
  }
  return getKeysOutput;
}
