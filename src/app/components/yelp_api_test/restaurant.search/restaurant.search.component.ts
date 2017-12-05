import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient } from '../../../services/restaurant.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-restaurant.search.test',
  templateUrl: './restaurant.search.component.html',
  styleUrls: ['./restaurant.search.component.css']
})
export class RestaurantSearchComponent implements OnInit {

  restaurant: String;
  location: String;
  user: String;

  constructor( private restaurantService: RestaurantServiceClient,
               private router: Router,
               private sharedService: SharedService,
               private userService: UserService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  SearchRestaurant(restaurant: String, location: String) {
    this.restaurant = restaurant;
    this.location = location;
    this.router.navigate(['search'],
      {queryParams: {restaurant: this.restaurant, location: this.location}});
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
}
