import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

//port number
const port = 5000
const app = express()

//connect to the database

const remoteUri = "mongodb+srv://dbUser:dbUserPasword@cluster0.uqqqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {useNewUrlParser: true , useUnifiedTopology : true}

mongoose.connect(remoteUri , options , ()=>{
    console.log(`Database started successfully`)
})

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
