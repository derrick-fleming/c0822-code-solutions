/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const top = queue.dequeue();
  if (queue.peek() === undefined) return top;
  queue.enqueue(top);
  return queue.dequeue();
}
