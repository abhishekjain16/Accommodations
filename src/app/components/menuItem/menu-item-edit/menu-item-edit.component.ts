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
  menuId: String;
  menuItemId: String;
  menuItem = {};
  menuItems = [{}];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.menuId = params['menuId'];
          this.menuItemId = params['menuItemId'];
        }
      );
    this.menuItemService.findMenuItemByItemId(this.menuItemId)
      .subscribe(
        (item: any) => {
          this.menuItem = item;
        }
      );
    this.menuItemService.findMenuItemByItemId(this.menuId)
      .subscribe(
        (items: any) => {
          this.menuItems = items;
      }
      );
  }

  UpdateMenuItem() {
    this.menuItem['name'] = this.menuItemEditForm.value.name;
    this.menuItem['price'] = this.menuItemEditForm.value.price;
    this.menuItem['description'] = this.menuItemEditForm.value.description;
    this.menuItem['category'] = this.menuItemEditForm.value.category;
    this.menuItemService.updateMenuItem(this.menuItemId, this.menuItem)
      .subscribe(
        (menuItem: any) => {
        this.router.navigate(['manager', 'restaurant', this.restaurantId, 'menu']);
      }
    );
  }
  DeleteMenuItem() {
    this.menuItemService.deleteMenuItem(this.menuItemId)
      .subscribe(
        (menuItem: any) => {
          this.router.navigate(['manager', 'restaurant', this.restaurantId, 'menu']);
        }
      );
  }
}
