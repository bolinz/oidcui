"use strict";
(self["webpackChunkmlflow_oidc_auth_front"] = self["webpackChunkmlflow_oidc_auth_front"] || []).push([["src_app_features_home-page_home-page_module_ts"],{

/***/ 1562:
/*!********************************************************************************!*\
  !*** ./src/app/features/home-page/components/home-page/home-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components */ 7667);
/* harmony import */ var _home_page_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.config */ 1180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data/user-data.service */ 5419);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 5892);










function HomePageComponent_ml_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ml-table", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r0.experimentsColumnConfig)("data", ctx_r0.experimentsDataSource);
} }
function HomePageComponent_ml_table_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ml-table", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r1.modelsColumnConfig)("data", ctx_r1.modelsDataSource);
} }
function HomePageComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "You have no experiments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function HomePageComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "You have no models");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
class HomePageComponent {
    constructor(dialog, authService, userDataService) {
        this.dialog = dialog;
        this.authService = authService;
        this.userDataService = userDataService;
        this.currentUserInfo = null;
        this.experimentsColumnConfig = _home_page_config__WEBPACK_IMPORTED_MODULE_1__.EXPERIMENTS_COLUMN_CONFIG;
        this.modelsColumnConfig = _home_page_config__WEBPACK_IMPORTED_MODULE_1__.MODELS_COLUMN_CONFIG;
        this.experimentsDataSource = [];
        this.modelsDataSource = [];
    }
    ngOnInit() {
        this.currentUserInfo = this.authService.getUserInfo();
        if (this.currentUserInfo) {
            const { experiment_permissions, registered_model_permissions } = this.currentUserInfo;
            this.modelsDataSource = registered_model_permissions;
            this.experimentsDataSource = experiment_permissions;
        }
    }
    showAccessKeyModal() {
        this.userDataService.getAccessKey()
            .subscribe(({ token }) => {
            const data = { token };
            this.dialog.open(src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__.AccessKeyModalComponent, { data });
        });
    }
    redirectToMLFlow() {
        window.location.href = '/';
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["ml-home-page"]], decls: 19, vars: 4, consts: [[1, "controls-container", "pb-3"], ["mat-flat-button", "", "aria-label", "login", "color", "primary", 1, "me-2", 3, "click"], ["mat-flat-button", "", "aria-label", "login", "color", "primary", 3, "click"], ["label", "Experiments"], [1, "my-3"], [3, "columnConfig", "data", 4, "ngIf", "ngIfElse"], ["label", "Models"], ["noExperimentData", ""], ["noModelData", ""], [3, "columnConfig", "data"], [1, "d-flex", "w-100", "justify-content-center", "py-5"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_1_listener() { return ctx.redirectToMLFlow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Login to MLFlow");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_4_listener() { return ctx.showAccessKeyModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Create access key");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "mat-tab-group")(9, "mat-tab", 3)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HomePageComponent_ml_table_11_Template, 1, 2, "ml-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-tab", 6)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HomePageComponent_ml_table_14_Template, 1, 2, "ml-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HomePageComponent_ng_template_15_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, HomePageComponent_ng_template_17_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.experimentsDataSource.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.modelsDataSource.length)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab], styles: [".mat-column-experiment_id[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%] {\n  white-space: unset !important;\n  width: 50% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFJQSxxQkFBQTtFQUNBLGFBQUE7QUFERiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1leHBlcmltZW50X2lkLCAubWF0LWNvbHVtbi1uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 1180:
/*!*****************************************************************************!*\
  !*** ./src/app/features/home-page/components/home-page/home-page.config.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPERIMENTS_COLUMN_CONFIG": () => (/* binding */ EXPERIMENTS_COLUMN_CONFIG),
/* harmony export */   "MODELS_COLUMN_CONFIG": () => (/* binding */ MODELS_COLUMN_CONFIG)
/* harmony export */ });
const EXPERIMENTS_COLUMN_CONFIG = [
    { title: 'Experiment Name', key: 'name' },
    { title: 'Permission', key: 'permission' },
];
const MODELS_COLUMN_CONFIG = [
    { title: 'Model name', key: 'name' },
    { title: 'Permissions', key: 'permission' },
];


/***/ }),

/***/ 3786:
/*!****************************************************************!*\
  !*** ./src/app/features/home-page/home-page-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 1562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{ path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent }];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9288:
/*!********************************************************!*\
  !*** ./src/app/features/home-page/home-page.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-routing.module */ 3786);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 1562);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_home-page_home-page_module_ts.js.map