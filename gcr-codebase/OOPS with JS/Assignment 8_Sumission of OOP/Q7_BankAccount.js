class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than 0");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than 0");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);

try {
  account.deposit(500);
  console.log("After deposit:", account.getBalance());
  account.deposit(250);
  console.log("After deposit:", account.getBalance());

  account.withdraw(300);
  console.log("After withdraw:", account.getBalance());

  account.withdraw(5000);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  account.deposit(-100);
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());