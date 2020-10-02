webpackJsonp([143],{

/***/ 2167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPageModule", function() { return AddonCalendarIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(2323);
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








var AddonCalendarIndexPageModule = /** @class */ (function () {
    function AddonCalendarIndexPageModule() {
    }
    AddonCalendarIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__index__["a" /* AddonCalendarIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonCalendarComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__index__["a" /* AddonCalendarIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarIndexPageModule);
    return AddonCalendarIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calendar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_calendar_offline__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_filter_filter__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_calendar_sync__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_courses_providers_helper__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(132);
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
// WITHOUT WARRANTIES OR CONDITIONS OFx ANY KIND, either express or implied.
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
 * Page that displays the calendar events.
 */
var AddonCalendarIndexPage = /** @class */ (function () {
    function AddonCalendarIndexPage(localNotificationsProvider, navParams, network, zone, sitesProvider, navCtrl, domUtils, calendarProvider, calendarOffline, calendarHelper, calendarSync, eventsProvider, coursesHelper, appProvider, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.calendarProvider = calendarProvider;
        this.calendarOffline = calendarOffline;
        this.calendarHelper = calendarHelper;
        this.calendarSync = calendarSync;
        this.eventsProvider = eventsProvider;
        this.coursesHelper = coursesHelper;
        this.appProvider = appProvider;
        this.popoverCtrl = popoverCtrl;
        this.canCreate = false;
        this.notificationsEnabled = false;
        this.loaded = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.showCalendar = true;
        this.loadUpcoming = false;
        this.filter = {
            filtered: false,
            courseId: null,
            categoryId: null,
            course: true,
            group: true,
            site: true,
            user: true,
            category: true
        };
        this.eventId = navParams.get('eventId') || false;
        this.year = navParams.get('year');
        this.month = navParams.get('month');
        this.notificationsEnabled = localNotificationsProvider.isAvailable();
        this.currentSiteId = sitesProvider.getCurrentSiteId();
        this.loadUpcoming = !!navParams.get('upcoming');
        this.showCalendar = !this.loadUpcoming;
        __WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].ALL_TYPES.forEach(function (name) {
            _this.filter[name] = true;
        });
        this.filter.courseId = navParams.get('courseId');
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_EVENT, function (data) {
            if (data && data.event) {
                _this.loaded = false;
                _this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, function () {
            _this.loaded = false;
            _this.refreshData(true, false, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, function (data) {
            if (data && data.event) {
                _this.loaded = false;
                _this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_13__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].AUTO_SYNCED, function (data) {
            _this.loaded = false;
            _this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_13__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, function (data) {
            if (data && data.source != 'index') {
                _this.loaded = false;
                _this.refreshData(false, false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, function (data) {
            _this.loaded = false;
            _this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Update the "hasOffline" property if an event deleted in offline is restored.
        this.undeleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, function (data) {
            _this.calendarOffline.hasOfflineData().then(function (hasOffline) {
                _this.hasOffline = hasOffline;
            });
        }, this.currentSiteId);
        this.filterChangedObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].FILTER_CHANGED_EVENT, function (data) {
            _this.filter = data;
            // Course viewed has changed, check if the user can create events for this course calendar.
            _this.calendarHelper.canEditEvents(_this.filter['courseId']).then(function (canEdit) {
                _this.canCreate = canEdit;
            });
        });
        // Refresh online status when changes.
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
    AddonCalendarIndexPage.prototype.ngOnInit = function () {
        if (this.eventId) {
            // There is an event to load, open the event in a new state.
            this.gotoEvent(this.eventId);
        }
        this.fetchData(true, false);
    };
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.fetchData = function (sync, showErrors) {
        var _this = this;
        this.syncIcon = 'spinner';
        this.isOnline = this.appProvider.isOnline();
        var promise;
        if (sync) {
            // Try to synchronize offline events.
            promise = this.calendarSync.syncEvents().then(function (result) {
                if (result.warnings && result.warnings.length) {
                    _this.domUtils.showErrorModal(result.warnings[0]);
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    result.source = 'index';
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_13__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, _this.currentSiteId);
                }
            }).catch(function (error) {
                if (showErrors) {
                    _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
                }
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            var promises = [];
            _this.hasOffline = false;
            // Load courses for the popover.
            promises.push(_this.coursesHelper.getCoursesForPopover(_this.filter.courseId).then(function (data) {
                _this.courses = data.courses;
            }));
            // Check if user can create events.
            promises.push(_this.calendarHelper.canEditEvents(_this.filter.courseId).then(function (canEdit) {
                _this.canCreate = canEdit;
            }));
            // Check if there is offline data.
            promises.push(_this.calendarOffline.hasOfflineData().then(function (hasOffline) {
                _this.hasOffline = hasOffline;
            }));
            return Promise.all(promises);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
        }).finally(function () {
            _this.loaded = true;
            _this.syncIcon = 'sync';
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.doRefresh = function (refresher, done, showErrors) {
        if (this.loaded) {
            return this.refreshData(true, showErrors).finally(function () {
                refresher && refresher.complete();
                done && done();
            });
        }
        return Promise.resolve();
    };
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @return Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.refreshData = function (sync, showErrors, afterChange) {
        var _this = this;
        this.syncIcon = 'spinner';
        var promises = [];
        promises.push(this.calendarProvider.invalidateAllowedEventTypes());
        // Refresh the sub-component.
        if (this.showCalendar && this.calendarComponent) {
            promises.push(this.calendarComponent.refreshData(afterChange));
        }
        else if (!this.showCalendar && this.upcomingEventsComponent) {
            promises.push(this.upcomingEventsComponent.refreshData(afterChange));
        }
        return Promise.all(promises).finally(function () {
            return _this.fetchData(sync, showErrors);
        });
    };
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     */
    AddonCalendarIndexPage.prototype.gotoEvent = function (eventId) {
        if (eventId < 0) {
            // It's an offline event, go to the edit page.
            this.openEdit(eventId);
        }
        else {
            this.navCtrl.push('AddonCalendarEventPage', {
                id: eventId
            });
        }
    };
    /**
     * View a certain day.
     *
     * @param data Data with the year, month and day.
     */
    AddonCalendarIndexPage.prototype.gotoDay = function (data) {
        var _this = this;
        var params = {
            day: data.day,
            month: data.month,
            year: data.year
        };
        Object.keys(this.filter).forEach(function (key) {
            params[key] = _this.filter[key];
        });
        this.navCtrl.push('AddonCalendarDayPage', params);
    };
    /**
     * Show the context menu.
     *
     * @param event Event.
     */
    AddonCalendarIndexPage.prototype.openFilter = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_12__components_filter_filter__["a" /* AddonCalendarFilterPopoverComponent */], {
            courses: this.courses,
            filter: this.filter
        });
        popover.present({
            ev: event
        });
    };
    /**
     * Open page to create/edit an event.
     *
     * @param eventId Event ID to edit.
     */
    AddonCalendarIndexPage.prototype.openEdit = function (eventId) {
        var params = {};
        if (eventId) {
            params.eventId = eventId;
        }
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        this.navCtrl.push('AddonCalendarEditEventPage', params);
    };
    /**
     * Open calendar events settings.
     */
    AddonCalendarIndexPage.prototype.openSettings = function () {
        this.navCtrl.push('AddonCalendarSettingsPage');
    };
    /**
     * Toogle display: monthly view or upcoming events.
     */
    AddonCalendarIndexPage.prototype.toggleDisplay = function () {
        this.showCalendar = !this.showCalendar;
        if (!this.showCalendar) {
            this.loadUpcoming = true;
        }
    };
    /**
     * Page destroyed.
     */
    AddonCalendarIndexPage.prototype.ngOnDestroy = function () {
        this.newEventObserver && this.newEventObserver.off();
        this.discardedObserver && this.discardedObserver.off();
        this.editEventObserver && this.editEventObserver.off();
        this.deleteEventObserver && this.deleteEventObserver.off();
        this.undeleteEventObserver && this.undeleteEventObserver.off();
        this.syncObserver && this.syncObserver.off();
        this.manualSyncObserver && this.manualSyncObserver.off();
        this.filterChangedObserver && this.filterChangedObserver.off();
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */])
    ], AddonCalendarIndexPage.prototype, "calendarComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */])
    ], AddonCalendarIndexPage.prototype, "upcomingEventsComponent", void 0);
    AddonCalendarIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-calendar-index',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\index\index.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ (showCalendar ? \'addon.calendar.calendarevents\' : \'addon.calendar.upcomingevents\') | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openFilter($event)" [attr.aria-label]="\'core.filter\' | translate">\n\n                <ion-icon name="funnel" *ngIf="filter.filtered"></ion-icon>\n\n                <ion-icon name="ios-funnel-outline" *ngIf="!filter.filtered"></ion-icon>\n\n            </button>\n\n            <core-context-menu>\n\n                <core-context-menu-item *ngIf="showCalendar" [priority]="800" [content]="\'addon.calendar.upcomingevents\' | translate" [iconAction]="\'list\'" (action)="toggleDisplay()"></core-context-menu-item>\n\n                <core-context-menu-item *ngIf="!showCalendar" [priority]="800" [content]="\'addon.calendar.monthlyview\' | translate" [iconAction]="\'fa-calendar-o\'" (action)="toggleDisplay()"></core-context-menu-item>\n\n                <core-context-menu-item [hidden]="!notificationsEnabled" [priority]="600" [content]="\'core.settings.settings\' | translate" (action)="openSettings()" [iconAction]="\'cog\'"></core-context-menu-item>\n\n                <core-context-menu-item [hidden]="!loaded || !hasOffline || !isOnline"  [priority]="400" [content]="\'core.settings.synchronizenow\' | translate" (action)="doRefresh(null, $event, true)" [iconAction]="syncIcon" [closeOnClick]="false"></core-context-menu-item>\n\n            </core-context-menu>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <!-- There is data to be synchronized -->\n\n    <ion-card class="core-warning-card" icon-start *ngIf="hasOffline">\n\n        <ion-icon name="warning"></ion-icon> {{ \'core.hasdatatosync\' | translate:{$a: \'addon.calendar.calendar\' | translate} }}\n\n    </ion-card>\n\n\n\n    <addon-calendar-calendar [hidden]="!showCalendar" [initialYear]="year" [initialMonth]="month" [filter]="filter" [displayNavButtons]="showCalendar" (onEventClicked)="gotoEvent($event)" (onDayClicked)="gotoDay($event)"></addon-calendar-calendar>\n\n\n\n    <addon-calendar-upcoming-events *ngIf="loadUpcoming" [hidden]="showCalendar" [filter]="filter" (onEventClicked)="gotoEvent($event)"></addon-calendar-upcoming-events>\n\n\n\n    <!-- Create a calendar event. -->\n\n    <ion-fab core-fab bottom end *ngIf="canCreate">\n\n        <button ion-fab (click)="openEdit()" [attr.aria-label]="\'addon.calendar.newevent\' | translate">\n\n            <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_calendar_offline__["a" /* AddonCalendarOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* AddonCalendarHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_14__core_courses_providers_helper__["a" /* CoreCoursesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */]])
    ], AddonCalendarIndexPage);
    return AddonCalendarIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=143.js.map