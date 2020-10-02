webpackJsonp([24],{

/***/ 2151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModule", function() { return CoreSettingsSynchronizationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__synchronization__ = __webpack_require__(2307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(68);
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







var CoreSettingsSynchronizationPageModule = /** @class */ (function () {
    function CoreSettingsSynchronizationPageModule() {
    }
    CoreSettingsSynchronizationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__synchronization__["a" /* CoreSettingsSynchronizationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__synchronization__["a" /* CoreSettingsSynchronizationPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSynchronizationPageModule);
    return CoreSettingsSynchronizationPageModule;
}());

//# sourceMappingURL=synchronization.module.js.map

/***/ }),

/***/ 2307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsSynchronizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_settings_providers_helper__ = __webpack_require__(1039);
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
 * Page that displays the synchronization settings.
 */
var CoreSettingsSynchronizationPage = /** @class */ (function () {
    function CoreSettingsSynchronizationPage(configProvider, eventsProvider, sitesProvider, domUtils, settingsHelper, translate) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.translate = translate;
        this.sites = [];
        this.sitesLoaded = false;
        this.currentSiteId = '';
        this.syncOnlyOnWifi = false;
        this.isDestroyed = false;
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
        this.sitesObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */].SITE_UPDATED, function (data) {
            _this.sitesProvider.getSite(data.siteId).then(function (site) {
                var siteInfo = site.getInfo();
                var siteEntry = _this.sites.find(function (siteEntry) { return siteEntry.id == site.id; });
                if (siteEntry) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.siteName = site.getSiteName();
                    siteEntry.fullName = siteInfo.fullname;
                }
            });
        });
    }
    /**
     * View loaded.
     */
    CoreSettingsSynchronizationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sitesProvider.getSortedSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.sitesLoaded = true;
        });
        this.configProvider.get(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, true).then(function (syncOnlyOnWifi) {
            _this.syncOnlyOnWifi = !!syncOnlyOnWifi;
        });
    };
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    CoreSettingsSynchronizationPage.prototype.syncOnlyOnWifiChanged = function () {
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_2__core_constants__["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
    };
    /**
     * Syncrhonizes a site.
     *
     * @param siteId Site ID.
     */
    CoreSettingsSynchronizationPage.prototype.synchronize = function (siteId) {
        var _this = this;
        // Using syncOnlyOnWifi false to force manual sync.
        this.settingsHelper.synchronizeSite(false, siteId).catch(function (error) {
            if (_this.isDestroyed) {
                return;
            }
            _this.domUtils.showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
        });
    };
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @return True if site is beeing synchronized, false otherwise.
     */
    CoreSettingsSynchronizationPage.prototype.isSynchronizing = function (siteId) {
        return !!this.settingsHelper.getSiteSyncPromise(siteId);
    };
    /**
     * Show information about sync actions.
     */
    CoreSettingsSynchronizationPage.prototype.showInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.synchronizenowhelp'));
    };
    /**
     * Page destroyed.
     */
    CoreSettingsSynchronizationPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.sitesObserver && this.sitesObserver.off();
    };
    CoreSettingsSynchronizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-synchronization',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\synchronization\synchronization.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.synchronization\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-navbar-buttons>\n\n    <button ion-button icon-only (click)="showInfo()" [attr.aria-label]="\'core.info\' | translate">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n    </button>\n\n</core-navbar-buttons>\n\n<ion-content>\n\n    <core-loading [hideUntil]="sitesLoaded">\n\n        <ion-item-divider>\n\n            <h2>{{ \'core.settings.syncsettings\' | translate }}</h2>\n\n        </ion-item-divider>\n\n        <ion-item text-wrap>\n\n            <ion-label>{{ \'core.settings.enablesyncwifi\' | translate }}</ion-label>\n\n            <ion-toggle item-end [(ngModel)]="syncOnlyOnWifi" (ngModelChange)="syncOnlyOnWifiChanged()">\n\n            </ion-toggle>\n\n        </ion-item>\n\n        <ion-item-divider>\n\n            <h2>{{ \'core.settings.sites\' | translate }}</h2>\n\n        </ion-item-divider>\n\n        <ion-item *ngFor="let site of sites" [class.core-primary-selected-item]="site.id == currentSiteId" text-wrap>\n\n            <h2><core-format-text [text]="site.siteName" clean="true" [siteId]="site.id"></core-format-text></h2>\n\n            <p>{{ site.fullName }}</p>\n\n            <p>{{ site.siteUrl }}</p>\n\n            <button ion-button icon-only clear item-end *ngIf="!isSynchronizing(site.id)" (click)="synchronize(site.id)" [title]="site.siteName" [attr.aria-label]="\'core.settings.synchronizenow\' | translate">\n\n                <ion-icon name="sync"></ion-icon>\n\n            </button>\n\n            <ion-spinner item-end *ngIf="isSynchronizing(site.id)"></ion-spinner>\n\n        </ion-item>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\synchronization\synchronization.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_config__["b" /* CoreConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__core_settings_providers_helper__["a" /* CoreSettingsHelper */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], CoreSettingsSynchronizationPage);
    return CoreSettingsSynchronizationPage;
}());

//# sourceMappingURL=synchronization.js.map

/***/ })

});
//# sourceMappingURL=24.js.map