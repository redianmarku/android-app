webpackJsonp([91],{

/***/ 2101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonMenuModalPageModule", function() { return AddonModLessonMenuModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_modal__ = __webpack_require__(2257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(1);
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






var AddonModLessonMenuModalPageModule = /** @class */ (function () {
    function AddonModLessonMenuModalPageModule() {
    }
    AddonModLessonMenuModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__menu_modal__["a" /* AddonModLessonMenuModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__menu_modal__["a" /* AddonModLessonMenuModalPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModLessonMenuModalPageModule);
    return AddonModLessonMenuModalPageModule;
}());

//# sourceMappingURL=menu-modal.module.js.map

/***/ }),

/***/ 2257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModLessonMenuModalPage; });
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
 * Modal that renders the lesson menu and media file.
 */
var AddonModLessonMenuModalPage = /** @class */ (function () {
    function AddonModLessonMenuModalPage(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.pageInstance = params.get('page');
    }
    /**
     * Close modal.
     */
    AddonModLessonMenuModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Load a certain page.
     *
     * @param pageId The page ID to load.
     */
    AddonModLessonMenuModalPage.prototype.loadPage = function (pageId) {
        this.pageInstance.changePage && this.pageInstance.changePage(pageId);
        this.closeModal();
    };
    AddonModLessonMenuModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-lesson-menu-modal',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\menu-modal\menu-modal.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ pageInstance.lesson.name }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="addon-mod_lesson-menu-modal">\n\n    <nav>\n\n        <ion-list>\n\n            <!-- Media file. -->\n\n            <ng-container *ngIf="pageInstance.mediaFile">\n\n                <ion-item-divider><h2>{{ \'addon.mod_lesson.linkedmedia\' | translate }}</h2></ion-item-divider>\n\n                <core-file [file]="pageInstance.mediaFile" [component]="pageInstance.component" [componentId]="pageInstance.lesson.coursemodule"></core-file>\n\n            </ng-container>\n\n\n\n            <!-- Lesson menu. -->\n\n            <ng-container *ngIf="pageInstance.displayMenu">\n\n                <ion-item-divider><h2>{{ \'addon.mod_lesson.lessonmenu\' | translate }}</h2></ion-item-divider>\n\n                <ion-item text-center *ngIf="pageInstance.loadingMenu">\n\n                    <ion-spinner></ion-spinner>\n\n                </ion-item>\n\n                <div *ngIf="!pageInstance.loadingMenu">\n\n                    <ng-container *ngFor="let page of pageInstance.lessonPages">\n\n                        <a ion-item text-wrap *ngIf="page.display && page.displayinmenublock" (click)="loadPage(page.id)" [ngClass]=\'{"addon-mod_lesson-selected core-white-push-arrow": !pageInstance.eolData && pageInstance.currentPage == page.id}\'>\n\n                            <p><core-format-text [text]="page.title" contextLevel="module" [contextInstanceId]="pageInstance && pageInstance.lesson && pageInstance.lesson.coursemodule" [courseId]="pageInstance && pageInstance.courseId"></core-format-text></p>\n\n                        </a>\n\n                    </ng-container>\n\n                </div>\n\n            </ng-container>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\menu-modal\menu-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], AddonModLessonMenuModalPage);
    return AddonModLessonMenuModalPage;
}());

//# sourceMappingURL=menu-modal.js.map

/***/ })

});
//# sourceMappingURL=91.js.map