webpackJsonp([56],{

/***/ 2128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesAvailableCoursesPageModule", function() { return CoreCoursesAvailableCoursesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__available_courses__ = __webpack_require__(2284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(207);
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







var CoreCoursesAvailableCoursesPageModule = /** @class */ (function () {
    function CoreCoursesAvailableCoursesPageModule() {
    }
    CoreCoursesAvailableCoursesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__available_courses__["a" /* CoreCoursesAvailableCoursesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__available_courses__["a" /* CoreCoursesAvailableCoursesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCoursesAvailableCoursesPageModule);
    return CoreCoursesAvailableCoursesPageModule;
}());

//# sourceMappingURL=available-courses.module.js.map

/***/ }),

/***/ 2284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesAvailableCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_courses__ = __webpack_require__(34);
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
 * Page that displays available courses in current site.
 */
var CoreCoursesAvailableCoursesPage = /** @class */ (function () {
    function CoreCoursesAvailableCoursesPage(coursesProvider, domUtils, sitesProvider) {
        this.coursesProvider = coursesProvider;
        this.domUtils = domUtils;
        this.sitesProvider = sitesProvider;
        this.courses = [];
    }
    /**
     * View loaded.
     */
    CoreCoursesAvailableCoursesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadCourses().finally(function () {
            _this.coursesLoaded = true;
        });
    };
    /**
     * Load the courses.
     *
     * @return Promise resolved when done.
     */
    CoreCoursesAvailableCoursesPage.prototype.loadCourses = function () {
        var _this = this;
        var frontpageCourseId = this.sitesProvider.getCurrentSite().getSiteHomeId();
        return this.coursesProvider.getCoursesByField().then(function (courses) {
            _this.courses = courses.filter(function (course) {
                return course.id != frontpageCourseId;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
        });
    };
    /**
     * Refresh the courses.
     *
     * @param refresher Refresher.
     */
    CoreCoursesAvailableCoursesPage.prototype.refreshCourses = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.coursesProvider.invalidateUserCourses());
        promises.push(this.coursesProvider.invalidateCoursesByField());
        Promise.all(promises).finally(function () {
            _this.loadCourses().finally(function () {
                refresher.complete();
            });
        });
    };
    CoreCoursesAvailableCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-available-courses',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\available-courses\available-courses.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.courses.availablecourses\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="coursesLoaded" (ionRefresh)="refreshCourses($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="coursesLoaded">\n\n        <div *ngIf="courses.length > 0">\n\n            <core-courses-course-list-item *ngFor="let course of courses" [course]="course"></core-courses-course-list-item>\n\n        </div>\n\n        <core-empty-box *ngIf="!courses.length" icon="ionic" [message]="\'core.courses.nocourses\' | translate"></core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\available-courses\available-courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_courses__["b" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_sites__["b" /* CoreSitesProvider */]])
    ], CoreCoursesAvailableCoursesPage);
    return CoreCoursesAvailableCoursesPage;
}());

//# sourceMappingURL=available-courses.js.map

/***/ })

});
//# sourceMappingURL=56.js.map