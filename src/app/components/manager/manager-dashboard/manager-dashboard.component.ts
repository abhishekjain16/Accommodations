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
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );
    this.userService.findManagerByRestaurantId(this.restaurantId)
      .subscribe(
        (manager: any) => {
          this.manager = manager;
          this.userId = manager._id;
          this.username = manager['username'];
          this.phone = manager['phone'];
          this.email = manager['email'];
          this.firstName = manager['firstName'];
          this.lastName = manager['lastName'];
        }
      );

  }

  update() {
    this.manager['username'] = this.profileForm.value.username;
    this.manager['email'] = this.profileForm.value.email;
    this.manager['firstName'] = this.profileForm.value.firstName;
    this.manager['lastName'] = this.profileForm.value.lastName;
    this.manager['phone'] = this.profileForm.value.phone;
    this.userService.updateUser(this.userId, this.manager)
      .subscribe(
        (manager: any) => {
          this.manager = manager;
        },
        (error: any) => {
        }
      );
  }
}
