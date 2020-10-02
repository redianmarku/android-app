webpackJsonp([41],{

/***/ 2138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPageModule", function() { return CoreLoginForgottenPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotten_password__ = __webpack_require__(2294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(1);
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





var CoreLoginForgottenPasswordPageModule = /** @class */ (function () {
    function CoreLoginForgottenPasswordPageModule() {
    }
    CoreLoginForgottenPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__forgotten_password__["a" /* CoreLoginForgottenPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__forgotten_password__["a" /* CoreLoginForgottenPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginForgottenPasswordPageModule);
    return CoreLoginForgottenPasswordPageModule;
}());

//# sourceMappingURL=forgotten-password.module.js.map

/***/ }),

/***/ 2294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginForgottenPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(29);
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
 * Page to recover a forgotten password.
 */
var CoreLoginForgottenPasswordPage = /** @class */ (function () {
    function CoreLoginForgottenPasswordPage(navCtrl, navParams, fb, platform, translate, loginHelper, domUtils, eventsProvider, sitesProvider) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.siteUrl = navParams.get('siteUrl');
        this.autoFocus = platform.is('tablet');
        this.myForm = fb.group({
            field: ['username', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required],
            value: [navParams.get('username') || '', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * Request to reset the password.
     *
     * @param e Event.
     */
    CoreLoginForgottenPasswordPage.prototype.resetPassword = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var field = this.myForm.value.field, value = this.myForm.value.value;
        if (!value) {
            this.domUtils.showErrorModal('core.login.usernameoremail', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true), isMail = field == 'email';
        this.loginHelper.requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '').then(function (response) {
            if (response.status == 'dataerror') {
                // Error in the data sent.
                _this.showError(isMail, response.warnings);
            }
            else if (response.status == 'emailpasswordconfirmnotsent' || response.status == 'emailpasswordconfirmnoemail') {
                // Error, not found.
                _this.domUtils.showErrorModal(response.notice);
            }
            else {
                // Success.
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                _this.domUtils.showAlert(_this.translate.instant('core.success'), response.notice);
                _this.navCtrl.pop();
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    // Show an error from the warnings.
    CoreLoginForgottenPasswordPage.prototype.showError = function (isMail, warnings) {
        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i];
            if ((warning.item == 'email' && isMail) || (warning.item == 'username' && !isMail)) {
                this.domUtils.showErrorModal(warning.message);
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('resetPasswordForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginForgottenPasswordPage.prototype, "formElement", void 0);
    CoreLoginForgottenPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-forgotten-password',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\forgotten-password\forgotten-password.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.passwordforgotten\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item text-wrap>\n\n            {{ \'core.login.passwordforgotteninstructions2\' | translate }}\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-card>\n\n        <form ion-list [formGroup]="myForm" (ngSubmit)="resetPassword($event)" #resetPasswordForm>\n\n            <ion-item-divider text-wrap>\n\n                {{ \'core.login.searchby\' | translate }}\n\n            </ion-item-divider>\n\n            <div radio-group formControlName="field">\n\n                <ion-item>\n\n                    <ion-label>{{ \'core.login.username\' | translate }}</ion-label>\n\n                    <ion-radio value="username"></ion-radio>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>{{ \'core.user.email\' | translate }}</ion-label>\n\n                    <ion-radio value="email"></ion-radio>\n\n                </ion-item>\n\n            </div>\n\n            <ion-item>\n\n                <ion-input type="text" name="value" placeholder="{{ \'core.login.usernameoremail\' | translate }}" formControlName="value" autocapitalize="none" autocorrect="off" [core-auto-focus]="autoFocus"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button text-wrap ion-button block [disabled]="!myForm.valid">{{ \'core.courses.search\' | translate }}</button>\n\n            </ion-item>\n\n        </form>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\forgotten-password\forgotten-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */]])
    ], CoreLoginForgottenPasswordPage);
    return CoreLoginForgottenPasswordPage;
}());

//# sourceMappingURL=forgotten-password.js.map

/***/ })

});
//# sourceMappingURL=41.js.map