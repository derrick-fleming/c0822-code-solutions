/* exported union */

/* . Create an empty array literal for the union output.
. Check if values in first array are contained in the union output. If not...
. Place values from first array into the union output
. If they are, ignore it (these are repeat values from same array)
. Check if values in 2nd array are contained in the union output. If not...
. Place values from 2nd array into the union output.
. Return the value of the union output after cycling through 2nd array.
*/

function union(first, second) {
  var unionOutput = [];
  for (var i = 0; i < first.length; i++) {
    if (!unionOutput.includes(first[i])) {
      unionOutput.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!unionOutput.includes(second[x])) {
      unionOutput.push(second[x]);
    }
  }
  return unionOutput;
}
