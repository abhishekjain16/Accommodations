import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class RestaurantServiceClient {
  searchRestaurantByName(name: String, location: String) {
    const url = environment.baseUrl + '/api/yelp/accesstoken?title=' + name + '&location=' + location;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  SearchBusinessById(id: String) {
    const url = environment.baseUrl + '/api/yelp/' + id;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  getReviewsById(id: String) {
    const url = environment.baseUrl + '/api/yelp/' + id + '/reviews';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  constructor(private  http: Http) {}
}
