import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {YelpApiTestComponent} from './components/yelp_api_test/yelp.api.test/yelp.api.test.component';
import {YelpApiDetailComponent} from './components/yelp_api_test/yelp.api.detail/yelp.api.detail.component';
import {ManagerRegisterComponent} from './components/manager/manager-register/manager-register.component';
import {ManagerDashboardComponent} from './components/manager/manager-dashboard/manager-dashboard.component';
import {ManagerOrderComponent} from './components/manager/manager-order/manager-order.component';
import {ManagerDriverListComponent} from './components/manager/manager-driver-list/manager-driver-list.component';
import {ManagerChefListComponent} from './components/manager/manager-chef-list/manager-chef-list.component';
import {DriverRegisterComponent} from './components/driver/driver-register/driver-register.component';
import {DriverOrderListComponent} from './components/driver/driver-order-list/driver-order-list.component';
import {DriverOrderDetailComponent} from './components/driver/driver-order-detail/driver-order-detail.component';
import {ChefRegisterComponent} from './components/chef/chef-register/chef-register.component';
import {ChefOrderDetailComponent} from './components/chef/chef-order-detail/chef-order-detail.component';
import {ChefOrderListComponent} from './components/chef/chef-order-list/chef-order-list.component';
import {AdminUserListComponent} from "./components/admin/admin-user-list/admin-user-list.component";
import {AdminManagerListComponent} from "./components/admin/admin-manager-list/admin-manager-list.component";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'api/yelp', component: YelpApiTestComponent},
  {path: 'api/yelp/:yelpId', component: YelpApiDetailComponent},
  {path: 'restaurant/:restaurantId/register', component: ManagerRegisterComponent},
  {path: 'restaurant/:restaurantId', component: ManagerDashboardComponent},
  {path: 'restaurant/:restaurantId/manage/order', component: ManagerOrderComponent},
  {path: 'restaurant/:restaurantId/driver', component: ManagerDriverListComponent},
  {path: 'restaurant/:restaurantId/chef', component: ManagerChefListComponent},
  {path: 'restaurant/:restaurantId/chef/register', component: ChefRegisterComponent},
  {path: 'restaurant/:restaurantId/chef/order', component: ChefOrderListComponent},
  {path: 'restaurant/:restaurantId/chef/order/:orderId', component: ChefOrderDetailComponent},
  {path: 'restaurant/:restaurantId/driver/register', component: DriverRegisterComponent},
  {path: 'restaurant/:restaurantId/driver/order', component: DriverOrderListComponent},
  {path: 'restaurant/:restaurantId/driver/order/:orderId', component: DriverOrderDetailComponent},
  {path: 'admin/customer', component: AdminUserListComponent},
  {path: 'admin/manager', component: AdminManagerListComponent},
  {path: 'admin/manager/:managerId', component: ManagerDashboardComponent},
  {path: 'admin/restaurant/:restaurantId/chef', component: ManagerChefListComponent},
  {path: 'admin/restaurant/:restaurantId/driver', component: ManagerDriverListComponent},
  {path: 'admin/order', component: AdminUserListComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
