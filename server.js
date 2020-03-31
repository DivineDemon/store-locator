const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const express = require('express')
const path = require('path')
const cors = require('cors')
const stores = require('./routes/stores')
const connectDB = require('./config/db')

connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.PORT || 5000

app.use('/api/v1/stores', stores)
app.listen(port, () => console.log(`Server Listening on Port: ${port}`))