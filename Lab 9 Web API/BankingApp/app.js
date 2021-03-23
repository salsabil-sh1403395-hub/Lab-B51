import express from 'express'
import morgan from 'morgan'
//require
const app = express()
const port = 3000

//Buying car [base model]

//return static and dynamic
//add this middleware that tells the server where the static data is located


app.use(express.static('public'))

app.use(morgan('dev'))
//dynamic [web APIs]

// CRUD
//Reading
app.get('/api/accounts' , (req, res)=>{
    res.send('This is the get method for /api/accounts')
})
//adding , creating
app.post('/api/accounts' , (req, res)=>{
    res.send('This is the post method for /api/accounts')
})
//updating
app.put('/api/accounts' , (req, res)=>{
    res.send('This is the put method for /api/accounts')
})
//deleting or removing
app.delete('/api/accounts' , (req, res)=>{
    res.send('This is the delete method for /api/accounts')
})

app.listen(port, (req,res) => {
    console.log(`Server started @http://localhost:${port} successfully`)
})