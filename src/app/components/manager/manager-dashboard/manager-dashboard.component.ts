import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  restaurantId: string;
  manager = {};
  managerId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  active: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
          this.managerId = params['managerId'];
        }
      );
    if (this.restaurantId) {
      this.userService.findManagerByRestaurantId(this.restaurantId)
        .subscribe(
          (manager: any) => {
            this.manager = manager;
            this.managerId = manager._id;
            this.username = manager['username'];
            this.phone = manager['phone'];
            this.email = manager['email'];
            this.firstName = manager['firstName'];
            this.lastName = manager['lastName'];
          }
        );
    } else {
      this.userService.findUserById(this.managerId)
        .subscribe(
          (manager: any) => {
            this.manager = manager;
            this.managerId = manager._id;
            this.username = manager['username'];
            this.phone = manager['phone'];
            this.email = manager['email'];
            this.firstName = manager['firstName'];
            this.lastName = manager['lastName'];
            this.active = manager['active'];
          }
        );
    }

  }

  update() {
    this.manager['username'] = this.profileForm.value.username;
    this.manager['email'] = this.profileForm.value.email;
    this.manager['firstName'] = this.profileForm.value.firstName;
    this.manager['lastName'] = this.profileForm.value.lastName;
    this.manager['phone'] = this.profileForm.value.phone;
    if (!this.restaurantId) {
      this.manager['active'] = this.profileForm.value.active;
    }
    this.userService.updateUser(this.managerId, this.manager)
      .subscribe(
        (manager: any) => {
          this.manager = manager;
        },
        (error: any) => {
        }
      );
  }
}
