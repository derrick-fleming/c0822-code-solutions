/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  if (top === undefined) {
    return;
  }
  const secondTop = stack.peek();
  stack.push(top);
  return secondTop;
}
