module.exports = function (app) {

  var MenuModel = require('../model/menu/menu.model.server');

  app.get('/api/restaurant/:restaurantId/menu', findMenuByRestroId);
  app.get('/api/menu/:menuId', findMenuById);
  app.put('/api/restaurant/menu/:menuId', UpdateMenuByMenuId);
  app.post('/api/restaurant/:restaurantId/menu', createMenu);
  app.delete('/api/menu/:menuId',deleteMenu);

  function findMenuByRestroId(req, res) {
    var restroId = req.params['restaurantId'];

    MenuModel.findMenuByRestroId(restroId)
      .then(
        function (menu) {
          res.json(menu);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }

  function findMenuById(req,res)
  {
    var menuId = req.params["menuId"];
    MenuModel.findMenuById(menuId)
      .then(function (menu) {
        res.json(menu);
      });
  }

  function UpdateMenuByMenuId(req, res) {
    var menuId = req.params['menuId'];
    const menu = req.body;
    MenuModel.UpdateMenuByMenuId(menuId, menu)
      .then(function (status) {
        res.json(status);
      });
  }
  function createMenu(req, res) {
    var menu = req.body;
    var restroId = req.params['restaurantId'];
    menu.restaurantId = restroId;
    menu.deliveryCharge = parseInt(menu.deliveryCharge);
    menu.orderLimit = parseInt(menu.orderLimit);
    MenuModel.createMenu(menu)
      .then(function (website) {
        res.json(website);
      });
  }

  function deleteMenu(req, res) {
    var menuId = req.params["menuId"];
    MenuModel.deleteMenu(menuId)
      .then(function (status) {
        res.json(status);
      });
  }
};
