/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  const secondValue = queue.dequeue();
  if (firstValue >= secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
  queue.enqueue(secondValue);
  return firstValue;

}
