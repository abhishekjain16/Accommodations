module.exports = function (app) {

  var OrderModel = require('../model/order/order.model.server');

  app.get('/api/user/:userId/order', findUserOrders);
  app.get('/api/restaurant/:restaurantId/order', findRestaurantOrders);
  app.get('/api/chef/:chefId/order', findChefOrders);
  app.get('/api/order/:orderId', findOrderById);
  app.get('/api/driver/:driverId/order', findDriverOrders);
  app.post('/api/restaurant/:restaurantId/order', createOrder);
  app.put('/api/order/:orderId/cancel', cancelOrder);
  app.put('/api/order/:orderId', updateOrder);
  app.get('/api/user/:userId/order', findUserOrders);
  app.get('/api/restaurant/:restaurantId/customer/:cid/order', findOrderByRestaurantAndCustomer)

  function findUserOrders(req, res) {
    var state = req.query['state'];
    var userId = req.params['userId'];

    OrderModel.findAllCustomerOrders(userId, state)
      .then(
        function(orders) {
          res.json(orders);
        },
        function(err) {
          res.status(400).send(err);
        }
      );
  }

  function findOrderById(req, res) {
    var orderId = req.params['orderId'];
    OrderModel.findById(orderId)
      .then(
        function(order) {
          res.json(order);
        },
        function(err) {
          res.status(400).send(err);
        }
      );
  }

  function findRestaurantOrders(req, res) {
    var state = req.query['state'];
    var restaurantId = req.params['restaurantId'];

    OrderModel.findAllOrdersByRestaurant(restaurantId, state)
      .then(
        function(orders) {
          res.json(orders);
        },
        function(err) {
          res.status(400).send(err);
        }
      );
  }

  function findChefOrders(req, res) {
    var state = req.query['state'];
    var chefId = req.params['chefId'];

    OrderModel.findAllChefOrders(chefId, state)
      .then(
        function(orders) {
          return res.json(orders);
        },
        function(err) {
          return res.status(400).send(err);
        }
      );
  }

  function findDriverOrders(req, res) {
    var state = req.query['state'];
    var driverId = req.params['driverId'];

    OrderModel.findAllDriverOrders(driverId, state)
      .then(
        function(orders) {
          res.json(orders);
        },
        function(err) {
          res.status(400).send(err);
        }
      );
  }

  function createOrder(req, res) {
    var order = req.body;
    OrderModel.createOrder(order)
      .then(function (order) {
        res.json(order);
      })
  }

  function cancelOrder(req, res) {
    var orderId = req.params['orderId'];
    OrderModel.cancelOrder(orderIdId)
      .then(function (order) {
        res.json(order);
      });
  }

  function updateOrder(req, res) {
    var orderId = req.params['orderId'];
    var order = req.body;
    OrderModel.updateOrder(orderId, order)
      .then(function (status) {
        return OrderModel.findById(orderId);
      })
      .then(function (order){
        res.json(order);
        return;
      },function (err) {
        res.sendStatus(404).send(err);
        return;
      });
  }

  function findOrderByRestaurantAndCustomer(req, res) {
    var cid = req.params['cid'];
    var restaurantId = req.params['restaurantId'];
    var state = req.query['state'];
    OrderModel.findByCustomerAndRestaurantId(cid, restaurantId, state)
      .then(function (order) {
        res.json(order);
      });
  }
}
