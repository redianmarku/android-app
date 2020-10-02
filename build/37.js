webpackJsonp([37],{

/***/ 2141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteOnboardingPageModule", function() { return CoreLoginSiteOnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_onboarding__ = __webpack_require__(2297);
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






var CoreLoginSiteOnboardingPageModule = /** @class */ (function () {
    function CoreLoginSiteOnboardingPageModule() {
    }
    CoreLoginSiteOnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_onboarding__["a" /* CoreLoginSiteOnboardingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_onboarding__["a" /* CoreLoginSiteOnboardingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreLoginSiteOnboardingPageModule);
    return CoreLoginSiteOnboardingPageModule;
}());

//# sourceMappingURL=site-onboarding.module.js.map

/***/ }),

/***/ 2297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteOnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(91);
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
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
var CoreLoginSiteOnboardingPage = /** @class */ (function () {
    function CoreLoginSiteOnboardingPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.step = 0;
    }
    /**
     * Go to next step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.next = function (e) {
        e.stopPropagation();
        this.step++;
    };
    /**
     * Go to previous step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.previous = function (e) {
        e.stopPropagation();
        if (this.step == 0) {
            this.viewCtrl.dismiss();
        }
        else {
            this.step--;
        }
    };
    /**
     * Close modal.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.skip = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        this.viewCtrl.dismiss();
    };
    /**
     * Create a site.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.gotoWeb = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtils */].instance.openInBrowser('https://moodle.com/getstarted/');
        this.viewCtrl.dismiss();
    };
    /**
     * Saves the onboarding has finished.
     */
    CoreLoginSiteOnboardingPage.prototype.saveOnboardingDone = function () {
        __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* CoreConfig */].instance.set(__WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].ONBOARDING_DONE, 1);
    };
    CoreLoginSiteOnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-onboarding',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\site-onboarding\site-onboarding.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons step>\n\n            <button ion-button icon-only (click)="previous($event)" [attr.aria-label]="\'core.back\' | translate">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="skip($event)" [attr.aria-label]="\'core.skip\' | translate">\n\n                {{\'core.skip\' | translate}}\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div>\n\n        <div text-center padding class="core-login-site-logo">\n\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n\n        </div>\n\n\n\n        <h3 class="core-login-onboarding-step">\n\n            {{\'core.login.onboardingwelcome\' | translate}}\n\n        </h3>\n\n\n\n        <div *ngIf="step == 0" class="core-login-onboarding-step">\n\n            <a ion-button block (click)="skip($event)" margin-bottom color="light">{{\'core.login.onboardingimalearner\' | translate}}</a>\n\n            <a ion-button block (click)="next($event)" margin-bottom color="light">{{\'core.login.onboardingimaneducator\' | translate}}</a>\n\n        </div>\n\n\n\n        <div *ngIf="step == 1" class="core-login-onboarding-step">\n\n            <p class="core-login-onboarding-text">\n\n                {{ \'core.login.onboardingtoconnect\' | translate }}\n\n            </p>\n\n            <a ion-button block (click)="skip($event)" margin-bottom color="light">{{ \'core.login.onboardingialreadyhaveasite\' | translate }}</a>\n\n            <a ion-button block (click)="next($event)" margin-bottom>{{ \'core.login.onboardingineedasite\' | translate }}</a>\n\n        </div>\n\n\n\n        <div *ngIf="step == 2" class="core-login-onboarding-step">\n\n            <ul class="core-login-onboarding-text">\n\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingcreatemanagecourses\' | translate }}</li>\n\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingenrolmanagestudents\' | translate }}</li>\n\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingprovidefeedback\' | translate }}</li>\n\n            </ul>\n\n\n\n            <a ion-button block (click)="gotoWeb($event)" margin-bottom>{{ \'core.login.onboardinggetstarted\' | translate }}</a>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\login\pages\site-onboarding\site-onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], CoreLoginSiteOnboardingPage);
    return CoreLoginSiteOnboardingPage;
}());

//# sourceMappingURL=site-onboarding.js.map

/***/ })

});
//# sourceMappingURL=37.js.map