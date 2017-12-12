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
  orders: [{}];
  activeState = 'paid';

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService,
              private menuService: MenuService,
              private router: Router) { }

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
    this.activeState = 'paid';
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'paid' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayAcceptedOrders() {
    this.activeState = 'accepted';
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'accepted' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayReadyOrders() {
    this.activeState = 'ready';
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'ready' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayDeliveredOrders() {
    this.activeState = 'delivered';
    this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'delivered' )
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }
  DisplayCancelledOrders() {
    this.activeState = 'cancelled';
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

  active(state) {
    if (state === this.activeState) {
      return 'active';
    } else {
      return '';
    }
  }

}
