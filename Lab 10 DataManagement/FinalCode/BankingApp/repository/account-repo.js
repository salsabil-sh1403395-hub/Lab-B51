import Account from '../model/account.js'
import Transaction from '../model/transaction.js'

class AccountRepo {
    async addAccount(account) {
        return Account.create(account)
    }
    async getAccounts(type) {
        const accounts = await fs.readJson(filePath)
        if (type && type != 'All')
            return Account.find({acctType: type})
        else
            return Account.find()
    }

    async updateAccount(updatedAccount) {
        return Account.findByIdAndUpdate(updatedAccount._id, updatedAccount)
    }

    async getAccount(accNo) {
        return Account.findOne({_id: accNo})
    }

    async deleteAccount(accountNo) {
        return Account.findByIdAndDelete(accountNo)
    }

    async addTransaction(transaction) {
        const account = await this.getAccount(transaction.accNo)
        if (transaction.transType == 'Withdraw')
            account.balance -= transaction.amount
        else
            account.balance += transaction.amount

        await account.save()
        return Transaction.create(transaction)
    }

    async getTransactionByAccount(accNo) {
        return Transaction.findOne({accNo})
    }

    async getTransactions() {
        return Transaction.find()
    }
}

export default new AccountRepo()