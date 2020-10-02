webpackJsonp([33],{

/***/ 2143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModule", function() { return CoreMainMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more__ = __webpack_require__(2299);
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






var CoreMainMenuPageModule = /** @class */ (function () {
    function CoreMainMenuPageModule() {
    }
    CoreMainMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__more__["a" /* CoreMainMenuMorePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreMainMenuPageModule);
    return CoreMainMenuPageModule;
}());

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 2299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreMainMenuMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urlschemes__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_delegate__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_mainmenu__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_login_providers_helper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(1);
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
 * Page that displays the list of main menu options that aren't in the tabs.
 */
var CoreMainMenuMorePage = /** @class */ (function () {
    function CoreMainMenuMorePage(menuDelegate, sitesProvider, navCtrl, mainMenuProvider, eventsProvider, loginHelper, utils, linkHelper, textUtils, urlSchemesProvider, translate) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.mainMenuProvider = mainMenuProvider;
        this.loginHelper = loginHelper;
        this.utils = utils;
        this.linkHelper = linkHelper;
        this.textUtils = textUtils;
        this.urlSchemesProvider = urlSchemesProvider;
        this.translate = translate;
        this.langObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */].SITE_UPDATED, this.loadSiteInfo.bind(this), sitesProvider.getCurrentSiteId());
        this.loadSiteInfo();
        this.showScanQR = this.utils.canScanQR() &&
            !this.sitesProvider.getCurrentSite().isFeatureDisabled('CoreMainMenuDelegate_QrReader');
    }
    /**
     * View loaded.
     */
    CoreMainMenuMorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            _this.allHandlers = handlers;
            _this.initHandlers();
        });
        window.addEventListener('resize', this.initHandlers.bind(this));
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuMorePage.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.initHandlers.bind(this));
        this.langObserver && this.langObserver.off();
        this.updateSiteObserver && this.updateSiteObserver.off();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Init handlers on change (size or handlers).
     */
    CoreMainMenuMorePage.prototype.initHandlers = function () {
        if (this.allHandlers) {
            // Calculate the main handlers not to display them in this view.
            var mainHandlers_1 = this.allHandlers.filter(function (handler) {
                return !handler.onlyInMore;
            }).slice(0, this.mainMenuProvider.getNumItems());
            // Get only the handlers that don't appear in the main view.
            this.handlers = this.allHandlers.filter(function (handler) {
                return mainHandlers_1.indexOf(handler) == -1;
            });
            this.handlersLoaded = this.menuDelegate.areHandlersLoaded();
        }
    };
    /**
     * Load the site info required by the view.
     */
    CoreMainMenuMorePage.prototype.loadSiteInfo = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite();
        this.siteInfo = currentSite.getInfo();
        this.siteName = currentSite.getSiteName();
        this.siteUrl = currentSite.getURL();
        this.logoutLabel = this.loginHelper.getLogoutLabel(currentSite);
        this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
        this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
        currentSite.getDocsUrl().then(function (docsUrl) {
            _this.docsUrl = docsUrl;
        });
        this.mainMenuProvider.getCustomMenuItems().then(function (items) {
            _this.customItems = items;
        });
    };
    /**
     * Open a handler.
     *
     * @param handler Handler to open.
     */
    CoreMainMenuMorePage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    /**
     * Open an embedded custom item.
     *
     * @param item Item to open.
     */
    CoreMainMenuMorePage.prototype.openItem = function (item) {
        this.navCtrl.push('CoreViewerIframePage', { title: item.label, url: item.url });
    };
    /**
     * Open app settings page.
     */
    CoreMainMenuMorePage.prototype.openAppSettings = function () {
        this.navCtrl.push('CoreAppSettingsPage');
    };
    /**
     * Open site settings page.
     */
    CoreMainMenuMorePage.prototype.openSitePreferences = function () {
        this.navCtrl.push('CoreSitePreferencesPage');
    };
    /**
     * Scan and treat a QR code.
     */
    CoreMainMenuMorePage.prototype.scanQR = function () {
        var _this = this;
        // Scan for a QR code.
        this.utils.scanQR().then(function (text) {
            if (text) {
                if (_this.urlSchemesProvider.isCustomURL(text)) {
                    // Is a custom URL scheme, handle it.
                    _this.urlSchemesProvider.handleCustomURL(text).catch(function (error) {
                        _this.urlSchemesProvider.treatHandleCustomURLError(error);
                    });
                }
                else if (/^[^:]{2,}:\/\/[^ ]+$/i.test(text)) {
                    // Check if the app can handle the URL.
                    _this.linkHelper.handleLink(text, undefined, _this.navCtrl, true, true).then(function (treated) {
                        if (!treated) {
                            // Can't handle it, open it in browser.
                            _this.sitesProvider.getCurrentSite().openInBrowserWithAutoLoginIfSameSite(text);
                        }
                    });
                }
                else {
                    // It's not a URL, open it in a modal so the user can see it and copy it.
                    _this.textUtils.viewText(_this.translate.instant('core.qrscanner'), text, {
                        displayCopyButton: true,
                    });
                }
            }
        });
    };
    /**
     * Logout the user.
     */
    CoreMainMenuMorePage.prototype.logout = function () {
        this.sitesProvider.logout();
    };
    CoreMainMenuMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-mainmenu-more',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\mainmenu\pages\more\more.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="siteName" contextLevel="system" [contextInstanceId]="0"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <a ion-item core-user-link [userId]="siteInfo.userid" text-wrap>\n\n            <ion-avatar core-user-avatar [user]="siteInfo" item-start></ion-avatar>\n\n            <h2>{{siteInfo.fullname}}</h2>\n\n            <ion-note class="core-note-block"><core-format-text [text]="siteName" contextLevel="system" [contextInstanceId]="0" [wsNotFiltered]="true"></core-format-text></ion-note>\n\n            <ion-note class="core-note-block">{{ siteUrl }}</ion-note>\n\n        </a>\n\n        <ion-item-divider></ion-item-divider>\n\n        <ion-item text-center *ngIf="(!handlers || !handlers.length) && !handlersLoaded">\n\n            <ion-spinner></ion-spinner>\n\n        </ion-item>\n\n        <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-moremenu-handler\', handler.class || \'\']" (click)="openHandler(handler)" title="{{ handler.title | translate }}" detail-push>\n\n            <core-icon [name]="handler.icon" item-start></core-icon>\n\n            <h2>{{ handler.title | translate}}</h2>\n\n            <ion-badge item-end *ngIf="handler.showBadge" [hidden]="handler.loading || !handler.badge">{{handler.badge}}</ion-badge>\n\n            <ion-spinner item-end *ngIf="handler.showBadge && handler.loading"></ion-spinner>\n\n        </a>\n\n        <div *ngFor="let item of customItems" class="core-moremenu-customitem">\n\n            <a ion-item *ngIf="item.type != \'embedded\'" [href]="item.url" core-link [capture]="item.type == \'app\'" [inApp]="item.type == \'inappbrowser\'" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <h2>{{item.label}}</h2>\n\n            </a>\n\n            <a ion-item *ngIf="item.type == \'embedded\'" (click)="openItem(item)" title="{{item.label}}">\n\n                <core-icon [name]="item.icon" item-start></core-icon>\n\n                <h2>{{item.label}}</h2>\n\n            </a>\n\n        </div>\n\n        <a ion-item *ngIf="showScanQR" (click)="scanQR()">\n\n            <core-icon name="fa-qrcode" item-start aria-hidden="true"></core-icon>\n\n            <h2>{{ \'core.scanqr\' | translate }}</h2>\n\n        </a>\n\n        <a *ngIf="showWeb" ion-item [href]="siteInfo.siteurl" core-link autoLogin="yes" title="{{ \'core.mainmenu.website\' | translate }}">\n\n            <ion-icon name="globe" item-start aria-hidden="true"></ion-icon>\n\n            <h2>{{ \'core.mainmenu.website\' | translate }}</h2>\n\n        </a>\n\n        <a *ngIf="showHelp" ion-item [href]="docsUrl" core-link autoLogin="no" title="{{ \'core.mainmenu.help\' | translate }}">\n\n            <ion-icon name="help-buoy" item-start aria-hidden="true"></ion-icon>\n\n            <h2>{{ \'core.mainmenu.help\' | translate }}</h2>\n\n        </a>\n\n        <a ion-item (click)="openSitePreferences()" title="{{ \'core.settings.preferences\' | translate }}">\n\n            <core-icon name="fa-wrench" item-start></core-icon>\n\n            <h2>{{ \'core.settings.preferences\' | translate }}</h2>\n\n        </a>\n\n                <a ion-item (click)="logout()" title="{{ logoutLabel | translate }}">\n\n            <ion-icon name="log-out" item-start aria-hidden="true"></ion-icon>\n\n            <h2>{{ logoutLabel | translate }}</h2>\n\n        </a>\n\n        <ion-item-divider></ion-item-divider>\n\n        <a ion-item (click)="openAppSettings()" title="{{ \'core.settings.appsettings\' | translate }}">\n\n            <core-icon name="fa-cogs" item-start></core-icon>\n\n            <h2>{{ \'core.settings.appsettings\' | translate }}</h2>\n\n        </a>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\mainmenu\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_delegate__["a" /* CoreMainMenuDelegate */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_mainmenu__["a" /* CoreMainMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_login_providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__core_contentlinks_providers_helper__["b" /* CoreContentLinksHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urlschemes__["b" /* CoreCustomURLSchemesProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], CoreMainMenuMorePage);
    return CoreMainMenuMorePage;
}());

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=33.js.map