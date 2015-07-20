var log = require('../../log')

module.exports = function (er, req, res, next) {
  log.error(er)
  res.locals.error = er;
  res.json({status: 500});
}