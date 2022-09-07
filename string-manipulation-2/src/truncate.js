/* exported truncate */

/* 1. Define a function with two parameters: length & string.
2. Create variable to store the truncated string.
3. Use the slice method to index the start & end of the cut string.
4. The ending value will be the parameter "length"
5. Assign that value to the variable for the truncated string.
6. Concatanate the new string with "..."
7. Return the truncated string. */

function truncate(length, string) {
  var shortString = string.slice(0, length);
  shortString += '...';
  return shortString;
}
