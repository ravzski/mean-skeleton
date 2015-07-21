var User = require('../../services/user')

exports.index = function (req, res) {
  res.json(req.user);
}

exports.show = function (req, res) {
  res.json(req.user);
}


exports.create = function (req, res) {
  res.json(req.user);
}

exports.update = function (req, res) {
  res.json(req.user);
}


exports.delete = function (req, res) {
  res.json(req.user);
}


