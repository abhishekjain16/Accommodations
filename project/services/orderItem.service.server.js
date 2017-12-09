module.exports = function(app) {

  var OrderItemModel = require('../model/orderItem/orderItem.model.server');

  app.get('/api/order/:orderId', findAllByOrder);
  app.get('/api/orderItem/:orderItemId',findById);
  app.post('/api/order/orderItem', createOrderitem);
  app.delete('/api/order/orderItem/:orderItemId',deleteOrderItem);
  app.put('/api/orderItem/:orderItemId', updateOrderItem);

  function findAllByOrder(req, res) {
    var orderId = req.params['orderId'];
    OrderItemModel.findAllByOrder(orderId)
      .then(function (items) {
        res.json(items);
      })
  }

  function findById(req, res){
    var orderItemId = req.params['orderItemId'];
    OrderItemModel.findById(orderItemId)
      .then(function (orderItem) {
        res.json(orderItem);
      })
  }

  function createOrderitem(req, res) {
    var orderItem = req.body;
    OrderItemModel.createOrderItem(orderItem)
      .then(function (orderItem) {
        res.json(orderItem);
      })
  }

  function deleteOrderItem(req, res) {
    var orderItemId = req.params['orderItemId'];
    OrderItemModel.deleteOrderItem(orderItemId)
      .then(function (status) {
        res.json(status);
      })
  }

  function updateOrderItem(req, res) {
    var orderItemId = req.params['orderItemId'];
    OrderItemModel.updateOrderItem(orderItemId)
      .then(function (status) {
        res.json(status);
      })
  }
}
