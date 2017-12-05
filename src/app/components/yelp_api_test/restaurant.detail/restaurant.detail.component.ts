import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant.detail',
  templateUrl: './restaurant.detail.component.html',
  styleUrls: ['./restaurant.detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  yelpId: String;
  businessName: String;
  image: any;
  ratings: any;
  number: String;
  constructor( private restaurantService: RestaurantServiceClient,
               private activatedRoute: ActivatedRoute) { }
  SearchBusinessById(id: String) {
    console.log('api details componenet');
    this.restaurantService.SearchBusinessById(id)
      .subscribe( (result) => {
        this.businessName = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
      });
  }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.yelpId = params['restaurantId'];
        });
    console.log('api details componenet');
    this.restaurantService.SearchBusinessById(this.yelpId)
      .subscribe( (result) => {
        console.log(result);
        this.businessName = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.number = result.phone;
      });
  }
}
