import {ActivatedRoute, Router} from '@angular/router';
import {OrderItemService} from '../../../services/orderItem.service.client';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-chef-order-detail',
  templateUrl: './chef-order-detail.component.html',
  styleUrls: ['./chef-order-detail.component.css']
})
export class ChefOrderDetailComponent implements OnInit {

  restaurantId: string;
  order: {};
  orderId: string;
  orderItems = [{}];
  address: String;

  constructor(private orderItemService: OrderItemService,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private router: Router,
              private userService: UserService) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.orderId = params['orderId'];
        }
      );
    this.orderService.findOrderById(this.orderId)
      .subscribe(
        (order: any) => {
          this.order = order;
          this.address = order['address'];
        }
      );
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe(
        (orderItems: any) => {
          this.orderItems = orderItems;
        }
      );
  }
  MarkReady() {
    this.order['state'] = 'ready';
    this.orderService.updateOrder(this.order['_id'], this.order)
      .subscribe(
        () => {
          this.router.navigate(['/chef', 'restaurant', this.restaurantId, 'order'])  ;
        }
      );
  }
}
