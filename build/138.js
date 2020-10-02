webpackJsonp([138],{

/***/ 2064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencySummaryPageModule", function() { return AddonCompetencyCompetencySummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__competencysummary__ = __webpack_require__(2220);
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






var AddonCompetencyCompetencySummaryPageModule = /** @class */ (function () {
    function AddonCompetencyCompetencySummaryPageModule() {
    }
    AddonCompetencyCompetencySummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__competencysummary__["a" /* AddonCompetencyCompetencySummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__competencysummary__["a" /* AddonCompetencyCompetencySummaryPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCompetencyCompetencySummaryPageModule);
    return AddonCompetencyCompetencySummaryPageModule;
}());

//# sourceMappingURL=competencysummary.module.js.map

/***/ }),

/***/ 2220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCompetencySummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_competency__ = __webpack_require__(110);
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
var AddonCompetencyCompetencySummaryPage = /** @class */ (function () {
    function AddonCompetencyCompetencySummaryPage(navCtrl, navParams, domUtils, svComponent, competencyProvider) {
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.svComponent = svComponent;
        this.competencyProvider = competencyProvider;
        this.competencyLoaded = false;
        this.competencyId = navParams.get('competencyId');
        this.contextLevel = navParams.get('contextLevel');
        this.contextInstanceId = navParams.get('contextInstanceId');
    }
    /**
     * View loaded.
     */
    AddonCompetencyCompetencySummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchCompetency().then(function () {
            var name = _this.competency.competency && _this.competency.competency.shortname;
            _this.competencyProvider.logCompetencyView(_this.competencyId, name).catch(function () {
                // Ignore errors.
            });
        }).finally(function () {
            _this.competencyLoaded = true;
        });
    };
    /**
     * Fetches the competency summary and updates the view.
     *
     * @return Promise resolved when done.
     */
    AddonCompetencyCompetencySummaryPage.prototype.fetchCompetency = function () {
        var _this = this;
        return this.competencyProvider.getCompetencySummary(this.competencyId).then(function (result) {
            if (!_this.contextLevel || typeof _this.contextInstanceId == 'undefined') {
                // Context not specified, use user context.
                _this.contextLevel = 'user';
                _this.contextInstanceId = result.usercompetency.userid;
            }
            _this.competency = result.competency;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting competency summary data.');
        });
    };
    /**
     * Refreshes the competency summary.
     *
     * @param refresher Refresher.
     */
    AddonCompetencyCompetencySummaryPage.prototype.refreshCompetency = function (refresher) {
        var _this = this;
        this.competencyProvider.invalidateCompetencySummary(this.competencyId).finally(function () {
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
    AddonCompetencyCompetencySummaryPage.prototype.openCompetencySummary = function (competencyId) {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push('AddonCompetencyCompetencySummaryPage', {
            competencyId: competencyId,
            contextLevel: this.contextLevel,
            contextInstanceId: this.contextInstanceId
        });
    };
    AddonCompetencyCompetencySummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-competency-competency-summary',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competencysummary\competencysummary.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title *ngIf="competency">{{ competency.competency.shortname }} <small>{{ competency.competency.idnumber }}</small></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="competencyLoaded" (ionRefresh)="refreshCompetency($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="competencyLoaded">\n\n        <ion-card *ngIf="competency">\n\n            <ion-item text-wrap *ngIf="competency.competency.description">\n\n                <core-format-text [text]="competency.competency.description" [contextLevel]="contextLevel" [contextInstanceId]="contextInstanceId"></core-format-text>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <strong>{{ \'addon.competency.path\' | translate }}</strong>\n\n                {{ competency.comppath.framework.name }}\n\n                <span *ngFor="let ancestor of competency.comppath.ancestors">\n\n                    &nbsp;/&nbsp;<a (click)="openCompetencySummary(ancestor.id)">{{ ancestor.name }}</a>\n\n                </span>\n\n            </ion-item>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\competency\pages\competencysummary\competencysummary.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */], __WEBPACK_IMPORTED_MODULE_4__providers_competency__["a" /* AddonCompetencyProvider */]])
    ], AddonCompetencyCompetencySummaryPage);
    return AddonCompetencyCompetencySummaryPage;
}());

//# sourceMappingURL=competencysummary.js.map

/***/ })

});
//# sourceMappingURL=138.js.map