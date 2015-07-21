var express = require('express')
var router = express.Router()
var ctrl = require('./base.controller')

router.all('/api/*', ctrl.authenticateRequest);

module.exports = router

