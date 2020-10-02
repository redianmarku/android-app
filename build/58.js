webpackJsonp([58],{

/***/ 2126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSectionSelectorPageModule", function() { return CoreCourseSectionSelectorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_selector__ = __webpack_require__(2282);
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






var CoreCourseSectionSelectorPageModule = /** @class */ (function () {
    function CoreCourseSectionSelectorPageModule() {
    }
    CoreCourseSectionSelectorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCourseSectionSelectorPageModule);
    return CoreCourseSectionSelectorPageModule;
}());

//# sourceMappingURL=section-selector.module.js.map

/***/ }),

/***/ 2282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCourseSectionSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_course__ = __webpack_require__(12);
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
 * Page that displays course section selector.
 */
var CoreCourseSectionSelectorPage = /** @class */ (function () {
    function CoreCourseSectionSelectorPage(navParams, courseHelper, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.stealthModulesSectionId = __WEBPACK_IMPORTED_MODULE_3__providers_course__["b" /* CoreCourseProvider */].STEALTH_MODULES_SECTION_ID;
        this.sections = navParams.get('sections');
        this.selected = navParams.get('selected');
        var course = navParams.get('course');
        this.courseId = course && course.id;
        if (course && course.enablecompletion && course.courseformatoptions && course.courseformatoptions.coursedisplay == 1 &&
            course.completionusertracked !== false) {
            this.sections.forEach(function (section) {
                var complete = 0, total = 0;
                section.modules && section.modules.forEach(function (module) {
                    if (module.uservisible && typeof module.completiondata != 'undefined' &&
                        module.completiondata.tracking > __WEBPACK_IMPORTED_MODULE_3__providers_course__["b" /* CoreCourseProvider */].COMPLETION_TRACKING_NONE) {
                        total++;
                        if (module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["b" /* CoreCourseProvider */].COMPLETION_COMPLETE ||
                            module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["b" /* CoreCourseProvider */].COMPLETION_COMPLETE_PASS) {
                            complete++;
                        }
                    }
                });
                if (total > 0) {
                    section.progress = complete / total * 100;
                }
            });
        }
    }
    /**
     * Close the modal.
     */
    CoreCourseSectionSelectorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Select a section.
     *
     * @param section Selected section object.
     */
    CoreCourseSectionSelectorPage.prototype.selectSection = function (section) {
        if (section.uservisible !== false) {
            this.viewCtrl.dismiss(section);
        }
    };
    CoreCourseSectionSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-course-section-selector',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\course\pages\section-selector\section-selector.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.course.sections\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list id="core-course-section-selector" role="menu" aria-labelledby="core-course-section-button">\n\n        <ng-container *ngFor="let section of sections">\n\n            <a ion-item *ngIf="!section.hiddenbynumsections && section.id != stealthModulesSectionId" text-wrap (click)="selectSection(section)" [class.core-primary-selected-item]="selected.id == section.id" [class.item-dimmed]="section.visible === 0 || section.uservisible === false" detail-none role="menuitem" [attr.aria-hidden]="section.uservisible === false" [attr.aria-label]="section.formattedName || section.name">\n\n                <core-icon name="fa-folder" item-start></core-icon>\n\n                <h2><core-format-text [text]="section.formattedName || section.name" contextLevel="course" [contextInstanceId]="courseId"></core-format-text></h2>\n\n                <core-progress-bar *ngIf="section.progress >= 0" [progress]="section.progress"></core-progress-bar>\n\n                <ion-badge color="secondary" *ngIf="section.visible === 0 && section.uservisible !== false" text-wrap>{{ \'core.course.hiddenfromstudents\' | translate }}</ion-badge>\n\n                <ion-badge color="secondary" *ngIf="section.availabilityinfo" text-wrap><core-format-text [text]=" section.availabilityinfo" contextLevel="course" [contextInstanceId]="courseId"></core-format-text></ion-badge>\n\n            </a>\n\n        </ng-container>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\course\pages\section-selector\section-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper__["b" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], CoreCourseSectionSelectorPage);
    return CoreCourseSectionSelectorPage;
}());

//# sourceMappingURL=section-selector.js.map

/***/ })

});
//# sourceMappingURL=58.js.map