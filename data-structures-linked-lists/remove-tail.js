/* exported removeTail */

function removeTail(list) {
  while (list.next !== null) {
    if (list.next.next === null) {
      list.next = null;
      return;
    }
    list = list.next;
  }
}
