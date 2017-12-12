import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  driverId: string;
  manager = {};
  driver = {};
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
          this.driverId = params['driverId'];
          this.restaurantId = params['restaurantId'];
        }
      );
    this.userService.findUserById(this.driverId)
      .subscribe(
        (driver: any) => {
          this.driver = driver;
          this.driverId = driver._id;
          this.username = driver['username'];
          this.phone = driver['phone'];
          this.email = driver['email'];
          this.firstName = driver['firstName'];
          this.lastName = driver['lastName'];
          this.active = driver['active'];
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
    this.driver['username'] = this.profileForm.value.username;
    this.driver['email'] = this.profileForm.value.email;
    this.driver['firstName'] = this.profileForm.value.firstName;
    this.driver['lastName'] = this.profileForm.value.lastName;
    this.driver['phone'] = this.profileForm.value.phone;
    this.driver['active'] = this.profileForm.value.active;
    this.userService.updateUser(this.driverId, this.driver)
      .subscribe(
        (driver: any) => {
          this.driver = driver;
        },
        (error: any) => {
        }
      );
  }

}
