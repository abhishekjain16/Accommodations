module.exports = function (app) {
  require('./services/yelp.service.server')(app);
  require('./services/user.service.server')(app);
}
