webpackJsonp([97],{

/***/ 2095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityAttemptResultsPageModule", function() { return AddonModH5PActivityAttemptResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attempt_results__ = __webpack_require__(2251);
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







var AddonModH5PActivityAttemptResultsPageModule = /** @class */ (function () {
    function AddonModH5PActivityAttemptResultsPageModule() {
    }
    AddonModH5PActivityAttemptResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__attempt_results__["a" /* AddonModH5PActivityAttemptResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__attempt_results__["a" /* AddonModH5PActivityAttemptResultsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], AddonModH5PActivityAttemptResultsPageModule);
    return AddonModH5PActivityAttemptResultsPageModule;
}());

//# sourceMappingURL=attempt-results.module.js.map

/***/ }),

/***/ 2251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModH5PActivityAttemptResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__ = __webpack_require__(194);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Page that displays results of an attempt.
 */
var AddonModH5PActivityAttemptResultsPage = /** @class */ (function () {
    function AddonModH5PActivityAttemptResultsPage(navParams) {
        this.component = __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__["b" /* AddonModH5PActivityProvider */].COMPONENT;
        this.courseId = navParams.get('courseId');
        this.h5pActivityId = navParams.get('h5pActivityId');
        this.attemptId = navParams.get('attemptId');
    }
    /**
     * Component being initialized.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_1, 'Error loading attempt.');
                        return [3 /*break*/, 4];
                    case 3:
                        this.loaded = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.doRefresh = function (refresher) {
        this.refreshData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.fetchActivity(),
                            this.fetchAttempt(),
                        ])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fetchUserProfile()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get activity data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.fetchActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.getH5PActivityById(this.courseId, this.h5pActivityId)];
                    case 1:
                        _a.h5pActivity = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get attempts.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.fetchAttempt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.getAttemptResults(this.h5pActivityId, this.attemptId)];
                    case 1:
                        _a.attempt = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get user profile.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.fetchUserProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__["a" /* CoreUser */].instance.getProfile(this.attempt.userid, this.courseId, true)];
                    case 1:
                        _a.user = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityAttemptResultsPage.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([
                                __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.invalidateActivityData(this.courseId),
                                __WEBPACK_IMPORTED_MODULE_4__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.invalidateAttemptResults(this.h5pActivityId, this.attemptId),
                            ])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, this.fetchData()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddonModH5PActivityAttemptResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-h5pactivity-attempt-results',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\h5pactivity\pages\attempt-results\attempt-results.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text *ngIf="h5pActivity" [text]="h5pActivity.name" contextLevel="module" [contextInstanceId]="h5pActivity.coursemodule" [courseId]="courseId"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ng-container *ngIf="attempt">\n\n            <!-- Attempt number and user that did the attempt. -->\n\n            <a ion-item text-wrap *ngIf="user" core-user-link [userId]="user.id" [courseId]="courseId" [title]="user.fullname">\n\n                <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n\n                <h2>{{ \'addon.mod_h5pactivity.attempt\' | translate }} #{{attempt.attempt}}: {{user.fullname}}</h2>\n\n            </a>\n\n            <!-- Attempt number (if user not known). -->\n\n            <ion-item text-wrap *ngIf="!user">\n\n                <h2>{{ \'addon.mod_h5pactivity.attempt\' | translate }} #{{attempt.attempt}}</h2>\n\n            </ion-item>\n\n\n\n            <!-- Attempt summary. -->\n\n            <ion-card class="addon-mod_h5pactivity-attempt-result-summary">\n\n                <ion-list>\n\n                    <ion-item text-wrap no-lines>\n\n                        <h2>{{ \'addon.mod_h5pactivity.startdate\' | translate }}</h2>\n\n                        <p>{{ attempt.timecreated | coreFormatDate:\'strftimedatetime\' }}</p>\n\n                    </ion-item>\n\n                    <ion-item text-wrap no-lines>\n\n                        <h2>{{ \'addon.mod_h5pactivity.completion\' | translate }}</h2>\n\n                        <p *ngIf="attempt.completion">\n\n                            <img src="assets/img/completion/completion-auto-y.svg" role="presentation" alt="">\n\n                            {{ \'addon.mod_h5pactivity.attempt_completion_yes\' | translate }}\n\n                        </p>\n\n                        <p *ngIf="!attempt.completion">\n\n                            <img src="assets/img/completion/completion-auto-n.svg" role="presentation" alt="">\n\n                            {{ \'addon.mod_h5pactivity.attempt_completion_no\' | translate }}\n\n                        </p>\n\n                    </ion-item>\n\n                    <ion-item text-wrap no-lines>\n\n                        <h2>{{ \'addon.mod_h5pactivity.duration\' | translate }}</h2>\n\n                        <p>{{ attempt.durationReadable }}</p>\n\n                    </ion-item>\n\n                    <ion-item text-wrap no-lines>\n\n                        <h2>{{ \'addon.mod_h5pactivity.outcome\' | translate }}</h2>\n\n                        <p *ngIf="attempt.success !== null && attempt.success" >\n\n                            <core-icon name="fa-check-circle"></core-icon>\n\n                            {{ \'addon.mod_h5pactivity.attempt_success_pass\' | translate }}\n\n                        </p>\n\n                        <p *ngIf="attempt.success !== null && !attempt.success" >\n\n                            <core-icon name="fa-circle-o"></core-icon>\n\n                            {{ \'addon.mod_h5pactivity.attempt_success_fail\' | translate }}\n\n                        </p>\n\n                        <p *ngIf="attempt.success === null" >\n\n                            {{ \'addon.mod_h5pactivity.attempt_success_unknown\' | translate }}\n\n                        </p>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="attempt.maxscore" text-wrap no-lines>\n\n                        <h2>{{ \'addon.mod_h5pactivity.totalscore\' | translate }}</h2>\n\n                        <p>{{ \'addon.mod_h5pactivity.score_out_of\' | translate:{$a: attempt} }}</p>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-card>\n\n\n\n            <!-- Results. -->\n\n            <ng-container *ngIf="attempt.results">\n\n                <ion-card *ngFor="let result of attempt.results">\n\n                    <ion-card-header text-wrap>\n\n                        <core-format-text [text]="result.description" [component]="component" [componentId]="h5pActivity.cmid" contextLevel="module" [contextInstanceId]="h5pActivity.cmid" [courseId]="courseId"></core-format-text>\n\n                    </ion-card-header>\n\n                    <ion-item *ngIf="result.content" text-wrap>\n\n                        <core-format-text [text]="result.content" [component]="component" [componentId]="h5pActivity.cmid" contextLevel="module" [contextInstanceId]="h5pActivity.cmid" [courseId]="courseId"></core-format-text>\n\n                    </ion-item>\n\n\n\n                    <!-- Options. -->\n\n                    <ng-container *ngIf="result.options && result.options.length">\n\n                        <ion-item text-wrap class="addon-mod_h5pactivity-result-table-header">\n\n                            <ion-row align-items-center>\n\n                                <ion-col text-center>{{ result.optionslabel }}</ion-col>\n\n                                <ion-col text-center>{{ result.correctlabel }}</ion-col>\n\n                                <ion-col text-center>{{ result.answerlabel }}</ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                        <ion-item text-wrap *ngFor="let option of result.options" class="addon-mod_h5pactivity-result-table-row">\n\n                            <ion-row align-items-center>\n\n                                <ion-col text-center>\n\n                                    <core-format-text [text]="option.description" [component]="component" [componentId]="h5pActivity.cmid" contextLevel="module" [contextInstanceId]="h5pActivity.cmid" [courseId]="courseId"></core-format-text>\n\n                                </ion-col>\n\n                                <ion-col text-center>\n\n                                    <ng-container *ngIf="option.correctanswer">\n\n                                        <ng-container *ngTemplateOutlet="answerTemplate; context: {answer: option.correctanswer}"></ng-container>\n\n                                    </ng-container>\n\n                                </ion-col>\n\n                                <ion-col text-center>\n\n                                    <ng-container *ngIf="option.useranswer">\n\n                                        <ng-container *ngTemplateOutlet="answerTemplate; context: {answer: option.useranswer}"></ng-container>\n\n                                    </ng-container>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n\n\n                        <!-- Result score. -->\n\n                        <ion-item *ngIf="result.maxscore" text-wrap text-end class="addon-mod_h5pactivity-result-score">\n\n                            <p><strong>{{ \'addon.mod_h5pactivity.score\' | translate }}: {{ \'addon.mod_h5pactivity.score_out_of\' | translate:{$a: result} }}</strong></p>\n\n                        </ion-item>\n\n                    </ng-container>\n\n\n\n                    <!-- Result doesn\'t support tracking. -->\n\n                    <ion-item text-wrap class="core-warning-item" *ngIf="!result.track">\n\n                        <ion-icon item-start name="warning" color="warning"></ion-icon> {{ \'addon.mod_h5pactivity.no_compatible_track\' | translate:{$a: result.interactiontype} }}\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ng-container>\n\n        </ng-container>\n\n    </core-loading>\n\n</ion-content>\n\n\n\n<!-- Template to render an answer. -->\n\n<ng-template #answerTemplate let-answer="answer">\n\n    <p *ngIf="answer.correct">\n\n        <core-icon name="fa-check" [label]="\'addon.mod_h5pactivity.answer_correct\' | translate" color="success"></core-icon>\n\n        {{ answer.answer }}\n\n    </p>\n\n    <p *ngIf="answer.incorrect">\n\n        <core-icon name="fa-remove" [label]="\'addon.mod_h5pactivity.answer_incorrect\' | translate" color="danger"></core-icon>\n\n        {{ answer.answer }}\n\n    </p>\n\n    <p *ngIf="answer.text">\n\n        {{ answer.answer }}\n\n    </p>\n\n    <p *ngIf="answer.checked">\n\n        <core-icon name="fa-check-circle" [label]="\'addon.mod_h5pactivity.answer_checked\' | translate"></core-icon>\n\n    </p>\n\n    <p *ngIf="answer.pass">\n\n        <core-icon name="fa-check" [label]="\'addon.mod_h5pactivity.answer_pass\' | translate" color="success"></core-icon>\n\n    </p>\n\n    <p *ngIf="answer.fail">\n\n        <core-icon name="fa-remove" [label]="\'addon.mod_h5pactivity.answer_fail\' | translate" color="danger"></core-icon>\n\n    </p>\n\n</ng-template>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\h5pactivity\pages\attempt-results\attempt-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddonModH5PActivityAttemptResultsPage);
    return AddonModH5PActivityAttemptResultsPage;
}());

//# sourceMappingURL=attempt-results.js.map

/***/ })

});
//# sourceMappingURL=97.js.map