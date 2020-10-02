webpackJsonp([128],{

/***/ 2074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditFeedbackModalPageModule", function() { return AddonModAssignEditFeedbackModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__ = __webpack_require__(2230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1040);
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







var AddonModAssignEditFeedbackModalPageModule = /** @class */ (function () {
    function AddonModAssignEditFeedbackModalPageModule() {
    }
    AddonModAssignEditFeedbackModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__["a" /* AddonModAssignEditFeedbackModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModAssignComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_feedback_modal__["a" /* AddonModAssignEditFeedbackModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModAssignEditFeedbackModalPageModule);
    return AddonModAssignEditFeedbackModalPageModule;
}());

//# sourceMappingURL=edit-feedback-modal.module.js.map

/***/ }),

/***/ 2230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignEditFeedbackModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_feedback_delegate__ = __webpack_require__(115);
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
 * Modal that allows editing a feedback plugin.
 */
var AddonModAssignEditFeedbackModalPage = /** @class */ (function () {
    function AddonModAssignEditFeedbackModalPage(params, viewCtrl, domUtils, translate, feedbackDelegate, eventsProvider, sitesProvider) {
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.translate = translate;
        this.feedbackDelegate = feedbackDelegate;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.assign = params.get('assign');
        this.submission = params.get('submission');
        this.plugin = params.get('plugin');
        this.userId = params.get('userId');
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModAssignEditFeedbackModalPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hasDataChanged()];
                    case 1:
                        changed = _a.sent();
                        if (!changed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Close modal.
     *
     * @param data Data to return to the page.
     */
    AddonModAssignEditFeedbackModalPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    /**
     * Done editing.
     *
     * @param e Click event.
     */
    AddonModAssignEditFeedbackModalPage.prototype.done = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        // Close the modal, sending the input data.
        this.forceLeave = true;
        this.closeModal(this.getInputData());
    };
    /**
     * Get the input data.
     *
     * @return Object with the data.
     */
    AddonModAssignEditFeedbackModalPage.prototype.getInputData = function () {
        return this.domUtils.getDataFromForm(document.forms['addon-mod_assign-edit-feedback-form']);
    };
    /**
     * Check if data has changed.
     *
     * @return Promise resolved with boolean: whether the data has changed.
     */
    AddonModAssignEditFeedbackModalPage.prototype.hasDataChanged = function () {
        return this.feedbackDelegate.hasPluginDataChanged(this.assign, this.submission, this.plugin, this.getInputData(), this.userId).catch(function () {
            // Ignore errors.
            return true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "assign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "submission", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonModAssignEditFeedbackModalPage.prototype, "plugin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AddonModAssignEditFeedbackModalPage.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editFeedbackForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModAssignEditFeedbackModalPage.prototype, "formElement", void 0);
    AddonModAssignEditFeedbackModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-edit-feedback-modal',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\assign\pages\edit-feedback-modal\edit-feedback-modal.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ plugin.name }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form name="addon-mod_assign-edit-feedback-form" *ngIf="userId && plugin" #editFeedbackForm>\n\n        <addon-mod-assign-feedback-plugin [assign]="assign" [submission]="submission" [userId]="userId" [plugin]="plugin" [edit]="true"></addon-mod-assign-feedback-plugin>\n\n        <button ion-button block (click)="done($event)">{{ \'core.done\' | translate }}</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\assign\pages\edit-feedback-modal\edit-feedback-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_feedback_delegate__["a" /* AddonModAssignFeedbackDelegate */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */]])
    ], AddonModAssignEditFeedbackModalPage);
    return AddonModAssignEditFeedbackModalPage;
}());

//# sourceMappingURL=edit-feedback-modal.js.map

/***/ })

});
//# sourceMappingURL=128.js.map