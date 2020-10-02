webpackJsonp([69],{

/***/ 2117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopPhaseInfoPageModule", function() { return AddonModWorkshopPhaseInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase__ = __webpack_require__(2273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(464);
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






var AddonModWorkshopPhaseInfoPageModule = /** @class */ (function () {
    function AddonModWorkshopPhaseInfoPageModule() {
    }
    AddonModWorkshopPhaseInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWorkshopPhaseInfoPageModule);
    return AddonModWorkshopPhaseInfoPageModule;
}());

//# sourceMappingURL=phase.module.js.map

/***/ }),

/***/ 2273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWorkshopPhaseInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(4);
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
 * Page that displays the phase info modal.
 */
var AddonModWorkshopPhaseInfoPage = /** @class */ (function () {
    function AddonModWorkshopPhaseInfoPage(params, viewCtrl, utils) {
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.phases = params.get('phases');
        this.workshopPhase = params.get('workshopPhase');
        this.showSubmit = params.get('showSubmit');
        var externalUrl = params.get('externalUrl');
        // Treat phases.
        for (var x in this.phases) {
            this.phases[x].tasks.forEach(function (task) {
                if (!task.link && (task.code == 'examples' || task.code == 'prepareexamples')) {
                    // Add links to manage examples.
                    task.link = externalUrl;
                }
            });
            var action = this.phases[x].actions.find(function (action) {
                return action.url && action.type == 'switchphase';
            });
            this.phases[x].switchUrl = action ? action.url : '';
        }
    }
    /**
     * Close modal.
     */
    AddonModWorkshopPhaseInfoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Open task.
     *
     * @param task Task to be done.
     */
    AddonModWorkshopPhaseInfoPage.prototype.runTask = function (task) {
        if (task.code == 'submit') {
            // This will close the modal and go to the submit.
            this.viewCtrl.dismiss(true);
        }
        else if (task.link) {
            this.utils.openInBrowser(task.link);
        }
    };
    AddonModWorkshopPhaseInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-workshop-phase-info',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\workshop\pages\phase\phase.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_workshop.userplan\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ng-container *ngFor="let phase of phases">\n\n            <ion-item-divider [class.core-workshop-phase-selected]="workshopPhase == phase.code">\n\n                <h2>{{ phase.title }}</h2>\n\n                <p text-wrap *ngIf="workshopPhase == phase.code">{{ \'addon.mod_workshop.userplancurrentphase\' | translate }}</p>\n\n            </ion-item-divider>\n\n            <a ion-item text-wrap *ngIf="phase.switchUrl" [href]="phase.switchUrl" detail-none>\n\n                <ion-icon item-start name="swap"></ion-icon>\n\n                {{ \'addon.mod_workshop.switchphase\' + phase.code | translate }}\n\n                <ion-icon item-end name="open"></ion-icon>\n\n            </a>\n\n            <a ion-item text-wrap *ngFor="let task of phase.tasks" [class.item-dimmed]="phase.code != workshopPhase || (task.code == \'submit\' && !showSubmit)" (click)="runTask(task)" detail-none>\n\n                <ion-icon item-start name="radio-button-off" *ngIf="task.completed == null"></ion-icon>\n\n                <ion-icon item-start name="close-circle" color="danger" *ngIf="task.completed == \'\'"></ion-icon>\n\n                <ion-icon item-start name="information-circle" color="info" *ngIf="task.completed == \'info\'"></ion-icon>\n\n                <ion-icon item-start name="checkmark-circle" color="success" *ngIf="task.completed == \'1\'"></ion-icon>\n\n\n\n                <h2 text-wrap>{{task.title}}</h2>\n\n                <p *ngIf="task.details" [innerHTML]="task.details"></p>\n\n                <ion-icon item-end *ngIf="task.link && task.code != \'submit\'" name="open"></ion-icon>\n\n            </a>\n\n        </ng-container>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\workshop\pages\phase\phase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["b" /* CoreUtilsProvider */]])
    ], AddonModWorkshopPhaseInfoPage);
    return AddonModWorkshopPhaseInfoPage;
}());

//# sourceMappingURL=phase.js.map

/***/ })

});
//# sourceMappingURL=69.js.map