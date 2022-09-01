/* exported oddOrEven */
/* 1. Create an empty array literal as the output value for the function;
2. Cycle through an array starting at 0 and going until the array's length;
3. Check if the number is odd or even by using the remainder or modulus 2 of each
value at the array index.;
4. If the remainder = 0 & number is NOT 1, push "even" into the output array literal;
5. If not push "odd" into the output array literal;
6. Once finished, return the output value from the function;
*/

function oddOrEven(numbers) {
  var oddOrEvenOutcome = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenOutcome.push('even');
    } else {
      oddOrEvenOutcome.push('odd');
    }
  }
  return oddOrEvenOutcome;
}
