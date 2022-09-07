/* exported lastChars */

/* 1. Define a function with two parameters: length, string.
2. Check if the length value is greater than or less than the string's length.
3. If it is less than the string's length...Slice the the string into a new string that will begin at string.length - length
4. If it is greater than the string's length, don't change anything.
3. Return the value of the string. */

function lastChars(length, string) {
  if (length < string.length) {
    return string.slice(string.length - length);
  }
  return string;
}
