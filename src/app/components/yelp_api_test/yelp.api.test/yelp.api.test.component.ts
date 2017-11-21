import { Component, OnInit } from '@angular/core';
import { YelpServiceClient} from '../../../services/yelp.service.client';

@Component({
  selector: 'app-yelp.api.test',
  templateUrl: './yelp.api.test.component.html',
  styleUrls: ['./yelp.api.test.component.css']
})
export class YelpApiTestComponent implements OnInit {

  restaurant: String;
  location: String;
  result: Object;
  restaurants = [];

  SearchRestaurant(restaurant: String, location: String) {
    this.yelpService.searchRestaurantByName(restaurant, location )
      .subscribe( (result) => {
        this.result = result;
        this.restaurants = result['businesses'];
      });
  }
  constructor( private yelpService: YelpServiceClient) { }

  ngOnInit() {
  }

}
