const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  const addResult = add(num1, num2);
  console.log('Result:', addResult);
}

if (process.argv[3] === 'minus') {
  const subtractResult = subtract(num1, num2);
  console.log('Result:', subtractResult);
}

if (process.argv[3] === 'over') {
  const divideResult = divide(num1, num2);
  console.log('Result:', divideResult);
}

if (process.argv[3] === 'times') {
  const multiplyResult = multiply(num1, num2);
  console.log('Reuslt:', multiplyResult);
}
