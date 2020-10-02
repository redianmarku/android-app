webpackJsonp([66],{

/***/ 2183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPageModule", function() { return AddonNotificationsSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(2341);
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






var AddonNotificationsSettingsPageModule = /** @class */ (function () {
    function AddonNotificationsSettingsPageModule() {
    }
    AddonNotificationsSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonNotificationsSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonNotificationsSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonNotificationsSettingsPageModule);
    return AddonNotificationsSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 2341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonNotificationsSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_settings_providers_helper__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addon_messageoutput_providers_delegate__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__ = __webpack_require__(84);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














/**
 * Page that displays notifications settings.
 */
var AddonNotificationsSettingsPage = /** @class */ (function () {
    function AddonNotificationsSettingsPage(notificationsProvider, domUtils, settingsHelper, userProvider, navCtrl, messageOutputDelegate, appProvider, configProvider, eventsProvider, localNotificationsProvider, sitesProvider, svComponent) {
        var _this = this;
        this.notificationsProvider = notificationsProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.messageOutputDelegate = messageOutputDelegate;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.localNotificationsProvider = localNotificationsProvider;
        this.sitesProvider = sitesProvider;
        this.svComponent = svComponent;
        this.processorHandlers = [];
        this.notifPrefsEnabled = notificationsProvider.isNotificationPreferencesEnabled();
        this.canChangeSound = localNotificationsProvider.canDisableSound();
        if (this.canChangeSound) {
            configProvider.get(__WEBPACK_IMPORTED_MODULE_10__core_constants__["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, true).then(function (enabled) {
                _this.notificationSound = !!enabled;
            });
        }
    }
    /**
     * View loaded.
     */
    AddonNotificationsSettingsPage.prototype.ionViewDidLoad = function () {
        if (this.notifPrefsEnabled) {
            this.fetchPreferences();
        }
        else {
            this.preferencesLoaded = true;
        }
    };
    /**
     * Fetches preference data.
     *
     * @return Resolved when done.
     */
    AddonNotificationsSettingsPage.prototype.fetchPreferences = function () {
        var _this = this;
        return this.notificationsProvider.getNotificationPreferences().then(function (preferences) {
            if (!_this.currentProcessor) {
                // Initialize current processor. Load "Mobile" (airnotifier) if available.
                _this.currentProcessor = _this.settingsHelper.getProcessor(preferences.processors, 'airnotifier');
            }
            if (!_this.currentProcessor) {
                // Shouldn't happen.
                return Promise.reject('No processor found');
            }
            preferences.enableall = !preferences.disableall;
            _this.preferences = preferences;
            _this.loadProcessor(_this.currentProcessor);
            // Get display data of message output handlers (thery are displayed in the context menu),
            _this.processorHandlers = [];
            if (preferences.processors) {
                preferences.processors.forEach(function (processor) {
                    processor.supported = _this.messageOutputDelegate.hasHandler(processor.name, true);
                    if (processor.hassettings && processor.supported) {
                        _this.processorHandlers.push(_this.messageOutputDelegate.getDisplayData(processor));
                    }
                });
            }
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.preferencesLoaded = true;
        });
    };
    /**
     * Load a processor.
     *
     * @param processor Processor object.
     */
    AddonNotificationsSettingsPage.prototype.loadProcessor = function (processor) {
        if (!processor) {
            return;
        }
        this.currentProcessor = processor;
        this.components = this.settingsHelper.getProcessorComponents(processor.name, this.preferences.components);
    };
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonNotificationsSettingsPage.prototype.updatePreferencesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updatePreferences();
        }, 5000);
    };
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonNotificationsSettingsPage.prototype.updatePreferences = function () {
        var _this = this;
        this.notificationsProvider.invalidateNotificationPreferences().finally(function () {
            _this.notificationsProvider.getNotificationPreferences();
        });
    };
    /**
     * The selected processor was changed.
     *
     * @param name Name of the selected processor.
     */
    AddonNotificationsSettingsPage.prototype.changeProcessor = function (name) {
        var _this = this;
        this.preferences.processors.forEach(function (processor) {
            if (processor.name == name) {
                _this.loadProcessor(processor);
            }
        });
    };
    /**
     * Refresh the list of preferences.
     *
     * @param refresher Refresher.
     */
    AddonNotificationsSettingsPage.prototype.refreshPreferences = function (refresher) {
        var _this = this;
        this.notificationsProvider.invalidateNotificationPreferences().finally(function () {
            _this.fetchPreferences().finally(function () {
                refresher && refresher.complete();
            });
        });
    };
    /**
     * Open extra preferences.
     *
     * @param handlerData
     */
    AddonNotificationsSettingsPage.prototype.openExtraPreferences = function (handlerData) {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push(handlerData.page, handlerData.pageParams);
    };
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @param state State name, ['loggedin', 'loggedoff'].
     */
    AddonNotificationsSettingsPage.prototype.changePreference = function (notification, state) {
        var _this = this;
        var processorState = notification.currentProcessor[state];
        var preferenceName = notification.preferencekey + '_' + processorState.name;
        var value;
        notification.processors.forEach(function (processor) {
            if (processor[state].checked) {
                if (!value) {
                    value = processor.name;
                }
                else {
                    value += ',' + processor.name;
                }
            }
        });
        if (!value) {
            value = 'none';
        }
        processorState.updating = true;
        this.userProvider.updateUserPreference(preferenceName, value).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            notification.currentProcessor[state].checked = !notification.currentProcessor[state].checked;
        }).finally(function () {
            processorState.updating = false;
        });
    };
    /**
     * Enable all notifications changed.
     */
    AddonNotificationsSettingsPage.prototype.enableAll = function (enable) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.userProvider.updateUserPreferences([], !enable).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            _this.preferences.enableall = !_this.preferences.enableall;
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Change the notification sound setting.
     *
     * @param enabled True to enable the notification sound, false to disable it.
     */
    AddonNotificationsSettingsPage.prototype.changeNotificationSound = function (enabled) {
        var _this = this;
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_10__core_constants__["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, enabled ? 1 : 0).finally(function () {
            var siteId = _this.sitesProvider.getCurrentSiteId();
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_events__["b" /* CoreEventsProvider */].NOTIFICATION_SOUND_CHANGED, { enabled: enabled }, siteId);
            _this.localNotificationsProvider.rescheduleAll();
        });
    };
    /**
     * Page destroyed.
     */
    AddonNotificationsSettingsPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    };
    AddonNotificationsSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-notifications-settings',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\notifications\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.notifications.notifications\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<core-navbar-buttons>\n\n    <core-context-menu *ngIf="processorHandlers.length > 0">\n\n        <core-context-menu-item *ngFor="let handler of processorHandlers" [priority]="handler.priority" [content]="handler.label | translate" (action)="openExtraPreferences(handler)" [iconAction]="handler.icon"></core-context-menu-item>\n\n    </core-context-menu>\n\n</core-navbar-buttons>\n\n<ion-content>\n\n    <ion-refresher [enabled]="preferencesLoaded && notifPrefsEnabled" (ionRefresh)="refreshPreferences($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="preferencesLoaded">\n\n        <!-- If notification preferences aren\'t enabled, show only the notification sound setting. -->\n\n        <ion-item *ngIf="canChangeSound && !notifPrefsEnabled">\n\n            <ion-label>{{ \'addon.notifications.playsound\' | translate }}</ion-label>\n\n            <ion-toggle [(ngModel)]="notificationSound" (ionChange)="changeNotificationSound(notificationSound)"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ng-container *ngIf="notifPrefsEnabled">\n\n            <ion-card>\n\n                <ion-item text-wrap *ngIf="preferences">\n\n                    <ion-label>{{ \'addon.notifications.notifications\' | translate }}</ion-label>\n\n                    <ion-toggle [(ngModel)]="preferences.enableall" (ionChange)="enableAll(preferences.enableall)"></ion-toggle>\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="canChangeSound">\n\n                    <ion-label>{{ \'addon.notifications.playsound\' | translate }}</ion-label>\n\n                    <ion-toggle [(ngModel)]="notificationSound" (ionChange)="changeNotificationSound(notificationSound)"></ion-toggle>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <!-- Show processor selector. -->\n\n            <div padding class="safe-padding-horizontal">\n\n                <ion-select *ngIf="preferences && preferences.processors && preferences.processors.length > 0" [ngModel]="currentProcessor.name" (ngModelChange)="changeProcessor($event)" interface="action-sheet" class="core-button-select">\n\n                    <ion-option *ngFor="let processor of preferences.processors" [value]="processor.name">{{ processor.displayname }}</ion-option>\n\n                </ion-select>\n\n            </div>\n\n\n\n            <ion-card list *ngFor="let component of components">\n\n                <ion-item-divider text-wrap>\n\n                    <ion-row no-padding>\n\n                        <ion-col no-padding>{{ component.displayname }}</ion-col>\n\n                        <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedin\' | translate }}</ion-col>\n\n                        <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedoff\' | translate }}</ion-col>\n\n                    </ion-row>\n\n                </ion-item-divider>\n\n                <ng-container *ngFor="let notification of component.notifications">\n\n                    <!-- Tablet view -->\n\n                    <ion-row text-wrap class="hidden-phone" align-items-center>\n\n                        <ion-col margin-horizontal>{{ notification.displayname }}</ion-col>\n\n                        <ion-col col-2 text-center *ngFor="let state of [\'loggedin\', \'loggedoff\']">\n\n                            <!-- If notifications enabled, show toggle. -->\n\n                            <ion-spinner [hidden]="!preferences.enableall || !(notification.currentProcessor[state] && notification.currentProcessor[state].updating)"></ion-spinner>\n\n                            <ion-toggle *ngIf="preferences.enableall && !notification.currentProcessor.locked" [(ngModel)]="notification.currentProcessor[state].checked" (ionChange)="changePreference(notification, state)" [disabled]="notification.currentProcessor[state].updating">\n\n                            </ion-toggle>\n\n                            <div padding class="text-gray" *ngIf="preferences.enableall && notification.currentProcessor.locked">{{\'core.settings.locked\' | translate }}</div>\n\n                            <!-- If notifications are disabled, show "Disabled" instead of toggle. -->\n\n                            <span *ngIf="!preferences.enableall">{{ \'core.settings.disabled\' | translate }}</span>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- Phone view -->\n\n                    <ion-list-header text-wrap no-margin class="hidden-tablet">{{ notification.displayname }}</ion-list-header>\n\n                    <!-- If notifications enabled, show toggles. If notifications are disabled, show "Disabled" instead of toggle. -->\n\n                    <ion-item *ngFor="let state of [\'loggedin\', \'loggedoff\']" text-wrap class="hidden-tablet">\n\n                        <ion-label>{{ \'core.settings.\' + state | translate }}</ion-label>\n\n                        <ion-spinner item-end *ngIf="preferences.enableall && (notification.currentProcessor[state] && notification.currentProcessor[state].updating)"></ion-spinner>\n\n                        <ion-toggle item-end *ngIf="preferences.enableall && !notification.currentProcessor.locked" [(ngModel)]="notification.currentProcessor[state].checked" (ionChange)="changePreference(notification, state)" [disabled]="notification.currentProcessor[state].updating">\n\n                        </ion-toggle>\n\n                        <ion-note item-end *ngIf="preferences.enableall && notification.currentProcessor.locked">{{\'core.settings.locked\' | translate }}</ion-note>\n\n                        <ion-note item-end *ngIf="!preferences.enableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n\n                    </ion-item>\n\n                </ng-container>\n\n            </ion-card>\n\n        </ng-container>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\notifications\pages\settings\settings.html"*/,
        }),
        __param(11, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_notifications__["a" /* AddonNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__core_settings_providers_helper__["a" /* CoreSettingsHelper */], __WEBPACK_IMPORTED_MODULE_3__core_user_providers_user__["b" /* CoreUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__addon_messageoutput_providers_delegate__["a" /* AddonMessageOutputDelegate */],
            __WEBPACK_IMPORTED_MODULE_9__providers_app__["b" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_config__["b" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_13__components_split_view_split_view__["a" /* CoreSplitViewComponent */]])
    ], AddonNotificationsSettingsPage);
    return AddonNotificationsSettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=66.js.map