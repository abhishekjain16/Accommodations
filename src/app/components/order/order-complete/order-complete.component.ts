import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {OrderItemService} from '../../../services/orderItem.service.client';
import {UserService} from "../../../services/user.service.client";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {
  restaurantId: string;
  order: {};
  orderId: string;
  rstate: string;
  total: Number;
  subTotal: Number;
  items = [];
  tax: Number;
  deliveryCharge: Number;
  minOrderLimit: Number;
  rname: string;
  rimage: any;
  user: String;
  restaurant = {};
  address: {};
  street: string;
  apt: string;
  name: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;

  constructor(private orderService: OrderService,
              private router: Router,
              private userService: UserService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private restaurantService: RestaurantServiceClient,
              private orderItemService: OrderItemService) { }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.orderId = params['orderId'];
        });

    this.loadOrder();

    this.restaurantService.SearchBusinessById(this.restaurantId)
      .subscribe( (result) => {
        this.rname = result.name;
        this.rimage = result.image_url;
        this.restaurant = result;
      });

    this.loadOrderItems();
  }

  loadOrder() {
    this.orderService.findOrderById(this.orderId)
      .subscribe(
        (order: any) => {
          this.order = order;
          if (this.order === 'cart') {
            this.router.navigate(['restaurant', this.restaurantId, 'order', this.orderId]);
          } else {
            this.total = order.total;
            this.subTotal = order.subTotal;
            this.rstate = order.state;
            this.deliveryCharge = order.deliveryCharge;
            this.minOrderLimit = order.minOrderLimit;
            this.tax = order.tax;
            this.address = order.address;
            if (this.address) {
              this.name = this.address['name'];
              this.street = this.address['street'];
              this.apt = this.address['apt'];
              this.city = this.address['city'];
              this.state = this.address['state'];
              this.zipCode = this.address['zipCode'];
              this.phone = this.address['phone'];
            }
          }
        });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  loadOrderItems() {
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }

  stateText() {
    if (this.rstate === 'paid') {
      return 'Thanks for Completeing the Order!';
    } else if (this.rstate === 'ready') {
      return 'Your Order is ready for delivery.';
    } else if (this.rstate === 'delivered') {
      return 'Your Order has been delivered.';
    } else if (this.rstate === 'cancelled') {
      return 'Your order has been cancelled';
    } else if (this.rstate === 'accepted') {
      return 'Your Order is now being prepared';
    }
  }
}
