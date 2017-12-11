import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {MenuService} from '../../../services/menu.service.client';
import {MenuItemService} from '../../../services/menuItem.service.client';
import {OrderItemService} from '../../../services/orderItem.service.client';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  restaurantId: string;
  order: {};
  orderId: string;
  state: string;
  total: Number;
  subTotal: Number;
  items = [];
  menu: {};
  menuItems = [];
  tax: Number;
  deliveryCharge: Number;
  minOrderLimit: Number;
  name: string;
  image: any;
  restaurant = {};


  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private restaurantService: RestaurantServiceClient,
              private menuService: MenuService,
              private menuItemService: MenuItemService,
              private orderItemService: OrderItemService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.orderId = params['orderId'];
        });

    this.loadOrders();

    this.restaurantService.SearchBusinessById(this.restaurantId)
      .subscribe( (result) => {
        this.name = result.name;
        this.image = result.image_url;
        this.restaurant = result;
      });

    this.loadOrderItems();

    this.menuService.findMenuByRestroId(this.restaurantId)
      .subscribe( (menu) => {
        this.menu = menu;
        this.menuItemService.findMenuItemsByMenuId(this.menu['_id'])
          .subscribe( (menuItems) => {
            this.menuItems = menuItems;
          });

      });
  }

  valid() {
    return this.subTotal < this.minOrderLimit || this.subTotal < 0.1;
  }

  loadOrders() {
    this.orderService.findOrderById(this.orderId)
      .subscribe(
        (order: any) => {
          this.order = order;
          this.total = order.total;
          this.subTotal = order.subTotal;
          this.state = order.state;
          this.deliveryCharge = order.deliveryCharge;
          this.minOrderLimit = order.minOrderLimit;
          this.tax = order.tax;
        });
  }

  loadOrderItems() {
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }

  updateOrder(price) {
    const order = {
      subTotal: this.subTotal + price,
      total: this.total + price
    }
    this.orderService.updateOrder(this.orderId, order)
      .subscribe( (orderItem) => {
        this.loadOrders();
      });
  }

  add(mItem: any) {
    const item = {
      quantity: 1,
      name: mItem.name,
      price: mItem.price,
      orderId: this.orderId
    }
    this.orderItemService.createOrderitem(item)
      .subscribe( (orderItem) => {
        this.updateOrder(item.price);
        this.loadOrderItems();
      });
  }

  addQuantity(oItem: any) {
    const addedPrice = oItem.price / oItem.quantity;
    const item = {
      quantity: oItem.quantity + 1,
      price: oItem.price + addedPrice
    }
    this.orderItemService.updateOrderItem(oItem._id, item)
      .subscribe( (status) => {
        this.updateOrder(addedPrice);
        this.loadOrderItems();
      });
  }

  reduceQuantity(oItem: any) {
    const reducedPrice = oItem.price / oItem.quantity;
    const item = {
      quantity: oItem.quantity - 1,
      price: oItem.price - reducedPrice
    }
    if (item.price <= 0) {
      this.deleteItem(oItem);
    } else {
      this.orderItemService.updateOrderItem(oItem._id, item)
        .subscribe( (status) => {
          this.updateOrder(-reducedPrice);
          this.loadOrderItems();
        });
    }
  }

  deleteItem(oItem: any) {
    // const reducedPrice = oItem.price / oItem.quantity;
    this.orderItemService.deleteOrderItem(oItem._id)
      .subscribe( (status) => {
        this.updateOrder(-oItem.price);
        this.loadOrderItems();
      });
  }

}
