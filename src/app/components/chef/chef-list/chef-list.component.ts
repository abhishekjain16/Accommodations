import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

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
              private sharedService: SharedService) { }

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


}
