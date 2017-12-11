var mongoose = require('mongoose');
var MenuItemSchema = require('./menuItem.schema.server');
var db  = require('../models.server');

var MenuItemModel = mongoose.model('MenuItemModel', MenuItemSchema);

MenuItemModel.findMenuItemByItemId = findMenuItemByItemId;
MenuItemModel.findMenuItemsByMenuId = findMenuItemsByMenuId;
MenuItemModel.updateMenuItemById = updateMenuItemById;
MenuItemModel.addMenuItemForMenu = addMenuItemForMenu;
MenuItemModel.deleteMenuItem = deleteMenuItem;
MenuItemModel.deleteMenuItemsByMenuId = deleteMenuItemsByMenuId;

module.exports = MenuItemModel;

function findMenuItemByItemId(menuItemId) {
  return MenuItemModel.findOne({_id: menuItemId});
}

function findMenuItemsByMenuId(menuId){
  return MenuItemModel.find({menuId: menuId});
}

function updateMenuItemById(menuId, menu) {
  return MenuItemModel.update({_id: menuId}, menu);
}

function addMenuItemForMenu(menuId, menuItem) {
  return MenuItemModel.create(menuItem);
}

function deleteMenuItem(menuItemId) {
  return MenuItemModel.remove({_id: menuItemId});
}

function deleteMenuItemsByMenuId(menuId) {
  // return MenuItemModel.remove({menuId: menuId});
}

