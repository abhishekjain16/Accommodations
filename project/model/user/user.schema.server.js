var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  role: {type: String, default: 'Customer', enum: ['Customer', 'Admin', 'Chef', 'Driver', 'Manager']},
  restaurantId: String,
  active: {type: Boolean, default: false},
  dateCreated: {type: Date,default: Date.now()}
  }, { collection: 'user' });

module.exports = UserSchema;
