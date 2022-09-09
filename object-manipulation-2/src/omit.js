/* exported omit */

/* 1. Create an empty object literal.
2. Check if keys include that specific key.
4. If it does not...add that key & value to the output object
5. Continue until all key values have been cycled
6. Return the new object @ end the end. */

function omit(source, keys) {
  var omitOutput = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omitOutput[key] = source[key];
    }
  }
  return omitOutput;
}
