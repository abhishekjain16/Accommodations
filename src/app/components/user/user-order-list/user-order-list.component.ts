import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent implements OnInit {
  orders: [{}];
  role: string;
  user = {};

  constructor(private router: Router,
              private orderService: OrderService,
              private sharedService: SharedService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.role = this.user['role'];
    if (this.role === 'Customer') {
      this.orderService.findAllCustomerOrders(this.user['_id'], null)
        .subscribe(
          (orders: any) => {
            this.orders = orders;
          }
        );
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

}
