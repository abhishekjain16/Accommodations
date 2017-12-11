import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-admin-manager-detail',
  templateUrl: './admin-manager-detail.component.html',
  styleUrls: ['./admin-manager-detail.component.css']
})
export class AdminManagerDetailComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  managerId: string;
  manager = {};
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  active: boolean;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.managerId = params['managerId'];
        }
      );
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

  update() {
    this.manager['username'] = this.profileForm.value.username;
    this.manager['email'] = this.profileForm.value.email;
    this.manager['firstName'] = this.profileForm.value.firstName;
    this.manager['lastName'] = this.profileForm.value.lastName;
    this.manager['phone'] = this.profileForm.value.phone;
    this.manager['active'] = this.profileForm.value.active;
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
