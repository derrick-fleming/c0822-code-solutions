/* exported defaults */

/* 1. Get the target keys.
2. Convert the target keys into a string.
3. Check if the source argument includes any of the string target values.
3. If it does not, then add that source to the target.
4. Don't return anything (but check in console log) */

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (var key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
}
