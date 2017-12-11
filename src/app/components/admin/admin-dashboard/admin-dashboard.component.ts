import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  user = {};
  message: string;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user && this.user['role'] === 'Admin') {
      this.username = this.user['username'];
      this.firstName = this.user['firstName'];
      this.lastName = this.user['lastName'];
      this.email = this.user['email'];
      this.phone = this.user['phone'];
    } else {
      this.router.navigate(['/']);
    }

  }
  update() {
    this.user['username'] = this.profileForm.value.username;
    this.user['email'] = this.profileForm.value.email;
    this.user['firstName'] = this.profileForm.value.firstName;
    this.user['lastName'] = this.profileForm.value.lastName;
    this.user['phone'] = this.profileForm.value.phone;
    this.userService.updateUser(this.user['_id'], this.user)
      .subscribe(
        (user: any) => {
          this.user = user;
          this.message = "Profile Updated!";
        },
        (error: any) => {
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }


}
