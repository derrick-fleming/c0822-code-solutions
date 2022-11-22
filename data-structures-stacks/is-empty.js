/* exported isEmpty */

function isEmpty(stack) {
  const topValue = stack.peek();
  if (topValue !== undefined) {
    return false;
  }
  return true;
}
