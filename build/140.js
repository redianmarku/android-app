webpackJsonp([140],{

/***/ 2062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetenciesPageModule", function() { return AddonCompetencyCompetenciesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__competencies__ = __webpack_require__(2218);
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






var AddonCompetencyCompetenciesPageModule = /** @class */ (function () {
    function AddonCompetencyCompetenciesPageModule() {
    }
    AddonCompetencyCompetenciesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__competencies__["a" /* AddonCompetencyCompetenciesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__competencies__["a" /* AddonCompetencyCompetenciesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyCompetenciesPageModule);
    return AddonCompetencyCompetenciesPageModule;
}());

//# sourceMappingURL=competencies.module.js.map

/***/ }),

/***/ 2218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCompetenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_competency__ = __webpack_require__(110);
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
 * Page that displays the list of competencies of a learning plan.
 */
var AddonCompetencyCompetenciesPage = /** @class */ (function () {
    function AddonCompetencyCompetenciesPage(navParams, translate, domUtils, competencyProvider) {
        this.translate = translate;
        this.domUtils = domUtils;
        this.competencyProvider = competencyProvider;
        this.competenciesLoaded = false;
        this.competencies = [];
        this.planId = navParams.get('planId');
        this.courseId = navParams.get('courseId');
        this.competencyId = navParams.get('competencyId');
        this.userId = navParams.get('userId');
    }
    /**
     * View loaded.
     */
    AddonCompetencyCompetenciesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.competencyId) {
            // There is a competency to load.
            this.openCompetency(this.competencyId);
        }
        this.fetchCompetencies().then(function () {
            if (!_this.competencyId && _this.splitviewCtrl.isOn() && _this.competencies.length > 0) {
                // Take first and load it.
                _this.openCompetency(_this.competencies[0].competency.id);
            }
        }).finally(function () {
            _this.competenciesLoaded = true;
        });
    };
    /**
     * Fetches the competencies and updates the view.
     *
     * @return Promise resolved when done.
     */
    AddonCompetencyCompetenciesPage.prototype.fetchCompetencies = function () {
        var _this = this;
        var promise;
        if (this.planId) {
            promise = this.competencyProvider.getLearningPlan(this.planId);
        }
        else if (this.courseId) {
            promise = this.competencyProvider.getCourseCompetencies(this.courseId, this.userId);
        }
        else {
            promise = Promise.reject(null);
        }
        return promise.then(function (response) {
            if (_this.planId) {
                var resp = response;
                if (resp.competencycount <= 0) {
                    return Promise.reject(_this.translate.instant('addon.competency.errornocompetenciesfound'));
                }
                _this.title = resp.plan.name;
                _this.userId = resp.plan.userid;
            }
            else {
                _this.title = _this.translate.instant('addon.competency.coursecompetencies');
            }
            _this.competencies = response.competencies;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting competencies data.');
        });
    };
    /**
     * Opens a competency.
     *
     * @param competencyId
     */
    AddonCompetencyCompetenciesPage.prototype.openCompetency = function (competencyId) {
        this.competencyId = competencyId;
        var params;
        if (this.planId) {
            params = { competencyId: competencyId, planId: this.planId };
        }
        else {
            params = { competencyId: competencyId, courseId: this.courseId, userId: this.userId };
        }
        this.splitviewCtrl.push('AddonCompetencyCompetencyPage', params);
    };
    /**
     * Refreshes the competencies.
     *
     * @param refresher Refresher.
     */
    AddonCompetencyCompetenciesPage.prototype.refreshCompetencies = function (refresher) {
        var _this = this;
        var promise;
        if (this.planId) {
            promise = this.competencyProvider.invalidateLearningPlan(this.planId);
        }
        else {
            promise = this.competencyProvider.invalidateCourseCompetencies(this.courseId, this.userId);
        }
        return promise.finally(function () {
            _this.fetchCompetencies().finally(function () {
                refresher.complete();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonCompetencyCompetenciesPage.prototype, "splitviewCtrl", void 0);
    AddonCompetencyCompetenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-competencies',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competencies\competencies.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="competenciesLoaded" (ionRefresh)="refreshCompetencies($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="competenciesLoaded">\n\n            <ion-list>\n\n                <a ion-item text-wrap *ngFor="let competency of competencies" [title]="competency.competency.shortname" (click)="openCompetency(competency.competency.id)" [class.core-split-item-selected]="competency.competency.id == competencyId">\n\n                    <h2>{{ competency.competency.shortname }} <em>{{competency.competency.idnumber}}</em></h2>\n\n                    <ion-badge item-end *ngIf="competency.usercompetency" [color]="competency.usercompetency.proficiency ? \'success\' : \'danger\'">{{ competency.usercompetency.gradename }}</ion-badge>\n\n                    <ion-badge item-end *ngIf="competency.usercompetencycourse" [color]="competency.usercompetencycourse.proficiency ? \'success\' : \'danger\'">{{ competency.usercompetencycourse.gradename }}</ion-badge>\n\n                </a>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competencies\competencies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_competency__["a" /* AddonCompetencyProvider */]])
    ], AddonCompetencyCompetenciesPage);
    return AddonCompetencyCompetenciesPage;
}());

//# sourceMappingURL=competencies.js.map

/***/ })

});
//# sourceMappingURL=140.js.map