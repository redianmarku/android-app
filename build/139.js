webpackJsonp([139],{

/***/ 2063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencyPageModule", function() { return AddonCompetencyCompetencyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__competency__ = __webpack_require__(2219);
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







var AddonCompetencyCompetencyPageModule = /** @class */ (function () {
    function AddonCompetencyCompetencyPageModule() {
    }
    AddonCompetencyCompetencyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__competency__["a" /* AddonCompetencyCompetencyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__competency__["a" /* AddonCompetencyCompetencyPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyCompetencyPageModule);
    return AddonCompetencyCompetencyPageModule;
}());

//# sourceMappingURL=competency.module.js.map

/***/ }),

/***/ 2219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCompetencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_competency__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(466);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/**
 * Page that displays a learning plan.
 */
var AddonCompetencyCompetencyPage = /** @class */ (function () {
    function AddonCompetencyCompetencyPage(navCtrl, navParams, translate, sitesProvider, domUtils, svComponent, competencyProvider, competencyHelperProvider) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.svComponent = svComponent;
        this.competencyProvider = competencyProvider;
        this.competencyHelperProvider = competencyHelperProvider;
        this.competencyLoaded = false;
        this.competencyId = navParams.get('competencyId');
        this.planId = navParams.get('planId');
        this.courseId = navParams.get('courseId');
        this.userId = navParams.get('userId');
    }
    /**
     * View loaded.
     */
    AddonCompetencyCompetencyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchCompetency().then(function () {
            var name = _this.competency && _this.competency.competency && _this.competency.competency.competency &&
                _this.competency.competency.competency.shortname;
            if (_this.planId) {
                _this.competencyProvider.logCompetencyInPlanView(_this.planId, _this.competencyId, _this.planStatus, name, _this.userId).catch(function () {
                    // Ignore errors.
                });
            }
            else {
                _this.competencyProvider.logCompetencyInCourseView(_this.courseId, _this.competencyId, name, _this.userId).catch(function () {
                    // Ignore errors.
                });
            }
        }).finally(function () {
            _this.competencyLoaded = true;
        });
    };
    /**
     * Fetches the competency and updates the view.
     *
     * @return Promise resolved when done.
     */
    AddonCompetencyCompetencyPage.prototype.fetchCompetency = function () {
        var _this = this;
        var promise;
        if (this.planId) {
            this.planStatus = null;
            promise = this.competencyProvider.getCompetencyInPlan(this.planId, this.competencyId);
        }
        else if (this.courseId) {
            promise = this.competencyProvider.getCompetencyInCourse(this.courseId, this.competencyId, this.userId);
        }
        else {
            promise = Promise.reject(null);
        }
        return promise.then(function (competency) {
            // Calculate the context.
            if (_this.courseId) {
                _this.contextLevel = 'course';
                _this.contextInstanceId = _this.courseId;
            }
            else {
                _this.contextLevel = 'user';
                _this.contextInstanceId = _this.userId || competency.usercompetencysummary.user.id;
            }
            _this.competency = competency.usercompetencysummary;
            _this.userCompetency = _this.competency.usercompetencyplan || _this.competency.usercompetency;
            if (_this.planId) {
                _this.planStatus = competency.plan.status;
                _this.competency.usercompetency.statusname =
                    _this.competencyHelperProvider.getCompetencyStatusName(_this.competency.usercompetency.status);
            }
            else {
                _this.userCompetency = _this.competency.usercompetencycourse;
                _this.coursemodules = competency.coursemodules;
            }
            if (_this.competency.user.id != _this.sitesProvider.getCurrentSiteUserId()) {
                // Get the user profile from the returned object.
                _this.user = _this.competency.user;
            }
            _this.competency.evidence.forEach(function (evidence) {
                if (evidence.descidentifier) {
                    var key = 'addon.competency.' + evidence.descidentifier;
                    evidence.description = _this.translate.instant(key, { $a: evidence.desca });
                }
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting competency data.');
        });
    };
    /**
     * Refreshes the competency.
     *
     * @param refresher Refresher.
     */
    AddonCompetencyCompetencyPage.prototype.refreshCompetency = function (refresher) {
        var _this = this;
        var promise;
        if (this.planId) {
            promise = this.competencyProvider.invalidateCompetencyInPlan(this.planId, this.competencyId);
        }
        else {
            promise = this.competencyProvider.invalidateCompetencyInCourse(this.courseId, this.competencyId);
        }
        return promise.finally(function () {
            _this.fetchCompetency().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    AddonCompetencyCompetencyPage.prototype.openCompetencySummary = function (competencyId) {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push('AddonCompetencyCompetencySummaryPage', {
            competencyId: competencyId,
            contextLevel: this.contextLevel,
            contextInstanceId: this.contextInstanceId
        });
    };
    AddonCompetencyCompetencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-competency',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competency\competency.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title *ngIf="competency">{{ competency.competency.competency.shortname }} <small>{{ competency.competency.competency.idnumber }}</small></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="competencyLoaded" (ionRefresh)="refreshCompetency($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="competencyLoaded">\n\n        <ion-card *ngIf="user">\n\n            <ion-item text-wrap>\n\n                <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n\n                <h2>{{ user.fullname }}</h2>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="competency">\n\n            <ion-item text-wrap *ngIf="competency.competency.competency.description">\n\n                <core-format-text [text]="competency.competency.competency.description" [contextLevel]="contextLevel" [contextInstanceId]="contextInstanceId"></core-format-text>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <strong>{{ \'addon.competency.path\' | translate }}</strong>\n\n                <a *ngIf="competency.competency.comppath.showlinks" [href]="competency.competency.comppath.pluginbaseurl + \'/competencies.php?competencyframeworkid=\' + competency.competency.comppath.framework.id + \'&pagecontextid=\' + competency.competency.comppath.pagecontextid" core-link [title]="competency.competency.comppath.framework.name">{{ competency.competency.comppath.framework.name }}</a>\n\n                <ng-container *ngIf="!competency.competency.comppath.showlinks">{{ competency.competency.comppath.framework.name }}</ng-container>\n\n                &nbsp;/&nbsp;\n\n                <span *ngFor="let ancestor of competency.competency.comppath.ancestors">\n\n                    <a *ngIf="competency.competency.comppath.showlinks" (click)="openCompetencySummary(ancestor.id)" class="core-clickable">{{ ancestor.name }}</a>\n\n                    <ng-container *ngIf="!competency.competency.comppath.showlinks">{{ ancestor.name }}</ng-container>\n\n                    <ng-container *ngIf="!ancestor.last">&nbsp;/&nbsp;</ng-container>\n\n                </span>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <strong>{{ \'addon.competency.crossreferencedcompetencies\' | translate }}</strong>:\n\n                <div *ngIf="!competency.competency.hasrelatedcompetencies">{{ \'addon.competency.nocrossreferencedcompetencies\' | translate }}</div>\n\n                <div *ngIf="competency.competency.hasrelatedcompetencies">\n\n                    <p *ngFor="let relatedcomp of competency.competency.relatedcompetencies">\n\n                        <a (click)="openCompetencySummary(relatedcomp.id)" class="core-clickable">\n\n                            {{ relatedcomp.shortname }} - {{ relatedcomp.idnumber }}\n\n                        </a>\n\n                    </p>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="coursemodules">\n\n                <strong>{{ \'addon.competency.activities\' | translate }}</strong>\n\n                <p *ngIf="coursemodules.length == 0">\n\n                    {{ \'addon.competency.noactivities\' | translate }}\n\n                </p>\n\n                <a ion-item text-wrap *ngFor="let activity of coursemodules" [href]="activity.url" [title]="activity.name" core-link capture="true">\n\n                    <img item-start core-external-content [src]="activity.iconurl" alt="" role="presentation" *ngIf="activity.iconurl" class="core-module-icon">\n\n                    <core-format-text [text]="activity.name" contextLevel="module" [contextInstanceId]="activity.id" [courseId]="courseId"></core-format-text>\n\n                </a>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="userCompetency.status">\n\n                <strong>{{ \'addon.competency.reviewstatus\' | translate }}</strong>\n\n                {{ userCompetency.statusname }}\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <strong>{{ \'addon.competency.proficient\' | translate }}</strong>\n\n                <ion-badge color="success" *ngIf="userCompetency.proficiency">\n\n                    {{ \'core.yes\' | translate }}\n\n                </ion-badge>\n\n                <ion-badge color="danger" *ngIf="!userCompetency.proficiency">\n\n                    {{ \'core.no\' | translate }}\n\n                </ion-badge>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <strong>{{ \'addon.competency.rating\' | translate }}</strong>\n\n                <ion-badge color="dark">{{ userCompetency.gradename }}</ion-badge>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <div *ngIf="competency">\n\n            <h3 margin-horizontal>{{ \'addon.competency.evidence\' | translate }}</h3>\n\n            <p margin-horizontal *ngIf="competency.evidence.length == 0">\n\n                {{ \'addon.competency.noevidence\' | translate }}\n\n            </p>\n\n            <ion-card *ngFor="let evidence of competency.evidence">\n\n                <a ion-item text-wrap *ngIf="evidence.actionuser" core-user-link [userId]="evidence.actionuser.id" [courseId]="courseId">\n\n                    <ion-avatar core-user-avatar [user]="evidence.actionuser" item-start></ion-avatar>\n\n                    <h2>{{ evidence.actionuser.fullname }}</h2>\n\n                    <p>{{ evidence.timemodified * 1000 | coreFormatDate }}</p>\n\n                </a>\n\n                <ion-item text-wrap>\n\n                    <p><ion-badge color="dark">{{ evidence.gradename }}</ion-badge></p>\n\n                    <p margin-top *ngIf="evidence.description">{{ evidence.description }}</p>\n\n                    <blockquote *ngIf="evidence.note">{{ evidence.note }}</blockquote>\n\n                </ion-item>\n\n            </ion-card>\n\n        </div>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competency\competency.html"*/,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__components_split_view_split_view__["a" /* CoreSplitViewComponent */], __WEBPACK_IMPORTED_MODULE_6__providers_competency__["a" /* AddonCompetencyProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* AddonCompetencyHelperProvider */]])
    ], AddonCompetencyCompetencyPage);
    return AddonCompetencyCompetencyPage;
}());

//# sourceMappingURL=competency.js.map

/***/ })

});
//# sourceMappingURL=139.js.map