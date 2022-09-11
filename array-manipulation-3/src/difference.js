/* exported difference */

/* . Create an empty array to store the difference output.
. Check if the values in the first array are found anywhere in the second array.
. If they are not, then add them to the difference output. If they are, ignore.
. Check if the values in the second array are found anywhere in the first array.
. If they are not, then add them to the different output. If they are, ignore.
. Return the difference output. */

function difference(first, second) {
  var differenceOutput = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      differenceOutput.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      differenceOutput.push(second[x]);
    }
  }
  return differenceOutput;
}
