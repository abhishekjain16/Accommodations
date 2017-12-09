var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
  total: Number,
  restaurantId: String,
  deliveryId: {type: mongoose.Schema.Types.ObjectId, ref:'AddressModel'},
  items: [{type: mongoose.Schema.Types.ObjectId, ref:'OrderItemModel'}],
  deliveryCharge: Number,
  customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  driverId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  chefId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  state: {type: String, enum:['cart','paid','ready','delivered','cancelled'], default: 'cart'},
  subTotal: Number,
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'order' });

module.exports = OrderSchema;
