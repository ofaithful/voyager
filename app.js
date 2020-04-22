const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const dbUrl = require('./config/db').url
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', function(err) {
  console.log(err)
})

db.once('open', function() {
  console.log('Connected to MongoDB Atlas')
})

// Route files
const users = require('./app/routes/users')
app.use('/users', users)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

