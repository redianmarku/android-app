webpackJsonp([85],{

/***/ 2105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAttemptPageModule", function() { return AddonModQuizAttemptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attempt__ = __webpack_require__(2261);
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






var AddonModQuizAttemptPageModule = /** @class */ (function () {
    function AddonModQuizAttemptPageModule() {
    }
    AddonModQuizAttemptPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__attempt__["a" /* AddonModQuizAttemptPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__attempt__["a" /* AddonModQuizAttemptPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModQuizAttemptPageModule);
    return AddonModQuizAttemptPageModule;
}());

//# sourceMappingURL=attempt.module.js.map

/***/ }),

/***/ 2261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizAttemptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_quiz__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(210);
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
 * Page that displays some summary data about an attempt.
 */
var AddonModQuizAttemptPage = /** @class */ (function () {
    function AddonModQuizAttemptPage(navParams, domUtils, quizProvider, quizHelper) {
        this.domUtils = domUtils;
        this.quizProvider = quizProvider;
        this.quizHelper = quizHelper;
        this.component = __WEBPACK_IMPORTED_MODULE_3__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
        this.attemptId = navParams.get('attemptId');
        this.quizId = navParams.get('quizId');
        this.courseId = navParams.get('courseId');
    }
    /**
     * Component being initialized.
     */
    AddonModQuizAttemptPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchQuizData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    AddonModQuizAttemptPage.prototype.doRefresh = function (refresher) {
        this.refreshData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizAttemptPage.prototype.fetchQuizData = function () {
        var _this = this;
        return this.quizProvider.getQuizById(this.courseId, this.quizId).then(function (quizData) {
            _this.quiz = quizData;
            _this.componentId = _this.quiz.coursemodule;
            return _this.fetchAttempt();
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'addon.mod_quiz.errorgetattempt', true);
        });
    };
    /**
     * Get the attempt data.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizAttemptPage.prototype.fetchAttempt = function () {
        var _this = this;
        var promises = [];
        var options, accessInfo;
        // Get all the attempts and search the one we want.
        promises.push(this.quizProvider.getUserAttempts(this.quizId).then(function (attempts) {
            for (var i = 0; i < attempts.length; i++) {
                var attempt = attempts[i];
                if (attempt.id == _this.attemptId) {
                    _this.attempt = attempt;
                    break;
                }
            }
            if (!_this.attempt) {
                // Attempt not found, error.
                return Promise.reject(null);
            }
            // Load flag to show if attempt is finished but not synced.
            return _this.quizProvider.loadFinishedOfflineData([_this.attempt]);
        }));
        promises.push(this.quizProvider.getCombinedReviewOptions(this.quiz.id).then(function (opts) {
            options = opts;
        }));
        // Check if the user can review the attempt.
        promises.push(this.quizProvider.getQuizAccessInformation(this.quiz.id).then(function (quizAccessInfo) {
            accessInfo = quizAccessInfo;
            if (accessInfo.canreviewmyattempts) {
                // Check if the user can review the attempt.
                return _this.quizProvider.invalidateAttemptReviewForPage(_this.attemptId, -1).catch(function () {
                    // Ignore errors.
                }).then(function () {
                    return _this.quizProvider.getAttemptReview(_this.attemptId, -1);
                }).catch(function () {
                    // Error getting the review, assume the user cannot review the attempt.
                    accessInfo.canreviewmyattempts = false;
                });
            }
        }));
        return Promise.all(promises).then(function () {
            // Determine fields to show.
            _this.quizHelper.setQuizCalculatedData(_this.quiz, options);
            _this.quiz.showReviewColumn = accessInfo.canreviewmyattempts;
            // Get readable data for the attempt.
            _this.quizHelper.setAttemptCalculatedData(_this.quiz, _this.attempt, false);
            // Check if the feedback should be displayed.
            var grade = Number(_this.attempt.rescaledGrade);
            if (_this.quiz.showFeedbackColumn && _this.quizProvider.isAttemptFinished(_this.attempt.state) &&
                options.someoptions.overallfeedback && !isNaN(grade)) {
                // Feedback should be displayed, get the feedback for the grade.
                return _this.quizProvider.getFeedbackForGrade(_this.quiz.id, grade).then(function (response) {
                    _this.attempt.feedback = response.feedbacktext;
                });
            }
            else {
                delete _this.attempt.feedback;
            }
        });
    };
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizAttemptPage.prototype.refreshData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.quizProvider.invalidateQuizData(this.courseId));
        promises.push(this.quizProvider.invalidateUserAttemptsForUser(this.quizId));
        promises.push(this.quizProvider.invalidateQuizAccessInformation(this.quizId));
        promises.push(this.quizProvider.invalidateCombinedReviewOptionsForUser(this.quizId));
        promises.push(this.quizProvider.invalidateAttemptReview(this.attemptId));
        if (this.attempt && typeof this.attempt.feedback != 'undefined') {
            promises.push(this.quizProvider.invalidateFeedback(this.quizId));
        }
        return Promise.all(promises).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchQuizData();
        });
    };
    AddonModQuizAttemptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-attempt',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\attempt\attempt.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text *ngIf="quiz" [text]="quiz.name" contextLevel="module" [contextInstanceId]="quiz.coursemodule" [courseId]="courseId"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list *ngIf="attempt">\n\n            <ion-item text-wrap no-lines>\n\n                <h2>{{ \'addon.mod_quiz.attemptnumber\' | translate }}</h2>\n\n                <p *ngIf="attempt.preview">{{ \'addon.mod_quiz.preview\' | translate }}</p>\n\n                <p *ngIf="!attempt.preview">{{ attempt.attempt }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap no-lines>\n\n                <h2>{{ \'addon.mod_quiz.attemptstate\' | translate }}</h2>\n\n                <p *ngFor="let sentence of attempt.readableState">{{ sentence }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap no-lines *ngIf="quiz.showMarkColumn && attempt.readableMark !== \'\'">\n\n                <h2>{{ \'addon.mod_quiz.marks\' | translate }} / {{ quiz.sumGradesFormatted }}</h2>\n\n                <p>{{ attempt.readableMark }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap no-lines *ngIf="quiz.showGradeColumn && attempt.readableGrade !== \'\'">\n\n                <h2>{{ \'addon.mod_quiz.grade\' | translate }} / {{ quiz.gradeFormatted }}</h2>\n\n                <p>{{ attempt.readableGrade }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap no-lines *ngIf="quiz.showFeedbackColumn && attempt.feedback">\n\n                <h2>{{ \'addon.mod_quiz.feedback\' | translate }}</h2>\n\n                <p><core-format-text [component]="component" [componentId]="componentId" [text]="attempt.feedback" contextLevel="module" [contextInstanceId]="quiz.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n            </ion-item>\n\n            <ion-item *ngIf="quiz.showReviewColumn && attempt.finished">\n\n                <button ion-button block icon-start navPush="AddonModQuizReviewPage" [navParams]="{courseId: courseId, quizId: quiz.id, attemptId: attempt.id}">\n\n                    <ion-icon name="search"></ion-icon>\n\n                    {{ \'addon.mod_quiz.review\' | translate }}\n\n                </button>\n\n            </ion-item>\n\n            <ion-item text-wrap class="core-danger-item" *ngIf="!quiz.showReviewColumn">\n\n                <p>{{ \'addon.mod_quiz.noreviewattempt\' | translate }}</p>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\attempt\attempt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_quiz__["a" /* AddonModQuizProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* AddonModQuizHelperProvider */]])
    ], AddonModQuizAttemptPage);
    return AddonModQuizAttemptPage;
}());

//# sourceMappingURL=attempt.js.map

/***/ })

});
//# sourceMappingURL=85.js.map