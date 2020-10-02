webpackJsonp([0],{

/***/ 2169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSettingsPageModule", function() { return AddonMessagesSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(2209);
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







var AddonMessagesSettingsPageModule = /** @class */ (function () {
    function AddonMessagesSettingsPageModule() {
    }
    AddonMessagesSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonMessagesSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonMessagesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonMessagesSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessagesSettingsPageModule);
    return AddonMessagesSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 2209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_search_components_components_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_discussions_discussions__ = __webpack_require__(2210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmed_contacts_confirmed_contacts__ = __webpack_require__(2211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_requests_contact_requests__ = __webpack_require__(2212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contacts_contacts__ = __webpack_require__(2213);
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












var AddonMessagesComponentsModule = /** @class */ (function () {
    function AddonMessagesComponentsModule() {
    }
    AddonMessagesComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_confirmed_contacts_confirmed_contacts__["a" /* AddonMessagesConfirmedContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contact_requests_contact_requests__["a" /* AddonMessagesContactRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_search_components_components_module__["a" /* CoreSearchComponentsModule */],
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_confirmed_contacts_confirmed_contacts__["a" /* AddonMessagesConfirmedContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contact_requests_contact_requests__["a" /* AddonMessagesContactRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ]
        })
    ], AddonMessagesComponentsModule);
    return AddonMessagesComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 2210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesDiscussionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_pushnotifications_providers_delegate__ = __webpack_require__(92);
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
 * Component that displays the list of discussions.
 */
var AddonMessagesDiscussionsComponent = /** @class */ (function () {
    function AddonMessagesDiscussionsComponent(eventsProvider, sitesProvider, translate, messagesProvider, domUtils, navParams, appProvider, platform, utils, pushNotificationsDelegate) {
        var _this = this;
        this.eventsProvider = eventsProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.appProvider = appProvider;
        this.utils = utils;
        this.loaded = false;
        this.search = {
            enabled: false,
            showResults: false,
            results: [],
            loading: '',
            text: ''
        };
        this.search.loading = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, function (data) {
            if (data.userId && _this.discussions) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion == 'undefined') {
                    _this.loaded = false;
                    _this.refreshData().finally(function () {
                        _this.loaded = true;
                    });
                }
                else {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, function (data) {
            if (data.userId && _this.discussions) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion != 'undefined') {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _this.messagesProvider.invalidateConversations(_this.siteId);
                    _this.messagesProvider.refreshUnreadConversationCounts(_this.siteId);
                }
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = platform.resume.subscribe(function () {
            if (!_this.loaded) {
                return;
            }
            _this.loaded = false;
            _this.refreshData();
        });
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // If a message push notification is received, refresh the view.
        this.pushObserver = pushNotificationsDelegate.on('receive').subscribe(function (notification) {
            // New message received. If it's from current site, refresh the data.
            if (utils.isFalseOrZero(notification.notif) && notification.site == _this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                _this.refreshData(null, false);
            }
        });
    }
    /**
     * Component loaded.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.discussions.length > 0) {
                // Take first and load it.
                _this.gotoDiscussion(_this.discussions[0].message.user, undefined, true);
            }
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param refreshUnreadCounts Whteher to refresh unread counts.
     * @return Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.refreshData = function (refresher, refreshUnreadCounts) {
        var _this = this;
        if (refreshUnreadCounts === void 0) { refreshUnreadCounts = true; }
        var promises = [];
        promises.push(this.messagesProvider.invalidateDiscussionsCache(this.siteId));
        if (refreshUnreadCounts) {
            promises.push(this.messagesProvider.invalidateUnreadConversationCounts(this.siteId));
        }
        return this.utils.allPromises(promises).finally(function () {
            return _this.fetchData().finally(function () {
                if (refresher) {
                    refresher.complete();
                }
            });
        });
    };
    /**
     * Fetch discussions.
     *
     * @return Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        this.search.enabled = this.messagesProvider.isSearchMessagesEnabled();
        var promises = [];
        promises.push(this.messagesProvider.getDiscussions(this.siteId).then(function (discussions) {
            // Convert to an array for sorting.
            var discussionsSorted = [];
            for (var userId in discussions) {
                discussions[userId].unread = !!discussions[userId].unread;
                discussionsSorted.push(discussions[userId]);
            }
            _this.discussions = discussionsSorted.sort(function (a, b) {
                return b.message.timecreated - a.message.timecreated;
            });
        }));
        promises.push(this.messagesProvider.getUnreadConversationCounts(this.siteId));
        return Promise.all(promises).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Clear search and show discussions again.
     */
    AddonMessagesDiscussionsComponent.prototype.clearSearch = function () {
        var _this = this;
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Search messages cotaining text.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.searchMessage = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.search.loading;
        return this.messagesProvider.searchMessages(query, undefined, undefined, undefined, this.siteId).then(function (searchResults) {
            _this.search.showResults = true;
            _this.search.results = searchResults.messages;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     * @param messageId Message to scroll after loading the discussion. Used when searching.
     * @param onlyWithSplitView Only go to Discussion if split view is on.
     */
    AddonMessagesDiscussionsComponent.prototype.gotoDiscussion = function (discussionUserId, messageId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnDestroy = function () {
        this.newMessagesObserver && this.newMessagesObserver.off();
        this.readChangedObserver && this.readChangedObserver.off();
        this.cronObserver && this.cronObserver.off();
        this.appResumeSubscription && this.appResumeSubscription.unsubscribe();
        this.pushObserver && this.pushObserver.unsubscribe();
    };
    AddonMessagesDiscussionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-discussions',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\discussions\addon-messages-discussions.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-search-box *ngIf="search.enabled" (onSubmit)="searchMessage($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.message\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded" searchArea="AddonMessagesDiscussions"></core-search-box>\n\n\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n\n\n        <ion-list *ngIf="search.showResults" no-margin>\n\n            <ion-item-divider>\n\n                <h2>{{ \'core.searchresults\' | translate }}</h2>\n\n                <ion-note item-end>{{ search.results.length }}</ion-note>\n\n            </ion-item-divider>\n\n            <a ion-item text-wrap *ngFor="let result of search.results" [title]="result.fullname" (click)="gotoDiscussion(result.userid, result.messageid)" [class.core-split-item-selected]="result.userid == discussionUserId" class="addon-message-discussion">\n\n                <ion-avatar core-user-avatar [user]="result" item-start [checkOnline]="result.showonlinestatus"></ion-avatar>\n\n                <h2>{{ result.fullname }}</h2>\n\n                <p><core-format-text clean="true" singleLine="true" [text]="result.lastmessage" contextLevel="system" [contextInstanceId]="0"></core-format-text></p>\n\n            </a>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="!search.showResults" no-margin>\n\n            <a ion-item text-wrap *ngFor="let discussion of discussions" [title]="discussion.fullname" (click)="gotoDiscussion(discussion.message.user)" [class.core-split-item-selected]="discussion.message.user == discussionUserId" class="addon-message-discussion">\n\n                <ion-avatar core-user-avatar [user]="discussion" item-start [checkOnline]="discussion.showonlinestatus"></ion-avatar>\n\n                <h2>{{ discussion.fullname }}</h2>\n\n                <ion-note *ngIf="discussion.message.timecreated > 0 || discussion.unread">\n\n                    <span *ngIf="discussion.unread" class="core-primary-circle"></span>\n\n                    <span *ngIf="discussion.message.timecreated > 0">{{discussion.message.timecreated / 1000 | coreDateDayOrTime}}</span>\n\n                </ion-note>\n\n                <p><core-format-text clean="true" singleLine="true" [text]="discussion.message.message" contextLevel="system" [contextInstanceId]="0"></core-format-text></p>\n\n            </a>\n\n        </ion-list>\n\n\n\n        <core-empty-box *ngIf="(!discussions || discussions.length <= 0) && !search.showResults" icon="chatbubbles" [message]="\'addon.messages.nomessagesfound\' | translate"></core-empty-box>\n\n\n\n        <core-empty-box *ngIf="(!search.results || search.results.length <= 0) && search.showResults" icon="search" [message]="\'core.noresults\' | translate"></core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\discussions\addon-messages-discussions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app__["b" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_pushnotifications_providers_delegate__["a" /* CorePushNotificationsDelegate */]])
    ], AddonMessagesDiscussionsComponent);
    return AddonMessagesDiscussionsComponent;
}());

//# sourceMappingURL=discussions.js.map

/***/ }),

/***/ 2211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesConfirmedContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
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
 * Component that displays the list of confirmed contacts.
 */
var AddonMessagesConfirmedContactsComponent = /** @class */ (function () {
    function AddonMessagesConfirmedContactsComponent(domUtils, eventsProvider, sitesProvider, messagesProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.loaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.contacts = [];
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Update block status of a user.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.userBlocked || data.userUnblocked) {
                var user = _this.contacts.find(function (user) { return user.id == data.userId; });
                if (user) {
                    user.isblocked = data.userBlocked;
                }
            }
            else if (data.contactRemoved) {
                var index = _this.contacts.findIndex(function (contact) { return contact.id == data.userId; });
                if (index >= 0) {
                    _this.contacts.splice(index, 1);
                }
            }
            else if (data.contactRequestConfirmed) {
                _this.refreshData();
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesConfirmedContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.contacts.length) {
                _this.selectUser(_this.contacts[0].id, true);
            }
        }).finally(function () {
            _this.loaded = true;
        });
        // Workaround for infinite scrolling.
        this.content.resize();
    };
    /**
     * Fetch contacts.
     *
     * @param refresh True if we are refreshing contacts, false if we are loading more.
     * @return Promise resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.loadMoreError = false;
        var limitFrom = refresh ? 0 : this.contacts.length;
        var promise;
        if (limitFrom === 0) {
            // Always try to get latest data from server.
            promise = this.messagesProvider.invalidateUserContacts().catch(function () {
                // Shouldn't happen.
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            return _this.messagesProvider.getUserContacts(limitFrom);
        }).then(function (result) {
            _this.contacts = refresh ? result.contacts : _this.contacts.concat(result.contacts);
            _this.canLoadMore = result.canLoadMore;
        }).catch(function (error) {
            _this.loadMoreError = true;
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Refresh contacts.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.refreshData = function (refresher) {
        // No need to invalidate contacts, we always try to get the latest.
        return this.fetchData(true).finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Load more contacts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.loadMore = function (infiniteComplete) {
        return this.fetchData().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Notify that a contact has been selected.
     *
     * @param userId User id.
     * @param onInit Whether the contact is selected on initial load.
     */
    AddonMessagesConfirmedContactsComponent.prototype.selectUser = function (userId, onInit) {
        if (onInit === void 0) { onInit = false; }
        this.selectedUserId = userId;
        this.onUserSelected.emit({ userId: userId, onInit: onInit });
    };
    /**
     * Component destroyed.
     */
    AddonMessagesConfirmedContactsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonMessagesConfirmedContactsComponent.prototype, "onUserSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonMessagesConfirmedContactsComponent.prototype, "content", void 0);
    AddonMessagesConfirmedContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-confirmed-contacts',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\confirmed-contacts\addon-messages-confirmed-contacts.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded" class="core-loading-center">\n\n        <ion-list no-margin>\n\n            <a ion-item text-wrap *ngFor="let contact of contacts" [title]="contact.fullname" (click)="selectUser(contact.id)" [class.core-split-item-selected]="contact.id == selectedUserId" class="addon-messages-conversation-item">\n\n                <ion-avatar item-start core-user-avatar [user]="contact" [checkOnline]="contact.showonlinestatus" [linkProfile]="false"></ion-avatar>\n\n                <h2>\n\n                    {{ contact.fullname }}\n\n                    <core-icon *ngIf="contact.isblocked" name="fa-ban" item-end></core-icon>\n\n                </h2>\n\n            </a>\n\n        </ion-list>\n\n        <core-empty-box *ngIf="!contacts.length" icon="person" [message]="\'addon.messages.nocontactsgetstarted\' | translate"></core-empty-box>\n\n        <core-infinite-loading [enabled]="canLoadMore" (action)="loadMore($event)" [error]="loadMoreError" position="bottom"></core-infinite-loading>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\confirmed-contacts\addon-messages-confirmed-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */]])
    ], AddonMessagesConfirmedContactsComponent);
    return AddonMessagesConfirmedContactsComponent;
}());

//# sourceMappingURL=confirmed-contacts.js.map

/***/ }),

/***/ 2212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
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
 * Component that displays the list of contact requests.
 */
var AddonMessagesContactRequestsComponent = /** @class */ (function () {
    function AddonMessagesContactRequestsComponent(domUtils, eventsProvider, sitesProvider, messagesProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.loaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.requests = [];
        // Hide the "Would like to contact you" message when a contact request is confirmed.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.contactRequestConfirmed || data.contactRequestDeclined) {
                var index = _this.requests.findIndex(function (request) { return request.id == data.userId; });
                if (index >= 0) {
                    _this.requests.splice(index, 1);
                }
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.requests.length) {
                _this.selectUser(_this.requests[0].id, true);
            }
        }).finally(function () {
            _this.loaded = true;
        });
        // Workaround for infinite scrolling.
        this.content.resize();
    };
    /**
     * Fetch contact requests.
     *
     * @param refresh True if we are refreshing contact requests, false if we are loading more.
     * @return Promise resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.loadMoreError = false;
        var limitFrom = refresh ? 0 : this.requests.length;
        var promise;
        if (limitFrom === 0) {
            // Always try to get latest data from server.
            promise = this.messagesProvider.invalidateContactRequestsCache().catch(function () {
                // Shouldn't happen.
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            return _this.messagesProvider.getContactRequests(limitFrom);
        }).then(function (result) {
            _this.requests = refresh ? result.requests : _this.requests.concat(result.requests);
            _this.canLoadMore = result.canLoadMore;
        }).catch(function (error) {
            _this.loadMoreError = true;
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Refresh contact requests.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.refreshData = function (refresher) {
        // Refresh the number of contacts requests to update badges.
        this.messagesProvider.refreshContactRequestsCount();
        // No need to invalidate contact requests, we always try to get the latest.
        return this.fetchData(true).finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Load more contact requests.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.loadMore = function (infiniteComplete) {
        return this.fetchData().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Notify that a contact has been selected.
     *
     * @param userId User id.
     * @param onInit Whether the contact is selected on initial load.
     */
    AddonMessagesContactRequestsComponent.prototype.selectUser = function (userId, onInit) {
        if (onInit === void 0) { onInit = false; }
        this.selectedUserId = userId;
        this.onUserSelected.emit({ userId: userId, onInit: onInit });
    };
    /**
     * Component destroyed.
     */
    AddonMessagesContactRequestsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonMessagesContactRequestsComponent.prototype, "onUserSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonMessagesContactRequestsComponent.prototype, "content", void 0);
    AddonMessagesContactRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-contact-requests',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\contact-requests\addon-messages-contact-requests.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded" class="core-loading-center">\n\n        <ion-list no-margin>\n\n            <a ion-item text-wrap *ngFor="let request of requests" [title]="request.fullname" (click)="selectUser(request.id)" [class.core-split-item-selected]="request.id == selectedUserId" class="addon-messages-conversation-item">\n\n                <ion-avatar item-start core-user-avatar [user]="request" [linkProfile]="false"></ion-avatar>\n\n                <h2>{{ request.fullname }}</h2>\n\n                <p *ngIf="!request.iscontact && !request.confirmedOrDeclined">{{ \'addon.messages.wouldliketocontactyou\' | translate }}</p>\n\n            </a>\n\n        </ion-list>\n\n        <core-empty-box *ngIf="!requests.length" icon="person" [message]="\'addon.messages.nocontactrequests\' | translate"></core-empty-box>\n\n        <core-infinite-loading [enabled]="canLoadMore" (action)="loadMore($event)" [error]="loadMoreError" position="bottom"></core-infinite-loading>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\contact-requests\addon-messages-contact-requests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */]])
    ], AddonMessagesContactRequestsComponent);
    return AddonMessagesContactRequestsComponent;
}());

//# sourceMappingURL=contact-requests.js.map

/***/ }),

/***/ 2213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_events__ = __webpack_require__(11);
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
 * Component that displays the list of contacts.
 */
var AddonMessagesContactsComponent = /** @class */ (function () {
    function AddonMessagesContactsComponent(sitesProvider, translate, appProvider, messagesProvider, domUtils, navParams, eventsProvider) {
        var _this = this;
        this.appProvider = appProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = this.noSearchTypes;
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            online: [],
            offline: [],
            strangers: [],
            search: []
        };
        this.searchString = '';
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.siteId = sitesProvider.getCurrentSiteId();
        this.searchingMessages = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // Refresh the list when a contact request is confirmed.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.contactRequestConfirmed) {
                _this.refreshData();
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.hasContacts) {
                var contact = void 0;
                for (var x in _this.contacts) {
                    if (_this.contacts[x].length > 0) {
                        contact = _this.contacts[x][0];
                        break;
                    }
                }
                if (contact) {
                    // Take first and load it.
                    _this.gotoDiscussion(contact.id, true);
                }
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        var promise;
        if (this.searchString) {
            // User has searched, update the search.
            promise = this.performSearch(this.searchString);
        }
        else {
            // Update contacts.
            promise = this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function () {
                return _this.fetchData();
            });
        }
        return promise.finally(function () {
            refresher.complete();
        });
    };
    /**
     * Fetch contacts.
     *
     * @return Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        return this.messagesProvider.getAllContacts().then(function (contacts) {
            for (var x in contacts) {
                if (contacts[x].length > 0) {
                    _this.contacts[x] = _this.sortUsers(contacts[x]);
                }
                else {
                    _this.contacts[x] = [];
                }
            }
            _this.clearSearch();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Sort user list by fullname
     * @param list List to sort.
     * @return Sorted list.
     */
    AddonMessagesContactsComponent.prototype.sortUsers = function (list) {
        return list.sort(function (a, b) {
            var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    };
    /**
     * Clear search and show all contacts again.
     */
    AddonMessagesContactsComponent.prototype.clearSearch = function () {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (var x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    };
    /**
     * Search users from the UI.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.search = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Perform the search of users.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.performSearch = function (query) {
        var _this = this;
        return this.messagesProvider.searchContacts(query).then(function (result) {
            _this.hasContacts = result.length > 0;
            _this.searchString = query;
            _this.contactTypes = ['search'];
            _this.contacts.search = _this.sortUsers(result);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     * @param onlyWithSplitView Only go to Discussion if split view is on.
     */
    AddonMessagesContactsComponent.prototype.gotoDiscussion = function (discussionUserId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesContactsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    AddonMessagesContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-contacts',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\contacts\addon-messages-contacts.html"*/'<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-search-box (onSubmit)="search($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.contactname\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded" searchArea="AddonMessagesContacts"></core-search-box>\n\n\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n        <core-empty-box *ngIf="!hasContacts && searchString == \'\'" icon="person" [message]="\'addon.messages.contactlistempty\' | translate"></core-empty-box>\n\n\n\n        <core-empty-box *ngIf="!hasContacts && searchString != \'\'" icon="person" [message]="\'addon.messages.nousersfound\' | translate"></core-empty-box>\n\n\n\n        <ion-list *ngFor="let contactType of contactTypes" no-margin>\n\n            <ng-container *ngIf="contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)">\n\n                <ion-item-divider>\n\n                    <h2>{{ \'addon.messages.type_\' + contactType | translate }}</h2>\n\n                    <ion-note item-end>{{ contacts[contactType].length }}</ion-note>\n\n                </ion-item-divider>\n\n                <ng-container *ngFor="let contact of contacts[contactType]">\n\n                    <!-- Don\'t show deleted users -->\n\n                    <a ion-item text-wrap *ngIf="contact.profileimageurl || contact.profileimageurlsmall"  [title]="contact.fullname" (click)="gotoDiscussion(contact.id)" [class.core-split-item-selected]="contact.id == discussionUserId" class="addon-messages-conversation-item">\n\n                        <ion-avatar core-user-avatar [user]="contact" item-start [checkOnline]="contact.showonlinestatus"></ion-avatar>\n\n                        <h2>{{ contact.fullname }}</h2>\n\n                    </a>\n\n                </ng-container>\n\n            </ng-container>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\components\contacts\addon-messages-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_events__["b" /* CoreEventsProvider */]])
    ], AddonMessagesContactsComponent);
    return AddonMessagesContactsComponent;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 2325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_constants__ = __webpack_require__(19);
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
 * Page that displays the messages settings page.
 */
var AddonMessagesSettingsPage = /** @class */ (function () {
    function AddonMessagesSettingsPage(messagesProvider, domUtils, userProvider, sitesProvider, appProvider, configProvider, eventsProvider) {
        var _this = this;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.userProvider = userProvider;
        this.sitesProvider = sitesProvider;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.advancedContactable = false; // Whether the site supports "advanced" contactable privacy.
        this.allowSiteMessaging = false;
        this.onlyContactsValue = __WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */].MESSAGE_PRIVACY_ONLYCONTACTS;
        this.courseMemberValue = __WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */].MESSAGE_PRIVACY_COURSEMEMBER;
        this.siteValue = __WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */].MESSAGE_PRIVACY_SITE;
        var currentSite = sitesProvider.getCurrentSite();
        this.advancedContactable = currentSite && currentSite.isVersionGreaterEqualThan('3.6');
        this.allowSiteMessaging = currentSite && currentSite.canUseAdvancedFeature('messagingallusers');
        this.groupMessagingEnabled = this.messagesProvider.isGroupMessagingEnabled();
        this.configProvider.get(__WEBPACK_IMPORTED_MODULE_8__core_constants__["a" /* CoreConstants */].SETTINGS_SEND_ON_ENTER, !appProvider.isMobile()).then(function (sendOnEnter) {
            _this.sendOnEnter = !!sendOnEnter;
        });
        this.isDesktop = !appProvider.isMobile();
        this.isMac = appProvider.isMac();
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    AddonMessagesSettingsPage.prototype.ionViewDidLoad = function () {
        this.fetchPreferences();
    };
    /**
     * Fetches preference data.
     *
     * @return Promise resolved when done.
     */
    AddonMessagesSettingsPage.prototype.fetchPreferences = function () {
        var _this = this;
        return this.messagesProvider.getMessagePreferences().then(function (preferences) {
            if (_this.groupMessagingEnabled) {
                // Simplify the preferences.
                for (var _i = 0, _a = preferences.components; _i < _a.length; _i++) {
                    var component = _a[_i];
                    // Only display get the notification preferences.
                    component.notifications = component.notifications.filter(function (notification) {
                        return notification.preferencekey == __WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */].NOTIFICATION_PREFERENCES_KEY;
                    });
                    component.notifications.forEach(function (notification) {
                        notification.processors.forEach(function (processor) {
                            processor.checked = processor.loggedin.checked || processor.loggedoff.checked;
                        });
                    });
                }
            }
            _this.preferences = preferences;
            _this.contactablePrivacy = preferences.blocknoncontacts;
            _this.previousContactableValue = _this.contactablePrivacy;
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.preferencesLoaded = true;
        });
    };
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessagesSettingsPage.prototype.updatePreferences = function () {
        var _this = this;
        this.messagesProvider.invalidateMessagePreferences().finally(function () {
            _this.fetchPreferences();
        });
    };
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessagesSettingsPage.prototype.updatePreferencesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updatePreferences();
        }, 5000);
    };
    /**
     * Save the contactable privacy setting..
     *
     * @param value The value to set.
     */
    AddonMessagesSettingsPage.prototype.saveContactablePrivacy = function (value) {
        var _this = this;
        if (this.contactablePrivacy == this.previousContactableValue) {
            // Value hasn't changed from previous, it probably means that we just fetched the value from the server.
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        if (!this.advancedContactable) {
            // Convert from boolean to number.
            value = value ? 1 : 0;
        }
        this.userProvider.updateUserPreference('message_blocknoncontacts', value).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
            _this.previousContactableValue = _this.contactablePrivacy;
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            _this.contactablePrivacy = _this.previousContactableValue;
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @param state State name, ['loggedin', 'loggedoff'].
     * @param processor Notification processor.
     */
    AddonMessagesSettingsPage.prototype.changePreference = function (notification, state, processor) {
        var _this = this;
        if (this.groupMessagingEnabled) {
            // Update both states at the same time.
            var valueArray_1 = [], promises = [];
            var value = 'none';
            notification.processors.forEach(function (processor) {
                if (processor.checked) {
                    valueArray_1.push(processor.name);
                }
            });
            if (value.length > 0) {
                value = valueArray_1.join(',');
            }
            notification.updating = true;
            promises.push(this.userProvider.updateUserPreference(notification.preferencekey + '_loggedin', value));
            promises.push(this.userProvider.updateUserPreference(notification.preferencekey + '_loggedoff', value));
            Promise.all(promises).then(function () {
                // Update the preferences since they were modified.
                _this.updatePreferencesAfterDelay();
            }).catch(function (error) {
                // Show error and revert change.
                _this.domUtils.showErrorModal(error);
                processor.checked = !processor.checked;
            }).finally(function () {
                notification.updating = false;
            });
        }
        else {
            // Update only the specified state.
            var processorState_1 = processor[state], preferenceName = notification.preferencekey + '_' + processorState_1.name, valueArray_2 = [];
            var value = 'none';
            notification.processors.forEach(function (processor) {
                if (processor[state].checked) {
                    valueArray_2.push(processor.name);
                }
            });
            if (value.length > 0) {
                value = valueArray_2.join(',');
            }
            if (!notification.updating) {
                notification.updating = {};
            }
            notification.updating[state] = true;
            this.userProvider.updateUserPreference(preferenceName, value).then(function () {
                // Update the preferences since they were modified.
                _this.updatePreferencesAfterDelay();
            }).catch(function (message) {
                // Show error and revert change.
                _this.domUtils.showErrorModal(message);
                processorState_1.checked = !processorState_1.checked;
            }).finally(function () {
                notification.updating[state] = false;
            });
        }
    };
    /**
     * Refresh the list of preferences.
     *
     * @param refresher Refresher.
     */
    AddonMessagesSettingsPage.prototype.refreshPreferences = function (refresher) {
        var _this = this;
        this.messagesProvider.invalidateMessagePreferences().finally(function () {
            _this.fetchPreferences().finally(function () {
                refresher.complete();
            });
        });
    };
    AddonMessagesSettingsPage.prototype.sendOnEnterChanged = function () {
        // Save the value.
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_8__core_constants__["a" /* CoreConstants */].SETTINGS_SEND_ON_ENTER, this.sendOnEnter ? 1 : 0);
        // Notify the app.
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */].SEND_ON_ENTER_CHANGED, { sendOnEnter: !!this.sendOnEnter }, this.sitesProvider.getCurrentSiteId());
    };
    /**
     * Page destroyed.
     */
    AddonMessagesSettingsPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    };
    AddonMessagesSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-messages-settings',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.messages.messages\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="preferencesLoaded" (ionRefresh)="refreshPreferences($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="preferencesLoaded">\n\n        <!-- Contactable privacy. -->\n\n        <ion-card>\n\n            <ion-item *ngIf="!advancedContactable">\n\n              <ion-label>{{ \'addon.messages.blocknoncontacts\' | translate }}</ion-label>\n\n              <ion-toggle [(ngModel)]="contactablePrivacy" (ionChange)="saveContactablePrivacy(contactablePrivacy)"></ion-toggle>\n\n            </ion-item>\n\n\n\n            <ion-list *ngIf="advancedContactable" text-wrap radio-group [(ngModel)]="contactablePrivacy" (ionChange)="saveContactablePrivacy(contactablePrivacy)">\n\n                <ion-item-divider>{{ \'addon.messages.contactableprivacy\' | translate }}</ion-item-divider>\n\n                <ion-item>\n\n                    <ion-label>{{ \'addon.messages.contactableprivacy_onlycontacts\' | translate }}</ion-label>\n\n                    <ion-radio [value]="onlyContactsValue"></ion-radio>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>{{ \'addon.messages.contactableprivacy_coursemember\' | translate }}</ion-label>\n\n                    <ion-radio [value]="courseMemberValue"></ion-radio>\n\n                </ion-item>\n\n                <ion-item *ngIf="allowSiteMessaging">\n\n                    <ion-label>{{ \'addon.messages.contactableprivacy_site\' | translate }}</ion-label>\n\n                    <ion-radio [value]="siteValue"></ion-radio>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n\n\n        <!-- Notifications. -->\n\n        <ng-container *ngIf="preferences">\n\n            <div *ngFor="let component of preferences.components">\n\n                <ion-card list *ngFor="let notification of component.notifications">\n\n                    <ion-item-divider text-wrap>\n\n                        <ion-row no-padding>\n\n                            <ng-container *ngIf="!groupMessagingEnabled">\n\n                                <ion-col no-padding>{{ notification.displayname }}</ion-col>\n\n                                <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedin\' | translate }}</ion-col>\n\n                                <ion-col *ngIf="!groupMessagingEnabled" col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedoff\' | translate }}</ion-col>\n\n                            </ng-container>\n\n                            <ng-container *ngIf="groupMessagingEnabled">\n\n                                <ion-col no-padding>{{ \'addon.notifications.notificationpreferences\' | translate }}</ion-col>\n\n                            </ng-container>\n\n                        </ion-row>\n\n                    </ion-item-divider>\n\n                    <ng-container *ngFor="let processor of notification.processors">\n\n                        <!-- If group messaging is enabled, display a simplified view. -->\n\n                        <ng-container *ngIf="groupMessagingEnabled">\n\n                            <ion-item text-wrap>\n\n                                <ion-label>{{ processor.displayname }}</ion-label>\n\n                                <ion-spinner item-end *ngIf="!preferences.disableall && notification.updating"></ion-spinner>\n\n                                <ion-toggle item-end *ngIf="!preferences.disableall && !processor.locked" [(ngModel)]="processor.checked" (ionChange)="changePreference(notification, \'\', processor)" [disabled]="notification.updating">\n\n                                </ion-toggle>\n\n                                <ion-note item-end *ngIf="!preferences.disableall && processor.locked">{{ processor.lockedmessage }}</ion-note>\n\n                                <ion-note item-end *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n\n                            </ion-item>\n\n                        </ng-container>\n\n\n\n                        <ng-container *ngIf="!groupMessagingEnabled">\n\n                            <!-- Tablet view -->\n\n                            <ion-row text-wrap class="hidden-phone" align-items-center>\n\n                                <ion-col margin-horizontal>{{ processor.displayname }}</ion-col>\n\n                                <ion-col col-2 text-center *ngFor="let state of [\'loggedin\', \'loggedoff\']">\n\n                                    <!-- If notifications not disabled, show toggle. -->\n\n                                    <ion-spinner [hidden]="preferences.disableall || !(notification.updating && notification.updating[state])"></ion-spinner>\n\n                                    <ion-toggle *ngIf="!preferences.disableall && !processor.locked" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="notification.updating && notification.updating[state]">\n\n                                    </ion-toggle>\n\n                                    <div padding class="text-gray" *ngIf="!preferences.disableall && processor.locked">{{\'core.settings.locked\' | translate }}</div>\n\n                                    <!-- If notifications are disabled, show "Disabled" instead of toggle. -->\n\n                                    <span *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</span>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <!-- Phone view -->\n\n                            <ion-list-header text-wrap class="hidden-tablet">{{ processor.displayname }}</ion-list-header>\n\n                            <!-- If notifications not disabled, show toggles. If notifications are disabled, show "Disabled" instead of toggle. -->\n\n                            <ion-item *ngFor="let state of [\'loggedin\', \'loggedoff\']" text-wrap class="hidden-tablet">\n\n                                <ion-label>{{ \'core.settings.\' + state | translate }}</ion-label>\n\n                                <ion-spinner item-end *ngIf="!preferences.disableall && (notification.updating && notification.updating[state])"></ion-spinner>\n\n                                <ion-toggle item-end *ngIf="!preferences.disableall && !processor.locked" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="notification.updating && notification.updating[state]">\n\n                                </ion-toggle>\n\n                                <ion-note item-end *ngIf="!preferences.disableall && processor.locked">{{\'core.settings.locked\' | translate }}</ion-note>\n\n                                <ion-note item-end *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n\n                            </ion-item>\n\n                        </ng-container>\n\n                    </ng-container>\n\n                </ion-card>\n\n            </div>\n\n        </ng-container>\n\n\n\n        <!-- General settings. -->\n\n        <ion-card>\n\n            <ion-list text-wrap>\n\n                <ion-item-divider>{{ \'core.settings.general\' | translate }}</ion-item-divider>\n\n                <ion-item text-wrap>\n\n                    <ion-label>\n\n                        <h2>{{ \'addon.messages.useentertosend\' | translate }}</h2>\n\n                        <p *ngIf="isDesktop && !isMac">{{ \'addon.messages.useentertosenddescdesktop\' | translate }}</p>\n\n                        <p *ngIf="isDesktop && isMac">{{ \'addon.messages.useentertosenddescmac\' | translate }}</p>\n\n                    </ion-label>\n\n                    <ion-toggle [(ngModel)]="sendOnEnter" (ngModelChange)="sendOnEnterChanged()"></ion-toggle>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__core_user_providers_user__["b" /* CoreUserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config__["b" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */]])
    ], AddonMessagesSettingsPage);
    return AddonMessagesSettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=0.js.map