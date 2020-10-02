webpackJsonp([90],{

/***/ 2102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPasswordModalPageModule", function() { return AddonModLessonPasswordModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_modal__ = __webpack_require__(2258);
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






var AddonModLessonPasswordModalPageModule = /** @class */ (function () {
    function AddonModLessonPasswordModalPageModule() {
    }
    AddonModLessonPasswordModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_modal__["a" /* AddonModLessonPasswordModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_modal__["a" /* AddonModLessonPasswordModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModLessonPasswordModalPageModule);
    return AddonModLessonPasswordModalPageModule;
}());

//# sourceMappingURL=password-modal.module.js.map

/***/ }),

/***/ 2258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModLessonPasswordModalPage; });
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
 * Modal that asks the password for a lesson.
 */
var AddonModLessonPasswordModalPage = /** @class */ (function () {
    function AddonModLessonPasswordModalPage(viewCtrl, eventsProvider, sitesProvider, domUtils) {
        this.viewCtrl = viewCtrl;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
    }
    /**
     * Send the password back.
     *
     * @param e Event.
     * @param password The input element.
     */
    AddonModLessonPasswordModalPage.prototype.submitPassword = function (e, password) {
        e.preventDefault();
        e.stopPropagation();
        this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss(password.value);
    };
    /**
     * Close modal.
     */
    AddonModLessonPasswordModalPage.prototype.closeModal = function () {
        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('passwordForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModLessonPasswordModalPage.prototype, "formElement", void 0);
    AddonModLessonPasswordModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-lesson-password-modal',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\password-modal\password-modal.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.login.password\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="addon-mod_lesson-password-modal">\n\n    <form ion-list (ngSubmit)="submitPassword($event, passwordinput)" #passwordForm>\n\n        <ion-item>\n\n            <core-show-password item-content [name]="\'password\'">\n\n                <ion-label>{{ \'addon.mod_lesson.enterpassword\' | translate }}</ion-label>\n\n                <ion-input name="password" type="password" placeholder="{{ \'core.login.password\' | translate }}" [core-auto-focus] #passwordinput [clearOnEdit]="false"></ion-input>\n\n            </core-show-password>\n\n        </ion-item>\n\n        <ion-item>\n\n            <button ion-button block type="submit" icon-end>\n\n                {{ \'addon.mod_lesson.continue\' | translate }}\n\n                <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\password-modal\password-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */]])
    ], AddonModLessonPasswordModalPage);
    return AddonModLessonPasswordModalPage;
}());

//# sourceMappingURL=password-modal.js.map

/***/ })

});
//# sourceMappingURL=90.js.map