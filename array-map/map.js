function map(array, transform) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    arrayResult.push(transform(array[i]));
  }
  return arrayResult;
}
