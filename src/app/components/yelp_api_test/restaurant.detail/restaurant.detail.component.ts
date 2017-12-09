import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant.detail',
  templateUrl: './restaurant.detail.component.html',
  styleUrls: ['./restaurant.detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurantId: String;
  name: String;
  image: any;
  ratings: any;
  number: String;
  images = [];
  restaurant = {};
  positions = [];
  center: string;
  hours = [];
  days = [];
  reviews = [];

  constructor( private restaurantService: RestaurantServiceClient,
               private activatedRoute: ActivatedRoute) { }

  SearchBusinessById(id: String) {
    this.restaurantService.SearchBusinessById(id)
      .subscribe( (result) => {
        this.name = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.restaurant = result;
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        });
    this.restaurantService.SearchBusinessById(this.restaurantId)
      .subscribe( (result) => {
        const coordinates = result['coordinates'];
        this.name = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.number = result.phone;
        this.images = result.photos;
        this.restaurant = result;
        this.positions = [[coordinates['latitude'], coordinates['longitude']]];
        this.center = coordinates['latitude'].toString() + ', ' + coordinates['longitude'].toString();
        this.hours = result.hours[0]['open'];
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      });

    this.restaurantService.getReviewsById(this.restaurantId)
      .subscribe( (result) => {
        this.reviews = result.reviews;
      });
  }
  categories(cats) {
    if (cats) {
      return cats.map(a => a.title).join(', ');
    } else {
      return '';
    }
  }
}
