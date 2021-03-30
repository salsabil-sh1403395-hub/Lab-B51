
import accountRepo from '../repository/account-repo.js'
class AccountService {
    async getAccounts(req, res) {
        try{
            res.json(await accountRepo.getAccounts(req.query.type))
        }catch (e) {
            res.status(500).send(e)
        }
    }

    async addAccount(req, res) {
        try{
            const account = req.body
            res.json(await accountRepo.addAccount(account))
        }catch (e) {
            res.status(500).send(e)
        }
    }

    async updateAccount(req, res) {
       try{
           const account = req.body
           let accounts = await fs.readJson(filePath)

           const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
           if (index >= 0) {
               accounts[index] = accoun
               await fs.writeJson(filePath, accounts)
               res.json(accounts[index])
           } else {
               res.status(200).send('Account does not exit')
           }
       }catch (e) {
           res.status(500).send(e)
       }
    }

    async getAccount(req, res) {
        const accountNo = req.params.acctNo
        let accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == accountNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const accountNo = req.params.acctNo
        let accounts = await fs.readJson(filePath)

        accounts = accounts.filter(acc => acc.accountNo != accountNo)
        await fs.writeJson(filePath, accounts)
        res.send(`Successfully deleted the account with acc-no ${accountNo}`)
    }
}

export default new AccountService()