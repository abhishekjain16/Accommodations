var mongoose = require('mongoose');

var OrderItemSchema = mongoose.Schema({
  orderId: String,
  name: String,
  price: Number,
  quantity: Number,
  instructions: String,
  dateCreated: {type: Date,default: Date.now()}
}, { collection: 'orderItem' });

module.exports = OrderItemSchema;
