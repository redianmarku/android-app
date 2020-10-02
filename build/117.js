webpackJsonp([117],{

/***/ 2082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatUsersPageModule", function() { return AddonModChatUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users__ = __webpack_require__(2238);
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







var AddonModChatUsersPageModule = /** @class */ (function () {
    function AddonModChatUsersPageModule() {
    }
    AddonModChatUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__users__["a" /* AddonModChatUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__users__["a" /* AddonModChatUsersPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModChatUsersPageModule);
    return AddonModChatUsersPageModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 2238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModChatUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(132);
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
 * Page that displays the chat session users.
 */
var AddonModChatUsersPage = /** @class */ (function () {
    function AddonModChatUsersPage(navParams, network, zone, appProvider, sitesProvider, viewCtrl, domUtils, chatProvider) {
        var _this = this;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.viewCtrl = viewCtrl;
        this.domUtils = domUtils;
        this.chatProvider = chatProvider;
        this.users = [];
        this.usersLoaded = false;
        this.sessionId = navParams.get('sessionId');
        this.isOnline = this.appProvider.isOnline();
        this.currentUserId = this.sitesProvider.getCurrentSiteUserId();
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.isOnline = _this.appProvider.isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    AddonModChatUsersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.chatProvider.getChatUsers(this.sessionId).then(function (data) {
            _this.users = data.users;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_chat.errorwhilegettingchatusers', true);
        }).finally(function () {
            _this.usersLoaded = true;
        });
    };
    /**
     * Close the chat users modal.
     */
    AddonModChatUsersPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ users: this.users });
    };
    /**
     * Add "To user:".
     *
     * @param user User object.
     */
    AddonModChatUsersPage.prototype.talkTo = function (user) {
        this.viewCtrl.dismiss({ talkTo: user.fullname, users: this.users });
    };
    /**
     * Beep a user.
     *
     * @param user User object.
     */
    AddonModChatUsersPage.prototype.beepTo = function (user) {
        this.viewCtrl.dismiss({ beepTo: user.id, users: this.users });
    };
    /**
     * Page destroyed.
     */
    AddonModChatUsersPage.prototype.ngOnDestroy = function () {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    AddonModChatUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-chat-users',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\chat\pages\users\users.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_chat.currentusers\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="usersLoaded">\n\n        <ion-item text-wrap *ngFor="let user of users" [class.addon-mod-chat-user]="currentUserId != user.id && isOnline">\n\n            <ion-avatar core-user-avatar [user]="user" item-start></ion-avatar>\n\n            <h2>{{ user.fullname }}</h2>\n\n            <ng-container *ngIf="currentUserId != user.id && isOnline">\n\n                <button ion-button clear icon-left (click)="talkTo(user)">\n\n                    <ion-icon name="chatboxes"></ion-icon>\n\n                    {{ \'addon.mod_chat.talk\' | translate }}\n\n                </button>\n\n                <button ion-button clear icon-left (click)="beepTo(user)">\n\n                    <ion-icon name="notifications"></ion-icon>\n\n                    {{ \'addon.mod_chat.beep\' | translate }}\n\n                </button>\n\n            </ng-container>\n\n        </ion-item>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\chat\pages\users\users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_chat__["a" /* AddonModChatProvider */]])
    ], AddonModChatUsersPage);
    return AddonModChatUsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ })

});
//# sourceMappingURL=117.js.map