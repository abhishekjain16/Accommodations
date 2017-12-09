var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var db  = require('../models.server');

var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.deleteUser = deleteUser;
UserModel.updateUser = updateUser;
UserModel.findByRoleAndRestaurantId = findByRoleAndRestaurantId;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByRole = findUserByRole;

module.exports = UserModel;


function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function findUserById(id) {
  return UserModel.findOne({_id: id});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function createUser(user) {
  console.log('model create user');
  return UserModel.create(user);
}

function findAllUsers() {
  return UserModel.find();
}

function deleteUser(id) {
  return UserModel.remove({_id: id});
}

function updateUser(id, user) {
  return UserModel.update({_id: id}, user);
}

function findByRoleAndRestaurantId(role, restaurantId) {
  return UserModel.find({role: role, restaurantId: restaurantId});
}

function findUserByRole(role) {
  return UserModel.find({role: role});
}
