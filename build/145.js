webpackJsonp([145],{

/***/ 2192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditEventPageModule", function() { return AddonCalendarEditEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_editor_components_components_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_event__ = __webpack_require__(2350);
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







var AddonCalendarEditEventPageModule = /** @class */ (function () {
    function AddonCalendarEditEventPageModule() {
    }
    AddonCalendarEditEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__edit_event__["a" /* AddonCalendarEditEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_editor_components_components_module__["a" /* CoreEditorComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__edit_event__["a" /* AddonCalendarEditEventPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarEditEventPageModule);
    return AddonCalendarEditEventPageModule;
}());

//# sourceMappingURL=edit-event.module.js.map

/***/ }),

/***/ 2350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarEditEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_groups__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sync__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_courses_providers_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_editor_components_rich_text_editor_rich_text_editor_ts__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_calendar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_calendar_offline__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_helper__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_calendar_sync__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_filter_providers_helper__ = __webpack_require__(44);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















/**
 * Page that displays a form to create/edit an event.
 */
var AddonCalendarEditEventPage = /** @class */ (function () {
    function AddonCalendarEditEventPage(navParams, navCtrl, translate, domUtils, timeUtils, eventsProvider, groupsProvider, sitesProvider, coursesProvider, utils, calendarProvider, calendarOffline, calendarHelper, calendarSync, fb, syncProvider, filterHelper, svComponent) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.eventsProvider = eventsProvider;
        this.groupsProvider = groupsProvider;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.calendarProvider = calendarProvider;
        this.calendarOffline = calendarOffline;
        this.calendarHelper = calendarHelper;
        this.calendarSync = calendarSync;
        this.fb = fb;
        this.syncProvider = syncProvider;
        this.filterHelper = filterHelper;
        this.svComponent = svComponent;
        this.component = __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].COMPONENT;
        this.loaded = false;
        this.hasOffline = false;
        this.eventTypes = [];
        this.categories = [];
        this.courses = [];
        this.groups = [];
        this.loadingGroups = false;
        this.courseGroupSet = false;
        this.advanced = false;
        this.isDestroyed = false;
        this.error = false;
        this.gotEventData = false;
        this.eventId = navParams.get('eventId');
        this.courseId = navParams.get('courseId');
        this.title = this.eventId ? 'addon.calendar.editevent' : 'addon.calendar.newevent';
        var timestamp = navParams.get('timestamp');
        this.currentSite = sitesProvider.getCurrentSite();
        this.errors = {
            required: this.translate.instant('core.required')
        };
        // Calculate format to use. ion-datetime doesn't support escaping characters ([]), so we remove them.
        this.dateFormat = this.timeUtils.convertPHPToMoment(this.translate.instant('core.strftimedatetimeshort'))
            .replace(/[\[\]]/g, '');
        // Initialize form variables.
        this.eventForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
        this.eventTypeControl = this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.groupControl = this.fb.control('');
        this.descriptionControl = this.fb.control('');
        var currentDate = this.timeUtils.toDatetimeFormat(timestamp);
        this.eventForm.addControl('name', this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
        this.eventForm.addControl('timestart', this.fb.control(currentDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
        this.eventForm.addControl('eventtype', this.eventTypeControl);
        this.eventForm.addControl('categoryid', this.fb.control(''));
        this.eventForm.addControl('courseid', this.fb.control(this.courseId));
        this.eventForm.addControl('groupcourseid', this.fb.control(''));
        this.eventForm.addControl('groupid', this.groupControl);
        this.eventForm.addControl('description', this.descriptionControl);
        this.eventForm.addControl('location', this.fb.control(''));
        this.eventForm.addControl('duration', this.fb.control(0));
        this.eventForm.addControl('timedurationuntil', this.fb.control(currentDate));
        this.eventForm.addControl('timedurationminutes', this.fb.control(''));
        this.eventForm.addControl('repeat', this.fb.control(false));
        this.eventForm.addControl('repeats', this.fb.control('1'));
        this.eventForm.addControl('repeateditall', this.fb.control(1));
    }
    /**
     * Component being initialized.
     */
    AddonCalendarEditEventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().finally(function () {
            _this.originalData = _this.utils.clone(_this.eventForm.value);
            _this.loaded = true;
        });
    };
    /**
     * Fetch the data needed to render the form.
     *
     * @param refresh Whether it's refreshing data.
     * @return Promise resolved when done.
     */
    AddonCalendarEditEventPage.prototype.fetchData = function (refresh) {
        var _this = this;
        var accessInfo;
        this.error = false;
        // Get access info.
        return this.calendarProvider.getAccessInformation(this.courseId).then(function (info) {
            accessInfo = info;
            return _this.calendarProvider.getAllowedEventTypes(_this.courseId);
        }).then(function (types) {
            _this.types = types;
            var promises = [], eventTypes = _this.calendarHelper.getEventTypeOptions(types);
            if (!eventTypes.length) {
                return Promise.reject(_this.translate.instant('addon.calendar.nopermissiontoupdatecalendar'));
            }
            if (_this.eventId && !_this.gotEventData) {
                // Editing an event, get the event data. Wait for sync first.
                promises.push(_this.calendarSync.waitForSync(__WEBPACK_IMPORTED_MODULE_17__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].SYNC_ID).then(function () {
                    // Do not block if the scope is already destroyed.
                    if (!_this.isDestroyed) {
                        _this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].COMPONENT, _this.eventId);
                    }
                    var promises = [];
                    // Get the event offline data if there's any.
                    promises.push(_this.calendarOffline.getEvent(_this.eventId).then(function (event) {
                        _this.hasOffline = true;
                        return event;
                    }).catch(function () {
                        // No offline data.
                        _this.hasOffline = false;
                    }));
                    if (_this.eventId > 0) {
                        // It's an online event. get its data from server.
                        promises.push(_this.calendarProvider.getEventById(_this.eventId).then(function (event) {
                            _this.event = event;
                            if (event && event.repeatid) {
                                _this.otherEventsCount = event.eventcount ? event.eventcount - 1 : 0;
                            }
                            return event;
                        }));
                    }
                    return Promise.all(promises).then(function (result) {
                        _this.gotEventData = true;
                        var event = result[0] || result[1]; // Use offline data first.
                        if (event) {
                            // Load the data in the form.
                            return _this.loadEventData(event, !!result[0]);
                        }
                    });
                }));
            }
            if (types.category) {
                // Get the categories.
                promises.push(_this.coursesProvider.getCategories(0, true).then(function (cats) {
                    _this.categories = cats;
                }));
            }
            _this.showAll = _this.utils.isTrueOrOne(_this.currentSite.getStoredConfig('calendar_adminseesall')) &&
                accessInfo.canmanageentries;
            if (types.course || types.groups) {
                // Get the courses.
                var promise = _this.showAll ? _this.coursesProvider.getCoursesByField() : _this.coursesProvider.getUserCourses();
                promises.push(promise.then(function (courses) {
                    if (_this.showAll) {
                        // Remove site home from the list of courses.
                        var siteHomeId_1 = _this.currentSite.getSiteHomeId();
                        courses = courses.filter(function (course) {
                            return course.id != siteHomeId_1;
                        });
                    }
                    // Format the name of the courses.
                    var subPromises = [];
                    courses.forEach(function (course) {
                        subPromises.push(_this.filterHelper.getFiltersAndFormatText(course.fullname, 'course', course.id)
                            .then(function (result) {
                            course.fullname = result.text;
                        }).catch(function () {
                            // Ignore errors.
                        }));
                    });
                    return Promise.all(subPromises).then(function () {
                        // Sort courses by name.
                        _this.courses = courses.sort(function (a, b) {
                            var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
                            return compareA.localeCompare(compareB);
                        });
                    });
                }));
            }
            return Promise.all(promises).then(function () {
                if (!_this.eventTypeControl.value) {
                    // Initialize event type value. If course is allowed, select it first.
                    if (types.course) {
                        _this.eventTypeControl.setValue(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_COURSE);
                    }
                    else {
                        _this.eventTypeControl.setValue(eventTypes[0].value);
                    }
                }
                _this.eventTypes = eventTypes;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting data.');
            _this.error = true;
            if (!_this.svComponent || !_this.svComponent.isOn()) {
                _this.originalData = null; // Avoid asking for confirmation.
                _this.navCtrl.pop();
            }
        });
    };
    /**
     * Load an event data into the form.
     *
     * @param event Event data.
     * @param isOffline Whether the data is from offline or not.
     * @return Promise resolved when done.
     */
    AddonCalendarEditEventPage.prototype.loadEventData = function (event, isOffline) {
        var courseId = event.course ? event.course.id : event.courseid;
        this.eventForm.controls.name.setValue(event.name);
        this.eventForm.controls.timestart.setValue(this.timeUtils.toDatetimeFormat(event.timestart * 1000));
        this.eventForm.controls.eventtype.setValue(event.eventtype);
        this.eventForm.controls.categoryid.setValue(event.categoryid || '');
        this.eventForm.controls.courseid.setValue(courseId || '');
        this.eventForm.controls.groupcourseid.setValue(event.groupcourseid || courseId || '');
        this.eventForm.controls.groupid.setValue(event.groupid || '');
        this.eventForm.controls.description.setValue(event.description);
        this.eventForm.controls.location.setValue(event.location);
        if (isOffline) {
            // It's an offline event, use the data as it is.
            this.eventForm.controls.duration.setValue(event.duration);
            this.eventForm.controls.timedurationuntil.setValue(this.timeUtils.toDatetimeFormat((event.timedurationuntil * 1000) || Date.now()));
            this.eventForm.controls.timedurationminutes.setValue(event.timedurationminutes || '');
            this.eventForm.controls.repeat.setValue(!!event.repeat);
            this.eventForm.controls.repeats.setValue(event.repeats || '1');
            this.eventForm.controls.repeateditall.setValue(event.repeateditall || 1);
        }
        else {
            // Online event, we'll have to calculate the data.
            if (event.timeduration > 0) {
                this.eventForm.controls.duration.setValue(1);
                this.eventForm.controls.timedurationuntil.setValue(this.timeUtils.toDatetimeFormat((event.timestart + event.timeduration) * 1000));
            }
            else {
                // No duration.
                this.eventForm.controls.duration.setValue(0);
                this.eventForm.controls.timedurationuntil.setValue(this.timeUtils.toDatetimeFormat());
            }
            this.eventForm.controls.timedurationminutes.setValue('');
            this.eventForm.controls.repeat.setValue(!!event.repeatid);
            this.eventForm.controls.repeats.setValue(event.eventcount || '1');
            this.eventForm.controls.repeateditall.setValue(1);
        }
        if (event.eventtype == 'group' && courseId) {
            return this.loadGroups(courseId);
        }
        return Promise.resolve();
    };
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    AddonCalendarEditEventPage.prototype.refreshData = function (refresher) {
        var _this = this;
        var promises = [
            this.calendarProvider.invalidateAccessInformation(this.courseId),
            this.calendarProvider.invalidateAllowedEventTypes(this.courseId)
        ];
        if (this.types) {
            if (this.types.category) {
                promises.push(this.coursesProvider.invalidateCategories(0, true));
            }
            if (this.types.course || this.types.groups) {
                if (this.showAll) {
                    promises.push(this.coursesProvider.invalidateCoursesByField());
                }
                else {
                    promises.push(this.coursesProvider.invalidateUserCourses());
                }
            }
        }
        Promise.all(promises).finally(function () {
            _this.fetchData(true).finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * A course was selected, get its groups.
     *
     * @param courseId Course ID.
     */
    AddonCalendarEditEventPage.prototype.groupCourseSelected = function (courseId) {
        var _this = this;
        if (!courseId) {
            return;
        }
        var modal = this.domUtils.showModalLoading();
        this.loadGroups(courseId).then(function () {
            _this.groupControl.setValue('');
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting data.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Load groups of a certain course.
     *
     * @param courseId Course ID.
     * @return Promise resolved when done.
     */
    AddonCalendarEditEventPage.prototype.loadGroups = function (courseId) {
        var _this = this;
        this.loadingGroups = true;
        return this.groupsProvider.getUserGroupsInCourse(courseId).then(function (groups) {
            _this.groups = groups;
            _this.courseGroupSet = true;
        }).finally(function () {
            _this.loadingGroups = false;
        });
    };
    /**
     * Show or hide advanced form fields.
     */
    AddonCalendarEditEventPage.prototype.toggleAdvanced = function () {
        this.advanced = !this.advanced;
    };
    /**
     * Create the event.
     */
    AddonCalendarEditEventPage.prototype.submit = function () {
        var _this = this;
        // Validate data.
        var formData = this.eventForm.value, timeStartDate = this.timeUtils.convertToTimestamp(formData.timestart), timeUntilDate = this.timeUtils.convertToTimestamp(formData.timedurationuntil), timeDurationMinutes = parseInt(formData.timedurationminutes || '', 10);
        var error;
        if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_COURSE && !formData.courseid) {
            error = 'core.selectacourse';
        }
        else if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_GROUP && !formData.groupcourseid) {
            error = 'core.selectacourse';
        }
        else if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_GROUP && !formData.groupid) {
            error = 'core.selectagroup';
        }
        else if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_CATEGORY && !formData.categoryid) {
            error = 'core.selectacategory';
        }
        else if (formData.duration == 1 && timeStartDate > timeUntilDate) {
            error = 'addon.calendar.invalidtimedurationuntil';
        }
        else if (formData.duration == 2 && (isNaN(timeDurationMinutes) || timeDurationMinutes < 1)) {
            error = 'addon.calendar.invalidtimedurationminutes';
        }
        if (error) {
            // Show error and stop.
            this.domUtils.showErrorModal(this.translate.instant(error));
            return;
        }
        // Format the data to send.
        var data = {
            name: formData.name,
            eventtype: formData.eventtype,
            timestart: timeStartDate,
            description: {
                text: formData.description || '',
                format: 1
            },
            location: formData.location,
            duration: formData.duration,
            repeat: formData.repeat
        };
        if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_COURSE) {
            data.courseid = formData.courseid;
        }
        else if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_GROUP) {
            data.groupcourseid = formData.groupcourseid;
            data.groupid = formData.groupid;
        }
        else if (formData.eventtype == __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].TYPE_CATEGORY) {
            data.categoryid = formData.categoryid;
        }
        if (formData.duration == 1) {
            data.timedurationuntil = timeUntilDate;
        }
        else if (formData.duration == 2) {
            data.timedurationminutes = formData.timedurationminutes;
        }
        if (formData.repeat) {
            data.repeats = Number(formData.repeats);
        }
        if (this.event && this.event.repeatid) {
            data.repeatid = this.event.repeatid;
            data.repeateditall = formData.repeateditall;
        }
        // Send the data.
        var modal = this.domUtils.showModalLoading('core.sending', true);
        var event;
        this.calendarProvider.submitEvent(this.eventId, data).then(function (result) {
            event = result.event;
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, result.sent, _this.currentSite.getId());
            if (result.sent) {
                // Event created or edited, invalidate right days & months.
                var numberOfRepetitions = formData.repeat ? formData.repeats :
                    (data.repeateditall && _this.otherEventsCount ? _this.otherEventsCount + 1 : 1);
                return _this.calendarHelper.refreshAfterChangeEvent(result.event, numberOfRepetitions).catch(function () {
                    // Ignore errors.
                });
            }
        }).then(function () {
            _this.returnToList(event);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error sending data.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Convenience function to update or return to event list depending on device.
     *
     * @param event Event.
     */
    AddonCalendarEditEventPage.prototype.returnToList = function (event) {
        // Unblock the sync because the view will be destroyed and the sync process could be triggered before ngOnDestroy.
        this.unblockSync();
        if (this.eventId > 0) {
            // Editing an event.
            var data = {
                event: event
            };
            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, data, this.currentSite.getId());
        }
        else {
            if (event) {
                var data = {
                    event: event
                };
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_EVENT, data, this.currentSite.getId());
            }
            else {
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, {}, this.currentSite.getId());
            }
        }
        if (this.svComponent && this.svComponent.isOn()) {
            // Empty form.
            this.hasOffline = false;
            this.eventForm.reset(this.originalData);
            this.originalData = this.utils.clone(this.eventForm.value);
        }
        else {
            this.originalData = null; // Avoid asking for confirmation.
            this.navCtrl.pop();
        }
    };
    /**
     * Discard an offline saved discussion.
     */
    AddonCalendarEditEventPage.prototype.discard = function () {
        var _this = this;
        this.domUtils.showConfirm(this.translate.instant('core.areyousure')).then(function () {
            _this.calendarOffline.deleteEvent(_this.eventId).then(function () {
                _this.domUtils.triggerFormCancelledEvent(_this.formElement, _this.currentSite.getId());
                _this.returnToList();
            }).catch(function () {
                // Shouldn't happen.
                _this.domUtils.showErrorModal('Error discarding event.');
            });
        }).catch(function () {
            // Cancelled.
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonCalendarEditEventPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.calendarHelper.hasEventDataChanged(this.eventForm.value, this.originalData)) return [3 /*break*/, 2];
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Unblock sync.
     */
    AddonCalendarEditEventPage.prototype.unblockSync = function () {
        if (this.eventId) {
            this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */].COMPONENT, this.eventId);
        }
    };
    /**
     * Page destroyed.
     */
    AddonCalendarEditEventPage.prototype.ngOnDestroy = function () {
        this.unblockSync();
        this.isDestroyed = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_13__core_editor_components_rich_text_editor_rich_text_editor_ts__["a" /* CoreEditorRichTextEditorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__core_editor_components_rich_text_editor_rich_text_editor_ts__["a" /* CoreEditorRichTextEditorComponent */])
    ], AddonCalendarEditEventPage.prototype, "descriptionEditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editEventForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonCalendarEditEventPage.prototype, "formElement", void 0);
    AddonCalendarEditEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-calendar-edit-event',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\edit-event\edit-event.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ title | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <core-loading [hideUntil]="loaded">\n\n        <form ion-list [formGroup]="eventForm" *ngIf="!error" #editEventForm>\n\n            <!-- Event name. -->\n\n            <ion-item text-wrap>\n\n                <ion-label stacked><h2 [core-mark-required]="true">{{ \'addon.calendar.eventname\' | translate }}</h2></ion-label>\n\n                <ion-input type="text" name="name" [placeholder]="\'addon.calendar.eventname\' | translate" [formControlName]="\'name\'"></ion-input>\n\n                <core-input-errors item-content [control]="eventForm.controls.name" [errorMessages]="errors"></core-input-errors>\n\n            </ion-item>\n\n\n\n            <!-- Date. -->\n\n            <ion-item text-wrap>\n\n                <ion-label stacked><h2 [core-mark-required]="true">{{ \'core.date\' | translate }}</h2></ion-label>\n\n                <ion-datetime [formControlName]="\'timestart\'" [placeholder]="\'core.date\' | translate" [displayFormat]="dateFormat"></ion-datetime>\n\n                <core-input-errors item-content [control]="eventForm.controls.timestart" [errorMessages]="errors"></core-input-errors>\n\n            </ion-item>\n\n\n\n            <!-- Type. -->\n\n            <ion-item text-wrap class="addon-calendar-eventtype-container">\n\n                <ion-label id="addon-calendar-eventtype-label"><h2 [core-mark-required]="true">{{ \'addon.calendar.eventkind\' | translate }}</h2></ion-label>\n\n                <ion-select [formControlName]="\'eventtype\'" aria-labelledby="addon-calendar-eventtype-label" interface="action-sheet" [disabled]="eventTypes.length == 1">\n\n                    <ion-option *ngFor="let type of eventTypes" [value]="type.value">{{ type.name | translate }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Category. -->\n\n            <ion-item text-wrap *ngIf="eventTypeControl.value == \'category\'">\n\n                <ion-label id="addon-calendar-category-label"><h2 [core-mark-required]="true">{{ \'core.category\' | translate }}</h2></ion-label>\n\n                <ion-select [formControlName]="\'categoryid\'" aria-labelledby="addon-calendar-category-label" interface="action-sheet" [placeholder]="\'core.noselection\' | translate">\n\n                    <ion-option *ngFor="let category of categories" [value]="category.id">{{ category.name }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Course. -->\n\n            <ion-item text-wrap *ngIf="eventTypeControl.value == \'course\'">\n\n                <ion-label id="addon-calendar-course-label"><h2 [core-mark-required]="true">{{ \'core.course\' | translate }}</h2></ion-label>\n\n                <ion-select [formControlName]="\'courseid\'" aria-labelledby="addon-calendar-course-label" interface="action-sheet" [placeholder]="\'core.noselection\' | translate">\n\n                    <ion-option *ngFor="let course of courses" [value]="course.id">{{ course.fullname }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- Group. -->\n\n            <ng-container *ngIf="eventTypeControl.value == \'group\'">\n\n                <!-- Select the course. -->\n\n                <ion-item text-wrap>\n\n                    <ion-label id="addon-calendar-groupcourse-label"><h2 [core-mark-required]="true">{{ \'core.course\' | translate }}</h2></ion-label>\n\n                    <ion-select [formControlName]="\'groupcourseid\'" aria-labelledby="addon-calendar-groupcourse-label" interface="action-sheet" [placeholder]="\'core.noselection\' | translate" (ionChange)="groupCourseSelected($event)">\n\n                        <ion-option *ngFor="let course of courses" [value]="course.id">{{ course.fullname }}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <!-- The course has no groups. -->\n\n                <ion-item text-wrap *ngIf="!loadingGroups && courseGroupSet && !groups.length" class="core-danger-item">\n\n                    <p>{{ \'core.coursenogroups\' | translate }}</p>\n\n                </ion-item>\n\n                <!-- Select the group. -->\n\n                <ion-item text-wrap *ngIf="!loadingGroups && groups.length > 0">\n\n                    <ion-label id="addon-calendar-group-label"><h2 [core-mark-required]="true">{{ \'core.group\' | translate }}</h2></ion-label>\n\n                    <ion-select [formControlName]="\'groupid\'" aria-labelledby="addon-calendar-group-label" interface="action-sheet" [placeholder]="\'core.noselection\' | translate">\n\n                        <ion-option *ngFor="let group of groups" [value]="group.id">{{ group.name }}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <!-- Loading groups. -->\n\n                <ion-item text-wrap *ngIf="loadingGroups">\n\n                    <ion-spinner *ngIf="loadingGroups"></ion-spinner>\n\n                </ion-item>\n\n            </ng-container>\n\n\n\n            <!-- Advanced options. -->\n\n            <ion-item-divider text-wrap (click)="toggleAdvanced()" class="core-expandable">\n\n                <core-icon *ngIf="!advanced" name="fa-caret-right" item-start></core-icon>\n\n                <span *ngIf="!advanced">{{ \'core.showmore\' | translate }}</span>\n\n                <core-icon *ngIf="advanced" name="fa-caret-down" item-start></core-icon>\n\n                <span *ngIf="advanced">{{ \'core.showless\' | translate }}</span>\n\n            </ion-item-divider>\n\n\n\n            <ng-container *ngIf="advanced">\n\n                <!-- Description. -->\n\n                <ion-item text-wrap>\n\n                    <ion-label stacked><h2>{{ \'core.description\' | translate }}</h2></ion-label>\n\n                    <core-rich-text-editor item-content [control]="descriptionControl" [placeholder]="\'core.description\' | translate" name="description" [component]="component" [componentId]="eventId" [autoSave]="false"></core-rich-text-editor>\n\n                </ion-item>\n\n\n\n                <!-- Location. -->\n\n                <ion-item text-wrap>\n\n                    <ion-label stacked><h2>{{ \'core.location\' | translate }}</h2></ion-label>\n\n                    <ion-input type="text" name="location" [placeholder]="\'core.location\' | translate" [formControlName]="\'location\'"></ion-input>\n\n                </ion-item>\n\n\n\n                <!-- Duration. -->\n\n                <div text-wrap radio-group [formControlName]="\'duration\'" class="addon-calendar-radio-container">\n\n                    <ion-item class="addon-calendar-radio-title"><h2>{{ \'addon.calendar.eventduration\' | translate }}</h2></ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{ \'addon.calendar.durationnone\' | translate }}</ion-label>\n\n                        <ion-radio [value]="0"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{ \'addon.calendar.durationuntil\' | translate }}</ion-label>\n\n                        <ion-radio [value]="1"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-item text-wrap>\n\n                        <ion-datetime [formControlName]="\'timedurationuntil\'" [placeholder]="\'addon.calendar.durationuntil\' | translate" [displayFormat]="dateFormat" [disabled]="eventForm.controls.duration.value != 1"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{ \'addon.calendar.durationminutes\' | translate }}</ion-label>\n\n                        <ion-radio [value]="2"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-item text-wrap>\n\n                        <ion-input type="number" name="timedurationminutes" [placeholder]="\'addon.calendar.durationminutes\' | translate" [formControlName]="\'timedurationminutes\'" [disabled]="eventForm.controls.duration.value != 2"></ion-input>\n\n                    </ion-item>\n\n                </div>\n\n\n\n                <!-- Repeat (for new events). -->\n\n                <ng-container *ngIf="!eventId || eventId < 0">\n\n                    <ion-item text-wrap>\n\n                        <ion-label><h2>{{ \'addon.calendar.repeatevent\' | translate }}</h2></ion-label>\n\n                        <ion-checkbox item-end [formControlName]="\'repeat\'"></ion-checkbox>\n\n                    </ion-item>\n\n                    <ion-item text-wrap *ngIf="eventForm.controls.repeat.value">\n\n                        <ion-label stacked><h2>{{ \'addon.calendar.repeatweeksl\' | translate }}</h2></ion-label>\n\n                        <ion-input type="number" name="repeats" [formControlName]="\'repeats\'"></ion-input>\n\n                    </ion-item>\n\n                </ng-container>\n\n\n\n                <!-- Apply to all events or just this one (editing repeated events). -->\n\n                <div *ngIf="event && event.repeatid" text-wrap radio-group [formControlName]="\'repeateditall\'" class="addon-calendar-radio-container">\n\n                    <ion-item class="addon-calendar-radio-title"><h2>{{ \'addon.calendar.repeatedevents\' | translate }}</h2></ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{ \'addon.calendar.repeateditall\' | translate:{$a: otherEventsCount} }}</ion-label>\n\n                        <ion-radio [value]="1"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{ \'addon.calendar.repeateditthis\' | translate }}</ion-label>\n\n                        <ion-radio [value]="0"></ion-radio>\n\n                    </ion-item>\n\n                </div>\n\n            </ng-container>\n\n\n\n            <ion-item>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button block (click)="submit()" [disabled]="!eventForm.valid">{{ \'core.save\' | translate }}</button>\n\n                    </ion-col>\n\n                    <ion-col *ngIf="hasOffline && eventId < 0">\n\n                        <button ion-button block color="light" (click)="discard()">{{ \'core.discard\' | translate }}</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n        </form>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\calendar\pages\edit-event\edit-event.html"*/,
        }),
        __param(17, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_time__["b" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_groups__["a" /* CoreGroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_11__core_courses_providers_courses__["b" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_calendar__["a" /* AddonCalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_calendar_offline__["a" /* AddonCalendarOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_helper__["a" /* AddonCalendarHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_sync__["a" /* CoreSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_18__core_filter_providers_helper__["a" /* CoreFilterHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_12__components_split_view_split_view__["a" /* CoreSplitViewComponent */]])
    ], AddonCalendarEditEventPage);
    return AddonCalendarEditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ })

});
//# sourceMappingURL=145.js.map