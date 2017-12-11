import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()

export class OrderItemService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  findAllByOrder(orderId: String) {
    const url = this.baseUrl + '/api/order/' + orderId + '/orderItem';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findById(orderItemId: String) {
    const url = this.baseUrl + '/api/orderItem/orderItemId/' + orderItemId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  createOrderitem(orderItem: any) {
    const url = this.baseUrl + '/api/order/orderItem';
    return this.http.post(url, orderItem)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  deleteOrderItem(orderItemId: String) {
    const url = this.baseUrl + '/api/order/orderItem/' + orderItemId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  updateOrderItem(orderItemId: String, orderItem: any) {
    const url = this.baseUrl + '/api/orderItem/' + orderItemId;
    return this.http.put(url, orderItem)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
