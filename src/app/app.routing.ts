import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RestaurantSearchComponent} from './components/restaurant/restaurant.search/restaurant.search.component';
import {RestaurantDetailComponent} from './components/restaurant/restaurant.detail/restaurant.detail.component';
import {ManagerRegisterComponent} from './components/manager/manager-register/manager-register.component';
import {ManagerDashboardComponent} from './components/manager/manager-dashboard/manager-dashboard.component';
import {ManagerOrderComponent} from './components/manager/manager-order/manager-order.component';
import {DriverRegisterComponent} from './components/driver/driver-register/driver-register.component';
import {DriverOrderListComponent} from './components/driver/driver-order-list/driver-order-list.component';
import {DriverOrderDetailComponent} from './components/driver/driver-order-detail/driver-order-detail.component';
import {DriverListComponent} from './components/driver/driver-list/driver-list.component';
import {ChefRegisterComponent} from './components/chef/chef-register/chef-register.component';
import {ChefOrderDetailComponent} from './components/chef/chef-order-detail/chef-order-detail.component';
import {ChefOrderListComponent} from './components/chef/chef-order-list/chef-order-list.component';
import {ChefListComponent} from './components/chef/chef-list/chef-list.component';
import {AdminUserListComponent} from './components/admin/admin-user-list/admin-user-list.component';
import {AdminManagerListComponent} from './components/admin/admin-manager-list/admin-manager-list.component';
import {AdminOrderListComponent} from './components/admin/admin-order-list/admin-order-list.component';
import { AdminManagerDetailComponent } from './components/admin/admin-manager-detail/admin-manager-detail.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {AuthGuard} from './services/auth-guard.service';
import {RestaurantListComponent} from './components/restaurant/restaurant.list/restaurant.list.component';
import {OrderDetailComponent} from './components/order/order-detail/order-detail.component';
import {OrderCheckoutComponent} from './components/order/order-checkout/order-checkout.component';
import {OrderCompleteComponent} from './components/order/order-complete/order-complete.component';
import {MenuListComponent} from './components/menu/menu-list/menu-list.component';
import {MenuNewComponent} from './components/menu/menu-new/menu-new.component';
import {MenuEditComponent} from './components/menu/menu-edit/menu-edit.component';
import {MenuItemNewComponent} from './components/menuItem/menu-item-new/menu-item-new.component';
import {MenuItemListComponent} from './components/menuItem/menu-item-list/menu-item-list.component';
import {MenuItemEditComponent} from './components/menuItem/menu-item-edit/menu-item-edit.component';
import {ManagerOrderDetailsComponent} from './components/manager/manager-order-details/manager-order-details.component';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {UserOrderListComponent} from './components/user/user-order-list/user-order-list.component';
import {AdminUserEditComponent} from "./components/admin/admin-user-edit/admin-user-edit.component";
import {ChefEditComponent} from "./components/chef/chef-edit/chef-edit.component";
import {DriverEditComponent} from "./components/driver/driver-edit/driver-edit.component";

const APP_ROUTES: Routes = [
  {path: '', component : RestaurantSearchComponent},
  {path: 'test', component: TestComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: RestaurantListComponent},
  {path: 'restaurant/:restaurantId', component: RestaurantDetailComponent},
  {path: 'orders', component: UserOrderListComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/:restaurantId/order/:orderId', component: OrderDetailComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/:restaurantId/order/:orderId/checkout', component: OrderCheckoutComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/:restaurantId/order/:orderId/complete', component: OrderCompleteComponent},
  {path: 'restaurant/:restaurantId/register', component: ManagerRegisterComponent},
  {path: 'manager/restaurant/:restaurantId', component: ManagerDashboardComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/order', component: ManagerOrderComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/order/:orderId', component: ManagerOrderDetailsComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/driver', component: DriverListComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/chef', component: ChefListComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu', component: MenuListComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu/new', component: MenuNewComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu/:menuId', component: MenuEditComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/new', component: MenuItemNewComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem', component: MenuItemListComponent, canActivate: [AuthGuard]},
  {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/:menuItemId', component: MenuItemEditComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/:restaurantId/chef/register', component: ChefRegisterComponent},
  {path: 'chef/restaurant/:restaurantId/order', component: ChefOrderListComponent, canActivate: [AuthGuard]},
  {path: 'chef/restaurant/:restaurantId/order/:orderId', component: ChefOrderDetailComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/:restaurantId/driver/register', component: DriverRegisterComponent},
  {path: 'driver/restaurant/:restaurantId/order', component: DriverOrderListComponent, canActivate: [AuthGuard]},
  {path: 'driver/restaurant/:restaurantId/order/:orderId', component: DriverOrderDetailComponent, canActivate: [AuthGuard]},
  {path: 'admin/customer', component: AdminUserListComponent, canActivate: [AuthGuard]},
  {path: 'admin/customer/:userId', component: AdminUserEditComponent, canActivate:[AuthGuard]},
  {path: 'admin/manager', component: AdminManagerListComponent, canActivate: [AuthGuard]},
  {path: 'admin/manager/:managerId', component: AdminManagerDetailComponent, canActivate: [AuthGuard]},
  {path: 'admin/restaurant/:restaurantId/chef', component: ChefListComponent, canActivate: [AuthGuard]},
  {path: 'admin/restaurant/:restaurantId/chef/:chefId', component: ChefEditComponent, canActivate: [AuthGuard]},
  {path: 'admin/restaurant/:restaurantId/driver/:driverId', component: DriverEditComponent, canActivate: [AuthGuard]},
  {path: 'admin/restaurant/:restaurantId/order', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'admin/profile', component: AdminDashboardComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
