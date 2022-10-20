function filter(array, predicate) {
  const copyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      copyArray.push(array[i]);
    }
  }
  return copyArray;
}
