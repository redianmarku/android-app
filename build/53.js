webpackJsonp([53],{

/***/ 2184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPageModule", function() { return CoreCoursesDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard__ = __webpack_require__(2342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_sitehome_components_components_module__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_block_components_components_module__ = __webpack_require__(215);
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









var CoreCoursesDashboardPageModule = /** @class */ (function () {
    function CoreCoursesDashboardPageModule() {
    }
    CoreCoursesDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard__["a" /* CoreCoursesDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_sitehome_components_components_module__["a" /* CoreSiteHomeComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_block_components_components_module__["a" /* CoreBlockComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__dashboard__["a" /* CoreCoursesDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCoursesDashboardPageModule);
    return CoreCoursesDashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 2342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_block_components_block_block__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_my_courses_my_courses__ = __webpack_require__(1048);
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
 * Page that displays the dashboard.
 */
var CoreCoursesDashboardPage = /** @class */ (function () {
    function CoreCoursesDashboardPage(navCtrl, coursesProvider, sitesProvider, siteHomeProvider, eventsProvider, dashboardProvider, domUtils, blockDelegate) {
        this.navCtrl = navCtrl;
        this.coursesProvider = coursesProvider;
        this.sitesProvider = sitesProvider;
        this.siteHomeProvider = siteHomeProvider;
        this.eventsProvider = eventsProvider;
        this.dashboardProvider = dashboardProvider;
        this.domUtils = domUtils;
        this.blockDelegate = blockDelegate;
        this.siteHomeEnabled = false;
        this.tabsReady = false;
        this.tabs = [];
        this.dashboardEnabled = false;
        this.dashboardLoaded = false;
        this.downloadEnabledIcon = 'square-outline'; // Disabled by default.
        this.loadSiteName();
    }
    /**
     * View loaded.
     */
    CoreCoursesDashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchEnabled = !this.coursesProvider.isSearchCoursesDisabledInSite();
        this.downloadCourseEnabled = !this.coursesProvider.isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !this.coursesProvider.isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */].SITE_UPDATED, function () {
            _this.searchEnabled = !_this.coursesProvider.isSearchCoursesDisabledInSite();
            _this.downloadCourseEnabled = !_this.coursesProvider.isDownloadCourseDisabledInSite();
            _this.downloadCoursesEnabled = !_this.coursesProvider.isDownloadCoursesDisabledInSite();
            _this.switchDownload(_this.downloadEnabled);
            _this.loadSiteName();
        }, this.sitesProvider.getCurrentSiteId());
        var promises = [];
        promises.push(this.siteHomeProvider.isAvailable().then(function (enabled) {
            _this.siteHomeEnabled = enabled;
        }));
        promises.push(this.loadDashboardContent());
        // Decide which tab to load first.
        Promise.all(promises).finally(function () {
            if (_this.siteHomeEnabled && _this.dashboardEnabled) {
                var site = _this.sitesProvider.getCurrentSite(), displaySiteHome = site.getInfo() && site.getInfo().userhomepage === 0;
                _this.firstSelectedTab = displaySiteHome ? 0 : 1;
            }
            else {
                _this.firstSelectedTab = 0;
            }
            _this.tabsReady = true;
        });
    };
    /**
     * User entered the page.
     */
    CoreCoursesDashboardPage.prototype.ionViewDidEnter = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    };
    /**
     * User left the page.
     */
    CoreCoursesDashboardPage.prototype.ionViewDidLeave = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    };
    /**
     * Open page to manage courses storage.
     */
    CoreCoursesDashboardPage.prototype.manageCoursesStorage = function () {
        this.navCtrl.push('AddonStorageManagerCoursesStoragePage');
    };
    /**
     * Go to search courses.
     */
    CoreCoursesDashboardPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Load the site name.
     */
    CoreCoursesDashboardPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getSiteName();
    };
    /**
     * Convenience function to fetch the dashboard data.
     *
     * @return Promise resolved when done.
     */
    CoreCoursesDashboardPage.prototype.loadDashboardContent = function () {
        var _this = this;
        return this.dashboardProvider.isAvailable().then(function (available) {
            if (available) {
                _this.userId = _this.sitesProvider.getCurrentSiteUserId();
                return _this.dashboardProvider.getDashboardBlocks().then(function (blocks) {
                    _this.blocks = blocks;
                }).catch(function (error) {
                    _this.domUtils.showErrorModal(error);
                    // Cannot get the blocks, just show dashboard if needed.
                    _this.loadFallbackBlocks();
                });
            }
            else if (!_this.dashboardProvider.isDisabledInSite()) {
                // Not available, but not disabled either. Use fallback.
                _this.loadFallbackBlocks();
            }
            else {
                // Disabled.
                _this.blocks = [];
            }
        }).finally(function () {
            _this.dashboardEnabled = _this.blockDelegate.hasSupportedBlock(_this.blocks);
            _this.dashboardLoaded = true;
        });
    };
    /**
     * Refresh the dashboard data.
     *
     * @param refresher Refresher.
     */
    CoreCoursesDashboardPage.prototype.refreshDashboard = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.dashboardProvider.invalidateDashboardBlocks());
        // Invalidate the blocks.
        this.blocksComponents.forEach(function (blockComponent) {
            promises.push(blockComponent.invalidate().catch(function () {
                // Ignore errors.
            }));
        });
        Promise.all(promises).finally(function () {
            _this.loadDashboardContent().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Refresh the dashboard data and My Courses.
     *
     * @param refresher Refresher.
     */
    CoreCoursesDashboardPage.prototype.refreshMyCourses = function (refresher) {
        var _this = this;
        // First of all, refresh dashboard blocks, maybe a new block was added and now we can display the dashboard.
        this.dashboardProvider.invalidateDashboardBlocks().finally(function () {
            return _this.loadDashboardContent();
        }).finally(function () {
            if (!_this.dashboardEnabled) {
                // Dashboard still not enabled. Refresh my courses.
                _this.mcComponent && _this.mcComponent.refreshCourses(refresher);
            }
            else {
                _this.tabsComponent.selectTab(1);
                refresher.complete();
            }
        });
    };
    /**
     * Toggle download enabled.
     */
    CoreCoursesDashboardPage.prototype.toggleDownload = function () {
        this.switchDownload(!this.downloadEnabled);
    };
    /**
     * Convenience function to switch download enabled.
     *
     * @param enable If enable or disable.
     */
    CoreCoursesDashboardPage.prototype.switchDownload = function (enable) {
        this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
        this.downloadEnabledIcon = this.downloadEnabled ? 'checkbox-outline' : 'square-outline';
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_10__providers_courses__["b" /* CoreCoursesProvider */].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
    };
    /**
     * Load fallback blocks to shown before 3.6 when dashboard blocks are not supported.
     */
    CoreCoursesDashboardPage.prototype.loadFallbackBlocks = function () {
        this.blocks = [
            {
                name: 'myoverview',
                visible: true
            },
            {
                name: 'timeline',
                visible: true
            }
        ];
    };
    /**
     * Component being destroyed.
     */
    CoreCoursesDashboardPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], CoreCoursesDashboardPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__["a" /* CoreSiteHomeIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__core_sitehome_components_index_index__["a" /* CoreSiteHomeIndexComponent */])
    ], CoreCoursesDashboardPage.prototype, "siteHomeComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_7__core_block_components_block_block__["a" /* CoreBlockComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], CoreCoursesDashboardPage.prototype, "blocksComponents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_12__components_my_courses_my_courses__["a" /* CoreCoursesMyCoursesComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_my_courses_my_courses__["a" /* CoreCoursesMyCoursesComponent */])
    ], CoreCoursesDashboardPage.prototype, "mcComponent", void 0);
    CoreCoursesDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-dashboard',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\dashboard\dashboard.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>\n\n            <core-format-text [text]="siteName" contextLevel="system" [contextInstanceId]="0"></core-format-text>\n\n            <img src="assets/img/login_logo.png" class="core-header-logo" [alt]="siteName">\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n            <core-context-menu>\n\n                <core-context-menu-item *ngIf="(downloadCourseEnabled || downloadCoursesEnabled)" [priority]="500" [content]="\'addon.storagemanager.managestorage\' | translate" (action)="manageCoursesStorage()" iconAction="cube"></core-context-menu-item>\n\n\n\n                <!-- Action for dashboard and site home. -->\n\n                <core-context-menu-item *ngIf="(siteHomeEnabled || dashboardEnabled) && (downloadCourseEnabled || downloadCoursesEnabled)" [priority]="1000" [content]="\'core.settings.showdownloadoptions\' | translate" (action)="toggleDownload()" [iconAction]="downloadEnabledIcon"></core-context-menu-item>\n\n\n\n                <!-- Actions when both site home and dashboard are disabled. -->\n\n                <core-context-menu-item *ngIf="!siteHomeEnabled && !dashboardEnabled && mcComponent && mcComponent.downloadAllCoursesEnabled && mcComponent.courses && mcComponent.courses.length >= 2" [priority]="800" [content]="\'core.courses.downloadcourses\' | translate" (action)="mcComponent.prefetchCourses()" [iconAction]="mcComponent.prefetchCoursesData.icon" [closeOnClick]="false" [badge]="mcComponent.prefetchCoursesData.badge"></core-context-menu-item>\n\n                <core-context-menu-item *ngIf="!siteHomeEnabled && !dashboardEnabled && mcComponent && mcComponent.courses && mcComponent.courses.length > 5" [priority]="700" [content]="\'core.courses.filtermycourses\' | translate" (action)="mcComponent.switchFilter()" [iconAction]="\'funnel\'"></core-context-menu-item>\n\n            </core-context-menu>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-tabs [selectedIndex]="firstSelectedTab" [hideUntil]="tabsReady">\n\n        <!-- Site home tab. -->\n\n        <core-tab [show]="siteHomeEnabled" [title]="\'core.sitehome.sitehome\' | translate">\n\n            <ng-template>\n\n                <ion-content>\n\n                    <ion-refresher [enabled]="!!siteHomeComponent && siteHomeComponent.dataLoaded" (ionRefresh)="siteHomeComponent.doRefresh($event)">\n\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n                    </ion-refresher>\n\n                    <core-sitehome-index [downloadEnabled]="downloadEnabled"></core-sitehome-index>\n\n                </ion-content>\n\n            </ng-template>\n\n        </core-tab>\n\n\n\n        <!-- Dashboard tab. -->\n\n        <core-tab [show]="dashboardEnabled" [title]="\'core.courses.mymoodle\' | translate">\n\n            <ng-template>\n\n                <ion-content>\n\n                    <ion-refresher [enabled]="dashboardLoaded" (ionRefresh)="refreshDashboard($event)">\n\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n                    </ion-refresher>\n\n                    <core-loading [hideUntil]="dashboardLoaded" class="core-loading-center">\n\n                        <ion-list>\n\n                            <!-- Dashboard blocks. -->\n\n                            <ng-container *ngFor="let block of blocks">\n\n                                <core-block *ngIf="block.visible" [block]="block" contextLevel="user" [instanceId]="userId" [extraData]="{\'downloadEnabled\': downloadEnabled}"></core-block>\n\n                            </ng-container>\n\n                        </ion-list>\n\n\n\n                        <core-empty-box *ngIf="blocks.length == 0" icon="qr-scanner" [message]="\'core.course.nocontentavailable\' | translate"></core-empty-box>\n\n                    </core-loading>\n\n                </ion-content>\n\n            </ng-template>\n\n        </core-tab>\n\n\n\n        <!-- Tab to display if both site home and dashboard are disabled. -->\n\n        <core-tab [show]="!siteHomeEnabled && !dashboardEnabled" [title]="\'core.courses.mymoodle\' | translate">\n\n            <ng-template>\n\n                <ion-content>\n\n                    <ion-refresher [enabled]="mcComponent && mcComponent.coursesLoaded" (ionRefresh)="refreshMyCourses($event)">\n\n                        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n                    </ion-refresher>\n\n                    <core-courses-my-courses></core-courses-my-courses>\n\n                </ion-content>\n\n            </ng-template>\n\n        </core-tab>\n\n    </core-tabs>\n\n</ion-content>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_courses__["b" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_8__core_sitehome_providers_sitehome__["a" /* CoreSiteHomeProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_dashboard__["a" /* CoreCoursesDashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_6__core_block_providers_delegate__["a" /* CoreBlockDelegate */]])
    ], CoreCoursesDashboardPage);
    return CoreCoursesDashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=53.js.map