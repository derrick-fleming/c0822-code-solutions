/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  while (queue.peek() !== undefined) {
    const secondValue = queue.peek();
    if (firstValue <= secondValue) {
      return firstValue;
    }
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }
}
