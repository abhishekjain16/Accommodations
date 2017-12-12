import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-manager-order',
  templateUrl: './manager-order.component.html',
  styleUrls: ['./manager-order.component.css']
})
export class ManagerOrderComponent implements OnInit {

  restaurantId: String;
  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService,
              private menuService: MenuService,
              private router: Router) { }

  orders: [{}];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'paid' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;

        }
      );
  }
  DisplayPaidOrders() {
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'paid' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayAcceptedOrders() {
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'accepted' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayReadyOrders() {
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'ready' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayDeliveredOrders() {
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'delivered' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayCancelledOrders() {
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'cancelled' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  AddOrViewMenu() {
    this.menuService.findMenuByRestroId(this.restaurantId)
      .subscribe(
        (menu: any) => {
          if (menu) {
            this.router.navigate(['/manager/restaurant/', this.restaurantId, 'menu']);
          } else {
            this.router.navigate(['/manager/restaurant/', this.restaurantId, 'menu', 'new']);
          }
        }
      );
  }

}
