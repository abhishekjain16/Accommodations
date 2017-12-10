import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUserByCredentials' : this.findUserByCredentials,
    'findManagerByRestaurantId' : this.findManagerByRestaurantId,
    'findUsersByRole': this.findUsersByRole,
    'findChefsByRestaurantId': this.findChefsByRestaurantId,
    'findDriversByRestaurantId': this.findDriversByRestaurantId,
    'currentUser': this.currentUser
  };

  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/user/', user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findManagerByRestaurantId(restaurantId: string) {
    return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/manager')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findChefsByRestaurantId(restaurantId: string) {
    return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/chef')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  findDriversByRestaurantId(restaurantId: string) {
    return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/driver')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(userId: string, user: any) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUsersByRole(role: string) {
    return this.http.get(this.baseUrl + '/api/user?role=' + role)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  login(username: string, password: string) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  currentUser() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            return user;
          } else {
            return false;
          }
        }
      );
  }
}
