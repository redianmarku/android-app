webpackJsonp([8],{

/***/ 2166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerTextAreaPageModule", function() { return CoreViewerTextAreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textarea__ = __webpack_require__(2322);
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






/**
 * Module to lazy load the page.
 */
var CoreViewerTextAreaPageModule = /** @class */ (function () {
    function CoreViewerTextAreaPageModule() {
    }
    CoreViewerTextAreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__textarea__["a" /* CoreViewerTextAreaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__textarea__["a" /* CoreViewerTextAreaPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreViewerTextAreaPageModule);
    return CoreViewerTextAreaPageModule;
}());

//# sourceMappingURL=textarea.module.js.map

/***/ }),

/***/ 2322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreViewerTextAreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Page to render a textarea prompt.
 */
var CoreViewerTextAreaPage = /** @class */ (function () {
    function CoreViewerTextAreaPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.text = '';
        this.title = params.get('title');
        this.message = params.get('message');
        this.placeholder = params.get('placeholder') || '';
        var buttons = params.get('buttons');
        this.buttons = buttons.map(function (button) {
            if (typeof button === 'string') {
                return { text: button };
            }
            return button;
        });
    }
    /**
     * Button clicked.
     *
     * @param button: Clicked button.
     */
    CoreViewerTextAreaPage.prototype.buttonClicked = function (button) {
        var shouldDismiss = true;
        if (button.handler) {
            // A handler has been provided, execute it pass the handler the values from the inputs
            if (button.handler(this.text) === false) {
                // If the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.viewCtrl.dismiss(button.role);
        }
    };
    CoreViewerTextAreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-viewer-textarea',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\viewer\pages\textarea\textarea.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{ title }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="prompt-message"><core-format-text [text]="message"></core-format-text></div>\n\n    <ion-textarea rows="1" core-auto-rows name="feedback" [attr.aria-multiline]="true" [(ngModel)]="text" [placeholder]="placeholder"></ion-textarea>\n\n    <div class="prompt-button-group">\n\n        <button *ngFor="let button of buttons" ion-button="prompt-button" (click)="buttonClicked(button)" [ngClass]="button.cssClass">\n\n            {{ button.text }}\n\n        </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\viewer\pages\textarea\textarea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreViewerTextAreaPage);
    return CoreViewerTextAreaPage;
}());

//# sourceMappingURL=textarea.js.map

/***/ })

});
//# sourceMappingURL=8.js.map