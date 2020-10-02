webpackJsonp([26],{

/***/ 2149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return CoreSitePreferencesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site__ = __webpack_require__(2305);
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







var CoreSitePreferencesPageModule = /** @class */ (function () {
    function CoreSitePreferencesPageModule() {
    }
    CoreSitePreferencesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__site__["a" /* CoreSitePreferencesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__site__["a" /* CoreSitePreferencesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoreSitePreferencesPageModule);
    return CoreSitePreferencesPageModule;
}());

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 2305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSitePreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_delegate__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sharedfiles_providers_sharedfiles__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(1039);
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
 * Page that displays the list of site settings pages.
 */
var CoreSitePreferencesPage = /** @class */ (function () {
    function CoreSitePreferencesPage(settingsDelegate, settingsHelper, sitesProvider, domUtils, eventsProvider, sharedFilesProvider, translate, platorm, navParams) {
        var _this = this;
        this.settingsDelegate = settingsDelegate;
        this.settingsHelper = settingsHelper;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sharedFilesProvider = sharedFilesProvider;
        this.translate = translate;
        this.siteInfo = [];
        this.spaceUsage = {
            cacheEntries: 0,
            spaceUsage: 0
        };
        this.loaded = false;
        this.isDestroyed = false;
        this.isIOS = platorm.is('ios');
        this.selectedPage = navParams.get('page') || false;
        this.sitesObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].SITE_UPDATED, function (data) {
            if (data.siteId == _this.siteId) {
                _this.refreshData();
            }
        });
    }
    /**
     * View loaded.
     */
    CoreSitePreferencesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().finally(function () {
            _this.loaded = true;
            if (_this.selectedPage) {
                _this.openHandler(_this.selectedPage);
            }
            else if (_this.splitviewCtrl.isOn()) {
                if (_this.isIOS) {
                    _this.openHandler('CoreSharedFilesListPage', { manage: true, siteId: _this.siteId, hideSitePicker: true });
                }
                else if (_this.handlers.length > 0) {
                    _this.openHandler(_this.handlers[0].page, _this.handlers[0].params);
                }
            }
        });
    };
    /**
     * Fetch Data.
     */
    CoreSitePreferencesPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentSite, promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.handlers = this.settingsDelegate.getHandlers();
                        currentSite = this.sitesProvider.getCurrentSite();
                        this.siteId = currentSite.id;
                        this.siteInfo = currentSite.getInfo();
                        this.siteName = currentSite.getSiteName();
                        this.siteUrl = currentSite.getURL();
                        promises = [];
                        promises.push(this.settingsHelper.getSiteSpaceUsage(this.siteId).then(function (spaceUsage) { return _this.spaceUsage = spaceUsage; }));
                        if (this.isIOS) {
                            promises.push(this.sharedFilesProvider.getSiteSharedFiles(this.siteId).then(function (files) {
                                return _this.iosSharedFiles = files.length;
                            }));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Syncrhonizes the site.
     */
    CoreSitePreferencesPage.prototype.synchronize = function (siteId) {
        var _this = this;
        // Using syncOnlyOnWifi false to force manual sync.
        this.settingsHelper.synchronizeSite(false, this.siteId).catch(function (error) {
            if (_this.isDestroyed) {
                return;
            }
            _this.domUtils.showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
        });
    };
    /**
     * Returns true if site is beeing synchronized.
     *
     * @return True if site is beeing synchronized, false otherwise.
     */
    CoreSitePreferencesPage.prototype.isSynchronizing = function () {
        return this.siteId && !!this.settingsHelper.getSiteSyncPromise(this.siteId);
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    CoreSitePreferencesPage.prototype.refreshData = function (refresher) {
        this.fetchData().finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    CoreSitePreferencesPage.prototype.deleteSiteStorage = function () {
        var _this = this;
        this.settingsHelper.deleteSiteStorage(this.siteName, this.siteId).then(function (newInfo) {
            _this.spaceUsage = newInfo;
        }).catch(function () {
            // Ignore cancelled confirmation modal.
        });
    };
    /**
     * Open a handler.
     *
     * @param page Page to open.
     * @param params Params of the page to open.
     */
    CoreSitePreferencesPage.prototype.openHandler = function (page, params) {
        this.selectedPage = page;
        this.splitviewCtrl.push(page, params);
    };
    /**
     * Show information about space usage actions.
     */
    CoreSitePreferencesPage.prototype.showSpaceInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.spaceusagehelp'));
    };
    /**
     * Show information about sync actions.
     */
    CoreSitePreferencesPage.prototype.showSyncInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.synchronizenowhelp'));
    };
    /**
     * Page destroyed.
     */
    CoreSitePreferencesPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.sitesObserver && this.sitesObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreSitePreferencesPage.prototype, "splitviewCtrl", void 0);
    CoreSitePreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-site-preferences',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\site\site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.preferences\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="loaded">\n\n            <ion-list>\n\n                <ion-item *ngIf="siteInfo" text-wrap>\n\n                    <h2>{{siteInfo.fullname}}</h2>\n\n                    <ion-note class="core-note-block"><core-format-text [text]="siteName" contextLevel="system" [contextInstanceId]="0" [wsNotFiltered]="true"></core-format-text></ion-note>\n\n                    <ion-note class="core-note-block">{{ siteUrl }}</ion-note>\n\n                </ion-item>\n\n                <ion-item-divider></ion-item-divider>\n\n                <a ion-item *ngIf="isIOS" (click)="openHandler(\'CoreSharedFilesListPage\', {manage: true, siteId: siteId, hideSitePicker: true})" [title]="\'core.sharedfiles.sharedfiles\' | translate" [class.core-split-item-selected]="\'CoreSharedFilesListPage\' == selectedPage" detail-push>\n\n                    <ion-icon name="folder" item-start></ion-icon>\n\n                    <h2>{{ \'core.sharedfiles.sharedfiles\' | translate }}</h2>\n\n                    <ion-badge item-end>{{ iosSharedFiles }}</ion-badge>\n\n                </a>\n\n\n\n                <a ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-settings-handler\', handler.class]" (click)="openHandler(handler.page, handler.params)" [title]="handler.title | translate" detail-push [class.core-split-item-selected]="handler.page == selectedPage">\n\n                    <core-icon [name]="handler.icon" item-start *ngIf="handler.icon"></core-icon>\n\n                    <h2>{{ handler.title | translate}}</h2>\n\n                </a>\n\n\n\n                <ion-card class="with-borders">\n\n                    <ion-item text-wrap *ngIf="spaceUsage">\n\n                        <h2 text-wrap>{{ \'core.settings.spaceusage\' | translate }} <ion-icon name="information-circle" color="info" [attr.aria-label]="\'core.info\' | translate" (click)="showSpaceInfo()"></ion-icon></h2>\n\n                        <p *ngIf="spaceUsage.spaceUsage != null">{{ spaceUsage.spaceUsage | coreBytesToSize }}</p>\n\n                        <p *ngIf="spaceUsage.cacheEntries != null">{{ \'core.settings.entriesincache\' | translate: { $a: spaceUsage.cacheEntries } }}</p>\n\n                        <button ion-button icon-only clear color="danger" item-end (click)="deleteSiteStorage()" [hidden]="!spaceUsage.spaceUsage > \'0\' && !spaceUsage.cacheEntries > \'0\'" [attr.aria-label]="\'core.settings.deletesitefilestitle\' | translate">\n\n                            <ion-icon name="trash"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n                    <ion-item text-wrap>\n\n                        <h2>{{ \'core.settings.synchronizenow\' | translate }} <ion-icon name="information-circle" color="info" [attr.aria-label]="\'core.info\' | translate" (click)="showSyncInfo()"></ion-icon></h2>\n\n                        <button ion-button icon-only clear item-end *ngIf="!isSynchronizing()" (click)="synchronize()" [title]="siteName" [attr.aria-label]="\'core.settings.synchronizenow\' | translate">\n\n                            <ion-icon name="sync"></ion-icon>\n\n                        </button>\n\n                        <ion-spinner item-end *ngIf="isSynchronizing()"></ion-spinner>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\site\site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_delegate__["a" /* CoreSettingsDelegate */],
            __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* CoreSettingsHelper */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_sharedfiles_providers_sharedfiles__["a" /* CoreSharedFilesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreSitePreferencesPage);
    return CoreSitePreferencesPage;
}());

//# sourceMappingURL=site.js.map

/***/ })

});
//# sourceMappingURL=26.js.map