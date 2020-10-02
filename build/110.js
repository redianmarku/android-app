webpackJsonp([110],{

/***/ 2176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPageModule", function() { return AddonModFeedbackFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form__ = __webpack_require__(2332);
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







var AddonModFeedbackFormPageModule = /** @class */ (function () {
    function AddonModFeedbackFormPageModule() {
    }
    AddonModFeedbackFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__form__["a" /* AddonModFeedbackFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* AddonModFeedbackComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__form__["a" /* AddonModFeedbackFormPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModFeedbackFormPageModule);
    return AddonModFeedbackFormPageModule;
}());

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ 2332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModFeedbackFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_feedback__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sync__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_course_providers_course__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_course_providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_login_providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_contentlinks_providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sites__ = __webpack_require__(2);
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
 * Page that displays feedback form.
 */
var AddonModFeedbackFormPage = /** @class */ (function () {
    function AddonModFeedbackFormPage(navParams, feedbackProvider, appProvider, utils, domUtils, navCtrl, feedbackHelper, courseProvider, eventsProvider, feedbackSync, network, translate, loginHelper, linkHelper, sitesProvider, content, zone, courseHelper) {
        var _this = this;
        this.feedbackProvider = feedbackProvider;
        this.appProvider = appProvider;
        this.utils = utils;
        this.domUtils = domUtils;
        this.navCtrl = navCtrl;
        this.feedbackHelper = feedbackHelper;
        this.courseProvider = courseProvider;
        this.eventsProvider = eventsProvider;
        this.feedbackSync = feedbackSync;
        this.translate = translate;
        this.loginHelper = loginHelper;
        this.linkHelper = linkHelper;
        this.content = content;
        this.courseHelper = courseHelper;
        this.forceLeave = false;
        this.preview = false;
        this.component = __WEBPACK_IMPORTED_MODULE_4__providers_feedback__["a" /* AddonModFeedbackProvider */].COMPONENT;
        this.offline = false;
        this.feedbackLoaded = false;
        this.items = [];
        this.hasPrevPage = false;
        this.hasNextPage = false;
        this.completed = false;
        this.completedOffline = false;
        this.module = navParams.get('module');
        this.courseId = navParams.get('courseId');
        this.currentPage = navParams.get('page');
        this.title = navParams.get('title');
        this.preview = !!navParams.get('preview');
        this.componentId = navParams.get('moduleId') || this.module.id;
        this.currentSite = sitesProvider.getCurrentSite();
        // Refresh online status when changes.
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.offline = !_this.appProvider.isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    AddonModFeedbackFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            _this.feedbackProvider.logView(_this.feedback.id, _this.feedback.name, true).then(function () {
                _this.courseProvider.checkModuleCompletion(_this.courseId, _this.module.completiondata);
            }).catch(function () {
                // Ignore errors.
            });
        });
    };
    /**
     * View entered.
     */
    AddonModFeedbackFormPage.prototype.ionViewDidEnter = function () {
        this.forceLeave = false;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModFeedbackFormPage.prototype.ionViewCanLeave = function () {
        if (this.forceLeave) {
            return true;
        }
        if (!this.preview) {
            var responses = this.feedbackHelper.getPageItemsResponses(this.items);
            if (this.items && !this.completed && this.originalData) {
                // Form submitted. Check if there is any change.
                if (!this.utils.basicLeftCompare(responses, this.originalData, 3)) {
                    return this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
                }
            }
        }
        return Promise.resolve();
    };
    /**
     * Fetch all the data required for the view.
     *
     * @return Promise resolved when done.
     */
    AddonModFeedbackFormPage.prototype.fetchData = function () {
        var _this = this;
        this.offline = !this.appProvider.isOnline();
        return this.feedbackProvider.getFeedback(this.courseId, this.module.id).then(function (feedbackData) {
            _this.feedback = feedbackData;
            _this.title = _this.feedback.name || _this.title;
            return _this.fetchAccessData();
        }).then(function (accessData) {
            if (!_this.preview && accessData.cansubmit && !accessData.isempty) {
                return typeof _this.currentPage == 'undefined' ?
                    _this.feedbackProvider.getResumePage(_this.feedback.id, _this.offline, true) :
                    Promise.resolve(_this.currentPage);
            }
            else {
                _this.preview = true;
                return Promise.resolve(0);
            }
        }).catch(function (error) {
            if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                // If it fails, go offline.
                _this.offline = true;
                return _this.feedbackProvider.getResumePage(_this.feedback.id, true);
            }
            return Promise.reject(error);
        }).then(function (page) {
            return _this.fetchFeedbackPageData(page || 0);
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            _this.forceLeave = true;
            _this.navCtrl.pop();
            return Promise.reject(null);
        }).finally(function () {
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Fetch access information.
     *
     * @return Promise resolved when done.
     */
    AddonModFeedbackFormPage.prototype.fetchAccessData = function () {
        var _this = this;
        return this.feedbackProvider.getFeedbackAccessInformation(this.feedback.id, this.offline, true).catch(function (error) {
            if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                // If it fails, go offline.
                _this.offline = true;
                return _this.feedbackProvider.getFeedbackAccessInformation(_this.feedback.id, true);
            }
            return Promise.reject(error);
        }).then(function (accessData) {
            _this.access = accessData;
            return accessData;
        });
    };
    AddonModFeedbackFormPage.prototype.fetchFeedbackPageData = function (page) {
        var _this = this;
        if (page === void 0) { page = 0; }
        var promise;
        this.items = [];
        if (this.preview) {
            promise = this.feedbackProvider.getItems(this.feedback.id);
        }
        else {
            this.currentPage = page;
            promise = this.feedbackProvider.getPageItemsWithValues(this.feedback.id, page, this.offline, true).catch(function (error) {
                if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                    // If it fails, go offline.
                    _this.offline = true;
                    return _this.feedbackProvider.getPageItemsWithValues(_this.feedback.id, page, true);
                }
                return Promise.reject(error);
            }).then(function (response) {
                _this.hasPrevPage = !!response.hasprevpage;
                _this.hasNextPage = !!response.hasnextpage;
                return response;
            });
        }
        return promise.then(function (response) {
            _this.items = response.items.map(function (itemData) {
                return _this.feedbackHelper.getItemForm(itemData, _this.preview);
            }).filter(function (itemData) {
                // Filter items with errors.
                return itemData;
            });
            if (!_this.preview) {
                var itemsCopy = _this.utils.clone(_this.items); // Copy the array to avoid modifications.
                _this.originalData = _this.feedbackHelper.getPageItemsResponses(itemsCopy);
            }
        });
    };
    /**
     * Function to allow page navigation through the questions form.
     *
     * @param goPrevious If true it will go back to the previous page, if false, it will go forward.
     * @return Resolved when done.
     */
    AddonModFeedbackFormPage.prototype.gotoPage = function (goPrevious) {
        var _this = this;
        this.domUtils.scrollToTop(this.content);
        this.feedbackLoaded = false;
        var responses = this.feedbackHelper.getPageItemsResponses(this.items), formHasErrors = this.items.some(function (item) {
            return item.isEmpty || item.hasError;
        });
        // Sync other pages first.
        return this.feedbackSync.syncFeedback(this.feedback.id).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.feedbackProvider.processPage(_this.feedback.id, _this.currentPage, responses, goPrevious, formHasErrors, _this.courseId).then(function (response) {
                var jumpTo = parseInt(response.jumpto, 10);
                if (response.completed) {
                    // Form is completed, show completion message and buttons.
                    _this.items = [];
                    _this.completed = true;
                    _this.completedOffline = !!response.offline;
                    _this.completionPageContents = response.completionpagecontents;
                    _this.siteAfterSubmit = response.siteaftersubmit;
                    _this.submitted = true;
                    // Invalidate access information so user will see home page updated (continue form or completion messages).
                    var promises = [];
                    promises.push(_this.feedbackProvider.invalidateFeedbackAccessInformationData(_this.feedback.id));
                    promises.push(_this.feedbackProvider.invalidateResumePageData(_this.feedback.id));
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_10__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'feedback' });
                    return Promise.all(promises).then(function () {
                        return _this.fetchAccessData();
                    });
                }
                else if (isNaN(jumpTo) || jumpTo == _this.currentPage) {
                    // Errors on questions, stay in page.
                    return Promise.resolve();
                }
                else {
                    _this.submitted = true;
                    // Invalidate access information so user will see home page updated (continue form).
                    _this.feedbackProvider.invalidateResumePageData(_this.feedback.id);
                    // Fetch the new page.
                    return _this.fetchFeedbackPageData(jumpTo);
                }
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            return Promise.reject(null);
        }).finally(function () {
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Function to link implemented features.
     */
    AddonModFeedbackFormPage.prototype.showAnalysis = function () {
        this.submitted = 'analysis';
        this.feedbackHelper.openFeature('analysis', this.navCtrl, this.module, this.courseId);
    };
    /**
     * Function to go to the page after submit.
     */
    AddonModFeedbackFormPage.prototype.continue = function () {
        var _this = this;
        if (this.siteAfterSubmit) {
            var modal_1 = this.domUtils.showModalLoading();
            this.linkHelper.handleLink(this.siteAfterSubmit).then(function (treated) {
                if (!treated) {
                    return _this.currentSite.openInBrowserWithAutoLoginIfSameSite(_this.siteAfterSubmit);
                }
            }).finally(function () {
                modal_1.dismiss();
            });
        }
        else {
            this.courseHelper.getAndOpenCourse(undefined, this.courseId, {}, this.currentSite.getId());
        }
    };
    /**
     * Component being destroyed.
     */
    AddonModFeedbackFormPage.prototype.ngOnDestroy = function () {
        if (this.submitted) {
            var tab = this.submitted == 'analysis' ? 'analysis' : 'overview';
            // If form has been submitted, the info has been already invalidated but we should update index view.
            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_feedback__["a" /* AddonModFeedbackProvider */].FORM_SUBMITTED, {
                feedbackId: this.feedback.id,
                tab: tab,
                offline: this.completedOffline
            });
        }
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    AddonModFeedbackFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-feedback-form',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\form\form.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="feedbackLoaded">\n\n        <ng-container *ngIf="items && items.length">\n\n            <ion-list no-margin>\n\n                <ion-item text-wrap>\n\n                    <h2>{{ \'addon.mod_feedback.mode\' | translate }}</h2>\n\n                    <p *ngIf="access.isanonymous">{{ \'addon.mod_feedback.anonymous\' | translate }}</p>\n\n                    <p *ngIf="!access.isanonymous">{{ \'addon.mod_feedback.non_anonymous\' | translate }}</p>\n\n                </ion-item>\n\n                <ng-container *ngFor="let item of items">\n\n                    <ion-item-divider *ngIf="item.typ == \'pagebreak\'"></ion-item-divider>\n\n                    <ion-item text-wrap *ngIf="item.typ != \'pagebreak\'" [color]="item.dependitem > 0 ? \'light\' : \'\'" [class.core-danger-item]="item.isEmpty || item.hasError">\n\n                        <ion-label *ngIf="item.name" [core-mark-required]="item.required" stacked>\n\n                            <span *ngIf="feedback.autonumbering && item.itemnumber">{{item.itemnumber}}. </span>\n\n                            <core-format-text [component]="component" [componentId]="componentId" [text]="item.name" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId" [wsNotFiltered]="true"></core-format-text>\n\n                            <span *ngIf="item.postfix" class="addon-mod_feedback-postfix">{{item.postfix}}</span>\n\n                        </ion-label>\n\n                        <div item-content class="addon-mod_feedback-form-content" *ngIf="item.template">\n\n                            <ng-container [ngSwitch]="item.template">\n\n                                <ng-container *ngSwitchCase="\'label\'">\n\n                                    <p><core-format-text [component]="component" [componentId]="componentId" [text]="item.presentation" contextLevel="module" [contextInstanceId]="module.id" [wsNotFiltered]="true" [courseId]="courseId"></core-format-text></p>\n\n                                </ng-container>\n\n                                <ng-container *ngSwitchCase="\'textfield\'">\n\n                                    <ion-input type="text" [(ngModel)]="item.value" autocorrect="off" name="{{item.typ}}_{{item.id}}" maxlength="{{item.maxlength}}" [required]="item.required"></ion-input>\n\n                                </ng-container>\n\n                                <ng-container *ngSwitchCase="\'numeric\'">\n\n                                    <ion-input [required]="item.required" name="{{item.typ}}_{{item.id}}" type="number" [(ngModel)]="item.value"></ion-input>\n\n                                    <p *ngIf="item.hasError" ion-text color="danger">{{ \'addon.mod_feedback.numberoutofrange\' | translate }} [{{item.rangefrom}}<span *ngIf="item.rangefrom && item.rangeto">, </span>{{item.rangeto}}]</p>\n\n                                </ng-container>\n\n                                <ng-container *ngSwitchCase="\'textarea\'">\n\n                                    <ion-textarea [required]="item.required" name="{{item.typ}}_{{item.id}}" [attr.aria-multiline]="true" [(ngModel)]="item.value"></ion-textarea>\n\n                                </ng-container>\n\n                                <ng-container *ngSwitchCase="\'multichoice-r\'">\n\n                                    <ion-list radio-group [(ngModel)]="item.value" [required]="item.required" name="{{item.typ}}_{{item.id}}">\n\n                                        <ion-item *ngFor="let option of item.choices">\n\n                                            <ion-label><core-format-text  [component]="component" [componentId]="componentId" [text]="option.label" contextLevel="module" [contextInstanceId]="module.id" [wsNotFiltered]="true" [courseId]="courseId"></core-format-text></ion-label>\n\n                                            <ion-radio [value]="option.value"></ion-radio>\n\n                                        </ion-item>\n\n                                    </ion-list>\n\n                                </ng-container>\n\n                                <ion-list *ngSwitchCase="\'multichoice-c\'">\n\n                                    <ion-item *ngFor="let option of item.choices">\n\n                                        <ion-label><core-format-text [component]="component" [componentId]="componentId" [text]="option.label" contextLevel="module" [contextInstanceId]="module.id" [wsNotFiltered]="true" [courseId]="courseId"></core-format-text></ion-label>\n\n                                        <ion-checkbox [required]="item.required" name="{{item.typ}}_{{item.id}}" [(ngModel)]="option.checked" value="option.value"></ion-checkbox>\n\n                                    </ion-item>\n\n                                </ion-list>\n\n                                <ng-container *ngSwitchCase="\'multichoice-d\'">\n\n                                    <ion-select [required]="item.required" name="{{item.typ}}_{{item.id}}" [(ngModel)]="item.value" interface="action-sheet">\n\n                                        <ion-option *ngFor="let option of item.choices" [value]="option.value"><core-format-text  [component]="component" [componentId]="componentId" [text]="option.label" contextLevel="module" [contextInstanceId]="module.id" [wsNotFiltered]="true" [courseId]="courseId"></core-format-text></ion-option>\n\n                                    </ion-select>\n\n                                </ng-container>\n\n                                <ng-container *ngSwitchCase="\'captcha\'">\n\n                                    <core-recaptcha *ngIf="!preview && !offline" [publicKey]="item.captcha.recaptchapublickey" [model]="item" modelValueName="value"></core-recaptcha>\n\n                                    <div *ngIf="!preview && (!item.captcha || offline)" class="core-warning-card" icon-start>\n\n                                        <ion-icon name="warning"></ion-icon>\n\n                                        {{ \'addon.mod_feedback.captchaofflinewarning\' | translate }}\n\n                                    </div>\n\n                                </ng-container>\n\n                            </ng-container>\n\n                        </div>\n\n                    </ion-item>\n\n                </ng-container>\n\n                <ion-grid *ngIf="!preview">\n\n                    <ion-row align-items-center>\n\n                        <ion-col *ngIf="hasPrevPage" col-12 col-sm-6>\n\n                            <button ion-button block outline icon-start (click)="gotoPage(true)" text-wrap>\n\n                                <ion-icon name="arrow-back"></ion-icon>\n\n                                {{ \'addon.mod_feedback.previous_page\' | translate }}\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col *ngIf="hasNextPage" col-12 [attr.col-sm-6]="(hasPrevPage) || null">\n\n                            <button ion-button block icon-end (click)="gotoPage(false)" text-wrap>\n\n                                {{ \'addon.mod_feedback.next_page\' | translate }}\n\n                                <ion-icon name="arrow-forward"></ion-icon>\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col *ngIf="!hasNextPage" col-12 [attr.col-sm-6]="(hasPrevPage) || null">\n\n                            <button ion-button block (click)="gotoPage(false)" text-wrap>\n\n                                {{ \'addon.mod_feedback.save_entries\' | translate }}\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-list>\n\n        </ng-container>\n\n\n\n        <div class="core-success-card" icon-start *ngIf="completed">\n\n            <ion-icon name="checkmark"></ion-icon>\n\n            <p *ngIf="!completionPageContents && !completedOffline">{{ \'addon.mod_feedback.this_feedback_is_already_submitted\' | translate }}</p>\n\n            <p *ngIf="!completionPageContents && completedOffline">{{ \'addon.mod_feedback.feedback_submitted_offline\' | translate }}</p>\n\n            <p *ngIf="completionPageContents"><core-format-text  [component]="component" componentId="componentId" [text]="completionPageContents" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></p>\n\n        </div>\n\n\n\n        <ion-grid *ngIf="completed">\n\n            <ion-row align-items-center>\n\n                <ion-col *ngIf="access.canviewanalysis" col-12 [attr.col-sm-6]="(hasNextPage) || null">\n\n                    <button ion-button block outline icon-start (click)="showAnalysis()" text-wrap>\n\n                        <ion-icon name="stats"></ion-icon>\n\n                        {{ \'addon.mod_feedback.completed_feedbacks\' | translate }}\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col *ngIf="hasNextPage" col-12 [attr.col-sm-6]="(access.canviewanalysis) || null">\n\n                    <button ion-button block icon-end (click)="continue()" text-wrap>\n\n                        {{ \'core.continue\' | translate }}\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\feedback\pages\form\form.html"*/,
        }),
        __param(15, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_feedback__["a" /* AddonModFeedbackProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* AddonModFeedbackHelperProvider */], __WEBPACK_IMPORTED_MODULE_11__core_course_providers_course__["b" /* CoreCourseProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_sync__["a" /* AddonModFeedbackSyncProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_13__core_login_providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_14__core_contentlinks_providers_helper__["b" /* CoreContentLinksHelperProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_12__core_course_providers_helper__["b" /* CoreCourseHelperProvider */]])
    ], AddonModFeedbackFormPage);
    return AddonModFeedbackFormPage;
}());

//# sourceMappingURL=form.js.map

/***/ })

});
//# sourceMappingURL=110.js.map