class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    Deposite(amount) {
        if(isNaN(amount)) {
            console.log('Invalid Deposite Amount.');
            return;
        }
        this.#balance += amount;
    }

    Withdraw(amount) {
        this.#balance -= amount;
    }

    ViewBalance() {
        return this.#balance;
    }
}

let bankAccount = new BankAccount(25000);

console.log(bankAccount);
bankAccount.Deposite(40000);
console.log(bankAccount);
bankAccount.Withdraw(5000);
console.log(bankAccount);
bankAccount.ViewBalance();

