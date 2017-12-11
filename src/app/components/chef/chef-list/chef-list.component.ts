import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {
  restaurantId: string;
  chefs: [{}];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.restaurantId = params['restaurantId'];
        }
      );

    this.userService.findChefsByRestaurantId(this.restaurantId)
      .subscribe(
        (chefs: any) => {
          this.chefs = chefs;
        }
      );
  }


}
