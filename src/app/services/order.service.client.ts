import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

// injecting service into module
@Injectable()

export class OrderService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;

  api = {
    'createOrder'   : this.createOrder,
    'findOrderById' : this.findOrderById
  };

  createOrder(order: any, restaurantId: string) {
    return this.http.post(this.baseUrl + '/api/restaurant/' + restaurantId + '/order', order)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findOrderById(orderId: string) {
    return this.http.get(this.baseUrl + '/api/order/' + orderId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
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
  findAllOrdersByRestaurant(restaurantId: String, state: any) {
    const url = this.baseUrl + '/api/restaurant/' + restaurantId + '/state/' + state;
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
