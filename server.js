const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({ path: './config/config.env' })
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000

app.get('/api/v1/stores', (req, res) => {
    res.status(200).json({ status: true, data: '' })
})
app.listen(port, () => console.log(`Server Listening on Port: ${port}`))