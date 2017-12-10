var mongoose = require('mongoose');

var MenuItemSchema = mongoose.Schema({
  menuId: String,
  name: String,
  price: Number,
  description: String,
  category: String,
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'menuItem' });

module.exports = MenuItemSchema;
