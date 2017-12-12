import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-chef-edit',
  templateUrl: './chef-edit.component.html',
  styleUrls: ['./chef-edit.component.css']
})
export class ChefEditComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  chefId: string;
  manager = {};
  chef = {};
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  active: boolean;
  restaurantId: string;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.chefId = params['chefId'];
          this.restaurantId = params['restaurantId'];
        }
      );
    this.userService.findUserById(this.chefId)
      .subscribe(
        (chef: any) => {
          this.chef = chef;
          this.chefId = chef._id;
          this.username = chef['username'];
          this.phone = chef['phone'];
          this.email = chef['email'];
          this.firstName = chef['firstName'];
          this.lastName = chef['lastName'];
          this.active = chef['active'];
        }
      );
    this.userService.findManagerByRestaurantId(this.restaurantId)
      .subscribe(
        (manager: any) => {
          this.manager = manager;
        }
      );
  }

  update() {
    this.chef['username'] = this.profileForm.value.username;
    this.chef['email'] = this.profileForm.value.email;
    this.chef['firstName'] = this.profileForm.value.firstName;
    this.chef['lastName'] = this.profileForm.value.lastName;
    this.chef['phone'] = this.profileForm.value.phone;
    this.chef['active'] = this.profileForm.value.active;
    this.userService.updateUser(this.chefId, this.chef)
      .subscribe(
        (chef: any) => {
          this.chef = chef;
        },
        (error: any) => {
        }
      );
  }

}
