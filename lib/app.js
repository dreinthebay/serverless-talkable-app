const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const helmet = require('helmet')
app.use(helmet())

require('./db')
const routes = require('./routes')
app.use('/api', routes)

console.log("Hello Log");

app.get('/', function(req, res) {
	res.send('Hello Dman')
});

module.exports = app
