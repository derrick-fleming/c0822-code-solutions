/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  while (queue.peek() !== undefined) {
    if (count === index) {
      return queue.dequeue();
    } else {
      const value = queue.dequeue();
      queue.enqueue(value);
      count++;
    }
  }
}
