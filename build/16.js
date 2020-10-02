webpackJsonp([16],{

/***/ 2159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSerchPageModule", function() { return CoreTagSerchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(2315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_components_components_module__ = __webpack_require__(251);
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







var CoreTagSerchPageModule = /** @class */ (function () {
    function CoreTagSerchPageModule() {
    }
    CoreTagSerchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* CoreTagSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_search_components_components_module__["a" /* CoreSearchComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* CoreTagSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreTagSerchPageModule);
    return CoreTagSerchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 2315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreTagSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_contentlinks_providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_tag_providers_tag__ = __webpack_require__(134);
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
 * Page that displays most used tags and allows searching.
 */
var CoreTagSearchPage = /** @class */ (function () {
    function CoreTagSearchPage(navCtrl, navParams, appProvider, translate, domUtils, utils, textUtils, contentLinksHelper, tagProvider) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.translate = translate;
        this.domUtils = domUtils;
        this.utils = utils;
        this.textUtils = textUtils;
        this.contentLinksHelper = contentLinksHelper;
        this.tagProvider = tagProvider;
        this.collections = [];
        this.loaded = false;
        this.searching = false;
        this.collectionId = navParams.get('collectionId') || 0;
        this.query = navParams.get('query') || '';
    }
    /**
     * View loaded.
     */
    CoreTagSearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    CoreTagSearchPage.prototype.fetchData = function () {
        var _this = this;
        return Promise.all([
            this.fetchCollections(),
            this.fetchTags()
        ]).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading tags.');
        });
    };
    /**
     * Fetch tag collections.
     *
     * @return Resolved when done.
     */
    CoreTagSearchPage.prototype.fetchCollections = function () {
        var _this = this;
        return this.tagProvider.getTagCollections().then(function (collections) {
            collections.forEach(function (collection) {
                if (!collection.name && collection.isdefault) {
                    collection.name = _this.translate.instant('core.tag.defautltagcoll');
                }
            });
            _this.collections = collections;
        });
    };
    /**
     * Fetch tags.
     *
     * @return Resolved when done.
     */
    CoreTagSearchPage.prototype.fetchTags = function () {
        var _this = this;
        return this.tagProvider.getTagCloud(this.collectionId, undefined, undefined, this.query).then(function (cloud) {
            _this.cloud = cloud;
        });
    };
    /**
     * Go to tag index page.
     */
    CoreTagSearchPage.prototype.openTag = function (tag) {
        var url = this.textUtils.decodeURI(tag.viewurl);
        this.contentLinksHelper.handleLink(url, undefined, this.navCtrl);
    };
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    CoreTagSearchPage.prototype.refreshData = function (refresher) {
        var _this = this;
        this.utils.allPromises([
            this.tagProvider.invalidateTagCollections(),
            this.tagProvider.invalidateTagCloud(this.collectionId, undefined, undefined, this.query),
        ]).finally(function () {
            return _this.fetchData().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Search tags.
     *
     * @param query Search query.
     * @return Resolved when done.
     */
    CoreTagSearchPage.prototype.searchTags = function (query) {
        var _this = this;
        this.searching = true;
        this.query = query;
        this.appProvider.closeKeyboard();
        return this.fetchTags().catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading tags.');
        }).finally(function () {
            _this.searching = false;
        });
    };
    CoreTagSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-tag-search',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\tag\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.tag.searchtags\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-grid class="safe-area-page">\n\n        <ion-row>\n\n            <ion-col col-12 [attr.col-sm-6]="collections && collections.length > 1 ? \'\' : null">\n\n                <core-search-box (onSubmit)="searchTags($event)" (onClear)="searchTags(\'\')" [initialSearch]="query" [disabled]="searching" autocorrect="off" [spellcheck]="false" [autoFocus]="false" [lengthCheck]="0" searchArea="CoreTag"></core-search-box>\n\n            </ion-col>\n\n            <ion-col col-12 col-sm-6 *ngIf="collections && collections.length > 1">\n\n                <ion-select text-start [(ngModel)]="collectionId" (ngModelChange)="searchTags(query)" [disabled]="searching" interface="popover" class="core-button-select">\n\n                    <ion-option [value]="0">{{ \'core.tag.inalltagcoll\' | translate }}</ion-option>\n\n                    <ion-option *ngFor="let collection of collections" [value]="collection.id">{{ collection.name }}</ion-option>\n\n                </ion-select>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <core-loading [hideUntil]="loaded && !searching" class="safe-area-page">\n\n        <core-empty-box *ngIf="!cloud || !cloud.tags || !cloud.tags.length" icon="pricetags" [message]="\'core.tag.notagsfound\' | translate: {$a: query}"></core-empty-box>\n\n\n\n        <ng-container *ngIf="cloud && cloud.tags && cloud.tags.length > 0">\n\n            <div text-center class="core-tag-cloud">\n\n                <ion-badge *ngFor="let tag of cloud.tags" (click)="openTag(tag)" text-wrap>\n\n                   <span [class]="\'size\' + tag.size" >{{ tag.name }}</span>\n\n                </ion-badge>\n\n            </div>\n\n            <p *ngIf="cloud.tags.length < cloud.totalcount" text-center>\n\n                {{ \'core.tag.showingfirsttags\' | translate: {$a: cloud.tags.length} }}\n\n            </p>\n\n        </ng-container>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\tag\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__["b" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__core_contentlinks_providers_helper__["b" /* CoreContentLinksHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_tag_providers_tag__["a" /* CoreTagProvider */]])
    ], CoreTagSearchPage);
    return CoreTagSearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=16.js.map