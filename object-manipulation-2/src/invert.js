/* exported invert */

/* 1. Create an empty object literal.
2. Get the object key properties.
3. Get the object value properties.
4. Loop through the different values:
5. Add the object value property as the new object's key.
6. Add the object key property as the new object's value.
Return the inverted output. */

function invert(source) {
  var invertOutput = {};
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    invertOutput[sourceValues[i]] = sourceKeys[i];
  }
  return invertOutput;
}
