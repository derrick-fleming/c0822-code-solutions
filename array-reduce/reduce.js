function reduce(array, reducer, initialValue) {
  let output;
  for (let i = 0; i < array.length; i++) {
    if (initialValue === undefined) {
      initialValue = array[0];
      output = initialValue;
      i = 1;
    }
    output = reducer(output, array[i]);
  }
  return output;
}
