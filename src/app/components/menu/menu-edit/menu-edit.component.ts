import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  @ViewChild('f') menuEditForm: NgForm;
  menuId: String;
  restaurantId: String;
  deliveryCharge: String;
  orderLimit: String;
  menuItems: any;

  constructor(private menuService: MenuService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

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
          this.menuId = menu.id;
          this.deliveryCharge = menu.deliveryCharge;
          this.orderLimit = menu.orderLimit;
          this.menuItems = menu.menuItems;
        }
      );
  }

  EditMenu() {
    const editedMenu = {
      'restaurantId': this.restaurantId,
      'deliveryCharge': this.menuEditForm.value.delivery,
      'orderLimit': this.menuEditForm.value.orderLimit,
      'menuItems': this.menuItems
    };
    this.menuService.UpdateMenuByMenuId(this.menuId, editedMenu)
      .subscribe(
        (menu: any) => {
          this.deliveryCharge = menu.deliveryCharge;
          this.orderLimit = menu.orderLimit;
          this.menuItems = menu.menuItems;
        }
      );
  }
  DeleteMenu() {
    this.menuService.deleteMenu(this.menuId)
      .subscribe(
        (menu: any) => {
          this.router.navigate(['/manager', 'restaurant', this.restaurantId]);
        }
      );
  }
}
