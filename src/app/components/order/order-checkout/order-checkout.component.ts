import { Component, OnInit, ViewChild } from '@angular/core';
import {OrderService} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {OrderItemService} from '../../../services/orderItem.service.client';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {
  @ViewChild('f') addressForm: NgForm;
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
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
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
          this.subTotal = order.subTotal;
          this.total = order.total;
          if (this.subTotal <= 0) {
            this.router.navigate(['restaurant', this.restaurantId, 'order', this.orderId]);
          } else {
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

  loadOrderItems() {
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }
  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
  update() {
    const order = {
      address: {
        name: this.addressForm.value.name,
        street: this.addressForm.value.street,
        city: this.addressForm.value.city,
        zipCode: this.addressForm.value.zipCode,
        state: this.addressForm.value.state,
        apt: this.addressForm.value.apt,
        phone: this.addressForm.value.phone
      },
      state: 'paid'
    }
    this.orderService.updateOrder(this.orderId, order)
      .subscribe(
        (status: any) => {
          this.router.navigate(['restaurant', this.restaurantId, 'order', this.orderId, 'complete']);
        }
      );
  }


}
