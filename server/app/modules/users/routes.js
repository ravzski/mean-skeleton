var express = require('express')
var router = express.Router()
var ctrl = require('./users.controller')

router.get('/api/users', ctrl.index);

module.exports = router