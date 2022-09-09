/* exported pick */

/* 1. Create an empty object literal.
2. Check if keys at first array index is a property in the source
3. If it is...add its key & value to the new object
4. If it is not...skip & move to the next array literal
5. Continue until all array values in the keys argument have been passed
6. Return the new object @ end the end. */

function pick(source, keys) {
  var pickObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        pickObject[keys[i]] = source[keys[i]];
        break;
      }
    }
  }
  return pickObject;
}
