module.exports = function (app) {
  // facebookConfig = {
  //   clientID     : '382552615534382',
  //   clientSecret : '0353493dfdbfdc9912a64837b593bc82',
  //   callbackURL  : 'http://localhost:3000/auth/facebook/callback'
  // };

  var UserModel = require('../model/user/user.model.server');
  var passport = require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  var bcrypt = require("bcrypt-nodejs");
  var FacebookStrategy = require('passport-facebook').Strategy;
  // passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/restaurant/:restaurantId/manager', findManagerByRestaurantId);
  app.get('/api/restaurant/:restaurantId/chef', findChefByRestaurantId);
  app.get('/api/restaurant/:restaurantId/driver', findDriverByRestaurantId);
  app.get('/api/restaurant/:restaurantId/chef/active', findActiveChefByRestaurantId);
  app.get('/api/restaurant/:restaurantId/driver/active', findActiveDriverByRestaurantId);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedin', loggedin);


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
  function findActiveDriverByRestaurantId(req, res) {
    var restaurantId = req.params['restaurantId'];
    UserModel.findByActiveRoleAndRestaurantId("Driver", restaurantId)
      .then(function (user) {
        res.json(user);
      })
  }
  function findActiveChefByRestaurantId(req, res) {
    var restaurantId = req.params['restaurantId'];
    UserModel.findByActiveRoleAndRestaurantId("Chef", restaurantId)
      .then(function (user) {
        res.json(user);
      })
  }

  function createUser(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
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

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    UserModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }
}
