import {ActivatedRoute, Router} from '@angular/router';
import {OrderItemService} from '../../../services/orderItem.service.client';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manager-order-details',
  templateUrl: './manager-order-details.component.html',
  styleUrls: ['./manager-order-details.component.css']
})
export class ManagerOrderDetailsComponent implements OnInit {
  @ViewChild('f') orderDetailsForm: NgForm;

  restaurantId: string;
  order: {};
  orderId: string;
  orderItems = [{}];
  orderState: String;
  chefs: String;
  drivers: String;
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
          this.orderState = order['state'];
        }
      );
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe(
        (orderItems: any) => {
          this.orderItems = orderItems;
        }
      );
    this.userService.findActiveChefsByRestaurantId(this.restaurantId)
      .subscribe(
        (chefs: any) => {
          this.chefs = chefs;
        }
      );
    this.userService.findActiveDriversByRestaurantId(this.restaurantId)
      .subscribe(
        (drivers: any) => {
          this.drivers = drivers;
        }
      );
  }

  AcceptOrder() {
    this.order['state'] = 'accepted';
    console.log('accepting order');
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          this.router.navigate(['/manager', 'restaurant', this.restaurantId, 'order']);
        }
      );
  }
  CancelOrder() {
    this.order['state'] = 'cancelled';
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          this.router.navigate(['/manager', 'restaurant', this.restaurantId, 'order']);
        }
      );
  }
  ChooseEmployee() {
    alert(this.orderState);
    if ( this.orderState === 'accepted' ) {
      const employeeId = this.orderDetailsForm.value.chefId;
      this.order['chefId'] = employeeId;
    } else if ( this.orderState === 'ready' ) {
      const employeeId = this.orderDetailsForm.value.driverId;
      this.order['driverId'] = employeeId;
    }
    console.log('choose employee');
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(
        (order: any) => {
        this.router.navigate(['/manager', 'restaurant', this.restaurantId, 'order'])  ;
        }
      );
  }
}
