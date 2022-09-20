/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (Number.isInteger(amount)) {
    if (amount > 0) {
      this.transactions.push(deposit);
      return true;
    }
  } return false;
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount)) {
    if (amount > 0) {
      this.transactions.push(withdraw);
      return true;
    }
  } return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (this.transactions.length < 0) {
    return balance;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
