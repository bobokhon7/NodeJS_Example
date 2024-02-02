const moment = require("moment");

class Account {
  #amount;
  #account_id;

  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  tellMeBalance() {
    console.log(`your balance: ${this.#amount}`);
    return this.#amount;
  }

  withdrawMoeny(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(
        `your balance witdrar ${amount} and total now ${this.#amount}`
      );
    } else {
      console.log("not enough balance");
    }
  }

  depositMoney(amount) {
    this.#amount += amount;
    console.log(`your balance added ${amount} and total now ${this.#amount}`);
  }

  static tellMeTime() {
    console.log(`time ${moment().format("YYYY MM DD HH:mm")}`);
  }
}

module.exports = Account;
