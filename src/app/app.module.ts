import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {UserService } from './services/user.service.client';
import {LoginComponent} from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { YelpApiTestComponent } from './components/yelp_api_test/yelp.api.test/yelp.api.test.component';
import { YelpApiDetailComponent } from './components/yelp_api_test/yelp.api.detail/yelp.api.detail.component';
import { YelpServiceClient } from './services/yelp.service.client';
import { ManagerRegisterComponent } from './components/manager/manager-register/manager-register.component';
import { ManagerDashboardComponent } from './components/manager/manager-dashboard/manager-dashboard.component';
import { ManagerOrderComponent } from './components/manager/manager-order/manager-order.component';
import { DriverRegisterComponent } from './components/driver/driver-register/driver-register.component';
import { ChefRegisterComponent } from './components/chef/chef-register/chef-register.component';
import { ChefOrderDetailComponent } from './components/chef/chef-order-detail/chef-order-detail.component';
import { DriverOrderDetailComponent } from './components/driver/driver-order-detail/driver-order-detail.component';
import { DriverOrderListComponent } from './components/driver/driver-order-list/driver-order-list.component';
import { ChefOrderListComponent } from './components/chef/chef-order-list/chef-order-list.component';
import { AdminUserListComponent } from './components/admin/admin-user-list/admin-user-list.component';
import { AdminManagerListComponent } from './components/admin/admin-manager-list/admin-manager-list.component';
import { DriverListComponent } from './components/driver/driver-list/driver-list.component';
import { ChefListComponent } from './components/chef/chef-list/chef-list.component';
import {SharedService} from './services/shared.service';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    YelpApiTestComponent,
    YelpApiDetailComponent,
    ManagerRegisterComponent,
    ManagerDashboardComponent,
    ManagerOrderComponent,
    DriverRegisterComponent,
    ChefRegisterComponent,
    ChefOrderDetailComponent,
    DriverOrderDetailComponent,
    DriverOrderListComponent,
    ChefOrderListComponent,
    AdminUserListComponent,
    AdminManagerListComponent,
    DriverListComponent,
    ChefListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [ TestService, UserService, YelpServiceClient, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
