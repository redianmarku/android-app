webpackJsonp([19],{

/***/ 2156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsPluginPageModule", function() { return CoreSitePluginsPluginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugin_page__ = __webpack_require__(2312);
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
var CoreSitePluginsPluginPageModule = /** @class */ (function () {
    function CoreSitePluginsPluginPageModule() {
    }
    CoreSitePluginsPluginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__plugin_page__["a" /* CoreSitePluginsPluginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreSitePluginsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__plugin_page__["a" /* CoreSitePluginsPluginPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSitePluginsPluginPageModule);
    return CoreSitePluginsPluginPageModule;
}());

//# sourceMappingURL=plugin-page.module.js.map

/***/ }),

/***/ 2312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSitePluginsPluginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_plugin_content_plugin_content__ = __webpack_require__(140);
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
 * Page to render a site plugin page.
 */
var CoreSitePluginsPluginPage = /** @class */ (function () {
    function CoreSitePluginsPluginPage(params) {
        this.title = params.get('title');
        this.component = params.get('component');
        this.method = params.get('method');
        this.args = params.get('args');
        this.initResult = params.get('initResult');
        this.jsData = params.get('jsData');
        this.preSets = params.get('preSets');
        this.ptrEnabled = !__WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtils */].instance.isFalseOrZero(params.get('ptrEnabled'));
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    CoreSitePluginsPluginPage.prototype.refreshData = function (refresher) {
        this.content.refreshContent(false).finally(function () {
            refresher.complete();
        });
    };
    /**
     * The page is about to enter and become the active page.
     */
    CoreSitePluginsPluginPage.prototype.ionViewWillEnter = function () {
        this.content.callComponentFunction('ionViewWillEnter');
    };
    /**
     * The page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
     */
    CoreSitePluginsPluginPage.prototype.ionViewDidEnter = function () {
        this.content.callComponentFunction('ionViewDidEnter');
    };
    /**
     * The page is about to leave and no longer be the active page.
     */
    CoreSitePluginsPluginPage.prototype.ionViewWillLeave = function () {
        this.content.callComponentFunction('ionViewWillLeave');
    };
    /**
     * The page has finished leaving and is no longer the active page.
     */
    CoreSitePluginsPluginPage.prototype.ionViewDidLeave = function () {
        this.content.callComponentFunction('ionViewDidLeave');
    };
    /**
     * The page is about to be destroyed and have its elements removed.
     */
    CoreSitePluginsPluginPage.prototype.ionViewWillUnload = function () {
        this.content.callComponentFunction('ionViewWillUnload');
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    CoreSitePluginsPluginPage.prototype.ionViewCanLeave = function () {
        return this.content.callComponentFunction('ionViewCanLeave');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_plugin_content_plugin_content__["a" /* CoreSitePluginsPluginContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_plugin_content_plugin_content__["a" /* CoreSitePluginsPluginContentComponent */])
    ], CoreSitePluginsPluginPage.prototype, "content", void 0);
    CoreSitePluginsPluginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-site-plugins-plugin',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\siteplugins\pages\plugin-page\plugin-page.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title | translate }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <!-- If the site plugin defines some buttons using core-nav-buttons, they will be added here. -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="ptrEnabled && content && content.dataLoaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-site-plugins-plugin-content [component]="component" [method]="method" [args]="args" [preSets]="preSets" [initResult]="initResult" [data]="jsData" [pageTitle]="title"></core-site-plugins-plugin-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\siteplugins\pages\plugin-page\plugin-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreSitePluginsPluginPage);
    return CoreSitePluginsPluginPage;
}());

//# sourceMappingURL=plugin-page.js.map

/***/ })

});
//# sourceMappingURL=19.js.map