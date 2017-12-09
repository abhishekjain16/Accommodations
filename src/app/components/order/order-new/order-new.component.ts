import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {
  order = {};
  restaurantId: string;

  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        });


    this.orderService.createOrder(this.order, this.restaurantId)
      .subscribe(
        (order: any) => this.router.navigate(['restaurant', this.restaurantId, 'order', order._id])
      );

  }

}
