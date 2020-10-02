webpackJsonp([60],{

/***/ 2124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreContentLinksChooseSitePageModule", function() { return CoreContentLinksChooseSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_site__ = __webpack_require__(2280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
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






var CoreContentLinksChooseSitePageModule = /** @class */ (function () {
    function CoreContentLinksChooseSitePageModule() {
    }
    CoreContentLinksChooseSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreContentLinksChooseSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_site__["a" /* CoreContentLinksChooseSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreContentLinksChooseSitePageModule);
    return CoreContentLinksChooseSitePageModule;
}());

//# sourceMappingURL=choose-site.module.js.map

/***/ }),

/***/ 2280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreContentLinksChooseSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_login_providers_helper__ = __webpack_require__(91);
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
 * Page to display the list of sites to choose one to perform a content link action.
 */
var CoreContentLinksChooseSitePage = /** @class */ (function () {
    function CoreContentLinksChooseSitePage(navCtrl, navParams, contentLinksDelegate, sitesProvider, domUtils, translate, contentLinksHelper, loginHelper) {
        this.navCtrl = navCtrl;
        this.contentLinksDelegate = contentLinksDelegate;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.contentLinksHelper = contentLinksHelper;
        this.loginHelper = loginHelper;
        this.url = navParams.get('url');
    }
    /**
     * Component being initialized.
     */
    CoreContentLinksChooseSitePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.url) {
            return this.leaveView();
        }
        // Check if it's the root URL.
        this.sitesProvider.isStoredRootURL(this.url).then(function (data) {
            if (data.site) {
                // It's the root URL.
                _this.isRootURL = true;
                return data.siteIds;
            }
            else if (data.siteIds.length) {
                // Not root URL, but the URL belongs to at least 1 site. Check if there is any action to treat the link.
                return _this.contentLinksDelegate.getActionsFor(_this.url).then(function (actions) {
                    _this.action = _this.contentLinksHelper.getFirstValidAction(actions);
                    if (!_this.action) {
                        return Promise.reject(_this.translate.instant('core.contentlinks.errornoactions'));
                    }
                    return _this.action.sites;
                });
            }
            else {
                // No sites to treat the URL.
                return Promise.reject(_this.translate.instant('core.contentlinks.errornosites'));
            }
        }).then(function (siteIds) {
            // Get the sites that can perform the action.
            return _this.sitesProvider.getSites(siteIds);
        }).then(function (sites) {
            _this.sites = sites;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.contentlinks.errornosites', true);
            _this.leaveView();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Cancel.
     */
    CoreContentLinksChooseSitePage.prototype.cancel = function () {
        this.leaveView();
    };
    /**
     * Perform the action on a certain site.
     *
     * @param siteId Site ID.
     */
    CoreContentLinksChooseSitePage.prototype.siteClicked = function (siteId) {
        if (this.isRootURL) {
            this.loginHelper.redirect('', {}, siteId);
        }
        else {
            this.action.action(siteId, this.navCtrl);
        }
    };
    /**
     * Cancel and leave the view.
     */
    CoreContentLinksChooseSitePage.prototype.leaveView = function () {
        var _this = this;
        this.sitesProvider.logout().finally(function () {
            _this.navCtrl.setRoot('CoreLoginSitesPage');
        });
    };
    CoreContentLinksChooseSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-content-links-choose-site',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\contentlinks\pages\choose-site\choose-site.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'core.contentlinks.chooseaccount\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list>\n\n            <ion-item text-wrap>\n\n                <p class="item-heading">{{ \'core.contentlinks.chooseaccounttoopenlink\' | translate }}</p>\n\n                <p>{{ url }}</p>\n\n            </ion-item>\n\n            <a ion-item *ngFor="let site of sites" (click)="siteClicked(site.id)" detail-none>\n\n                <ion-avatar item-start>\n\n                    <img [src]="site.avatar" core-external-content [siteId]="site.id" alt="{{ \'core.pictureof\' | translate:{$a: site.fullname} }}" role="presentation" onError="this.src=\'assets/img/user-avatar.png\'">\n\n                </ion-avatar>\n\n                <h2>{{site.fullName}}</h2>\n\n                <p><core-format-text [text]="site.siteName" clean="true" [siteId]="site.id"></core-format-text></p>\n\n                <p>{{site.siteUrl}}</p>\n\n            </a>\n\n            <ion-item>\n\n                <button ion-button block (click)="cancel()">{{ \'core.login.cancel\' | translate }}</button>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\contentlinks\pages\choose-site\choose-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_helper__["b" /* CoreContentLinksHelperProvider */], __WEBPACK_IMPORTED_MODULE_7__core_login_providers_helper__["a" /* CoreLoginHelperProvider */]])
    ], CoreContentLinksChooseSitePage);
    return CoreContentLinksChooseSitePage;
}());

//# sourceMappingURL=choose-site.js.map

/***/ })

});
//# sourceMappingURL=60.js.map