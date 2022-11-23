/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newValue = new LinkedList(value);
  newValue.next = list;
  return newValue;
}
