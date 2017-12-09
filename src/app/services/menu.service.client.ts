import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()

export class MenuService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'findMenuByRestroId': this.findMenuByRestroId,
    'UpdateMenuByMenuId': this.UpdateMenuByMenuId,
  };

  createMenu(restroId: String, menu: any) {
    const url = this.baseUrl + '/api/restaurant/' + restroId + '/menu';
    return this.http.post(url, menu)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  findMenuByRestroId(restroId) {
    console.log(restroId);
    const url = this.baseUrl + '/api/restaurant/' + restroId + '/menu';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  UpdateMenuByMenuId(menuId, menu) {
    const url = this.baseUrl + '/api/restaurant/menu' + menuId;
    return this.http.put(url, menu )
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  findMenuById(menuId: String) {
    return this.http.get(environment.baseUrl + '/api/menu/' + menuId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  deleteMenu(menuId) {
    return this.http.delete(environment.baseUrl + '/api/menu/' + menuId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
