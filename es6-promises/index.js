const takeAChance = require('./take-a-chance');

const promiseReturn = takeAChance('Derrick');
promiseReturn.then(value => {
  console.log(value);
});
promiseReturn.catch(error => {
  console.log(error.message);
});
