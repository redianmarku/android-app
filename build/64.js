webpackJsonp([64],{

/***/ 2121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCoursesStoragePageModule", function() { return AddonStorageManagerCoursesStoragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__courses_storage__ = __webpack_require__(2277);
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







var AddonStorageManagerCoursesStoragePageModule = /** @class */ (function () {
    function AddonStorageManagerCoursesStoragePageModule() {
    }
    AddonStorageManagerCoursesStoragePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__courses_storage__["a" /* AddonStorageManagerCoursesStoragePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__courses_storage__["a" /* AddonStorageManagerCoursesStoragePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonStorageManagerCoursesStoragePageModule);
    return AddonStorageManagerCoursesStoragePageModule;
}());

//# sourceMappingURL=courses-storage.module.js.map

/***/ }),

/***/ 2277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonStorageManagerCoursesStoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_course_providers_course__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singletons_array__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_course_providers_module_prefetch_delegate__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__singletons_core_singletons__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_course_providers_helper__ = __webpack_require__(23);
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
 * Page that displays downloaded courses and allows the user to delete them.
 */
var AddonStorageManagerCoursesStoragePage = /** @class */ (function () {
    function AddonStorageManagerCoursesStoragePage() {
        this.userCourses = [];
        this.downloadedCourses = [];
        this.completelyDownloadedCourses = [];
        this.totalSize = 0;
        this.loaded = false;
    }
    /**
     * View loaded.
     */
    AddonStorageManagerCoursesStoragePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, downloadedCourseIds, downloadedCourses;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__["a" /* CoreCourses */].instance.getUserCourses()];
                    case 1:
                        _a.userCourses = _b.sent();
                        this.courseStatusObserver = __WEBPACK_IMPORTED_MODULE_8__providers_events__["a" /* CoreEvents */].instance.on(__WEBPACK_IMPORTED_MODULE_8__providers_events__["b" /* CoreEventsProvider */].COURSE_STATUS_CHANGED, function (_a) {
                            var courseId = _a.courseId, status = _a.status;
                            return _this.onCourseUpdated(courseId, status);
                        });
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__core_course_providers_course__["a" /* CoreCourse */].instance.getDownloadedCourseIds()];
                    case 2:
                        downloadedCourseIds = _b.sent();
                        return [4 /*yield*/, Promise.all(this.userCourses
                                .filter(function (course) { return downloadedCourseIds.indexOf(course.id) !== -1; })
                                .map(function (course) { return _this.getDownloadedCourse(course); }))];
                    case 3:
                        downloadedCourses = _b.sent();
                        this.setDownloadedCourses(downloadedCourses);
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Component destroyed.
     */
    AddonStorageManagerCoursesStoragePage.prototype.ngOnDestroy = function () {
        this.courseStatusObserver && this.courseStatusObserver.off();
    };
    /**
     * Delete all courses that have been downloaded.
     */
    AddonStorageManagerCoursesStoragePage.prototype.deleteCompletelyDownloadedCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, modal, deletedCourseIds, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (!error_1.coreCanceled) {
                            throw error_1;
                        }
                        return [2 /*return*/];
                    case 3:
                        modal = __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showModalLoading();
                        deletedCourseIds = this.completelyDownloadedCourses.map(function (course) { return course.id; });
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, 7, 8]);
                        return [4 /*yield*/, Promise.all(deletedCourseIds.map(function (courseId) { return __WEBPACK_IMPORTED_MODULE_9__core_course_providers_helper__["a" /* CoreCourseHelper */].instance.deleteCourseFiles(courseId); }))];
                    case 5:
                        _a.sent();
                        this.setDownloadedCourses(this.downloadedCourses.filter(function (course) { return !__WEBPACK_IMPORTED_MODULE_3__singletons_array__["a" /* CoreArray */].contains(deletedCourseIds, course.id); }));
                        return [3 /*break*/, 8];
                    case 6:
                        error_2 = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_2, __WEBPACK_IMPORTED_MODULE_7__singletons_core_singletons__["a" /* Translate */].instance.instant('core.errordeletefile'));
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete course.
     *
     * @param course Course to delete.
     */
    AddonStorageManagerCoursesStoragePage.prototype.deleteCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3, modal, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        if (!error_3.coreCanceled) {
                            throw error_3;
                        }
                        return [2 /*return*/];
                    case 3:
                        modal = __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showModalLoading();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, 7, 8]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_9__core_course_providers_helper__["a" /* CoreCourseHelper */].instance.deleteCourseFiles(course.id)];
                    case 5:
                        _a.sent();
                        this.setDownloadedCourses(__WEBPACK_IMPORTED_MODULE_3__singletons_array__["a" /* CoreArray */].withoutItem(this.downloadedCourses, course));
                        return [3 /*break*/, 8];
                    case 6:
                        error_4 = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtils */].instance.showErrorModalDefault(error_4, __WEBPACK_IMPORTED_MODULE_7__singletons_core_singletons__["a" /* Translate */].instance.instant('core.errordeletefile'));
                        return [3 /*break*/, 8];
                    case 7:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle course updated event.
     *
     * @param courseId Updated course id.
     */
    AddonStorageManagerCoursesStoragePage.prototype.onCourseUpdated = function (courseId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var course, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (courseId == __WEBPACK_IMPORTED_MODULE_1__core_course_providers_course__["b" /* CoreCourseProvider */].ALL_COURSES_CLEARED) {
                            this.setDownloadedCourses([]);
                            return [2 /*return*/];
                        }
                        course = this.downloadedCourses.find(function (course) { return course.id === courseId; });
                        if (!course) {
                            return [2 /*return*/];
                        }
                        course.isDownloading = status === __WEBPACK_IMPORTED_MODULE_5__core_constants__["a" /* CoreConstants */].DOWNLOADING;
                        _a = course;
                        return [4 /*yield*/, this.calculateDownloadedCourseSize(course.id)];
                    case 1:
                        _a.totalSize = _b.sent();
                        this.setDownloadedCourses(this.downloadedCourses);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set downloaded courses data.
     *
     * @param courses Courses info.
     */
    AddonStorageManagerCoursesStoragePage.prototype.setDownloadedCourses = function (courses) {
        this.downloadedCourses = courses;
        this.completelyDownloadedCourses = courses.filter(function (course) { return !course.isDownloading; });
        this.totalSize = this.downloadedCourses.reduce(function (totalSize, course) { return totalSize + course.totalSize; }, 0);
    };
    /**
     * Get downloaded course data.
     *
     * @param course Course.
     * @return Course info.
     */
    AddonStorageManagerCoursesStoragePage.prototype.getDownloadedCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var totalSize, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calculateDownloadedCourseSize(course.id)];
                    case 1:
                        totalSize = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__core_course_providers_course__["a" /* CoreCourse */].instance.getCourseStatus(course.id)];
                    case 2:
                        status = _a.sent();
                        return [2 /*return*/, __assign({}, course, { totalSize: totalSize, isDownloading: status === __WEBPACK_IMPORTED_MODULE_5__core_constants__["a" /* CoreConstants */].DOWNLOADING })];
                }
            });
        });
    };
    /**
     * Calculate the size of a downloaded course.
     *
     * @param courseId Downloaded course id.
     * @return Promise to be resolved with the course size.
     */
    AddonStorageManagerCoursesStoragePage.prototype.calculateDownloadedCourseSize = function (courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sections, modules, promisedModuleSizes, moduleSizes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__core_course_providers_course__["a" /* CoreCourse */].instance.getSections(courseId)];
                    case 1:
                        sections = _a.sent();
                        modules = __WEBPACK_IMPORTED_MODULE_3__singletons_array__["a" /* CoreArray */].flatten(sections.map(function (section) { return section.modules; }));
                        promisedModuleSizes = modules.map(function (module) { return __awaiter(_this, void 0, void 0, function () {
                            var size;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__core_course_providers_module_prefetch_delegate__["a" /* CoreCourseModulePrefetch */].instance.getModuleDownloadedSize(module, courseId)];
                                    case 1:
                                        size = _a.sent();
                                        return [2 /*return*/, isNaN(size) ? 0 : size];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promisedModuleSizes)];
                    case 2:
                        moduleSizes = _a.sent();
                        return [2 /*return*/, moduleSizes.reduce(function (totalSize, moduleSize) { return totalSize + moduleSize; }, 0)];
                }
            });
        });
    };
    AddonStorageManagerCoursesStoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-storagemanager-courses-storage',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\storagemanager\pages\courses-storage\courses-storage.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.storagemanager.managestorage\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <h1 text-wrap>{{ \'core.courses.courses\' | translate }}</h1>\n\n                <p text-wrap>{{ \'addon.storagemanager.info\' | translate }}</p>\n\n                <ion-item no-padding padding-top class="size" text-wrap>\n\n                    <ion-icon name="cube" item-start></ion-icon>\n\n                    <h2 text-wrap>{{ \'addon.storagemanager.storageused\' | translate }}</h2>\n\n                    <div item-end>\n\n                        <p text-end>{{ totalSize | coreBytesToSize }}</p>\n\n                    </div>\n\n                    <button ion-button icon-only item-end no-padding (click)="deleteCompletelyDownloadedCourses()" [disabled]="completelyDownloadedCourses.length === 0">\n\n                        <core-icon name="trash" label="{{ \'addon.storagemanager.deletecourses\' | translate }}"></core-icon>\n\n                    </button>\n\n                </ion-item>\n\n            </ion-card-header>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-list>\n\n                <ion-item *ngFor="let course of downloadedCourses" class="course">\n\n                    <h2 text-wrap>{{ course.displayname }}</h2>\n\n                    <h3 *ngIf="course.isDownloading">{{ \'core.downloading\' | translate }}</h3>\n\n                    <p>\n\n                        <ion-icon name="cube" item-start></ion-icon>\n\n                        {{ course.totalSize | coreBytesToSize }}\n\n                    </p>\n\n                    <button ion-button icon-only item-end (click)="deleteCourse(course)" [disabled]="course.isDownloading">\n\n                        <core-icon name="trash" label="{{ \'addon.storagemanager.deletedatafrom\' | translate: { name: course.name } }}"></core-icon>\n\n                    </button>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\storagemanager\pages\courses-storage\courses-storage.html"*/,
        })
    ], AddonStorageManagerCoursesStoragePage);
    return AddonStorageManagerCoursesStoragePage;
}());

//# sourceMappingURL=courses-storage.js.map

/***/ })

});
//# sourceMappingURL=64.js.map