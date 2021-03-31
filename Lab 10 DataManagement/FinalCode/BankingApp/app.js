import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

//port number
const port = 5000
const app = express()

//connect to the database


const options = {useNewUrlParser: true, useUnifiedTopology: true}
// const URI = `mongodb+srv://dbUser:dbUserPassword@cluster0.tptzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const URI = "mongodb://127.0.0.1:27017/banking-app"
//step1
mongoose.connect(
    URI,
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('successfully connected')
    }
)

// nodemon
// node app.js

//a middleware
app.use(express.json())

//two types [dynamic , static]
app.use(express.static('public'))

app.use(morgan('dev'))
app.use('/api', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
