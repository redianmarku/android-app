webpackJsonp([25],{

/***/ 2150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModule", function() { return CoreSettingsSpaceUsagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__space_usage__ = __webpack_require__(2306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(68);
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







var CoreSettingsSpaceUsagePageModule = /** @class */ (function () {
    function CoreSettingsSpaceUsagePageModule() {
    }
    CoreSettingsSpaceUsagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__space_usage__["a" /* CoreSettingsSpaceUsagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__space_usage__["a" /* CoreSettingsSpaceUsagePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSpaceUsagePageModule);
    return CoreSettingsSpaceUsagePageModule;
}());

//# sourceMappingURL=space-usage.module.js.map

/***/ }),

/***/ 2306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsSpaceUsagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(1039);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Page that displays the space usage settings.
 */
var CoreSettingsSpaceUsagePage = /** @class */ (function () {
    function CoreSettingsSpaceUsagePage(sitesProvider, settingsHelper, domUtils, translate) {
        this.sitesProvider = sitesProvider;
        this.settingsHelper = settingsHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.loaded = false;
        this.sites = [];
        this.currentSiteId = '';
        this.totals = {
            cacheEntries: 0,
            spaceUsage: 0
        };
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
    }
    /**
     * View loaded.
     */
    CoreSettingsSpaceUsagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadSiteData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Convenience function to load site data/usage and calculate the totals.
     *
     * @return Resolved when done.
     */
    CoreSettingsSpaceUsagePage.prototype.loadSiteData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var totalSize, totalEntries, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        totalSize = 0;
                        totalEntries = 0;
                        _a = this;
                        return [4 /*yield*/, this.sitesProvider.getSortedSites()];
                    case 1:
                        _a.sites = _b.sent();
                        // Get space usage.
                        return [4 /*yield*/, Promise.all(this.sites.map(function (site) { return __awaiter(_this, void 0, void 0, function () {
                                var siteInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.settingsHelper.getSiteSpaceUsage(site.id)];
                                        case 1:
                                            siteInfo = _a.sent();
                                            site.cacheEntries = siteInfo.cacheEntries;
                                            site.spaceUsage = siteInfo.spaceUsage;
                                            totalSize += (site.spaceUsage ? parseInt(site.spaceUsage, 10) : 0);
                                            totalEntries += (site.cacheEntries ? parseInt(site.cacheEntries, 10) : 0);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        // Get space usage.
                        _b.sent();
                        this.totals.spaceUsage = totalSize;
                        this.totals.cacheEntries = totalEntries;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    CoreSettingsSpaceUsagePage.prototype.refreshData = function (refresher) {
        this.loadSiteData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    CoreSettingsSpaceUsagePage.prototype.deleteSiteStorage = function (siteData) {
        var _this = this;
        this.settingsHelper.deleteSiteStorage(siteData.siteName, siteData.id).then(function (newInfo) {
            _this.totals.spaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
            _this.totals.spaceUsage -= siteData.cacheEntries - newInfo.cacheEntries;
            siteData.spaceUsage = newInfo.spaceUsage;
            siteData.cacheEntries = newInfo.cacheEntries;
        }).catch(function () {
            // Ignore cancelled confirmation modal.
        });
    };
    /**
     * Show information about space usage actions.
     */
    CoreSettingsSpaceUsagePage.prototype.showInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.spaceusagehelp'));
    };
    CoreSettingsSpaceUsagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-space-usage',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\space-usage\space-usage.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.spaceusage\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-navbar-buttons>\n\n    <button ion-button icon-only (click)="showInfo()" [attr.aria-label]="\'core.info\' | translate">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n    </button>\n\n</core-navbar-buttons>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-item *ngFor="let site of sites" [class.core-primary-selected-item]="site.id == currentSiteId">\n\n            <h2 text-wrap><core-format-text [text]="site.siteName" clean="true" [siteId]="site.id"></core-format-text></h2>\n\n            <p text-wrap>{{ site.fullName }}</p>\n\n            <div item-end>\n\n                <p *ngIf="site.spaceUsage != null" text-end>{{ site.spaceUsage | coreBytesToSize }}</p>\n\n                <p *ngIf="site.cacheEntries != null" text-end>{{ \'core.settings.entriesincache\' | translate: { $a: site.cacheEntries } }}</p>\n\n            </div>\n\n            <button ion-button icon-only clear color="danger" item-end (click)="deleteSiteStorage(site)" [hidden]="!site.spaceUsage > \'0\' && !site.cacheEntries > \'0\'" [attr.aria-label]="\'core.settings.deletesitefilestitle\' | translate">\n\n                <ion-icon name="trash"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n        <ion-item-divider *ngIf="totals">\n\n            <h2>{{ \'core.settings.total\' | translate }}</h2>\n\n            <div item-end>\n\n                <p>{{ totals.spaceUsage | coreBytesToSize }}</p>\n\n                <p>{{ \'core.settings.entriesincache\' | translate: { $a: totals.cacheEntries } }}</p>\n\n            </div>\n\n        </ion-item-divider>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\space-usage\space-usage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreSettingsHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], CoreSettingsSpaceUsagePage);
    return CoreSettingsSpaceUsagePage;
}());

//# sourceMappingURL=space-usage.js.map

/***/ })

});
//# sourceMappingURL=25.js.map