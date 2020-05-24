import { UserAccount } from "./UserAccount";

class Bank {
   constructor() {
      this.userAccounts = {};
   }
   createUserAccount = (user, primaryCurrency, secondaryCurrencies) => {
      if (user.username in this.userAccounts) {
         throw new Error("Account already exists for user " + user.name);
      }
      this.userAccounts[user.username] = new UserAccount(user, primaryCurrency, secondaryCurrencies);
   }
}
export { Bank };