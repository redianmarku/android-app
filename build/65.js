webpackJsonp([65],{

/***/ 2120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCourseStoragePageModule", function() { return AddonStorageManagerCourseStoragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__course_storage__ = __webpack_require__(2276);
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







var AddonStorageManagerCourseStoragePageModule = /** @class */ (function () {
    function AddonStorageManagerCourseStoragePageModule() {
    }
    AddonStorageManagerCourseStoragePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__course_storage__["a" /* AddonStorageManagerCourseStoragePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__course_storage__["a" /* AddonStorageManagerCourseStoragePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonStorageManagerCourseStoragePageModule);
    return AddonStorageManagerCourseStoragePageModule;
}());

//# sourceMappingURL=course-storage.module.js.map

/***/ }),

/***/ 2276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonStorageManagerCourseStoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_course_providers_course__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_course_providers_module_prefetch_delegate__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_course_providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_constants__ = __webpack_require__(19);
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
 * Page that displays the amount of file storage used by each activity on the course, and allows
 * the user to delete these files.
 */
var AddonStorageManagerCourseStoragePage = /** @class */ (function () {
    function AddonStorageManagerCourseStoragePage(navParams, courseProvider, prefetchDelegate, courseHelperProvider, domUtils, translate) {
        this.courseProvider = courseProvider;
        this.prefetchDelegate = prefetchDelegate;
        this.courseHelperProvider = courseHelperProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.course = navParams.get('course');
    }
    /**
     * View loaded.
     */
    AddonStorageManagerCourseStoragePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.courseProvider.getSections(this.course.id, false, true).then(function (sections) {
            _this.courseHelperProvider.addHandlerDataForModules(sections, _this.course.id);
            _this.sections = sections;
            _this.totalSize = 0;
            var allPromises = [];
            _this.sections.forEach(function (section) {
                section.totalSize = 0;
                section.modules.forEach(function (module) {
                    module.parentSection = section;
                    module.totalSize = 0;
                    // Note: This function only gets the size for modules which are downloadable.
                    // For other modules it always returns 0, even if they have downloaded some files.
                    // However there is no 100% reliable way to actually track the files in this case.
                    // You can maybe guess it based on the component and componentid.
                    // But these aren't necessarily consistent, for example mod_frog vs mmaModFrog.
                    // There is nothing enforcing correct values.
                    // Most modules which have large files are downloadable, so I think this is sufficient.
                    var promise = _this.prefetchDelegate.getModuleDownloadedSize(module, _this.course.id).
                        then(function (size) {
                        // There are some cases where the return from this is not a valid number.
                        if (!isNaN(size)) {
                            module.totalSize = Number(size);
                            section.totalSize += size;
                            _this.totalSize += size;
                        }
                    });
                    allPromises.push(promise);
                });
            });
            Promise.all(allPromises).then(function () {
                _this.loaded = true;
                if (_this.totalSize == 0) {
                    _this.markCourseAsNotDownloaded();
                }
            });
        });
    };
    /**
     * The user has requested a delete for the whole course data.
     *
     * (This works by deleting data for each module on the course that has data.)
     */
    AddonStorageManagerCourseStoragePage.prototype.deleteForCourse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, modules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.domUtils.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
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
                        modules = [];
                        this.sections.forEach(function (section) {
                            section.modules.forEach(function (module) {
                                if (module.totalSize > 0) {
                                    modules.push(module);
                                }
                            });
                        });
                        this.deleteModules(modules);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The user has requested a delete for a section's data.
     *
     * (This works by deleting data for each module in the section that has data.)
     *
     * @param section Section object with information about section and modules
     */
    AddonStorageManagerCourseStoragePage.prototype.deleteForSection = function (section) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2, modules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.domUtils.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (!error_2.coreCanceled) {
                            throw error_2;
                        }
                        return [2 /*return*/];
                    case 3:
                        modules = [];
                        section.modules.forEach(function (module) {
                            if (module.totalSize > 0) {
                                modules.push(module);
                            }
                        });
                        this.deleteModules(modules);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The user has requested a delete for a module's data
     *
     * @param module Module details
     */
    AddonStorageManagerCourseStoragePage.prototype.deleteForModule = function (module) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (module.totalSize === 0) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.domUtils.showDeleteConfirm('core.course.confirmdeletemodulefiles')];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        if (!error_3.coreCanceled) {
                            throw error_3;
                        }
                        return [2 /*return*/];
                    case 4:
                        this.deleteModules([module]);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes the specified modules, showing the loading overlay while it happens.
     *
     * @param modules Modules to delete
     * @return Promise<void> Once deleting has finished
     */
    AddonStorageManagerCourseStoragePage.prototype.deleteModules = function (modules) {
        var _this = this;
        var modal = this.domUtils.showModalLoading();
        var promises = [];
        modules.forEach(function (module) {
            // Remove the files.
            var promise = _this.prefetchDelegate.removeModuleFiles(module, _this.course.id).then(function () {
                // When the files are removed, update the size.
                module.parentSection.totalSize -= module.totalSize;
                _this.totalSize -= module.totalSize;
                module.totalSize = 0;
            });
            promises.push(promise);
        });
        return Promise.all(promises).then(function () {
            modal.dismiss();
        }).catch(function (error) {
            modal.dismiss();
            _this.domUtils.showErrorModalDefault(error, _this.translate.instant('core.errordeletefile'));
        }).finally(function () {
            // @TODO This is a workaround that should be more specific solving MOBILE-3305.
            // Also should take into account all modules are not downloaded.
            // Mark course as not downloaded if course size is 0.
            if (_this.totalSize == 0) {
                _this.markCourseAsNotDownloaded();
            }
        });
    };
    /**
     * Mark course as not downloaded.
     */
    AddonStorageManagerCourseStoragePage.prototype.markCourseAsNotDownloaded = function () {
        // @TODO This is a workaround that should be more specific solving MOBILE-3305.
        // Also should take into account all modules are not downloaded.
        // Check after MOBILE-3188 is integrated.
        this.courseProvider.setCourseStatus(this.course.id, __WEBPACK_IMPORTED_MODULE_7__core_constants__["a" /* CoreConstants */].NOT_DOWNLOADED);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonStorageManagerCourseStoragePage.prototype, "content", void 0);
    AddonStorageManagerCourseStoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-storagemanager-course-storage',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\storagemanager\pages\course-storage\course-storage.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.storagemanager.managestorage\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-card class="wholecourse">\n\n            <ion-card-header>\n\n                <h1 text-wrap>{{ course.displayname }}</h1>\n\n                <p text-wrap>{{ \'addon.storagemanager.info\' | translate }}</p>\n\n                <ion-item no-padding padding-top class="size" text-wrap>\n\n                    <ion-icon name="cube" item-start></ion-icon>\n\n                    <h2 text-wrap>{{ \'addon.storagemanager.storageused\' | translate }}</h2>\n\n                    <div item-end>\n\n                        <p text-end>{{ totalSize | coreBytesToSize }}</p>\n\n                    </div>\n\n                    <button ion-button icon-only item-end no-padding (click)="deleteForCourse()" [disabled]="totalSize == 0">\n\n                        <core-icon name="trash" label="{{ \'addon.storagemanager.deletecourse\' | translate }}"></core-icon>\n\n                    </button>\n\n                </ion-item>\n\n            </ion-card-header>\n\n        </ion-card>\n\n        <ng-container *ngFor="let section of sections">\n\n            <ion-card *ngIf="section.totalSize > 0" class="section">\n\n                <ion-card-header>\n\n                    <ion-item no-padding>\n\n                        <h2 text-wrap>{{ section.name }}</h2>\n\n                        <p>\n\n                            <ion-icon name="cube" item-start></ion-icon>\n\n                            {{ section.totalSize | coreBytesToSize }}\n\n                        </p>\n\n                        <button ion-button icon-only item-end no-padding (click)="deleteForSection(section)">\n\n                            <core-icon name="trash" label="{{ \'addon.storagemanager.deletedatafrom\' | translate: { name: section.name } }}"></core-icon>\n\n                        </button>\n\n                    </ion-item>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <ng-container *ngFor="let module of section.modules">\n\n                        <ion-item no-padding *ngIf="module.totalSize > 0">\n\n                            <h2 class="{{module.handlerData.class}} addon-storagemanager-module-size">\n\n                                <img *ngIf="module.handlerData.icon" [src]="module.handlerData.icon" alt="" role="presentation" class="core-module-icon"\n\n                                >\n\n                                {{ module.name }}\n\n                            </h2>\n\n                            <p>\n\n                            <ion-icon name="cube" item-start></ion-icon>\n\n                                {{ module.totalSize | coreBytesToSize }}\n\n                            </p>\n\n                            <button ion-button icon-only outline item-end (click)="deleteForModule(module)">\n\n                                <core-icon name="trash" label="{{ \'addon.storagemanager.deletedatafrom\' | translate: { name: module.name } }}"></core-icon>\n\n                            </button>\n\n                        </ion-item>\n\n                    </ng-container>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ng-container>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\storagemanager\pages\course-storage\course-storage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__core_course_providers_course__["b" /* CoreCourseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__core_course_providers_module_prefetch_delegate__["b" /* CoreCourseModulePrefetchDelegate */],
            __WEBPACK_IMPORTED_MODULE_4__core_course_providers_helper__["b" /* CoreCourseHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], AddonStorageManagerCourseStoragePage);
    return AddonStorageManagerCourseStoragePage;
}());

//# sourceMappingURL=course-storage.js.map

/***/ })

});
//# sourceMappingURL=65.js.map