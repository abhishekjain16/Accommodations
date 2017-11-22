webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_yelp_api_test_yelp_api_test_yelp_api_test_component__ = __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_yelp_api_test_yelp_api_detail_yelp_api_detail_component__ = __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_yelp_service_client__ = __webpack_require__("../../../../../src/app/services/yelp.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_manager_manager_register_manager_register_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_manager_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_manager_manager_order_manager_order_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manager_manager_driver_list_manager_driver_list_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_manager_manager_chef_list_manager_chef_list_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_driver_driver_register_driver_register_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_chef_chef_register_chef_register_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_chef_chef_order_detail_chef_order_detail_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_driver_driver_order_detail_driver_order_detail_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_driver_driver_order_list_driver_order_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_chef_chef_order_list_chef_order_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_admin_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_admin_manager_list_admin_manager_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_yelp_api_test_yelp_api_test_yelp_api_test_component__["a" /* YelpApiTestComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_yelp_api_test_yelp_api_detail_yelp_api_detail_component__["a" /* YelpApiDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_manager_manager_register_manager_register_component__["a" /* ManagerRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_manager_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_manager_manager_order_manager_order_component__["a" /* ManagerOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_manager_manager_driver_list_manager_driver_list_component__["a" /* ManagerDriverListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_manager_manager_chef_list_manager_chef_list_component__["a" /* ManagerChefListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_driver_driver_register_driver_register_component__["a" /* DriverRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_chef_chef_register_chef_register_component__["a" /* ChefRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_chef_chef_order_detail_chef_order_detail_component__["a" /* ChefOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_driver_driver_order_detail_driver_order_detail_component__["a" /* DriverOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_driver_driver_order_list_driver_order_list_component__["a" /* DriverOrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_chef_chef_order_list_chef_order_list_component__["a" /* ChefOrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_admin_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_admin_admin_manager_list_admin_manager_list_component__["a" /* AdminManagerListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__services_yelp_service_client__["a" /* YelpServiceClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_yelp_api_test_yelp_api_test_yelp_api_test_component__ = __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_yelp_api_test_yelp_api_detail_yelp_api_detail_component__ = __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_register_manager_register_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_manager_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_manager_manager_order_manager_order_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_manager_manager_driver_list_manager_driver_list_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_manager_manager_chef_list_manager_chef_list_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_driver_driver_register_driver_register_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_driver_driver_order_list_driver_order_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_driver_driver_order_detail_driver_order_detail_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_chef_chef_register_chef_register_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_chef_chef_order_detail_chef_order_detail_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_chef_chef_order_list_chef_order_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_manager_list_admin_manager_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.ts");





















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'api/yelp', component: __WEBPACK_IMPORTED_MODULE_6__components_yelp_api_test_yelp_api_test_yelp_api_test_component__["a" /* YelpApiTestComponent */] },
    { path: 'api/yelp/:yelpId', component: __WEBPACK_IMPORTED_MODULE_7__components_yelp_api_test_yelp_api_detail_yelp_api_detail_component__["a" /* YelpApiDetailComponent */] },
    { path: 'restaurant/:restaurantId/register', component: __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_register_manager_register_component__["a" /* ManagerRegisterComponent */] },
    { path: 'restaurant/:restaurantId', component: __WEBPACK_IMPORTED_MODULE_9__components_manager_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */] },
    { path: 'restaurant/:restaurantId/manage/order', component: __WEBPACK_IMPORTED_MODULE_10__components_manager_manager_order_manager_order_component__["a" /* ManagerOrderComponent */] },
    { path: 'restaurant/:restaurantId/driver', component: __WEBPACK_IMPORTED_MODULE_11__components_manager_manager_driver_list_manager_driver_list_component__["a" /* ManagerDriverListComponent */] },
    { path: 'restaurant/:restaurantId/chef', component: __WEBPACK_IMPORTED_MODULE_12__components_manager_manager_chef_list_manager_chef_list_component__["a" /* ManagerChefListComponent */] },
    { path: 'restaurant/:restaurantId/chef/register', component: __WEBPACK_IMPORTED_MODULE_16__components_chef_chef_register_chef_register_component__["a" /* ChefRegisterComponent */] },
    { path: 'restaurant/:restaurantId/chef/order', component: __WEBPACK_IMPORTED_MODULE_18__components_chef_chef_order_list_chef_order_list_component__["a" /* ChefOrderListComponent */] },
    { path: 'restaurant/:restaurantId/chef/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_17__components_chef_chef_order_detail_chef_order_detail_component__["a" /* ChefOrderDetailComponent */] },
    { path: 'restaurant/:restaurantId/driver/register', component: __WEBPACK_IMPORTED_MODULE_13__components_driver_driver_register_driver_register_component__["a" /* DriverRegisterComponent */] },
    { path: 'restaurant/:restaurantId/driver/order', component: __WEBPACK_IMPORTED_MODULE_14__components_driver_driver_order_list_driver_order_list_component__["a" /* DriverOrderListComponent */] },
    { path: 'restaurant/:restaurantId/driver/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_15__components_driver_driver_order_detail_driver_order_detail_component__["a" /* DriverOrderDetailComponent */] },
    { path: 'admin/customer', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */] },
    { path: 'admin/manager', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_manager_list_admin_manager_list_component__["a" /* AdminManagerListComponent */] },
    { path: 'admin/manager/:managerId', component: __WEBPACK_IMPORTED_MODULE_9__components_manager_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */] },
    { path: 'admin/restaurant/:restaurantId/chef', component: __WEBPACK_IMPORTED_MODULE_12__components_manager_manager_chef_list_manager_chef_list_component__["a" /* ManagerChefListComponent */] },
    { path: 'admin/restaurant/:restaurantId/driver', component: __WEBPACK_IMPORTED_MODULE_11__components_manager_manager_driver_list_manager_driver_list_component__["a" /* ManagerDriverListComponent */] },
    { path: 'admin/order', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n    <li role=\"presentation\" class=\"active\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/order']\">Orders</a></li>\n  </ul>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Email\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          Phone\n        </div>\n        <div class=\"col-xs-3\">\n          Restaurant\n        </div>\n        <div class=\"col-xs-3 col-md-2\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let manager of managers\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          <a [routerLink]=\"['/admin', 'manager', manager._id]\">\n            {{manager.firstName}} {{manager.lastName}}\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{manager.email}}\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          {{manager.phone}}\n        </div>\n        <div class=\"col-xs-3\">\n          {{manager.restaurantId}}\n        </div>\n        <div class=\"col-xs-3 col-md-1\">\n          <div *ngIf=\"manager.active; else inactive\" class=\"alert alert-success\">\n            <strong>Active</strong>\n          </div>\n          <ng-template #inactive>\n            <div class=\"alert alert-danger\">\n              <strong>Inactive</strong>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminManagerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminManagerListComponent = (function () {
    function AdminManagerListComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.managers = [];
    }
    AdminManagerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const path = this.activatedRoute.url;
        this.activatedRoute.url
            .subscribe(function (url) {
            // console.log(url);
            // this.path  = url[1].path;
        });
        this.userService.findUsersByRole('Manager')
            .subscribe(function (managers) {
            _this.managers = managers;
        });
    };
    return AdminManagerListComponent;
}());
AdminManagerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-manager-list',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AdminManagerListComponent);

var _a, _b;
//# sourceMappingURL=admin-manager-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\" class=\"active\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/order']\">Orders</a></li>\n  </ul>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Email\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Username\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let user of users\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          {{user.firstName}} {{user.lastName}}\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{user.email}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{user.username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/admin', 'customer', user._id]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUserListComponent = (function () {
    function AdminUserListComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.users = [];
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const path = this.activatedRoute.url;
        this.activatedRoute.url
            .subscribe(function (url) {
            // console.log(url);
            // this.path  = url[1].path;
        });
        this.userService.findUsersByRole("Customer")
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AdminUserListComponent);

var _a, _b;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chef-order-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefOrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChefOrderDetailComponent = (function () {
    function ChefOrderDetailComponent() {
    }
    ChefOrderDetailComponent.prototype.ngOnInit = function () {
    };
    return ChefOrderDetailComponent;
}());
ChefOrderDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chef-order-detail',
        template: __webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChefOrderDetailComponent);

//# sourceMappingURL=chef-order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chef-order-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefOrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChefOrderListComponent = (function () {
    function ChefOrderListComponent() {
    }
    ChefOrderListComponent.prototype.ngOnInit = function () {
    };
    return ChefOrderListComponent;
}());
ChefOrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chef-order-list',
        template: __webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChefOrderListComponent);

//# sourceMappingURL=chef-order-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-register/chef-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-register/chef-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h4>Thanks for registering as a Chef for Restaurant {{restaurantName}}</h4>\n    <p>You would be able to access the system when your manager approves your request.</p>\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-register/chef-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChefRegisterComponent = (function () {
    function ChefRegisterComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.errorMsg = '';
        this.success = false;
    }
    ChefRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.restaurantName = 'ABC';
        });
    };
    ChefRegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.lastName = this.registerForm.value.lastName;
        this.firstName = this.registerForm.value.firstName;
        this.email = this.registerForm.value.email;
        this.phone = this.registerForm.value.phone;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: 'Chef',
            restaurantId: this.restaurantId
        };
        this.userService.createUser(user)
            .subscribe(function (newUser) {
            _this.errorFlag = false;
            _this.success = true;
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return ChefRegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ChefRegisterComponent.prototype, "registerForm", void 0);
ChefRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chef-register',
        template: __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ChefRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=chef-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  driver-order-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverOrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverOrderDetailComponent = (function () {
    function DriverOrderDetailComponent() {
    }
    DriverOrderDetailComponent.prototype.ngOnInit = function () {
    };
    return DriverOrderDetailComponent;
}());
DriverOrderDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-order-detail',
        template: __webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DriverOrderDetailComponent);

//# sourceMappingURL=driver-order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  driver-order-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverOrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverOrderListComponent = (function () {
    function DriverOrderListComponent() {
    }
    DriverOrderListComponent.prototype.ngOnInit = function () {
    };
    return DriverOrderListComponent;
}());
DriverOrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-order-list',
        template: __webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DriverOrderListComponent);

//# sourceMappingURL=driver-order-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-register/driver-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-register/driver-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h4>Thanks for registering as a Driver for Restaurant {{restaurantName}}</h4>\n    <p>You would be able to access the system when your manager approves your request.</p>\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-register/driver-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverRegisterComponent = (function () {
    function DriverRegisterComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.errorMsg = '';
        this.success = false;
    }
    DriverRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.restaurantName = 'ABC';
        });
    };
    DriverRegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.lastName = this.registerForm.value.lastName;
        this.firstName = this.registerForm.value.firstName;
        this.email = this.registerForm.value.email;
        this.phone = this.registerForm.value.phone;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: 'Driver',
            restaurantId: this.restaurantId
        };
        this.userService.createUser(user)
            .subscribe(function (newUser) {
            _this.errorFlag = false;
            _this.success = true;
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return DriverRegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], DriverRegisterComponent.prototype, "registerForm", void 0);
DriverRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-register',
        template: __webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], DriverRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=driver-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    FoodSpot\n  </h1>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n    <br>\n    <a [routerLink]=\"['api/yelp']\">POC</a>\n    <br>\n    <a [routerLink]=\"['login']\">Project</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-chef-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerChefListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerChefListComponent = (function () {
    function ManagerChefListComponent() {
    }
    ManagerChefListComponent.prototype.ngOnInit = function () {
    };
    return ManagerChefListComponent;
}());
ManagerChefListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-chef-list',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-chef-list/manager-chef-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagerChefListComponent);

//# sourceMappingURL=manager-chef-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"this.restaurantId;else header\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/restaurant/', manager.restaurantId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/restaurant/', manager.restaurantId, 'order']\" class=\"btn\">\n          Orders\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/restaurant/', manager.restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/restaurant/', manager.restaurantId, 'driver']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #header>\n    <header>\n      <a [routerLink]=\"['/admin/manager']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    </header>\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n  <h3 class=\"text-center\">Edit Manager of Restaurant {{manager.restaurantId}}</h3>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"container-fluid profile clearfix\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             [(ngModel)]=\"username\"\n             class=\"form-control\" />\n\n      <label for=\"email\" class=\"label\">Email</label>\n      <input type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             [(ngModel)]=\"email\"\n             class=\"form-control\" />\n\n      <label for=\"first_name\" class=\"label\">First Name</label>\n      <input type=\"text\"\n             id=\"first_name\"\n             name=\"first_name\"\n             [(ngModel)]=\"firstName\"\n             class=\"form-control\" />\n\n      <label for=\"last_name\" class=\"label\">Last Name</label>\n      <input type=\"text\"\n             id=\"last_name\"\n             name=\"last_name\"\n             [(ngModel)]=\"lastName\"\n             class=\"form-control\" />\n\n      <label for=\"phone\" class=\"label\">Phone</label>\n      <input type=\"text\"\n             id=\"phone\"\n             name=\"phone\"\n             [(ngModel)]=\"phone\"\n             class=\"form-control\" />\n      <div *ngIf=\"!this.restaurantId\">\n        <label for=\"active\" class=\"label\">Active?</label>\n        <input type=\"checkbox\"\n               id=\"active\"\n               name=\"active\"\n               [(ngModel)]=\"active\">\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary form-control\"\n              [disabled]=\"!f.valid\">Update Profile</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerDashboardComponent = (function () {
    function ManagerDashboardComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.manager = {};
    }
    ManagerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.managerId = params['managerId'];
        });
        if (this.restaurantId) {
            this.userService.findManagerByRestaurantId(this.restaurantId)
                .subscribe(function (manager) {
                _this.manager = manager;
                _this.managerId = manager._id;
                _this.username = manager['username'];
                _this.phone = manager['phone'];
                _this.email = manager['email'];
                _this.firstName = manager['firstName'];
                _this.lastName = manager['lastName'];
            });
        }
        else {
            this.userService.findUserById(this.managerId)
                .subscribe(function (manager) {
                _this.manager = manager;
                _this.managerId = manager._id;
                _this.username = manager['username'];
                _this.phone = manager['phone'];
                _this.email = manager['email'];
                _this.firstName = manager['firstName'];
                _this.lastName = manager['lastName'];
                _this.active = manager['active'];
            });
        }
    };
    ManagerDashboardComponent.prototype.update = function () {
        var _this = this;
        this.manager['username'] = this.profileForm.value.username;
        this.manager['email'] = this.profileForm.value.email;
        this.manager['firstName'] = this.profileForm.value.firstName;
        this.manager['lastName'] = this.profileForm.value.lastName;
        this.manager['phone'] = this.profileForm.value.phone;
        if (!this.restaurantId) {
            this.manager['active'] = this.profileForm.value.active;
        }
        this.userService.updateUser(this.managerId, this.manager)
            .subscribe(function (manager) {
            _this.manager = manager;
        }, function (error) {
        });
    };
    return ManagerDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ManagerDashboardComponent.prototype, "profileForm", void 0);
ManagerDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-dashboard',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ManagerDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=manager-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-driver-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDriverListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerDriverListComponent = (function () {
    function ManagerDriverListComponent() {
    }
    ManagerDriverListComponent.prototype.ngOnInit = function () {
    };
    return ManagerDriverListComponent;
}());
ManagerDriverListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-driver-list',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-driver-list/manager-driver-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagerDriverListComponent);

//# sourceMappingURL=manager-driver-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order/manager-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order/manager-order.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-order works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order/manager-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerOrderComponent = (function () {
    function ManagerOrderComponent() {
    }
    ManagerOrderComponent.prototype.ngOnInit = function () {
    };
    return ManagerOrderComponent;
}());
ManagerOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-order',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagerOrderComponent);

//# sourceMappingURL=manager-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-register/manager-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-register/manager-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\">\n    There is an error! Please try again later.\n  </div>\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h4>Thanks for claiming the Restaurant.</h4>\n    <p>You should be able to manage the restaurant as soon as this request is approved.</p>\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-register/manager-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerRegisterComponent = (function () {
    function ManagerRegisterComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.errorMsg = '';
        this.success = false;
    }
    ManagerRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
    };
    ManagerRegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.lastName = this.registerForm.value.lastName;
        this.firstName = this.registerForm.value.firstName;
        this.email = this.registerForm.value.email;
        this.phone = this.registerForm.value.phone;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            role: 'Manager',
            restaurantId: this.restaurantId
        };
        this.userService.createUser(user)
            .subscribe(function (newUser) {
            _this.errorFlag = false;
            _this.success = true;
        }, function (error) {
            _this.errorFlag = true;
            _this.error = error;
        });
    };
    return ManagerRegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ManagerRegisterComponent.prototype, "registerForm", void 0);
ManagerRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-register',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ManagerRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=manager-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           #password=\"ngModel\"\n           required\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <a [routerLink]= \"['/register']\" class=\"btn btn-success btn-block\">Register</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid Username/Password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['user/' + user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<header>\n  Profile\n  <button type=\"submit\"\n          class=\"pull-right white btn\"\n          [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n</header>\n<div class=\"container-fluid profile clearfix\">\n  <label for=\"username\" class=\"label\">Username</label>\n  <input type=\"text\"\n         id=\"username\"\n         name=\"username\"\n         [(ngModel)]=\"username\"\n         class=\"form-control\" />\n\n  <label for=\"email\" class=\"label\">Email</label>\n  <input type=\"email\"\n         id=\"email\"\n         name=\"email\"\n         [(ngModel)]=\"email\"\n         class=\"form-control\" />\n\n  <label for=\"first_name\" class=\"label\">First Name</label>\n  <input type=\"text\"\n         id=\"first_name\"\n         name=\"first_name\"\n         [(ngModel)]=\"first_name\"\n         class=\"form-control\" />\n\n  <label for=\"last_name\" class=\"label\">Last Name</label>\n  <input type=\"text\"\n         id=\"last_name\"\n         name=\"last_name\"\n         [(ngModel)]=\"last_name\"\n         class=\"form-control\" />\n\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"btn btn-primary btn-block\">Websites</a>\n\n  <a [routerLink]= \"['/login']\" class=\"btn btn-danger btn-block\">Logout</a>\n</div>\n</form>\n<footer>\n  <a [routerLink]= \"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.username = user['username'];
            _this.last_name = user['lastName'];
            _this.first_name = user['firstName'];
            _this.email = user['email'];
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user["username"] = this.profileForm.value.username;
        this.user["email"] = this.profileForm.value.email;
        this.user["firstName"] = this.profileForm.value.first_name;
        this.user["lastName"] = this.profileForm.value.last_name;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.username = user['username'];
            _this.last_name = user['lastName'];
            _this.first_name = user['firstName'];
            _this.email = user['email'];
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input type=\"text\"\n           name=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           required\n           #password=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter Password!\n    </span>\n\n    <input type=\"password\"\n           ngModel\n           required\n           name=\"verifyPassword\"\n           #verifyPassword=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Verify Password\" />\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please enter Verification password!\n    </span>\n\n    <input type=\"text\"\n           ngModel\n           required\n           name=\"firstName\"\n           #firstName=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"First Name\" />\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please enter First Name!\n    </span>\n\n    <input type=\"text\"\n           ngModel\n           required\n           name=\"lastName\"\n           #lastName=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Last Name\" />\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please enter Last Name!\n    </span>\n\n    <input type=\"email\"\n           ngModel\n           required\n           name=\"email\"\n           #email=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Email\" />\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter Email!\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n    <a [routerLink]= \"['/login']\"\n       class=\"btn btn-danger btn-block\">\n      Cancel\n    </a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.lastName = this.registerForm.value.lastName;
        this.firstName = this.registerForm.value.firstName;
        this.email = this.registerForm.value.email;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            active: true
        };
        this.userService.createUser(user)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['user/' + user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> {{businessName}} </h2>\n\n<img src=\"{{image}}\" />\n\n<h1> Phone number: {{number}}</h1>\n\n<h1> ratings : {{ratings}}</h1>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpApiDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__ = __webpack_require__("../../../../../src/app/services/yelp.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YelpApiDetailComponent = (function () {
    function YelpApiDetailComponent(yelpService, activatedRoute) {
        this.yelpService = yelpService;
        this.activatedRoute = activatedRoute;
    }
    YelpApiDetailComponent.prototype.SearchBusinessById = function (id) {
        var _this = this;
        console.log('api details componenet');
        this.yelpService.SearchBusinessById(id)
            .subscribe(function (result) {
            _this.businessName = result.name;
            _this.image = result.image_url;
            _this.ratings = result.rating;
        });
    };
    YelpApiDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.yelpId = params['yelpId'];
        });
        console.log('api details componenet');
        this.yelpService.SearchBusinessById(this.yelpId)
            .subscribe(function (result) {
            console.log(result);
            _this.businessName = result.name;
            _this.image = result.image_url;
            _this.ratings = result.rating;
            _this.number = result.phone;
        });
    };
    return YelpApiDetailComponent;
}());
YelpApiDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-yelp.api.detail',
        template: __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.detail/yelp.api.detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__["a" /* YelpServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__["a" /* YelpServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], YelpApiDetailComponent);

var _a, _b;
//# sourceMappingURL=yelp.api.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Yelp APT test </h1>\n<label> Restaurant Name</label>\n<input [(ngModel)]=\"restaurant\" placeholder=\"College Pizza\" class=\"form-control\">\n<input [(ngModel)]=\"location\" placeholder=\"Boston\" class=\"form-control\">\n<button (click)=\"SearchRestaurant(restaurant,location)\"\n        class=\"btn btn-primary btn-block\">Search</button>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let restaurant of restaurants\">\n    <a [routerLink]= \"['/api/yelp', restaurant.id]\">\n      {{restaurant.name}}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpApiTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__ = __webpack_require__("../../../../../src/app/services/yelp.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YelpApiTestComponent = (function () {
    function YelpApiTestComponent(yelpService) {
        this.yelpService = yelpService;
        this.restaurants = [];
    }
    YelpApiTestComponent.prototype.SearchRestaurant = function (restaurant, location) {
        var _this = this;
        this.yelpService.searchRestaurantByName(restaurant, location)
            .subscribe(function (result) {
            _this.result = result;
            _this.restaurants = result['businesses'];
        });
    };
    YelpApiTestComponent.prototype.ngOnInit = function () {
    };
    return YelpApiTestComponent;
}());
YelpApiTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-yelp.api.test',
        template: __webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/yelp_api_test/yelp.api.test/yelp.api.test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__["a" /* YelpServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_yelp_service_client__["a" /* YelpServiceClient */]) === "function" && _a || Object])
], YelpApiTestComponent);

var _a;
//# sourceMappingURL=yelp.api.test.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials,
            'findManagerByRestaurantId': this.findManagerByRestaurantId,
            'findUsersByRole': this.findUsersByRole
        };
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user/', user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findManagerByRestaurantId = function (restaurantId) {
        return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/manager')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUsersByRole = function (role) {
        return this.http.get(this.baseUrl + '/api/user?role=' + role)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/yelp.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YelpServiceClient = (function () {
    function YelpServiceClient(http) {
        this.http = http;
    }
    YelpServiceClient.prototype.searchRestaurantByName = function (name, location) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + '/api/yelp/accesstoken?title=' + name + '&location=' + location;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    YelpServiceClient.prototype.SearchBusinessById = function (id) {
        alert('inside yelp client by id');
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + '/api/yelp/' + id;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return YelpServiceClient;
}());
YelpServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], YelpServiceClient);

var _a;
//# sourceMappingURL=yelp.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://food-spot.herokuapp.com',
    baseFrontUrl: 'https://food-spot.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map