import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderItemService} from '../../../services/orderItem.service.client';
import {OrderService} from '../../../services/order.service.client';

@Component({
  selector: 'app-manager-order-details',
  templateUrl: './manager-order-details.component.html',
  styleUrls: ['./manager-order-details.component.css']
})
export class ManagerOrderDetailsComponent implements OnInit {

  restaurantId: string;
  order: {};
  orderId: string;
  orderItems: [{}];
  constructor(private orderItemService: OrderItemService,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService) { }

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
        }
      );
    this.orderItemService.findAllByOrder(this.orderId)
      .subscribe(
        (orderItems: any) => {
          this.orderItems = orderItems;
        }
      );
  }

  AcceptOrder() {
    this.order['state'] = 'accepted';
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          // Inform the customer order was accepted
        }
      );
  }
  CancelOrder() {
    this.order['state'] = 'cancelled';
    this.orderService.updateOrder(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          // Inform the customer order was cancelled
        }
      );
  }
}
