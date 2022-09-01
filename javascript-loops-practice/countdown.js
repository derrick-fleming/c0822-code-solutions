/* exported countdown */

/* 1. Create storage for array;
2. Look at each number starting from the value of the number value
3. Check if input is greater than or equal to 0;
4. If it is, add the number to list in array;
5. Decrease the number value;
6. After loop, return the countdown list */

function countdown(number) {
  var output = [];
  for (var i = number; i >= 0; i--) {
    output.push(number);
    number--;
  }
  return output;
}
