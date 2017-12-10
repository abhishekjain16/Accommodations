import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItemService} from '../../../services/menuItem.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: './menu-item-edit.component.html',
  styleUrls: ['./menu-item-edit.component.css']
})
export class MenuItemEditComponent implements OnInit {
  @ViewChild('f') menuItemEditForm: NgForm;

  constructor(private router: Router,
              private menuItemService: MenuItemService,
              private activatedRoute: ActivatedRoute) { }
  restaurantId: String;
  error = '';
  name: String;
  price: String;
  description: String;
  category: String;
  menuItem: {};
  menuItemId: String;
  menuId: String;
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.menuItemId = params['menuItemId'];
          this.menuId = params['menuId'];
          this.menuItemService.findMenuItemByItemId(this.menuItemId)
            .subscribe(
              (item: any) => {
                console.log(item);
                this.menuItem = item;
                this.name = item.name;
                this.price = item.price;
                this.description = item.description;
                this.category = item.category;
              }
            );
        }
      );
  }

  UpdateMenuItem() {
    console.log(this.menuItemEditForm.value.name);
    const name = this.menuItemEditForm.value.name;
    const price = this.menuItemEditForm.value.price;
    const description = this.menuItemEditForm.value.description;
    const category = this.menuItemEditForm.value.category;
    if ( name && price ) {
      this.menuItem['name'] = name;
      this.menuItem['price'] = price;
      this.menuItem['description'] = description;
      this.menuItem['category'] = category;
      this.menuItemService.updateMenuItem(this.menuItemId, this.menuItem)
        .subscribe(
          (menuItem: any) => {
            this.router.navigate(['manager', 'restaurant', this.restaurantId, 'menu', this.menuId]);
          }
        );
    }else {
      this.error = 'Please enter Name and price of the menu item';
    }
  }
  DeleteMenuItem() {
    this.menuItemService.deleteMenuItem(this.menuItemId)
      .subscribe(
        (menuItem: any) => {
          this.router.navigate(['manager', 'restaurant', this.restaurantId, 'menu', this.menuId]);
        }
      );
  }
}
