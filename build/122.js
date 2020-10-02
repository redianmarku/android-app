webpackJsonp([122],{

/***/ 2078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModBookTocPageModule", function() { return AddonModBookTocPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toc__ = __webpack_require__(2234);
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





var AddonModBookTocPageModule = /** @class */ (function () {
    function AddonModBookTocPageModule() {
    }
    AddonModBookTocPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__toc__["a" /* AddonModBookTocPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__toc__["a" /* AddonModBookTocPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModBookTocPageModule);
    return AddonModBookTocPageModule;
}());

//# sourceMappingURL=toc.module.js.map

/***/ }),

/***/ 2234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModBookTocPage; });
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
 * Modal to display the TOC of a book.
 */
var AddonModBookTocPage = /** @class */ (function () {
    function AddonModBookTocPage(navParams, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.showNumbers = true;
        this.addPadding = true;
        this.showBullets = false;
        this.moduleId = navParams.get('moduleId');
        this.chapters = navParams.get('chapters') || [];
        this.selected = navParams.get('selected');
        this.courseId = navParams.get('courseId');
        this.book = navParams.get('book');
        if (this.book) {
            this.showNumbers = this.book.numbering == 1 /* NUMBERS */;
            this.showBullets = this.book.numbering == 2 /* BULLETS */;
            this.addPadding = this.book.numbering != 0 /* NONE */;
        }
    }
    /**
     * Function called when a course is clicked.
     *
     * @param id ID of the clicked chapter.
     */
    AddonModBookTocPage.prototype.loadChapter = function (id) {
        this.viewCtrl.dismiss(id);
    };
    /**
     * Close modal.
     */
    AddonModBookTocPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddonModBookTocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-book-toc',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\book\pages\toc\toc.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_book.toc\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <nav>\n\n        <ion-list>\n\n            <a ion-item text-wrap *ngFor="let chapter of chapters" (click)="loadChapter(chapter.id)" [class.core-nav-item-selected]="selected == chapter.id" [class.item-dimmed]="chapter.hidden">\n\n                <p [attr.padding-left]="addPadding && chapter.level == 1 ? true : null">\n\n                    <span *ngIf="showNumbers" class="addon-mod-book-number">{{chapter.number}}</span>\n\n                    <span *ngIf="showBullets" class="addon-mod-book-bullet">&bull;</span>\n\n                    <core-format-text [text]="chapter.title" contextLevel="module" [contextInstanceId]="moduleId" [courseId]="courseId"></core-format-text>\n\n                </p>\n\n            </a>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\book\pages\toc\toc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], AddonModBookTocPage);
    return AddonModBookTocPage;
}());

//# sourceMappingURL=toc.js.map

/***/ })

});
//# sourceMappingURL=122.js.map