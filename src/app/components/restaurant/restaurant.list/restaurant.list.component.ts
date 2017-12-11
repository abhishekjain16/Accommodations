import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient } from '../../../services/restaurant.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant.list.component.html',
  styleUrls: ['./restaurant.list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: String;
  location: String;
  result: any;
  user: String;
  searchedRestro = [];
  constructor(private restaurantService: RestaurantServiceClient,
              private userService: UserService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.queryParams
      .subscribe(
        (params: any) => {
          this.restaurant = params['restaurant'];
          this.location = params['location'];
        }
      );
    this.restaurantService.searchRestaurantByName(this.restaurant, this.location )
      .subscribe( (result) => {
        this.result = result;
        this.searchedRestro = result['businesses'];

      });
  }
  SearchRestaurant(restaurant: String, location: String) {
    this.restaurant = restaurant;
    this.location = location;
    this.router.navigate(['search'],
      {queryParams: {restaurant: this.restaurant, location: this.location}});
  }

  categories(cats) {
    return cats.map(a => a.title).join(', ');
  }
  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
}
