webpackJsonp([30],{

/***/ 2146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreAppSettingsPageModule", function() { return CoreAppSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(2302);
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






var CoreAppSettingsPageModule = /** @class */ (function () {
    function CoreAppSettingsPageModule() {
    }
    CoreAppSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app__["a" /* CoreAppSettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* CoreAppSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreAppSettingsPageModule);
    return CoreAppSettingsPageModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreAppSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_split_view_split_view__ = __webpack_require__(84);
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
 * Page that displays the list of app settings pages.
 */
var CoreAppSettingsPage = /** @class */ (function () {
    function CoreAppSettingsPage(platorm, navParams) {
        this.isIOS = platorm.is('ios');
        this.selectedPage = navParams.get('page') || false;
    }
    /**
     * View loaded.
     */
    CoreAppSettingsPage.prototype.ionViewDidLoad = function () {
        if (this.selectedPage) {
            this.openHandler(this.selectedPage);
        }
        else if (this.splitviewCtrl.isOn()) {
            this.openHandler('CoreSettingsGeneralPage');
        }
    };
    /**
     * Open a handler.
     *
     * @param page Page to open.
     * @param params Params of the page to open.
     */
    CoreAppSettingsPage.prototype.openHandler = function (page, params) {
        this.selectedPage = page;
        this.splitviewCtrl.push(page, params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreAppSettingsPage.prototype, "splitviewCtrl", void 0);
    CoreAppSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-app',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\app\app.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.appsettings\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-list>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsGeneralPage\')" [title]="\'core.settings.general\' | translate"  [class.core-split-item-selected]="\'CoreSettingsGeneralPage\' == selectedPage" detail-push>\n\n                <ion-icon name="construct" item-start></ion-icon>\n\n                <h2>{{ \'core.settings.general\' | translate }}</h2>\n\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsSpaceUsagePage\')" [title]="\'core.settings.spaceusage\' | translate" [class.core-split-item-selected]="\'CoreSettingsSpaceUsagePage\' == selectedPage" detail-push>\n\n                <ion-icon name="stats" item-start></ion-icon>\n\n                <h2>{{ \'core.settings.spaceusage\' | translate }}</h2>\n\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsSynchronizationPage\')" [title]="\'core.settings.synchronization\' | translate" [class.core-split-item-selected]="\'CoreSettingsSynchronizationPage\' == selectedPage" detail-push>\n\n                <ion-icon name="sync" item-start></ion-icon>\n\n                <h2>{{ \'core.settings.synchronization\' | translate }}</h2>\n\n            </a>\n\n            <a ion-item *ngIf="isIOS" (click)="openHandler(\'CoreSharedFilesListPage\', {manage: true})" [title]="\'core.sharedfiles.sharedfiles\' | translate" [class.core-split-item-selected]="\'CoreSharedFilesListPage\' == selectedPage" detail-push>\n\n                <ion-icon name="folder" item-start></ion-icon>\n\n                <h2>{{ \'core.sharedfiles.sharedfiles\' | translate }}</h2>\n\n            </a>\n\n            <a ion-item (click)="openHandler(\'CoreSettingsAboutPage\')" [title]="\'core.settings.about\' | translate" [class.core-split-item-selected]="\'CoreSettingsAboutPage\' == selectedPage" detail-push>\n\n                <ion-icon name="contacts" item-start></ion-icon>\n\n                <h2>{{ \'core.settings.about\' | translate }}</h2>\n\n            </a>\n\n        </ion-list>\n\n    </ion-content>\n\n</core-split-view>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreAppSettingsPage);
    return CoreAppSettingsPage;
}());

//# sourceMappingURL=app.js.map

/***/ })

});
//# sourceMappingURL=30.js.map