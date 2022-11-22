/* exported maxValue */

function maxValue(stack) {
  let maximum = -Infinity;
  while (stack.peek() !== undefined) {
    const value = stack.peek();
    if (value > maximum) {
      maximum = value;
    }
    stack.pop();
  }
  return maximum;
}
