/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let newList = list;
  const newValue = new LinkedList(value);
  while (newList.next) {
    if (newList.next.next === null) {
      newList.next.next = newValue;
      return;
    }
    newList = newList.next;
  }
  return newList;
}
