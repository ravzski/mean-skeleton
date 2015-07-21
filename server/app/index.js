var config = require('../config')
var bodyParser = require('body-parser')
var helmet = require('helmet');

var app = express();

app.set('port', config.port);

// db connection
mongoose.connect(config.mongodb.url);
var db = mongoose.connection;

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// routes
app.use(require('./modules/base/routes.js'));
app.use(require('./modules/users/routes.js'));
app.use(require('./modules/sessions/routes.js'));

// custom error interceptor
app.use(require('./modules/interceptors/404.js'));
app.use(require('./modules/interceptors/500.js'));

// Security Settings
app.disable('x-powered-by');          // Don't advertise our server type
app.use(helmet.ienoopen());           // X-Download-Options for IE8+
app.use(helmet.nosniff());            // Sets X-Content-Type-Options to nosniff
app.use(helmet.xssFilter());          // sets the X-XSS-Protection header
app.use(helmet.frameguard('deny'));   // Prevent iframe clickjacking

module.exports = app;
