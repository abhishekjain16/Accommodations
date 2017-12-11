import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
@Component({
  selector: 'app-driver-order-list',
  templateUrl: './driver-order-list.component.html',
  styleUrls: ['./driver-order-list.component.css']
})
export class DriverOrderListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService,
              private sharedService: SharedService) {}
  driverId: String;
  restaurantId: String;
  orders: [{}];
  driver: {};
  ngOnInit() {
    this.driver = this.sharedService.user;
    this.driverId = this.driver['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.orderService.findAllDriverOrders(this.driverId, 'ready' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }

}
