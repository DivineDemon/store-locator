const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const stores = require('./routes/stores')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000

app.use('/api/v1/stores', stores)
app.listen(port, () => console.log(`Server Listening on Port: ${port}`))