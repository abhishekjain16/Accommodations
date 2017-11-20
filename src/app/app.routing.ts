import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {YelpApiTestComponent} from './components/yelp_api_test/yelp.api.test/yelp.api.test.component';
import {YelpApiDetailComponent} from './components/yelp_api_test/yelp.api.detail/yelp.api.detail.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'api/yelp', component: YelpApiTestComponent},
  {path: 'api/yelp/:yelpId', component: YelpApiDetailComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
