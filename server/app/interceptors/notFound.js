var log = require('../../log')

module.exports = function (req, res, next) {
  log.notice('page not found', req.url);
  res.json({status: 404});
}