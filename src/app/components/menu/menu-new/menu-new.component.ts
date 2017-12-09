import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.css']
})
export class MenuNewComponent implements OnInit {
  @ViewChild('f') menuForm: NgForm;

  restaurantId: String;
  deliveryCharge: String;
  orderLimit: String;
  menuItems: any;
  error = '';
  constructor(private activatedRoute: ActivatedRoute,
              private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
  }
  AddMenu() {
    const delivery = this.menuForm.value.deliveryCharge;
    const minOrder = this.menuForm.value.orderLimit;
    if (delivery && minOrder) {
      const newMenu = {
        'restaurantId': this.restaurantId,
        'deliveryCharge': this.menuForm.value.deliveryCharge,
        'orderLimit': this.menuForm.value.orderLimit,
      };
      this.menuService.createMenu(this.restaurantId, newMenu)
        .subscribe(
          (menu: any) => {
            console.log('inside menu new component');
            this.router.navigate(['/manager', 'restaurant', this.restaurantId]);
          }
        );
    }else {
      this.error = 'Please enter delivery charge and minimum order limit'; }
  }

}
