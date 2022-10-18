const takeAChance = require('./take-a-chance');

const promiseReturn = takeAChance('Derrick');
promiseReturn.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
