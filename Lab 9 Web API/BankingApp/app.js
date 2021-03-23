import express from 'express'
import morgan from 'morgan'
import router from './routes.js'

const app = express()
const port = 3000

app.use(express.static('public'))

app.use(morgan('dev'))

app.use(express.json())
app.use('/api', router)

app.listen(port, (req,res) => {
    console.log(`Server started @http://localhost:${port} successfully`)
})