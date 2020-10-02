webpackJsonp([10],{

/***/ 2164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerQRScannerPageModule", function() { return CoreViewerQRScannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_scanner__ = __webpack_require__(2320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
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





var CoreViewerQRScannerPageModule = /** @class */ (function () {
    function CoreViewerQRScannerPageModule() {
    }
    CoreViewerQRScannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__qr_scanner__["a" /* CoreViewerQRScannerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__qr_scanner__["a" /* CoreViewerQRScannerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreViewerQRScannerPageModule);
    return CoreViewerQRScannerPageModule;
}());

//# sourceMappingURL=qr-scanner.module.js.map

/***/ }),

/***/ 2320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreViewerQRScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(4);
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
 * Page to scan a QR code.
 */
var CoreViewerQRScannerPage = /** @class */ (function () {
    function CoreViewerQRScannerPage(params, translate, viewCtrl, domUtils, utils) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.utils = utils;
        this.title = params.get('title') || translate.instant('core.scanqr');
        this.utils.startScanQR().then(function (text) {
            // Text captured, return it.
            text = typeof text == 'string' ? text.trim() : '';
            _this.closeModal(text);
        }).catch(function (error) {
            if (!_this.domUtils.isCanceledError(error)) {
                // Show error and stop scanning.
                _this.domUtils.showErrorModalDefault(error, 'An error occurred.');
                _this.utils.stopScanQR();
            }
            _this.closeModal();
        });
    }
    /**
     * Cancel scanning.
     */
    CoreViewerQRScannerPage.prototype.cancel = function () {
        this.utils.stopScanQR();
    };
    /**
     * Close modal.
     *
     * @param text The text to return (if any).
     */
    CoreViewerQRScannerPage.prototype.closeModal = function (text) {
        this.viewCtrl.dismiss(text);
    };
    /**
     * View will leave.
     */
    CoreViewerQRScannerPage.prototype.ionViewWillLeave = function () {
        // If this code is reached and scan hasn't been stopped yet it means the user clicked the back button, cancel.
        this.utils.stopScanQR();
    };
    CoreViewerQRScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-viewer-qr-scanner',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\viewer\pages\qr-scanner\qr-scanner.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title }}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="cancel()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\viewer\pages\qr-scanner\qr-scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["b" /* CoreUtilsProvider */]])
    ], CoreViewerQRScannerPage);
    return CoreViewerQRScannerPage;
}());

//# sourceMappingURL=qr-scanner.js.map

/***/ })

});
//# sourceMappingURL=10.js.map