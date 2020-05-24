import { Account } from "./Account";

class Bank {
   constructor() {
      this.accounts = {};
   }
   createAccount = (user) => {
      if (user.username in this.accounts) {
         throw new Error("Account already exists for user " + user.name);
      }
      this.accounts[user.username] = new Account(user);
   }
}
export { Bank };