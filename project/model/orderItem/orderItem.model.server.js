var mongoose = require('mongoose');
var OrderItemSchema = require('./orderItem.schema.server');
var db  = require('../models.server');

var OrderItemModel = mongoose.model('OrderItemModel', OrderItemSchema);

OrderItemModel.findById = findById;
OrderItemModel.findAllByOrder = findAllByOrder;
OrderItemModel.createOrderItem = createOrderItem;
OrderItemModel.deleteOrderItem = deleteOrderItem;
OrderItemModel.updateOrderItem = updateOrderItem;

module.exports = OrderItemModel;


function findAllByOrder(orderId) {
  return OrderItemModel.find({orderId: orderId});
}

function findById(id) {
  return OrderItemModel.findOne({_id: id});
}

function createOrderItem(orderItem) {
  return OrderItemModel.create(orderItem);
}

function deleteOrderItem(itemId) {
  return OrderItemModel.remove({_id: itemId});
}


function updateOrderItem(id, orderItem) {
  return OrderItemModel.update({_id: id}, orderItem);
}
