import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-restaurant.detail',
  templateUrl: './restaurant.detail.component.html',
  styleUrls: ['./restaurant.detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurantId: string;
  name: string;
  image: any;
  ratings: any;
  number: string;
  images = [];
  restaurant = {};
  positions = [];
  center: string;
  hours = [];
  days = [];
  reviews = [];
  order = {};
  user: any;

  constructor( private restaurantService: RestaurantServiceClient,
               private activatedRoute: ActivatedRoute,
               private orderService: OrderService,
               private router: Router,
               private sharedService: SharedService,
               private userService: UserService) { }

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
    this.userService.currentUser()
      .subscribe( (user) => {
        this.user = user;
      });
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

  createOrder() {
    this.order = {
      subTotal: 0,
      restaurantId: this.restaurantId,
      customerId: this.user
    };
    this.orderService.createOrder(this.order, this.restaurantId)
      .subscribe(
        (order: any) => this.router.navigate(['restaurant', this.restaurantId, 'order', order._id])
      );

  }
}
