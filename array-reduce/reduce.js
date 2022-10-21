function reduce(array, reducer, initialValue) {
  let output = initialValue;
  let i = 0;
  if (arguments.length < 3) {
    output = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    output = reducer(output, array[i]);
  }
  return output;
}
