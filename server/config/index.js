'use strict';

var dotenv = require('dotenv');  
dotenv.load();


var config = {};

// port
config.port = process.env.PORT || 3000;


// database
config.mongodb        = {};
config.mongodb.url    = process.env.MONGODB_URL || 'localhost';

module.exports = config;