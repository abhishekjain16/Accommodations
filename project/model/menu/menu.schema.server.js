var mongoose = require('mongoose');

var MenuSchema = mongoose.Schema({
  restaurantId: String,
  deliveryCharge: Number,
  orderLimit: Number,
  menuItems: [{type: mongoose.Schema.Types.ObjectId, ref: "MenuItemModel"}],
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'menu' });

module.exports = MenuSchema;
