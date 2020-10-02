webpackJsonp([132],{

/***/ 2070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessageOutputAirnotifierDevicesPageModule", function() { return AddonMessageOutputAirnotifierDevicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices__ = __webpack_require__(2226);
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






var AddonMessageOutputAirnotifierDevicesPageModule = /** @class */ (function () {
    function AddonMessageOutputAirnotifierDevicesPageModule() {
    }
    AddonMessageOutputAirnotifierDevicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__devices__["a" /* AddonMessageOutputAirnotifierDevicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__devices__["a" /* AddonMessageOutputAirnotifierDevicesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessageOutputAirnotifierDevicesPageModule);
    return AddonMessageOutputAirnotifierDevicesPageModule;
}());

//# sourceMappingURL=devices.module.js.map

/***/ }),

/***/ 2226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessageOutputAirnotifierDevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pushnotifications_providers_pushnotifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_airnotifier__ = __webpack_require__(474);
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
 * Page that displays the list of devices.
 */
var AddonMessageOutputAirnotifierDevicesPage = /** @class */ (function () {
    function AddonMessageOutputAirnotifierDevicesPage(domUtils, airnotifierProivder, pushNotificationsProvider) {
        this.domUtils = domUtils;
        this.airnotifierProivder = airnotifierProivder;
        this.pushNotificationsProvider = pushNotificationsProvider;
        this.devices = [];
        this.devicesLoaded = false;
    }
    /**
     * View loaded.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.ionViewDidLoad = function () {
        this.fetchDevices();
    };
    /**
     * Fetches the list of devices.
     *
     * @return Promise resolved when done.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.fetchDevices = function () {
        var _this = this;
        return this.airnotifierProivder.getUserDevices().then(function (devices) {
            var pushId = _this.pushNotificationsProvider.getPushId();
            // Convert enabled to boolean and search current device.
            devices.forEach(function (device) {
                device.enable = !!device.enable;
                device.current = pushId && pushId == device.pushid;
            });
            _this.devices = devices;
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.devicesLoaded = true;
        });
    };
    /**
     * Update list of devices after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.updateDevicesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
        }
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updateDevices();
        }, 5000);
    };
    /**
     * Fetch devices. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.updateDevices = function () {
        var _this = this;
        this.airnotifierProivder.invalidateUserDevices().finally(function () {
            _this.airnotifierProivder.getUserDevices();
        });
    };
    /**
     * Refresh the list of devices.
     *
     * @param refresher Refresher.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.refreshDevices = function (refresher) {
        var _this = this;
        this.airnotifierProivder.invalidateUserDevices().finally(function () {
            _this.fetchDevices().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Enable or disable a certain device.
     *
     * @param device The device object.
     * @param enable True to enable the device, false to disable it.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.enableDevice = function (device, enable) {
        var _this = this;
        device.updating = true;
        this.airnotifierProivder.enableDevice(device.id, enable).then(function () {
            // Update the list of devices since it was modified.
            _this.updateDevicesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            device.enable = !device.enable;
        }).finally(function () {
            device.updating = false;
        });
    };
    /**
     * Page destroyed.
     */
    AddonMessageOutputAirnotifierDevicesPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update devices, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updateDevices();
        }
    };
    AddonMessageOutputAirnotifierDevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-message-output-airnotifier-devices',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messageoutput\airnotifier\pages\devices\devices.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.messageoutput_airnotifier.processorsettingsdesc\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="devicesLoaded" (ionRefresh)="refreshDevices($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="devicesLoaded">\n\n        <ion-list>\n\n            <ion-item text-wrap *ngFor="let device of devices">\n\n                <ion-label [class.core-bold]="device.current">\n\n                    {{ device.name }} {{ device.model }} {{ device.platform }} {{ device.version }}\n\n                    <span *ngIf="device.current">({{ \'core.currentdevice\' | translate }})</span>\n\n                </ion-label>\n\n                <ion-spinner *ngIf="device.updating" item-end></ion-spinner>\n\n                <ion-toggle [disabled]="device.updating" [(ngModel)]="device.enable" (ngModelChange)="enableDevice(device, device.enable)"></ion-toggle>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messageoutput\airnotifier\pages\devices\devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_airnotifier__["a" /* AddonMessageOutputAirnotifierProvider */],
            __WEBPACK_IMPORTED_MODULE_2__core_pushnotifications_providers_pushnotifications__["a" /* CorePushNotificationsProvider */]])
    ], AddonMessageOutputAirnotifierDevicesPage);
    return AddonMessageOutputAirnotifierDevicesPage;
}());

//# sourceMappingURL=devices.js.map

/***/ })

});
//# sourceMappingURL=132.js.map