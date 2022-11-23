/* exported getLength */

function getLength(list) {
  let length = 1;
  let otherList = list;
  while (otherList.next) {
    length++;
    otherList = otherList.next;
  }
  return length;
}
