webpackJsonp([50],{

/***/ 2132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesSelfEnrolPasswordPageModule", function() { return CoreCoursesSelfEnrolPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__self_enrol_password__ = __webpack_require__(2288);
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






var CoreCoursesSelfEnrolPasswordPageModule = /** @class */ (function () {
    function CoreCoursesSelfEnrolPasswordPageModule() {
    }
    CoreCoursesSelfEnrolPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__self_enrol_password__["a" /* CoreCoursesSelfEnrolPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__self_enrol_password__["a" /* CoreCoursesSelfEnrolPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreCoursesSelfEnrolPasswordPageModule);
    return CoreCoursesSelfEnrolPasswordPageModule;
}());

//# sourceMappingURL=self-enrol-password.module.js.map

/***/ }),

/***/ 2288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesSelfEnrolPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
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
 * Page that displays a form to enter a password to self enrol in a course.
 */
var CoreCoursesSelfEnrolPasswordPage = /** @class */ (function () {
    function CoreCoursesSelfEnrolPasswordPage(viewCtrl, eventsProvider, sitesProvider, domUtils) {
        this.viewCtrl = viewCtrl;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
    }
    /**
     * Close help modal.
     */
    CoreCoursesSelfEnrolPasswordPage.prototype.close = function () {
        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss();
    };
    /**
     * Submit password.
     *
     * @param e Event.
     * @param password Password to submit.
     */
    CoreCoursesSelfEnrolPasswordPage.prototype.submitPassword = function (e, password) {
        e.preventDefault();
        e.stopPropagation();
        this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss(password);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('enrolPasswordForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreCoursesSelfEnrolPasswordPage.prototype, "formElement", void 0);
    CoreCoursesSelfEnrolPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-self-enrol-password',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\self-enrol-password\self-enrol-password.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.courses.selfenrolment\' | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="close()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form ion-list #f="ngForm" (ngSubmit)="submitPassword($event, f.value.password)" #enrolPasswordForm>\n\n        <ion-item>\n\n            <core-show-password item-content [name]="\'password\'">\n\n                <ion-input text-wrap class="core-ioninput-password" name="password" type="password" placeholder="{{ \'core.courses.password\' | translate }}" ngModel [core-auto-focus] [clearOnEdit]="false"></ion-input>\n\n            </core-show-password>\n\n        </ion-item>\n\n        <ion-item>\n\n            <button ion-button block [disabled]="!f.value.password">{{ \'core.courses.enrolme\' | translate }}</button>\n\n        </ion-item>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\self-enrol-password\self-enrol-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */]])
    ], CoreCoursesSelfEnrolPasswordPage);
    return CoreCoursesSelfEnrolPasswordPage;
}());

//# sourceMappingURL=self-enrol-password.js.map

/***/ })

});
//# sourceMappingURL=50.js.map