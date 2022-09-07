/* exported toObject */

/* 1. Define a function that contains an array that has two elements: a 'string'
key and another Javascript value.
2. Create an empty object container
3. Define the second element of the array as the object's value
4. Assign the value to the first array's element using dot notaiton.
4. Return the new object. */

function toObject(array) {
  var toObjectOutput = {};
  toObjectOutput[array[0]] = array[1];
  return toObjectOutput;
}
