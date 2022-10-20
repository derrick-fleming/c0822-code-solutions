function reduce(array, reducer, initialValue) {
  let output;
  for (let i = 0; i < array.length; i++) {
    if (initialValue === undefined) {
      initialValue = array[0];
      output = initialValue;
      i = 1;
    } else if (i === 0) {
      output = initialValue;
    }
    output = reducer(output, array[i]);
  }
  return output;
}

function sumFunction(output, value) {
  return output + value;
}

function productFunction(previousValue, currentValue) {
  return previousValue * currentValue;
}

function balanceFunction(previousValue, currentValue) {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  } else {
    return previousValue - currentValue.amount;
  }
}

function compositeFunction(previousValue, currentValue) {
  return Object.assign(previousValue, currentValue);
}
