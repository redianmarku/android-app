webpackJsonp([47],{

/***/ 2134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesPageModule", function() { return CoreGradesCoursesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses__ = __webpack_require__(2290);
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






var CoreGradesCoursesPageModule = /** @class */ (function () {
    function CoreGradesCoursesPageModule() {
    }
    CoreGradesCoursesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__courses__["a" /* CoreGradesCoursesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__courses__["a" /* CoreGradesCoursesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreGradesCoursesPageModule);
    return CoreGradesCoursesPageModule;
}());

//# sourceMappingURL=courses.module.js.map

/***/ }),

/***/ 2290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreGradesCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grades__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(135);
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
 * Page that displays courses grades (main menu option).
 */
var CoreGradesCoursesPage = /** @class */ (function () {
    function CoreGradesCoursesPage(gradesProvider, domUtils, gradesHelper) {
        this.gradesProvider = gradesProvider;
        this.domUtils = domUtils;
        this.gradesHelper = gradesHelper;
        this.grades = [];
        this.gradesLoaded = false;
    }
    /**
     * View loaded.
     */
    CoreGradesCoursesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.courseId) {
            // There is the course to load, open the course in a new state.
            this.gotoCourseGrades(this.courseId);
        }
        this.fetchData().then(function () {
            if (!_this.courseId && _this.splitviewCtrl.isOn() && _this.grades.length > 0) {
                _this.gotoCourseGrades(_this.grades[0].courseid);
            }
            // Add log in Moodle.
            return _this.gradesProvider.logCoursesGradesView().catch(function () {
                // Ignore errors.
            });
        }).finally(function () {
            _this.gradesLoaded = true;
        });
    };
    /**
     * Fetch all the data required for the view.
     *
     * @return Resolved when done.
     */
    CoreGradesCoursesPage.prototype.fetchData = function () {
        var _this = this;
        return this.gradesProvider.getCoursesGrades().then(function (grades) {
            return _this.gradesHelper.getGradesCourseData(grades).then(function (grades) {
                _this.grades = grades;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading grades');
        });
    };
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    CoreGradesCoursesPage.prototype.refreshGrades = function (refresher) {
        var _this = this;
        this.gradesProvider.invalidateCoursesGradesData().finally(function () {
            _this.fetchData().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to the grades of the selected course.
     * @param courseId Course Id where to navigate.
     */
    CoreGradesCoursesPage.prototype.gotoCourseGrades = function (courseId) {
        this.courseId = courseId;
        this.splitviewCtrl.push('CoreGradesCoursePage', { courseId: courseId, userId: this.userId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CoreGradesCoursesPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], CoreGradesCoursesPage.prototype, "splitviewCtrl", void 0);
    CoreGradesCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-grades-courses',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\grades\pages\courses\courses.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.grades.grades\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="gradesLoaded" (ionRefresh)="refreshGrades($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="gradesLoaded">\n\n            <core-empty-box *ngIf="grades && grades.length == 0" icon="stats" [message]="\'core.grades.nogradesreturned\' | translate">\n\n            </core-empty-box>\n\n\n\n            <ion-list *ngIf="grades && grades.length > 0">\n\n                <a ion-item text-wrap *ngFor="let grade of grades" [title]="grade.courseFullName" (click)="gotoCourseGrades(grade.courseid)" [class.core-split-item-selected]="grade.courseid == courseId">\n\n                    <h2><core-format-text [text]="grade.courseFullName" contextLevel="course" [contextInstanceId]="grade.courseid"></core-format-text></h2>\n\n                    <ion-badge item-end color="light">{{grade.grade}}</ion-badge>\n\n                </a>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\grades\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_grades__["a" /* CoreGradesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* CoreGradesHelperProvider */]])
    ], CoreGradesCoursesPage);
    return CoreGradesCoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ })

});
//# sourceMappingURL=47.js.map