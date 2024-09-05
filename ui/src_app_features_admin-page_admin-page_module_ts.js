"use strict";
(self["webpackChunkmlflow_oidc_auth_front"] = self["webpackChunkmlflow_oidc_auth_front"] || []).push([["src_app_features_admin-page_admin-page_module_ts"],{

/***/ 1893:
/*!******************************************************************!*\
  !*** ./src/app/features/admin-page/admin-page-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 2724);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const getBreadcrumb = (route) => {
    const [entity, id] = route.split('/');
    return `${entity.charAt(0).toUpperCase() + entity.slice(1)} / ${id}`;
};
const routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.AdminPageComponent,
        children: [
            {
                path: _config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.PERMISSIONS,
                component: _components__WEBPACK_IMPORTED_MODULE_0__.PermissionsComponent,
                data: {
                    breadcrumb: {
                        skip: true,
                    }
                },
            },
            {
                path: `${_config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.USER}/:id`,
                component: _components__WEBPACK_IMPORTED_MODULE_0__.UserPermissionDetailsComponent,
                data: {
                    breadcrumb: getBreadcrumb,
                },
            },
            {
                path: `${_config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.EXPERIMENT}/:id`,
                component: _components__WEBPACK_IMPORTED_MODULE_0__.ExperimentPermissionDetailsComponent,
                data: {
                    breadcrumb: getBreadcrumb,
                },
            },
            {
                path: `${_config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.MODEL}/:id`,
                component: _components__WEBPACK_IMPORTED_MODULE_0__.ModelPermissionDetailsComponent,
                data: {
                    breadcrumb: getBreadcrumb,
                },
            },
            {
                path: `${_config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.GROUP}/:id`,
                component: _components__WEBPACK_IMPORTED_MODULE_0__.GroupPermissionDetailsComponent,
                data: {
                    breadcrumb: getBreadcrumb,
                },
            },
            {
                path: '**',
                redirectTo: _config__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutesEnum.PERMISSIONS,
            },
        ],
    },
];
class AdminPageRoutingModule {
}
AdminPageRoutingModule.ɵfac = function AdminPageRoutingModule_Factory(t) { return new (t || AdminPageRoutingModule)(); };
AdminPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminPageRoutingModule });
AdminPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 4462:
/*!**********************************************************!*\
  !*** ./src/app/features/admin-page/admin-page.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 2724);
/* harmony import */ var _admin_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-page-routing.module */ 1893);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AdminPageModule {
}
AdminPageModule.ɵfac = function AdminPageModule_Factory(t) { return new (t || AdminPageModule)(); };
AdminPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminPageModule });
AdminPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _admin_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminPageModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.AdminPageComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.UserPermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ExperimentPermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ModelPermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.UserPermissionDetailsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.PermissionsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ExperimentPermissionDetailsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ModelPermissionDetailsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GroupPermissionDetailsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.GroupPermissionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _admin_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5658:
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin-page/components/admin-page/admin-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageComponent": () => (/* binding */ AdminPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AdminPageComponent {
}
AdminPageComponent.ɵfac = function AdminPageComponent_Factory(t) { return new (t || AdminPageComponent)(); };
AdminPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPageComponent, selectors: [["ml-admin-page"]], decls: 1, vars: 0, template: function AdminPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 3037:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/experiment-permission-details/experiment-permission-details.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPermissionDetailsComponent": () => (/* binding */ ExperimentPermissionDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components */ 7667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _experiment_permission_details_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experiment-permission-details.config */ 6299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/permission-modal.service */ 586);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);












class ExperimentPermissionDetailsComponent {
    constructor(dialog, experimentDataService, permissionDataService, userDataService, route, permissionModalService, snackBarService) {
        this.dialog = dialog;
        this.experimentDataService = experimentDataService;
        this.permissionDataService = permissionDataService;
        this.userDataService = userDataService;
        this.route = route;
        this.permissionModalService = permissionModalService;
        this.snackBarService = snackBarService;
        this.userColumnConfig = _experiment_permission_details_config__WEBPACK_IMPORTED_MODULE_2__.COLUMN_CONFIG;
        this.actions = _experiment_permission_details_config__WEBPACK_IMPORTED_MODULE_2__.TABLE_ACTIONS;
        this.userDataSource = [];
    }
    ngOnInit() {
        this.experimentId = this.route.snapshot.paramMap.get('id') ?? '';
        this.experimentDataService.getUsersForExperiment(this.experimentId)
            .subscribe((users) => this.userDataSource = users);
    }
    handleUserEdit(event) {
        this.permissionModalService.openEditPermissionsModal(this.experimentId, event.username, event.permission)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)((permission) => this.permissionDataService.updateExperimentPermission({
            experiment_id: this.experimentId,
            permission,
            user_name: event.username,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.snackBarService.openSnackBar('Permissions updated successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.experimentDataService.getUsersForExperiment(this.experimentId)))
            .subscribe((users) => {
            this.userDataSource = users;
        });
    }
    handleActions($event) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.EDIT]: this.handleUserEdit.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.REVOKE]: this.revokePermissionForUser.bind(this),
        };
        const selectedAction = actionMapping[$event.action.action];
        if (selectedAction) {
            selectedAction($event.item);
        }
    }
    revokePermissionForUser(item) {
        this.permissionDataService.deleteExperimentPermission({ experiment_id: this.experimentId, user_name: item.username })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.snackBarService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.loadUsersForExperiment(this.experimentId)))
            .subscribe((users) => this.userDataSource = users);
    }
    addUser() {
        this.userDataService.getAllUsers()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(({ users }) => users.filter((user) => !this.userDataSource.some((u) => u.username === user))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)((users) => this.dialog.open(src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__.GrantUserPermissionsComponent, { data: { users } })
            .afterClosed()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ user, permission }) => this.permissionDataService.createExperimentPermission({
            experiment_id: this.experimentId,
            permission: permission,
            user_name: user,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.loadUsersForExperiment(this.experimentId)))
            .subscribe((users) => this.userDataSource = users);
    }
    loadUsersForExperiment(experimentId) {
        return this.experimentDataService.getUsersForExperiment(experimentId);
    }
}
ExperimentPermissionDetailsComponent.ɵfac = function ExperimentPermissionDetailsComponent_Factory(t) { return new (t || ExperimentPermissionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ExperimentsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.PermissionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__.PermissionModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.SnackBarService)); };
ExperimentPermissionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ExperimentPermissionDetailsComponent, selectors: [["ml-experiment-permission-details"]], decls: 10, vars: 3, consts: [[1, "my-3"], [1, "header-section"], ["mat-button", "", 3, "click"], [3, "columnConfig", "data", "actions", "action"]], template: function ExperimentPermissionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Experiment Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ExperimentPermissionDetailsComponent_Template_button_click_4_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ml-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("action", function ExperimentPermissionDetailsComponent_Template_ml_table_action_9_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("columnConfig", ctx.userColumnConfig)("data", ctx.userDataSource)("actions", ctx.actions);
    } }, dependencies: [_shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50LXBlcm1pc3Npb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6299:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/experiment-permission-details/experiment-permission-details.config.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLUMN_CONFIG": () => (/* binding */ COLUMN_CONFIG),
/* harmony export */   "TABLE_ACTIONS": () => (/* binding */ TABLE_ACTIONS)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const TABLE_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];
const COLUMN_CONFIG = [
    {
        title: 'User name',
        key: 'username',
    }, {
        title: 'Permissions',
        key: 'permission',
    },
];


/***/ }),

/***/ 938:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/group-permission-details/group-permission-details.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupPermissionDetailsComponent": () => (/* binding */ GroupPermissionDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _group_permission_details_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-permission-details.config */ 233);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/configs/core */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_data_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data/group-data.service */ 9422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/permission-modal.service */ 586);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 5892);













class GroupPermissionDetailsComponent {
    constructor(groupDataService, route, permissionDataService, permissionModalService, experimentsDataService, snackBarService, modelDataService) {
        this.groupDataService = groupDataService;
        this.route = route;
        this.permissionDataService = permissionDataService;
        this.permissionModalService = permissionModalService;
        this.experimentsDataService = experimentsDataService;
        this.snackBarService = snackBarService;
        this.modelDataService = modelDataService;
        this.groupName = '';
        this.experimentColumnConfig = _group_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.EXPERIMENT_COLUMN_CONFIG;
        this.experimentDataSource = [];
        this.experimentActions = _group_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.EXPERIMENT_ACTIONS;
        this.modelColumnConfig = _group_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.MODELS_COLUMN_CONFIG;
        this.modelDataSource = [];
        this.modelActions = _group_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.MODELS_ACTIONS;
    }
    ngOnInit() {
        this.groupName = this.route.snapshot.paramMap.get('id') ?? '';
        this.groupDataService.getAllExperimentsForGroup(this.groupName)
            .subscribe((experiments) => this.experimentDataSource = experiments);
        this.groupDataService.getAllRegisteredModelsForGroup(this.groupName)
            .subscribe((models) => this.modelDataSource = models);
    }
    openModalAddExperimentPermissionToGroup() {
        this.experimentsDataService.getAllExperiments()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((experiments) => experiments
            .filter((experiment) => !this.experimentDataSource.some((exp) => exp.name === experiment.name))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((experiments) => this.permissionModalService.openGrantPermissionModal(src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_2__.EntityEnum.EXPERIMENT, experiments, this.groupName)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((newPermission) => this.permissionDataService.addExperimentPermissionToGroup(this.groupName, newPermission.entity.id, newPermission.permission)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission granted successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllExperimentsForGroup(this.groupName)))
            .subscribe((experiments) => this.experimentDataSource = experiments);
    }
    openModalAddModelPermissionToGroup() {
        this.modelDataService.getAllModels()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((models) => models
            .filter((model) => !this.modelDataSource.some((m) => m.name === model.name))
            .map((model, index) => ({ ...model, id: `${index}-${model.name}` }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((models) => this.permissionModalService.openGrantPermissionModal(src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_2__.EntityEnum.MODEL, models, this.groupName)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((newPermission) => this.permissionDataService.addModelPermissionToGroup(newPermission.entity.name, this.groupName, newPermission.permission)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission granted successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllRegisteredModelsForGroup(this.groupName)))
            .subscribe((models) => this.modelDataSource = models);
    }
    handleExperimentActions(event) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.EDIT]: this.handleEditExperimentPermissionForGroup.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.REVOKE]: this.revokeExperimentPermissionForGroup.bind(this),
        };
        const selectedAction = actionMapping[event.action.action];
        if (selectedAction) {
            selectedAction(event.item);
        }
    }
    handleEditExperimentPermissionForGroup(experiment) {
        this.permissionModalService.openEditPermissionsModal(experiment.name, this.groupName, experiment.permission)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((permission) => this.permissionDataService.updateExperimentPermissionForGroup(this.groupName, experiment.id, permission)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission updated successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllExperimentsForGroup(this.groupName)))
            .subscribe((experiments) => this.experimentDataSource = experiments);
    }
    revokeExperimentPermissionForGroup(experiment) {
        this.permissionDataService.removeExperimentPermissionFromGroup(this.groupName, experiment.id)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllExperimentsForGroup(this.groupName)))
            .subscribe((experiments) => this.experimentDataSource = experiments);
    }
    handleModelActions(event) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.EDIT]: this.handleEditModelPermissionForGroup.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.REVOKE]: this.revokeModelPermissionForGroup.bind(this),
        };
        const selectedAction = actionMapping[event.action.action];
        if (selectedAction) {
            selectedAction(event.item);
        }
    }
    handleEditModelPermissionForGroup(model) {
        this.permissionModalService.openEditPermissionsModal(model.name, this.groupName, model.permission)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((permission) => this.permissionDataService.updateModelPermissionForGroup(model.name, this.groupName, permission)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission updated successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllRegisteredModelsForGroup(this.groupName)))
            .subscribe((models) => this.modelDataSource = models);
    }
    revokeModelPermissionForGroup(model) {
        this.permissionDataService.removeModelPermissionFromGroup(model.name, this.groupName)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.snackBarService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.groupDataService.getAllRegisteredModelsForGroup(this.groupName)))
            .subscribe((models) => this.modelDataSource = models);
    }
}
GroupPermissionDetailsComponent.ɵfac = function GroupPermissionDetailsComponent_Factory(t) { return new (t || GroupPermissionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_data_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.PermissionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_5__.PermissionModalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.ExperimentsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.ModelsDataService)); };
GroupPermissionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: GroupPermissionDetailsComponent, selectors: [["ml-group-permission-details"]], decls: 20, vars: 6, consts: [["label", "Experiments"], [1, "my-3"], [1, "header-section"], ["mat-button", "", 3, "click"], [3, "columnConfig", "data", "actions", "action"], ["label", "Models"]], template: function GroupPermissionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0)(2, "div", 1)(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupPermissionDetailsComponent_Template_button_click_4_listener() { return ctx.openModalAddExperimentPermissionToGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ml-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("action", function GroupPermissionDetailsComponent_Template_ml_table_action_9_listener($event) { return ctx.handleExperimentActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-tab", 5)(11, "div", 1)(12, "div", 1)(13, "div", 2)(14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupPermissionDetailsComponent_Template_button_click_14_listener() { return ctx.openModalAddModelPermissionToGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ml-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("action", function GroupPermissionDetailsComponent_Template_ml_table_action_19_listener($event) { return ctx.handleModelActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("columnConfig", ctx.experimentColumnConfig)("data", ctx.experimentDataSource)("actions", ctx.experimentActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("columnConfig", ctx.modelColumnConfig)("data", ctx.modelDataSource)("actions", ctx.modelActions);
    } }, dependencies: [_shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1wZXJtaXNzaW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 233:
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/group-permission-details/group-permission-details.config.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPERIMENT_ACTIONS": () => (/* binding */ EXPERIMENT_ACTIONS),
/* harmony export */   "EXPERIMENT_COLUMN_CONFIG": () => (/* binding */ EXPERIMENT_COLUMN_CONFIG),
/* harmony export */   "MODELS_ACTIONS": () => (/* binding */ MODELS_ACTIONS),
/* harmony export */   "MODELS_COLUMN_CONFIG": () => (/* binding */ MODELS_COLUMN_CONFIG)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const EXPERIMENT_COLUMN_CONFIG = [
    { title: 'Experiment name', key: 'name' },
    { title: 'Permission', key: 'permission' },
];
const EXPERIMENT_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];
const MODELS_COLUMN_CONFIG = [
    { title: 'Model name', key: 'name' },
    { title: 'Permission', key: 'permission' },
];
const MODELS_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];


/***/ }),

/***/ 335:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/model-permission-details/model-permission-details.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPermissionDetailsComponent": () => (/* binding */ ModelPermissionDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _model_permission_details_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-permission-details.config */ 9890);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/configs/core */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/permission-modal.service */ 586);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);












function ModelPermissionDetailsComponent_ml_table_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ml-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function ModelPermissionDetailsComponent_ml_table_9_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleActions($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columnConfig", ctx_r0.userColumnConfig)("data", ctx_r0.userDataSource)("actions", ctx_r0.actions);
} }
class ModelPermissionDetailsComponent {
    constructor(route, modelDataService, permissionDataService, userDataService, snackService, permissionModalService) {
        this.route = route;
        this.modelDataService = modelDataService;
        this.permissionDataService = permissionDataService;
        this.userDataService = userDataService;
        this.snackService = snackService;
        this.permissionModalService = permissionModalService;
        this.userDataSource = [];
        this.userColumnConfig = _model_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.COLUMN_CONFIG;
        this.actions = _model_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTIONS;
    }
    ngOnInit() {
        this.modelId = this.route.snapshot.paramMap.get('id') ?? '';
        this.loadUsersForModel(this.modelId)
            .subscribe((users) => this.userDataSource = users);
    }
    revokePermissionForUser(item) {
        this.permissionDataService.deleteModelPermission({ name: this.modelId, user_name: item.username })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.snackService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.loadUsersForModel(this.modelId)))
            .subscribe((users) => this.userDataSource = users);
    }
    editPermissionForUser({ username, permission }) {
        this.permissionModalService.openEditPermissionsModal(this.modelId, username, permission)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((permission) => this.permissionDataService.updateModelPermission({
            name: this.modelId,
            permission,
            user_name: username,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.snackService.openSnackBar('Permission updated')), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.loadUsersForModel(this.modelId)))
            .subscribe((users) => {
            this.userDataSource = users;
        });
    }
    handleActions({ action, item }) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.REVOKE]: this.revokePermissionForUser.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.EDIT]: this.editPermissionForUser.bind(this),
        };
        const selectedAction = actionMapping[action.action];
        if (selectedAction) {
            selectedAction(item);
        }
    }
    loadUsersForModel(modelId) {
        return this.modelDataService.getUsersForModel(modelId);
    }
    addUser() {
        this.userDataService.getAllUsers()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(({ users }) => users.filter((user) => !this.userDataSource.some((u) => u.username === user))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((users) => this.permissionModalService.openGrantPermissionModal(src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_2__.EntityEnum.MODEL, users.map((user, index) => ({ id: index + user, name: user })), this.modelId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(({ entity, permission }) => this.permissionDataService.createModelPermission({
            name: this.modelId,
            permission: permission,
            user_name: entity.name,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.loadUsersForModel(this.modelId)))
            .subscribe((users) => {
            this.userDataSource = users;
        });
    }
}
ModelPermissionDetailsComponent.ɵfac = function ModelPermissionDetailsComponent_Factory(t) { return new (t || ModelPermissionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ModelsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.PermissionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__.PermissionModalService)); };
ModelPermissionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ModelPermissionDetailsComponent, selectors: [["ml-model-permission-details"]], decls: 10, vars: 1, consts: [[1, "my-3"], [1, "header-section"], ["mat-button", "", 3, "click"], [3, "columnConfig", "data", "actions", "action", 4, "ngIf"], [3, "columnConfig", "data", "actions", "action"]], template: function ModelPermissionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Model Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModelPermissionDetailsComponent_Template_button_click_4_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ModelPermissionDetailsComponent_ml_table_9_Template, 1, 3, "ml-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDataSource.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbC1wZXJtaXNzaW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9890:
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/model-permission-details/model-permission-details.config.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLUMN_CONFIG": () => (/* binding */ COLUMN_CONFIG),
/* harmony export */   "TABLE_ACTIONS": () => (/* binding */ TABLE_ACTIONS)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const TABLE_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];
const COLUMN_CONFIG = [
    {
        title: 'User name',
        key: 'username',
    },
    {
        title: 'Permissions',
        key: 'permission',
    },
];


/***/ }),

/***/ 1285:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/user-permission-details/user-permission-details.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionDetailsComponent": () => (/* binding */ UserPermissionDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _user_permission_details_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-permission-details.config */ 66);
/* harmony import */ var src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configs/core */ 2590);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/permission-modal.service */ 586);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 5892);













function UserPermissionDetailsComponent_ml_table_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ml-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function UserPermissionDetailsComponent_ml_table_9_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.handleExperimentActions($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columnConfig", ctx_r0.experimentsColumnConfig)("data", ctx_r0.experimentsDataSource)("actions", ctx_r0.experimentsActions);
} }
function UserPermissionDetailsComponent_ml_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ml-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function UserPermissionDetailsComponent_ml_table_18_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.handleModelActions($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columnConfig", ctx_r1.modelsColumnConfig)("data", ctx_r1.modelsDataSource)("actions", ctx_r1.modelsActions);
} }
class UserPermissionDetailsComponent {
    constructor(expDataService, modelDataService, permissionDataService, route, permissionModalService, snackBarService) {
        this.expDataService = expDataService;
        this.modelDataService = modelDataService;
        this.permissionDataService = permissionDataService;
        this.route = route;
        this.permissionModalService = permissionModalService;
        this.snackBarService = snackBarService;
        this.userId = '';
        this.experimentsColumnConfig = _user_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.EXPERIMENT_COLUMN_CONFIG;
        this.modelsColumnConfig = _user_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.MODEL_COLUMN_CONFIG;
        this.experimentsDataSource = [];
        this.modelsDataSource = [];
        this.experimentsActions = _user_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.EXPERIMENT_ACTIONS;
        this.modelsActions = _user_permission_details_config__WEBPACK_IMPORTED_MODULE_0__.MODEL_ACTIONS;
    }
    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id') ?? '';
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([
            this.expDataService.getExperimentsForUser(this.userId),
            this.modelDataService.getModelsForUser(this.userId),
        ])
            .subscribe(([experiments, models]) => {
            this.experimentsDataSource = experiments;
            this.modelsDataSource = models;
        });
    }
    addModelPermissionToUser() {
        return this.modelDataService.getAllModels()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((models) => models.map((model, index) => ({ ...model, id: `${index}-${model.name}` }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((models) => models.filter((model) => !this.modelsDataSource.some((m) => m.name === model.name))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((models) => this.permissionModalService.openGrantPermissionModal(src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_1__.EntityEnum.MODEL, models, this.userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({ entity, permission }) => this.permissionDataService.createModelPermission({
            user_name: this.userId,
            name: entity.name,
            permission: permission,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permission granted successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.modelDataService.getModelsForUser(this.userId)))
            .subscribe((models) => this.modelsDataSource = models);
    }
    addExperimentPermissionToUser() {
        this.expDataService.getAllExperiments()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((experiments) => experiments.filter((experiment) => !this.experimentsDataSource.some((exp) => exp.id === experiment.id))), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((experiments) => this.permissionModalService.openGrantPermissionModal(src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_1__.EntityEnum.EXPERIMENT, experiments, this.userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({ entity, permission }) => {
            return this.permissionDataService.createExperimentPermission({
                user_name: this.userId,
                experiment_name: entity.name,
                permission,
            });
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permission granted successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.expDataService.getExperimentsForUser(this.userId)))
            .subscribe((experiments) => this.experimentsDataSource = experiments);
    }
    handleExperimentActions(event) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_2__.TableActionEnum.EDIT]: this.handleEditUserPermissionForExperiment.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_2__.TableActionEnum.REVOKE]: this.revokeExperimentPermissionForUser.bind(this),
        };
        const selectedAction = actionMapping[event.action.action];
        if (selectedAction) {
            selectedAction(event.item);
        }
    }
    revokeExperimentPermissionForUser(item) {
        this.permissionDataService.deleteExperimentPermission({ experiment_id: item.id, user_name: this.userId })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.expDataService.getExperimentsForUser(this.userId)))
            .subscribe((experiments) => this.experimentsDataSource = experiments);
    }
    revokeModelPermissionForUser({ name }) {
        this.permissionDataService.deleteModelPermission({ name: name, user_name: this.userId })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permission revoked successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.modelDataService.getModelsForUser(this.userId)))
            .subscribe((models) => this.modelsDataSource = models);
    }
    handleModelActions({ action, item }) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_2__.TableActionEnum.EDIT]: this.handleEditUserPermissionForModel.bind(this),
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_2__.TableActionEnum.REVOKE]: this.revokeModelPermissionForUser.bind(this),
        };
        const selectedAction = actionMapping[action.action];
        if (selectedAction) {
            selectedAction(item);
        }
    }
    handleEditUserPermissionForModel({ name, permission }) {
        this.permissionModalService.openEditPermissionsModal(name, this.userId, permission)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((permission) => this.permissionDataService.updateModelPermission({
            name,
            permission,
            user_name: this.userId,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permissions updated successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.modelDataService.getModelsForUser(this.userId)))
            .subscribe((models) => this.modelsDataSource = models);
    }
    handleEditUserPermissionForExperiment({ id, permissions }) {
        this.permissionModalService.openEditPermissionsModal(id, this.userId, permissions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((permission) => this.permissionDataService.updateExperimentPermission({
            experiment_id: id,
            permission,
            user_name: this.userId,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.snackBarService.openSnackBar('Permissions updated successfully')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.expDataService.getExperimentsForUser(this.userId)))
            .subscribe((experiments) => this.experimentsDataSource = experiments);
    }
}
UserPermissionDetailsComponent.ɵfac = function UserPermissionDetailsComponent_Factory(t) { return new (t || UserPermissionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ExperimentsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ModelsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.PermissionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_permission_modal_service__WEBPACK_IMPORTED_MODULE_4__.PermissionModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.SnackBarService)); };
UserPermissionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserPermissionDetailsComponent, selectors: [["ml-user-permission-details"]], decls: 19, vars: 2, consts: [["label", "Experiments"], [1, "my-3"], [1, "header-section"], ["mat-button", "", 3, "click"], [3, "columnConfig", "data", "actions", "action", 4, "ngIf"], ["label", "Models"], [3, "columnConfig", "data", "actions", "action"]], template: function UserPermissionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0)(2, "div", 1)(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserPermissionDetailsComponent_Template_button_click_4_listener() { return ctx.addExperimentPermissionToUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UserPermissionDetailsComponent_ml_table_9_Template, 1, 3, "ml-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-tab", 5)(11, "div", 1)(12, "div", 2)(13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserPermissionDetailsComponent_Template_button_click_13_listener() { return ctx.addModelPermissionToUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, UserPermissionDetailsComponent_ml_table_18_Template, 1, 3, "ml-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.experimentsDataSource.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modelsDataSource.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab], styles: [".header-section[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 36px;\n}\n.header-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGVybWlzc2lvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLXBlcm1pc3Npb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDM2cHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 66:
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/details/user-permission-details/user-permission-details.config.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPERIMENT_ACTIONS": () => (/* binding */ EXPERIMENT_ACTIONS),
/* harmony export */   "EXPERIMENT_COLUMN_CONFIG": () => (/* binding */ EXPERIMENT_COLUMN_CONFIG),
/* harmony export */   "MODEL_ACTIONS": () => (/* binding */ MODEL_ACTIONS),
/* harmony export */   "MODEL_COLUMN_CONFIG": () => (/* binding */ MODEL_COLUMN_CONFIG)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const MODEL_COLUMN_CONFIG = [
    { title: 'Model name', key: 'name' },
    { title: 'Permissions', key: 'permission' },
];
const EXPERIMENT_COLUMN_CONFIG = [
    { title: 'Experiment Name', key: 'name' },
    { title: 'Permission', key: 'permission' },
];
const EXPERIMENT_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];
const MODEL_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.REVOKE,
];


/***/ }),

/***/ 2724:
/*!*********************************************************!*\
  !*** ./src/app/features/admin-page/components/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageComponent": () => (/* reexport safe */ _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__.AdminPageComponent),
/* harmony export */   "ExperimentPermissionDetailsComponent": () => (/* reexport safe */ _details_experiment_permission_details_experiment_permission_details_component__WEBPACK_IMPORTED_MODULE_0__.ExperimentPermissionDetailsComponent),
/* harmony export */   "ExperimentPermissionsComponent": () => (/* reexport safe */ _permissions_experiment_permissions_experiment_permissions_component__WEBPACK_IMPORTED_MODULE_6__.ExperimentPermissionsComponent),
/* harmony export */   "GroupPermissionDetailsComponent": () => (/* reexport safe */ _details_group_permission_details_group_permission_details_component__WEBPACK_IMPORTED_MODULE_3__.GroupPermissionDetailsComponent),
/* harmony export */   "GroupPermissionsComponent": () => (/* reexport safe */ _permissions_group_permissions_group_permissions_component__WEBPACK_IMPORTED_MODULE_9__.GroupPermissionsComponent),
/* harmony export */   "ModelPermissionDetailsComponent": () => (/* reexport safe */ _details_model_permission_details_model_permission_details_component__WEBPACK_IMPORTED_MODULE_1__.ModelPermissionDetailsComponent),
/* harmony export */   "ModelPermissionsComponent": () => (/* reexport safe */ _permissions_model_permissions_model_permissions_component__WEBPACK_IMPORTED_MODULE_7__.ModelPermissionsComponent),
/* harmony export */   "PermissionsComponent": () => (/* reexport safe */ _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_5__.PermissionsComponent),
/* harmony export */   "UserPermissionDetailsComponent": () => (/* reexport safe */ _details_user_permission_details_user_permission_details_component__WEBPACK_IMPORTED_MODULE_2__.UserPermissionDetailsComponent),
/* harmony export */   "UserPermissionsComponent": () => (/* reexport safe */ _permissions_user_permissions_user_permissions_component__WEBPACK_IMPORTED_MODULE_8__.UserPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _details_experiment_permission_details_experiment_permission_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/experiment-permission-details/experiment-permission-details.component */ 3037);
/* harmony import */ var _details_model_permission_details_model_permission_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/model-permission-details/model-permission-details.component */ 335);
/* harmony import */ var _details_user_permission_details_user_permission_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/user-permission-details/user-permission-details.component */ 1285);
/* harmony import */ var _details_group_permission_details_group_permission_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/group-permission-details/group-permission-details.component */ 938);
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/admin-page.component */ 5658);
/* harmony import */ var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions/permissions.component */ 6051);
/* harmony import */ var _permissions_experiment_permissions_experiment_permissions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permissions/experiment-permissions/experiment-permissions.component */ 3579);
/* harmony import */ var _permissions_model_permissions_model_permissions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permissions/model-permissions/model-permissions.component */ 9055);
/* harmony import */ var _permissions_user_permissions_user_permissions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permissions/user-permissions/user-permissions.component */ 7608);
/* harmony import */ var _permissions_group_permissions_group_permissions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./permissions/group-permissions/group-permissions.component */ 4765);












/***/ }),

/***/ 3579:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/experiment-permissions/experiment-permissions.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPermissionsComponent": () => (/* binding */ ExperimentPermissionsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _experiment_permissions_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-permissions.config */ 6710);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 7650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);










function ExperimentPermissionsComponent_ml_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ml-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function ExperimentPermissionsComponent_ml_table_0_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.handleActions($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r0.columnConfig)("data", ctx_r0.dataSource)("actions", ctx_r0.actions);
} }
function ExperimentPermissionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 40);
} }
class ExperimentPermissionsComponent {
    constructor(router, route, experimentDataService) {
        this.router = router;
        this.route = route;
        this.experimentDataService = experimentDataService;
        this.columnConfig = _experiment_permissions_config__WEBPACK_IMPORTED_MODULE_1__.COLUMN_CONFIG;
        this.dataSource = [];
        this.actions = _experiment_permissions_config__WEBPACK_IMPORTED_MODULE_1__.TABLE_ACTIONS;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.experimentDataService.getAllExperiments()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.isLoading = false))
            .subscribe((experiments) => this.dataSource = experiments);
    }
    handleActions(event) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TableActionEnum.EDIT]: this.handleExperimentEdit.bind(this),
        };
        const selectedAction = actionMapping[event.action.action];
        if (selectedAction) {
            selectedAction(event.item);
        }
    }
    handleExperimentEdit({ id }) {
        this.router.navigate([`../${_config__WEBPACK_IMPORTED_MODULE_2__.AdminPageRoutesEnum.EXPERIMENT}/` + id], { relativeTo: this.route });
    }
}
ExperimentPermissionsComponent.ɵfac = function ExperimentPermissionsComponent_Factory(t) { return new (t || ExperimentPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ExperimentsDataService)); };
ExperimentPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExperimentPermissionsComponent, selectors: [["ml-experiment-permissions"]], decls: 3, vars: 2, consts: [[3, "columnConfig", "data", "actions", "action", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "columnConfig", "data", "actions", "action"], [1, "loader", "d-flex", "justify-content-center", "align-items-center", "my-5"], [3, "diameter"]], template: function ExperimentPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ExperimentPermissionsComponent_ml_table_0_Template, 1, 3, "ml-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ExperimentPermissionsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50LXBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6710:
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/experiment-permissions/experiment-permissions.config.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLUMN_CONFIG": () => (/* binding */ COLUMN_CONFIG),
/* harmony export */   "TABLE_ACTIONS": () => (/* binding */ TABLE_ACTIONS)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const TABLE_ACTIONS = [
    { action: src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TableActionEnum.EDIT, icon: 'edit', name: 'Edit' },
];
const COLUMN_CONFIG = [{
        title: 'Experiment Name',
        key: 'name'
    }];


/***/ }),

/***/ 4765:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/group-permissions/group-permissions.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupPermissionsComponent": () => (/* binding */ GroupPermissionsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _group_permissions_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-permissions.config */ 2469);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 7650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_data_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data/group-data.service */ 9422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);










function GroupPermissionsComponent_ml_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ml-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function GroupPermissionsComponent_ml_table_0_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.handleItemAction($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r0.columnConfig)("data", ctx_r0.dataSource)("actions", ctx_r0.actions);
} }
function GroupPermissionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 40);
} }
class GroupPermissionsComponent {
    constructor(router, route, groupDataService) {
        this.router = router;
        this.route = route;
        this.groupDataService = groupDataService;
        this.columnConfig = _group_permissions_config__WEBPACK_IMPORTED_MODULE_1__.GROUP_COLUMN_CONFIG;
        this.dataSource = [];
        this.actions = _group_permissions_config__WEBPACK_IMPORTED_MODULE_1__.GROUP_ACTIONS;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.groupDataService.getAllGroups()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.isLoading = false))
            .subscribe(({ groups }) => this.dataSource = groups.map((group) => ({ group })));
    }
    handleItemAction({ action, item }) {
        const actionHandlers = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TableActionEnum.EDIT]: this.handleUserEdit.bind(this),
        };
        const selectedAction = actionHandlers[action.action];
        if (selectedAction) {
            selectedAction(item);
        }
    }
    handleUserEdit({ group }) {
        this.router.navigate([`../${_config__WEBPACK_IMPORTED_MODULE_2__.AdminPageRoutesEnum.GROUP}/` + group], { relativeTo: this.route });
    }
}
GroupPermissionsComponent.ɵfac = function GroupPermissionsComponent_Factory(t) { return new (t || GroupPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_data_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService)); };
GroupPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GroupPermissionsComponent, selectors: [["ml-group-permissions"]], decls: 3, vars: 2, consts: [[3, "columnConfig", "data", "actions", "action", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "columnConfig", "data", "actions", "action"], [1, "loader", "d-flex", "justify-content-center", "align-items-center", "my-5"], [3, "diameter"]], template: function GroupPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, GroupPermissionsComponent_ml_table_0_Template, 1, 3, "ml-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GroupPermissionsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2469:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/group-permissions/group-permissions.config.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GROUP_ACTIONS": () => (/* binding */ GROUP_ACTIONS),
/* harmony export */   "GROUP_COLUMN_CONFIG": () => (/* binding */ GROUP_COLUMN_CONFIG)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const GROUP_COLUMN_CONFIG = [
    {
        title: 'Group name',
        key: 'group',
    },
];
const GROUP_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT
];


/***/ }),

/***/ 9055:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/model-permissions/model-permissions.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPermissionsComponent": () => (/* binding */ ModelPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _model_permissions_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-permissions.config */ 6693);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 7650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);










function ModelPermissionsComponent_ml_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ml-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function ModelPermissionsComponent_ml_table_0_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.handleAction($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r0.columnConfig)("data", ctx_r0.dataSource)("actions", ctx_r0.actions);
} }
function ModelPermissionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 40);
} }
class ModelPermissionsComponent {
    constructor(route, router, modelDataService) {
        this.route = route;
        this.router = router;
        this.modelDataService = modelDataService;
        this.columnConfig = _model_permissions_config__WEBPACK_IMPORTED_MODULE_0__.MODEL_COLUMN_CONFIG;
        this.dataSource = [];
        this.actions = _model_permissions_config__WEBPACK_IMPORTED_MODULE_0__.MODEL_TABLE_ACTIONS;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.modelDataService.getAllModels()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.isLoading = false))
            .subscribe((models) => {
            this.dataSource = models;
        });
    }
    handleModelEdit({ name }) {
        this.router.navigate([`../${_config__WEBPACK_IMPORTED_MODULE_2__.AdminPageRoutesEnum.MODEL}/` + name], { relativeTo: this.route });
    }
    handleAction({ action, item }) {
        const actionMapping = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_1__.TableActionEnum.EDIT]: this.handleModelEdit.bind(this),
        };
        const selectedAction = actionMapping[action.action];
        if (selectedAction) {
            selectedAction(item);
        }
    }
}
ModelPermissionsComponent.ɵfac = function ModelPermissionsComponent_Factory(t) { return new (t || ModelPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.ModelsDataService)); };
ModelPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModelPermissionsComponent, selectors: [["ml-model-permissions"]], decls: 3, vars: 2, consts: [[3, "columnConfig", "data", "actions", "action", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "columnConfig", "data", "actions", "action"], [1, "loader", "d-flex", "justify-content-center", "align-items-center", "my-5"], [3, "diameter"]], template: function ModelPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModelPermissionsComponent_ml_table_0_Template, 1, 3, "ml-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModelPermissionsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbC1wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6693:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/model-permissions/model-permissions.config.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_COLUMN_CONFIG": () => (/* binding */ MODEL_COLUMN_CONFIG),
/* harmony export */   "MODEL_TABLE_ACTIONS": () => (/* binding */ MODEL_TABLE_ACTIONS)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const MODEL_COLUMN_CONFIG = [
    {
        title: 'Model Name',
        key: 'name',
    },
];
const MODEL_TABLE_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT,
];


/***/ }),

/***/ 6051:
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/permissions.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsComponent": () => (/* binding */ PermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _user_permissions_user_permissions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-permissions/user-permissions.component */ 7608);
/* harmony import */ var _experiment_permissions_experiment_permissions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-permissions/experiment-permissions.component */ 3579);
/* harmony import */ var _model_permissions_model_permissions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-permissions/model-permissions.component */ 9055);
/* harmony import */ var _group_permissions_group_permissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-permissions/group-permissions.component */ 4765);






class PermissionsComponent {
}
PermissionsComponent.ɵfac = function PermissionsComponent_Factory(t) { return new (t || PermissionsComponent)(); };
PermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PermissionsComponent, selectors: [["ml-permissions"]], decls: 13, vars: 0, consts: [["label", "Users permissions"], [1, "my-3"], ["label", "Experiment permissions"], ["label", "Model permissions"], ["label", "Group permissions"]], template: function PermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ml-user-permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-tab", 2)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ml-experiment-permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-tab", 3)(8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ml-model-permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-tab", 4)(11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ml-group-permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _user_permissions_user_permissions_component__WEBPACK_IMPORTED_MODULE_0__.UserPermissionsComponent, _experiment_permissions_experiment_permissions_component__WEBPACK_IMPORTED_MODULE_1__.ExperimentPermissionsComponent, _model_permissions_model_permissions_component__WEBPACK_IMPORTED_MODULE_2__.ModelPermissionsComponent, _group_permissions_group_permissions_component__WEBPACK_IMPORTED_MODULE_3__.GroupPermissionsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7608:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/user-permissions/user-permissions.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsComponent": () => (/* binding */ UserPermissionsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);
/* harmony import */ var _user_permissions_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-permissions.config */ 5585);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/table/table.component */ 6709);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);










function UserPermissionsComponent_ml_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ml-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function UserPermissionsComponent_ml_table_0_Template_ml_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.handleItemAction($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columnConfig", ctx_r0.columnConfig)("data", ctx_r0.dataSource)("actions", ctx_r0.actions);
} }
function UserPermissionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 40);
} }
class UserPermissionsComponent {
    constructor(router, route, userDataService) {
        this.router = router;
        this.route = route;
        this.userDataService = userDataService;
        this.columnConfig = _user_permissions_config__WEBPACK_IMPORTED_MODULE_1__.USER_COLUMN_CONFIG;
        this.actions = _user_permissions_config__WEBPACK_IMPORTED_MODULE_1__.USER_ACTIONS;
        this.dataSource = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.userDataService.getAllUsers()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.isLoading = false))
            .subscribe(({ users }) => this.dataSource = users.map((user) => ({ user })));
    }
    handleItemAction({ action, item }) {
        const actionHandlers = {
            [src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TableActionEnum.EDIT]: this.handleUserEdit.bind(this),
        };
        const selectedAction = actionHandlers[action.action];
        if (selectedAction) {
            selectedAction(item);
        }
    }
    handleUserEdit({ user }) {
        this.router.navigate([`../${_config__WEBPACK_IMPORTED_MODULE_2__.AdminPageRoutesEnum.USER}/` + user], { relativeTo: this.route });
    }
}
UserPermissionsComponent.ɵfac = function UserPermissionsComponent_Factory(t) { return new (t || UserPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.UserDataService)); };
UserPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserPermissionsComponent, selectors: [["ml-user-permissions"]], decls: 3, vars: 2, consts: [[3, "columnConfig", "data", "actions", "action", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "columnConfig", "data", "actions", "action"], [1, "loader", "d-flex", "justify-content-center", "align-items-center", "my-5"], [3, "diameter"]], template: function UserPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, UserPermissionsComponent_ml_table_0_Template, 1, 3, "ml-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserPermissionsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5585:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/admin-page/components/permissions/user-permissions/user-permissions.config.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_ACTIONS": () => (/* binding */ USER_ACTIONS),
/* harmony export */   "USER_COLUMN_CONFIG": () => (/* binding */ USER_COLUMN_CONFIG)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/table/table.config */ 9282);

const USER_COLUMN_CONFIG = [
    {
        title: 'User name',
        key: 'user',
    },
];
const USER_ACTIONS = [
    src_app_shared_components_table_table_config__WEBPACK_IMPORTED_MODULE_0__.TABLE_ACTION_CONFIG.EDIT
];


/***/ }),

/***/ 7650:
/*!*****************************************************!*\
  !*** ./src/app/features/admin-page/config/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutesEnum": () => (/* binding */ AdminPageRoutesEnum)
/* harmony export */ });
var AdminPageRoutesEnum;
(function (AdminPageRoutesEnum) {
    AdminPageRoutesEnum["PERMISSIONS"] = "permissions";
    AdminPageRoutesEnum["USER"] = "user";
    AdminPageRoutesEnum["EXPERIMENT"] = "experiment";
    AdminPageRoutesEnum["MODEL"] = "model";
    AdminPageRoutesEnum["GROUP"] = "group";
})(AdminPageRoutesEnum || (AdminPageRoutesEnum = {}));


/***/ }),

/***/ 9282:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/table/table.config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TABLE_ACTION_CONFIG": () => (/* binding */ TABLE_ACTION_CONFIG),
/* harmony export */   "TableActionEnum": () => (/* binding */ TableActionEnum)
/* harmony export */ });
var TableActionEnum;
(function (TableActionEnum) {
    TableActionEnum["EDIT"] = "EDIT";
    TableActionEnum["DELETE"] = "DELETE";
    TableActionEnum["REVOKE"] = "REVOKE";
    TableActionEnum["ADD"] = "ADD";
    TableActionEnum["MANAGE"] = "MANAGE";
})(TableActionEnum || (TableActionEnum = {}));
const ADD_ACTION = {
    name: 'Add',
    icon: 'add',
    action: TableActionEnum.ADD
};
const EDIT_ACTION = {
    name: 'Edit',
    icon: 'edit',
    action: TableActionEnum.EDIT
};
const DELETE_ACTION = {
    name: 'Delete',
    icon: 'delete',
    action: TableActionEnum.DELETE
};
const REVOKE_ACTION = {
    name: 'Revoke',
    icon: 'key_off',
    action: TableActionEnum.REVOKE
};
const TABLE_ACTION_CONFIG = {
    ADD: ADD_ACTION,
    EDIT: EDIT_ACTION,
    DELETE: DELETE_ACTION,
    REVOKE: REVOKE_ACTION
};


/***/ }),

/***/ 9422:
/*!************************************************************!*\
  !*** ./src/app/shared/services/data/group-data.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupDataService": () => (/* binding */ GroupDataService)
/* harmony export */ });
/* harmony import */ var src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/api-urls */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class GroupDataService {
    constructor(http) {
        this.http = http;
    }
    getAllGroups() {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.ALL_GROUPS);
    }
    getAllExperimentsForGroup(groupName) {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.EXPERIMENTS_FOR_GROUP.replace('${groupName}', groupName));
    }
    getAllRegisteredModelsForGroup(groupName) {
        return this.http.get(src_app_core_configs_api_urls__WEBPACK_IMPORTED_MODULE_0__.API_URL.MODELS_FOR_GROUP.replace('${groupName}', groupName));
    }
}
GroupDataService.ɵfac = function GroupDataService_Factory(t) { return new (t || GroupDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GroupDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroupDataService, factory: GroupDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 586:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/permission-modal.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionModalService": () => (/* binding */ PermissionModalService)
/* harmony export */ });
/* harmony import */ var src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configs/core */ 2590);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ 7667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);




class PermissionModalService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openEditPermissionsModal(entity, targetEntity, currentPermission) {
        const dialogData = {
            targetEntity,
            entity,
            currentPermission,
        };
        return this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_1__.EditPermissionsModalComponent, { data: dialogData }).afterClosed();
    }
    openGrantPermissionModal(entityType = src_app_core_configs_core__WEBPACK_IMPORTED_MODULE_0__.EntityEnum.EXPERIMENT, entities, targetName) {
        return this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_1__.GrantPermissionModalComponent, {
            data: {
                entityType,
                entities,
                targetName,
            },
        }).afterClosed();
    }
}
PermissionModalService.ɵfac = function PermissionModalService_Factory(t) { return new (t || PermissionModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
PermissionModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PermissionModalService, factory: PermissionModalService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_features_admin-page_admin-page_module_ts.js.map