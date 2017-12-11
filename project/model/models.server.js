var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/foodspot'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds115396.mlab.com:15396/heroku_b44tlcvx'; // use yours
}


var db = mongoose.connect(connectionString, {
  useMongoClient: true
});

module.exports = db;
