webpackJsonp([83],{

/***/ 2107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizNavigationModalPageModule", function() { return AddonModQuizNavigationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_modal__ = __webpack_require__(2263);
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






var AddonModQuizNavigationModalPageModule = /** @class */ (function () {
    function AddonModQuizNavigationModalPageModule() {
    }
    AddonModQuizNavigationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_modal__["a" /* AddonModQuizNavigationModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__navigation_modal__["a" /* AddonModQuizNavigationModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModQuizNavigationModalPageModule);
    return AddonModQuizNavigationModalPageModule;
}());

//# sourceMappingURL=navigation-modal.module.js.map

/***/ }),

/***/ 2263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizNavigationModalPage; });
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
 * Modal that renders the quiz navigation.
 */
var AddonModQuizNavigationModalPage = /** @class */ (function () {
    function AddonModQuizNavigationModalPage(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.isReview = !!params.get('isReview');
        this.pageInstance = params.get('page');
    }
    /**
     * Close modal.
     */
    AddonModQuizNavigationModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Load a certain page.
     *
     * @param page The page to load.
     * @param slot Slot of the question to scroll to.
     */
    AddonModQuizNavigationModalPage.prototype.loadPage = function (page, slot) {
        this.pageInstance.changePage && this.pageInstance.changePage(page, true, slot);
        this.closeModal();
    };
    /**
     * Switch mode in review.
     */
    AddonModQuizNavigationModalPage.prototype.switchMode = function () {
        this.pageInstance.switchMode && this.pageInstance.switchMode();
        this.closeModal();
    };
    AddonModQuizNavigationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-navigation-modal',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\navigation-modal\navigation-modal.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_quiz.quiznavigation\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="addon-mod_quiz-navigation-modal">\n\n    <nav>\n\n        <ion-list>\n\n            <!-- In player, show button to finish attempt. -->\n\n            <a ion-item text-wrap *ngIf="!isReview" (click)="loadPage(-1)">\n\n                {{ \'addon.mod_quiz.finishattemptdots\' | translate }}\n\n            </a>\n\n\n\n            <!-- In review we can toggle between all questions in same page or one page at a time. -->\n\n            <a ion-item text-wrap *ngIf="isReview && pageInstance.numPages > 1" (click)="switchMode()">\n\n                <span *ngIf="!pageInstance.showAll">{{ \'addon.mod_quiz.showall\' | translate }}</span>\n\n                <span *ngIf="pageInstance.showAll">{{ \'addon.mod_quiz.showeachpage\' | translate }}</span>\n\n            </a>\n\n            <a ion-item text-wrap *ngFor="let question of pageInstance.navigation" class="{{question.stateClass}}" [ngClass]=\'{"core-nav-item-selected": !pageInstance.showSummary && pageInstance.attempt.currentpage == question.page}\' (click)="loadPage(question.page, question.slot)">\n\n                <span *ngIf="question.number">{{ \'core.question.questionno\' | translate:{$a: question.number} }}</span>\n\n                <span *ngIf="!question.number">{{ \'core.question.information\' | translate }}</span>\n\n                <core-icon item-content *ngIf="!question.number" name="information-circle" color="info"></core-icon>\n\n                <core-icon item-content *ngIf="question.stateClass == \'core-question-requiresgrading\'" name="fa-question-circle" color="gray" [label]="question.status"></core-icon>\n\n                <core-icon item-content *ngIf="question.stateClass == \'core-question-correct\'" name="fa-check" color="success" [label]="question.status"></core-icon>\n\n                <core-icon item-content *ngIf="question.stateClass == \'core-question-partiallycorrect\'" name="fa-check-square" color="warning" [label]="question.status"></core-icon>\n\n                <core-icon item-content *ngIf="question.stateClass == \'core-question-incorrect\' || question.stateClass == \'core-question-notanswered\'" name="fa-remove" color="danger" [label]="question.status"></core-icon>\n\n            </a>\n\n\n\n            <!-- In player, show button to finish attempt. -->\n\n            <a ion-item text-wrap *ngIf="!isReview" (click)="loadPage(-1)">\n\n                {{ \'addon.mod_quiz.finishattemptdots\' | translate }}\n\n            </a>\n\n\n\n            <!-- In review we can toggle between all questions in same page or one page at a time. -->\n\n            <a ion-item text-wrap *ngIf="isReview && pageInstance.numPages > 1" (click)="switchMode()">\n\n                <span *ngIf="!pageInstance.showAll">{{ \'addon.mod_quiz.showall\' | translate }}</span>\n\n                <span *ngIf="pageInstance.showAll">{{ \'addon.mod_quiz.showeachpage\' | translate }}</span>\n\n            </a>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\navigation-modal\navigation-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], AddonModQuizNavigationModalPage);
    return AddonModQuizNavigationModalPage;
}());

//# sourceMappingURL=navigation-modal.js.map

/***/ })

});
//# sourceMappingURL=83.js.map