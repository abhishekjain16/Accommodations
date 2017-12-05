import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient } from '../../../services/restaurant.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant.list.component.html',
  styleUrls: ['./restaurant.list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: String;
  location: String;
  result: any;
  searchedRestro = [];
  constructor(private restaurantService: RestaurantServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
  }

  ngOnInit() {
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
        console.log(this.searchedRestro[0]);

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
}
