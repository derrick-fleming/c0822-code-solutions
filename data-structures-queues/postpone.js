/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const top = queue.dequeue();
  queue.enqueue(top);
  return queue;
}
