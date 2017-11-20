import { Component, OnInit } from '@angular/core';
import { YelpServiceClient} from '../../../services/yelp.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-yelp.api.detail',
  templateUrl: './yelp.api.detail.component.html',
  styleUrls: ['./yelp.api.detail.component.css']
})
export class YelpApiDetailComponent implements OnInit {

  yelpId: String;
  businessName: String;
  image: any;
  ratings: any;
  number: String;
  constructor( private yelpService: YelpServiceClient,
               private activatedRoute: ActivatedRoute) { }
  SearchBusinessById(id: String) {
    console.log('api details componenet');
    this.yelpService.SearchBusinessById(id)
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
          this.yelpId = params['yelpId'];
        });
    console.log('api details componenet');
    this.yelpService.SearchBusinessById(this.yelpId)
      .subscribe( (result) => {
        console.log(result);
        this.businessName = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.number = result.phone;
      });
  }
}
