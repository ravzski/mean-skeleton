'use strict';

/**
 * Module Dependencies
 */

var bcrypt    = require('bcrypt-nodejs');
var crypto    = require('crypto');
var mongoose  = require('mongoose');

/**
 * Define User Schema
 */

// The permitted SchemaTypes are:

// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array

// When your application starts up, Mongoose automatically calls
// ensureIndex for each defined index in your schema. While nice
// for development, it is recommended this behavior be disabled
// in production since index creation can cause a significant
// performance impact. Disable the behavior by setting the
// autoIndex option of your schema to false.

var userSchema = new mongoose.Schema({

  email: { type: String, unique: true, index: true },
  password: { type: String },
  type: { type: String, default: 'admin' },
  tokens: Array,
  // EVERYONE'S AN ADMINISTRATOR IN EXAMPLE
  // DEFAULT TYPE SHOULB BE 'user'!
  // type: { type: String, default: 'user' },


  profile: {
    name: { type: String, default: '' },
    phone: {
      work: { type: String, default: '' },
      home: { type: String, default: '' },
      mobile: { type: String, default: '' }
    }
  },

  activity: {
    date_established: { type: Date, default: Date.now },
    last_logon: { type: Date, default: Date.now },
    last_updated: { type: Date }
  },

  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },

  verified: { type: Boolean, default: true },
  verifyToken: { type: String },


});

/**
 * Hash the password
 */

userSchema.pre('save', function (next) {

  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) {
    return next();
  } else {
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  }

});

/**
 * Check the user's password
 */

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User', userSchema);