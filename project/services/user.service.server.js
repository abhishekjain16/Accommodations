module.exports = function (app) {

  var UserModel = require('../model/user/user.model.server');

  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/restaurant/:restaurantId/manager', findManagerByRestaurantId);
  app.get('/api/restaurant/:restaurantId/chef', findChefByRestaurantId);
  app.get('/api/restaurant/:restaurantId/driver', findDriverByRestaurantId);


  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    var role = req.query['role'];
    if (username && password) {
      UserModel.findUserByCredentials(username, password)
        .then(function (user) {
          if (user) {
            res.json(user);
          } else {
            res.status(400).send({message: "User not found"});
          }
          res.json(user);
        })
    } else if (username) {
      UserModel.findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        })
    } else if(role) {
      UserModel.findUserByRole(role)
        .then(
          function(users) {
            res.json(users);
          },
          function(err) {
            res.status(400).send(err);
          }
        );
    } else {
      UserModel.findAllUsers()
        .then(
          function(users) {
            res.json(users);
          },
          function(err) {
            res.status(400).send(err);
          }
        );
    }
  }

  function findManagerByRestaurantId(req, res) {
    var restaurantId = req.params['restaurantId'];
    UserModel.findByRoleAndRestaurantId("Manager", restaurantId)
      .then(function (users) {
        res.json(users[0]);
      })
  }
  function findDriverByRestaurantId(req, res) {
    var restaurantId = req.params['restaurantId'];
    UserModel.findByRoleAndRestaurantId("Driver", restaurantId)
      .then(function (user) {
        res.json(user);
      })
  }
  function findChefByRestaurantId(req, res) {
    var restaurantId = req.params['restaurantId'];
    UserModel.findByRoleAndRestaurantId("Chef", restaurantId)
      .then(function (user) {
        res.json(user);
      })
  }

  function createUser(req, res) {
    var user = req.body;
    UserModel.createUser(user)
      .then(function (user) {
        res.json(user);
      },
      function (err) {
        console.log(err);
        res.status(400).send(err);
      })
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    UserModel.deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    UserModel.updateUser(userId, user)
      .then(function (user) {
        return UserModel.findUserById(userId);
      })
      .then(function (user){
        res.json(user);
        return;
      },function (err) {
        res.sendStatus(404).send(err);
        return;
      });
  }


  function findUser(req, res) {
    var userId = req.params['userId'];
    UserModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      })
  }
}
