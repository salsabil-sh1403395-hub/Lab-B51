import express from 'express'

import accountService from "./service/account-service.js";
const router = express.Router()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

export default router
