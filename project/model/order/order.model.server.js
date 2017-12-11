var mongoose = require('mongoose');
var OrderSchema = require('./order.schema.server');
var db  = require('../models.server');

var OrderModel = mongoose.model('OrderModel', OrderSchema);

OrderModel.findById = findById;
OrderModel.findAllOrdersByRestaurant = findAllOrdersByRestaurant;
OrderModel.createOrder = createOrder;
OrderModel.findAllCustomerOrders = findAllCustomerOrders;
OrderModel.updateOrder = updateOrder;
OrderModel.findAllDriverOrders = findAllDriverOrders;
OrderModel.findAllChefOrders = findAllChefOrders;
OrderModel.findAllOrders = findAllOrders;
OrderModel.cancelOrder = cancelOrder;
OrderModel.findByCustomerAndRestaurantId = findByCustomerAndRestaurantId;

module.exports = OrderModel;


function findAllOrdersByRestaurant(restaurantId, state) {
  if (state) {
    return OrderModel.find({restaurantId: restaurantId, state: state});
  } else {
    return OrderModel.find({restaurantId: restaurantId});
  }
}

function findById(id) {
  return OrderModel.findOne({_id: id});
}

function createOrder(order) {
  return OrderModel.create(order);
}

function findAllOrders() {
  return OrderModel.find();
}

function cancelOrder(id) {
  return OrderModel.update({_id: id}, {state: 'cancelled'});
}

function updateOrder(id, order) {
  return OrderModel.update({_id: id}, order);
}

function findAllDriverOrders(driverId, state) {
  if (state) {
    return OrderModel.find({driverId: driverId, state: state});
  } else {
    return OrderModel.find({driverId: driverId});
  }
}

function findAllCustomerOrders(customerId, state) {
  if (state) {
    return OrderModel.find({customerId: customerId, state: state});
  } else {
    return OrderModel.find({customerId: customerId});
  }
}

function findAllChefOrders(chefId, state) {
  if (state) {
    return OrderModel.find({chefId: chefId, state: state});
  } else {
    return OrderModel.find({chefId: chefId});
  }
}

function findByCustomerAndRestaurantId(cid, restaurantId, state) {
  if (state) {
    return OrderModel.findOne({customerId: cid, restaurantId: restaurantId, state: state});
  } else {
    return OrderModel.findOne({customerId: cid, restaurantId: restaurantId});
  }

}
