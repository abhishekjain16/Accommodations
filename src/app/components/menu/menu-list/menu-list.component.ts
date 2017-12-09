import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menuId: String;
  restaurantId: String;
  deliveryCharge: String;
  orderLimit: String;
  menuItems: any;
  constructor(private activatedRoute: ActivatedRoute,
              private menuService: MenuService) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.menuService.findMenuByRestroId(this.restaurantId)
      .subscribe(
        (menu: any) => {
          this.menuId = menu._id;
          this.deliveryCharge = menu.deliveryCharge;
          this.orderLimit = menu.orderLimit;
          this.menuItems = menu.menuItems;
        }
      );

  }

}
