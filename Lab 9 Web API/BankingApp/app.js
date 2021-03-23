import express from 'express'
//require
const app = express()
const port = 3000


//return static and dynamic
//add this middleware that tells the server where the static data is located

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port} successfully `)
})