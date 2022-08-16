if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const cors = require('cors')
const express = require('express')
const router = require('./routes')
const app = express()
const port = 4000


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('listen to port ' + port))