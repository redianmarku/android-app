webpackJsonp([148],{

/***/ 2059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesUserBadgesPageModule", function() { return AddonBadgesUserBadgesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_badges__ = __webpack_require__(2215);
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







var AddonBadgesUserBadgesPageModule = /** @class */ (function () {
    function AddonBadgesUserBadgesPageModule() {
    }
    AddonBadgesUserBadgesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__user_badges__["a" /* AddonBadgesUserBadgesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__user_badges__["a" /* AddonBadgesUserBadgesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonBadgesUserBadgesPageModule);
    return AddonBadgesUserBadgesPageModule;
}());

//# sourceMappingURL=user-badges.module.js.map

/***/ }),

/***/ 2215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonBadgesUserBadgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_badges__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__ = __webpack_require__(84);
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
 * Page that displays the list of calendar events.
 */
var AddonBadgesUserBadgesPage = /** @class */ (function () {
    function AddonBadgesUserBadgesPage(navParams, sitesProvider, badgesProvider, domUtils, timeUtils) {
        this.badgesProvider = badgesProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.badgesLoaded = false;
        this.badges = [];
        this.currentTime = 0;
        this.courseId = navParams.get('courseId') || 0; // Use 0 for site badges.
        this.userId = navParams.get('userId') || sitesProvider.getCurrentSite().getUserId();
    }
    /**
     * View loaded.
     */
    AddonBadgesUserBadgesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchBadges().finally(function () {
            if (!_this.badgeHash && _this.splitviewCtrl.isOn() && _this.badges.length > 0) {
                // Take first and load it.
                _this.loadIssuedBadge(_this.badges[0].uniquehash);
            }
            _this.badgesLoaded = true;
        });
    };
    /**
     * Fetch all the badges required for the view.
     *
     * @return Promise resolved when done.
     */
    AddonBadgesUserBadgesPage.prototype.fetchBadges = function () {
        var _this = this;
        this.currentTime = this.timeUtils.timestamp();
        return this.badgesProvider.getUserBadges(this.courseId, this.userId).then(function (badges) {
            _this.badges = badges;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting badges data.');
        });
    };
    /**
     * Refresh the badges.
     *
     * @param refresher Refresher.
     */
    AddonBadgesUserBadgesPage.prototype.refreshBadges = function (refresher) {
        var _this = this;
        this.badgesProvider.invalidateUserBadges(this.courseId, this.userId).finally(function () {
            _this.fetchBadges().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to a particular badge.
     *
     * @param badgeHash Badge to load.
     */
    AddonBadgesUserBadgesPage.prototype.loadIssuedBadge = function (badgeHash) {
        this.badgeHash = badgeHash;
        var params = { courseId: this.courseId, userId: this.userId, badgeHash: badgeHash };
        this.splitviewCtrl.push('AddonBadgesIssuedBadgePage', params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonBadgesUserBadgesPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_split_view_split_view__["a" /* CoreSplitViewComponent */])
    ], AddonBadgesUserBadgesPage.prototype, "splitviewCtrl", void 0);
    AddonBadgesUserBadgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-badges-user-badges',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\badges\pages\user-badges\user-badges.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.badges.badges\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-split-view>\n\n    <ion-content>\n\n        <ion-refresher [enabled]="badgesLoaded" (ionRefresh)="refreshBadges($event)">\n\n            <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n        </ion-refresher>\n\n        <core-loading [hideUntil]="badgesLoaded">\n\n            <core-empty-box *ngIf="!badges || badges.length == 0" icon="trophy" [message]="\'addon.badges.nobadges\' | translate">\n\n            </core-empty-box>\n\n\n\n            <ion-list *ngIf="badges && badges.length" no-margin>\n\n                <a ion-item text-wrap *ngFor="let badge of badges" [title]="badge.name" (click)="loadIssuedBadge(badge.uniquehash)" [class.core-split-item-selected]="badge.uniquehash == badgeHash">\n\n                    <ion-avatar item-start>\n\n                        <img [src]="badge.badgeurl" [alt]="badge.name" item-start core-external-content>\n\n                    </ion-avatar>\n\n                    <h2>{{ badge.name }}</h2>\n\n                    <p>{{ badge.dateissued * 1000 | coreFormatDate :\'strftimedatetimeshort\' }}</p>\n\n                    <ion-badge item-end color="danger" *ngIf="badge.dateexpire && currentTime >= badge.dateexpire">\n\n                        {{ \'addon.badges.expired\' | translate }}\n\n                    </ion-badge>\n\n                </a>\n\n            </ion-list>\n\n        </core-loading>\n\n    </ion-content>\n\n</core-split-view>'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\badges\pages\user-badges\user-badges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_badges__["a" /* AddonBadgesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_time__["b" /* CoreTimeUtilsProvider */]])
    ], AddonBadgesUserBadgesPage);
    return AddonBadgesUserBadgesPage;
}());

//# sourceMappingURL=user-badges.js.map

/***/ })

});
//# sourceMappingURL=148.js.map