webpackJsonp([42],{

/***/ 2187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return CoreLoginCredentialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_signup__ = __webpack_require__(2345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_components_components_module__ = __webpack_require__(467);
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







var CoreLoginCredentialsPageModule = /** @class */ (function () {
    function CoreLoginCredentialsPageModule() {
    }
    CoreLoginCredentialsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_signup__["a" /* CoreLoginEmailSignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_user_components_components_module__["a" /* CoreUserComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_signup__["a" /* CoreLoginEmailSignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginCredentialsPageModule);
    return CoreLoginCredentialsPageModule;
}());

//# sourceMappingURL=email-signup.module.js.map

/***/ }),

/***/ 2345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginEmailSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ws__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_user_providers_user_profile_field_delegate__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__configconstants__ = __webpack_require__(61);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * Page to signup using email.
 */
var CoreLoginEmailSignupPage = /** @class */ (function () {
    function CoreLoginEmailSignupPage(navCtrl, navParams, fb, wsProvider, sitesProvider, loginHelper, domUtils, translate, utils, textUtils, userProfileFieldDelegate, eventsProvider) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.wsProvider = wsProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.utils = utils;
        this.textUtils = textUtils;
        this.userProfileFieldDelegate = userProfileFieldDelegate;
        this.eventsProvider = eventsProvider;
        this.settingsLoaded = false;
        this.allRequiredSupported = true;
        this.captcha = {
            recaptcharesponse: ''
        };
        this.isMinor = false; // Whether the user is minor age.
        this.siteUrl = navParams.get('siteUrl');
        // Create the ageVerificationForm.
        this.ageVerificationForm = this.fb.group({
            age: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required]
        });
        this.countryControl = this.fb.control('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required);
        this.ageVerificationForm.addControl('country', this.countryControl);
        // Create the signupForm with the basic controls. More controls will be added later.
        this.signupForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].email])],
            email2: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].email])]
        });
        // Setup validation errors.
        this.usernameErrors = this.loginHelper.getErrorMessages('core.login.usernamerequired');
        this.passwordErrors = this.loginHelper.getErrorMessages('core.login.passwordrequired');
        this.emailErrors = this.loginHelper.getErrorMessages('core.login.missingemail');
        this.email2Errors = this.loginHelper.getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
        this.policyErrors = this.loginHelper.getErrorMessages('core.login.policyagree');
    }
    /**
     * View loaded.
     */
    CoreLoginEmailSignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Fetch the data.
        this.fetchData().finally(function () {
            _this.settingsLoaded = true;
        });
    };
    /**
     * Complete the FormGroup using the settings received from server.
     */
    CoreLoginEmailSignupPage.prototype.completeFormGroup = function () {
        this.signupForm.addControl('city', this.fb.control(this.settings.defaultcity || ''));
        this.signUpCountryControl = this.fb.control(this.settings.country || '');
        this.signupForm.addControl('country', this.signUpCountryControl);
        // Add the name fields.
        for (var i in this.settings.namefields) {
            this.signupForm.addControl(this.settings.namefields[i], this.fb.control('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required));
        }
        if (this.settings.sitepolicy) {
            this.signupForm.addControl('policyagreed', this.fb.control(false, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].requiredTrue));
        }
    };
    /**
     * Fetch the required data from the server.
     *
     * @return Promise resolved when done.
     */
    CoreLoginEmailSignupPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        // Get site config.
                        _a = this;
                        return [4 /*yield*/, this.sitesProvider.getSitePublicConfig(this.siteUrl)];
                    case 1:
                        // Get site config.
                        _a.siteConfig = _b.sent();
                        this.signupUrl = this.textUtils.concatenatePaths(this.siteConfig.httpswwwroot, 'login/signup.php');
                        if (!this.treatSiteConfig(this.siteConfig)) return [3 /*break*/, 5];
                        if (!(typeof this.ageDigitalConsentVerification == 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.utils.ignoreErrors(this.wsProvider.callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: this.siteUrl }))];
                    case 2:
                        result = _b.sent();
                        this.ageDigitalConsentVerification = result && result.status;
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.getSignupSettings()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        this.completeFormGroup();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        if (this.allRequiredSupported) {
                            this.domUtils.showErrorModal(error_1);
                        }
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get signup settings from server.
     *
     * @return Promise resolved when done.
     */
    CoreLoginEmailSignupPage.prototype.getSignupSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var settings, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.wsProvider.callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl })];
                    case 1:
                        settings = _b.sent();
                        if (this.userProfileFieldDelegate.hasRequiredUnsupportedField(settings.profilefields)) {
                            this.allRequiredSupported = false;
                            throw new Error(this.translate.instant('core.login.signuprequiredfieldnotsupported'));
                        }
                        this.settings = settings;
                        this.categories = this.loginHelper.formatProfileFieldsForSignup(settings.profilefields);
                        if (this.settings.recaptchapublickey) {
                            this.captcha.recaptcharesponse = ''; // Reset captcha.
                        }
                        if (!this.countryControl.value) {
                            this.countryControl.setValue(settings.country || '');
                        }
                        this.namefieldsErrors = {};
                        if (settings.namefields) {
                            settings.namefields.forEach(function (field) {
                                _this.namefieldsErrors[field] = _this.loginHelper.getErrorMessages('core.login.missing' + field);
                            });
                        }
                        _a = this;
                        return [4 /*yield*/, this.utils.getCountryListSorted()];
                    case 2:
                        _a.countries = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Treat the site config, checking if it's valid and extracting the data we're interested in.
     *
     * @param siteConfig Site config to treat.
     * @return True if success.
     */
    CoreLoginEmailSignupPage.prototype.treatSiteConfig = function (siteConfig) {
        if (siteConfig && siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(siteConfig)) {
            this.siteName = __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].sitename ? __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].sitename : siteConfig.sitename;
            this.authInstructions = siteConfig.authinstructions;
            this.ageDigitalConsentVerification = siteConfig.agedigitalconsentverification;
            this.supportName = siteConfig.supportname;
            this.supportEmail = siteConfig.supportemail;
            this.countryControl.setValue(siteConfig.country || '');
            return true;
        }
        else {
            this.domUtils.showErrorModal(this.translate.instant('core.login.signupplugindisabled', { $a: this.translate.instant('core.login.auth_email') }));
            this.navCtrl.pop();
            return false;
        }
    };
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    CoreLoginEmailSignupPage.prototype.refreshSettings = function (refresher) {
        this.fetchData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Create account.
     *
     * @param e Event.
     */
    CoreLoginEmailSignupPage.prototype.create = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        if (!this.signupForm.valid || (this.settings.recaptchapublickey && !this.captcha.recaptcharesponse)) {
            // Form not valid. Scroll to the first element with errors.
            if (!this.domUtils.scrollToInputError(this.content)) {
                // Input not found, show an error modal.
                this.domUtils.showErrorModal('core.errorinvalidform', true);
            }
        }
        else {
            var params_1 = {
                username: this.signupForm.value.username.trim().toLowerCase(),
                password: this.signupForm.value.password,
                firstname: this.textUtils.cleanTags(this.signupForm.value.firstname),
                lastname: this.textUtils.cleanTags(this.signupForm.value.lastname),
                email: this.signupForm.value.email.trim(),
                city: this.textUtils.cleanTags(this.signupForm.value.city),
                country: this.signupForm.value.country
            }, modal_1 = this.domUtils.showModalLoading('core.sending', true);
            if (this.siteConfig.launchurl) {
                var service = this.sitesProvider.determineService(this.siteUrl);
                params_1.redirect = this.loginHelper.prepareForSSOLogin(this.siteUrl, service, this.siteConfig.launchurl);
            }
            // Get the recaptcha response (if needed).
            if (this.settings.recaptchapublickey && this.captcha.recaptcharesponse) {
                params_1.recaptcharesponse = this.captcha.recaptcharesponse;
            }
            // Get the data for the custom profile fields.
            this.userProfileFieldDelegate.getDataForFields(this.settings.profilefields, true, 'email', this.signupForm.value).then(function (fieldsData) {
                params_1.customprofilefields = fieldsData;
                return _this.wsProvider.callAjax('auth_email_signup_user', params_1, { siteUrl: _this.siteUrl });
            }).then(function (result) {
                if (result.success) {
                    _this.domUtils.triggerFormSubmittedEvent(_this.signupFormElement, true);
                    // Show alert and ho back.
                    var message = _this.translate.instant('core.login.emailconfirmsent', { $a: params_1.email });
                    _this.domUtils.showAlert(_this.translate.instant('core.success'), message);
                    _this.navCtrl.pop();
                }
                else {
                    if (result.warnings && result.warnings.length) {
                        var error = result.warnings[0].message;
                        if (error == 'incorrect-captcha-sol') {
                            error = _this.translate.instant('core.login.recaptchaincorrect');
                        }
                        _this.domUtils.showErrorModal(error);
                    }
                    else {
                        _this.domUtils.showErrorModal('core.login.usernotaddederror', true);
                    }
                }
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'core.login.usernotaddederror', true);
            }).finally(function () {
                modal_1.dismiss();
            });
        }
    };
    /**
     * Escape mail to avoid special characters to be treated as a RegExp.
     *
     * @param text Initial mail.
     * @return Escaped mail.
     */
    CoreLoginEmailSignupPage.prototype.escapeMail = function (text) {
        return this.textUtils.escapeForRegex(text);
    };
    /**
     * Show authentication instructions.
     */
    CoreLoginEmailSignupPage.prototype.showAuthInstructions = function () {
        this.textUtils.viewText(this.translate.instant('core.login.instructions'), this.authInstructions);
    };
    /**
     * Show contact information on site (we have to display again the age verification form).
     */
    CoreLoginEmailSignupPage.prototype.showContactOnSite = function () {
        this.utils.openInBrowser(this.siteUrl + '/login/verify_age_location.php');
    };
    /**
     * Verify Age.
     *
     * @param e Event.
     */
    CoreLoginEmailSignupPage.prototype.verifyAge = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        if (!this.ageVerificationForm.valid) {
            this.domUtils.showErrorModal('core.errorinvalidform', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true), params = this.ageVerificationForm.value;
        params.age = parseInt(params.age, 10); // Use just the integer part.
        this.wsProvider.callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl }).then(function (result) {
            _this.domUtils.triggerFormSubmittedEvent(_this.ageFormElement, true);
            if (!result.status) {
                if (_this.countryControl.value) {
                    _this.signUpCountryControl.setValue(_this.countryControl.value);
                }
                // Not a minor, go ahead!
                _this.ageDigitalConsentVerification = false;
            }
            else {
                // Is a minor!!
                _this.isMinor = true;
            }
        }).catch(function () {
            // Something wrong, redirect to the site.
            _this.domUtils.showErrorModal('There was an error verifying your age, please try again using the browser.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CoreLoginEmailSignupPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('ageForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginEmailSignupPage.prototype, "ageFormElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('signupFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginEmailSignupPage.prototype, "signupFormElement", void 0);
    CoreLoginEmailSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-email-signup',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\email-signup\email-signup.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.newaccount\' | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only *ngIf="authInstructions" (click)="showAuthInstructions()" [attr.aria-label]="\'core.login.instructions\' | translate">\n\n                <ion-icon name="help-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="settingsLoaded && !isMinor" (ionRefresh)="refreshSettings($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="settingsLoaded" *ngIf="!isMinor">\n\n\n\n        <!-- Site has an unsupported required field. -->\n\n        <ion-list *ngIf="!allRequiredSupported">\n\n            <ion-item text-wrap>\n\n                {{ \'core.login.signuprequiredfieldnotsupported\' | translate }}\n\n            </ion-item>\n\n            <ion-item>\n\n                <a ion-button block [href]="signupUrl" core-link [autoLogin]="no">\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                </a>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Age verification. -->\n\n        <form ion-list *ngIf="allRequiredSupported && settingsLoaded && settings && ageDigitalConsentVerification" [formGroup]="ageVerificationForm" (ngSubmit)="verifyAge($event)" #ageForm>\n\n            <ion-item-divider text-wrap>\n\n                <p class="item-heading">{{ \'core.agelocationverification\' | translate }}</p>\n\n            </ion-item-divider>\n\n\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.whatisyourage\' | translate }}</ion-label>\n\n                <ion-input type="number" name="age" placeholder="0" formControlName="age" autocapitalize="none" autocorrect="off"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.wheredoyoulive\' | translate }}</ion-label>\n\n                <ion-select name="country" formControlName="country" [placeholder]="\'core.login.selectacountry\' | translate">\n\n                    <ion-option value="">{{ \'core.login.selectacountry\' | translate }}</ion-option>\n\n                    <ion-option *ngFor="let country of countries" [value]="country.code">{{country.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Submit button. -->\n\n            <ion-item padding>\n\n                <button ion-button block type="submit" [disabled]="!ageVerificationForm.valid">{{ \'core.proceed\' | translate }}</button>\n\n            </ion-item>\n\n\n\n            <ion-item text-wrap>\n\n                <p class="item-heading">{{ \'core.whyisthisrequired\' | translate }}</p>\n\n                <p>{{ \'core.explanationdigitalminor\' | translate }}</p>\n\n            </ion-item>\n\n        </form>\n\n\n\n        <!-- Signup form. -->\n\n        <form ion-list *ngIf="allRequiredSupported && settingsLoaded && settings && !ageDigitalConsentVerification" [formGroup]="signupForm" (ngSubmit)="create($event)" #signupFormEl>\n\n            <ion-item text-wrap text-center>\n\n                <!-- If no sitename show big siteurl. -->\n\n                <p *ngIf="!siteName" padding class="item-heading">{{siteUrl}}</p>\n\n                <!-- If sitename, show big sitename and small siteurl. -->\n\n                <p *ngIf="siteName" padding class="item-heading"><core-format-text [text]="siteName" [filter]="false"></core-format-text></p>\n\n                <p *ngIf="siteName">{{siteUrl}}</p>\n\n            </ion-item>\n\n\n\n            <!-- Username and password. -->\n\n            <ion-item-divider text-wrap>\n\n                {{ \'core.login.createuserandpass\' | translate }}\n\n            </ion-item-divider>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.login.username\' | translate }}</ion-label>\n\n                <ion-input type="text" name="username" placeholder="{{ \'core.login.username\' | translate }}" formControlName="username" autocapitalize="none" autocorrect="off"></ion-input>\n\n                <core-input-errors item-content [control]="signupForm.controls.username" [errorMessages]="usernameErrors"></core-input-errors>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.login.password\' | translate }}</ion-label>\n\n                <core-show-password item-content [name]="\'password\'">\n\n                    <ion-input type="password" name="password" placeholder="{{ \'core.login.password\' | translate }}" formControlName="password" [clearOnEdit]="false"></ion-input>\n\n                </core-show-password>\n\n                <p *ngIf="settings.passwordpolicy" item-content class="core-input-footnote">\n\n                    {{settings.passwordpolicy}}\n\n                </p>\n\n                <core-input-errors item-content [control]="signupForm.controls.password" [errorMessages]="passwordErrors"></core-input-errors>\n\n            </ion-item>\n\n\n\n            <!-- More details. -->\n\n            <ion-item-divider text-wrap>\n\n                {{ \'core.login.supplyinfo\' | translate }}\n\n            </ion-item-divider>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.user.email\' | translate }}</ion-label>\n\n                <ion-input type="email" name="email" placeholder="{{ \'core.user.email\' | translate }}" formControlName="email" autocapitalize="none" autocorrect="off"></ion-input>\n\n                <core-input-errors item-content [control]="signupForm.controls.email" [errorMessages]="emailErrors"></core-input-errors>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.user.emailagain\' | translate }}</ion-label>\n\n                <ion-input type="email" name="email2" placeholder="{{ \'core.user.emailagain\' | translate }}" formControlName="email2" autocapitalize="none" autocorrect="off" [pattern]="escapeMail(signupForm.controls.email.value)"></ion-input>\n\n                <core-input-errors item-content [control]="signupForm.controls.email2" [errorMessages]="email2Errors"></core-input-errors>\n\n            </ion-item>\n\n            <ion-item *ngFor="let nameField of settings.namefields" text-wrap>\n\n                <ion-label stacked core-mark-required="true">{{ \'core.user.\' + nameField | translate }}</ion-label>\n\n                <ion-input type="text" name="nameField" placeholder="{{ \'core.user.\' + nameField | translate }}" formControlName="{{nameField}}" autocorrect="off"></ion-input>\n\n                <core-input-errors item-content [control]="signupForm.controls[nameField]" [errorMessages]="namefieldsErrors[nameField]"></core-input-errors>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked>{{ \'core.user.city\' | translate }}</ion-label>\n\n                <ion-input type="text" name="city" placeholder="{{ \'core.user.city\' | translate }}" formControlName="city" autocorrect="off"></ion-input>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked id="core-login-signup-country">{{ \'core.user.country\' | translate }}</ion-label>\n\n                <ion-select name="country" formControlName="country" aria-labelledby="core-login-signup-country" [placeholder]="\'core.login.selectacountry\' | translate">\n\n                    <ion-option value="">{{ \'core.login.selectacountry\' | translate }}</ion-option>\n\n                    <ion-option *ngFor="let country of countries" [value]="country.code">{{country.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Other categories. -->\n\n            <ng-container *ngFor="let category of categories">\n\n                <ion-item-divider text-wrap>{{ category.name }}</ion-item-divider>\n\n                <core-user-profile-field *ngFor="let field of category.fields" [field]="field" edit="true" signup="true" registerAuth="email" [form]="signupForm"></core-user-profile-field>\n\n            </ng-container>\n\n\n\n            <!-- ReCAPTCHA -->\n\n            <ng-container *ngIf="settings.recaptchapublickey">\n\n                <ion-item-divider text-wrap><span [core-mark-required]="true">{{ \'core.login.security_question\' | translate }}</span></ion-item-divider>\n\n                <ion-item text-wrap>\n\n                    <core-recaptcha [publicKey]="settings.recaptchapublickey" [model]="captcha" [siteUrl]="siteUrl"></core-recaptcha>\n\n                </ion-item>\n\n            </ng-container>\n\n\n\n            <!-- Site policy (if any). -->\n\n            <ng-container *ngIf="settings.sitepolicy">\n\n                <ion-item-divider text-wrap>{{ \'core.login.policyagreement\' | translate }}</ion-item-divider>\n\n                <ion-item text-wrap>\n\n                    <p><a [href]="settings.sitepolicy" core-link capture="false">{{ \'core.login.policyagreementclick\' | translate }}</a></p>\n\n                </ion-item>\n\n                <ion-item text-wrap>\n\n                    <ion-label>\n\n                        <span [core-mark-required]="true">{{ \'core.login.policyaccept\' | translate }}</span>\n\n                        <core-input-errors [control]="signupForm.controls.policyagreed" [errorMessages]="policyErrors"></core-input-errors>\n\n                    </ion-label>\n\n                    <ion-checkbox item-end name="policyagreed" formControlName="policyagreed"></ion-checkbox>\n\n                </ion-item>\n\n            </ng-container>\n\n\n\n            <!-- Submit button. -->\n\n            <ion-item padding>\n\n                <button ion-button block color="primary" type="submit">{{ \'core.login.createaccount\' | translate }}</button>\n\n            </ion-item>\n\n        </form>\n\n    </core-loading>\n\n\n\n    <ion-list *ngIf="allRequiredSupported && isMinor">\n\n        <ion-item-divider text-wrap>\n\n            <p *ngIf="siteName" class="item-heading padding"><core-format-text [text]="siteName" [filter]="false"></core-format-text></p>\n\n        </ion-item-divider>\n\n        <ion-item text-wrap>\n\n            <p class="item-heading">{{ \'core.considereddigitalminor\' | translate }}</p>\n\n            <p>{{ \'core.digitalminor_desc\' | translate }}</p>\n\n            <p *ngIf="supportName">{{ supportName }}</p>\n\n            <p *ngIf="supportEmail">{{ supportEmail }}</p>\n\n            <div padding *ngIf="!supportName && !supportEmail">\n\n                <button ion-button block (click)="showContactOnSite()">\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                </button>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\email-signup\email-signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__providers_ws__["a" /* CoreWSProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__core_user_providers_user_profile_field_delegate__["a" /* CoreUserProfileFieldDelegate */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */]])
    ], CoreLoginEmailSignupPage);
    return CoreLoginEmailSignupPage;
}());

//# sourceMappingURL=email-signup.js.map

/***/ })

});
//# sourceMappingURL=42.js.map