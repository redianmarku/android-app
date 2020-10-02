webpackJsonp([22],{

/***/ 2153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesListPageModule", function() { return CoreSharedFilesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(2309);
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






var CoreSharedFilesListPageModule = /** @class */ (function () {
    function CoreSharedFilesListPageModule() {
    }
    CoreSharedFilesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list__["a" /* CoreSharedFilesListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* CoreSharedFilesListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSharedFilesListPageModule);
    return CoreSharedFilesListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 2309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSharedFilesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_file__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sharedfiles__ = __webpack_require__(472);
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
 * Modal to display the list of shared files.
 */
var CoreSharedFilesListPage = /** @class */ (function () {
    function CoreSharedFilesListPage(viewCtrl, navParams, sharedFilesProvider, sitesProvider, textUtils, translate, fileProvider, eventsProvider, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.sharedFilesProvider = sharedFilesProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.translate = translate;
        this.fileProvider = fileProvider;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.path = '';
        this.siteId = navParams.get('siteId') || this.sitesProvider.getCurrentSiteId();
        this.mimetypes = navParams.get('mimetypes');
        this.isModal = !!navParams.get('isModal');
        this.manage = !!navParams.get('manage');
        this.pick = !!navParams.get('pick');
        this.path = navParams.get('path') || '';
        this.showSitePicker = !navParams.get('hideSitePicker');
    }
    /**
     * Component being initialized.
     */
    CoreSharedFilesListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadFiles();
        // Listen for new files shared with the app.
        this.shareObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */].FILE_SHARED, function (data) {
            if (data.siteId == _this.siteId) {
                // File was stored in current site, refresh the list.
                _this.filesLoaded = false;
                _this.loadFiles().finally(function () {
                    _this.filesLoaded = true;
                });
            }
        });
    };
    /**
     * Load the files.
     *
     * @return Promise resolved when done.
     */
    CoreSharedFilesListPage.prototype.loadFiles = function () {
        var _this = this;
        if (this.path) {
            this.title = this.fileProvider.getFileAndDirectoryFromPath(this.path).name;
        }
        else {
            this.title = this.translate.instant('core.sharedfiles.sharedfiles');
        }
        return this.sharedFilesProvider.getSiteSharedFiles(this.siteId, this.path, this.mimetypes).then(function (files) {
            _this.files = files;
            _this.filesLoaded = true;
        });
    };
    /**
     * Close modal.
     */
    CoreSharedFilesListPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Refresh the list of files.
     *
     * @param refresher Refresher.
     */
    CoreSharedFilesListPage.prototype.refreshFiles = function (refresher) {
        this.loadFiles().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Called when a file is deleted. Remove the file from the list.
     *
     * @param index Position of the file.
     */
    CoreSharedFilesListPage.prototype.fileDeleted = function (index) {
        this.files.splice(index, 1);
    };
    /**
     * Called when a file is renamed. Update the list.
     *
     * @param index Position of the file.
     * @param data Data containing the new FileEntry.
     */
    CoreSharedFilesListPage.prototype.fileRenamed = function (index, data) {
        this.files[index] = data.file;
    };
    /**
     * Open a subfolder.
     *
     * @param folder The folder to open.
     */
    CoreSharedFilesListPage.prototype.openFolder = function (folder) {
        var path = this.textUtils.concatenatePaths(this.path, folder.name);
        if (this.isModal) {
            // In Modal we don't want to open a new page because we cannot dismiss the modal from the new page.
            this.path = path;
            this.filesLoaded = false;
            this.loadFiles();
        }
        else {
            this.navCtrl.push('CoreSharedFilesListPage', {
                path: path,
                manage: this.manage,
                pick: this.pick,
                siteId: this.siteId,
                mimetypes: this.mimetypes,
                isModal: this.isModal
            });
        }
    };
    /**
     * Change site loaded.
     *
     * @param id Site to load.
     */
    CoreSharedFilesListPage.prototype.changeSite = function (id) {
        this.siteId = id;
        this.path = '';
        this.filesLoaded = false;
        this.loadFiles();
    };
    /**
     * A file was picked.
     *
     * @param file Picked file.
     */
    CoreSharedFilesListPage.prototype.filePicked = function (file) {
        this.viewCtrl.dismiss(file);
    };
    /**
     * Component destroyed.
     */
    CoreSharedFilesListPage.prototype.ngOnDestroy = function () {
        if (this.shareObserver) {
            this.shareObserver.off();
        }
    };
    CoreSharedFilesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-shared-files-list',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sharedfiles\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n\n\n        <ion-buttons end *ngIf="isModal">\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="filesLoaded" (ionRefresh)="refreshFiles($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Allow selecting the site to view. -->\n\n    <core-site-picker *ngIf="showSitePicker" [hidden]="!filesLoaded" [initialSite]="siteId" (siteSelected)="changeSite($event)"></core-site-picker>\n\n    <core-loading [hideUntil]="filesLoaded">\n\n        <ion-list *ngIf="files && files.length > 0">\n\n            <ng-container *ngFor="let file of files; let idx = index">\n\n                <core-local-file *ngIf="file.isFile" [file]="file" [manage]="manage" [overrideClick]="pick" (onClick)="filePicked(file)" (onDelete)="fileDeleted(idx)" (onRename)="fileRenamed(idx, $event)"></core-local-file>\n\n                <a ion-item text-wrap class="item-media" *ngIf="!file.isFile" (click)="openFolder(file)">\n\n                    <img src="assets/img/files/folder-64.png" alt="{{ \'core.folder\' | translate }}" role="presentation" item-start>\n\n                    <p>{{ file.name }}</p>\n\n                </a>\n\n            </ng-container>\n\n        </ion-list>\n\n        <core-empty-box *ngIf="files && !files.length && manage" icon="folder" [message]="\'core.sharedfiles.nosharedfiles\' | translate"></core-empty-box>\n\n        <core-empty-box *ngIf="files && !files.length && !manage" icon="folder" [message]="\'core.sharedfiles.nosharedfilestoupload\' | translate"></core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\sharedfiles\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_sharedfiles__["a" /* CoreSharedFilesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__["b" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_file__["b" /* CoreFileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], CoreSharedFilesListPage);
    return CoreSharedFilesListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=22.js.map