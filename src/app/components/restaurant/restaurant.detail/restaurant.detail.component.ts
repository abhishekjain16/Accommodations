import { Component, OnInit } from '@angular/core';
import { RestaurantServiceClient} from '../../../services/restaurant.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';
import {MenuService} from '../../../services/menu.service.client';

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
  menu = {};

  constructor( private restaurantService: RestaurantServiceClient,
               private activatedRoute: ActivatedRoute,
               private orderService: OrderService,
               private router: Router,
               private sharedService: SharedService,
               private userService: UserService,
               private menuService: MenuService) { }

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
    this.userService.currentUser()
      .subscribe( (user) => {
        this.user = user;
        this.orderService.findOrderByRestaurantAndCustomer(this.restaurantId, this.user._id, 'cart')
          .subscribe(
            (order: any) => {
              if (order) {
                this.order = order;
              }
            });

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
    this.menuService.findMenuByRestroId(this.restaurantId)
      .subscribe( (menu) => {
        this.menu = menu;
        this.order = {
          restaurantId: this.restaurantId,
          customerId: this.user,
          deliveryCharge: this.menu['deliveryCharge'],
          minOrderLimit: this.menu['orderLimit'],
          total: this.menu['deliveryCharge']
        };
        this.orderService.createOrder(this.order, this.restaurantId)
          .subscribe(
            (order: any) => this.router.navigate(['restaurant', this.restaurantId, 'order', order._id])
          );
      });

  }
}
