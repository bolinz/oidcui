"use strict";
(self["webpackChunkmlflow_oidc_auth_front"] = self["webpackChunkmlflow_oidc_auth_front"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_configs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/configs/core */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: _core_configs_core__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_home-page_home-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/home-page/home-page.module */ 9288)).then(m => m.HomePageModule),
        data: { breadcrumb: 'Home' }
    },
    {
        path: _core_configs_core__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Manage,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin-page_admin-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin-page/admin-page.module */ 4462)).then(m => m.AdminPageModule),
        data: { breadcrumb: 'Manage' },
    },
    { path: '**', pathMatch: 'full', redirectTo: _core_configs_core__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xng-breadcrumb */ 7861);








function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ml-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "xng-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r0.user.display_name);
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(userDataService, authService) {
        this.userDataService = userDataService;
        this.authService = authService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = false;
        this.userDataService.getCurrentUser()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loading = false))
            .subscribe((userInfo) => {
            this.authService.setUserInfo(userInfo);
            this.user = userInfo;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "name"], [1, "container"], [1, "my-3"], [1, "loader", "d-flex", "justify-content-center", "align-items-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 6, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.user)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent], styles: [".loader[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors/error-handler.interceptor */ 36);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 9582:
/*!******************************************!*\
  !*** ./src/app/core/configs/api-urls.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = {
    ALL_EXPERIMENTS: '/api/2.0/mlflow/experiments',
    EXPERIMENTS_FOR_USER: '/api/2.0/mlflow/users/${userName}/experiments',
    USERS_FOR_EXPERIMENT: '/api/2.0/mlflow/experiments/${experimentName}/users',
    ALL_MODELS: '/api/2.0/mlflow/registered-models',
    ALL_GROUPS: '/api/2.0/mlflow/groups',
    EXPERIMENTS_FOR_GROUP: '/api/2.0/mlflow/groups/${groupName}/experiments',
    MODELS_FOR_GROUP: '/api/2.0/mlflow/groups/${groupName}/registered-models',
    MODELS_FOR_USER: '/api/2.0/mlflow/users/${userName}/registered-models',
    USERS_FOR_MODEL: '/api/2.0/mlflow/registered-models/${modelName}/users',
    CREATE_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/experiments/permissions/create',
    UPDATE_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/experiments/permissions/update',
    DELETE_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/experiments/permissions/delete',
    CREATE_MODEL_PERMISSION: '/api/2.0/mlflow/registered-models/permissions/create',
    UPDATE_MODEL_PERMISSION: '/api/2.0/mlflow/registered-models/permissions/update',
    DELETE_MODEL_PERMISSION: '/api/2.0/mlflow/registered-models/permissions/delete',
    GET_ALL_USERS: '/api/2.0/mlflow/users',
    GET_ACCESS_TOKEN: '/api/2.0/mlflow/users/access-token',
    GET_CURRENT_USER: '/api/2.0/mlflow/users/current',
    CREATE_GROUP_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/experiments/create',
    DELETE_GROUP_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/experiments/delete',
    UPDATE_GROUP_EXPERIMENT_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/experiments/update',
    CREATE_GROUP_MODEL_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/registered-models/create',
    DELETE_GROUP_MODEL_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/registered-models/delete',
    UPDATE_GROUP_MODEL_PERMISSION: '/api/2.0/mlflow/groups/${groupName}/registered-models/update',
};


/***/ }),

/***/ 2590:
/*!**************************************!*\
  !*** ./src/app/core/configs/core.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_CONFIGS": () => (/* binding */ CORE_CONFIGS),
/* harmony export */   "EntityEnum": () => (/* binding */ EntityEnum),
/* harmony export */   "RoutePath": () => (/* binding */ RoutePath)
/* harmony export */ });
const CORE_CONFIGS = {
    SNACK_BAR_DURATION: 7000,
    DEBOUNCE_TIME: 300,
};
var EntityEnum;
(function (EntityEnum) {
    EntityEnum["EXPERIMENT"] = "experiment";
    EntityEnum["MODEL"] = "model";
    EntityEnum["GROUP"] = "group";
})(EntityEnum || (EntityEnum = {}));
var RoutePath;
(function (RoutePath) {
    RoutePath["Home"] = "home";
    RoutePath["Manage"] = "manage";
})(RoutePath || (RoutePath = {}));


/***/ }),

/***/ 7714:
/*!*********************************************!*\
  !*** ./src/app/core/configs/permissions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PERMISSIONS": () => (/* binding */ PERMISSIONS),
/* harmony export */   "PermissionEnum": () => (/* binding */ PermissionEnum)
/* harmony export */ });
var PermissionEnum;
(function (PermissionEnum) {
    PermissionEnum["EDIT"] = "EDIT";
    PermissionEnum["READ"] = "READ";
    PermissionEnum["MANAGE"] = "MANAGE";
    PermissionEnum["NO_PERMISSIONS"] = "NO_PERMISSIONS";
})(PermissionEnum || (PermissionEnum = {}));
const PERMISSIONS = [
    {
        value: PermissionEnum.EDIT,
        title: 'Edit'
    },
    {
        value: PermissionEnum.READ,
        title: 'Read'
    },
    {
        value: PermissionEnum.MANAGE,
        title: 'Manage'
    },
    {
        value: PermissionEnum.NO_PERMISSIONS,
        title: 'No permissions'
    }
];


/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/manage"]; };
class HeaderComponent {
    constructor() {
        this.name = '';
    }
    ngOnInit() {
    }
    logout() {
        window.location.href = '/logout';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ml-header"]], inputs: { name: "name" }, decls: 20, vars: 5, consts: [["color", "primary"], [1, "container", "d-flex", "align-items-center"], [1, "pe-5", "fs-16"], ["mat-button", "", 3, "routerLink"], [1, "spacer"], [1, "pe-1", "ms-auto", "fs-16"], ["mat-button", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MLFlow Permission Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "manage_accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Manage Permissions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.name, "");
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".logout[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ291dCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZnMtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7667:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessKeyModalComponent": () => (/* reexport safe */ _modals_access_key_modal_access_key_modal_component__WEBPACK_IMPORTED_MODULE_4__.AccessKeyModalComponent),
/* harmony export */   "ConfirmModalComponent": () => (/* reexport safe */ _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmModalComponent),
/* harmony export */   "EditPermissionsModalComponent": () => (/* reexport safe */ _modals_edit_permissions_modal_edit_permissions_modal_component__WEBPACK_IMPORTED_MODULE_2__.EditPermissionsModalComponent),
/* harmony export */   "GrantPermissionModalComponent": () => (/* reexport safe */ _modals_grant_permissoin_modal_grant_permission_modal_component__WEBPACK_IMPORTED_MODULE_3__.GrantPermissionModalComponent),
/* harmony export */   "GrantUserPermissionsComponent": () => (/* reexport safe */ _modals_grant_user_permissions_grant_user_permissions_component__WEBPACK_IMPORTED_MODULE_5__.GrantUserPermissionsComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent),
/* harmony export */   "TableComponent": () => (/* reexport safe */ _table_table_component__WEBPACK_IMPORTED_MODULE_0__.TableComponent)
/* harmony export */ });
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/table.component */ 6709);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 6290);
/* harmony import */ var _modals_edit_permissions_modal_edit_permissions_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/edit-permissions-modal/edit-permissions-modal.component */ 3575);
/* harmony import */ var _modals_grant_permissoin_modal_grant_permission_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/grant-permissoin-modal/grant-permission-modal.component */ 9285);
/* harmony import */ var _modals_access_key_modal_access_key_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/access-key-modal/access-key-modal.component */ 1218);
/* harmony import */ var _modals_grant_user_permissions_grant_user_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/grant-user-permissions/grant-user-permissions.component */ 8029);
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/confirm-modal/confirm-modal.component */ 8765);









/***/ }),

/***/ 1218:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/modals/access-key-modal/access-key-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessKeyModalComponent": () => (/* binding */ AccessKeyModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








class AccessKeyModalComponent {
    constructor(data) {
        this.data = data;
        this.token = '';
    }
    ngOnInit() {
        this.token = this.data.token;
    }
    copyInputMessage(userInput) {
        userInput.select();
        document.execCommand('copy');
        userInput.setSelectionRange(0, 0);
    }
}
AccessKeyModalComponent.ɵfac = function AccessKeyModalComponent_Factory(t) { return new (t || AccessKeyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
AccessKeyModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessKeyModalComponent, selectors: [["ml-access-key-modal"]], decls: 14, vars: 2, consts: [["mat-dialog-title", ""], ["matInput", "", "type", "text", "readonly", "", 3, "ngModel", "ngModelChange"], ["apiKeyInput", ""], ["matSuffix", "", "mat-icon-button", "", "cdkFocusInitial", "", "aria-label", "copy", 3, "click"], ["mat-button", "", 3, "mat-dialog-close"]], template: function AccessKeyModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Access Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Access Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccessKeyModalComponent_Template_input_ngModelChange_6_listener($event) { return ctx.token = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessKeyModalComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.copyInputMessage(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions")(12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", null);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3Mta2V5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8765:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/modals/confirm-modal/confirm-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmModalComponent": () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class ConfirmModalComponent {
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(); };
ConfirmModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["ml-confirm-modal"]], decls: 9, vars: 2, consts: [["mat-dialog-title", ""], [1, "d-flex", "flex-column"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action confirmations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please confirm your action\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions")(5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3575:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/edit-permissions-modal/edit-permissions-modal.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPermissionsModalComponent": () => (/* binding */ EditPermissionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/permissions */ 7714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function EditPermissionsModalComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.title);
} }
class EditPermissionsModalComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.permissions = src_app_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__.PERMISSIONS;
        this.title = '';
        this.permission = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    }
    ngOnInit() {
        this.title = `Edit ${this.data.entity} permissions for ${this.data.targetEntity}`;
        this.permission = this.fb.control(this.data.currentPermission, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
}
EditPermissionsModalComponent.ɵfac = function EditPermissionsModalComponent_Factory(t) { return new (t || EditPermissionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
EditPermissionsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPermissionsModalComponent, selectors: [["ml-edit-permissions-modal"]], decls: 13, vars: 5, consts: [["mat-dialog-title", ""], [1, "d-flex", "flex-column"], ["cdkFocusInitial", ""], ["matNativeControl", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "mat-dialog-close"], [3, "value"]], template: function EditPermissionsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-form-field", 2)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditPermissionsModalComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions")(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.permission);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.permission.value);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBlcm1pc3Npb25zLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9285:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/grant-permissoin-modal/grant-permission-modal.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantPermissionModalComponent": () => (/* binding */ GrantPermissionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/permissions */ 7714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function GrantPermissionModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", entity_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entity_r2.name);
} }
function GrantPermissionModalComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", permission_r3.title, " ");
} }
class GrantPermissionModalComponent {
    constructor(data, fb) {
        this.data = data;
        this.fb = fb;
        this.permissions = src_app_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__.PERMISSIONS;
        this.title = '';
    }
    ngOnInit() {
        this.title = `Grant ${this.data.entityType} permissions for ${this.data.targetName}`;
        this.grantPermissionForm = this.fb.group({
            permission: [src_app_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__.PermissionEnum.READ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            entity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    compareEntities(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
GrantPermissionModalComponent.ɵfac = function GrantPermissionModalComponent_Factory(t) { return new (t || GrantPermissionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
GrantPermissionModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GrantPermissionModalComponent, selectors: [["ml-grant-permission-modal"]], decls: 20, vars: 11, consts: [["mat-dialog-title", ""], [3, "formGroup"], [1, "d-flex", "flex-column"], ["cdkFocusInitial", ""], ["matNativeControl", "", "formControlName", "entity", 3, "compareWith"], [4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "permission"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "mat-dialog-close", "disabled"], [3, "ngValue"], [3, "value"]], template: function GrantPermissionModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GrantPermissionModalComponent_ng_container_9_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, GrantPermissionModalComponent_option_14_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-dialog-actions")(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.grantPermissionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, ctx.data.entityType));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareWith", ctx.compareEntities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.grantPermissionForm.value)("disabled", ctx.grantPermissionForm.invalid);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFudC1wZXJtaXNzaW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8029:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/modals/grant-user-permissions/grant-user-permissions.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantUserPermissionsComponent": () => (/* binding */ GrantUserPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/configs/permissions */ 7714);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function GrantUserPermissionsComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2);
} }
function GrantUserPermissionsComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r3.title);
} }
class GrantUserPermissionsComponent {
    constructor(data, fb) {
        this.data = data;
        this.fb = fb;
        this.permissions = _core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__.PERMISSIONS;
        this.title = '';
    }
    ngOnInit() {
        this.title = `Grant permissions`;
        this.form = this.fb.group({
            user: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            permission: [_core_configs_permissions__WEBPACK_IMPORTED_MODULE_0__.PermissionEnum.READ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
}
GrantUserPermissionsComponent.ɵfac = function GrantUserPermissionsComponent_Factory(t) { return new (t || GrantUserPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
GrantUserPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GrantUserPermissionsComponent, selectors: [["ml-grant-user-permissions"]], decls: 19, vars: 7, consts: [["mat-dialog-title", ""], [3, "formGroup"], [1, "d-flex", "flex-column"], ["matNativeControl", "", "formControlName", "user"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "permission"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"], [3, "value"]], template: function GrantUserPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field")(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GrantUserPermissionsComponent_option_8_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GrantUserPermissionsComponent_option_13_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions")(15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.form.value)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFudC11c2VyLXBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6709:
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function TableComponent_ng_container_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r6.title, "");
} }
function TableComponent_ng_container_7_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10[column_r6.key], " ");
} }
function TableComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0)(1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_7_th_2_Template, 2, 1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_ng_container_7_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]()();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r6.key);
} }
function TableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_10_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_10_ng_container_6_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const action_r15 = restoredCtx.$implicit; const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.handleActionClick(item_r12, action_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const action_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r15.name);
} }
function TableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11)(1, "button", 12)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_10_ng_container_6_Template, 6, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.actions);
} }
function TableComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
function TableComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
class TableComponent {
    constructor() {
        this.columnConfig = [];
        this.data = [];
        this.actions = [];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource();
        this.columns = [];
        this.serachValue = '';
        this.columnActionName = 'actions';
    }
    ngOnChanges(changes) {
        const data = changes['data'].currentValue;
        if (data) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(data);
        }
    }
    ngOnInit() {
        const columnKeys = this.columnConfig.map(config => config.key);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.data);
        this.columns = columnKeys;
        this.actions.length
            ? this.columns = [this.columnActionName, ...columnKeys]
            : this.columns = columnKeys;
    }
    filter(event) {
        const inputElement = event.target;
        this.dataSource.filter = inputElement.value.trim().toLowerCase();
    }
    handleActionClick(item, action) {
        this.action.emit({ item, action });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["ml-table"]], inputs: { columnConfig: "columnConfig", data: "data", actions: "actions" }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 5, consts: [[1, "search-section"], ["matInput", "", "type", "text", 3, "keyup"], ["search", ""], ["mat-table", "", 1, "w-100", 3, "dataSource"], [4, "ngFor", "ngForOf"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field")(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableComponent_Template_input_keyup_4_listener($event) { return ctx.filter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_ng_container_7_Template, 4, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableComponent_td_10_Template, 7, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", ctx.columnActionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".mat-column-actions {\n  white-space: unset !important;\n  width: 90px !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUlBLHFCQUFBO0VBQ0EsYUFBQTtBQUZKIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36:
/*!******************************************************************!*\
  !*** ./src/app/shared/interceptors/error-handler.interceptor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerInterceptor": () => (/* binding */ ErrorHandlerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 7253);




class ErrorHandlerInterceptor {
    constructor(snackBarService) {
        this.snackBarService = snackBarService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            let errorMessage = (error.error instanceof ErrorEvent)
                ? `Error: ${error.error.message}`
                : `Error Code: ${error.status}\nMessage: ${error.message}`;
            this.snackBarService.openSnackBar(errorMessage);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(errorMessage));
        }));
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.SnackBarService)); };
ErrorHandlerInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);














const MATERIAL_MODULES = [
    _angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [MATERIAL_MODULES, _angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule], exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule] }); })();


/***/ }),

/***/ 8915:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthService {
    constructor() {
    }
    getUserInfo() {
        return this.user;
    }
    setUserInfo(user) {
        this.user = user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7139:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/data/experiments-data.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentsDataService": () => (/* binding */ ExperimentsDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/api-urls */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ExperimentsDataService {
    constructor(http) {
        this.http = http;
    }
    getAllExperiments() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.ALL_EXPERIMENTS);
    }
    getExperimentsForUser(userName) {
        const url = src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.EXPERIMENTS_FOR_USER.replace('${userName}', userName);
        return this.http.get(url)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({ experiments }) => experiments));
    }
    getUsersForExperiment(experimentName) {
        const url = src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.USERS_FOR_EXPERIMENT.replace('${experimentName}', experimentName);
        return this.http.get(url);
    }
}
ExperimentsDataService.ɵfac = function ExperimentsDataService_Factory(t) { return new (t || ExperimentsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ExperimentsDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExperimentsDataService, factory: ExperimentsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4945:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/data/models-data.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsDataService": () => (/* binding */ ModelsDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/api-urls */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ModelsDataService {
    constructor(http) {
        this.http = http;
    }
    getAllModels() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.ALL_MODELS);
    }
    getModelsForUser(userName) {
        const url = src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.MODELS_FOR_USER.replace('${userName}', userName);
        return this.http.get(url)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.models));
    }
    getUsersForModel(modelName) {
        const url = src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.USERS_FOR_MODEL.replace('${modelName}', modelName);
        return this.http.get(url);
    }
}
ModelsDataService.ɵfac = function ModelsDataService_Factory(t) { return new (t || ModelsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ModelsDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ModelsDataService, factory: ModelsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5057:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/data/permission-data.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionDataService": () => (/* binding */ PermissionDataService)
/* harmony export */ });
/* harmony import */ var src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/api-urls */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PermissionDataService {
    constructor(http) {
        this.http = http;
    }
    createExperimentPermission(body) {
        return this.http.post(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.CREATE_EXPERIMENT_PERMISSION, body, { responseType: 'text' });
    }
    updateExperimentPermission(body) {
        return this.http.patch(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.UPDATE_EXPERIMENT_PERMISSION, body, { responseType: 'text' });
    }
    deleteExperimentPermission(body) {
        return this.http.delete(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.DELETE_EXPERIMENT_PERMISSION, { body });
    }
    createModelPermission(body) {
        return this.http.post(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.CREATE_MODEL_PERMISSION, body);
    }
    updateModelPermission(body) {
        return this.http.patch(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.UPDATE_MODEL_PERMISSION, body, { responseType: 'text' });
    }
    deleteModelPermission(body) {
        return this.http.delete(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.DELETE_MODEL_PERMISSION, { body });
    }
    addExperimentPermissionToGroup(groupName, experiment_id, permission) {
        return this.http.post(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.CREATE_GROUP_EXPERIMENT_PERMISSION.replace('${groupName}', groupName), {
            experiment_id,
            permission,
        });
    }
    addModelPermissionToGroup(modelName, groupName, permission) {
        return this.http.post(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.CREATE_GROUP_MODEL_PERMISSION.replace('${groupName}', groupName), {
            model_name: modelName,
            permission,
        });
    }
    removeExperimentPermissionFromGroup(groupName, experiment_id) {
        return this.http.delete(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.DELETE_GROUP_EXPERIMENT_PERMISSION.replace('${groupName}', groupName), {
            body: {
                experiment_id
            }
        });
    }
    removeModelPermissionFromGroup(modelName, groupName) {
        return this.http.delete(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.DELETE_GROUP_MODEL_PERMISSION.replace('${groupName}', groupName), {
            body: {
                model_name: modelName
            }
        });
    }
    updateExperimentPermissionForGroup(groupName, experiment_id, permission) {
        return this.http.patch(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.UPDATE_GROUP_EXPERIMENT_PERMISSION.replace('${groupName}', groupName), {
            experiment_id,
            permission
        });
    }
    updateModelPermissionForGroup(modelName, groupName, permission) {
        return this.http.patch(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.UPDATE_GROUP_MODEL_PERMISSION.replace('${groupName}', groupName), {
            model_name: modelName,
            permission
        });
    }
}
PermissionDataService.ɵfac = function PermissionDataService_Factory(t) { return new (t || PermissionDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PermissionDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PermissionDataService, factory: PermissionDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5419:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/data/user-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/api-urls */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserDataService {
    constructor(http) {
        this.http = http;
    }
    getCurrentUser() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.GET_CURRENT_USER);
    }
    getAccessKey() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.GET_ACCESS_TOKEN);
    }
    getAllUsers() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.GET_ALL_USERS);
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7253:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService),
/* harmony export */   "ExperimentsDataService": () => (/* reexport safe */ _data_experiments_data_service__WEBPACK_IMPORTED_MODULE_2__.ExperimentsDataService),
/* harmony export */   "ModelsDataService": () => (/* reexport safe */ _data_models_data_service__WEBPACK_IMPORTED_MODULE_0__.ModelsDataService),
/* harmony export */   "PermissionDataService": () => (/* reexport safe */ _data_permission_data_service__WEBPACK_IMPORTED_MODULE_3__.PermissionDataService),
/* harmony export */   "SnackBarService": () => (/* reexport safe */ _utility_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__.SnackBarService),
/* harmony export */   "UserDataService": () => (/* reexport safe */ _data_user_data_service__WEBPACK_IMPORTED_MODULE_1__.UserDataService)
/* harmony export */ });
/* harmony import */ var _data_models_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/models-data.service */ 4945);
/* harmony import */ var _data_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/user-data.service */ 5419);
/* harmony import */ var _data_experiments_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/experiments-data.service */ 7139);
/* harmony import */ var _data_permission_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/permission-data.service */ 5057);
/* harmony import */ var _utility_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/snack-bar.service */ 5238);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ 8915);








/***/ }),

/***/ 5238:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/utility/snack-bar.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarService": () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var _core_configs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/configs/core */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);



class SnackBarService {
    constructor(snackBarService) {
        this.snackBarService = snackBarService;
    }
    openSnackBar(message) {
        return this.snackBarService.open(message, 'OK', {
            duration: _core_configs_core__WEBPACK_IMPORTED_MODULE_0__.CORE_CONFIGS.SNACK_BAR_DURATION
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
SnackBarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7667);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ 793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xng-breadcrumb */ 7861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









const SHARED_COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_0__.AccessKeyModalComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.ConfirmModalComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.EditPermissionsModalComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.GrantPermissionModalComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.GrantUserPermissionsComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.TableComponent,
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.AccessKeyModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ConfirmModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.EditPermissionsModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GrantPermissionModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GrantUserPermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.TableComponent], imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink,
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule], exports: [_components__WEBPACK_IMPORTED_MODULE_0__.AccessKeyModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ConfirmModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.EditPermissionsModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GrantPermissionModalComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GrantUserPermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.TableComponent, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map