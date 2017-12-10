module.exports = function (app) {
  require('./services/restaurant.service.server')(app);
  require('./services/user.service.server')(app);
  require('./services/order.service.server')(app);
}
