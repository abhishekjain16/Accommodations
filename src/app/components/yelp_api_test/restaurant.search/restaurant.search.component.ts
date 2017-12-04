import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient } from '../../../services/restaurant.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant.search.test',
  templateUrl: './restaurant.search.component.html',
  styleUrls: ['./restaurant.search.component.css']
})
export class RestaurantSearchComponent implements OnInit {

  restaurant: String;
  location: String;

  SearchRestaurant(restaurant: String, location: String) {
    this.restaurant = restaurant;
    this.location = location;
    this.router.navigate(['search/restaurant', this.restaurant, 'location', this.location]);
    // this.restaurantService.searchRestaurantByName(restaurant, location )
    //   .subscribe( (result) => {
    //     this.result = result;
    //     this.restaurants = result['businesses'];
    //   });
  }
  constructor( private restaurantService: RestaurantServiceClient,
               private router: Router) { }

  ngOnInit() {
  }
}
