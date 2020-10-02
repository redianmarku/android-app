webpackJsonp([29],{

/***/ 2190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPageModule", function() { return CoreSettingsDeviceInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deviceinfo__ = __webpack_require__(2348);
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







var CoreSettingsDeviceInfoPageModule = /** @class */ (function () {
    function CoreSettingsDeviceInfoPageModule() {
    }
    CoreSettingsDeviceInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__deviceinfo__["a" /* CoreSettingsDeviceInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__deviceinfo__["a" /* CoreSettingsDeviceInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsDeviceInfoPageModule);
    return CoreSettingsDeviceInfoPageModule;
}());

//# sourceMappingURL=deviceinfo.module.js.map

/***/ }),

/***/ 2348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsDeviceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_init__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_lang__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_local_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__configconstants__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_pushnotifications_providers_pushnotifications__ = __webpack_require__(94);
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
 * Page that displays the device information.
 */
var CoreSettingsDeviceInfoPage = /** @class */ (function () {
    function CoreSettingsDeviceInfoPage(platform, device, network, zone, appProvider, fileProvider, initDelegate, langProvider, sitesProvider, localNotificationsProvider, pushNotificationsProvider, utils, translate) {
        var _this = this;
        this.utils = utils;
        this.translate = translate;
        this.deviceInfo = {
            versionName: __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].versionname,
            versionCode: __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].versioncode,
            compilationTime: __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].compilationtime,
            lastCommit: __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].lastcommit,
            networkStatus: appProvider.isOnline() ? 'online' : 'offline',
            wifiConnection: appProvider.isWifi() ? 'yes' : 'no',
            localNotifAvailable: localNotificationsProvider.isAvailable() ? 'yes' : 'no',
            pushId: pushNotificationsProvider.getPushId(),
        };
        if (window.location && window.location.href) {
            var url = window.location.href;
            this.deviceInfo.locationHref = url.substr(0, url.indexOf('#'));
        }
        var navigator = window.navigator;
        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }
            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }
        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }
        if (appProvider.isMobile()) {
            this.deviceInfo.deviceType = platform.is('tablet') ? 'tablet' : 'phone';
            if (appProvider.isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            }
            else if (appProvider.isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            }
            else {
                var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = this.translate.instant('core.unknown');
                }
            }
        }
        else {
            this.deviceInfo.deviceType = appProvider.isDesktop() ? 'desktop' : 'browser';
            if (appProvider.isLinux()) {
                this.deviceInfo.deviceOs = 'linux';
                this.deviceOsTranslated = 'Linux';
            }
            else if (appProvider.isMac()) {
                this.deviceInfo.deviceOs = 'mac';
                this.deviceOsTranslated = 'MacOS';
            }
            else if (appProvider.isWindows()) {
                this.deviceInfo.deviceOs = 'windows';
                this.deviceOsTranslated = 'Windows';
            }
            else {
                var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = this.translate.instant('core.unknown');
                }
            }
        }
        langProvider.getCurrentLanguage().then(function (lang) {
            _this.deviceInfo.currentLanguage = lang;
            _this.currentLangName = __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].languages[lang];
        });
        if (fileProvider.isAvailable()) {
            fileProvider.getBasePath().then(function (basepath) {
                _this.deviceInfo.fileSystemRoot = basepath;
                _this.fsClickable = fileProvider.usesHTMLAPI();
            });
        }
        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }
        var currentSite = sitesProvider.getCurrentSite();
        this.deviceInfo.siteUrl = (currentSite && currentSite.getURL()) ||
            (typeof __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].siteurl == 'string' && __WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].siteurl);
        this.deviceInfo.isPrefixedUrl = !!__WEBPACK_IMPORTED_MODULE_12__configconstants__["a" /* CoreConfigConstants */].siteurl;
        this.deviceInfo.siteId = currentSite && currentSite.getId();
        this.deviceInfo.siteVersion = currentSite && currentSite.getInfo().release;
        // Refresh online status when changes.
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.deviceInfo.networkStatus = appProvider.isOnline() ? 'online' : 'offline';
            });
        });
    }
    /**
     * Copies device info into the clipboard.
     */
    CoreSettingsDeviceInfoPage.prototype.copyInfo = function () {
        this.utils.copyToClipboard(JSON.stringify(this.deviceInfo));
    };
    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    CoreSettingsDeviceInfoPage.prototype.copyItemInfo = function (e) {
        e.preventDefault();
        var el = e.target;
        this.utils.copyToClipboard(el.closest('ion-item').textContent.trim());
    };
    /**
     * Page destroyed.
     */
    CoreSettingsDeviceInfoPage.prototype.ngOnDestroy = function () {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    CoreSettingsDeviceInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-deviceinfo',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\deviceinfo\deviceinfo.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.deviceinfo\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="copyInfo()" [attr.aria-label]="\'core.settings.copyinfo\' | translate">\n\n                <ion-icon name="copy"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item text-wrap (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.appversion\' | translate}}</h2>\n\n        <p>{{ deviceInfo.versionName }} ({{ deviceInfo.versionCode }})</p>\n\n    </ion-item>\n\n    <ion-item text-wrap (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.compilationinfo\' | translate }}</h2>\n\n        <p *ngIf="deviceInfo.compilationTime">{{ deviceInfo.compilationTime | coreFormatDate: "LLL Z": false }}</p>\n\n        <p *ngIf="deviceInfo.lastCommit">{{ deviceInfo.lastCommit }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.siteUrl" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.siteinfo\' | translate }}<ng-container *ngIf="deviceInfo.isPrefixedUrl"> *</ng-container></h2>\n\n        <p><a [href]="deviceInfo.siteUrl" core-link auto-login="yes">{{ deviceInfo.siteUrl }}</a></p>\n\n        <p *ngIf="deviceInfo.siteVersion">{{ deviceInfo.siteVersion }}</p>\n\n        <p *ngIf="deviceInfo.siteId">{{ deviceInfo.siteId }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.fileSystemRoot" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.filesystemroot\' | translate}}</h2>\n\n        <p><a *ngIf="fsClickable" [href]="deviceInfo.fileSystemRoot" core-link auto-login="no">{{ deviceInfo.fileSystemRoot }}</a></p>\n\n        <p *ngIf="!fsClickable">{{ deviceInfo.fileSystemRoot }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.userAgent" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.navigatoruseragent\' | translate}}</h2>\n\n        <p>{{ deviceInfo.userAgent }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.browserLanguage" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.navigatorlanguage\' | translate}}</h2>\n\n        <p>{{ deviceInfo.browserLanguage }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.currentLanguage" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.currentlanguage\' | translate}}</h2>\n\n        <p>{{ currentLangName }} ({{ deviceInfo.currentLanguage }})</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.locationHref" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.locationhref\' | translate}}</h2>\n\n        <p>{{ deviceInfo.locationHref }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.deviceType" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.displayformat\' | translate}}</h2>\n\n        <p>{{ \'core.\' + deviceInfo.deviceType | translate }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.deviceOs && deviceOsTranslated" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.deviceos\' | translate}}</h2>\n\n        <p>{{ deviceOsTranslated }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.screen" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.screen\' | translate}}</h2>\n\n        <p>{{ deviceInfo.screen | translate }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.networkstatus\' | translate}}</h2>\n\n        <p>{{ \'core.\' + deviceInfo.networkStatus | translate }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.wificonnection\' | translate}}</h2>\n\n        <p>{{ \'core.\' + deviceInfo.wifiConnection | translate }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.cordovaVersion" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.cordovaversion\' | translate}}</h2>\n\n        <p>{{ deviceInfo.cordovaVersion }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.platform" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.cordovadeviceplatform\' | translate}}</h2>\n\n        <p>{{ deviceInfo.platform }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.osVersion" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.cordovadeviceosversion\' | translate}}</h2>\n\n        <p>{{ deviceInfo.osVersion }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.model" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.cordovadevicemodel\' | translate}}</h2>\n\n        <p>{{ deviceInfo.model }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.uuid" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.cordovadeviceuuid\' | translate}}</h2>\n\n        <p>{{ deviceInfo.uuid }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="deviceInfo.pushId" (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.pushid\' | translate}}</h2>\n\n        <p>{{ deviceInfo.pushId }}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap (longPress)="copyItemInfo($event)">\n\n        <h2>{{ \'core.settings.localnotifavailable\' | translate}}</h2>\n\n        <p>{{ \'core.\' + deviceInfo.localNotifAvailable | translate }}</p>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\deviceinfo\deviceinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file__["b" /* CoreFileProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_init__["a" /* CoreInitDelegate */],
            __WEBPACK_IMPORTED_MODULE_8__providers_lang__["a" /* CoreLangProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_13__core_pushnotifications_providers_pushnotifications__["a" /* CorePushNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], CoreSettingsDeviceInfoPage);
    return CoreSettingsDeviceInfoPage;
}());

//# sourceMappingURL=deviceinfo.js.map

/***/ })

});
//# sourceMappingURL=29.js.map