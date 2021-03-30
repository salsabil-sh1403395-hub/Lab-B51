import fs from "fs-extra";
import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json', import.meta.url)
const filePath = fileURLToPath(url)

class AccountRepo{
    //current
    async getAccounts(type){
        let accounts = await fs.readJson(filePath)
        if (type && type !='All') {
            return accounts.filter(acc => acc.acctType == type)
        }else{
            return accounts
        }
    }
    async addAccount(account){
        let accounts = await fs.readJson(filePath)
        accounts.push(account)
        return fs.writeJson(filePath, accounts)
    }
}

export default new AccountRepo();