import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuItemService} from '../../../services/menuItem.service.client';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {

  menuId: String;
  menuItems = [{}];
  constructor(private menuItemService: MenuItemService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.menuId = params['menuId'];
        }
      );
    this.menuItemService.findMenuItemsByMenuId(this.menuId)
      .subscribe(
        (items: any) => {
          this.menuItems = items;
        }
      );
  }
}
