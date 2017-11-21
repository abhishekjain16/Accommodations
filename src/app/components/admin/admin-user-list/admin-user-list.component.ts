import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
import {visitValue} from "@angular/compiler/src/util";


@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  role: string;
  users = [];
  path: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    // const path = this.activatedRoute.url;
    this.activatedRoute.url
      .subscribe(
        (url: any) => {
          console.log(url);
          this.path  = url[1].path;
        }
      );

    // this.userService.findUsersByRole(this.role)
    //   .subscribe(
    //     (users: any) => {
    //       this.users = users;
    //     }
    //   );

  }

}
