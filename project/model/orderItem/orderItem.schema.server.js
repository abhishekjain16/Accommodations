var mongoose = require('mongoose');

var OrderItemSchema = mongoose.Schema({
  orderId: {type: mongoose.Schema.Types.ObjectId, ref:'OrderModel'},
  price: Number,
  quantity: Number,
  instructions: String,
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'order_item' });

module.exports = OrderItemSchema;
