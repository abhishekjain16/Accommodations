module.exports = function (app) {
  require('./services/yelp.service.server')(app);
  require('./services/user.service.server')(app);
  require('./services/menu.service.server')(app);
  require('./services/menuItem.service.server')(app);
  require('./services/order.service.server')(app);
  require('./services/orderItem.service.server')(app);
};
