/* exported includesSeven */

/* 1. Create a boolean with the label "false"
2. Cycle through an array index starting at 0 and ending possibly at it's length;
3. Check if the value is a number 7;
4. return the boolean true and break out of the loop;
5. Once loop has been cycled, return boolean "false" if there is no number 7 anywhere. */

function includesSeven(array) {
  var output = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      output = true;
      break;
    }
  }
  return output;
}
