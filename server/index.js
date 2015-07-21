var config = require('./config/index.js')
var log = require('./log')
var app = require('./app')

app.listen(cfg.port)
log.info('app listening on port', config.port)
