webpackJsonp([141],{

/***/ 2061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPageModule", function() { return AddonCalendarSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
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






var AddonCalendarSettingsPageModule = /** @class */ (function () {
    function AddonCalendarSettingsPageModule() {
    }
    AddonCalendarSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonCalendarSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonCalendarSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarSettingsPageModule);
    return AddonCalendarSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 2217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
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
 * Page that displays the calendar settings.
 */
var AddonCalendarSettingsPage = /** @class */ (function () {
    function AddonCalendarSettingsPage(calendarProvider, eventsProvider, sitesProvider) {
        this.calendarProvider = calendarProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.defaultTime = 0;
    }
    /**
     * View loaded.
     */
    AddonCalendarSettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.calendarProvider.getDefaultNotificationTime().then(function (time) {
            _this.defaultTime = time;
        });
    };
    /**
     * Update default time.
     *
     * @param newTime New time.
     */
    AddonCalendarSettingsPage.prototype.updateDefaultTime = function (newTime) {
        this.calendarProvider.setDefaultNotificationTime(newTime);
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_1__providers_calendar__["a" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, { time: newTime }, this.sitesProvider.getCurrentSiteId());
    };
    AddonCalendarSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-calendar-settings',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.settings\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{ \'addon.calendar.defaultnotificationtime\' | translate }}</ion-label>\n\n            <ion-select [(ngModel)]="defaultTime" (ionChange)="updateDefaultTime($event)" interface="action-sheet">\n\n                <ion-option value="0">{{ \'core.settings.disabled\' | translate }}</ion-option>\n\n                <ion-option value="10">{{ 600 | coreDuration }}</ion-option>\n\n                <ion-option value="30">{{ 1800 | coreDuration }}</ion-option>\n\n                <ion-option value="60">{{ 3600 | coreDuration }}</ion-option>\n\n                <ion-option value="120">{{ 7200 | coreDuration }}</ion-option>\n\n                <ion-option value="360">{{ 21600 | coreDuration }}</ion-option>\n\n                <ion-option value="720">{{ 43200 | coreDuration }}</ion-option>\n\n                <ion-option value="1440">{{ 86400 | coreDuration }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_calendar__["a" /* AddonCalendarProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */]])
    ], AddonCalendarSettingsPage);
    return AddonCalendarSettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=141.js.map