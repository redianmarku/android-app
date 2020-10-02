webpackJsonp([62],{

/***/ 2123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsAddPageModule", function() { return CoreCommentsAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add__ = __webpack_require__(2279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
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





var CoreCommentsAddPageModule = /** @class */ (function () {
    function CoreCommentsAddPageModule() {
    }
    CoreCommentsAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add__["a" /* CoreCommentsAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add__["a" /* CoreCommentsAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreCommentsAddPageModule);
    return CoreCommentsAddPageModule;
}());

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 2279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCommentsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_comments__ = __webpack_require__(125);
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
 * Component that displays a text area for composing a comment.
 */
var CoreCommentsAddPage = /** @class */ (function () {
    function CoreCommentsAddPage(params, viewCtrl, appProvider, domUtils, commentsProvider, eventsProvider, sitesProvider) {
        this.viewCtrl = viewCtrl;
        this.appProvider = appProvider;
        this.domUtils = domUtils;
        this.commentsProvider = commentsProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.area = '';
        this.content = '';
        this.processing = false;
        this.contextLevel = params.get('contextLevel');
        this.instanceId = params.get('instanceId');
        this.componentName = params.get('componentName');
        this.itemId = params.get('itemId');
        this.area = params.get('area') || '';
        this.content = params.get('content') || '';
    }
    /**
     * Send the comment or store it offline.
     *
     * @param e Event.
     */
    CoreCommentsAddPage.prototype.addComment = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        var loadingModal = this.domUtils.showModalLoading('core.sending', true);
        // Freeze the add comment button.
        this.processing = true;
        this.commentsProvider.addComment(this.content, this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then(function (commentsResponse) {
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, !!commentsResponse, _this.sitesProvider.getCurrentSiteId());
            _this.viewCtrl.dismiss({ comments: commentsResponse }).finally(function () {
                _this.domUtils.showToast(commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline', true, 3000);
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
            _this.processing = false;
        }).finally(function () {
            loadingModal.dismiss();
        });
    };
    /**
     * Close modal.
     */
    CoreCommentsAddPage.prototype.closeModal = function () {
        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('commentForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreCommentsAddPage.prototype, "formElement", void 0);
    CoreCommentsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-comments-add',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\comments\pages\add\add.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.comments.addcomment\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form name="itemEdit" (ngSubmit)="addComment($event)" #commentForm>\n\n        <ion-item>\n\n            <ion-textarea placeholder="{{ \'core.comments.addcomment\' | translate }}" rows="5" [(ngModel)]="content" name="content" required="required"></ion-textarea>\n\n        </ion-item>\n\n        <div padding>\n\n            <button ion-button block type="submit" [disabled]="processing || content.length < 1">\n\n                {{ \'core.comments.savecomment\' | translate }}\n\n            </button>\n\n        </div>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\comments\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_comments__["a" /* CoreCommentsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */]])
    ], CoreCommentsAddPage);
    return CoreCommentsAddPage;
}());

//# sourceMappingURL=add.js.map

/***/ })

});
//# sourceMappingURL=62.js.map