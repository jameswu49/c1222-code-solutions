/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var account = new Transaction('deposit');
  if (amount < 0) {
    account.deposit = false;
    return account.deposit;
  }
};

Account.prototype.withdraw = function () {

};

Account.prototype.getBalance = function () {

};

Account.prototype.number = function () {
  var number = this.number;
  return number;
};

Account.prototype.holder = function () {
  var holder = this.holder;
  return holder;
};

// var money = new Account('deposit', 42);
// console.log(money);
// console.log(money.holder);
