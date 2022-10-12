const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

if (process.argv[3].includes('plus')) {
  const addResult = add(num1, num2);
  console.log('Result:', addResult);
}

if (process.argv[3].includes('minus')) {
  const subtractResult = subtract(num1, num2);
  console.log('Result:', subtractResult);
}

if (process.argv[3].includes('over')) {
  const divideResult = divide(num1, num2);
  console.log('Result:', divideResult);
}

if (process.argv[3].includes('times')) {
  const multiplyResult = multiply(num1, num2);
  console.log('Reuslt:', multiplyResult);
}
