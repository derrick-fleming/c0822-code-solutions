/* exported intersection */

/* . Create an empty array variable for the intersection output
. Check if the value in the first array is included within the second array.
. Use a loop to check the values if each index value in the first array is in the 2nd
. If it is, then add that value into the intersection output.
. If it is not, then keep moving onward.
. Return intersection output after cycling through the loop.
*/

function intersection(first, second) {
  var intersectionOutput = [];
  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      if (second[x] === first[i]) {
        intersectionOutput.push(first[i]);
      }
    }
  }
  return intersectionOutput;
}
