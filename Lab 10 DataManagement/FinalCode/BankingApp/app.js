import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

//port number
const port = 5000
const app = express()

//connect to the database


const options = {useNewUrlParser: true , useUnifiedTopology : true}

const uri ="mongodb+srv://dbUser:<password>@cluster0.uqqqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri , options , ()=>{
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
