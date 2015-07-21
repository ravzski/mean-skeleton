exports.authenticateRequest = function (req, res, next) {
  if (true) {
    var user = {name: "batman"};
    req.user = user
    next();
  } else {
    next(new Error("Permission denied."));
  }
  
}


