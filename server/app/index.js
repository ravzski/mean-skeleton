var express = require('express')
var cfg = require('../config')
var bodyParser = require('body-parser')
var app = express()

app.locals.cfg = cfg

// middleware
// app.use(express.static(cfg.pubDir))

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// routes
app.use(require('./modules/users/routes.js'))
app.use(require('./modules/sessions/routes.js'))

// custom error interceptor
app.use(require('./interceptors/notFound'))
app.use(require('./interceptors/handleError'))
module.exports = app
