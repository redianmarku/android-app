webpackJsonp([55],{

/***/ 2129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesCategoriesPageModule", function() { return CoreCoursesCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories__ = __webpack_require__(2285);
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







var CoreCoursesCategoriesPageModule = /** @class */ (function () {
    function CoreCoursesCategoriesPageModule() {
    }
    CoreCoursesCategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* CoreCoursesCategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__categories__["a" /* CoreCoursesCategoriesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCoursesCategoriesPageModule);
    return CoreCoursesCategoriesPageModule;
}());

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ 2285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCoursesCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_courses__ = __webpack_require__(34);
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
 * Page that displays a list of categories and the courses in the current category if any.
 */
var CoreCoursesCategoriesPage = /** @class */ (function () {
    function CoreCoursesCategoriesPage(navCtrl, navParams, coursesProvider, domUtils, utils, translate, sitesProvider) {
        this.navCtrl = navCtrl;
        this.coursesProvider = coursesProvider;
        this.domUtils = domUtils;
        this.utils = utils;
        this.sitesProvider = sitesProvider;
        this.categories = [];
        this.courses = [];
        this.categoryId = navParams.get('categoryId') || 0;
        this.title = translate.instant('core.courses.categories');
    }
    /**
     * View loaded.
     */
    CoreCoursesCategoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchCategories().finally(function () {
            _this.categoriesLoaded = true;
        });
    };
    /**
     * Fetch the categories.
     *
     * @return Promise resolved when done.
     */
    CoreCoursesCategoriesPage.prototype.fetchCategories = function () {
        var _this = this;
        return this.coursesProvider.getCategories(this.categoryId, true).then(function (cats) {
            _this.currentCategory = undefined;
            cats.forEach(function (cat, index) {
                if (cat.id == _this.categoryId) {
                    _this.currentCategory = cat;
                    // Delete current Category to avoid problems with the formatTree.
                    delete cats[index];
                }
            });
            // Sort by depth and sortorder to avoid problems formatting Tree.
            cats.sort(function (a, b) {
                if (a.depth == b.depth) {
                    return (a.sortorder > b.sortorder) ? 1 : ((b.sortorder > a.sortorder) ? -1 : 0);
                }
                return a.depth > b.depth ? 1 : -1;
            });
            _this.categories = _this.utils.formatTree(cats, 'parent', 'id', _this.categoryId);
            if (_this.currentCategory) {
                _this.title = _this.currentCategory.name;
                return _this.coursesProvider.getCoursesByField('category', _this.categoryId).then(function (courses) {
                    _this.courses = courses;
                }).catch(function (error) {
                    _this.domUtils.showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.courses.errorloadcategories', true);
        });
    };
    /**
     * Refresh the categories.
     *
     * @param refresher Refresher.
     */
    CoreCoursesCategoriesPage.prototype.refreshCategories = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.coursesProvider.invalidateUserCourses());
        promises.push(this.coursesProvider.invalidateCategories(this.categoryId, true));
        promises.push(this.coursesProvider.invalidateCoursesByField('category', this.categoryId));
        promises.push(this.sitesProvider.getCurrentSite().invalidateConfig());
        Promise.all(promises).finally(function () {
            _this.fetchCategories().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Open a category.
     *
     * @param categoryId The category ID.
     */
    CoreCoursesCategoriesPage.prototype.openCategory = function (categoryId) {
        this.navCtrl.push('CoreCoursesCategoriesPage', { categoryId: categoryId });
    };
    CoreCoursesCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-courses-categories',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\categories\categories.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="coursecat" [contextInstanceId]="currentCategory && currentCategory.id"></core-format-text></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="categoriesLoaded" (ionRefresh)="refreshCategories($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="categoriesLoaded">\n\n        <ion-item *ngIf="currentCategory" text-wrap>\n\n            <ion-icon name="folder" item-start></ion-icon>\n\n            <h2><core-format-text [text]="currentCategory.name" contextLevel="coursecat" [contextInstanceId]="currentCategory.id"></core-format-text></h2>\n\n        </ion-item>\n\n        <ion-item text-wrap *ngIf="currentCategory && currentCategory.description">\n\n            <core-format-text [text]="currentCategory.description" maxHeight="60" contextLevel="coursecat" [contextInstanceId]="currentCategory.id"></core-format-text>\n\n        </ion-item>\n\n\n\n        <div *ngIf="categories.length > 0">\n\n            <ion-item-divider>{{ \'core.courses.categories\' | translate }}</ion-item-divider>\n\n            <section *ngFor="let category of categories">\n\n                <a ion-item text-wrap (click)="openCategory(category.id)" [title]="category.name">\n\n                    <ion-icon name="folder" item-start></ion-icon>\n\n                    <h2><core-format-text [text]="category.name" contextLevel="coursecat" [contextInstanceId]="category.id"></core-format-text></h2>\n\n                    <ion-badge item-end *ngIf="category.coursecount > 0" color="light">{{category.coursecount}}</ion-badge>\n\n                </a>\n\n            </section>\n\n        </div>\n\n\n\n        <div *ngIf="courses.length > 0">\n\n            <ion-item-divider>{{ \'core.courses.courses\' | translate }}</ion-item-divider>\n\n            <core-courses-course-list-item *ngFor="let course of courses" [course]="course"></core-courses-course-list-item>\n\n        </div>\n\n        <core-empty-box *ngIf="!categories.length && !courses.length" icon="ionic" [message]="\'core.courses.nocoursesyet\' | translate">\n\n            <p *ngIf="searchEnabled">{{ \'core.courses.searchcoursesadvice\' | translate }}</p>\n\n        </core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\courses\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_courses__["b" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */]])
    ], CoreCoursesCategoriesPage);
    return CoreCoursesCategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ })

});
//# sourceMappingURL=55.js.map