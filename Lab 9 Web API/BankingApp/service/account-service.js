import fs from "fs-extra";
import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json', import.meta.url)
const filePath = fileURLToPath(url)

class AccountService {
    async getAccounts(req, res) {
        let accounts = await fs.readJson(filePath)
        const type = req.query.type
        if (type) {
            accounts = accounts.filter(acc => acc.acctType == type)
        }
        res.json(accounts)
    }

    async addAccount(req, res) {
        const account = req.body
        let accounts = await fs.readJson(filePath)

        accounts.push(account)
        await fs.writeJson(filePath, accounts)

        res.json(req.body)
    }

    async updateAccount(req, res) {
        const account = req.body
        let accounts = await fs.readJson(filePath)

        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index >= 0) {
            accounts[index] = accoun
            await fs.writeJson(filePath, accounts)
            res.json(accounts[index])
        } else {
            res.send('Account does not exit')
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

export default AccountService