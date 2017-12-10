import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

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
    this.orderService.findAllOrdersByRestaurant(this.restaurantId,null)
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }

}
