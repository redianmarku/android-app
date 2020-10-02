webpackJsonp([27],{

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPageModule", function() { return CoreSettingsLicensesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__licenses__ = __webpack_require__(2304);
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







var CoreSettingsLicensesPageModule = /** @class */ (function () {
    function CoreSettingsLicensesPageModule() {
    }
    CoreSettingsLicensesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__licenses__["a" /* CoreSettingsLicensesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__licenses__["a" /* CoreSettingsLicensesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsLicensesPageModule);
    return CoreSettingsLicensesPageModule;
}());

//# sourceMappingURL=licenses.module.js.map

/***/ }),

/***/ 2304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsLicensesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configconstants__ = __webpack_require__(61);
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
 * Page that displays the open source licenses information.
 */
var CoreSettingsLicensesPage = /** @class */ (function () {
    function CoreSettingsLicensesPage(http) {
        this.http = http;
        this.loaded = false;
        this.error = false;
        var version = 'v' + __WEBPACK_IMPORTED_MODULE_2__configconstants__["a" /* CoreConfigConstants */].versionname;
        if (version.indexOf('-') > 0) {
            version = 'integration';
        }
        this.licensesUrl = 'https://raw.githubusercontent.com/moodlehq/moodleapp/' + version + '/licenses.json';
    }
    /**
     * View loaded.
     */
    CoreSettingsLicensesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get(this.licensesUrl).toPromise().then(function (licenses) {
            _this.licenses = Object.keys(licenses).map(function (name) {
                var license = licenses[name];
                var nameSplit = name.lastIndexOf('@');
                license.name = name.substring(0, nameSplit);
                license.version = name.substring(nameSplit + 1);
                if (license.repository) {
                    license.repository = license.repository.replace('git://', 'https://');
                    if (license.repository.indexOf('github.com') > 0) {
                        license.licenseUrl = license.repository + '/blob/' + license.version + '/' + license.licenseFile;
                    }
                }
                return license;
            });
            _this.error = false;
        }).catch(function () {
            _this.error = true;
        }).finally(function () {
            _this.loaded = true;
        });
    };
    CoreSettingsLicensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-licenses',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\licenses\licenses.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.settings.opensourcelicenses\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <a *ngIf="error" ion-item text-wrap [href]="licensesUrl" core-link auto-login="no">\n\n            {{ \'core.settings.opensourcelicenses\' | translate }}\n\n        </a>\n\n\n\n        <ng-container *ngIf="!error">\n\n            <ion-item *ngFor="let license of licenses" text-wrap>\n\n                <h2>\n\n                    <a *ngIf="license.repository" [href]="license.repository" core-link auto-login="no">{{ license.name }}</a>\n\n                    <ng-container *ngIf="!license.repository">{{ license.name }}</ng-container> - {{ license.version }}\n\n                </h2>\n\n                <h3 *ngIf="license.publisher">{{ \'core.settings.publisher\' | translate }}{{ \'core.labelsep\' | translate }} {{ license.publisher }}</h3>\n\n                <p>{{ \'core.settings.license\' | translate }}{{ \'core.labelsep\' | translate }} {{ license.licenses }}</p>\n\n                <p><a *ngIf="license.url" [href]="license.url" core-link auto-login="no">{{ license.url }}</a></p>\n\n                <p><a *ngIf="license.email" [href]="\'mailto:\' +license.email" core-link auto-login="no">{{ license.email }}</a></p>\n\n                <a *ngIf="license.licenseUrl" [href]="license.licenseUrl" target="_blank" ion-button ion-button clear item-end core-link auto-login="no">{{ \'core.view\' | translate }}</a>\n\n            </ion-item>\n\n        </ng-container>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\settings\pages\licenses\licenses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CoreSettingsLicensesPage);
    return CoreSettingsLicensesPage;
}());

//# sourceMappingURL=licenses.js.map

/***/ })

});
//# sourceMappingURL=27.js.map