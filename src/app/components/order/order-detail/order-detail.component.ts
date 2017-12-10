import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantServiceClient} from '../../../services/restaurant.service.client';

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
  orderLimit: Number;
  name: string;
  image: any;
  restaurant = {};


  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private restaurantService: RestaurantServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.orderId = params['orderId'];
        });
    this.orderService.findOrderById(this.orderId)
      .subscribe(
        (order: any) => {
          this.order = order;
          this.total = order.total;
          this.subTotal = order.subTotal;
          this.state = order.state;
          this.deliveryCharge = order.deliveryCharge;
          this.orderLimit = order.orderLimit;
          this.tax = order.tax;
        });
    this.restaurantService.SearchBusinessById(this.restaurantId)
      .subscribe( (result) => {
        const coordinates = result['coordinates'];
        this.name = result.name;
        this.image = result.image_url;
        this.restaurant = result;
      });
  }

  valid() {
    return this.subTotal < this.orderLimit || this.subTotal < 0.1;
  }

  add() {
  }

}
