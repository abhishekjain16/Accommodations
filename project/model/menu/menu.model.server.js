var mongoose = require('mongoose');
var MenuSchema = require('./menu.schema.server');
var db  = require('../models.server');

var MenuModel = mongoose.model('MenuModel', MenuSchema);

MenuModel.findMenuByRestroId = findMenuByRestroId;
MenuModel.UpdateMenuByMenuId = UpdateMenuByMenuId;
MenuModel.createMenu = createMenu;
MenuModel.deleteMenu = deleteMenu;
MenuModel.findMenuById = findMenuById;

module.exports = MenuModel;

function findMenuByRestroId(id) {
  return MenuModel.findOne({restaurantId: id});
}

function UpdateMenuByMenuId(id,menu) {
  return MenuModel.update({_id: id}, menu);
}

function createMenu(menu) {
  return MenuModel.create(menu);
}

function deleteMenu(id) {
  return MenuModel.remove({_id: id});
}

function findMenuById(id){
  return MenuModel.findOne({_id: id});
}
