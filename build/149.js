webpackJsonp([149],{

/***/ 2058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesIssuedBadgePageModule", function() { return AddonBadgesIssuedBadgePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__issued_badge__ = __webpack_require__(2214);
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







var AddonBadgesIssuedBadgePageModule = /** @class */ (function () {
    function AddonBadgesIssuedBadgePageModule() {
    }
    AddonBadgesIssuedBadgePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__issued_badge__["a" /* AddonBadgesIssuedBadgePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__issued_badge__["a" /* AddonBadgesIssuedBadgePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonBadgesIssuedBadgePageModule);
    return AddonBadgesIssuedBadgePageModule;
}());

//# sourceMappingURL=issued-badge.module.js.map

/***/ }),

/***/ 2214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonBadgesIssuedBadgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_courses_providers_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_badges__ = __webpack_require__(211);
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
var AddonBadgesIssuedBadgePage = /** @class */ (function () {
    function AddonBadgesIssuedBadgePage(badgesProvider, navParams, sitesProvider, domUtils, timeUtils, userProvider, coursesProvider) {
        this.badgesProvider = badgesProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.userProvider = userProvider;
        this.coursesProvider = coursesProvider;
        this.user = {};
        this.course = {};
        this.badgeLoaded = false;
        this.currentTime = 0;
        this.courseId = navParams.get('courseId') || 0; // Use 0 for site badges.
        this.userId = navParams.get('userId') || sitesProvider.getCurrentSite().getUserId();
        this.badgeHash = navParams.get('badgeHash');
    }
    /**
     * View loaded.
     */
    AddonBadgesIssuedBadgePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchIssuedBadge().finally(function () {
            _this.badgeLoaded = true;
        });
    };
    /**
     * Fetch the issued badge required for the view.
     *
     * @return Promise resolved when done.
     */
    AddonBadgesIssuedBadgePage.prototype.fetchIssuedBadge = function () {
        var _this = this;
        var promises = [];
        this.currentTime = this.timeUtils.timestamp();
        promises.push(this.userProvider.getProfile(this.userId, this.courseId, true).then(function (user) {
            _this.user = user;
        }));
        promises.push(this.badgesProvider.getUserBadges(this.courseId, this.userId).then(function (badges) {
            var badge = badges.find(function (badge) {
                return _this.badgeHash == badge.uniquehash;
            });
            if (badge) {
                _this.badge = badge;
                if (badge.courseid) {
                    return _this.coursesProvider.getUserCourse(badge.courseid, true).then(function (course) {
                        _this.course = course;
                    }).catch(function () {
                        // Maybe an old deleted course.
                        _this.course = null;
                    });
                }
            }
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting badge data.');
        }));
        return Promise.all(promises);
    };
    /**
     * Refresh the badges.
     *
     * @param refresher Refresher.
     */
    AddonBadgesIssuedBadgePage.prototype.refreshBadges = function (refresher) {
        var _this = this;
        this.badgesProvider.invalidateUserBadges(this.courseId, this.userId).finally(function () {
            _this.fetchIssuedBadge().finally(function () {
                refresher.complete();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonBadgesIssuedBadgePage.prototype, "content", void 0);
    AddonBadgesIssuedBadgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-badges-issued-badge',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\badges\pages\issued-badge\issued-badge.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{badge && badge.name}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="badgeLoaded" (ionRefresh)="refreshBadges($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="badgeLoaded">\n\n\n\n        <ion-item-group *ngIf="badge">\n\n            <ion-item text-wrap class="item-avatar-center">\n\n                <img *ngIf="badge.badgeurl" class="avatar" [src]="badge.badgeurl" core-external-content [alt]="badge.name">\n\n                <ion-badge color="danger" *ngIf="badge.dateexpire && currentTime >= badge.dateexpire">\n\n                    {{ \'addon.badges.expired\' | translate }}\n\n                </ion-badge>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngIf="user.fullname">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.recipientdetails\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'core.name\' | translate}}</h2>\n\n                <p>{{ user.fullname }}</p>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngIf="badge">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.issuerdetails\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap *ngIf="badge.issuername">\n\n                <h2>{{ \'addon.badges.issuername\' | translate}}</h2>\n\n                <p>{{ badge.issuername }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.issuercontact">\n\n                <h2>{{ \'addon.badges.contact\' | translate}}</h2>\n\n                <p><a href="mailto:{{badge.issuercontact}}" core-link auto-login="no">\n\n                    {{ badge.issuercontact }}\n\n                </a></p>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngIf="badge">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.badgedetails\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap *ngIf="badge.name">\n\n                <h2>{{ \'core.name\' | translate}}</h2>\n\n                <p>{{ badge.name }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.version">\n\n                <h2>{{ \'addon.badges.version\' | translate}}</h2>\n\n                <p>{{ badge.version }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.language">\n\n                <h2>{{ \'addon.badges.language\' | translate}}</h2>\n\n                <p>{{ badge.language }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.description">\n\n                <h2>{{ \'core.description\' | translate}}</h2>\n\n                <p>{{ badge.description }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.imageauthorname">\n\n                <h2>{{ \'addon.badges.imageauthorname\' | translate}}</h2>\n\n                <p>{{ badge.imageauthorname }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.imageauthoremail">\n\n                <h2>{{ \'addon.badges.imageauthoremail\' | translate}}</h2>\n\n                <p><a href="mailto:{{badge.imageauthoremail}}" core-link auto-login="no">\n\n                    {{ badge.imageauthoremail }}\n\n                </a></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.imageauthorurl">\n\n                <h2>{{ \'addon.badges.imageauthorurl\' | translate}}</h2>\n\n                <p><a [href]="badge.imageauthorurl" core-link auto-login="no">\n\n                    {{ badge.imageauthorurl }}\n\n                </a></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.imagecaption">\n\n                <h2>{{ \'addon.badges.imagecaption\' | translate}}</h2>\n\n                <p>{{ badge.imagecaption }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="course.fullname">\n\n                <h2>{{ \'core.course\' | translate}}</h2>\n\n                <p>\n\n                    <core-format-text [text]="course.fullname" contextLevel="course" [contextInstanceId]="courseId"></core-format-text>\n\n                </p>\n\n            </ion-item>\n\n            <!-- Criteria (not yet avalaible) -->\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngIf="badge">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.issuancedetails\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap *ngIf="badge.dateissued">\n\n                <h2>{{ \'addon.badges.dateawarded\' | translate}}</h2>\n\n                <p>{{badge.dateissued * 1000 | coreFormatDate }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.dateexpire">\n\n                <h2>{{ \'addon.badges.expirydate\' | translate}}</h2>\n\n                <p>\n\n                    {{ badge.dateexpire * 1000 | coreFormatDate }}\n\n                    <span class="text-danger" *ngIf="currentTime >= badge.dateexpire">\n\n                        {{ \'addon.badges.warnexpired\' | translate }}\n\n                    </span>\n\n                </p>\n\n            </ion-item>\n\n            <!-- Evidence (not yet avalaible) -->\n\n        </ion-item-group>\n\n\n\n        <!-- Endorsement -->\n\n        <ion-item-group *ngIf="badge && badge.endorsement">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.bendorsement\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.issuername">\n\n                <h2>{{ \'addon.badges.issuername\' | translate}}</h2>\n\n                <p>{{ badge.endorsement.issuername }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.issueremail">\n\n                <h2>{{ \'addon.badges.issueremail\' | translate}}</h2>\n\n                <p><a href="mailto:{{badge.endorsement.issueremail}}" core-link auto-login="no">\n\n                    {{ badge.endorsement.issueremail }}\n\n                </a></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.issuerurl">\n\n                <h2>{{ \'addon.badges.issuerurl\' | translate}}</h2>\n\n                <p><a [href]="badge.endorsement.issuerurl" core-link auto-login="no">\n\n                    {{ badge.endorsement.issuerurl }}\n\n                </a></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.dateissued">\n\n                <h2>{{ \'addon.badges.dateawarded\' | translate}}</h2>\n\n                <p>{{ badge.endorsement.dateissued * 1000 | coreFormatDate }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.claimid">\n\n                <h2>{{ \'addon.badges.claimid\' | translate}}</h2>\n\n                <p><a [href]="badge.endorsement.claimid" core-link auto-login="no">\n\n                    {{ badge.endorsement.claimid }}\n\n                </a></p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.endorsement.claimcomment">\n\n                <h2>{{ \'addon.badges.claimcomment\' | translate}}</h2>\n\n                <p>{{ badge.endorsement.claimcomment }}</p>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <!-- Related badges -->\n\n        <ion-item-group *ngIf="badge && badge.relatedbadges">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.relatedbages\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <ion-item text-wrap *ngFor="let relatedBadge of badge.relatedbadges">\n\n                <h2>{{ relatedBadge.name }}</h2>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="badge.relatedbadges.length == 0">\n\n                <h2>{{ \'addon.badges.norelated\' | translate}}</h2>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <!-- Competencies alignment -->\n\n        <ion-item-group *ngIf="badge && badge.alignment">\n\n            <ion-item-divider>\n\n                <h2>{{ \'addon.badges.alignment\' | translate}}</h2>\n\n            </ion-item-divider>\n\n            <a ion-item text-wrap *ngFor="let alignment of badge.alignment" [href]="alignment.targeturl" core-link auto-login="no">\n\n                <h2>{{ alignment.targetname }}</h2>\n\n            </a>\n\n            <ion-item text-wrap *ngIf="badge.alignment.length == 0">\n\n                <h2>{{ \'addon.badges.noalignment\' | translate}}</h2>\n\n            </ion-item>\n\n        </ion-item-group>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\badges\pages\issued-badge\issued-badge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_badges__["a" /* AddonBadgesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_time__["b" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__core_user_providers_user__["b" /* CoreUserProvider */], __WEBPACK_IMPORTED_MODULE_6__core_courses_providers_courses__["b" /* CoreCoursesProvider */]])
    ], AddonBadgesIssuedBadgePage);
    return AddonBadgesIssuedBadgePage;
}());

//# sourceMappingURL=issued-badge.js.map

/***/ })

});
//# sourceMappingURL=149.js.map