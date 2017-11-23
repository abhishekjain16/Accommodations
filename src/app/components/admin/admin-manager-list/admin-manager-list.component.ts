import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-admin-manager-list',
  templateUrl: './admin-manager-list.component.html',
  styleUrls: ['./admin-manager-list.component.css']
})
export class AdminManagerListComponent implements OnInit {
  role: string;
  managers = [];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    // const path = this.activatedRoute.url;
    // this.activatedRoute.url
    //   .subscribe(
    //     (url: any) => {
    //       // console.log(url);
    //       // this.path  = url[1].path;
    //     }
    //   );

    this.userService.findUsersByRole('Manager')
      .subscribe(
        (managers: any) => {
          this.managers = managers;
        }
      );

  }

}
