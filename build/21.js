webpackJsonp([21],{

/***/ 2154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPageModule", function() { return CoreSiteHomeIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(2310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(1049);
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






var CoreSiteHomeIndexPageModule = /** @class */ (function () {
    function CoreSiteHomeIndexPageModule() {
    }
    CoreSiteHomeIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CoreSiteHomeIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreSiteHomeComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* CoreSiteHomeIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSiteHomeIndexPageModule);
    return CoreSiteHomeIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSiteHomeIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_course_providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_index__ = __webpack_require__(1050);
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
 * Page that displays site home index.
 */
var CoreSiteHomeIndexPage = /** @class */ (function () {
    function CoreSiteHomeIndexPage(navParams, navCtrl, courseHelper, sitesProvider) {
        var module = navParams.get('module'), modParams = navParams.get('modParams');
        if (module) {
            courseHelper.openModule(navCtrl, module, sitesProvider.getCurrentSite().getSiteHomeId(), undefined, modParams);
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_index_index__["a" /* CoreSiteHomeIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_index_index__["a" /* CoreSiteHomeIndexComponent */])
    ], CoreSiteHomeIndexPage.prototype, "siteHomeComponent", void 0);
    CoreSiteHomeIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-sitehome-index',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sitehome\pages\index\index.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.sitehome.sitehome\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="siteHomeComponent && siteHomeComponent.dataLoaded" (ionRefresh)="siteHomeComponent.doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-sitehome-index></core-sitehome-index>\n\n</ion-content>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sitehome\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__core_course_providers_helper__["b" /* CoreCourseHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sites__["b" /* CoreSitesProvider */]])
    ], CoreSiteHomeIndexPage);
    return CoreSiteHomeIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=21.js.map