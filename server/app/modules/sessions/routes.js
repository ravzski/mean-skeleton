var express = require('express')
var router = express.Router()
var ctrl = require('./sessions.controller')

router.get('/api/sessions/:key', ctrl.show);
router.post('/api/sessions', ctrl.create);
router.delete('/api/sessions', ctrl.delete);

module.exports = router