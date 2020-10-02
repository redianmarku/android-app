webpackJsonp([135],{

/***/ 2066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanListPageModule", function() { return AddonCompetencyPlanListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__planlist__ = __webpack_require__(2222);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonCompetencyPlanListPageModule = /** @class */ (function () {
    function AddonCompetencyPlanListPageModule() {
    }
    AddonCompetencyPlanListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__planlist__["a" /* AddonCompetencyPlanListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__planlist__["a" /* AddonCompetencyPlanListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyPlanListPageModule);
    return AddonCompetencyPlanListPageModule;
}());

//# sourceMappingURL=planlist.module.js.map

/***/ }),

/***/ 2222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyPlanListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_competency__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(466);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Page that displays the list of learning plans.
 */
var AddonCompetencyPlanListPage = /** @class */ (function () {
    function AddonCompetencyPlanListPage(navParams, domUtils, competencyProvider, competencyHelperProvider) {
        this.domUtils = domUtils;
        this.competencyProvider = competencyProvider;
        this.competencyHelperProvider = competencyHelperProvider;
        this.plansLoaded = false;
        this.plans = [];
        this.userId = navParams.get('userId');
    }
    /**
     * View loaded.
     */
    AddonCompetencyPlanListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.planId) {
            // There is a learning plan to load.
            this.openPlan(this.planId);
        }
        this.fetchLearningPlans().then(function () {
            if (!_this.planId && _this.splitviewCtrl.isOn() && _this.plans.length > 0) {
                // Take first and load it.
                _this.openPlan(_this.plans[0].id);
            }
        }).finally(function () {
            _this.plansLoaded = true;
        });
    };
    /**
     * Fetches the learning plans and updates the view.
     *
     * @return Promise resolved when done.
     */
    AddonCompetencyPlanListPage.prototype.fetchLearningPlans = function () {
        var _this = this;
        return this.competencyProvider.getLearningPlans(this.userId).then(function (plans) {
            plans.forEach(function (plan) {
                plan.statusname = _this.competencyHelperProvider.getPlanStatusName(plan.status);
                switch (plan.status) {
                    case __WEBPACK_IMPORTED_MODULE_4__providers_competency__["a" /* AddonCompetencyProvider */].STATUS_ACTIVE:
                        plan.statuscolor = 'success';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__providers_competency__["a" /* AddonCompetencyProvider */].STATUS_COMPLETE:
                        plan.statuscolor = 'danger';
                        break;
                    default:
                        plan.statuscolor = 'warning';
                        break;
                }
            });
            _this.plans = plans;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting learning plans data.');
        });
    };
    /**
     * Refreshes the learning plans.
     *
     * @param refresher Refresher.
     */
    AddonCompetencyPlanListPage.prototype.refreshLearningPlans = function (refresher) {
        var _this = this;
        this.competencyProvider.invalidateLearningPlans(this.userId).finally(function () {
            _this.fetchLearningPlans().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Opens a learning plan.
     *
     * @param planId Learning plan to load.
     */
    AddonCompetencyPlanListPage.prototype.openPlan = function (planId) {
        this.planId = planId;
        this.splitviewCtrl.push('AddonCompetencyPlanPage', { planId: planId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonCompetencyPlanListPage.prototype, "splitviewCtrl", void 0);
    AddonCompetencyPlanListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-planlist',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\planlist\planlist.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.competency.userplans\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="plansLoaded" (ionRefresh)="refreshLearningPlans($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="plansLoaded">\n\n            <core-empty-box *ngIf="plans.length == 0" icon="map" [message]="\'addon.competency.noplanswerecreated\' | translate">\n\n            </core-empty-box>\n\n            <ion-list *ngIf="plans.length > 0" no-margin>\n\n                <a ion-item text-wrap *ngFor="let plan of plans" [title]="plan.name" (click)="openPlan(plan.id)" [class.core-split-item-selected]="plan.id == planId">\n\n                    <h2>{{ plan.name }}</h2>\n\n                    <p *ngIf="plan.duedate > 0">{{ \'addon.competency.duedate\' | translate }}: {{ plan.duedate * 1000 | coreFormatDate :\'strftimedatetimeshort\' }}</p>\n\n                    <ion-badge item-end text-wrap [color]="plan.statuscolor">{{ plan.statusname }}</ion-badge>\n\n                </a>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\planlist\planlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_competency__["a" /* AddonCompetencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* AddonCompetencyHelperProvider */]])
    ], AddonCompetencyPlanListPage);
    return AddonCompetencyPlanListPage;
}());

//# sourceMappingURL=planlist.js.map

/***/ })

});
//# sourceMappingURL=135.js.map