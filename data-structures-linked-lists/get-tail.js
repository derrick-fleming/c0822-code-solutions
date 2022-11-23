/* exported getTail */

function getTail(list) {
  let listCopy = list;
  while (listCopy) {
    if (!listCopy.next) {
      return listCopy.data;
    }
    listCopy = listCopy.next;
  }
  return list.data;
}
