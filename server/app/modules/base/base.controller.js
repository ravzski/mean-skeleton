exports.authenticateRequest = function (req, res, next) {
  if(true) {
    next();
  } else {
    next(new Error("Permission denied."));
  }
  
}
