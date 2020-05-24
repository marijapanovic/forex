import { CurrencyAccount } from "./CurrencyAccount";

class UserAccount {
    constructor(user, primaryCurrency, secondaryCurrencies) {
        this.user = user;
        this.primaryCurrency = primaryCurrency;
        this.secondaryCurrencies = secondaryCurrencies;
        this.currencyAccounts = {};
        this.createCurrencyAccount(primaryCurrency);
        for (let i=0; i < secondaryCurrencies.length; i++) {
            let secondaryCurrency = secondaryCurrencies[i];
            this.createCurrencyAccount(secondaryCurrency);
        }
    }

    createCurrencyAccount(currency) {
        if (currency in this.currencyAccounts) {
            throw new Error("User " + this.user.username
                + " already has account in currency " + currency);
        }
        this.currencyAccounts[currency] = new CurrencyAccount(currency);
    }
}
export { UserAccount };