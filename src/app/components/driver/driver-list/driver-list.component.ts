import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {MenuService} from '../../../services/menu.service.client';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  restaurantId: string;
  drivers: [{}];
  user = {};
  role: string;
  managerId: string;
  manager = {};

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

    this.userService.findDriversByRestaurantId(this.restaurantId)
      .subscribe(
        (drivers: any) => {
          this.drivers = drivers;
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
  ToggleStatus(driver: any) {
    driver['active'] = !driver['active'];
    this.userService.updateUser(driver['_id'], driver)
      .subscribe(
        (user: any) => {
          this.userService.findDriversByRestaurantId(this.restaurantId)
            .subscribe(
              (drivers: any) => {
                this.drivers = drivers;
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
