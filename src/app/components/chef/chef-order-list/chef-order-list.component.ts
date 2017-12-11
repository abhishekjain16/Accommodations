import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-chef-order-list',
  templateUrl: './chef-order-list.component.html',
  styleUrls: ['./chef-order-list.component.css']
})
export class ChefOrderListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService,
              private sharedService: SharedService) { }

  chefId: String;
  restaurantId: String;
  orders: [{}];
  chef: {};
  ngOnInit() {
    this.chef = this.sharedService.user;
    this.chefId = this.chef['_id'];
    console.log(this.chefId);
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.orderService.findAllChefOrders(this.chefId, 'accepted' )
      .subscribe(
        (orders: any) => {
          console.log(orders);
          this.orders = orders;
        }
      );
  }
  MarkReady(order: any) {
    order['state'] = 'ready';
    this.orderService.updateOrder(order['_id'], order)
      .subscribe(
        () => {
          this.orderService.findAllChefOrders(this.chefId, 'accepted' )
            .subscribe(
              (orders: any) => {
                this.orders = orders;
              }
            );
        }
      );
  }

}
