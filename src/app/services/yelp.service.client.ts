import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class YelpServiceClient {
  searchRestaurantByName(name: String, location: String) {
    const url = environment.baseUrl + '/api/yelp/accesstoken?title=' + name + '&location=' + location;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  SearchBusinessById(id: String) {
    alert('inside yelp client by id');
    const url = environment.baseUrl + '/api/yelp/' + id;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  constructor(private  http: Http) {}
}
