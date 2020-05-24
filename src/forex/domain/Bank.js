import { Account } from "./Account";

class Bank {
   constructor() {
      this.accounts = {};
   }
   createAccount = (user, primaryCurrency, secondaryCurrencies) => {
      if (user.username in this.accounts) {
         throw new Error("Account already exists for user " + user.name);
      }
      this.accounts[user.username] = new Account(user, primaryCurrency, secondaryCurrencies);
   }
}
export { Bank };