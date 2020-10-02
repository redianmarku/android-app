webpackJsonp([95],{

/***/ 2097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPageModule", function() { return AddonModH5PActivityUserAttemptsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_attempts__ = __webpack_require__(2253);
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







var AddonModH5PActivityUserAttemptsPageModule = /** @class */ (function () {
    function AddonModH5PActivityUserAttemptsPageModule() {
    }
    AddonModH5PActivityUserAttemptsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__user_attempts__["a" /* AddonModH5PActivityUserAttemptsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__user_attempts__["a" /* AddonModH5PActivityUserAttemptsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], AddonModH5PActivityUserAttemptsPageModule);
    return AddonModH5PActivityUserAttemptsPageModule;
}());

//# sourceMappingURL=user-attempts.module.js.map

/***/ }),

/***/ 2253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModH5PActivityUserAttemptsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_h5pactivity__ = __webpack_require__(194);
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
 * Page that displays user attempts of a certain user.
 */
var AddonModH5PActivityUserAttemptsPage = /** @class */ (function () {
    function AddonModH5PActivityUserAttemptsPage(navParams) {
        this.courseId = navParams.get('courseId');
        this.h5pActivityId = navParams.get('h5pActivityId');
        this.userId = navParams.get('userId') || __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSites */].instance.getCurrentSiteUserId();
        this.isCurrentUser = this.userId == __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSites */].instance.getCurrentSiteUserId();
    }
    /**
     * Component being initialized.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.ngOnInit = function () {
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
                        __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_1, 'Error loading attempts.');
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
    AddonModH5PActivityUserAttemptsPage.prototype.doRefresh = function (refresher) {
        this.refreshData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    AddonModH5PActivityUserAttemptsPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.fetchActivity(),
                            this.fetchAttempts(),
                            this.fetchUserProfile(),
                        ])];
                    case 1:
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
    AddonModH5PActivityUserAttemptsPage.prototype.fetchActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.getH5PActivityById(this.courseId, this.h5pActivityId)];
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
    AddonModH5PActivityUserAttemptsPage.prototype.fetchAttempts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.getUserAttempts(this.h5pActivityId, { userId: this.userId })];
                    case 1:
                        _a.attemptsData = _b.sent();
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
    AddonModH5PActivityUserAttemptsPage.prototype.fetchUserProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__core_user_providers_user__["a" /* CoreUser */].instance.getProfile(this.userId, this.courseId, true)];
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
    AddonModH5PActivityUserAttemptsPage.prototype.refreshData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all([
                                __WEBPACK_IMPORTED_MODULE_5__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.invalidateActivityData(this.courseId),
                                __WEBPACK_IMPORTED_MODULE_5__providers_h5pactivity__["a" /* AddonModH5PActivity */].instance.invalidateUserAttempts(this.h5pActivityId, this.userId),
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
    AddonModH5PActivityUserAttemptsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-h5pactivity-user-attempts',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\h5pactivity\pages\user-attempts\user-attempts.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text *ngIf="h5pActivity" [text]="h5pActivity.name" contextLevel="module" [contextInstanceId]="h5pActivity.coursemodule" [courseId]="courseId"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n\n        <!-- User viewed. -->\n\n        <a ion-item text-wrap *ngIf="user && !isCurrentUser" core-user-link [userId]="user.id" [courseId]="courseId" [title]="user.fullname">\n\n            <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n\n            <h2>{{ user.fullname }}</h2>\n\n        </a>\n\n        <ion-item text-wrap *ngIf="user && isCurrentUser">\n\n            <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n\n            <h2>{{ \'addon.mod_h5pactivity.myattempts\' | translate }}</h2>\n\n        </ion-item>\n\n\n\n        <ion-list *ngIf="attemptsData">\n\n            <!-- Attempts used to calculate the score. -->\n\n            <ng-container *ngIf="attemptsData.scored">\n\n                <ion-item-divider>\n\n                    <h2>{{ attemptsData.scored.title }}</h2>\n\n                </ion-item-divider>\n\n                <ng-container *ngTemplateOutlet="attemptsTemplate; context: {attempts: attemptsData.scored.attempts}"></ng-container>\n\n            </ng-container>\n\n\n\n            <!-- All attempts. -->\n\n            <ng-container *ngIf="attemptsData.attempts && attemptsData.attempts.length">\n\n                <ion-item-divider>\n\n                    <h2>{{ \'addon.mod_h5pactivity.all_attempts\' | translate }}</h2>\n\n                </ion-item-divider>\n\n                <ng-container *ngTemplateOutlet="attemptsTemplate; context: {attempts: attemptsData.attempts}"></ng-container>\n\n            </ng-container>\n\n        </ion-list>\n\n\n\n        <!-- No attempts. -->\n\n        <core-empty-box *ngIf="attemptsData && (!attemptsData.attempts || !attemptsData.attempts.length)" icon="stats" [message]="\'addon.mod_h5pactivity.attempts_none\' | translate">\n\n        </core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n\n\n<!-- Template to render a list of conversations. -->\n\n<ng-template #attemptsTemplate let-attempts="attempts">\n\n    <!-- "Header" of the table -->\n\n    <ion-item text-wrap class="addon-mod_h5pactivity-table-header" detail-push>\n\n        <ion-row align-items-center>\n\n            <ion-col text-center>#</ion-col>\n\n            <ion-col text-center col-5 col-md-2>{{ \'core.date\' | translate }}</ion-col>\n\n            <ion-col text-center>{{ \'addon.mod_h5pactivity.score\' | translate }}</ion-col>\n\n            <ion-col text-center class="hidden-phone">{{ \'addon.mod_h5pactivity.maxscore\' | translate }}</ion-col>\n\n            <ion-col text-center class="hidden-phone">{{ \'addon.mod_h5pactivity.duration\' | translate }}</ion-col>\n\n            <ion-col text-center class="hidden-phone">{{ \'addon.mod_h5pactivity.completion\' | translate }}</ion-col>\n\n            <ion-col text-center>{{ \'core.success\' | translate }}</ion-col>\n\n        </ion-row>\n\n    </ion-item>\n\n\n\n    <!-- List of attempts. -->\n\n    <a ion-item text-wrap *ngFor="let attempt of attempts" [attr.aria-label]="\'addon.mod_h5pactivity.viewattempt\' | translate:{$a: attempt.attempt}" class="addon-mod_h5pactivity-table-row" navPush="AddonModH5PActivityAttemptResultsPage" [navParams]="{courseId: courseId, h5pActivityId: h5pActivityId, attemptId: attempt.id}">\n\n        <ion-row align-items-center>\n\n            <ion-col text-center>{{ attempt.attempt }}</ion-col>\n\n            <ion-col text-center col-5 col-md-2>{{ attempt.timemodified | coreFormatDate:\'strftimedatetimeshort\' }}</ion-col>\n\n            <ion-col text-center>\n\n                {{ attempt.rawscore }}<span class="hidden-tablet"> / {{ attempt.maxscore }}</span>\n\n            </ion-col>\n\n            <ion-col text-center class="hidden-phone">{{ attempt.maxscore }}</ion-col>\n\n            <ion-col text-center class="hidden-phone">{{ attempt.durationReadable }}</ion-col>\n\n            <ion-col text-center class="hidden-phone">\n\n                <img *ngIf="attempt.completion" src="assets/img/completion/completion-auto-y.svg" [alt]="\'addon.mod_h5pactivity.attempt_completion_yes\' | translate">\n\n                <img *ngIf="!attempt.completion" src="assets/img/completion/completion-auto-n.svg" [alt]="\'addon.mod_h5pactivity.attempt_completion_no\' | translate">\n\n            </ion-col>\n\n            <ion-col text-center class="addon-mod_h5pactivity-table-success-col">\n\n                <core-icon *ngIf="attempt.success !== null && attempt.success" name="fa-check-circle" [label]="\'addon.mod_h5pactivity.attempt_success_pass\' | translate"></core-icon>\n\n                <core-icon *ngIf="attempt.success !== null && !attempt.success" name="fa-circle-o" [label]="\'addon.mod_h5pactivity.attempt_success_fail\' | translate"></core-icon>\n\n                <img *ngIf="attempt.success === null" src="assets/img/icons/empty.svg" [alt]="\'addon.mod_h5pactivity.attempt_success_unknown\' | translate">\n\n            </ion-col>\n\n        </ion-row>\n\n    </a>\n\n</ng-template>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\h5pactivity\pages\user-attempts\user-attempts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddonModH5PActivityUserAttemptsPage);
    return AddonModH5PActivityUserAttemptsPage;
}());

//# sourceMappingURL=user-attempts.js.map

/***/ })

});
//# sourceMappingURL=95.js.map