import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid Username/Password !';
  role: string;

  constructor(private router: Router,
              private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.role = this.sharedService.user['role'];
          if (this.role === 'Chef') {
            this.router.navigate(['chef/restaurant/',  this.sharedService.user['restaurantId'], 'order']);
          } else if (this.role === 'Manager') {
            this.router.navigate(['manager/restaurant', this.sharedService.user['restaurantId']]);
          } else if (this.role === 'Driver') {
            this.router.navigate(['driver/restaurant/',  this.sharedService.user['restaurantId'], 'order']);
          } else if (this.role === 'Admin') {
            this.router.navigate(['admin', 'manager']);
          } else {
            this.router.navigate(['/']);
          }
          },
        (error: any) => {
          this.errorFlag = true;
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
