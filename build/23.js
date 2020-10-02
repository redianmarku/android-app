webpackJsonp([23],{

/***/ 2152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesChooseSitePageModule", function() { return CoreSharedFilesChooseSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_site__ = __webpack_require__(2308);
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






var CoreSharedFilesChooseSitePageModule = /** @class */ (function () {
    function CoreSharedFilesChooseSitePageModule() {
    }
    CoreSharedFilesChooseSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreSharedFilesChooseSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreSharedFilesChooseSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSharedFilesChooseSitePageModule);
    return CoreSharedFilesChooseSitePageModule;
}());

//# sourceMappingURL=choose-site.module.js.map

/***/ }),

/***/ 2308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSharedFilesChooseSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_file__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(483);
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
 * Modal to display the list of sites to choose one to store a shared file.
 */
var CoreSharedFilesChooseSitePage = /** @class */ (function () {
    function CoreSharedFilesChooseSitePage(navCtrl, navParams, sharedFilesHelper, sitesProvider, domUtils, fileProvider) {
        this.navCtrl = navCtrl;
        this.sharedFilesHelper = sharedFilesHelper;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.fileProvider = fileProvider;
        this.filePath = navParams.get('filePath');
        this.isInbox = navParams.get('isInbox');
    }
    /**
     * Component being initialized.
     */
    CoreSharedFilesChooseSitePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filePath) {
            this.domUtils.showErrorModal('Error reading file.');
            this.navCtrl.pop();
            return;
        }
        var fileAndDir = this.fileProvider.getFileAndDirectoryFromPath(this.filePath);
        this.fileName = fileAndDir.name;
        // Get the file.
        this.fileProvider.getExternalFile(this.filePath).then(function (fe) {
            _this.fileEntry = fe;
            _this.fileName = _this.fileEntry.name;
        }).catch(function () {
            _this.domUtils.showErrorModal('Error reading file.');
            _this.navCtrl.pop();
        });
        // Get the sites.
        this.sitesProvider.getSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Store the file in a certain site.
     *
     * @param siteId Site ID.
     */
    CoreSharedFilesChooseSitePage.prototype.storeInSite = function (siteId) {
        var _this = this;
        this.loaded = false;
        this.sharedFilesHelper.storeSharedFileInSite(this.fileEntry, siteId, this.isInbox).then(function () {
            _this.navCtrl.pop();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    CoreSharedFilesChooseSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-shared-files-choose-site',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sharedfiles\pages\choose-site\choose-site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.sharedfiles.sharedfiles\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list>\n\n            <ion-item text-wrap>\n\n                <p class="item-heading">{{ \'core.sharedfiles.chooseaccountstorefile\' | translate }}</p>\n\n                <p>{{fileName}}</p>\n\n            </ion-item>\n\n            <a ion-item *ngFor="let site of sites" (click)="storeInSite(site.id)" detail-none>\n\n                <ion-avatar item-start>\n\n                    <img [src]="site.avatar" core-external-content [siteId]="site.id" alt="{{ \'core.pictureof\' | translate:{$a: site.fullname} }}" role="presentation" onError="this.src=\'assets/img/user-avatar.png\'">\n\n                </ion-avatar>\n\n                <h2>{{site.fullName}}</h2>\n\n                <p><core-format-text clean="true" [text]="site.siteName" [siteId]="site.id"></core-format-text></p>\n\n                <p>{{site.siteUrl}}</p>\n\n            </a>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sharedfiles\pages\choose-site\choose-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* CoreSharedFilesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_file__["b" /* CoreFileProvider */]])
    ], CoreSharedFilesChooseSitePage);
    return CoreSharedFilesChooseSitePage;
}());

//# sourceMappingURL=choose-site.js.map

/***/ })

});
//# sourceMappingURL=23.js.map