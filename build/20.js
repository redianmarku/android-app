webpackJsonp([20],{

/***/ 2155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsModuleIndexPageModule", function() { return CoreSitePluginsModuleIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_index__ = __webpack_require__(2311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(1054);
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






/**
 * Module to lazy load the page.
 */
var CoreSitePluginsModuleIndexPageModule = /** @class */ (function () {
    function CoreSitePluginsModuleIndexPageModule() {
    }
    CoreSitePluginsModuleIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__module_index__["a" /* CoreSitePluginsModuleIndexPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreSitePluginsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__module_index__["a" /* CoreSitePluginsModuleIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSitePluginsModuleIndexPageModule);
    return CoreSitePluginsModuleIndexPageModule;
}());

//# sourceMappingURL=module-index.module.js.map

/***/ }),

/***/ 2311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSitePluginsModuleIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_module_index_module_index__ = __webpack_require__(325);
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
 * Page to render the index page of a module site plugin.
 */
var CoreSitePluginsModuleIndexPage = /** @class */ (function () {
    function CoreSitePluginsModuleIndexPage(params) {
        this.title = params.get('title');
        this.module = params.get('module');
        this.courseId = params.get('courseId');
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    CoreSitePluginsModuleIndexPage.prototype.refreshData = function (refresher) {
        this.content.doRefresh().finally(function () {
            refresher.complete();
        });
    };
    /**
     * The page is about to enter and become the active page.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewWillEnter = function () {
        this.content.callComponentFunction('ionViewWillEnter');
    };
    /**
     * The page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewDidEnter = function () {
        this.content.callComponentFunction('ionViewDidEnter');
    };
    /**
     * The page is about to leave and no longer be the active page.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewWillLeave = function () {
        this.content.callComponentFunction('ionViewWillLeave');
    };
    /**
     * The page has finished leaving and is no longer the active page.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewDidLeave = function () {
        this.content.callComponentFunction('ionViewDidLeave');
    };
    /**
     * The page is about to be destroyed and have its elements removed.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewWillUnload = function () {
        this.content.callComponentFunction('ionViewWillUnload');
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    CoreSitePluginsModuleIndexPage.prototype.ionViewCanLeave = function () {
        return this.content.callComponentFunction('ionViewCanLeave');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_module_index_module_index__["a" /* CoreSitePluginsModuleIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_module_index_module_index__["a" /* CoreSitePluginsModuleIndexComponent */])
    ], CoreSitePluginsModuleIndexPage.prototype, "content", void 0);
    CoreSitePluginsModuleIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-site-plugins-module-index',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\siteplugins\pages\module-index\module-index.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <!-- If the site plugin defines some buttons using core-nav-buttons, they will be added here. -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="content && content.ptrEnabled && content.content && content.content.dataLoaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-site-plugins-module-index [module]="module" [courseId]="courseId" [pageTitle]="title"></core-site-plugins-module-index>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\siteplugins\pages\module-index\module-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreSitePluginsModuleIndexPage);
    return CoreSitePluginsModuleIndexPage;
}());

//# sourceMappingURL=module-index.js.map

/***/ })

});
//# sourceMappingURL=20.js.map