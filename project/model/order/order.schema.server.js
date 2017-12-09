var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
  total: {type: Number, default: 0.0},
  restaurantId: String,
  deliveryId: {type: mongoose.Schema.Types.ObjectId, ref:'AddressModel'},
  items: [{type: mongoose.Schema.Types.ObjectId, ref:'OrderItemModel'}],
  deliveryCharge: {type: Number, default: 0.0},
  tax: {type: Number, default: 0.0},
  customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  driverId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  chefId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  state: {type: String, enum:['cart','paid','ready','delivered','cancelled'], default: 'cart'},
  subTotal: {type: Number, default: 0.0},
  dateCreated: {type: Date,default: Date.now()}
  minOrderLimit: {type: Number, default: 0.0},
}, { collection: 'order' });

module.exports = OrderSchema;
