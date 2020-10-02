webpackJsonp([133],{

/***/ 2069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonFilesListPageModule", function() { return AddonFilesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list__ = __webpack_require__(2225);
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






var AddonFilesListPageModule = /** @class */ (function () {
    function AddonFilesListPageModule() {
    }
    AddonFilesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__list__["a" /* AddonFilesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__list__["a" /* AddonFilesListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonFilesListPageModule);
    return AddonFilesListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 2225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonFilesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_files__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(1061);
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
 * Page that displays the list of files.
 */
var AddonFilesListPage = /** @class */ (function () {
    function AddonFilesListPage(navParams, eventsProvider, sitesProvider, domUtils, translate, appProvider, filesProvider, filesHelper, textUtils) {
        var _this = this;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.appProvider = appProvider;
        this.filesProvider = filesProvider;
        this.filesHelper = filesHelper;
        this.textUtils = textUtils;
        this.title = navParams.get('title') || this.translate.instant('addon.files.files');
        this.root = navParams.get('root');
        this.path = navParams.get('path');
        // Update visibility if current site info is updated.
        this.updateSiteObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].SITE_UPDATED, function () {
            _this.setVisibility();
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    AddonFilesListPage.prototype.ionViewDidLoad = function () {
        this.setVisibility();
        this.userQuota = this.sitesProvider.getCurrentSite().getInfo().userquota;
        if (!this.root) {
            // Load private files by default.
            if (this.showPrivateFiles) {
                this.root = 'my';
            }
            else if (this.showSiteFiles) {
                this.root = 'site';
            }
        }
        if (this.root) {
            this.rootChanged();
        }
        else {
            this.filesLoaded = true;
        }
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    AddonFilesListPage.prototype.refreshData = function (refresher) {
        this.refreshFiles().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Function called when the root has changed.
     */
    AddonFilesListPage.prototype.rootChanged = function () {
        var _this = this;
        this.filesLoaded = false;
        this.component = this.root == 'my' ? __WEBPACK_IMPORTED_MODULE_8__providers_files__["a" /* AddonFilesProvider */].PRIVATE_FILES_COMPONENT : __WEBPACK_IMPORTED_MODULE_8__providers_files__["a" /* AddonFilesProvider */].SITE_FILES_COMPONENT;
        this.fetchFiles().finally(function () {
            _this.filesLoaded = true;
        });
    };
    /**
     * Upload a new file.
     */
    AddonFilesListPage.prototype.uploadFile = function () {
        var _this = this;
        this.filesProvider.versionCanUploadFiles().then(function (canUpload) {
            if (!canUpload) {
                _this.domUtils.showAlertTranslated('core.notice', 'addon.files.erroruploadnotworking');
            }
            else if (!_this.appProvider.isOnline()) {
                _this.domUtils.showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);
            }
            else {
                _this.filesHelper.uploadPrivateFile(_this.filesInfo).then(function () {
                    // File uploaded, refresh the list.
                    _this.filesLoaded = false;
                    _this.refreshFiles().finally(function () {
                        _this.filesLoaded = true;
                    });
                }).catch(function () {
                    // Ignore errors, they're handled inside the function.
                });
            }
        });
    };
    /**
     * Set visibility of some items based on site data.
     */
    AddonFilesListPage.prototype.setVisibility = function () {
        this.showPrivateFiles = this.filesProvider.canViewPrivateFiles();
        this.showSiteFiles = this.filesProvider.canViewSiteFiles();
        this.showUpload = this.filesProvider.canUploadFiles();
    };
    /**
     * Fetch the files.
     *
     * @return Promise resolved when done.
     */
    AddonFilesListPage.prototype.fetchFiles = function () {
        var _this = this;
        var promise;
        if (!this.path) {
            // The path is unknown, the user must be requesting a root.
            if (this.root == 'site') {
                this.title = this.translate.instant('addon.files.sitefiles');
                promise = this.filesProvider.getSiteFiles();
            }
            else if (this.root == 'my') {
                this.title = this.translate.instant('addon.files.files');
                promise = this.filesProvider.getPrivateFiles().then(function (files) {
                    if (_this.showUpload && _this.filesProvider.canGetPrivateFilesInfo() && _this.userQuota > 0) {
                        // Get the info to calculate the available size.
                        return _this.filesProvider.getPrivateFilesInfo().then(function (info) {
                            _this.filesInfo = info;
                            _this.spaceUsed = _this.textUtils.bytesToSize(info.filesizewithoutreferences, 1);
                            _this.userQuotaReadable = _this.textUtils.bytesToSize(_this.userQuota, 1);
                            return files;
                        });
                    }
                    else {
                        // User quota isn't useful, delete it.
                        delete _this.userQuota;
                    }
                    return files;
                });
            }
            else {
                // Unknown root.
                promise = Promise.reject(null);
            }
        }
        else {
            // Path is set, serve the files the user requested.
            promise = this.filesProvider.getFiles(this.path);
        }
        return promise.then(function (files) {
            _this.files = files;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.files.couldnotloadfiles', true);
        });
    };
    /**
     * Refresh the displayed files.
     *
     * @return Promise resolved when done.
     */
    AddonFilesListPage.prototype.refreshFiles = function () {
        var _this = this;
        var promises = [];
        promises.push(this.filesProvider.invalidateDirectory(this.root, this.path));
        promises.push(this.filesProvider.invalidatePrivateFilesInfoForUser());
        return Promise.all(promises).finally(function () {
            return _this.fetchFiles();
        });
    };
    /**
     * Page destroyed.
     */
    AddonFilesListPage.prototype.ngOnDestroy = function () {
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    AddonFilesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-files-list',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\files\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="filesLoaded && (showPrivateFiles || showSiteFiles)" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="filesLoaded" *ngIf="showPrivateFiles || showSiteFiles" class="safe-area-page">\n\n        <!-- Allow selecting the files to see: private or site. -->\n\n        <div padding *ngIf="showPrivateFiles && showSiteFiles && !path">\n\n            <ion-select [(ngModel)]="root" (ngModelChange)="rootChanged()" interface="popover" class="core-button-select">\n\n                <ion-option value="my">{{ \'addon.files.privatefiles\' | translate }}</ion-option>\n\n                <ion-option value="site">{{ \'addon.files.sitefiles\' | translate }}</ion-option>\n\n            </ion-select>\n\n        </div>\n\n\n\n        <!-- Display info about space used and space left. -->\n\n        <p class="core-info-card" *ngIf="userQuota && filesInfo && filesInfo.filecount > 0">{{ \'core.quotausage\' | translate:{$a: {used: spaceUsed, total: userQuotaReadable} } }}</p>\n\n\n\n        <!-- List of files. -->\n\n        <ion-list *ngIf="files && files.length > 0">\n\n            <ng-container *ngFor="let file of files">\n\n                <a *ngIf="file.isdir" ion-item class="item-media" navPush="AddonFilesListPage" [navParams]="{path: file.link, title: file.filename}">\n\n                    <img [src]="file.imgPath" alt="" role="presentation" item-start>\n\n                    <p>{{file.filename}}</p>\n\n                </a>\n\n                <core-file *ngIf="!file.isdir" [file]="file" [component]="component" [componentId]="file.contextid"></core-file>\n\n            </ng-container>\n\n        </ion-list>\n\n\n\n        <!-- Message telling there are no files. -->\n\n        <core-empty-box *ngIf="!files || !files.length" icon="folder" [message]="\'addon.files.emptyfilelist\' | translate"></core-empty-box>\n\n    </core-loading>\n\n\n\n    <!-- Upload a private file. -->\n\n    <ion-fab core-fab bottom end *ngIf="showUpload && root != \'site\' && !path">\n\n        <button ion-fab (click)="uploadFile()" [attr.aria-label]="\'core.fileuploader.uploadafile\' | translate">\n\n            <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\files\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_files__["a" /* AddonFilesProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* AddonFilesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["b" /* CoreTextUtilsProvider */]])
    ], AddonFilesListPage);
    return AddonFilesListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=133.js.map