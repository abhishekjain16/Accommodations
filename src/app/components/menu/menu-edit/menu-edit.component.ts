import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../services/menu.service.client';
import {MenuItemService} from '../../../services/menuItem.service.client';

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
  error = '';

  constructor(private menuService: MenuService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private menuItemService: MenuItemService) {
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
          this.menuId = menu._id;
          this.deliveryCharge = menu.deliveryCharge;
          this.orderLimit = menu.orderLimit;
          this.menuItems = menu.menuItems;
          this.menuItemService.findMenuItemsByMenuId(this.menuId)
            .subscribe(
              (items: any) => {
                this.menuItems = items;
              }
            );
        }
        );
    }

  EditMenu() {
    const delCharge = this.menuEditForm.value.deliveryCharge;
    const orderLimit = this.menuEditForm.value.orderLimit;
    if ( delCharge && orderLimit ) {
      const editedMenu = {
        'restaurantId': this.restaurantId,
        'deliveryCharge': this.menuEditForm.value.deliveryCharge,
        'orderLimit': this.menuEditForm.value.orderLimit
      };
      this.menuService.UpdateMenuByMenuId(this.menuId, editedMenu)
        .subscribe(
          (menu: any) => {
            this.deliveryCharge = menu.deliveryCharge;
            this.orderLimit = menu.orderLimit;
            this.menuItems = menu.menuItems;
          }
        );
    } else {
      this.error = 'Please enter delivery charge and minimum order limit';
    }
  }
  DeleteMenu() {
    this.menuService.deleteMenu(this.menuId)
      .subscribe(
        (menu: any) => {
          this.menuItemService.deleteMenuItemsByMenuId(this.menuId)
            .subscribe(
              (status: any) => {
                this.router.navigate(['/manager', 'restaurant', this.restaurantId]);
              }
            );
        }
      );
  }
}
