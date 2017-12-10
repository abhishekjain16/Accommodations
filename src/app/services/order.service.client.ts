import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()

export class OrderService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  createOrder(userId: String, order) {
    const url = this.baseUrl + '/api/user/' + userId + '/order';
    return this.http.post(url, order )
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findAllOrders() {
    const url = this.baseUrl + '/api/orders';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findAllOrdersByRestaurant(restaurantId: String, state: any) {
    const url = this.baseUrl + '/api/restaurant/' + restaurantId + '/order?state=' + state;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findOrderById(orderId: String) {
    const url = this.baseUrl + '/api/order/' + orderId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  updateOrder(orderId: String, order: any) {
    const url = this.baseUrl + '/api/order/' + orderId;
    return this.http.put(url, order )
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findAllDriverOrders(driverId: String, state: any) {
    const url = this.baseUrl + '/api/driver/' + driverId + 'order?state=' + state;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findAllCustomerOrders(customerId: String, state: any) {
    const url = this.baseUrl + '/api/customer/' + customerId + '/state/' + state;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findAllChefOrders(chefId: String, state: any) {
    const url = this.baseUrl + '/api/chef/' + chefId + 'order?state=' + state;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
