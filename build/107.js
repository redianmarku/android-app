webpackJsonp([107],{

/***/ 2088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackRespondentsPageModule", function() { return AddonModFeedbackRespondentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__respondents__ = __webpack_require__(2244);
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








var AddonModFeedbackRespondentsPageModule = /** @class */ (function () {
    function AddonModFeedbackRespondentsPageModule() {
    }
    AddonModFeedbackRespondentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__respondents__["a" /* AddonModFeedbackRespondentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModFeedbackComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__respondents__["a" /* AddonModFeedbackRespondentsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModFeedbackRespondentsPageModule);
    return AddonModFeedbackRespondentsPageModule;
}());

//# sourceMappingURL=respondents.module.js.map

/***/ }),

/***/ 2244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModFeedbackRespondentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_feedback__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_groups__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__ = __webpack_require__(84);
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
 * Page that displays feedback respondents.
 */
var AddonModFeedbackRespondentsPage = /** @class */ (function () {
    function AddonModFeedbackRespondentsPage(navParams, feedbackProvider, groupsProvider, domUtils, feedbackHelper, navCtrl) {
        this.feedbackProvider = feedbackProvider;
        this.groupsProvider = groupsProvider;
        this.domUtils = domUtils;
        this.feedbackHelper = feedbackHelper;
        this.navCtrl = navCtrl;
        this.page = 0;
        this.groupInfo = {
            groups: [],
            separateGroups: false,
            visibleGroups: false
        };
        this.responses = {
            attempts: [],
            total: 0,
            canLoadMore: false
        };
        this.anonResponses = {
            attempts: [],
            total: 0,
            canLoadMore: false
        };
        this.feedbackLoaded = false;
        this.loadingMore = false;
        var module = navParams.get('module');
        this.moduleId = module.id;
        this.feedbackId = module.instance;
        this.courseId = navParams.get('courseId');
        this.selectedGroup = navParams.get('group') || 0;
    }
    /**
     * View loaded.
     */
    AddonModFeedbackRespondentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.splitviewCtrl.isOn()) {
                if (_this.responses.attempts.length > 0) {
                    // Take first and load it.
                    _this.gotoAttempt(_this.responses.attempts[0]);
                }
                else if (_this.anonResponses.attempts.length > 0) {
                    // Take first and load it.
                    _this.gotoAttempt(_this.anonResponses.attempts[0]);
                }
            }
        });
    };
    /**
     * Fetch all the data required for the view.
     *
     * @param refresh Empty events array first.
     * @return Promise resolved when done.
     */
    AddonModFeedbackRespondentsPage.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.page = 0;
        this.responses.total = 0;
        this.responses.attempts = [];
        this.anonResponses.total = 0;
        this.anonResponses.attempts = [];
        return this.groupsProvider.getActivityGroupInfo(this.moduleId).then(function (groupInfo) {
            _this.groupInfo = groupInfo;
            _this.selectedGroup = _this.groupsProvider.validateGroupId(_this.selectedGroup, groupInfo);
            return _this.loadGroupAttempts(_this.selectedGroup);
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            if (!refresh) {
                // Some call failed on first fetch, go back.
                _this.navCtrl.pop();
            }
            return Promise.reject(null);
        });
    };
    /**
     * Load Group attempts.
     *
     * @param groupId If defined it will change group if not, it will load more attempts for the same group.
     * @return Resolved with the attempts loaded.
     */
    AddonModFeedbackRespondentsPage.prototype.loadGroupAttempts = function (groupId) {
        var _this = this;
        if (typeof groupId == 'undefined') {
            this.page++;
            this.loadingMore = true;
        }
        else {
            this.selectedGroup = groupId;
            this.page = 0;
            this.responses.total = 0;
            this.responses.attempts = [];
            this.anonResponses.total = 0;
            this.anonResponses.attempts = [];
            this.feedbackLoaded = false;
        }
        return this.feedbackHelper.getResponsesAnalysis(this.feedbackId, this.selectedGroup, this.page).then(function (responses) {
            _this.responses.total = responses.totalattempts;
            _this.anonResponses.total = responses.totalanonattempts;
            if (_this.anonResponses.attempts.length < responses.totalanonattempts) {
                _this.anonResponses.attempts = _this.anonResponses.attempts.concat(responses.anonattempts);
            }
            if (_this.responses.attempts.length < responses.totalattempts) {
                _this.responses.attempts = _this.responses.attempts.concat(responses.attempts);
            }
            _this.anonResponses.canLoadMore = _this.anonResponses.attempts.length < responses.totalanonattempts;
            _this.responses.canLoadMore = _this.responses.attempts.length < responses.totalattempts;
            return responses;
        }).finally(function () {
            _this.loadingMore = false;
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Navigate to a particular attempt.
     *
     * @param attempt Attempt object to load.
     */
    AddonModFeedbackRespondentsPage.prototype.gotoAttempt = function (attempt) {
        this.attemptId = attempt.id;
        this.splitviewCtrl.push('AddonModFeedbackAttemptPage', {
            attemptId: attempt.id,
            attempt: attempt,
            feedbackId: this.feedbackId,
            moduleId: this.moduleId,
            courseId: this.courseId
        });
    };
    /**
     * Change selected group or load more attempts.
     *
     * @param groupId Group ID selected. If not defined, it will load more attempts.
     */
    AddonModFeedbackRespondentsPage.prototype.loadAttempts = function (groupId) {
        var _this = this;
        this.loadGroupAttempts(groupId).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
        });
    };
    /**
     * Refresh the attempts.
     *
     * @param refresher Refresher.
     */
    AddonModFeedbackRespondentsPage.prototype.refreshFeedback = function (refresher) {
        var _this = this;
        if (this.feedbackLoaded) {
            var promises = [];
            promises.push(this.feedbackProvider.invalidateResponsesAnalysisData(this.feedbackId));
            promises.push(this.groupsProvider.invalidateActivityGroupInfo(this.moduleId));
            Promise.all(promises).finally(function () {
                return _this.fetchData(true);
            }).finally(function () {
                refresher.complete();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonModFeedbackRespondentsPage.prototype, "splitviewCtrl", void 0);
    AddonModFeedbackRespondentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-feedback-respondents',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\respondents\respondents.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_feedback.responses\' |translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="feedbackLoaded" (ionRefresh)="refreshFeedback($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="feedbackLoaded">\n\n            <ion-list no-margin>\n\n                <ion-item text-wrap *ngIf="groupInfo.separateGroups || groupInfo.visibleGroups">\n\n                    <ion-label id="addon-feedback-groupslabel" *ngIf="groupInfo.separateGroups">{{ \'core.groupsseparate\' | translate }}</ion-label>\n\n                    <ion-label id="addon-feedback-groupslabel" *ngIf="groupInfo.visibleGroups">{{ \'core.groupsvisible\' | translate }}</ion-label>\n\n                    <ion-select [(ngModel)]="selectedGroup" (ionChange)="loadAttempts(selectedGroup)" aria-labelledby="addon-feedback-groupslabel" interface="action-sheet">\n\n                        <ion-option *ngFor="let groupOpt of groupInfo.groups" [value]="groupOpt.id">{{groupOpt.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ng-container *ngIf="responses.total > 0">\n\n                    <ion-item-divider>\n\n                        {{ \'addon.mod_feedback.non_anonymous_entries\' | translate : {$a: responses.total } }}\n\n                    </ion-item-divider>\n\n                    <a *ngFor="let attempt of responses.attempts" ion-item text-wrap (click)="gotoAttempt(attempt)" [class.core-split-item-selected]="attempt.id == attemptId">\n\n                        <ion-avatar core-user-avatar [user]="attempt" item-start></ion-avatar>\n\n                        <h2>{{ attempt.fullname }}</h2>\n\n                        <p *ngIf="attempt.timemodified">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\n\n                    </a>\n\n                    <ion-item padding text-center *ngIf="responses.canLoadMore">\n\n                        <!-- Button and spinner to show more attempts. -->\n\n                        <button ion-button block *ngIf="!loadingMore" (click)="loadAttempts()">{{ \'core.loadmore\' | translate }}</button>\n\n                        <ion-spinner *ngIf="loadingMore"></ion-spinner>\n\n                    </ion-item>\n\n                </ng-container>\n\n                <ng-container *ngIf="anonResponses.total > 0">\n\n                    <ion-item-divider>\n\n                        {{ \'addon.mod_feedback.anonymous_entries\' |translate : {$a: anonResponses.total } }}\n\n                    </ion-item-divider>\n\n                    <a *ngFor="let attempt of anonResponses.attempts" ion-item text-wrap (click)="gotoAttempt(attempt)" [class.core-split-item-selected]="attempt.id == attemptId">\n\n                        <h2>{{ \'addon.mod_feedback.response_nr\' |translate }}: {{attempt.number}}</h2>\n\n                    </a>\n\n                    <ion-item padding text-center *ngIf="anonResponses.canLoadMore">\n\n                        <!-- Button and spinner to show more attempts. -->\n\n                        <button ion-button block *ngIf="!loadingMore" (click)="loadAttempts()">{{ \'core.loadmore\' | translate }}</button>\n\n                        <ion-spinner *ngIf="loadingMore"></ion-spinner>\n\n                    </ion-item>\n\n                </ng-container>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\respondents\respondents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_feedback__["a" /* AddonModFeedbackProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_groups__["a" /* CoreGroupsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* AddonModFeedbackHelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], AddonModFeedbackRespondentsPage);
    return AddonModFeedbackRespondentsPage;
}());

//# sourceMappingURL=respondents.js.map

/***/ })

});
//# sourceMappingURL=107.js.map