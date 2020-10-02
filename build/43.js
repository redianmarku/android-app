webpackJsonp([43],{

/***/ 2186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return CoreLoginCredentialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credentials__ = __webpack_require__(2344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
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
                __WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* CoreLoginCredentialsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credentials__["a" /* CoreLoginCredentialsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginCredentialsPageModule);
    return CoreLoginCredentialsPageModule;
}());

//# sourceMappingURL=credentials.module.js.map

/***/ }),

/***/ 2344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginCredentialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_url__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configconstants__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_urlschemes__ = __webpack_require__(253);
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
 * Page to enter the user credentials.
 */
var CoreLoginCredentialsPage = /** @class */ (function () {
    function CoreLoginCredentialsPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, eventsProvider) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.showForgottenPassword = true;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteUrl = navParams.get('siteUrl');
        this.siteName = navParams.get('siteName') || null;
        this.logoUrl = navParams.get('logoUrl') || null;
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
        this.credForm = fb.group({
            username: [navParams.get('username') || '', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required]
        });
        var canScanQR = __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* CoreUtils */].instance.canScanQR();
        if (canScanQR) {
            if (typeof __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */]['displayqroncredentialscreen'] == 'undefined') {
                this.showScanQR = this.loginHelper.isFixedUrlSet();
            }
            else {
                this.showScanQR = !!__WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */]['displayqroncredentialscreen'];
            }
        }
        else {
            this.showScanQR = false;
        }
    }
    /**
     * View loaded.
     */
    CoreLoginCredentialsPage.prototype.ionViewDidLoad = function () {
        this.treatSiteConfig();
        this.isFixedUrlSet = this.loginHelper.isFixedUrlSet();
        if (this.isFixedUrlSet) {
            // Fixed URL, we need to check if it uses browser SSO login.
            this.checkSite(this.siteUrl);
        }
        else {
            this.siteChecked = true;
            this.pageLoaded = true;
        }
    };
    /**
     * View destroyed.
     */
    CoreLoginCredentialsPage.prototype.ionViewWillUnload = function () {
        this.viewLeft = true;
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    };
    /**
     * Check if a site uses local_mobile, requires SSO login, etc.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param siteUrl Site URL to check.
     * @return Promise resolved when done.
     */
    CoreLoginCredentialsPage.prototype.checkSite = function (siteUrl) {
        var _this = this;
        this.pageLoaded = false;
        // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
        var protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
        return this.sitesProvider.checkSite(siteUrl, protocol).then(function (result) {
            _this.siteChecked = true;
            _this.siteUrl = result.siteUrl;
            _this.siteConfig = result.config;
            _this.treatSiteConfig();
            if (result && result.warning) {
                _this.domUtils.showErrorModal(result.warning, true, 4000);
            }
            if (_this.loginHelper.isSSOLoginNeeded(result.code)) {
                // SSO. User needs to authenticate in a browser.
                _this.isBrowserSSO = true;
                // Check that there's no SSO authentication ongoing and the view hasn't changed.
                if (!_this.appProvider.isSSOAuthenticationOngoing() && !_this.viewLeft) {
                    _this.loginHelper.confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, result.config && result.config.launchurl);
                }
            }
            else {
                _this.isBrowserSSO = false;
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            _this.pageLoaded = true;
        });
    };
    /**
     * Treat the site configuration (if it exists).
     */
    CoreLoginCredentialsPage.prototype.treatSiteConfig = function () {
        if (this.siteConfig) {
            this.siteName = __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].sitename ? __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].sitename : this.siteConfig.sitename;
            this.logoUrl = this.loginHelper.getLogoUrl(this.siteConfig);
            this.authInstructions = this.siteConfig.authinstructions || this.translate.instant('core.login.loginsteps');
            var disabledFeatures = this.loginHelper.getDisabledFeatures(this.siteConfig);
            this.identityProviders = this.loginHelper.getValidIdentityProviders(this.siteConfig, disabledFeatures);
            this.canSignup = this.siteConfig.registerauth == 'email' &&
                !this.loginHelper.isEmailSignupDisabled(this.siteConfig, disabledFeatures);
            this.showForgottenPassword = !this.loginHelper.isForgottenPasswordDisabled(this.siteConfig, disabledFeatures);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.authInstructions = null;
            this.canSignup = false;
            this.identityProviders = [];
        }
    };
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     */
    CoreLoginCredentialsPage.prototype.login = function (e) {
        var _this = this;
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.appProvider.closeKeyboard();
        // Get input data.
        var siteUrl = this.siteUrl, username = this.credForm.value.username, password = this.credForm.value.password;
        if (!this.siteChecked || this.isBrowserSSO) {
            // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
            this.checkSite(siteUrl).then(function () {
                if (!_this.isBrowserSSO) {
                    // Site doesn't use browser SSO, throw app's login again.
                    return _this.login();
                }
            });
            return;
        }
        if (!username) {
            this.domUtils.showErrorModal('core.login.usernamerequired', true);
            return;
        }
        if (!password) {
            this.domUtils.showErrorModal('core.login.passwordrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.sitesProvider.getUserToken(siteUrl, username, password).then(function (data) {
            return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function (id) {
                // Reset fields so the data is not in the view anymore.
                _this.credForm.controls['username'].reset();
                _this.credForm.controls['password'].reset();
                _this.siteId = id;
                return _this.loginHelper.goToSiteInitialPage(undefined, undefined, undefined, undefined, _this.urlToOpen);
            });
        }).catch(function (error) {
            _this.loginHelper.treatUserTokenError(siteUrl, error, username, password);
            if (error.loggedout) {
                _this.navCtrl.setRoot('CoreLoginSitesPage');
            }
            else if (error.errorcode == 'forcepasswordchangenotice') {
                // Reset password field.
                _this.credForm.controls.password.reset();
            }
        }).finally(function () {
            modal.dismiss();
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
        });
    };
    /**
     * Forgotten password button clicked.
     */
    CoreLoginCredentialsPage.prototype.forgottenPassword = function () {
        this.loginHelper.forgottenPasswordClicked(this.navCtrl, this.siteUrl, this.credForm.value.username, this.siteConfig);
    };
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    CoreLoginCredentialsPage.prototype.oauthClicked = function (provider) {
        if (!this.loginHelper.openBrowserForOAuthLogin(this.siteUrl, provider, this.siteConfig.launchurl)) {
            this.domUtils.showErrorModal('Invalid data.');
        }
    };
    /**
     * Signup button was clicked.
     */
    CoreLoginCredentialsPage.prototype.signup = function () {
        this.navCtrl.push('CoreLoginEmailSignupPage', { siteUrl: this.siteUrl });
    };
    /**
     * Show instructions and scan QR code.
     */
    CoreLoginCredentialsPage.prototype.showInstructionsAndScanQR = function () {
        var _this = this;
        // Show some instructions first.
        this.domUtils.showAlertWithOptions({
            title: this.translate.instant('core.login.faqwhereisqrcode'),
            message: this.translate.instant('core.login.faqwhereisqrcodeanswer', { $image: __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_QRCODE_IMAGE_HTML }),
            buttons: [
                {
                    text: this.translate.instant('core.cancel'),
                    role: 'cancel'
                },
                {
                    text: this.translate.instant('core.next'),
                    handler: function () {
                        _this.scanQR();
                    }
                },
            ],
        });
    };
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @return Promise resolved when done.
     */
    CoreLoginCredentialsPage.prototype.scanQR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, error_1, scheme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* CoreUtils */].instance.scanQR()];
                    case 1:
                        text = _a.sent();
                        if (!(text && __WEBPACK_IMPORTED_MODULE_12__providers_urlschemes__["a" /* CoreCustomURLSchemes */].instance.isCustomURL(text))) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_12__providers_urlschemes__["a" /* CoreCustomURLSchemes */].instance.handleCustomURL(text)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_12__providers_urlschemes__["a" /* CoreCustomURLSchemes */].instance.treatHandleCustomURLError(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (text) {
                            scheme = __WEBPACK_IMPORTED_MODULE_8__providers_utils_url__["a" /* CoreUrlUtils */].instance.getUrlProtocol(text);
                            if (scheme && scheme != 'http' && scheme != 'https') {
                                this.domUtils.showErrorModal(this.translate.instant('core.errorurlschemeinvalidscheme', { $a: text }));
                            }
                            else {
                                this.domUtils.showErrorModal('core.login.errorqrnoscheme', true);
                            }
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('credentialsForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginCredentialsPage.prototype, "formElement", void 0);
    CoreLoginCredentialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-credentials',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\credentials\credentials.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.login\' | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button *ngIf="isFixedUrlSet" ion-button icon-only navPush="CoreAppSettingsPage" [attr.aria-label]="\'core.settings.appsettings\' | translate">\n\n                <core-icon name="fa-cogs"></core-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <core-loading [hideUntil]="pageLoaded">\n\n        <div text-wrap text-center margin-bottom>\n\n            <div class="core-login-site-logo">\n\n                <!-- Show site logo or a default image. -->\n\n                <img *ngIf="logoUrl" [src]="logoUrl" role="presentation" onError="this.src=\'assets/img/login_logo.png\'">\n\n                <img *ngIf="!logoUrl" src="assets/img/login_logo.png" role="presentation">\n\n            </div>\n\n\n\n            <h3 *ngIf="siteName" padding class="core-sitename"><core-format-text [text]="siteName" [filter]="false"></core-format-text></h3>\n\n            <p class="core-siteurl">{{siteUrl}}</p>\n\n        </div>\n\n\n\n        <form ion-list [formGroup]="credForm" (ngSubmit)="login($event)" class="core-login-form" #credentialsForm>\n\n            <ion-item *ngIf="siteChecked && !isBrowserSSO">\n\n                <ion-input type="text" name="username" placeholder="{{ \'core.login.username\' | translate }}" formControlName="username" autocapitalize="none" autocorrect="off"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="siteChecked && !isBrowserSSO" margin-bottom>\n\n                <core-show-password item-content [name]="\'password\'">\n\n                    <ion-input class="core-ioninput-password" name="password" type="password" placeholder="{{ \'core.login.password\' | translate }}" formControlName="password" core-show-password [clearOnEdit]="false"></ion-input>\n\n                </core-show-password>\n\n            </ion-item>\n\n            <div padding>\n\n                <button ion-button block [disabled]="siteChecked && !isBrowserSSO && !credForm.valid" class="core-login-login-button">{{ \'core.login.loginbutton\' | translate }}</button>\n\n            </div>\n\n\n\n            <ng-container *ngIf="showScanQR">\n\n                <div class="core-login-site-qrcode-separator">{{ \'core.login.or\' | translate }}</div>\n\n                <ion-item class="core-login-site-qrcode" no-lines>\n\n                    <a ion-button block color="light" margin-top icon-start text-wrap (click)="showInstructionsAndScanQR()">\n\n                        <core-icon name="fa-qrcode" aria-hidden="true"></core-icon>\n\n                        {{ \'core.scanqr\' | translate }}\n\n                    </a>\n\n                </ion-item>\n\n            </ng-container>\n\n        </form>\n\n\n\n        <!-- Forgotten password button. -->\n\n        <ion-list no-lines *ngIf="showForgottenPassword" class="core-login-forgotten-password">\n\n            <a ion-item text-center text-wrap (click)="forgottenPassword()" detail-none>\n\n                {{ \'core.login.forgotten\' | translate }}\n\n            </a>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="identityProviders && identityProviders.length" padding-top class="core-login-identity-providers">\n\n            <ion-item text-wrap no-lines><h3 class="item-heading">{{ \'core.login.potentialidps\' | translate }}</h3></ion-item>\n\n            <button ion-item *ngFor="let provider of identityProviders" text-wrap class="core-oauth-icon" (click)="oauthClicked(provider)" title="{{provider.name}}">\n\n                <img [src]="provider.iconurl" alt="" width="32" height="32" item-start>\n\n                {{provider.name}}\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="canSignup" padding-top class="core-login-sign-up">\n\n            <ion-item text-wrap no-lines><h3 class="item-heading">{{ \'core.login.firsttime\' | translate }}</h3></ion-item>\n\n            <ion-item no-lines text-wrap *ngIf="authInstructions">\n\n                <p><core-format-text [text]="authInstructions" [filter]="false"></core-format-text></p>\n\n            </ion-item>\n\n            <button ion-button block color="light" (click)="signup()">{{ \'core.login.startsignup\' | translate }}</button>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\credentials\credentials.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */]])
    ], CoreLoginCredentialsPage);
    return CoreLoginCredentialsPage;
}());

//# sourceMappingURL=credentials.js.map

/***/ })

});
//# sourceMappingURL=43.js.map