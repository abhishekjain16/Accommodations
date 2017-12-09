import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../services/menu.service.client';
import {MenuItemService} from '../../../services/menuItem.service.client';

@Component({
  selector: 'app-menu-item-new',
  templateUrl: './menu-item-new.component.html',
  styleUrls: ['./menu-item-new.component.css']
})
export class MenuItemNewComponent implements OnInit {
  @ViewChild('f') menuItemForm: NgForm;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private menuItemService: MenuItemService) { }
  restaurantId: String;
  menuId: String;
  error = '';
  name: String;
  price: String;
  description: String;
  category: String;
  menuItem: {};

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.menuId = params['menuId'];
        }
      );
  }
  createMenuItem() {
    this.name = this.menuItemForm.value.name;
    this.description = this.menuItemForm.value.description;
    this.price = this.menuItemForm.value.price;
    this.category = this.menuItemForm.value.category;
    if (this.name && this.price ) {
      const newMenuItem = {
        name: this.name,
        price: this.price,
        description: this.description,
        category: this.category
      };
      this.menuItemService.createMenuItem(this.menuId, newMenuItem)
        .subscribe(
          (menuItem: any) => {
            this.router.navigate(['manager', 'restaurant', this.restaurantId, 'menu']);
          }
        );
    } else {
      this.error = 'Please enter Name and price of the Menuitem';}
  }
}
