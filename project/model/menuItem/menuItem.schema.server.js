var mongoose = require('mongoose');

var MenuItemSchema = mongoose.Schema({
  restaurantId: String,
  menuId: {type: mongoose.Schema.Types.ObjectId, ref:'MenuModel'},
  name: String,
  price: Number,
  description: String,
  category: String,
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'menuItem' });

module.exports = MenuItemSchema;
