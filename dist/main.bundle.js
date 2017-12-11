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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_restaurant_restaurant_search_restaurant_search_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_restaurant_restaurant_detail_restaurant_detail_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_manager_manager_register_manager_register_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_manager_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_manager_manager_order_manager_order_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_driver_driver_register_driver_register_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_chef_chef_register_chef_register_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_chef_chef_order_detail_chef_order_detail_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_driver_driver_order_detail_driver_order_detail_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_driver_driver_order_list_driver_order_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_chef_chef_order_list_chef_order_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_admin_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_admin_admin_manager_list_admin_manager_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_driver_driver_list_driver_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-list/driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_chef_chef_list_chef_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-list/chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_restaurant_restaurant_list_restaurant_list_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_rating__ = __webpack_require__("../../../../ng2-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng2_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/@ngui/map.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_order_order_detail_order_detail_component__ = __webpack_require__("../../../../../src/app/components/order/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_order_order_checkout_order_checkout_component__ = __webpack_require__("../../../../../src/app/components/order/order-checkout/order-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_menu_menu_new_menu_new_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-new/menu-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_menu_menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_menu_menu_edit_menu_edit_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-edit/menu-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_menuItem_menu_item_list_menu_item_list_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_menuItem_menu_item_edit_menu_item_edit_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_menuItem_menu_item_new_menu_item_new_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_order_order_list_order_list_component__ = __webpack_require__("../../../../../src/app/components/order/order-list/order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_order_order_edit_order_edit_component__ = __webpack_require__("../../../../../src/app/components/order/order-edit/order-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_manager_manager_order_details_manager_order_details_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_orderItem_service_client__ = __webpack_require__("../../../../../src/app/services/orderItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_order_order_complete_order_complete_component__ = __webpack_require__("../../../../../src/app/components/order/order-complete/order-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_admin_admin_order_list_admin_order_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_admin_admin_manager_detail_admin_manager_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_user_user_order_list_user_order_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-order-list/user-order-list.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_restaurant_restaurant_search_restaurant_search_component__["a" /* RestaurantSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_restaurant_restaurant_detail_restaurant_detail_component__["a" /* RestaurantDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_manager_manager_register_manager_register_component__["a" /* ManagerRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_manager_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_manager_manager_order_manager_order_component__["a" /* ManagerOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_driver_driver_register_driver_register_component__["a" /* DriverRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_chef_chef_register_chef_register_component__["a" /* ChefRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_chef_chef_order_detail_chef_order_detail_component__["a" /* ChefOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_driver_driver_order_detail_driver_order_detail_component__["a" /* DriverOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_driver_driver_order_list_driver_order_list_component__["a" /* DriverOrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_chef_chef_order_list_chef_order_list_component__["a" /* ChefOrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_admin_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_admin_admin_manager_list_admin_manager_list_component__["a" /* AdminManagerListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_driver_driver_list_driver_list_component__["a" /* DriverListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_chef_chef_list_chef_list_component__["a" /* ChefListComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_restaurant_restaurant_list_restaurant_list_component__["a" /* RestaurantListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_order_order_detail_order_detail_component__["a" /* OrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_order_order_checkout_order_checkout_component__["a" /* OrderCheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_menu_menu_new_menu_new_component__["a" /* MenuNewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_menu_menu_list_menu_list_component__["a" /* MenuListComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_menu_menu_edit_menu_edit_component__["a" /* MenuEditComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_menuItem_menu_item_list_menu_item_list_component__["a" /* MenuItemListComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_menuItem_menu_item_edit_menu_item_edit_component__["a" /* MenuItemEditComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_menuItem_menu_item_new_menu_item_new_component__["a" /* MenuItemNewComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_order_order_list_order_list_component__["a" /* OrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_order_order_edit_order_edit_component__["a" /* OrderEditComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_manager_manager_order_details_manager_order_details_component__["a" /* ManagerOrderDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_order_order_complete_order_complete_component__["a" /* OrderCompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_admin_admin_order_list_admin_order_list_component__["a" /* AdminOrderListComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_54__components_admin_admin_manager_detail_admin_manager_detail_component__["a" /* AdminManagerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_user_user_order_list_user_order_list_component__["a" /* UserOrderListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_34_ng2_rating__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_35_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
            __WEBPACK_IMPORTED_MODULE_36__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB9yDXupcPoh_os3o48_KeUYys6hfxTsAM' })
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__services_restaurant_service_client__["a" /* RestaurantServiceClient */], __WEBPACK_IMPORTED_MODULE_31__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__services_menu_service_client__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_43__services_menuItem_service_client__["a" /* MenuItemService */], __WEBPACK_IMPORTED_MODULE_38__services_order_service_client__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_50__services_orderItem_service_client__["a" /* OrderItemService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_restaurant_restaurant_search_restaurant_search_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_restaurant_restaurant_detail_restaurant_detail_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_manager_manager_register_manager_register_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_manager_manager_order_manager_order_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_driver_driver_register_driver_register_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-register/driver-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_driver_driver_order_list_driver_order_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-list/driver-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_driver_driver_order_detail_driver_order_detail_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-order-detail/driver-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_driver_driver_list_driver_list_component__ = __webpack_require__("../../../../../src/app/components/driver/driver-list/driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_chef_chef_register_chef_register_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_chef_chef_order_detail_chef_order_detail_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-detail/chef-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_chef_chef_order_list_chef_order_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-order-list/chef-order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_chef_chef_list_chef_list_component__ = __webpack_require__("../../../../../src/app/components/chef/chef-list/chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_user_list_admin_user_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_manager_list_admin_manager_list_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_manager_detail_admin_manager_detail_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_restaurant_restaurant_list_restaurant_list_component__ = __webpack_require__("../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_order_order_detail_order_detail_component__ = __webpack_require__("../../../../../src/app/components/order/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_order_order_checkout_order_checkout_component__ = __webpack_require__("../../../../../src/app/components/order/order-checkout/order-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_order_order_complete_order_complete_component__ = __webpack_require__("../../../../../src/app/components/order/order-complete/order-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_menu_menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_menu_menu_new_menu_new_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-new/menu-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_menu_menu_edit_menu_edit_component__ = __webpack_require__("../../../../../src/app/components/menu/menu-edit/menu-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_menuItem_menu_item_new_menu_item_new_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_menuItem_menu_item_list_menu_item_list_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_menuItem_menu_item_edit_menu_item_edit_component__ = __webpack_require__("../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_manager_manager_order_details_manager_order_details_component__ = __webpack_require__("../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_order_order_list_order_list_component__ = __webpack_require__("../../../../../src/app/components/order/order-list/order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_user_user_order_list_user_order_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-order-list/user-order-list.component.ts");




































var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_restaurant_restaurant_search_restaurant_search_component__["a" /* RestaurantSearchComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_23__components_restaurant_restaurant_list_restaurant_list_component__["a" /* RestaurantListComponent */] },
    { path: 'restaurant/:restaurantId', component: __WEBPACK_IMPORTED_MODULE_6__components_restaurant_restaurant_detail_restaurant_detail_component__["a" /* RestaurantDetailComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_35__components_user_user_order_list_user_order_list_component__["a" /* UserOrderListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'restaurant/:restaurantId/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_24__components_order_order_detail_order_detail_component__["a" /* OrderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'restaurant/:restaurantId/order/:orderId/checkout', component: __WEBPACK_IMPORTED_MODULE_25__components_order_order_checkout_order_checkout_component__["a" /* OrderCheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'restaurant/:restaurantId/order/:orderId/complete', component: __WEBPACK_IMPORTED_MODULE_26__components_order_order_complete_order_complete_component__["a" /* OrderCompleteComponent */] },
    { path: 'restaurant/:restaurantId/register', component: __WEBPACK_IMPORTED_MODULE_7__components_manager_manager_register_manager_register_component__["a" /* ManagerRegisterComponent */] },
    { path: 'manager/restaurant/:restaurantId', component: __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/order', component: __WEBPACK_IMPORTED_MODULE_9__components_manager_manager_order_manager_order_component__["a" /* ManagerOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_33__components_manager_manager_order_details_manager_order_details_component__["a" /* ManagerOrderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/driver', component: __WEBPACK_IMPORTED_MODULE_13__components_driver_driver_list_driver_list_component__["a" /* DriverListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/chef', component: __WEBPACK_IMPORTED_MODULE_17__components_chef_chef_list_chef_list_component__["a" /* ChefListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu', component: __WEBPACK_IMPORTED_MODULE_27__components_menu_menu_list_menu_list_component__["a" /* MenuListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu/new', component: __WEBPACK_IMPORTED_MODULE_28__components_menu_menu_new_menu_new_component__["a" /* MenuNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu/:menuId', component: __WEBPACK_IMPORTED_MODULE_29__components_menu_menu_edit_menu_edit_component__["a" /* MenuEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/new', component: __WEBPACK_IMPORTED_MODULE_30__components_menuItem_menu_item_new_menu_item_new_component__["a" /* MenuItemNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem', component: __WEBPACK_IMPORTED_MODULE_31__components_menuItem_menu_item_list_menu_item_list_component__["a" /* MenuItemListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/:menuItemId', component: __WEBPACK_IMPORTED_MODULE_32__components_menuItem_menu_item_edit_menu_item_edit_component__["a" /* MenuItemEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'restaurant/:restaurantId/chef/register', component: __WEBPACK_IMPORTED_MODULE_14__components_chef_chef_register_chef_register_component__["a" /* ChefRegisterComponent */] },
    { path: 'chef/restaurant/:restaurantId/order', component: __WEBPACK_IMPORTED_MODULE_16__components_chef_chef_order_list_chef_order_list_component__["a" /* ChefOrderListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'chef/restaurant/:restaurantId/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_15__components_chef_chef_order_detail_chef_order_detail_component__["a" /* ChefOrderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'restaurant/:restaurantId/driver/register', component: __WEBPACK_IMPORTED_MODULE_10__components_driver_driver_register_driver_register_component__["a" /* DriverRegisterComponent */] },
    { path: 'driver/restaurant/:restaurantId/order', component: __WEBPACK_IMPORTED_MODULE_11__components_driver_driver_order_list_driver_order_list_component__["a" /* DriverOrderListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'driver/restaurant/:restaurantId/order/:orderId', component: __WEBPACK_IMPORTED_MODULE_12__components_driver_driver_order_detail_driver_order_detail_component__["a" /* DriverOrderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/customer', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_user_list_admin_user_list_component__["a" /* AdminUserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/manager', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_manager_list_admin_manager_list_component__["a" /* AdminManagerListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/manager/:managerId', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_manager_detail_admin_manager_detail_component__["a" /* AdminManagerDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/restaurant/:restaurantId/chef', component: __WEBPACK_IMPORTED_MODULE_17__components_chef_chef_list_chef_list_component__["a" /* ChefListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/restaurant/:restaurantId/driver', component: __WEBPACK_IMPORTED_MODULE_13__components_driver_driver_list_driver_list_component__["a" /* DriverListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/restaurant/:restaurantId/order', component: __WEBPACK_IMPORTED_MODULE_34__components_order_order_list_order_list_component__["a" /* OrderListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin/profile', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n    <li role=\"presentation\" class=\"active\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n  </ul>\n\n  <div class=\"text-center text-success\">\n    {{message}}\n  </div>\n\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"container-fluid profile clearfix\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             [(ngModel)]=\"username\"\n             class=\"form-control\" />\n\n      <label for=\"email\" class=\"label\">Email</label>\n      <input type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             [(ngModel)]=\"email\"\n             class=\"form-control\" />\n\n      <label for=\"first_name\" class=\"label\">First Name</label>\n      <input type=\"text\"\n             id=\"first_name\"\n             name=\"first_name\"\n             [(ngModel)]=\"firstName\"\n             class=\"form-control\" />\n\n      <label for=\"last_name\" class=\"label\">Last Name</label>\n      <input type=\"text\"\n             id=\"last_name\"\n             name=\"last_name\"\n             [(ngModel)]=\"lastName\"\n             class=\"form-control\" />\n\n      <label for=\"phone\" class=\"label\">Phone</label>\n      <input type=\"text\"\n             id=\"phone\"\n             name=\"phone\"\n             [(ngModel)]=\"phone\"\n             class=\"form-control\" />\n      <button type=\"submit\"\n              class=\"btn btn-primary form-control\"\n              [disabled]=\"!f.valid\">Update Profile</button>\n      <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">Logout</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        if (this.user && this.user['role'] === 'Admin') {
            this.username = this.user['username'];
            this.firstName = this.user['firstName'];
            this.lastName = this.user['lastName'];
            this.email = this.user['email'];
            this.phone = this.user['phone'];
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AdminDashboardComponent.prototype.update = function () {
        var _this = this;
        this.user['username'] = this.profileForm.value.username;
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        this.user['phone'] = this.profileForm.value.phone;
        this.userService.updateUser(this.user['_id'], this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.message = "Profile Updated!";
        }, function (error) {
        });
    };
    AdminDashboardComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return AdminDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], AdminDashboardComponent.prototype, "profileForm", void 0);
AdminDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], AdminDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n    <li role=\"presentation\" class=\"active\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n  </ul>\n\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\" class=\"active\">\n      <a [routerLink]=\"['/admin/manager/', manager._id]\" class=\"btn\">\n        Manager's Profile\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'driver']\" class=\"btn\">\n        View Drivers\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'chef']\" class=\"btn\">\n        View Chefs\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'order']\" class=\"btn\">\n        View Orders\n      </a>\n    </li>\n  </ul>\n  <h3 class=\"text-center\">Edit Manager of Restaurant {{manager.restaurantId}}</h3>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"container-fluid profile clearfix\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             [(ngModel)]=\"username\"\n             class=\"form-control\" />\n\n      <label for=\"email\" class=\"label\">Email</label>\n      <input type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             [(ngModel)]=\"email\"\n             class=\"form-control\" />\n\n      <label for=\"first_name\" class=\"label\">First Name</label>\n      <input type=\"text\"\n             id=\"first_name\"\n             name=\"first_name\"\n             [(ngModel)]=\"firstName\"\n             class=\"form-control\" />\n\n      <label for=\"last_name\" class=\"label\">Last Name</label>\n      <input type=\"text\"\n             id=\"last_name\"\n             name=\"last_name\"\n             [(ngModel)]=\"lastName\"\n             class=\"form-control\" />\n\n      <label for=\"phone\" class=\"label\">Phone</label>\n      <input type=\"text\"\n             id=\"phone\"\n             name=\"phone\"\n             [(ngModel)]=\"phone\"\n             class=\"form-control\" />\n      <div *ngIf=\"!this.restaurantId\">\n        <label for=\"active\" class=\"label\">Active?</label>\n        <input type=\"checkbox\"\n               id=\"active\"\n               name=\"active\"\n               [(ngModel)]=\"active\">\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary form-control\"\n              [disabled]=\"!f.valid\">Update Profile</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminManagerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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




var AdminManagerDetailComponent = (function () {
    function AdminManagerDetailComponent(activatedRoute, userService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.manager = {};
    }
    AdminManagerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.managerId = params['managerId'];
        });
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
    };
    AdminManagerDetailComponent.prototype.update = function () {
        var _this = this;
        this.manager['username'] = this.profileForm.value.username;
        this.manager['email'] = this.profileForm.value.email;
        this.manager['firstName'] = this.profileForm.value.firstName;
        this.manager['lastName'] = this.profileForm.value.lastName;
        this.manager['phone'] = this.profileForm.value.phone;
        this.manager['active'] = this.profileForm.value.active;
        this.userService.updateUser(this.managerId, this.manager)
            .subscribe(function (manager) {
            _this.manager = manager;
        }, function (error) {
        });
    };
    return AdminManagerDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], AdminManagerDetailComponent.prototype, "profileForm", void 0);
AdminManagerDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-manager-detail',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-manager-detail/admin-manager-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AdminManagerDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-manager-detail.component.js.map

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

module.exports = "\n<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n    <li role=\"presentation\" class=\"active\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n    <li role=\"presentation\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n  </ul>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Email\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          Phone\n        </div>\n        <div class=\"col-xs-3\">\n          Restaurant\n        </div>\n        <div class=\"col-xs-3 col-md-2\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let manager of managers\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          <a [routerLink]=\"['/admin', 'manager', manager._id]\">\n            {{manager.firstName}} {{manager.lastName}}\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{manager.email}}\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          {{manager.phone}}\n        </div>\n        <div class=\"col-xs-3\">\n          {{manager.restaurantId}}\n        </div>\n        <div class=\"col-xs-3 col-md-1\">\n          <div *ngIf=\"manager.active; else inactive\" class=\"alert alert-success\">\n            <strong>Active</strong>\n          </div>\n          <ng-template #inactive>\n            <div class=\"alert alert-danger\">\n              <strong>Inactive</strong>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

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
        // const path = this.activatedRoute.url;
        // this.activatedRoute.url
        //   .subscribe(
        //     (url: any) => {
        //       // console.log(url);
        //       // this.path  = url[1].path;
        //     }
        //   );
        var _this = this;
        this.userService.findUsersByRole('Manager')
            .subscribe(function (managers) {
            _this.managers = managers;
        });
    };
    return AdminManagerListComponent;
}());
AdminManagerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-manager-list',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-manager-list/admin-manager-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AdminManagerListComponent);

var _a, _b;
//# sourceMappingURL=admin-manager-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-order-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrderListComponent; });
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

var AdminOrderListComponent = (function () {
    function AdminOrderListComponent() {
    }
    AdminOrderListComponent.prototype.ngOnInit = function () {
    };
    return AdminOrderListComponent;
}());
AdminOrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-order-list',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-order-list/admin-order-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminOrderListComponent);

//# sourceMappingURL=admin-order-list.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-user-list',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-user-list/admin-user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AdminUserListComponent);

var _a, _b;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-list/chef-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-list/chef-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div *ngIf=\"role === 'Admin'; else manager\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n    </ul>\n\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/manager/', managerId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #manager>\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant', restaurantId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Email\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          Phone\n        </div>\n        <div class=\"col-xs-3\">\n          Restaurant\n        </div>\n        <div class=\"col-xs-3 col-md-2\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let chef of chefs\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          <div *ngIf=\"role === 'Admin'; else manager\">\n            <a [routerLink]=\"['/admin', 'manager', chef._id]\">\n              {{chef.firstName}} {{chef.lastName}}\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </div>\n          <ng-template #manager>\n            <label>\n              {{chef.firstName}} {{chef.lastName}}\n            </label>\n          </ng-template>\n        </div>\n          <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{chef.email}}\n          </div>\n          <div class=\"col-md-2 hidden-xs hidden-sm\">\n            {{chef.phone}}\n          </div>\n          <div class=\"col-xs-3\">\n            {{chef.restaurantId}}\n          </div>\n        <div class=\"col-xs-3 col-md-1\">\n            <div *ngIf=\"chef.active; else inactive\">\n              <div *ngIf=\"role === 'Admin'; else manager\">\n                <div class=\"alert alert-success\">\n                  <strong>Active</strong>\n                </div>\n              </div>\n              <ng-template #manager>\n                <button (click)=\"ToggleStatus(chef)\" class=\"btn btn-danger btn-block\"\n                >Deactivate</button>\n                <div class=\"alert alert-success\">\n                  <strong>Active</strong>\n                </div>\n              </ng-template>\n            </div>\n            <ng-template #inactive>\n              <div *ngIf=\"role === 'Admin'; else manager\">\n                <div class=\"alert alert-danger\">\n                  <strong>Inactive</strong>\n                </div>\n              </div>\n              <ng-template #manager>\n                <button (click)=\"ToggleStatus(chef)\" class=\"btn btn-success btn-block\"\n                >Activate</button>\n                <div class=\"alert alert-danger\">\n                  <strong>Inactive</strong>\n                </div>\n              </ng-template>\n            </ng-template>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chef/chef-list/chef-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChefListComponent = (function () {
    function ChefListComponent(userService, activatedRoute, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.user = {};
        this.manager = {};
    }
    ChefListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.user = this.sharedService.user;
        this.role = this.user['role'];
        this.userService.findChefsByRestaurantId(this.restaurantId)
            .subscribe(function (chefs) {
            _this.chefs = chefs;
        });
        this.userService.findManagerByRestaurantId(this.restaurantId)
            .subscribe(function (manager) {
            _this.managerId = manager['_id'];
            _this.manager = manager;
        });
    };
    ChefListComponent.prototype.ToggleStatus = function (chef) {
        var _this = this;
        chef['active'] = !chef['active'];
        this.userService.updateUser(chef['_id'], chef)
            .subscribe(function (user) {
            _this.userService.findChefsByRestaurantId(_this.restaurantId)
                .subscribe(function (chefs) {
                _this.chefs = chefs;
            });
        });
    };
    return ChefListComponent;
}());
ChefListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-list',
        template: __webpack_require__("../../../../../src/app/components/chef/chef-list/chef-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chef/chef-list/chef-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], ChefListComponent);

var _a, _b, _c;
//# sourceMappingURL=chef-list.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h1 class=\"text-center text-success\">Thanks for registering as Chef.</h1>\n    <div class=\"text-center\">\n      <span class=\"glyphicon glyphicon-ok-sign registration-success\"></span>\n    </div>\n    <p class=\"info text-center\">You should be able to access the account as soon as this request is approved.</p>\n    <a [routerLink]= \"['/']\"\n       class=\"btn btn-primary btn-block\">\n      Homepage\n      <span class=\"glyphicon glyphicon-arrow-right\"></span>\n    </a>\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], ChefRegisterComponent.prototype, "registerForm", void 0);
ChefRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-register',
        template: __webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chef/chef-register/chef-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ChefRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=chef-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-list/driver-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-list/driver-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div *ngIf=\"role === 'Admin'; else manager\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n    </ul>\n\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/manager/', managerId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #manager>\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant', restaurantId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Email\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          Phone\n        </div>\n        <div class=\"col-xs-3\">\n          Restaurant\n        </div>\n        <div class=\"col-xs-3 col-md-2\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let driver of drivers\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n          <div *ngIf=\"role === 'Admin'; else manager\">\n            <a [routerLink]=\"['/admin', 'manager', driver._id]\">\n              {{driver.firstName}} {{driver.lastName}}\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </div>\n          <ng-template #manager>\n            <label>\n              {{driver.firstName}} {{driver.lastName}}\n            </label>\n          </ng-template>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{driver.email}}\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          {{driver.phone}}\n        </div>\n        <div class=\"col-xs-3\">\n          {{driver.restaurantId}}\n        </div>\n        <div class=\"col-xs-3 col-md-1\">\n          <div *ngIf=\"driver.active; else inactive\">\n            <div *ngIf=\"role === 'Admin'; else manager\">\n              <div class=\"alert alert-success\">\n                <strong>Active</strong>\n              </div>\n            </div>\n            <ng-template #manager>\n              <button (click)=\"ToggleStatus(driver)\" class=\"btn btn-danger btn-block\"\n              >Deactivate</button>\n              <div class=\"alert alert-success\">\n                <strong>Active</strong>\n              </div>\n            </ng-template>\n          </div>\n          <ng-template #inactive>\n            <div *ngIf=\"role === 'Admin'; else manager\">\n              <div class=\"alert alert-danger\">\n                <strong>Inactive</strong>\n              </div>\n            </div>\n            <ng-template #manager>\n              <button (click)=\"ToggleStatus(driver)\" class=\"btn btn-success btn-block\"\n              >Activate</button>\n              <div class=\"alert alert-danger\">\n                <strong>Inactive</strong>\n              </div>\n            </ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/driver/driver-list/driver-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverListComponent = (function () {
    function DriverListComponent(userService, activatedRoute, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.user = {};
        this.manager = {};
    }
    DriverListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.user = this.sharedService.user;
        this.role = this.user['role'];
        this.userService.findDriversByRestaurantId(this.restaurantId)
            .subscribe(function (drivers) {
            _this.drivers = drivers;
        });
        this.userService.findManagerByRestaurantId(this.restaurantId)
            .subscribe(function (manager) {
            _this.managerId = manager['_id'];
            _this.manager = manager;
        });
    };
    DriverListComponent.prototype.ToggleStatus = function (driver) {
        var _this = this;
        driver['active'] = !driver['active'];
        this.userService.updateUser(driver['_id'], driver)
            .subscribe(function (user) {
            _this.userService.findDriversByRestaurantId(_this.restaurantId)
                .subscribe(function (drivers) {
                _this.drivers = drivers;
            });
        });
    };
    return DriverListComponent;
}());
DriverListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-driver-list',
        template: __webpack_require__("../../../../../src/app/components/driver/driver-list/driver-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/driver/driver-list/driver-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], DriverListComponent);

var _a, _b, _c;
//# sourceMappingURL=driver-list.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h1 class=\"text-center text-success\">Thanks for registering as Delivery agent.</h1>\n    <div class=\"text-center\">\n      <span class=\"glyphicon glyphicon-ok-sign registration-success\"></span>\n    </div>\n    <p class=\"info text-center\">You should be able to access the account as soon as this request is approved.</p>\n    <a [routerLink]= \"['/']\"\n       class=\"btn btn-primary btn-block\">\n      Homepage\n      <span class=\"glyphicon glyphicon-arrow-right\"></span>\n    </a>\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], DriverRegisterComponent.prototype, "registerForm", void 0);
DriverRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = ""

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"this.restaurantId;else header\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/manager','restaurant', restaurantId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager','restaurant', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager', 'restaurant', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a (click)=\"AddOrViewMenu()\" class=\"btn\">\n          View Menu\n        </a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #header>\n    <header>\n      <a [routerLink]=\"['/admin/manager']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    </header>\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/restaurant/', manager.restaurantId]\" class=\"btn\">\n          My Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', manager.restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a class=\"btn\">\n          View Menu\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n  <h3 class=\"text-center\">Edit Manager of Restaurant {{manager.restaurantId}}</h3>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"container-fluid profile clearfix\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             [(ngModel)]=\"username\"\n             class=\"form-control\" />\n\n      <label for=\"email\" class=\"label\">Email</label>\n      <input type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             [(ngModel)]=\"email\"\n             class=\"form-control\" />\n\n      <label for=\"first_name\" class=\"label\">First Name</label>\n      <input type=\"text\"\n             id=\"first_name\"\n             name=\"first_name\"\n             [(ngModel)]=\"firstName\"\n             class=\"form-control\" />\n\n      <label for=\"last_name\" class=\"label\">Last Name</label>\n      <input type=\"text\"\n             id=\"last_name\"\n             name=\"last_name\"\n             [(ngModel)]=\"lastName\"\n             class=\"form-control\" />\n\n      <label for=\"phone\" class=\"label\">Phone</label>\n      <input type=\"text\"\n             id=\"phone\"\n             name=\"phone\"\n             [(ngModel)]=\"phone\"\n             class=\"form-control\" />\n      <div *ngIf=\"!this.restaurantId\">\n        <label for=\"active\" class=\"label\">Active?</label>\n        <input type=\"checkbox\"\n               id=\"active\"\n               name=\"active\"\n               [(ngModel)]=\"active\">\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary form-control\"\n              [disabled]=\"!f.valid\">Update Profile</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
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
    function ManagerDashboardComponent(activatedRoute, userService, menuService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.menuService = menuService;
        this.router = router;
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
    ManagerDashboardComponent.prototype.AddOrViewMenu = function () {
        var _this = this;
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            if (menu) {
                _this.router.navigate(['/manager/restaurant/', _this.restaurantId, 'menu']);
            }
            else {
                _this.router.navigate(['/manager/restaurant/', _this.restaurantId, 'menu', 'new']);
            }
        });
    };
    return ManagerDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], ManagerDashboardComponent.prototype, "profileForm", void 0);
ManagerDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manager-dashboard',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-dashboard/manager-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ManagerDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manager-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n      <a [routerLink]=\"['/manager', 'restaurant', restaurantId, 'order']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n      <a class=\"navbar-brand thick\">\n        <b>Order Number : {{orderId}}</b>\n      </a>\n    </p>\n  </nav>\n\n\n  <div class=\"container-fluid page-margin\">\n    <div *ngIf=\"address\">\n      <label>Deliver To: </label><br>\n      <label>{{address['name']}} </label><br>\n      <label>{{address['apt']}} {{address['street']}} </label><br>\n      <label> {{address['city']}} {{address['zipCode']}}</label><br>\n      <label> {{address['state']}}</label><br>\n      <label> {{address['phone']}}</label><br>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-md-4 col-xs-6\">\n            Name\n          </div>\n          <div class=\"col-md-2 col-sm-3 hidden-xs\">\n            Price\n          </div>\n          <div class=\"col-sm-3 col-md-2 hidden-xs\">\n            Quantity\n          </div>\n          <div class=\"col-sm-3 col-md-4 hidden-6\">\n            Instructions\n          </div>\n        </div>\n      </li>\n      <li class=\"list-group-item\" *ngFor=\"let item of orderItems\">\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-md-4 col-xs-6\">\n            <a>\n              {{item['name']}}\n            </a>\n          </div>\n          <div class=\"col-md-2 col-sm-3 hidden-xs\">\n            {{item['price']}}\n          </div>\n          <div class=\"col-sm-3 col-md-2 hidden-xs\">\n            {{item['quantity']}}\n          </div>\n          <div class=\"col-sm-3 col-md-4 hidden-6\">\n            {{item['instructions']}}\n          </div>\n        </div>\n      </li>\n    </ul>\n    <div [ngSwitch]=\"orderState\">\n      <div *ngSwitchCase=\"'paid'\">\n        <button (click)=\"AcceptOrder()\" class=\"btn btn-success btn-block\"\n        >Accept Order</button>\n        <button (click)=\"CancelOrder()\" class=\"btn btn-danger btn-block\"\n        >Cancel</button>\n      </div>\n      <div *ngSwitchCase=\"'accepted'\">\n        <label class=\"\">Choose Chef</label>\n        <select class=\"form-control\"\n                name=\"chefId\"\n                id = \"chefId\"\n                [(ngModel)]=\"order['chefId']\">\n          <option *ngFor=\"let chef of chefs\"\n                  [value]=\"chef._id\"\n                  [selected] = \"order['chefId'] == chef._id\">\n            {{chef.firstName}} {{chef.lastName}}\n          </option>\n        </select>\n        <button (click)=\"ChooseEmployee()\" class=\"btn btn-success btn-block margin-top-button\"\n        >Done</button>\n        <button (click)=\"CancelOrder()\" class=\"btn btn-danger btn-block\"\n        >Cancel</button>\n      </div>\n      <div *ngSwitchCase=\"'ready'\">\n        <label class=\"\">Choose Driver</label>\n        <select class=\"form-control\"\n                name=\"driverId\"\n                id = \"driverId\"\n                [(ngModel)]=\"order['chefId']\">\n          <option *ngFor=\"let driver of drivers\"\n                  [value]=\"driver._id\"\n                  [selected] = \"order['driverId'] == driver._id\">\n            {{driver.firstName}} {{driver.lastName}}\n          </option>\n        </select>\n        <button (click)=\"ChooseEmployee()\" class=\"btn btn-success btn-block margin-top-button\"\n        >Done</button>\n        <button (click)=\"CancelOrder()\" class=\"btn btn-danger btn-block\"\n        >Cancel</button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerOrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orderItem_service_client__ = __webpack_require__("../../../../../src/app/services/orderItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagerOrderDetailsComponent = (function () {
    function ManagerOrderDetailsComponent(orderItemService, activatedRoute, orderService, router, userService) {
        this.orderItemService = orderItemService;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
        this.orderItems = [{}];
    }
    ManagerOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.orderId = params['orderId'];
        });
        this.orderService.findOrderById(this.orderId)
            .subscribe(function (order) {
            _this.order = order;
            _this.address = order['address'];
            _this.orderState = order['state'];
        });
        this.orderItemService.findAllByOrder(this.orderId)
            .subscribe(function (orderItems) {
            _this.orderItems = orderItems;
        });
        this.userService.findActiveChefsByRestaurantId(this.restaurantId)
            .subscribe(function (chefs) {
            _this.chefs = chefs;
        });
        this.userService.findActiveDriversByRestaurantId(this.restaurantId)
            .subscribe(function (drivers) {
            _this.drivers = drivers;
        });
    };
    ManagerOrderDetailsComponent.prototype.AcceptOrder = function () {
        var _this = this;
        this.order['state'] = 'accepted';
        console.log('accepting order');
        this.orderService.updateOrder(this.orderId, this.order)
            .subscribe(function (order) {
            _this.router.navigate(['/manager', 'restaurant', _this.restaurantId, 'order']);
        });
    };
    ManagerOrderDetailsComponent.prototype.CancelOrder = function () {
        var _this = this;
        this.order['state'] = 'cancelled';
        console.log('cancel order');
        this.orderService.updateOrder(this.orderId, this.order)
            .subscribe(function (order) {
            _this.router.navigate(['/manager', 'restaurant', _this.restaurantId, 'order']);
        });
    };
    ManagerOrderDetailsComponent.prototype.ChooseEmployee = function () {
        var _this = this;
        if (this.orderState === 'accepted') {
            var employeeId = this.orderDetailsForm.value.chefId;
            this.order['chefId'] = employeeId;
        }
        else if (this.orderState === 'ready') {
            var employeeId = this.orderDetailsForm.value.driverId;
            this.order['driverId'] = employeeId;
            console.log(employeeId);
        }
        console.log('choose employee');
        this.orderService.updateOrder(this.orderId, this.order)
            .subscribe(function (order) {
            _this.router.navigate(['/manager', 'restaurant', _this.restaurantId, 'order']);
        });
    };
    return ManagerOrderDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["NgForm"]) === "function" && _a || Object)
], ManagerOrderDetailsComponent.prototype, "orderDetailsForm", void 0);
ManagerOrderDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-manager-order-details',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-order-details/manager-order-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_orderItem_service_client__["a" /* OrderItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_orderItem_service_client__["a" /* OrderItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object])
], ManagerOrderDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=manager-order-details.component.js.map

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

module.exports = "\n<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n  <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n    <a [routerLink]=\"['/manager', 'restaurant', restaurantId ]\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n\n  <!--heading on the nav bar-->\n  <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n    <a class=\"navbar-brand thick\">\n      <b>Order list</b>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid page-margin\">\n  <ul class=\"nav nav-tabs nav-justified\">\n    <li role=\"presentation\" class=\"active\">\n      <a (click)=\"DisplayPaidOrders()\" class=\"btn\">\n        Paid\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a (click)=\"DisplayAcceptedOrders()\" class=\"btn\">\n        Accepted\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a (click)=\"DisplayReadyOrders()\" class=\"btn\">\n        Ready\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a (click)=\"DisplayDeliveredOrders()\" class=\"btn\">\n        Delivered\n      </a>\n    </li>\n    <li role=\"presentation\">\n      <a (click)=\"DisplayCancelledOrders()\" class=\"btn\">\n        Cancelled\n      </a>\n    </li>\n  </ul>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Order Number\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Order Price\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Order Date\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let order of orders\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a>\n            {{order['_id']}}\n          </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{order['total']}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n        {{order['dateCreated']}}\n        </div>\n        <div class=\"col-xs-3\">\n          <button [routerLink]=\"['/manager', 'restaurant', restaurantId, 'order', order._id]\"\n                  class=\"btn btn-success btn-block\">View Order</button>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manager/manager-order/manager-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
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




var ManagerOrderComponent = (function () {
    function ManagerOrderComponent(activatedRoute, orderService, userService) {
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.userService = userService;
    }
    ManagerOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'paid')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    ManagerOrderComponent.prototype.DisplayPaidOrders = function () {
        var _this = this;
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'paid')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    ManagerOrderComponent.prototype.DisplayAcceptedOrders = function () {
        var _this = this;
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'accepted')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    ManagerOrderComponent.prototype.DisplayReadyOrders = function () {
        var _this = this;
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'ready')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    ManagerOrderComponent.prototype.DisplayDeliveredOrders = function () {
        var _this = this;
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'delivered')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    ManagerOrderComponent.prototype.DisplayCancelledOrders = function () {
        var _this = this;
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, 'cancelled')
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    return ManagerOrderComponent;
}());
ManagerOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manager-order',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-order/manager-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ManagerOrderComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\">\n    There is an error! Please try again later.\n  </div>\n  <div class=\"thanks\" *ngIf=\"this.success\">\n    <h1 class=\"text-center text-success\">Thanks for claiming the Restaurant.</h1>\n    <div class=\"text-center\">\n      <span class=\"glyphicon glyphicon-ok-sign registration-success\"></span>\n    </div>\n    <p class=\"info text-center\">You should be able to manage the restaurant as soon as this request is approved.</p>\n    <a [routerLink]= \"['/']\"\n       class=\"btn btn-primary btn-block\">\n      Homepage\n      <span class=\"glyphicon glyphicon-arrow-right\"></span>\n    </a>\n\n  </div>\n  <div *ngIf=\"!this.success\">\n    <h1>Register</h1>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter Password!\n      </span>\n\n      <input type=\"password\"\n             ngModel\n             required\n             name=\"verifyPassword\"\n             #verifyPassword=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\" />\n      <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n        Please enter Verification password!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"First Name\" />\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n        Please enter First Name!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Last Name\" />\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n        Please enter Last Name!\n      </span>\n\n      <input type=\"email\"\n             ngModel\n             required\n             name=\"email\"\n             #email=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Email\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n        Please enter Email!\n      </span>\n\n      <input type=\"text\"\n             ngModel\n             required\n             name=\"phone\"\n             #phone=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Phone Number\" />\n      <span class=\"help-block\" *ngIf=\"!phone.valid && phone.touched\">\n        Please enter Phone Number!\n      </span>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Register</button>\n      <a [routerLink]= \"['/login']\"\n         class=\"btn btn-danger btn-block\">\n        Cancel\n      </a>\n    </form>\n  </div>\n</div>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"]) === "function" && _a || Object)
], ManagerRegisterComponent.prototype, "registerForm", void 0);
ManagerRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manager-register',
        template: __webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manager/manager-register/manager-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ManagerRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=manager-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-edit/menu-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-edit/menu-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"EditMenu()\" #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n      <a [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu' ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n      <a class=\"navbar-brand thick\">\n        <b>Menu Edit</b>\n      </a>\n    </p>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <button [routerLink]=\"['/manager', 'restaurant', this.restaurantId]\"\n              (click)=\"DeleteMenu()\"\n              class=\"btn btn-danger btn-block\">\n        Delete Menu\n      </button>\n      <button [routerLink]=\"['/manager', 'restaurant', this.restaurantId, 'menu']\"\n              type=\"submit\"\n              class=\"btn btn-success btn-block\">\n              Done\n      </button>\n      <label class=\"\">Delivery Charge</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"deliveryCharge\"\n             [(ngModel)] = \"deliveryCharge\"\n             placeholder=\"Delivery Charge\"\n             name=\"deliveryCharge\"/>\n      <label class=\"\">Order limit</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"orderLimit\"\n             [(ngModel)] = \"orderLimit\"\n             placeholder=\"Minimum order limit\"\n             name=\"orderLimit\"/>\n      <div class=\"row\">\n        <div class=\"col-xs-9\">\n          <label class=\"\">Menu Items</label>\n        </div>\n        <div class=\"col-xs-3\">\n          <button [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu', menuId, 'menuItem', 'new']\"\n                  class=\"btn btn-primary btn-block\">\n                  <i class=\"pull-right glyphicon glyphicon-plus\"></i>Add Menu Item</button>\n        </div>\n      </div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Name\n            </div>\n            <div class=\"col-md-3 hidden-sm hidden-xs\">\n              Price\n            </div>\n            <div class=\"col-sm-3 col-md-3 hidden-xs\">\n              Category\n            </div>\n            <div class=\"col-xs-3\">\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\" *ngFor=\"let item of menuItems\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a>\n                {{item['name']}}\n              </a>\n            </div>\n            <div class=\"col-md-3 hidden-sm hidden-xs\">\n              {{item['price']}}\n            </div>\n            <div class=\"col-sm-3 col-md-3 hidden-xs\">\n              {{item['category']}}\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu', menuId, 'menuItem', item['_id']]\">\n                <span class=\"glyphicon glyphicon-edit\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-edit/menu-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuEditComponent = (function () {
    function MenuEditComponent(menuService, activatedRoute, router, menuItemService) {
        this.menuService = menuService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuItemService = menuItemService;
        this.error = '';
    }
    MenuEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            _this.menuId = menu._id;
            _this.deliveryCharge = menu.deliveryCharge;
            _this.orderLimit = menu.orderLimit;
            _this.menuItems = menu.menuItems;
            _this.menuItemService.findMenuItemsByMenuId(_this.menuId)
                .subscribe(function (items) {
                _this.menuItems = items;
            });
        });
    };
    MenuEditComponent.prototype.EditMenu = function () {
        var _this = this;
        var delCharge = this.menuEditForm.value.deliveryCharge;
        var orderLimit = this.menuEditForm.value.orderLimit;
        if (delCharge && orderLimit) {
            var editedMenu = {
                'restaurantId': this.restaurantId,
                'deliveryCharge': this.menuEditForm.value.deliveryCharge,
                'orderLimit': this.menuEditForm.value.orderLimit
            };
            this.menuService.UpdateMenuByMenuId(this.menuId, editedMenu)
                .subscribe(function (menu) {
                _this.deliveryCharge = menu.deliveryCharge;
                _this.orderLimit = menu.orderLimit;
                _this.menuItems = menu.menuItems;
            });
        }
        else {
            this.error = 'Please enter delivery charge and minimum order limit';
        }
    };
    MenuEditComponent.prototype.DeleteMenu = function () {
        var _this = this;
        this.menuService.deleteMenu(this.menuId)
            .subscribe(function (menu) {
            _this.menuItemService.deleteMenuItemsByMenuId(_this.menuId)
                .subscribe(function (status) {
                _this.router.navigate(['/manager', 'restaurant', _this.restaurantId]);
            });
        });
    };
    return MenuEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], MenuEditComponent.prototype, "menuEditForm", void 0);
MenuEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-edit',
        template: __webpack_require__("../../../../../src/app/components/menu/menu-edit/menu-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu-edit/menu-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _e || Object])
], MenuEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menu-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-list/menu-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-list/menu-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n  <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n    <a [routerLink]=\"['/manager', 'restaurant', restaurantId ]\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n\n  <!--heading on the nav bar-->\n  <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n    <a class=\"navbar-brand thick\">\n      <b>Menu</b>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid page-margin\">\n  <div class=\"row\">\n    <button [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu', menuId]\" class=\"btn btn-primary btn-block\"\n    >Edit</button>\n    <label class=\"\">Delivery Charge</label>\n    <input class=\"form-control\"\n           type=\"text\"\n           id = \"delivery\"\n           [(ngModel)] = \"deliveryCharge\"\n           placeholder=\"Delivery Charge\"\n           name=\"delivery\"/>\n    <label class=\"\">Order limit</label>\n    <input class=\"form-control\"\n           type=\"text\"\n           id = \"orderLimit\"\n           [(ngModel)] = \"orderLimit\"\n           placeholder=\"Minimum order limit\"\n           name=\"orderLimit\"/>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <label class=\"\">Menu Items</label>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Price\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Category\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let item of menuItems\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a>\n          {{item['name']}}\n          </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{item['price']}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{item['category']}}\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-list/menu-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuListComponent = (function () {
    function MenuListComponent(activatedRoute, menuService, menuItemService) {
        this.activatedRoute = activatedRoute;
        this.menuService = menuService;
        this.menuItemService = menuItemService;
    }
    MenuListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            _this.menuId = menu._id;
            _this.deliveryCharge = menu.deliveryCharge;
            _this.orderLimit = menu.orderLimit;
            _this.menuItemService.findMenuItemsByMenuId(menu._id)
                .subscribe(function (items) {
                _this.menuItems = items;
            });
        });
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-list',
        template: __webpack_require__("../../../../../src/app/components/menu/menu-list/menu-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu-list/menu-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service_client__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _c || Object])
], MenuListComponent);

var _a, _b, _c;
//# sourceMappingURL=menu-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-new/menu-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-new/menu-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"AddMenu()\" #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n      <a [routerLink]=\"['/manager', 'restaurant', restaurantId ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n      <a class=\"navbar-brand thick\">\n        <b>Add new Menu</b>\n      </a>\n    </p>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <label class=\"\">Delivery Charge</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"deliveryCharge\"\n             [(ngModel)] = \"deliveryCharge\"\n             placeholder=\"Delivery Charge\"\n             name=\"deliveryCharge\"/>\n      <label class=\"\">Order limit</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"orderLimit\"\n             [(ngModel)] = \"orderLimit\"\n             placeholder=\"Minimum order limit\"\n             name=\"orderLimit\"/>\n      <button [routerLink]=\"['/manager', 'restaurant', this.restaurantId]\"\n              type=\"submit\"\n              class=\"btn btn-success btn-block\">\n        Done\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-new/menu-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuNewComponent = (function () {
    function MenuNewComponent(activatedRoute, menuService, router) {
        this.activatedRoute = activatedRoute;
        this.menuService = menuService;
        this.router = router;
        this.error = '';
    }
    MenuNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
    };
    MenuNewComponent.prototype.AddMenu = function () {
        var _this = this;
        var delivery = this.menuForm.value.deliveryCharge;
        var minOrder = this.menuForm.value.orderLimit;
        if (delivery && minOrder) {
            var newMenu = {
                'restaurantId': this.restaurantId,
                'deliveryCharge': this.menuForm.value.deliveryCharge,
                'orderLimit': this.menuForm.value.orderLimit,
            };
            this.menuService.createMenu(this.restaurantId, newMenu)
                .subscribe(function (menu) {
                console.log('inside menu new component');
                _this.router.navigate(['/manager', 'restaurant', _this.restaurantId]);
            });
        }
        else {
            this.error = 'Please enter delivery charge and minimum order limit';
        }
    };
    return MenuNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], MenuNewComponent.prototype, "menuForm", void 0);
MenuNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-new',
        template: __webpack_require__("../../../../../src/app/components/menu/menu-new/menu-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu-new/menu-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service_client__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MenuNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"UpdateMenuItem()\" #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n      <a [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu', menuId ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Menu Item</b>\n      </a>\n    </p>\n  </nav>\n\n\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger margin-top-huge\">\n    {{error}}\n  </div>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <label class=\"\">Name</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"name\"\n             [(ngModel)] = \"name\"\n             placeholder=\"Name\"\n             name=\"name\"\n             required/>\n      <label class=\"\">Price</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"price\"\n             [(ngModel)] = \"price\"\n             placeholder=\"Price\"\n             name=\"price\"\n             required/>\n      <label class=\"\">Category</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"category\"\n             [(ngModel)] = \"category\"\n             placeholder=\"Category\"\n             name=\"category\"\n             required/>\n      <label class=\"\">Description</label>\n      <textarea class=\"form-control\"\n                id=\"description\"\n                name=\"description\"\n                required\n                placeholder=\"Menu Item Description\"\n                [(ngModel)] = \"description\"></textarea>\n      <button type=\"submit\" class=\"btn btn-success btn-block\">Update menu Item</button>\n      <button (click)=\"DeleteMenuItem()\" class=\"btn btn-danger btn-block\">Delete menu Item</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
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




var MenuItemEditComponent = (function () {
    function MenuItemEditComponent(router, menuItemService, activatedRoute) {
        this.router = router;
        this.menuItemService = menuItemService;
        this.activatedRoute = activatedRoute;
        this.error = '';
    }
    MenuItemEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.menuItemId = params['menuItemId'];
            _this.menuId = params['menuId'];
            _this.menuItemService.findMenuItemByItemId(_this.menuItemId)
                .subscribe(function (item) {
                console.log(item);
                _this.menuItem = item;
                _this.name = item.name;
                _this.price = item.price;
                _this.description = item.description;
                _this.category = item.category;
            });
        });
    };
    MenuItemEditComponent.prototype.UpdateMenuItem = function () {
        var _this = this;
        console.log(this.menuItemEditForm.value.name);
        var name = this.menuItemEditForm.value.name;
        var price = this.menuItemEditForm.value.price;
        var description = this.menuItemEditForm.value.description;
        var category = this.menuItemEditForm.value.category;
        if (name && price) {
            this.menuItem['name'] = name;
            this.menuItem['price'] = price;
            this.menuItem['description'] = description;
            this.menuItem['category'] = category;
            this.menuItemService.updateMenuItem(this.menuItemId, this.menuItem)
                .subscribe(function (menuItem) {
                _this.router.navigate(['manager', 'restaurant', _this.restaurantId, 'menu', _this.menuId]);
            });
        }
        else {
            this.error = 'Please enter Name and price of the menu item';
        }
    };
    MenuItemEditComponent.prototype.DeleteMenuItem = function () {
        var _this = this;
        this.menuItemService.deleteMenuItem(this.menuItemId)
            .subscribe(function (menuItem) {
            _this.router.navigate(['manager', 'restaurant', _this.restaurantId, 'menu', _this.menuId]);
        });
    };
    return MenuItemEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"]) === "function" && _a || Object)
], MenuItemEditComponent.prototype, "menuItemEditForm", void 0);
MenuItemEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-item-edit',
        template: __webpack_require__("../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menuItem/menu-item-edit/menu-item-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], MenuItemEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu-item-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  menu-item-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemListComponent = (function () {
    function MenuItemListComponent(menuItemService, activatedRoute) {
        this.menuItemService = menuItemService;
        this.activatedRoute = activatedRoute;
        this.menuItems = [{}];
    }
    MenuItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.menuId = params['menuId'];
        });
        this.menuItemService.findMenuItemsByMenuId(this.menuId)
            .subscribe(function (items) {
            _this.menuItems = items;
        });
    };
    return MenuItemListComponent;
}());
MenuItemListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-item-list',
        template: __webpack_require__("../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menuItem/menu-item-list/menu-item-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MenuItemListComponent);

var _a, _b;
//# sourceMappingURL=menu-item-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"createMenuItem()\" #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <p class=\"navbar-text pull-left page-new-top-glyp-margin\">\n      <a [routerLink]=\"['/manager', 'restaurant', restaurantId, 'menu', menuId ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left page-new-top-glyp-margin\">\n      <a class=\"navbar-brand thick\">\n        <b>Add new Menu Item</b>\n      </a>\n    </p>\n  </nav>\n\n\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger margin-top-huge\">\n    {{error}}\n  </div>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <label class=\"\">Name</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"name\"\n             [(ngModel)] = \"name\"\n             placeholder=\"Name\"\n             name=\"name\"\n            required/>\n      <label class=\"\">Price</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"price\"\n             [(ngModel)] = \"price\"\n             placeholder=\"Price\"\n             name=\"price\"\n             required/>\n      <label class=\"\">Category</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id = \"category\"\n             [(ngModel)] = \"category\"\n             placeholder=\"Category\"\n             name=\"category\"\n             required/>\n      <label class=\"\">Description</label>\n      <textarea class=\"form-control\"\n                id=\"description\"\n                name=\"description\"\n                required\n                placeholder=\"Menu Item Description\"\n                [(ngModel)] = \"description\"></textarea>\n      <button class=\"btn btn-primary btn-block\"\n      >Add new menu Item</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuItemNewComponent = (function () {
    function MenuItemNewComponent(activatedRoute, router, menuItemService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuItemService = menuItemService;
        this.error = '';
    }
    MenuItemNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.menuId = params['menuId'];
        });
    };
    MenuItemNewComponent.prototype.createMenuItem = function () {
        var _this = this;
        this.name = this.menuItemForm.value.name;
        this.description = this.menuItemForm.value.description;
        this.price = this.menuItemForm.value.price;
        this.category = this.menuItemForm.value.category;
        if (this.name && this.price) {
            var newMenuItem = {
                menuId: this.menuId,
                name: this.name,
                price: this.price,
                description: this.description,
                category: this.category
            };
            console.log(this.menuId);
            this.menuItemService.createMenuItem(this.menuId, newMenuItem)
                .subscribe(function (menuItem) {
                _this.router.navigate(['manager', 'restaurant', _this.restaurantId, 'menu', _this.menuId]);
            });
        }
        else {
            this.error = 'Please enter Name and price of the Menuitem';
        }
    };
    return MenuItemNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], MenuItemNewComponent.prototype, "menuItemForm", void 0);
MenuItemNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-item-new',
        template: __webpack_require__("../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menuItem/menu-item-new/menu-item-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _d || Object])
], MenuItemNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu-item-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order-checkout/order-checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart {\n  background-color: #efefef;\n  padding: 2rem;\n}\n\n.summary span {\n  float: right;\n  margin-right: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order-checkout/order-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid food-center\">\n    <a [routerLink]=\"['/restaurant', restaurantId,'order',orderId]\" class=\"white pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <span class=\"food-center\">FoOdSpOt </span>\n\n    <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              My Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/orders']\">\n              My Orders\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ng-template #login>\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n          Login\n        </a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n          Sign Up\n        </a>\n      </div>\n    </ng-template>\n  </div>\n</header>\n<div class=\"container food-bottombuff\">\n  <div class=\"details\">\n    <div class=\"image-container col-xs-3 col-sm-2\">\n      <a [routerLink]=\"['/restaurant', restaurant.id]\">\n        <img class=\"restro_image thumbnail\" src=\"{{restaurant['image_url']}}\" />\n      </a>\n    </div>\n    <h2>{{rname}}</h2>\n    <div>\n      <rating [(ngModel)]=\"restaurant['rating']\"\n              readonly=\"true\"\n              [float]=\"true\">\n      </rating>\n      <div class=\"costing clearfix\">{{restaurant['price']}}</div>\n    </div>\n    <h3>Delivery Address</h3>\n  </div>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n\n    <div class=\"row\">\n      <div class=\"delivery col-xs-12 col-sm-8\">\n        <label class=\"label\"\n               for=\"name\">\n          Name\n        </label>\n        <input type=\"text\"\n               id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               required\n               #rrname=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"Name\" />\n        <span class=\"help-block\" *ngIf=\"!rrname.valid && rrname.touched\">\n            Please enter Name!\n        </span>\n        <label for=\"street\"\n               class=\"label\">\n          Street Address\n        </label>\n        <input class=\"form-control\"\n               id=\"street\"\n               name=\"street\"\n               #rrstreet=\"ngModel\"\n               [(ngModel)]=\"street\"\n               required\n               placeholder=\"Street Address\" />\n        <span class=\"help-block\" *ngIf=\"!rrstreet.valid && rrstreet.touched\">\n            Please enter Street Address!\n        </span>\n        <label class=\"label\"\n               for=\"apt\">\n          Apartment/Building\n        </label>\n        <input type=\"text\"\n               id=\"apt\"\n               name=\"apt\"\n               [(ngModel)]=\"apt\"\n               #rrapt=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"Aptartment Number\" />\n        <label class=\"label\"\n               for=\"zipCode\">\n          zipCode\n        </label>\n        <input type=\"text\"\n               id=\"zipcode\"\n               name=\"zipCode\"\n               [(ngModel)]=\"zipCode\"\n               required\n               #rrzipCode=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"zipCode\" />\n        <span class=\"help-block\" *ngIf=\"!rrzipCode.valid && rrzipCode.touched\">\n            Please enter zipCode!\n        </span>\n        <label class=\"label\"\n               for=\"city\">\n          city\n        </label>\n        <input type=\"text\"\n               id=\"city\"\n               name=\"city\"\n               [(ngModel)]=\"city\"\n               required\n               #rrcity=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"city\" />\n        <span class=\"help-block\" *ngIf=\"!rrcity.valid && rrcity.touched\">\n            Please enter city!\n        </span>\n        <label class=\"label\"\n               for=\"state\">\n          state\n        </label>\n        <input type=\"text\"\n               id=\"state\"\n               name=\"state\"\n               [(ngModel)]=\"state\"\n               required\n               #rrstate=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"state\" />\n        <span class=\"help-block\" *ngIf=\"!rrstate.valid && rrstate.touched\">\n            Please enter state!\n        </span>\n        <label class=\"label\"\n               for=\"phone\">\n          phone\n        </label>\n        <input type=\"text\"\n               id=\"phone\"\n               name=\"phone\"\n               [(ngModel)]=\"phone\"\n               required\n               #rrphone=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"phone\" />\n        <span class=\"help-block\" *ngIf=\"!rrphone.valid && rrphone.touched\">\n            Please enter phone!\n        </span>\n        <a [routerLink]=\"['/restaurant', restaurant.id, 'order', orderId]\"\n           class=\"btn btn-block btn-default\">\n          Back\n        </a>\n      </div>\n      <div class=\"cart col-xs-12 col-sm-4\">\n        <h3>{{rname}}</h3>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6\">\n                Item\n              </div>\n              <div class=\"col-xs-3\">\n                Qty\n              </div>\n              <div class=\"col-xs-3\">\n                Price\n              </div>\n            </div>\n          </li>\n          <li class=\"list-group-item\" *ngFor=\"let item of items\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                {{item.name}}\n              </div>\n              <div class=\"col-xs-3\">\n                {{item.quantity}}\n              </div>\n              <div class=\"col-xs-3\">\n                ${{item.price}}\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"cost_summary\">\n          <div class=\"summary\">\n            SubTotal:\n            <span>${{subTotal}}</span>\n          </div>\n          <div class=\"summary\">\n            Tax:\n            <span>${{tax}}</span>\n          </div>\n          <div class=\"summary\">\n            Delivery Charge:\n            <span>${{deliveryCharge}}</span>\n          </div>\n          <div class=\"summary\">\n            Total:\n            <span>${{total}}</span>\n          </div>\n        </div>\n        <div>\n          <button type=\"submit\"\n                  class=\"btn btn-lg btn-success btn-block\"\n                  [disabled]=\"!f.valid\">\n            Complete\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order-checkout/order-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__ = __webpack_require__("../../../../../src/app/services/orderItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderCheckoutComponent = (function () {
    function OrderCheckoutComponent(orderService, router, userService, activatedRoute, sharedService, restaurantService, orderItemService) {
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.restaurantService = restaurantService;
        this.orderItemService = orderItemService;
        this.items = [];
        this.restaurant = {};
    }
    OrderCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.orderId = params['orderId'];
        });
        this.loadOrder();
        this.restaurantService.SearchBusinessById(this.restaurantId)
            .subscribe(function (result) {
            _this.rname = result.name;
            _this.rimage = result.image_url;
            _this.restaurant = result;
        });
        this.loadOrderItems();
    };
    OrderCheckoutComponent.prototype.loadOrder = function () {
        var _this = this;
        this.orderService.findOrderById(this.orderId)
            .subscribe(function (order) {
            _this.order = order;
            _this.subTotal = order.subTotal;
            _this.total = order.total;
            if (_this.subTotal <= 0) {
                _this.router.navigate(['restaurant', _this.restaurantId, 'order', _this.orderId]);
            }
            else {
                _this.rstate = order.state;
                _this.deliveryCharge = order.deliveryCharge;
                _this.minOrderLimit = order.minOrderLimit;
                _this.tax = order.tax;
                _this.address = order.address;
                if (_this.address) {
                    _this.name = _this.address['name'];
                    _this.street = _this.address['street'];
                    _this.apt = _this.address['apt'];
                    _this.city = _this.address['city'];
                    _this.state = _this.address['state'];
                    _this.zipCode = _this.address['zipCode'];
                    _this.phone = _this.address['phone'];
                }
            }
        });
    };
    OrderCheckoutComponent.prototype.loadOrderItems = function () {
        var _this = this;
        this.orderItemService.findAllByOrder(this.orderId)
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    OrderCheckoutComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    OrderCheckoutComponent.prototype.update = function () {
        var _this = this;
        var order = {
            address: {
                name: this.addressForm.value.name,
                street: this.addressForm.value.street,
                city: this.addressForm.value.city,
                zipCode: this.addressForm.value.zipCode,
                state: this.addressForm.value.state,
                apt: this.addressForm.value.apt,
                phone: this.addressForm.value.phone
            },
            state: 'paid'
        };
        this.orderService.updateOrder(this.orderId, order)
            .subscribe(function (status) {
            _this.router.navigate(['restaurant', _this.restaurantId, 'order', _this.orderId, 'complete']);
        });
    };
    return OrderCheckoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["NgForm"]) === "function" && _a || Object)
], OrderCheckoutComponent.prototype, "addressForm", void 0);
OrderCheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-checkout',
        template: __webpack_require__("../../../../../src/app/components/order/order-checkout/order-checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order-checkout/order-checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__["a" /* OrderItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__["a" /* OrderItemService */]) === "function" && _h || Object])
], OrderCheckoutComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=order-checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order-complete/order-complete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address {\n  border: 2px solid #f5f5f5;\n  padding: 2rem;\n  border-radius: 5px;\n  margin-top: 1rem;\n}\n\n.details {\n  clear: both;\n  margin-left: auto;\n  margin-right: auto;\n  float: none;\n}\n\n.image {\n  border-radius: 5px;\n  width: 100%;\n  height: auto;\n}\n\n.cart {\n  background-color: #efefef;\n  padding: 2rem;\n  margin-top: 1rem;\n}\n\n.summary span {\n  float: right;\n  margin-right: 1rem;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order-complete/order-complete.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid food-center\">\n    <span class=\"food-center\">FoOdSpOt </span>\n    <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              My Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/orders']\">\n              My Orders\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ng-template #login>\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n          Login\n        </a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n          Sign Up\n        </a>\n      </div>\n    </ng-template>\n  </div>\n</header>\n<div class=\"container food-bottombuff\">\n  <h2 class=\"text-center text-success\">{{stateText()}}</h2>\n  <div class=\"row\">\n    <div class=\"address col-xs-6 col-sm-4\">\n      Delivery Address:\n      <p>{{name}}</p>\n      <p>{{street}}</p>\n      <p>{{apt}}</p>\n      <p>{{city}}</p>\n      <p>{{state}} - {{zipCode}}</p>\n      <p>{{phone}}</p>\n    </div>\n    <div class=\"col-xs-6 col-sm-4\">\n      <h2 class=\"text-center text-capitalize\">{{rname}}</h2>\n      <div class=\"col-xs-6 details\">\n        <a [routerLink]=\"['/restaurant', restaurant.id]\">\n          <img class=\"image\" src=\"{{restaurant['image_url']}}\" />\n        </a>\n      </div>\n    </div>\n    <div class=\"cart col-xs-12 col-sm-4\">\n      <h3>{{rname}}</h3>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6\">\n              Item\n            </div>\n            <div class=\"col-xs-3\">\n              Qty\n            </div>\n            <div class=\"col-xs-3\">\n              Price\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\" *ngFor=\"let item of items\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              {{item.name}}\n            </div>\n            <div class=\"col-xs-3\">\n              {{item.quantity}}\n            </div>\n            <div class=\"col-xs-3\">\n              ${{item.price}}\n            </div>\n          </div>\n        </li>\n      </ul>\n      <div class=\"cost_summary\">\n        <div class=\"summary\">\n          SubTotal:\n          <span>${{subTotal}}</span>\n        </div>\n        <div class=\"summary\">\n          Tax:\n          <span>${{tax}}</span>\n        </div>\n        <div class=\"summary\">\n          Delivery Charge:\n          <span>${{deliveryCharge}}</span>\n        </div>\n        <div class=\"summary\">\n          Total:\n          <span>${{total}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br/>\n  <a [routerLink]=\"['/']\"\n     class=\"btn btn-block btn-primary\">\n    Go to Homepage\n  </a>\n</div>\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order-complete/order-complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__ = __webpack_require__("../../../../../src/app/services/orderItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderCompleteComponent = (function () {
    function OrderCompleteComponent(orderService, router, userService, sharedService, activatedRoute, restaurantService, orderItemService) {
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.restaurantService = restaurantService;
        this.orderItemService = orderItemService;
        this.items = [];
        this.restaurant = {};
    }
    OrderCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.orderId = params['orderId'];
        });
        this.loadOrder();
        this.restaurantService.SearchBusinessById(this.restaurantId)
            .subscribe(function (result) {
            _this.rname = result.name;
            _this.rimage = result.image_url;
            _this.restaurant = result;
        });
        this.loadOrderItems();
    };
    OrderCompleteComponent.prototype.loadOrder = function () {
        var _this = this;
        this.orderService.findOrderById(this.orderId)
            .subscribe(function (order) {
            _this.order = order;
            if (_this.order === 'cart') {
                _this.router.navigate(['restaurant', _this.restaurantId, 'order', _this.orderId]);
            }
            else {
                _this.total = order.total;
                _this.subTotal = order.subTotal;
                _this.rstate = order.state;
                _this.deliveryCharge = order.deliveryCharge;
                _this.minOrderLimit = order.minOrderLimit;
                _this.tax = order.tax;
                _this.address = order.address;
                if (_this.address) {
                    _this.name = _this.address['name'];
                    _this.street = _this.address['street'];
                    _this.apt = _this.address['apt'];
                    _this.city = _this.address['city'];
                    _this.state = _this.address['state'];
                    _this.zipCode = _this.address['zipCode'];
                    _this.phone = _this.address['phone'];
                }
            }
        });
    };
    OrderCompleteComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    OrderCompleteComponent.prototype.loadOrderItems = function () {
        var _this = this;
        this.orderItemService.findAllByOrder(this.orderId)
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    OrderCompleteComponent.prototype.stateText = function () {
        if (this.rstate === 'paid') {
            return 'Thanks for Completeing the Order!';
        }
        else if (this.rstate === 'ready') {
            return 'Your Order is ready for delivery.';
        }
        else if (this.rstate === 'delivered') {
            return 'Your Order has been delivered.';
        }
        else if (this.rstate === 'cancelled') {
            return 'Your order has been cancelled';
        }
        else if (this.rstate === 'accepted') {
            return 'Your Order is now being prepared';
        }
    };
    return OrderCompleteComponent;
}());
OrderCompleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-complete',
        template: __webpack_require__("../../../../../src/app/components/order/order-complete/order-complete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order-complete/order-complete.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__["a" /* OrderItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_orderItem_service_client__["a" /* OrderItemService */]) === "function" && _g || Object])
], OrderCompleteComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=order-complete.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order-detail/order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart {\n  background-color: #efefef;\n  padding: 2rem;\n}\n\n.summary span {\n  float: right;\n  margin-right: 1rem;\n}\n\n.menu-item {\n  font-size: large;\n  color: #260585;\n}\n\n.description {\n  font-size: small;\n  padding-top: 5px;\n  color: #444;\n  line-height: 3;\n}\n\n.minimum {\n  color: #853800;\n  text-align: center;\n  padding: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order-detail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<header><div class=\"container-fluid food-center\">\n  <a [routerLink]=\"['/restaurant', restaurantId]\" class=\"white pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  <span class=\"food-center\">FoOdSpOt </span>\n\n  <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n        <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a [routerLink]=\"['/profile']\">\n            My Profile\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/orders']\">\n            My Orders\n          </a>\n        </li>\n        <li>\n          <a (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <ng-template #login>\n    <div class=\"pull-right\">\n      <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n        Login\n      </a>\n      <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n        Sign Up\n      </a>\n    </div>\n  </ng-template>\n</div>\n</header>\n<div class=\"container food-bottombuff\">\n  <div class=\"details\">\n    <div class=\"image-container col-xs-3 col-sm-2\">\n      <a [routerLink]=\"['/restaurant', restaurant.id]\">\n        <img class=\"restro_image thumbnail\" src=\"{{restaurant['image_url']}}\" />\n      </a>\n    </div>\n    <h2>{{name}}</h2>\n    <div>\n      <rating [(ngModel)]=\"restaurant['rating']\"\n              readonly=\"true\"\n              [float]=\"true\">\n      </rating>\n      <span class=\"reviews\">Reviews: {{restaurant['review_count']}}</span>\n      <div class=\"costing clearfix\">{{restaurant['price']}}</div>\n    </div>\n    <h3>Menu</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"menu col-xs-12 col-sm-8\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let item of menuItems\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 menu-item\">\n              {{item.name}}\n              <span class=\"description\">{{item.description}}</span>\n            </div>\n            <div class=\"col-xs-3 price\">\n              ${{item.price}}\n              <a (click)=\"add(item)\" class=\"pull-right\">\n                Add\n                <span class=\"glyphicon glyphicon-plus\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"cart col-xs-12 col-sm-4\">\n      <h3>{{name}}</h3>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6\">\n              Item\n            </div>\n            <div class=\"col-xs-3\">\n              Qty\n            </div>\n            <div class=\"col-xs-3\">\n              Price\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\" *ngFor=\"let item of items\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              {{item.name}}\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"glyphicon glyphicon-minus-sign\" (click)=\"reduceQuantity(item)\">\n              </a>\n              {{item.quantity}}\n              <a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addQuantity(item)\">\n              </a>\n            </div>\n            <div class=\"col-xs-3\">\n              ${{item.price}}\n              <a class=\"glyphicon glyphicon-remove-sign pull-right\" (click)=\"deleteItem(item)\">\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <div class=\"cost_summary\">\n        <div class=\"summary\">\n          SubTotal:\n          <span>${{subTotal}}</span>\n        </div>\n        <div class=\"summary\">\n          Tax:\n          <span>${{tax}}</span>\n        </div>\n        <div class=\"summary\">\n          Delivery Charge:\n          <span>${{deliveryCharge}}</span>\n        </div>\n        <div class=\"summary\">\n          Total:\n          <span>${{total}}</span>\n        </div>\n      </div>\n      <div *ngIf=\"state=='cart'\">\n        <button [routerLink]=\"['/restaurant', restaurant.id, 'order', orderId, 'checkout']\"\n                class=\"btn btn-lg btn-success btn-block\"\n                [disabled]=\"valid()\">\n          CHECKOUT\n        </button>\n        <div class=\"minimum\">\n          Delivery Minimum: ${{minOrderLimit}}\n          <br/>\n          <span class=\"small\">*On SubTotal</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order-detail/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_menuItem_service_client__ = __webpack_require__("../../../../../src/app/services/menuItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_orderItem_service_client__ = __webpack_require__("../../../../../src/app/services/orderItem.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrderDetailComponent = (function () {
    function OrderDetailComponent(orderService, router, activatedRoute, restaurantService, menuService, sharedService, userService, menuItemService, orderItemService) {
        this.orderService = orderService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.restaurantService = restaurantService;
        this.menuService = menuService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.menuItemService = menuItemService;
        this.orderItemService = orderItemService;
        this.items = [];
        this.menuItems = [];
        this.restaurant = {};
        this.address = {};
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
            _this.orderId = params['orderId'];
        });
        this.loadOrders();
        this.restaurantService.SearchBusinessById(this.restaurantId)
            .subscribe(function (result) {
            _this.name = result.name;
            _this.image = result.image_url;
            _this.restaurant = result;
        });
        this.loadOrderItems();
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            _this.menu = menu;
            _this.menuItemService.findMenuItemsByMenuId(_this.menu['_id'])
                .subscribe(function (menuItems) {
                _this.menuItems = menuItems;
            });
        });
    };
    OrderDetailComponent.prototype.valid = function () {
        return this.subTotal < this.minOrderLimit || this.subTotal < 0.1;
    };
    OrderDetailComponent.prototype.loadOrders = function () {
        var _this = this;
        this.orderService.findOrderById(this.orderId)
            .subscribe(function (order) {
            _this.order = order;
            _this.total = order.total;
            _this.subTotal = order.subTotal;
            _this.state = order.state;
            _this.deliveryCharge = order.deliveryCharge;
            _this.minOrderLimit = order.minOrderLimit;
            _this.tax = order.tax;
        });
    };
    OrderDetailComponent.prototype.loadOrderItems = function () {
        var _this = this;
        this.orderItemService.findAllByOrder(this.orderId)
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    OrderDetailComponent.prototype.updateOrder = function (price) {
        var _this = this;
        var order = {
            subTotal: this.subTotal + price,
            total: this.total + price
        };
        this.orderService.updateOrder(this.orderId, order)
            .subscribe(function (orderItem) {
            _this.loadOrders();
        });
    };
    OrderDetailComponent.prototype.add = function (mItem) {
        var _this = this;
        var item = {
            quantity: 1,
            name: mItem.name,
            price: mItem.price,
            orderId: this.orderId
        };
        this.orderItemService.createOrderitem(item)
            .subscribe(function (orderItem) {
            _this.updateOrder(item.price);
            _this.loadOrderItems();
        });
    };
    OrderDetailComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    OrderDetailComponent.prototype.addQuantity = function (oItem) {
        var _this = this;
        var addedPrice = oItem.price / oItem.quantity;
        var item = {
            quantity: oItem.quantity + 1,
            price: oItem.price + addedPrice
        };
        this.orderItemService.updateOrderItem(oItem._id, item)
            .subscribe(function (status) {
            _this.updateOrder(addedPrice);
            _this.loadOrderItems();
        });
    };
    OrderDetailComponent.prototype.reduceQuantity = function (oItem) {
        var _this = this;
        var reducedPrice = oItem.price / oItem.quantity;
        var item = {
            quantity: oItem.quantity - 1,
            price: oItem.price - reducedPrice
        };
        if (item.price <= 0) {
            this.deleteItem(oItem);
        }
        else {
            this.orderItemService.updateOrderItem(oItem._id, item)
                .subscribe(function (status) {
                _this.updateOrder(-reducedPrice);
                _this.loadOrderItems();
            });
        }
    };
    OrderDetailComponent.prototype.deleteItem = function (oItem) {
        var _this = this;
        // const reducedPrice = oItem.price / oItem.quantity;
        this.orderItemService.deleteOrderItem(oItem._id)
            .subscribe(function (status) {
            _this.updateOrder(-oItem.price);
            _this.loadOrderItems();
        });
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-detail',
        template: __webpack_require__("../../../../../src/app/components/order/order-detail/order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order-detail/order-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service_client__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_menu_service_client__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_menuItem_service_client__["a" /* MenuItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_menuItem_service_client__["a" /* MenuItemService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__services_orderItem_service_client__["a" /* OrderItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_orderItem_service_client__["a" /* OrderItemService */]) === "function" && _j || Object])
], OrderDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order-edit/order-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order-edit/order-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order-edit/order-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderEditComponent; });
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

var OrderEditComponent = (function () {
    function OrderEditComponent() {
    }
    OrderEditComponent.prototype.ngOnInit = function () {
    };
    return OrderEditComponent;
}());
OrderEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-edit',
        template: __webpack_require__("../../../../../src/app/components/order/order-edit/order-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order-edit/order-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderEditComponent);

//# sourceMappingURL=order-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order-list/order-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order-list/order-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div *ngIf=\"role === 'Admin'; else manager\">\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/customer']\">Customers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/manager']\">Managers</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/admin/profile']\">Profile</a></li>\n    </ul>\n\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/manager/', managerId]\" class=\"btn\">\n          Manager's Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/admin/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #manager>\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant', restaurantId]\" class=\"btn\">\n          Manager's Profile\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'driver']\" class=\"btn\">\n          View Drivers\n        </a>\n      </li>\n      <li role=\"presentation\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'chef']\" class=\"btn\">\n          View Chefs\n        </a>\n      </li>\n      <li role=\"presentation\" class=\"active\">\n        <a [routerLink]=\"['/manager/restaurant/', restaurantId, 'order']\" class=\"btn\">\n          View Orders\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4\">\n          Order Number\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          Order Price\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          Order Status\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let order of orders\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4\">\n          <a>\n            {{order['_id']}}\n          </a>\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          {{order['total']}}\n        </div>\n        <div class=\"col-sm-4  hidden-xs\">\n          {{order['state']}}\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order-list/order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderListComponent = (function () {
    function OrderListComponent(activatedRoute, orderService, sharedService, userService) {
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.manager = {};
        this.user = {};
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.user = this.sharedService.user;
        this.role = this.user['role'];
        this.orderService.findAllOrdersByRestaurant(this.restaurantId, null)
            .subscribe(function (orders) {
            _this.orders = orders;
        });
        this.userService.findManagerByRestaurantId(this.restaurantId)
            .subscribe(function (manager) {
            _this.managerId = manager['_id'];
            _this.manager = manager;
        });
    };
    return OrderListComponent;
}());
OrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-list',
        template: __webpack_require__("../../../../../src/app/components/order/order-list/order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order-list/order-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], OrderListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-cropped {\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 5px;\n}\n\n.items {\n  height: 400px;\n  width: 1000px;\n}\n\n.ng2-carouselamos-wrapper {\n  width: 100% !important;\n}\n\n.white {\n  color: #ffffff;\n}\n\n.timings {\n  padding: 1rem;\n  background-color: #efefef;\n}\n\n.name {\n  font-weight: 700;\n  font-size: large;\n}\n\n.review-text {\n  font-style: italic;\n}\n\n.time-slot a{\n  margin-bottom: 5px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid food-center\">\n  <a [routerLink]=\"['/']\" class=\"white pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <span class=\"food-center\">FoOdSpOt </span>\n\n  <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n        <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a [routerLink]=\"['/profile']\">\n            My Profile\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/orders']\">\n            My Orders\n          </a>\n        </li>\n        <li>\n          <a (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <ng-template #login>\n    <div class=\"pull-right\">\n      <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n        Login\n      </a>\n      <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n        Sign Up\n      </a>\n    </div>\n  </ng-template>\n  </div>\n</header>\n<div class=\"container food-bottombuff\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4\">\n      <h1>{{name}}</h1>\n      <div *ngIf=\"(manager | json) == '{}'; else other\">\n        <a [routerLink]=\"['/restaurant', restaurant.id, 'register']\" class=\"pull-right\">\n          Claim this restaurant\n        </a>\n      </div>\n      <ng-template #other>\n        <a [routerLink]=\"['/restaurant', restaurant.id, 'chef', 'register']\" class=\"pull-right\">\n          Register as a Chef\n        </a>\n        <br/>\n        <a [routerLink]=\"['/restaurant', restaurant.id, 'driver', 'register']\" class=\"pull-right\">\n          Register as a Delivery agent\n        </a>\n      </ng-template>\n      <div>\n        <rating [(ngModel)]=\"restaurant['rating']\"\n                readonly=\"true\"\n                [float]=\"true\">\n        </rating>\n        <span class=\"reviews\">Reviews: {{restaurant['review_count']}}</span>\n        <div class=\"price\">{{restaurant['price']}}</div>\n        <div class=\"categories\">\n          Categories:\n          {{categories(restaurant['categories'])}}\n        </div>\n      </div>\n\n      <ngui-map\n        zoom=\"11\"\n        [center]=\"city\">\n        <marker *ngFor=\"let pos of positions\"\n                [position]=\"pos\"></marker>\n      </ngui-map>\n\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <div\n        ng2-carouselamos\n        class=\"slides-wrapper\"\n        [items]=\"images\"\n        [width]=\"1000\"\n        [$prev]=\"prev\"\n        [$next]=\"next\"\n        [$item]=\"item\">\n      </div>\n      <ng-template #prev>\n        <span class=\"glyphicon glyphicon-arrow-left white\"></span>\n      </ng-template>\n      <ng-template #next>\n        <span class=\"glyphicon glyphicon-arrow-right white\"></span>\n      </ng-template>\n      <ng-template #item let-item let-i=\"index\">\n\n        <div class=\"items\">\n          <img class=\"center-cropped\" src=\"{{ item }}\">\n        </div>\n\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-8\">\n      <div *ngIf=\"reviews.length > 0\">\n        <h3>Some of the Reviews from Yelp</h3>\n        <ul class=\"list-group\">\n          <li *ngFor=\"let review of reviews\" class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-2\">\n                <img class=\"restro_image thumbnail\" src=\"{{review['user']['image_url']}}\" />\n              </div>\n              <div class=\"name col-xs-6 col-sm-10\">\n                {{review['user']['name']}}\n              </div>\n              <div class=\"review-text\">\n                {{review['text']}}\n                <a [href]=\"review['url']\" target=\"_blank\">\n                  Read more\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"more\">\n          <a [href]=\"restaurant['url']\"\n             target=\"_blank\">\n            Read more reviews on Yelp\n            <span class=\"glyphicon glyphicon-arrow-right\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 time-slot\">\n      <div *ngIf=\"shouldShow\">\n        <div *ngIf=\"user && (order | json) == '{}';else second\">\n          <a (click)=\"createOrder()\"\n             class=\"btn btn-success\">Place an Order\n          </a>\n        </div>\n        <ng-template #second>\n          <ng-container *ngIf=\"user; else third\">\n            <a [routerLink]=\"['/restaurant', restaurant.id, 'order', order['_id']]\"\n               class=\"btn btn-success\">\n              Continue your Order\n            </a>\n          </ng-container>\n        </ng-template>\n        <ng-template #third>\n          <a [routerLink]=\"['/login']\"\n             class=\"btn btn-primary btn-lg\">\n            Login/Sign up to Order online\n          </a>\n        </ng-template>\n      </div>\n      <div class=\"timings\">\n        <h3>Hours of Operation</h3>\n        <div class=\"text-info\">\n          Contact Information: {{restaurant['display_phone']}}\n        </div>\n        <ul class=\"list-group\">\n          <li *ngFor=\"let day of days; let i = index\" [attr.data-index]=\"i\" class=\"list-group-item\">\n            {{day}} : {{ hours[i]['start']}} - {{hours[i]['end']}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu_service_client__ = __webpack_require__("../../../../../src/app/services/menu.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RestaurantDetailComponent = (function () {
    function RestaurantDetailComponent(restaurantService, activatedRoute, orderService, router, sharedService, userService, menuService) {
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
        this.menuService = menuService;
        this.images = [];
        this.restaurant = {};
        this.positions = [];
        this.hours = [];
        this.days = [];
        this.reviews = [];
        this.order = {};
        this.menu = {};
        this.manager = {};
    }
    RestaurantDetailComponent.prototype.SearchBusinessById = function (id) {
        var _this = this;
        // this.user = this.sharedService.user;
        this.restaurantService.SearchBusinessById(id)
            .subscribe(function (result) {
            _this.name = result.name;
            _this.image = result.image_url;
            _this.ratings = result.rating;
            _this.restaurant = result;
        });
    };
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.restaurantId = params['restaurantId'];
        });
        this.userService.currentUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.orderService.findOrderByRestaurantAndCustomer(_this.restaurantId, _this.user._id, 'cart')
                .subscribe(function (order) {
                if (order) {
                    _this.order = order;
                }
            });
        });
        this.restaurantService.SearchBusinessById(this.restaurantId)
            .subscribe(function (result) {
            var coordinates = result['coordinates'];
            _this.name = result.name;
            _this.image = result.image_url;
            _this.ratings = result.rating;
            _this.number = result.phone;
            _this.images = result.photos;
            _this.restaurant = result;
            _this.positions = [[coordinates['latitude'], coordinates['longitude']]];
            _this.center = coordinates['latitude'].toString() + ', ' + coordinates['longitude'].toString();
            console.log(_this.hours);
            _this.hours = result.hours[0]['open'];
            _this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            _this.city = result.location['city'];
            _this.canOrder();
        });
        this.userService.findManagerByRestaurantId(this.restaurantId)
            .subscribe(function (result) {
            _this.manager = result;
        });
        this.restaurantService.getReviewsById(this.restaurantId)
            .subscribe(function (result) {
            _this.reviews = result.reviews;
        });
    };
    RestaurantDetailComponent.prototype.categories = function (cats) {
        if (cats) {
            return cats.map(function (a) { return a.title; }).join(', ');
        }
        else {
            return '';
        }
    };
    RestaurantDetailComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    RestaurantDetailComponent.prototype.createOrder = function () {
        var _this = this;
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            _this.menu = menu;
            _this.order = {
                restaurantId: _this.restaurantId,
                customerId: _this.user,
                deliveryCharge: _this.menu['deliveryCharge'],
                minOrderLimit: _this.menu['orderLimit'],
                total: _this.menu['deliveryCharge']
            };
            _this.orderService.createOrder(_this.order, _this.restaurantId)
                .subscribe(function (order) { return _this.router.navigate(['restaurant', _this.restaurantId, 'order', order._id]); });
        });
    };
    RestaurantDetailComponent.prototype.canOrder = function () {
        var _this = this;
        this.menuService.findMenuByRestroId(this.restaurantId)
            .subscribe(function (menu) {
            if (menu) {
                _this.shouldShow = true;
            }
            else {
                _this.shouldShow = false;
            }
        });
    };
    return RestaurantDetailComponent;
}());
RestaurantDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-restaurant.detail',
        template: __webpack_require__("../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/restaurant/restaurant.detail/restaurant.detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service_client__["a" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_menu_service_client__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_menu_service_client__["a" /* MenuService */]) === "function" && _g || Object])
], RestaurantDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=restaurant.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<input [(ngModel)]=\"restaurant\" placeholder=\"Restaurant Name\" class=\"restaurant_seach_input_field form-control\">-->\n<!--<input [(ngModel)]=\"location\" placeholder=\"Location\" class=\"location_seach_input_field form-control\">-->\n<!--<button (click)=\"SearchRestaurant(restaurant,location)\"-->\n<!--class=\"btn btn-primary btn-block search_button\">Search</button>-->\n<header>\n  <div class=\"container-fluid food-center\">\n    <a [routerLink]=\"['/']\" class=\"white pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <span class=\"food-center\">FoOdSpOt </span>\n\n    <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              My Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/orders']\">\n              My Orders\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ng-template #login>\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n          Login\n        </a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n          Sign Up\n        </a>\n      </div>\n    </ng-template>\n  </div>\n</header>\n<div class=\"container food-bottombuff\"  >\n  <div class=\"row search-box\">\n    <div class=\"col-xs-12 col-sm-4\">\n      <input [(ngModel)]=\"restaurant\" placeholder=\"Restaurant Name\" class=\"restaurant_seach_input_field form-control\">\n    </div>\n    <div class=\"col-xs-12 col-sm-4\">\n      <input [(ngModel)]=\"location\" placeholder=\"Location\" class=\"location_]seach_input_field form-control\">\n    </div>\n    <div class=\"col-xs-12 col-sm-4\">\n      <button (click)=\"SearchRestaurant(restaurant,location)\"\n              class=\"btn btn-primary btn-block search_button\">\n          <span class=\"glyphicon glyphicon-search\">\n          </span>\n        Search\n      </button>\n    </div>\n  </div>\n  <div class=\"search-results\">\n    <div class=\"row search-row\" *ngFor=\"let restaurant of searchedRestro\">\n      <div class=\"image-container col-xs-3 col-sm-offset-2 col-sm-2\">\n        <a [routerLink]=\"['/restaurant',restaurant.id]\">\n          <img class=\"restro_image thumbnail\" src=\"{{restaurant['image_url']}}\" />\n        </a>\n      </div>\n      <div class=\"col-xs-5 col-sm-4\">\n        <a [routerLink]=\"['/restaurant',restaurant.id]\">\n          {{restaurant['name']}}\n        </a>\n        <div>\n          <rating [(ngModel)]=\"restaurant['rating']\"\n                  readonly=\"true\"\n                  [float]=\"true\">\n          </rating>\n          <span class=\"reviews\">Reviews: {{restaurant.review_count}}</span>\n          <div class=\"price\">{{restaurant.price}}</div>\n          <div class=\"categories\">{{categories(restaurant.categories)}} </div>\n        </div>\n      </div>\n      <div class=\"col-xs-4 col-sm-2\">\n        {{restaurant['location'].address1}}\n        {{restaurant['location'].address2}}\n        {{restaurant['location'].city}}\n        {{restaurant['location'].zip_code}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantListComponent = (function () {
    function RestaurantListComponent(restaurantService, userService, sharedService, activatedRoute, router) {
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.searchedRestro = [];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    RestaurantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.restaurant = params['restaurant'];
            _this.location = params['location'];
        });
        this.restaurantService.searchRestaurantByName(this.restaurant, this.location)
            .subscribe(function (result) {
            _this.result = result;
            _this.searchedRestro = result['businesses'];
        });
    };
    RestaurantListComponent.prototype.SearchRestaurant = function (restaurant, location) {
        this.restaurant = restaurant;
        this.location = location;
        this.router.navigate(['search'], { queryParams: { restaurant: this.restaurant, location: this.location } });
    };
    RestaurantListComponent.prototype.categories = function (cats) {
        return cats.map(function (a) { return a.title; }).join(', ');
    };
    RestaurantListComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return RestaurantListComponent;
}());
RestaurantListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-restaurant-list',
        template: __webpack_require__("../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/restaurant/restaurant.list/restaurant.list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RestaurantListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=restaurant.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-home\">\n  <div class=\"container\">\n    <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              My Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/orders']\">\n              My Orders\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ng-template #login>\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['login']\" class=\"btn btn-default btn-lg\">\n          Login\n        </a>\n        <a [routerLink]=\"['register']\" class=\"btn btn-primary btn-lg\">\n          Sign Up\n        </a>\n      </div>\n    </ng-template>\n\n    <div class=\"center-block logo\">\n      <img src=\"../../../../assets/resources/logo.png\">\n    </div>\n    <div class=\"row search-box\">\n      <div class=\"col-xs-12 col-sm-6\">\n        <input [(ngModel)]=\"restaurant\" placeholder=\"Restaurant Name/Cuisine\" class=\"restaurant_seach_input_field form-control\">\n      </div>\n      <div class=\"col-xs-12 col-sm-6\">\n        <input [(ngModel)]=\"location\" placeholder=\"Location\" class=\"location_seach_input_field form-control\">\n      </div>\n      <div class=\"col-xs-12 col-sm-12\">\n        <button (click)=\"SearchRestaurant(restaurant,location)\"\n                class=\"btn btn-primary btn-block search_button\">\n          <span class=\"glyphicon glyphicon-search\">\n          </span>\n          Search\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n  <nav class=\"text-center\">\n    <ul class=\"home\">\n      <li>\n        <img src=\"http://www.yarlolaigifts.com/image/cache/catalog/Products/FoodAndWine/Food/Cosy/Chinese-Chicken-Noodle-220x220_0.png\" alt=\"Chinese\">\n        <span>Chinese</span>\n      </li>\n      <li>\n        <img src=\"http://eatmorefellinis.com/communities/5/000/001/377/115//images/4032063.jpg\" alt=\"Pizza\">\n        <span>Pizza</span>\n      </li>\n      <li>\n        <img src=\"http://www.myserviceprofile.com/clientimages/Photo_25967_1.jpg\" alt=\"Thai\">\n        <span>Thai</span>\n      </li>\n      <li>\n        <img src=\"http://sushiworldoc.com/sites/default/files/styles/medium/public/Orange-County-Sushi-World-OC-Unique-Custom-Sushi-Rolls-Avocado-Albacore-Tuna-Sesame-Seeds.jpg?itok=aYlnfJn_\" alt=\"Sushi\">\n        <span>Sushi</span>\n      </li>\n      <li>\n        <img src=\"http://line-around.com/wp-content/uploads/2015/04/3304382-indian-food-001-220x220.jpg\" alt=\"Indian\">\n        <span>Indian</span>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"container how-to\">\n    <h2 class=\"text-center text-primary\">Simple steps to Order online</h2>\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <span class=\"glyphicon glyphicon-search home\"></span>\n        <div class=\"home-desc\">\n          Search for your favorite Restaurant online with location\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <span class=\"glyphicon glyphicon-shopping-cart home\"></span>\n        <div class=\"home-desc\">\n          Add Items to your card from the restaurant menu\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <span class=\"glyphicon glyphicon-map-marker home\"></span>\n        <div class=\"home-desc\">\n          Enter your delivery address. Click Complete Order.\n          All Set!\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__ = __webpack_require__("../../../../../src/app/services/restaurant.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantSearchComponent = (function () {
    function RestaurantSearchComponent(restaurantService, router, sharedService, userService) {
        this.restaurantService = restaurantService;
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    RestaurantSearchComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    RestaurantSearchComponent.prototype.SearchRestaurant = function (restaurant, location) {
        this.restaurant = restaurant;
        this.location = location;
        this.router.navigate(['search'], { queryParams: { restaurant: this.restaurant, location: this.location } });
    };
    RestaurantSearchComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return RestaurantSearchComponent;
}());
RestaurantSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-restaurant.search.test',
        template: __webpack_require__("../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/restaurant/restaurant.search/restaurant.search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_restaurant_service_client__["a" /* RestaurantServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], RestaurantSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=restaurant.search.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           #password=\"ngModel\"\n           required\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <a [routerLink]= \"['/register']\" class=\"btn btn-success btn-block\">Register</a>\n    <!--<a href=\"http://localhost:3000/auth/facebook\" class=\"btn btn-primary btn-block\">-->\n      <!--<span class=\"fa fa-facebook\"></span>-->\n      <!--Facebook-->\n    <!--</a>-->\n    <a href=\"https://food-spot.herokuapp.com/auth/facebook\" class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid Username/Password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.sharedService.user = data;
            _this.role = _this.sharedService.user['role'];
            if (_this.role === 'Chef') {
                _this.router.navigate(['chef/restaurant/', _this.sharedService.user['restaurantId'], 'order']);
            }
            else if (_this.role === 'Manager') {
                _this.router.navigate(['manager/restaurant', _this.sharedService.user['restaurantId']]);
            }
            else if (_this.role === 'Driver') {
                _this.router.navigate(['driver/restaurant/', _this.sharedService.user['restaurantId'], 'order']);
            }
            else if (_this.role === 'Admin') {
                _this.router.navigate(['admin', 'manager']);
            }
            else {
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<header>\n  <a [routerLink]=\"['']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  Profile\n  <button type=\"submit\"\n          class=\"pull-right white btn\"\n          [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n</header>\n<div class=\"container-fluid profile clearfix\">\n  <label for=\"username\" class=\"label\">Username</label>\n  <input type=\"text\"\n         id=\"username\"\n         name=\"username\"\n         [(ngModel)]=\"username\"\n         class=\"form-control\" />\n\n  <label for=\"email\" class=\"label\">Email</label>\n  <input type=\"email\"\n         id=\"email\"\n         name=\"email\"\n         [(ngModel)]=\"email\"\n         class=\"form-control\" />\n\n  <label for=\"first_name\" class=\"label\">First Name</label>\n  <input type=\"text\"\n         id=\"first_name\"\n         name=\"first_name\"\n         [(ngModel)]=\"first_name\"\n         class=\"form-control\" />\n\n  <label for=\"last_name\" class=\"label\">Last Name</label>\n  <input type=\"text\"\n         id=\"last_name\"\n         name=\"last_name\"\n         [(ngModel)]=\"last_name\"\n         class=\"form-control\" />\n\n  <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">Logout</a>\n</div>\n</form>\n<footer>\n  <a [routerLink]= \"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function ProfileComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.activatedRoute.params
        //   .subscribe(
        //     (params: any) => {
        //       this.userId = params['userId'];
        //     }
        //   );
        //   this.userService.findUserById(this.userId)
        //     .subscribe(
        //       (user: any) => {
        //         this.errorFlag = false;
        //         this.username = user['username'];
        //         this.last_name = user['lastName'];
        //         this.first_name = user['firstName'];
        //         this.email = user['email'];
        //       },
        //       (error: any) => {
        //         this.errorFlag = true;
        //       }
        //     );
        this.user = this.sharedService.user;
        if (this.user) {
            this.errorFlag = false;
            this.username = this.user['username'];
            this.last_name = this.user['lastName'];
            this.first_name = this.user['firstName'];
            this.email = this.user['email'];
            this.userId = this.user['_id'];
        }
        else {
            this.errorFlag = true;
        }
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
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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
            .subscribe(function (newUser) {
            _this.errorFlag = false;
            _this.router.navigate(['profile']);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-order-list/user-order-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-order-list/user-order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid food-center\">\n    <a [routerLink]=\"['/']\" class=\"white pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <span class=\"food-center\">FoOdSpOt </span>\n    <div class=\"login pull-right\" *ngIf=\"this.user;else login\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Account\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              My Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/orders']\">\n              My Orders\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ng-template #login>\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">\n          Login\n        </a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">\n          Sign Up\n        </a>\n      </div>\n    </ng-template>\n  </div>\n</header>\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4\">\n          Order Number\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          Order Price\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          Order Status\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let order of orders\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4\">\n          <a [routerLink]=\"['/restaurant', order['restaurantId'], 'order', order['_id'], 'complete']\">\n            {{order['_id']}}\n          </a>\n        </div>\n        <div class=\"col-sm-4 hidden-xs\">\n          {{order['total']}}\n        </div>\n        <div class=\"col-sm-4  hidden-xs\">\n          {{order['state']}}\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<footer>\n  <div class=\"food-right\">\n    <p><b>© Abhishek Sadaab Vivek</b></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-order-list/user-order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__ = __webpack_require__("../../../../../src/app/services/order.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserOrderListComponent = (function () {
    function UserOrderListComponent(router, orderService, sharedService, userService) {
        this.router = router;
        this.orderService = orderService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.user = {};
    }
    UserOrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.role = this.user['role'];
        if (this.role === 'Customer') {
            this.orderService.findAllCustomerOrders(this.user['_id'], null)
                .subscribe(function (orders) {
                _this.orders = orders;
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    UserOrderListComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return UserOrderListComponent;
}());
UserOrderListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-order-list',
        template: __webpack_require__("../../../../../src/app/components/user/user-order-list/user-order-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-order-list/user-order-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service_client__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], UserOrderListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-order-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/menu.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuService = (function () {
    function MenuService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'findMenuByRestroId': this.findMenuByRestroId,
            'UpdateMenuByMenuId': this.UpdateMenuByMenuId,
        };
    }
    MenuService.prototype.createMenu = function (restroId, menu) {
        var url = this.baseUrl + '/api/restaurant/' + restroId + '/menu';
        return this.http.post(url, menu)
            .map(function (res) {
            return res.json();
        });
    };
    MenuService.prototype.findMenuByRestroId = function (restroId) {
        var url = this.baseUrl + '/api/restaurant/' + restroId + '/menu';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MenuService.prototype.UpdateMenuByMenuId = function (menuId, menu) {
        var url = this.baseUrl + '/api/restaurant/menu/' + menuId;
        return this.http.put(url, menu)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MenuService.prototype.findMenuById = function (menuId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/menu/' + menuId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MenuService.prototype.deleteMenu = function (menuId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/menu/' + menuId)
            .map(function (res) {
            return res.json();
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MenuService);

var _a, _b, _c;
//# sourceMappingURL=menu.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/menuItem.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
var MenuItemService = (function () {
    function MenuItemService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    MenuItemService.prototype.createMenuItem = function (menuId, item) {
        var url = this.baseUrl + '/api/restaurant/menu/' + menuId + '/menuItem';
        return this.http.post(url, item)
            .map(function (res) {
            return res.json();
        });
    };
    MenuItemService.prototype.findMenuItemByItemId = function (menuItemId) {
        var url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    MenuItemService.prototype.findMenuItemsByMenuId = function (menuId) {
        var url = this.baseUrl + '/api/menu/' + menuId + '/menuItem';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    MenuItemService.prototype.updateMenuItem = function (menuItemId, menuItem) {
        var url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
        return this.http.put(url, menuItem)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MenuItemService.prototype.deleteMenuItem = function (menuItemId) {
        var url = this.baseUrl + '/api/menu/menuItem/' + menuItemId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    MenuItemService.prototype.deleteMenuItemsByMenuId = function (menuId) {
        var url = this.baseUrl + '/api/menu/' + menuId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    return MenuItemService;
}());
MenuItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MenuItemService);

var _a, _b, _c;
//# sourceMappingURL=menuItem.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
var OrderService = (function () {
    function OrderService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createOrder': this.createOrder,
            'findOrderById': this.findOrderById,
            'findAllOrdersByRestaurant': this.findAllOrdersByRestaurant,
            'updateOrder': this.updateOrder,
            'findAllDriverOrders': this.findAllDriverOrders,
            'findAllCustomerOrders': this.findAllCustomerOrders,
            'findAllChefOrders': this.findAllChefOrders,
            'findOrderByRestaurantAndCustomer': this.findOrderByRestaurantAndCustomer
        };
    }
    OrderService.prototype.createOrder = function (order, restaurantId) {
        return this.http.post(this.baseUrl + '/api/restaurant/' + restaurantId + '/order', order)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    OrderService.prototype.findOrderById = function (orderId) {
        return this.http.get(this.baseUrl + '/api/order/' + orderId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    OrderService.prototype.findAllOrdersByRestaurant = function (restaurantId, state) {
        var url = '';
        if (state) {
            url = this.baseUrl + '/api/restaurant/' + restaurantId + '/order?state=' + state;
        }
        else {
            url = this.baseUrl + '/api/restaurant/' + restaurantId + '/order';
        }
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderService.prototype.updateOrder = function (orderId, order) {
        var url = this.baseUrl + '/api/order/' + orderId;
        return this.http.put(url, order)
            .map(function (res) {
            return res.json();
        });
    };
    OrderService.prototype.findAllDriverOrders = function (driverId, state) {
        var url = this.baseUrl + '/api/driver/' + driverId + 'order?state=' + state;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderService.prototype.findAllCustomerOrders = function (customerId, state) {
        var url = '';
        if (state) {
            url = this.baseUrl + '/api/user/' + customerId + '/order?state=' + state;
        }
        else {
            url = this.baseUrl + '/api/user/' + customerId + '/order';
        }
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderService.prototype.findAllChefOrders = function (chefId, state) {
        var url = this.baseUrl + '/api/chef/' + chefId + 'order?state=' + state;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderService.prototype.findOrderByRestaurantAndCustomer = function (restaurantId, customerId, state) {
        var url = this.baseUrl + '/api/restaurant/' + restaurantId + '/customer/' + customerId + '/order?state=' + state;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OrderService);

var _a, _b, _c;
//# sourceMappingURL=order.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/orderItem.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderItemService = (function () {
    function OrderItemService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    OrderItemService.prototype.findAllByOrder = function (orderId) {
        var url = this.baseUrl + '/api/order/' + orderId + '/orderItem';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderItemService.prototype.findById = function (orderItemId) {
        var url = this.baseUrl + '/api/orderItem/orderItemId/' + orderItemId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderItemService.prototype.createOrderitem = function (orderItem) {
        var url = this.baseUrl + '/api/order/orderItem';
        return this.http.post(url, orderItem)
            .map(function (res) {
            return res.json();
        });
    };
    OrderItemService.prototype.deleteOrderItem = function (orderItemId) {
        var url = this.baseUrl + '/api/order/orderItem/' + orderItemId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    OrderItemService.prototype.updateOrderItem = function (orderItemId, orderItem) {
        var url = this.baseUrl + '/api/orderItem/' + orderItemId;
        return this.http.put(url, orderItem)
            .map(function (res) {
            return res.json();
        });
    };
    return OrderItemService;
}());
OrderItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OrderItemService);

var _a, _b, _c;
//# sourceMappingURL=orderItem.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/restaurant.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantServiceClient; });
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




var RestaurantServiceClient = (function () {
    function RestaurantServiceClient(http) {
        this.http = http;
    }
    RestaurantServiceClient.prototype.searchRestaurantByName = function (name, location) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + '/api/yelp/accesstoken?title=' + name + '&location=' + location;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    RestaurantServiceClient.prototype.SearchBusinessById = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + '/api/yelp/' + id;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    RestaurantServiceClient.prototype.getReviewsById = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl + '/api/yelp/' + id + '/reviews';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return RestaurantServiceClient;
}());
RestaurantServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RestaurantServiceClient);

var _a;
//# sourceMappingURL=restaurant.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials,
            'findManagerByRestaurantId': this.findManagerByRestaurantId,
            'findUsersByRole': this.findUsersByRole,
            'findChefsByRestaurantId': this.findChefsByRestaurantId,
            'findDriversByRestaurantId': this.findDriversByRestaurantId,
            'currentUser': this.currentUser
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
    UserService.prototype.findChefsByRestaurantId = function (restaurantId) {
        return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/chef')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findDriversByRestaurantId = function (restaurantId) {
        return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/driver')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findActiveChefsByRestaurantId = function (restaurantId) {
        return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/chef/active')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findActiveDriversByRestaurantId = function (restaurantId) {
        return this.http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/driver/active')
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
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.currentUser = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                return user;
            }
            else {
                return false;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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