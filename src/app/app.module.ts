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
import {MenuService} from './services/menu.service.client';
import {LoginComponent} from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { RestaurantSearchComponent } from './components/restaurant/restaurant.search/restaurant.search.component';
import { RestaurantDetailComponent } from './components/restaurant/restaurant.detail/restaurant.detail.component';
import { RestaurantServiceClient } from './services/restaurant.service.client';
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
import { RestaurantListComponent } from './components/restaurant/restaurant.list/restaurant.list.component';
import { RatingModule} from 'ng2-rating';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NguiMapModule} from '@ngui/map';
import {OrderDetailComponent} from './components/order/order-detail/order-detail.component';
import {OrderService} from './services/order.service.client';
import { OrderCheckoutComponent } from './components/order/order-checkout/order-checkout.component';
import { MenuNewComponent } from './components/menu/menu-new/menu-new.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuEditComponent } from './components/menu/menu-edit/menu-edit.component';
import { MenuItemService } from './services/menuItem.service.client';
import { MenuItemListComponent } from './components/menuItem/menu-item-list/menu-item-list.component';
import { MenuItemEditComponent } from './components/menuItem/menu-item-edit/menu-item-edit.component';
import { MenuItemNewComponent } from './components/menuItem/menu-item-new/menu-item-new.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';
import { ManagerOrderDetailsComponent } from './components/manager/manager-order-details/manager-order-details.component';
import { OrderItemService} from './services/orderItem.service.client';
import { OrderCompleteComponent } from './components/order/order-complete/order-complete.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    RestaurantSearchComponent,
    RestaurantDetailComponent,
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
    ChefListComponent,
    RestaurantListComponent,
    OrderDetailComponent,
    OrderCheckoutComponent,
    MenuNewComponent,
    MenuListComponent,
    MenuEditComponent,
    MenuItemListComponent,
    MenuItemEditComponent,
    MenuItemNewComponent,
    OrderListComponent,
    OrderEditComponent,
    ManagerOrderDetailsComponent,
    OrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule,
    RatingModule,
    Ng2CarouselamosModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB9yDXupcPoh_os3o48_KeUYys6hfxTsAM'})
  ],
  // Client Side services here
  providers: [ TestService, UserService, RestaurantServiceClient, SharedService, AuthGuard, MenuService, MenuItemService, OrderService, OrderItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
