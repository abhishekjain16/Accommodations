import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  restaurantId: string;
  manager = {};
  managerId: string;
  orders: [{}];
  role: string;
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private sharedService: SharedService,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.user = this.sharedService.user;
    this.role = this.user['role'];
    this.orderService.findAllOrdersByRestaurant(this.restaurantId,null)
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
    this.userService.findManagerByRestaurantId(this.restaurantId)
      .subscribe(
        (manager: any) => {
          this.managerId = manager['_id'];
          this.manager = manager;
        }
      );
  }

}
