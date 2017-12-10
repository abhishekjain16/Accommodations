import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';

@Component({
  selector: 'app-manager-order',
  templateUrl: './manager-order.component.html',
  styleUrls: ['./manager-order.component.css']
})
export class ManagerOrderComponent implements OnInit {

  restaurantId: String;
  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService) { }

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
}
