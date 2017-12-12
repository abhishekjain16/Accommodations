import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  userId: string;
  user = {};
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
          this.userId = params['userId'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe(
        (user: any) => {
          this.user = user;
          this.userId = user._id;
          this.username = user['username'];
          this.phone = user['phone'];
          this.email = user['email'];
          this.firstName = user['firstName'];
          this.lastName = user['lastName'];
          this.active = user['active'];
        }
      );
  }

  update() {
    this.user['username'] = this.profileForm.value.username;
    this.user['email'] = this.profileForm.value.email;
    this.user['firstName'] = this.profileForm.value.firstName;
    this.user['lastName'] = this.profileForm.value.lastName;
    this.user['phone'] = this.profileForm.value.phone;
    this.user['active'] = this.profileForm.value.active;
    this.userService.updateUser(this.userId, this.user)
      .subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
        }
      );
  }

}
