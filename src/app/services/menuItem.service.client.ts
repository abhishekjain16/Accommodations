import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

// injecting service into module
@Injectable()

export class MenuItemService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;

  createMenuItem(menuId: String, item) {
    const url = this.baseUrl + '/api/restaurant/menu/' + menuId + '/menuItem';
    return this.http.post(url, item)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findMenuItemByItemId(menuItemId: String) {
    const url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findMenuItemsByMenuId(menuId: String) {
    const url = this.baseUrl + '/api/menu/' + menuId + '/menuItem';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  updateMenuItem(menuItemId: String, menuItem) {
    const url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
    return this.http.put(url, menuItem )
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  deleteMenuItem(menuItemId: String) {
    const url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  deleteMenuItemsByMenuId(menuId: String) {
    const url = this.baseUrl + '/api/menu/' + menuId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
