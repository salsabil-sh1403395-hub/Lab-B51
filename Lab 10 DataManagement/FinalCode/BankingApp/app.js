import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

//port number
const port = 5000
const app = express()

//connect to the database
// const localUri = `mongodb://127.0.0.1:27017/banking-app`
// const remoteUri = `mongodb+srv://dbUser:dbUserPassWord@cluster0.uqqqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const remoteUri = `mongodb+srv://dbUser:dbUserPassword@cluster0.tptzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// "mongodb+srv://dbUser:dbUserPasword@cluster0.uqqqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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

//single purpose
//separation of concerns [design pattern]

//repository : the only class allowed to talk to our data
//service : the only class that can communicate with the repo
//router : responsible for handling all the routing
//app for server configurations

// localbase //indexDB