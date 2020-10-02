webpackJsonp([35],{

/***/ 2200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site__ = __webpack_require__(2360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(13);
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






var CoreLoginSitePageModule = /** @class */ (function () {
    function CoreLoginSitePageModule() {
    }
    CoreLoginSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSitePageModule);
    return CoreLoginSitePageModule;
}());

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 2360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_site__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urlschemes__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_url__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__configconstants__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__singletons_url__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(1);
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
 * Page to enter or select the site URL to connect to.
 */
var CoreLoginSitePage = /** @class */ (function () {
    function CoreLoginSitePage(navParams, navCtrl, fb, appProvider, sitesProvider, loginHelper, modalCtrl, alertCtrl, urlUtils, domUtils, eventsProvider, translate, utils, urlSchemesProvider, textUtils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.urlUtils = urlUtils;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.translate = translate;
        this.utils = utils;
        this.urlSchemesProvider = urlSchemesProvider;
        this.textUtils = textUtils;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        this.showKeyboard = !!navParams.get('showKeyboard');
        var url = '';
        this.siteSelector = __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].multisitesdisplay;
        // Load fixed sites if they're set.
        if (this.loginHelper.hasSeveralFixedSites()) {
            this.fixedSites = this.loginHelper.getFixedSites();
            // Autoselect if not defined.
            if (['list', 'listnourl', 'select', 'buttons'].indexOf(this.siteSelector) < 0) {
                this.siteSelector = this.fixedSites.length > 8 ? 'list' : (this.fixedSites.length > 3 ? 'select' : 'buttons');
            }
            this.filteredSites = this.fixedSites;
            url = this.fixedSites[0].url;
        }
        else if (__WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].enableonboarding && !this.appProvider.isIOS() && !this.appProvider.isMac()) {
            __WEBPACK_IMPORTED_MODULE_11__providers_config__["a" /* CoreConfig */].instance.get(__WEBPACK_IMPORTED_MODULE_13__providers_helper__["a" /* CoreLoginHelperProvider */].ONBOARDING_DONE, false).then(function (onboardingDone) {
                if (!onboardingDone) {
                    // Check onboarding.
                    _this.showOnboarding();
                }
            });
        }
        this.showScanQR = this.utils.canScanQR() && (typeof __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */]['displayqronsitescreen'] == 'undefined' ||
            !!__WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */]['displayqronsitescreen']);
        this.siteForm = fb.group({
            siteUrl: [url, this.moodleUrlValidator()]
        });
        this.searchFnc = this.utils.debounce(function (search) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        search = search.trim();
                        if (!(search.length >= 3)) return [3 /*break*/, 2];
                        // Update the sites list.
                        _a = this;
                        return [4 /*yield*/, this.sitesProvider.findSites(search)];
                    case 1:
                        // Update the sites list.
                        _a.sites = _b.sent();
                        // UI tweaks.
                        this.sites.forEach(function (site) {
                            site.noProtocolUrl = __WEBPACK_IMPORTED_MODULE_15__singletons_url__["a" /* CoreUrl */].removeProtocol(site.url);
                            site.country = _this.utils.getCountryName(site.countrycode);
                        });
                        this.hasSites = !!this.sites.length;
                        return [3 /*break*/, 3];
                    case 2:
                        // Not reseting the array to allow animation to be displayed.
                        this.hasSites = false;
                        _b.label = 3;
                    case 3:
                        this.loadingSites = false;
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     */
    CoreLoginSitePage.prototype.connect = function (e, url, foundSite) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        if (!url) {
            this.domUtils.showErrorModal('core.login.siteurlrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        url = url.trim();
        if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
            this.showLoginIssue(null, this.translate.instant('core.login.errorexampleurl'));
            return;
        }
        var modal = this.domUtils.showModalLoading(), siteData = this.sitesProvider.getDemoSiteData(url);
        if (siteData) {
            // It's a demo site.
            this.sitesProvider.getUserToken(siteData.url, siteData.username, siteData.password).then(function (data) {
                return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function () {
                    _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                    return _this.loginHelper.goToSiteInitialPage();
                }, function (error) {
                    _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                    if (error.loggedout) {
                        _this.navCtrl.setRoot('CoreLoginSitesPage');
                    }
                });
            }, function (error) {
                _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _this.navCtrl.setRoot('CoreLoginSitesPage');
                }
            }).finally(function () {
                modal.dismiss();
            });
        }
        else {
            // Not a demo site.
            this.sitesProvider.checkSite(url)
                .catch(function (error) {
                // Attempt guessing the domain if the initial check failed
                var domain = __WEBPACK_IMPORTED_MODULE_15__singletons_url__["a" /* CoreUrl */].guessMoodleDomain(url);
                if (domain && domain != url) {
                    return _this.sitesProvider.checkSite(domain).catch(function (secondError) {
                        // Try to use the first error.
                        return Promise.reject(error || secondError);
                    });
                }
                return Promise.reject(error);
            })
                .then(function (result) { return _this.login(result, foundSite); })
                .catch(function (error) { return _this.showLoginIssue(url, error); })
                .finally(function () { return modal.dismiss(); });
        }
    };
    /**
     * The filter has changed.
     *
     * @param Received Event.
     */
    CoreLoginSitePage.prototype.filterChanged = function (event) {
        var newValue = event.target.value && event.target.value.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter(function (site) {
                return site.name.toLowerCase().indexOf(newValue) > -1 || site.url.toLowerCase().indexOf(newValue) > -1;
            });
        }
    };
    /**
     * Show a help modal.
     */
    CoreLoginSitePage.prototype.showHelp = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteHelpPage', {}, { cssClass: 'core-modal-fullscreen' });
        modal.present();
    };
    /**
     * Show an onboarding modal.
     */
    CoreLoginSitePage.prototype.showOnboarding = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteOnboardingPage', {}, { cssClass: 'core-modal-fullscreen' });
        modal.present();
    };
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    CoreLoginSitePage.prototype.showLoginIssue = function (url, error) {
        var _this = this;
        error = this.domUtils.getErrorMessage(error);
        if (error == this.translate.instant('core.cannotconnecttrouble')) {
            var found = this.sites.find(function (site) { return site.url == url; });
            if (!found) {
                error += ' ' + this.translate.instant('core.cannotconnectverify');
            }
        }
        var message = '<p>' + error + '</p>';
        if (url) {
            var fullUrl = this.urlUtils.isAbsoluteURL(url) ? url : 'https://' + url;
            message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
        }
        var buttons = [
            {
                text: this.translate.instant('core.needhelp'),
                handler: function () {
                    _this.showHelp();
                }
            },
            {
                text: this.translate.instant('core.tryagain'),
                role: 'cancel'
            }
        ];
        // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
        this.domUtils.showAlertWithOptions({
            title: this.translate.instant('core.cannotconnect', { $a: __WEBPACK_IMPORTED_MODULE_2__classes_site__["a" /* CoreSite */].MINIMUM_MOODLE_VERSION }),
            message: message,
            buttons: buttons,
        });
    };
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    CoreLoginSitePage.prototype.searchSite = function (e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                noProtocolUrl: __WEBPACK_IMPORTED_MODULE_15__singletons_url__["a" /* CoreUrl */].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = null;
        }
        this.searchFnc(search.trim());
    };
    /**
     * Get the demo data for a certain "name" if it is a demo site.
     *
     * @param name Name of the site to check.
     * @return Site data if it's a demo site, undefined otherwise.
     */
    CoreLoginSitePage.prototype.getDemoSiteData = function (name) {
        var demoSites = __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].demo_sites;
        if (typeof demoSites != 'undefined' && typeof demoSites[name] != 'undefined') {
            return demoSites[name];
        }
    };
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @return Promise resolved after logging in.
     */
    CoreLoginSitePage.prototype.login = function (response, foundSite) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sitesProvider.checkRequiredMinimumVersion(response.config).then(function () {
                        _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                        if (response.warning) {
                            _this.domUtils.showErrorModal(response.warning, true, 4000);
                        }
                        if (_this.loginHelper.isSSOLoginNeeded(response.code)) {
                            // SSO. User needs to authenticate in a browser.
                            _this.loginHelper.confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, response.config && response.config.launchurl);
                        }
                        else {
                            var pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                            if (foundSite) {
                                pageParams['siteName'] = foundSite.name;
                                pageParams['logoUrl'] = foundSite.imageurl;
                            }
                            _this.navCtrl.push('CoreLoginCredentialsPage', pageParams);
                        }
                    }).catch(function () {
                        // Ignore errors.
                    })];
            });
        });
    };
    /**
     * Validate Url.
     *
     * @return {ValidatorFn} Validation results.
     */
    CoreLoginSitePage.prototype.moodleUrlValidator = function () {
        var _this = this;
        return function (control) {
            var value = control.value.trim();
            var valid = value.length >= 3 && __WEBPACK_IMPORTED_MODULE_15__singletons_url__["a" /* CoreUrl */].isValidMoodleUrl(value);
            if (!valid) {
                var demo = !!_this.getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    };
    /**
     * Show instructions and scan QR code.
     */
    CoreLoginSitePage.prototype.showInstructionsAndScanQR = function () {
        var _this = this;
        // Show some instructions first.
        this.domUtils.showAlertWithOptions({
            title: this.translate.instant('core.login.faqwhereisqrcode'),
            message: this.translate.instant('core.login.faqwhereisqrcodeanswer', { $image: __WEBPACK_IMPORTED_MODULE_13__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_QRCODE_IMAGE_HTML }),
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
    CoreLoginSitePage.prototype.scanQR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, error_1, scheme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.scanQR()];
                    case 1:
                        text = _a.sent();
                        if (!text) return [3 /*break*/, 7];
                        if (!this.urlSchemesProvider.isCustomURL(text)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.urlSchemesProvider.handleCustomURL(text)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1 && error_1.data && error_1.data.isAuthenticationURL && error_1.data.siteUrl) {
                            // An error ocurred, but it's an authentication URL and we have the site URL.
                            this.treatErrorInAuthenticationCustomURL(text, error_1);
                        }
                        else {
                            this.urlSchemesProvider.treatHandleCustomURLError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        scheme = this.urlUtils.getUrlProtocol(text);
                        if (scheme && scheme != 'http' && scheme != 'https') {
                            this.domUtils.showErrorModal(this.translate.instant('core.errorurlschemeinvalidscheme', { $a: text }));
                        }
                        else if (this.loginHelper.isSiteUrlAllowed(text)) {
                            // Put the text in the field (if present).
                            this.siteForm.controls.siteUrl.setValue(text);
                            this.connect(new Event('click'), text);
                        }
                        else {
                            this.domUtils.showErrorModal('core.errorurlschemeinvalidsite', true);
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @return Promise resolved when done.
     */
    CoreLoginSitePage.prototype.treatErrorInAuthenticationCustomURL = function (customURL, error) {
        return __awaiter(this, void 0, void 0, function () {
            var siteUrl, modal, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteUrl = error.data.siteUrl;
                        modal = this.domUtils.showModalLoading();
                        // Set the site URL in the input.
                        this.siteForm.controls.siteUrl.setValue(siteUrl);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.sitesProvider.checkSite(siteUrl)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, this.sitesProvider.checkRequiredMinimumVersion(response.config)];
                    case 3:
                        _a.sent();
                        if (!!this.loginHelper.isSSOLoginNeeded(response.code)) return [3 /*break*/, 5];
                        // No SSO, go to credentials page.
                        return [4 /*yield*/, this.navCtrl.push('CoreLoginCredentialsPage', {
                                siteUrl: response.siteUrl,
                                siteConfig: response.config,
                            })];
                    case 4:
                        // No SSO, go to credentials page.
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_2 = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8:
                        // Now display the error.
                        error.error = this.textUtils.addTextToError(error.error, '<br><br>' + this.translate.instant('core.login.youcanstillconnectwithcredentials'));
                        this.urlSchemesProvider.treatHandleCustomURLError(error);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('siteFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginSitePage.prototype, "formElement", void 0);
    CoreLoginSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\site\site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.connecttomoodle\' | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only navPush="CoreAppSettingsPage" [attr.aria-label]="\'core.settings.appsettings\' | translate">\n\n                <core-icon name="fa-cogs"></core-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div>\n\n        <div text-center padding margin-bottom [class.hidden]="hasSites || enteredSiteUrl" class="core-login-site-logo">\n\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n\n        </div>\n\n        <form ion-list [formGroup]="siteForm" (ngSubmit)="connect($event, siteForm.value.siteUrl)" *ngIf="!fixedSites || siteSelector == \'select\'" #siteFormEl>\n\n            <!-- Form to input the site URL if there are no fixed sites. -->\n\n            <ng-container *ngIf="!fixedSites">\n\n                <ng-container *ngIf="siteSelector == \'url\'">\n\n                    <ion-item>\n\n                        <ion-label stacked><h2>{{ \'core.login.siteaddress\' | translate }}</h2></ion-label>\n\n                        <ion-input name="url" type="url" placeholder="https://campus.example.edu" formControlName="siteUrl" [core-auto-focus]="showKeyboard && !showScanQR"></ion-input>\n\n                    </ion-item>\n\n                </ng-container>\n\n                <ng-container *ngIf="siteSelector != \'url\'">\n\n                    <ion-item>\n\n                        <ion-label stacked><h2>{{ \'core.login.siteaddress\' | translate }}</h2></ion-label>\n\n                        <ion-input name="url" placeholder="https://campus.example.edu" formControlName="siteUrl" [core-auto-focus]="showKeyboard && !showScanQR" (ionChange)="searchSite($event, siteForm.value.siteUrl)"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-list [class.hidden]="!hasSites && !enteredSiteUrl" class="core-login-site-list">\n\n                        <ion-item no-lines class="core-login-site-list-title"><h2 class="item-heading">{{ \'core.login.selectsite\' | translate }}</h2></ion-item>\n\n                        <button ion-item *ngIf="enteredSiteUrl" (click)="connect($event, enteredSiteUrl.url)" [attr.aria-label]="\'core.login.connect\' | translate" detail-push class="core-login-entered-site">\n\n                            <ion-thumbnail item-start>\n\n                                <core-icon name="fa-pencil"></core-icon>\n\n                            </ion-thumbnail>\n\n                            <h2 text-wrap>{{ \'core.login.yourenteredsite\' | translate }}</h2>\n\n                            <p>{{enteredSiteUrl.noProtocolUrl}}</p>\n\n                        </button>\n\n\n\n                        <div class="core-login-site-list-found" [class.hidden]="!hasSites" [class.dimmed]="loadingSites">\n\n                            <div *ngIf="loadingSites" class="core-login-site-list-loading"><ion-spinner></ion-spinner></div>\n\n                            <button ion-item *ngFor="let site of sites" (click)="connect($event, site.url, site)" [attr.aria-label]="site.name" detail-push>\n\n                                <ion-thumbnail item-start>\n\n                                    <img [src]="site.imageurl" *ngIf="site.imageurl" onError="this.src=\'assets/icon/icon.png\'">\n\n                                    <img src="assets/icon/icon.png" *ngIf="!site.imageurl" class="core-login-default-icon">\n\n                                </ion-thumbnail>\n\n                                <h2 text-wrap>{{site.name}}<ng-container *ngIf="site.alias"> ({{site.alias}})</ng-container></h2>\n\n                                <p>{{site.noProtocolUrl}}</p>\n\n                                <p *ngIf="site.country || site.city" text-wrap><ng-container *ngIf="site.city">{{site.city}} - </ng-container>{{site.country}}</p>\n\n                            </button>\n\n                        </div>\n\n                    </ion-list>\n\n\n\n                    <div *ngIf="!hasSites && loadingSites" class="core-login-site-nolist-loading"><ion-spinner></ion-spinner></div>\n\n                </ng-container>\n\n            </ng-container>\n\n\n\n            <!-- Pick the site from a list of fixed sites. -->\n\n            <ion-item *ngIf="fixedSites && siteSelector == \'select\'" margin-vertical text-wrap>\n\n                <ion-label stacked for="siteSelect">{{ \'core.login.selectsite\' | translate }}</ion-label>\n\n                <ion-select formControlName="siteUrl" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" interface="action-sheet">\n\n                    <ion-option *ngFor="let site of fixedSites" [value]="site.url">{{site.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="(fixedSites && siteSelector == \'select\') || (!fixedSites && siteSelector == \'url\')" no-lines>\n\n                <button ion-button block [disabled]="!siteForm.valid" text-wrap>{{ \'core.login.connect\' | translate }}</button>\n\n            </ion-item>\n\n        </form>\n\n\n\n        <ng-container *ngIf="fixedSites">\n\n            <!-- Pick the site from a list of fixed sites. -->\n\n            <ion-list *ngIf="siteSelector == \'list\' || siteSelector == \'listnourl\'">\n\n                <ion-item no-lines><h2 class="item-heading">{{ \'core.login.selectsite\' | translate }}</h2></ion-item>\n\n                <ion-searchbar *ngIf="fixedSites.length > 4" [(ngModel)]="filter" (ionInput)="filterChanged($event)" (ionCancel)="filterChanged()" [placeholder]="\'core.login.findyoursite\' | translate"></ion-searchbar>\n\n                <ion-item *ngFor="let site of filteredSites" (click)="connect($event, site.url)" [title]="site.name" detail-push text-wrap>\n\n                    <h2>{{site.name}}</h2>\n\n                    <p *ngIf="siteSelector == \'list\'">{{site.url}}</p>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n            <!-- Display them using buttons. -->\n\n            <div *ngIf="siteSelector == \'buttons\'">\n\n                <p class="padding no-padding-bottom">{{ \'core.login.selectsite\' | translate }}</p>\n\n                <a *ngFor="let site of fixedSites" ion-button block (click)="connect($event, site.url)" [title]="site.name" margin-bottom>{{site.name}}</a>\n\n            </div>\n\n        </ng-container>\n\n\n\n        <ng-container *ngIf="showScanQR && !hasSites && !enteredSiteUrl">\n\n            <div class="core-login-site-qrcode-separator">{{ \'core.login.or\' | translate }}</div>\n\n            <ion-item class="core-login-site-qrcode" no-lines>\n\n                <a ion-button block color="light" margin-top icon-start (click)="showInstructionsAndScanQR()" text-wrap>\n\n                    <core-icon name="fa-qrcode" aria-hidden="true"></core-icon>\n\n                    {{ \'core.scanqr\' | translate }}\n\n                </a>\n\n            </ion-item>\n\n        </ng-container>\n\n\n\n        <!-- Help. -->\n\n        <ion-list no-lines margin-top>\n\n            <a ion-item text-center text-wrap class="core-login-need-help" (click)="showHelp()" detail-none>\n\n                {{ \'core.needhelp\' | translate }}\n\n            </a>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\site\site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_url__["b" /* CoreUrlUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urlschemes__["b" /* CoreCustomURLSchemesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_text__["b" /* CoreTextUtilsProvider */]])
    ], CoreLoginSitePage);
    return CoreLoginSitePage;
}());

//# sourceMappingURL=site.js.map

/***/ })

});
//# sourceMappingURL=35.js.map