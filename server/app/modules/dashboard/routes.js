var express = require('express')
var router = express.Router()
var ctrl = require('./controllers')
var rav = require('./controllers/post')

router.get('/api/dashboard', ctrl.index);
router.post('/api/dashboard', rav.post);

module.exports = router