webpackJsonp([111],{

/***/ 2085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptPageModule", function() { return AddonModFeedbackAttemptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attempt__ = __webpack_require__(2241);
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








var AddonModFeedbackAttemptPageModule = /** @class */ (function () {
    function AddonModFeedbackAttemptPageModule() {
    }
    AddonModFeedbackAttemptPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__attempt__["a" /* AddonModFeedbackAttemptPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModFeedbackComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__attempt__["a" /* AddonModFeedbackAttemptPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModFeedbackAttemptPageModule);
    return AddonModFeedbackAttemptPageModule;
}());

//# sourceMappingURL=attempt.module.js.map

/***/ }),

/***/ 2241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModFeedbackAttemptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_feedback__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(10);
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
 * Page that displays a feedback attempt review.
 */
var AddonModFeedbackAttemptPage = /** @class */ (function () {
    function AddonModFeedbackAttemptPage(navParams, feedbackProvider, navCtrl, domUtils, feedbackHelper, textUtils) {
        this.feedbackProvider = feedbackProvider;
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.feedbackHelper = feedbackHelper;
        this.textUtils = textUtils;
        this.component = __WEBPACK_IMPORTED_MODULE_2__providers_feedback__["a" /* AddonModFeedbackProvider */].COMPONENT;
        this.feedbackLoaded = false;
        this.feedbackId = navParams.get('feedbackId') || 0;
        this.courseId = navParams.get('courseId');
        this.attempt = navParams.get('attempt') || false;
        this.componentId = navParams.get('moduleId');
    }
    /**
     * View loaded.
     */
    AddonModFeedbackAttemptPage.prototype.ionViewDidLoad = function () {
        this.fetchData();
    };
    /**
     * Fetch all the data required for the view.
     *
     * @return Promise resolved when done.
     */
    AddonModFeedbackAttemptPage.prototype.fetchData = function () {
        var _this = this;
        // Get the feedback to be able to now if questions should be autonumbered.
        return this.feedbackProvider.getFeedbackById(this.courseId, this.feedbackId).then(function (feedback) {
            _this.feedback = feedback;
            return _this.feedbackProvider.getItems(_this.feedbackId);
        }).then(function (items) {
            // Add responses and format items.
            _this.items = items.items.map(function (item) {
                if (item.typ == 'label') {
                    item.submittedValue = _this.textUtils.replacePluginfileUrls(item.presentation, item.itemfiles);
                }
                else {
                    for (var x in _this.attempt.responses) {
                        if (_this.attempt.responses[x].id == item.id) {
                            item.submittedValue = _this.attempt.responses[x].printval;
                            break;
                        }
                    }
                }
                return _this.feedbackHelper.getItemForm(item, true);
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            // Some call failed on first fetch, go back.
            _this.navCtrl.pop();
            return Promise.reject(null);
        }).finally(function () {
            _this.feedbackLoaded = true;
        });
    };
    AddonModFeedbackAttemptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-feedback-attempt',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\attempt\attempt.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>\n\n            <ng-container *ngIf="attempt.fullname">{{ attempt.fullname }}</ng-container>\n\n            <ng-container *ngIf="!attempt.fullname">{{ \'addon.mod_feedback.response_nr\' |translate }}: {{attempt.number}}</ng-container>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="feedbackLoaded">\n\n        <ion-list no-margin>\n\n            <a *ngIf="attempt.fullname" ion-item text-wrap core-user-link [userId]="attempt.userid" [attr.aria-label]=" \'core.user.viewprofile\' | translate" [courseId]="attempt.courseid" [title]="attempt.fullname">\n\n                <ion-avatar core-user-avatar [user]="attempt" item-start></ion-avatar>\n\n                <h2>{{attempt.fullname}}</h2>\n\n                <p *ngIf="attempt.timemodified">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\n\n            </a>\n\n\n\n            <ion-item text-wrap *ngIf="!attempt.fullname">\n\n                <h2>{{ \'addon.mod_feedback.response_nr\' |translate }}: {{attempt.number}} ({{ \'addon.mod_feedback.anonymous\' |translate }})</h2>\n\n                <p *ngIf="attempt.timemodified">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\n\n            </ion-item >\n\n            <ng-container *ngIf="items && items.length">\n\n                <ng-container *ngFor="let item of items">\n\n                    <ion-item-divider *ngIf="item.typ == \'pagebreak\'"></ion-item-divider>\n\n                    <ion-item text-wrap *ngIf="item.typ != \'pagebreak\'" [color]="item.dependitem > 0 ? \'light\' : \'\'">\n\n                        <h2 *ngIf="item.name" [core-mark-required]="item.required">\n\n                            <span *ngIf="feedback.autonumbering && item.itemnumber">{{item.itemnumber}}. </span><core-format-text  [component]="component" [componentId]="componentId" [text]="item.name" contextLevel="module" [contextInstanceId]="feedback.coursemodule" [courseId]="courseId"></core-format-text>\n\n                        </h2>\n\n                        <p *ngIf="item.submittedValue"><core-format-text [component]="component" [componentId]="componentId" [text]=" item.submittedValue" contextLevel="module" [contextInstanceId]="feedback.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                    </ion-item>\n\n                </ng-container>\n\n            </ng-container>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\attempt\attempt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_feedback__["a" /* AddonModFeedbackProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* AddonModFeedbackHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["b" /* CoreTextUtilsProvider */]])
    ], AddonModFeedbackAttemptPage);
    return AddonModFeedbackAttemptPage;
}());

//# sourceMappingURL=attempt.js.map

/***/ })

});
//# sourceMappingURL=111.js.map