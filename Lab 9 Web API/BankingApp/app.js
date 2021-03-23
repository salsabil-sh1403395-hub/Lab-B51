import express from 'express'
//require
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port} successfully `)
})