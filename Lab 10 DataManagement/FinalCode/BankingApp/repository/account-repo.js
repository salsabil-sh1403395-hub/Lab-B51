
class AccountRepo {
    async getAccounts(type) {

    }

    async addAccount(account) {

    }

    async updateAccount(updatedAccount) {

    }

    async getAccount(accNo) {
        return Account.findOne({_id: accNo})
    }

    async deleteAccount(accNo) {
        return Account.findByIdAndDelete(accNo)
    }

    async addTransaction(transaction) {

    }

    async getTransaction(accNo) {

    }
}

export default new AccountRepo()