import express from 'express'
import morgan from 'morgan'
import fs from 'fs-extra'

import {fileURLToPath} from 'url'
const url = new URL('./data/accounts.json' , import.meta.url)
const filePath = fileURLToPath(url)

const app = express()
const port = 3000

app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/api/accounts' , async (req, res)=>{
    let accounts = await fs.readJson(filePath)
    const type = req.query.type
    if(type){
        accounts = accounts.filter(acc=>acc.acctType == type)
    }
    res.json(accounts)
})

app.listen(port, (req,res) => {
    console.log(`Server started @http://localhost:${port} successfully`)
})