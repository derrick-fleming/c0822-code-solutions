/* exported firstChars */

/* 1. Define a function with two parameters: length & string.
2. Create a variable that will store the output value.
3. Slice the string at the length's value (first value = 0, second = length)
4. Store the value into the output variable.
5. Return the value of the string */

function firstChars(length, string) {
  var lengthCharacters = string.slice(0, length);
  return lengthCharacters;
}
