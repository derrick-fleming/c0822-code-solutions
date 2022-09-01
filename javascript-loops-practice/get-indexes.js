/* exported getIndexes */

/* 1. Create storage of an array that contains output of array index #;
2. Look at the array index # from first (0);
3. Check if the index # is less than the length of the array;
4. If it is, store the index # into the array storage by using push;
5. return the array that contains the indexes from initial input */

function getIndexes(array) {
  var indexStorage = [];
  for (var i = 0; i < array.length; i++) {
    indexStorage.push(i);
  }
  return indexStorage;
}
