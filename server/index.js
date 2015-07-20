/* main module entry point */
var cfg = require('./config')
var log = require('./log')
var app = require('./app')

app.listen(cfg.port)
log.info('app listening on port', cfg.port)
