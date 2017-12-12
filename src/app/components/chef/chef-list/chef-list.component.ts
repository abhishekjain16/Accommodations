import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {MenuService} from "../../../services/menu.service.client";

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {
  restaurantId: string;
  chefs: [{}];
  role: string;
  user = {};
  manager = {};
  managerId: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.user = this.sharedService.user;
    this.role = this.user['role'];
    this.userService.findChefsByRestaurantId(this.restaurantId)
      .subscribe(
        (chefs: any) => {
          this.chefs = chefs;
        }
      );
    this.userService.findManagerByRestaurantId(this.restaurantId)
      .subscribe(
        (manager: any) => {
          this.managerId = manager['_id'];
          this.manager = manager;
        }
      );
  }
  ToggleStatus(chef: any) {
    chef['active'] = !chef['active'];
    this.userService.updateUser(chef['_id'], chef)
      .subscribe(
        (user: any) => {
          this.userService.findChefsByRestaurantId(this.restaurantId)
            .subscribe(
              (chefs: any) => {
                this.chefs = chefs;
              }
            );
        }
      );
  }
  AddOrViewMenu() {
    this.menuService.findMenuByRestroId(this.restaurantId)
      .subscribe(
        (menu: any) => {
          if (menu) {
            this.router.navigate(['/manager/restaurant/', this.restaurantId, 'menu']);
          } else {
            this.router.navigate(['/manager/restaurant/', this.restaurantId, 'menu', 'new']);
          }
        }
      );
  }
}
