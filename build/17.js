webpackJsonp([17],{

/***/ 2158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexPageModule", function() { return CoreTagIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(2314);
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






var CoreTagIndexPageModule = /** @class */ (function () {
    function CoreTagIndexPageModule() {
    }
    CoreTagIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* CoreTagIndexPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* CoreTagIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreTagIndexPageModule);
    return CoreTagIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreTagIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_tag_providers_tag__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_tag_providers_area_delegate__ = __webpack_require__(138);
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
 * Page that displays the tag index.
 */
var CoreTagIndexPage = /** @class */ (function () {
    function CoreTagIndexPage(navParams, tagProvider, domUtils, tagAreaDelegate) {
        this.tagProvider = tagProvider;
        this.domUtils = domUtils;
        this.tagAreaDelegate = tagAreaDelegate;
        this.loaded = false;
        this.hasUnsupportedAreas = false;
        this.tagId = navParams.get('tagId') || 0;
        this.tagName = navParams.get('tagName') || '';
        this.collectionId = navParams.get('collectionId');
        this.areaId = navParams.get('areaId') || 0;
        this.fromContextId = navParams.get('fromContextId') || 0;
        this.contextId = navParams.get('contextId') || 0;
        this.recursive = navParams.get('recursive') || true;
    }
    /**
     * View loaded.
     */
    CoreTagIndexPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.splitviewCtrl.isOn() && _this.areas && _this.areas.length > 0) {
                var area = _this.areas.find(function (area) { return area.id == _this.areaId; });
                _this.openArea(area || _this.areas[0]);
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Fetch first page of tag index per area.
     *
     * @return Resolved when done.
     */
    CoreTagIndexPage.prototype.fetchData = function () {
        var _this = this;
        return this.tagProvider.getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0).then(function (areas) {
            _this.areas = [];
            _this.hasUnsupportedAreas = false;
            return Promise.all(areas.map(function (area) {
                return _this.tagAreaDelegate.parseContent(area.component, area.itemtype, area.content).then(function (items) {
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        _this.hasUnsupportedAreas = true;
                        return null;
                    }
                    return {
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: _this.tagAreaDelegate.getDisplayNameKey(area.component, area.itemtype),
                        items: items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    };
                });
            })).then(function (areas) {
                _this.areas = areas.filter(function (area) { return area != null; });
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading tag index');
        });
    };
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    CoreTagIndexPage.prototype.refreshData = function (refresher) {
        var _this = this;
        this.tagProvider.invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive).finally(function () {
            _this.fetchData().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to an index area.
     *
     * @param area Area.
     */
    CoreTagIndexPage.prototype.openArea = function (area) {
        this.selectedAreaId = area.id;
        var params = {
            tagId: this.tagId,
            tagName: this.tagName,
            collectionId: this.collectionId,
            areaId: area.id,
            fromContextId: this.fromContextId,
            contextId: this.contextId,
            recursive: this.recursive,
            areaNameKey: area.nameKey,
            componentName: area.component,
            itemType: area.itemType,
            items: area.items.slice(),
            canLoadMore: area.canLoadMore,
            nextPage: 1
        };
        this.splitviewCtrl.push('CoreTagIndexAreaPage', params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreTagIndexPage.prototype, "splitviewCtrl", void 0);
    CoreTagIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-tag-index',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\tag\pages\index\index.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.tag.tag\' | translate }}: {{ tagName }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="loaded">\n\n            <ion-list *ngIf="hasUnsupportedAreas || areas">\n\n                <ion-item text-wrap *ngIf="hasUnsupportedAreas" class="core-warning-item">\n\n                    <ion-icon item-start name="warning" color="warning"></ion-icon>\n\n                    {{ \'core.tag.warningareasnotsupported\' | translate }}\n\n                </ion-item>\n\n                <a ion-item text-wrap *ngFor="let area of areas" [title]="area.nameKey | translate" (click)="openArea(area)" [class.core-split-item-selected]="area.id == selectedAreaId">\n\n                    <h2>{{ area.nameKey | translate }}</h2>\n\n                    <ion-badge item-end *ngIf="area.badge">{{ area.badge }}</ion-badge>\n\n                </a>\n\n            </ion-list>\n\n            <core-empty-box icon="fa-tag" *ngIf="!hasUnsupportedAreas && (!areas || !areas.length)" [message]="\'core.tag.noresultsfor\' | translate: { $a: tagName }"></core-empty-box>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\tag\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__core_tag_providers_tag__["a" /* CoreTagProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__core_tag_providers_area_delegate__["a" /* CoreTagAreaDelegate */]])
    ], CoreTagIndexPage);
    return CoreTagIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=17.js.map