webpackJsonp([73],{

/***/ 2115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWikiMapPageModule", function() { return AddonModWikiMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map__ = __webpack_require__(2271);
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






var AddonModWikiMapPageModule = /** @class */ (function () {
    function AddonModWikiMapPageModule() {
    }
    AddonModWikiMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__map__["a" /* AddonModWikiMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__map__["a" /* AddonModWikiMapPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWikiMapPageModule);
    return AddonModWikiMapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 2271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWikiMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Modal to display the map of a Wiki.
 */
var AddonModWikiMapPage = /** @class */ (function () {
    function AddonModWikiMapPage(navParams, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.map = []; // Map of pages, categorized by letter.
        this.constructMap(navParams.get('pages') || []);
        this.selected = navParams.get('selected');
        this.homeView = navParams.get('homeView');
        this.moduleId = navParams.get('moduleId');
        this.courseId = navParams.get('courseId');
    }
    /**
     * Function called when a page is clicked.
     *
     * @param page Clicked page.
     */
    AddonModWikiMapPage.prototype.goToPage = function (page) {
        this.viewCtrl.dismiss({ type: 'page', goto: page });
    };
    /**
     * Go back to the initial page of the wiki.
     */
    AddonModWikiMapPage.prototype.goToWikiHome = function () {
        this.viewCtrl.dismiss({ type: 'home', goto: this.homeView });
    };
    /**
     * Construct the map of pages.
     *
     * @param pages List of pages.
     */
    AddonModWikiMapPage.prototype.constructMap = function (pages) {
        var _this = this;
        var letter, initialLetter;
        this.map = [];
        pages.sort(function (a, b) {
            var compareA = a.title.toLowerCase().trim(), compareB = b.title.toLowerCase().trim();
            return compareA.localeCompare(compareB);
        });
        pages.forEach(function (page) {
            var letterCandidate = page.title.charAt(0).toLocaleUpperCase();
            // Should we create a new grouping?
            if (letterCandidate !== initialLetter) {
                initialLetter = letterCandidate;
                letter = { label: letterCandidate, pages: [] };
                _this.map.push(letter);
            }
            // Add the subwiki to the currently active grouping.
            letter.pages.push(page);
        });
    };
    /**
     * Close modal.
     */
    AddonModWikiMapPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddonModWikiMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-wiki-map',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\wiki\pages\map\map.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_wiki.map\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <nav>\n\n        <ion-list>\n\n            <!-- Go to "home". -->\n\n            <a ion-item text-wrap *ngIf="homeView" (click)="goToWikiHome()">\n\n                <ion-icon name="home" item-start></ion-icon> {{ \'addon.mod_wiki.gowikihome\' | translate }}\n\n            </a>\n\n            <ng-container *ngFor="let letter of map">\n\n                <ion-item-divider *ngIf="letter.label">\n\n                    {{ letter.label }}\n\n                </ion-item-divider>\n\n                <a ion-item text-wrap *ngFor="let page of letter.pages" (click)="goToPage(page)" [class.core-nav-item-selected]="selected == page.id">\n\n                    <ion-icon name="home" item-start *ngIf="page.firstpage"></ion-icon> <core-format-text [text]="page.title" contextLevel="module" [contextInstanceId]="moduleId" [courseId]="courseId"></core-format-text>\n\n                    <ion-note *ngIf="!page.id" item-end>\n\n                        <ion-icon name="time"></ion-icon>\n\n                        <span text-wrap>{{ \'core.notsent\' | translate }}</span>\n\n                    </ion-note>\n\n                </a>\n\n            </ng-container>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\wiki\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], AddonModWikiMapPage);
    return AddonModWikiMapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=73.js.map