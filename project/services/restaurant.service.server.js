module.exports = function(app) {

  const yelp = require("../../node_modules/node-yelp-fusion");
  const client_id = "Hrp6WD1-7ACxUCv1g3Q_tw";
  const client_secret = "55m3D5qNNCdBXSHt7bmwLcIHoIvOlUtRZkt2absyaQ0cqM650nQ9oNOBEYknqNb0";

  app.get("/api/yelp/accesstoken", searchRestaurantByName);
  app.get("/api/yelp/:yelpId", searchRestaurantByYelpId);

  function searchRestaurantByName(req, res) {
    var name = req.query.title;
    var location = req.query.location;
    var config = {id: client_id, secret: client_secret};
    var type = 'businesses/search?';
    var params1 = 'term=' + name + '&location=' + location + '&categories=restaurants';
    y = new yelp(config);
    const token = y
      .search(params1)
      .then(function(result){
        res.json(result);
      })
      .catch(function(result){
        console.log("Error")
      });
  }

  function searchRestaurantByYelpId(req, res) {
    var id = req.params.yelpId;
    var config = {id: client_id, secret: client_secret};
    y = new yelp(config);
    const token = y
      .business(id)
      .then(function(result){
        res.json(result);
      })
      .catch(function(result){
        console.log("Error")
      });
  }
};

