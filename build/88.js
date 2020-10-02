webpackJsonp([88],{

/***/ 2178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonUserRetakePageModule", function() { return AddonModLessonUserRetakePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_retake__ = __webpack_require__(2334);
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







var AddonModLessonUserRetakePageModule = /** @class */ (function () {
    function AddonModLessonUserRetakePageModule() {
    }
    AddonModLessonUserRetakePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__user_retake__["a" /* AddonModLessonUserRetakePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__user_retake__["a" /* AddonModLessonUserRetakePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModLessonUserRetakePageModule);
    return AddonModLessonUserRetakePageModule;
}());

//# sourceMappingURL=user-retake.module.js.map

/***/ }),

/***/ 2334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModLessonUserRetakePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_lesson__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_helper__ = __webpack_require__(1053);
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
 * Page that displays a retake made by a certain user.
 */
var AddonModLessonUserRetakePage = /** @class */ (function () {
    function AddonModLessonUserRetakePage(navParams, sitesProvider, textUtils, translate, domUtils, userProvider, timeUtils, lessonProvider, lessonHelper, utils) {
        this.textUtils = textUtils;
        this.translate = translate;
        this.domUtils = domUtils;
        this.userProvider = userProvider;
        this.timeUtils = timeUtils;
        this.lessonProvider = lessonProvider;
        this.lessonHelper = lessonHelper;
        this.utils = utils;
        this.component = __WEBPACK_IMPORTED_MODULE_9__providers_lesson__["a" /* AddonModLessonProvider */].COMPONENT;
        this.lessonId = navParams.get('lessonId');
        this.courseId = navParams.get('courseId');
        this.userId = navParams.get('userId') || sitesProvider.getCurrentSiteUserId();
        this.retakeNumber = navParams.get('retake');
    }
    /**
     * Component being initialized.
     */
    AddonModLessonUserRetakePage.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch the data.
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Change the retake displayed.
     *
     * @param retakeNumber The new retake number.
     */
    AddonModLessonUserRetakePage.prototype.changeRetake = function (retakeNumber) {
        var _this = this;
        this.loaded = false;
        this.setRetake(retakeNumber).catch(function (error) {
            _this.selectedRetake = _this.previousSelectedRetake;
            _this.domUtils.showErrorModal(_this.utils.addDataNotDownloadedError(error, 'Error getting attempt.'));
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    AddonModLessonUserRetakePage.prototype.doRefresh = function (refresher) {
        this.refreshData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Get lesson and retake data.
     *
     * @return Promise resolved when done.
     */
    AddonModLessonUserRetakePage.prototype.fetchData = function () {
        var _this = this;
        return this.lessonProvider.getLessonById(this.courseId, this.lessonId).then(function (lessonData) {
            _this.lesson = lessonData;
            // Get the retakes overview for all participants.
            return _this.lessonProvider.getRetakesOverview(_this.lesson.id);
        }).then(function (data) {
            // Search the student.
            var student;
            if (data && data.students) {
                for (var i = 0; i < data.students.length; i++) {
                    if (data.students[i].id == _this.userId) {
                        student = data.students[i];
                        break;
                    }
                }
            }
            if (!student) {
                // Student not found.
                return Promise.reject(_this.translate.instant('addon.mod_lesson.cannotfinduser'));
            }
            if (!student.attempts || !student.attempts.length) {
                // No retakes.
                return Promise.reject(_this.translate.instant('addon.mod_lesson.cannotfindattempt'));
            }
            student.bestgrade = _this.textUtils.roundToDecimals(student.bestgrade, 2);
            student.attempts.forEach(function (retake) {
                if (!_this.selectedRetake && _this.retakeNumber == retake.try) {
                    // The retake specified as parameter exists. Use it.
                    _this.selectedRetake = _this.retakeNumber;
                }
                retake.label = _this.lessonHelper.getRetakeLabel(retake);
            });
            if (!_this.selectedRetake) {
                // Retake number not specified or not valid, use the last retake.
                _this.selectedRetake = student.attempts[student.attempts.length - 1].try;
            }
            // Get the profile image of the user.
            return _this.userProvider.getProfile(student.id, _this.courseId, true).then(function (user) {
                student.profileimageurl = user.profileimageurl;
                return student;
            }).catch(function () {
                // Error getting profile, resolve promise without adding any extra data.
                return student;
            });
        }).then(function (student) {
            _this.student = student;
            return _this.setRetake(_this.selectedRetake);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting data.', true);
        });
    };
    /**
     * Refreshes data.
     *
     * @return Promise resolved when done.
     */
    AddonModLessonUserRetakePage.prototype.refreshData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.lessonProvider.invalidateLessonData(this.courseId));
        if (this.lesson) {
            promises.push(this.lessonProvider.invalidateRetakesOverview(this.lesson.id));
            promises.push(this.lessonProvider.invalidateUserRetakesForUser(this.lesson.id, this.userId));
        }
        return Promise.all(promises).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchData();
        });
    };
    /**
     * Set the retake to view and load its data.
     *
     * @param retakeNumber Retake number to set.
     * @return Promise resolved when done.
     */
    AddonModLessonUserRetakePage.prototype.setRetake = function (retakeNumber) {
        var _this = this;
        this.selectedRetake = retakeNumber;
        return this.lessonProvider.getUserRetake(this.lessonId, retakeNumber, this.userId).then(function (data) {
            if (data && data.completed != -1) {
                // Completed.
                data.userstats.grade = _this.textUtils.roundToDecimals(data.userstats.grade, 2);
                data.userstats.timetakenReadable = _this.timeUtils.formatTime(data.userstats.timetotake);
            }
            if (data && data.answerpages) {
                // Format pages data.
                data.answerpages.forEach(function (page) {
                    if (_this.lessonProvider.answerPageIsContent(page)) {
                        page.isContent = true;
                        if (page.answerdata && page.answerdata.answers) {
                            page.answerdata.answers.forEach(function (answer) {
                                // Content pages only have 1 valid field in the answer array.
                                answer[0] = _this.lessonHelper.getContentPageAnswerDataFromHtml(answer[0]);
                            });
                        }
                    }
                    else if (_this.lessonProvider.answerPageIsQuestion(page)) {
                        page.isQuestion = true;
                        if (page.answerdata && page.answerdata.answers) {
                            page.answerdata.answers.forEach(function (answer) {
                                // Only the first field of the answer array requires to be parsed.
                                answer[0] = _this.lessonHelper.getQuestionPageAnswerDataFromHtml(answer[0]);
                            });
                        }
                    }
                });
            }
            _this.retake = data;
            _this.previousSelectedRetake = _this.selectedRetake;
        });
    };
    AddonModLessonUserRetakePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-lesson-user-retake',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\user-retake\user-retake.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_lesson.detailedstats\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list *ngIf="student">\n\n            <!-- Student data. -->\n\n            <a ion-item text-wrap core-user-link [userId]="student.id" [courseId]="courseId" [title]="student.fullname">\n\n                <ion-avatar core-user-avatar [user]="student" item-start [userId]="student.id" [courseId]="courseId"></ion-avatar>\n\n                <h2>{{student.fullname}}</h2>\n\n                <core-progress-bar [progress]="student.bestgrade"></core-progress-bar>\n\n            </a>\n\n\n\n            <!-- Retake selector if there is more than one retake. -->\n\n            <ion-item text-wrap *ngIf="student.attempts && student.attempts.length > 1">\n\n                <ion-label id="addon-mod_lesson-retakeslabel">{{ \'addon.mod_lesson.attemptheader\' | translate }}</ion-label>\n\n                <ion-select [(ngModel)]="selectedRetake" (ionChange)="changeRetake(selectedRetake)" aria-labelledby="addon-mod_lesson-retakeslabel" interface="action-sheet">\n\n                    <ion-option *ngFor="let retake of student.attempts" [value]="retake.try">{{retake.label}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Retake stats. -->\n\n            <div *ngIf="retake && retake.userstats && retake.userstats.gradeinfo" class="addon-mod_lesson-userstats">\n\n                <ion-item text-wrap>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <p class="item-heading">{{ \'addon.mod_lesson.grade\' | translate }}</p>\n\n                            <p>{{ \'core.percentagenumber\' | translate:{$a: retake.userstats.grade} }}</p>\n\n                        </ion-col>\n\n\n\n                        <ion-col>\n\n                            <p class="item-heading">{{ \'addon.mod_lesson.rawgrade\' | translate }}</p>\n\n                            <p>{{ retake.userstats.gradeinfo.earned }} / {{ retake.userstats.gradeinfo.total }}</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-item>\n\n                <ion-item text-wrap>\n\n                    <p class="item-heading">{{ \'addon.mod_lesson.timetaken\' | translate }}</p>\n\n                    <p>{{ retake.userstats.timetakenReadable }}</p>\n\n                </ion-item>\n\n                <ion-item text-wrap>\n\n                    <p class="item-heading">{{ \'addon.mod_lesson.completed\' | translate }}</p>\n\n                    <p>{{ retake.userstats.completed * 1000 | coreFormatDate }}</p>\n\n                </ion-item>\n\n            </div>\n\n\n\n            <!-- Not completed, no stats. -->\n\n            <ion-item text-wrap *ngIf="retake && (!retake.userstats || !retake.userstats.gradeinfo)">\n\n                {{ \'addon.mod_lesson.notcompleted\' | translate }}\n\n            </ion-item>\n\n\n\n            <!-- Pages. -->\n\n            <ng-container *ngIf="retake">\n\n                <!-- The "text-dimmed" class does nothing, but the same goes for the "dimmed" class in Moodle. -->\n\n                <ion-card *ngFor="let page of retake.answerpages" class="addon-mod_lesson-answerpage" [ngClass]="{\'text-dimmed\': page.grayout}">\n\n                    <ion-card-header text-wrap>\n\n                        <h2>{{page.qtype}}: {{page.title}}</h2>\n\n                    </ion-card-header>\n\n                    <ion-item text-wrap>\n\n                        <p class="item-heading">{{ \'addon.mod_lesson.question\' | translate }}</p>\n\n                        <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [maxHeight]="50" [text]="page.contents" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                    </ion-item>\n\n                    <ion-item text-wrap>\n\n                        <p class="item-heading">{{ \'addon.mod_lesson.answer\' | translate }}</p>\n\n                    </ion-item>\n\n                    <ion-item text-wrap *ngIf="!page.answerdata || !page.answerdata.answers || !page.answerdata.answers.length">\n\n                        <p>{{ \'addon.mod_lesson.didnotanswerquestion\' | translate }}</p>\n\n                    </ion-item>\n\n                    <div *ngIf="page.answerdata && page.answerdata.answers && page.answerdata.answers.length" class="addon-mod_lesson-answer">\n\n                        <div *ngFor="let answer of page.answerdata.answers">\n\n                            <ion-item text-wrap *ngIf="page.isContent">\n\n                                <!-- Content page, display a button and the content. -->\n\n                                <ion-row>\n\n                                    <ion-col>\n\n                                        <button ion-button block text-wrap color="light" [disabled]="true">{{ answer[0].buttonText }}</button>\n\n                                    </ion-col>\n\n                                    <ion-col>\n\n                                        <p [innerHTML]="answer[0].content"></p>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-item>\n\n\n\n                            <div *ngIf="page.isQuestion">\n\n                                <!-- Question page, show the right input for the answer. -->\n\n\n\n                                <!-- Truefalse or matching. -->\n\n                                <ion-item text-wrap *ngIf="answer[0].isCheckbox" [ngClass]="{\'addon-mod_lesson-highlight\': answer[0].highlight}">\n\n                                    <ion-label>\n\n                                        <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0].content" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                                        <ion-badge *ngIf="answer[1]" color="dark">\n\n                                            <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                        </ion-badge>\n\n                                    </ion-label>\n\n                                    <ion-checkbox [attr.name]="answer[0].name" [ngModel]="answer[0].checked" [disabled]="true" item-end>\n\n                                    </ion-checkbox>\n\n                                </ion-item>\n\n\n\n                                <!-- Short answer or numeric. -->\n\n                                <ion-item text-wrap *ngIf="answer[0].isText">\n\n                                    <p>{{ answer[0].value }}</p>\n\n                                    <ion-badge *ngIf="answer[1]" color="dark">\n\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                    </ion-badge>\n\n                                </ion-item>\n\n\n\n                                <!-- Matching. -->\n\n                                <ion-item text-wrap *ngIf="answer[0].isSelect">\n\n                                    <ion-row>\n\n                                        <ion-col>\n\n                                            <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]=" answer[0].content" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                                        </ion-col>\n\n                                        <ion-col>\n\n                                            <p>{{answer[0].value}}</p>\n\n                                            <ion-badge *ngIf="answer[1]" color="dark">\n\n                                                <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                            </ion-badge>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                                </ion-item>\n\n\n\n                                <!-- Essay or couldn\'t determine. -->\n\n                                <ion-item text-wrap *ngIf="!answer[0].isCheckbox && !answer[0].isText && !answer[0].isSelect">\n\n                                    <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                                    <ion-badge *ngIf="answer[1]" color="dark">\n\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                    </ion-badge>\n\n                                </ion-item>\n\n                            </div>\n\n\n\n                            <ion-item text-wrap *ngIf="!page.isContent && !page.isQuestion">\n\n                                <!-- Another page (end of branch, ...). -->\n\n                                <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                                <ion-badge *ngIf="answer[1]" color="dark">\n\n                                    <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                </ion-badge>\n\n                            </ion-item>\n\n                        </div>\n\n\n\n                        <ion-item text-wrap *ngIf="page.answerdata.response">\n\n                            <p class="item-heading">{{ \'addon.mod_lesson.response\' | translate }}</p>\n\n                            <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="page.answerdata.response" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                        </ion-item>\n\n                        <ion-item text-wrap *ngIf="page.answerdata.score">\n\n                            <p>{{page.answerdata.score}}</p>\n\n                        </ion-item>\n\n                    </div>\n\n                </ion-card>\n\n            </ng-container>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\user-retake\user-retake.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_user_providers_user__["b" /* CoreUserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_time__["b" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_lesson__["a" /* AddonModLessonProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_helper__["a" /* AddonModLessonHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["b" /* CoreUtilsProvider */]])
    ], AddonModLessonUserRetakePage);
    return AddonModLessonUserRetakePage;
}());

//# sourceMappingURL=user-retake.js.map

/***/ })

});
//# sourceMappingURL=88.js.map