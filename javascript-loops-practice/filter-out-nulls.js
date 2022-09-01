/* exported filterOutNulls */

/* 1. Create a storage container for the output value: all values in an array except null;
2. Look at each array index starting at 0 and moving until the array length;
3. Check if each value of array index is equal to "null";
4. If it is not equal to null, store it in the storage; if it is null, don't store it;
5. After reaching the loop's end...return the value of the storage container */

function filterOutNulls(values) {
  var noNullStorage = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullStorage.push(values[i]);
    }
  }
  return noNullStorage;
}
