webpackJsonp([89],{

/***/ 2206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPageModule", function() { return AddonModLessonPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player__ = __webpack_require__(2365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_editor_components_components_module__ = __webpack_require__(133);
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







var AddonModLessonPlayerPageModule = /** @class */ (function () {
    function AddonModLessonPlayerPageModule() {
    }
    AddonModLessonPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__player__["a" /* AddonModLessonPlayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_editor_components_components_module__["a" /* CoreEditorComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__player__["a" /* AddonModLessonPlayerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModLessonPlayerPageModule);
    return AddonModLessonPlayerPageModule;
}());

//# sourceMappingURL=player.module.js.map

/***/ }),

/***/ 2365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModLessonPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sync__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_url__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_app_component__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_lesson__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_lesson_offline__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_lesson_sync__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_helper__ = __webpack_require__(1053);
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
 * Page that allows attempting and reviewing a lesson.
 */
var AddonModLessonPlayerPage = /** @class */ (function () {
    function AddonModLessonPlayerPage(navParams, translate, eventsProvider, sitesProvider, syncProvider, domUtils, popoverCtrl, timeUtils, lessonProvider, lessonHelper, lessonSync, lessonOfflineProvider, cdr, modalCtrl, navCtrl, appProvider, utils, urlUtils, fb, mmApp) {
        this.navParams = navParams;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.lessonProvider = lessonProvider;
        this.lessonHelper = lessonHelper;
        this.lessonSync = lessonSync;
        this.lessonOfflineProvider = lessonOfflineProvider;
        this.cdr = cdr;
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.utils = utils;
        this.urlUtils = urlUtils;
        this.fb = fb;
        this.mmApp = mmApp;
        this.component = __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].COMPONENT;
        this.LESSON_EOL = __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].LESSON_EOL;
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.lessonId = navParams.get('lessonId');
        this.courseId = navParams.get('courseId');
        this.password = navParams.get('password');
        this.review = !!navParams.get('review');
        this.currentPage = navParams.get('pageId');
        // Block the lesson so it cannot be synced.
        this.syncProvider.blockOperation(this.component, this.lessonId);
        // Create the navigation modal.
        this.menuModal = modalCtrl.create('AddonModLessonMenuModalPage', {
            page: this
        }, { cssClass: 'core-modal-lateral',
            showBackdrop: true,
            enableBackdropDismiss: true,
            enterAnimation: 'core-modal-lateral-transition',
            leaveAnimation: 'core-modal-lateral-transition' });
    }
    /**
     * Component being initialized.
     */
    AddonModLessonPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch the Lesson data.
        this.fetchLessonData().then(function (success) {
            if (success) {
                // Review data loaded or new retake started, remove any retake being finished in sync.
                _this.lessonSync.deleteRetakeFinishedInSync(_this.lessonId);
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModLessonPlayerPage.prototype.ngOnDestroy = function () {
        // Unblock the lesson so it can be synced.
        this.syncProvider.unblockOperation(this.component, this.lessonId);
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModLessonPlayerPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave) {
                            return [2 /*return*/];
                        }
                        if (!(this.question && !this.eolData && !this.processData && this.originalData)) return [3 /*break*/, 2];
                        if (!!this.utils.basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    AddonModLessonPlayerPage.prototype.ionViewWillLeave = function () {
        this.mmApp.closeModal();
    };
    /**
     * A button was clicked.
     *
     * @param data Button data.
     */
    AddonModLessonPlayerPage.prototype.buttonClicked = function (data) {
        this.processPage(data);
    };
    /**
     * Call a function and go offline if allowed and the call fails.
     *
     * @param func Function to call.
     * @param args Arguments to pass to the function.
     * @param offlineParamPos Position of the offline parameter in the args.
     * @param jumpsParamPos Position of the jumps parameter in the args.
     * @return Promise resolved in success, rejected otherwise.
     */
    AddonModLessonPlayerPage.prototype.callFunction = function (func, args, offlineParamPos, jumpsParamPos) {
        var _this = this;
        return func.apply(func, args).catch(function (error) {
            if (!_this.offline && !_this.review && _this.lessonProvider.isLessonOffline(_this.lesson) &&
                !_this.utils.isWebServiceError(error)) {
                // If it fails, go offline.
                _this.offline = true;
                // Get the possible jumps now.
                return _this.lessonProvider.getPagesPossibleJumps(_this.lesson.id, true).then(function (jumpList) {
                    _this.jumps = jumpList;
                    // Call the function again with offline set to true and the new jumps.
                    args[offlineParamPos] = true;
                    if (typeof jumpsParamPos != 'undefined') {
                        args[jumpsParamPos] = _this.jumps;
                    }
                    return func.apply(func, args);
                });
            }
            return Promise.reject(error);
        });
    };
    /**
     * Change the page from menu or when continuing from a feedback page.
     *
     * @param pageId Page to load.
     * @param ignoreCurrent If true, allow loading current page.
     */
    AddonModLessonPlayerPage.prototype.changePage = function (pageId, ignoreCurrent) {
        var _this = this;
        if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
            // Page already loaded, stop.
            return;
        }
        this.loaded = true;
        this.messages = [];
        this.loadPage(pageId).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading page');
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Get the lesson data and load the page.
     *
     * @return Promise resolved with true if success, resolved with false otherwise.
     */
    AddonModLessonPlayerPage.prototype.fetchLessonData = function () {
        var _this = this;
        // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
        return this.lessonSync.waitForSync(this.lessonId).then(function () {
            return _this.lessonProvider.getLessonById(_this.courseId, _this.lessonId);
        }).then(function (lessonData) {
            _this.lesson = lessonData;
            _this.title = _this.lesson.name; // Temporary title.
            // If lesson has offline data already, use offline mode.
            return _this.lessonOfflineProvider.hasOfflineData(_this.lessonId);
        }).then(function (offlineMode) {
            _this.offline = offlineMode;
            if (!offlineMode && !_this.appProvider.isOnline() && _this.lessonProvider.isLessonOffline(_this.lesson) && !_this.review) {
                // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                _this.offline = true;
            }
            return _this.callFunction(_this.lessonProvider.getAccessInformation.bind(_this.lessonProvider), [_this.lesson.id, _this.offline, true], 1);
        }).then(function (info) {
            var promises = [];
            _this.accessInfo = info;
            _this.canManage = info.canmanage;
            _this.retake = info.attemptscount;
            _this.showRetake = !_this.currentPage && _this.retake > 0; // Only show it in first page if it isn't the first retake.
            if (info.preventaccessreasons && info.preventaccessreasons.length) {
                // If it's a password protected lesson and we have the password, allow playing it.
                var preventReason = _this.lessonProvider.getPreventAccessReason(info, !!_this.password, _this.review);
                if (preventReason) {
                    // Lesson cannot be played, show message and go back.
                    return Promise.reject(preventReason.message);
                }
            }
            if (_this.review && _this.navParams.get('retake') != info.attemptscount - 1) {
                // Reviewing a retake that isn't the last one. Error.
                return Promise.reject(_this.translate.instant('addon.mod_lesson.errorreviewretakenotlast'));
            }
            if (_this.password) {
                // Lesson uses password, get the whole lesson object.
                promises.push(_this.callFunction(_this.lessonProvider.getLessonWithPassword.bind(_this.lessonProvider), [_this.lesson.id, _this.password, true, _this.offline, true], 3).then(function (lesson) {
                    _this.lesson = lesson;
                }));
            }
            if (_this.offline) {
                // Offline mode, get the list of possible jumps to allow navigation.
                promises.push(_this.lessonProvider.getPagesPossibleJumps(_this.lesson.id, true).then(function (jumpList) {
                    _this.jumps = jumpList;
                }));
            }
            return Promise.all(promises);
        }).then(function () {
            _this.mediaFile = _this.lesson.mediafiles && _this.lesson.mediafiles[0];
            _this.lessonWidth = _this.lesson.slideshow ? _this.domUtils.formatPixelsSize(_this.lesson.mediawidth) : '';
            _this.lessonHeight = _this.lesson.slideshow ? _this.domUtils.formatPixelsSize(_this.lesson.mediaheight) : '';
            return _this.launchRetake(_this.currentPage);
        }).then(function () {
            return true;
        }).catch(function (error) {
            // An error occurred.
            var promise;
            if (_this.review && _this.navParams.get('retake') && _this.utils.isWebServiceError(error)) {
                // The user cannot review the retake. Unmark the retake as being finished in sync.
                promise = _this.lessonSync.deleteRetakeFinishedInSync(_this.lessonId);
            }
            else {
                promise = Promise.resolve();
            }
            return promise.then(function () {
                _this.domUtils.showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                _this.forceLeave = true;
                _this.navCtrl.pop();
                return false;
            });
        });
    };
    /**
     * Finish the retake.
     *
     * @param outOfTime Whether the retake is finished because the user ran out of time.
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.finishRetake = function (outOfTime) {
        var _this = this;
        var promise;
        this.messages = [];
        if (this.offline && this.appProvider.isOnline()) {
            // Offline mode but the app is online. Try to sync the data.
            promise = this.lessonSync.syncLesson(this.lesson.id, true, true).then(function (result) {
                if (result.warnings && result.warnings.length) {
                    var error_1 = result.warnings[0];
                    // Some data was deleted. Check if the retake has changed.
                    return _this.lessonProvider.getAccessInformation(_this.lesson.id).then(function (info) {
                        if (info.attemptscount != _this.accessInfo.attemptscount) {
                            // The retake has changed. Leave the view and show the error.
                            _this.forceLeave = true;
                            _this.navCtrl.pop();
                            return Promise.reject(error_1);
                        }
                        // Retake hasn't changed, show the warning and finish the retake in offline.
                        _this.offline = false;
                        _this.domUtils.showErrorModal(error_1);
                    });
                }
                _this.offline = false;
            }, function () {
                // Ignore errors.
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            // Now finish the retake.
            var args = [_this.lesson, _this.courseId, _this.password, outOfTime, _this.review, _this.offline, _this.accessInfo];
            return _this.callFunction(_this.lessonProvider.finishRetake.bind(_this.lessonProvider), args, 5);
        }).then(function (data) {
            _this.title = _this.lesson.name;
            _this.eolData = data.data;
            _this.messages = _this.messages.concat(data.messages);
            _this.processData = undefined;
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'lesson' });
            // Format activity link if present.
            if (_this.eolData && _this.eolData.activitylink) {
                _this.eolData.activitylink.value = _this.lessonHelper.formatActivityLink(_this.eolData.activitylink.value);
            }
            // Format review lesson if present.
            if (_this.eolData && _this.eolData.reviewlesson) {
                var params = _this.urlUtils.extractUrlParams(_this.eolData.reviewlesson.value);
                if (!params || !params.pageid) {
                    // No pageid in the URL, the user cannot review (probably didn't answer any question).
                    delete _this.eolData.reviewlesson;
                }
                else {
                    _this.eolData.reviewlesson.pageid = params.pageid;
                }
            }
        });
    };
    /**
     * Jump to a certain page after performing an action.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.jumpToPage = function (pageId) {
        if (pageId === 0) {
            // Not a valid page, return to entry view.
            // This happens, for example, when the user clicks to go to previous page and there is no previous page.
            this.forceLeave = true;
            this.navCtrl.pop();
            return Promise.resolve();
        }
        else if (pageId == __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].LESSON_EOL) {
            // End of lesson reached.
            return this.finishRetake();
        }
        // Load new page.
        this.messages = [];
        return this.loadPage(pageId);
    };
    /**
     * Start or continue a retake.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.launchRetake = function (pageId) {
        var _this = this;
        var promise;
        if (this.review) {
            // Review mode, no need to launch the retake.
            promise = Promise.resolve({});
        }
        else if (!this.offline) {
            // Not in offline mode, launch the retake.
            promise = this.lessonProvider.launchRetake(this.lesson.id, this.password, pageId);
        }
        else {
            // Check if there is a finished offline retake.
            promise = this.lessonOfflineProvider.hasFinishedRetake(this.lesson.id).then(function (finished) {
                if (finished) {
                    // Always show EOL page.
                    pageId = __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].LESSON_EOL;
                }
                return {};
            });
        }
        return promise.then(function (data) {
            _this.currentPage = pageId || _this.accessInfo.firstpageid;
            _this.messages = data.messages || [];
            if (_this.lesson.timelimit && !_this.accessInfo.canmanage) {
                // Get the last lesson timer.
                return _this.lessonProvider.getTimers(_this.lesson.id, false, true).then(function (timers) {
                    _this.endTime = timers[timers.length - 1].starttime + _this.lesson.timelimit;
                });
            }
        }).then(function () {
            return _this.loadPage(_this.currentPage);
        });
    };
    /**
     * Load the lesson menu.
     *
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.loadMenu = function () {
        var _this = this;
        if (this.loadingMenu) {
            // Already loading.
            return;
        }
        this.loadingMenu = true;
        var args = [this.lessonId, this.password, this.offline, true];
        return this.callFunction(this.lessonProvider.getPages.bind(this.lessonProvider), args, 2).then(function (pages) {
            _this.lessonPages = pages.map(function (entry) {
                return entry.page;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading menu.');
        }).finally(function () {
            _this.loadingMenu = false;
        });
    };
    /**
     * Load a certain page.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.loadPage = function (pageId) {
        var _this = this;
        if (pageId == __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].LESSON_EOL) {
            // End of lesson reached.
            return this.finishRetake();
        }
        var args = [this.lesson, pageId, this.password, this.review, true, this.offline, true, this.accessInfo, this.jumps];
        return this.callFunction(this.lessonProvider.getPageData.bind(this.lessonProvider), args, 5, 8).then(function (data) {
            if (data.newpageid == __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */].LESSON_EOL) {
                // End of lesson reached.
                return _this.finishRetake();
            }
            _this.pageData = data;
            _this.title = data.page.title;
            _this.pageContent = _this.lessonHelper.getPageContentsFromPageData(data);
            _this.loaded = true;
            _this.currentPage = pageId;
            _this.messages = _this.messages.concat(data.messages);
            // Page loaded, hide EOL and feedback data if shown.
            _this.eolData = _this.processData = undefined;
            if (_this.lessonProvider.isQuestionPage(data.page.type)) {
                // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                _this.questionForm = _this.fb.group({});
                _this.pageButtons = [];
                _this.question = _this.lessonHelper.getQuestionFromPageData(_this.questionForm, data);
                _this.originalData = _this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
            }
            else {
                _this.pageButtons = _this.lessonHelper.getPageButtonsFromHtml(data.pagecontent);
                _this.question = undefined;
                _this.originalData = undefined;
            }
            if (data.displaymenu && !_this.displayMenu) {
                // Load the menu.
                _this.loadMenu();
            }
            _this.displayMenu = !!data.displaymenu;
            if (!_this.firstPageLoaded) {
                _this.firstPageLoaded = true;
            }
            else {
                _this.showRetake = false;
            }
        });
    };
    /**
     * Process a page, sending some data.
     *
     * @param data The data to send.
     * @param formSubmitted Whether a form was submitted.
     * @return Promise resolved when done.
     */
    AddonModLessonPlayerPage.prototype.processPage = function (data, formSubmitted) {
        var _this = this;
        this.loaded = false;
        var args = [this.lesson, this.courseId, this.pageData, data, this.password, this.review, this.offline, this.accessInfo,
            this.jumps];
        return this.callFunction(this.lessonProvider.processPage.bind(this.lessonProvider), args, 6, 8).then(function (result) {
            if (formSubmitted) {
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, result.sent, _this.sitesProvider.getCurrentSiteId());
            }
            if (!_this.offline && !_this.review && _this.lessonProvider.isLessonOffline(_this.lesson)) {
                // Lesson allows offline and the user changed some data in server. Update cached data.
                var retake = _this.accessInfo.attemptscount;
                if (_this.lessonProvider.isQuestionPage(_this.pageData.page.type)) {
                    _this.lessonProvider.getQuestionsAttemptsOnline(_this.lessonId, retake, false, undefined, false, true);
                }
                else {
                    _this.lessonProvider.getContentPagesViewedOnline(_this.lessonId, retake, false, true);
                }
            }
            if (result.nodefaultresponse || result.inmediatejump) {
                // Don't display feedback or force a redirect to a new page. Load the new page.
                return _this.jumpToPage(result.newpageid);
            }
            else {
                // Not inmediate jump, show the feedback.
                result.feedback = _this.lessonHelper.removeQuestionFromFeedback(result.feedback);
                _this.messages = result.messages;
                _this.processData = result;
                _this.processData.buttons = [];
                if (_this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached && !result.reviewmode) {
                    // User can try again, show button to do so.
                    _this.processData.buttons.push({
                        label: 'addon.mod_lesson.reviewquestionback',
                        pageId: _this.currentPage
                    });
                }
                // Button to continue.
                if (_this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached) {
                    /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                       same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                    if (_this.pageData.page.id != result.newpageid) {
                        // Button to continue the lesson (the page to go is configured by the teacher).
                        _this.processData.buttons.push({
                            label: 'addon.mod_lesson.reviewquestioncontinue',
                            pageId: result.newpageid
                        });
                    }
                }
                else {
                    _this.processData.buttons.push({
                        label: 'addon.mod_lesson.continue',
                        pageId: result.newpageid
                    });
                }
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error processing page');
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Review the lesson.
     *
     * @param pageId Page to load.
     */
    AddonModLessonPlayerPage.prototype.reviewLesson = function (pageId) {
        var _this = this;
        this.loaded = false;
        this.review = true;
        this.offline = false; // Don't allow offline mode in review.
        this.loadPage(pageId).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading page');
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Submit a question.
     *
     * @param e Event.
     */
    AddonModLessonPlayerPage.prototype.submitQuestion = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.loaded = false;
        // Use getRawValue to include disabled values.
        var data = this.lessonHelper.prepareQuestionData(this.question, this.questionForm.getRawValue());
        this.processPage(data, true).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Time up.
     */
    AddonModLessonPlayerPage.prototype.timeUp = function () {
        var _this = this;
        // Time up called, hide the timer.
        this.endTime = undefined;
        this.loaded = false;
        this.finishRetake(true).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error finishing attempt');
        }).finally(function () {
            _this.loaded = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
    ], AddonModLessonPlayerPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('questionFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModLessonPlayerPage.prototype, "formElement", void 0);
    AddonModLessonPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-lesson-player',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\player\player.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="lesson && lesson.coursemodule" [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button *ngIf="displayMenu || mediaFile" ion-button icon-only [attr.aria-label]="\'addon.mod_lesson.lessonmenu\' | translate" (click)="menuModal.present()">\n\n                <ion-icon name="bookmark"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <!-- Info messages. Only show the first one. -->\n\n        <div class="core-info-card" icon-start *ngIf="lesson && messages && messages.length">\n\n            <ion-icon name="information-circle"></ion-icon>\n\n            {{ messages[0].message }}\n\n        </div>\n\n\n\n        <div *ngIf="lesson" [ngClass]=\'{"addon-mod_lesson-slideshow": lesson.slideshow}\' [ngStyle]="{\'width\': lessonWidth, \'height\': lessonHeight}">\n\n\n\n            <core-timer *ngIf="endTime" [endTime]="endTime" (finished)="timeUp()" [timerText]="\'addon.mod_lesson.timeremaining\' | translate"></core-timer>\n\n\n\n            <!-- Retake and ongoing score. -->\n\n            <ion-item text-wrap *ngIf="showRetake && !eolData && !processData">\n\n                <p>{{ \'addon.mod_lesson.attempt\' | translate:{$a: retake} }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="pageData && pageData.ongoingscore && !eolData && !processData" class="addon-mod_lesson-ongoingscore">\n\n                {{ pageData.ongoingscore }}\n\n            </ion-item>\n\n\n\n            <!-- Page content. -->\n\n            <ion-card *ngIf="!eolData && !processData">\n\n                <!-- Content page. -->\n\n                <ion-item text-wrap *ngIf="!question && pageContent">\n\n                    <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="pageContent" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                </ion-item>\n\n\n\n                <!-- Question page. -->\n\n                <!-- We need to set ngIf loaded to make formGroup directive restart every time a page changes, see MOBILE-2540. -->\n\n                <form *ngIf="question && loaded" ion-list [formGroup]="questionForm" #questionFormEl>\n\n                    <ion-item-divider text-wrap *ngIf="pageContent">\n\n                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="pageContent" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                    </ion-item-divider>\n\n\n\n                    <input *ngFor="let input of question.hiddenInputs" type="hidden" [name]="input.name" [value]="input.value" />\n\n\n\n                    <!-- Render a different input depending on the type of the question. -->\n\n                    <ng-container [ngSwitch]="question.template">\n\n\n\n                        <!-- Short answer. -->\n\n                        <ng-container *ngSwitchCase="\'shortanswer\'">\n\n                            <ion-input padding-left [type]="question.input.type" placeholder="{{ \'addon.mod_lesson.youranswer\' | translate }}" [id]="question.input.id" [formControlName]="question.input.name" autocorrect="off" [maxlength]="question.input.maxlength">\n\n                            </ion-input>\n\n                        </ng-container>\n\n\n\n                        <!-- Essay. -->\n\n                        <ng-container *ngSwitchCase="\'essay\'">\n\n                            <ion-item *ngIf="question.textarea">\n\n                                <core-rich-text-editor item-content placeholder="{{ \'addon.mod_lesson.youranswer\' | translate }}" [control]="question.control" [component]="component" [componentId]="lesson.coursemodule" [autoSave]="true" contextLevel="module" [contextInstanceId]="lesson.coursemodule" elementId="answer_editor"></core-rich-text-editor>\n\n                            </ion-item>\n\n                            <ion-item text-wrap *ngIf="!question.textarea && question.useranswer">\n\n                                <p class="item-heading">{{ \'addon.mod_lesson.youranswer\' | translate }}</p>\n\n                                <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="question.useranswer" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                            </ion-item>\n\n                        </ng-container>\n\n\n\n                        <!-- Multichoice. -->\n\n                        <ng-container *ngSwitchCase="\'multichoice\'">\n\n                            <!-- Single choice. -->\n\n                            <div *ngIf="!question.multi" radio-group [formControlName]="question.controlName">\n\n                                <ion-item text-wrap *ngFor="let option of question.options">\n\n                                    <ion-label>\n\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="option.text" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                    </ion-label>\n\n                                    <ion-radio [id]="option.id" [value]="option.value" [disabled]="option.disabled"></ion-radio>\n\n                                </ion-item>\n\n                            </div>\n\n\n\n                            <!-- Multiple choice. -->\n\n                            <ng-container *ngIf="question.multi">\n\n                                <ion-item text-wrap *ngFor="let option of question.options">\n\n                                    <ion-label>\n\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="option.text" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                                    </ion-label>\n\n                                    <ion-checkbox [id]="option.id" [formControlName]="option.name" item-end></ion-checkbox>\n\n                                </ion-item>\n\n                            </ng-container>\n\n                        </ng-container>\n\n\n\n                        <!-- Matching. -->\n\n                        <ng-container *ngSwitchCase="\'matching\'">\n\n                            <ion-item text-wrap *ngFor="let row of question.rows">\n\n                                <ion-grid item-content>\n\n                                    <ion-row>\n\n                                        <ion-col>\n\n                                            <p><core-format-text id="addon-mod_lesson-matching-{{row.id}}" [component]="component" [componentId]="lesson.coursemodule" [text]="row.text" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text></p>\n\n                                        </ion-col>\n\n                                        <ion-col>\n\n                                            <ion-select [id]="row.id" [formControlName]="row.name" [attr.aria-labelledby]="\'addon-mod_lesson-matching-\' + row.id" interface="action-sheet">\n\n                                                <ion-option *ngFor="let option of row.options" [value]="option.value">{{option.label}}</ion-option>\n\n                                            </ion-select>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                                </ion-grid>\n\n                            </ion-item>\n\n                        </ng-container>\n\n                    </ng-container>\n\n\n\n                    <ion-item>\n\n                        <button ion-button block text-wrap (click)="submitQuestion($event)" class="button-no-uppercase">{{ question.submitLabel }}</button>\n\n                    </ion-item>\n\n                </form>\n\n            </ion-card>\n\n\n\n            <!-- Page buttons and progress. -->\n\n            <ion-list *ngIf="!eolData && !processData">\n\n                <ion-grid text-wrap *ngIf="pageButtons && pageButtons.length" class="addon-mod_lesson-pagebuttons">\n\n                    <ion-row align-items-center>\n\n                        <ion-col *ngFor="let button of pageButtons" col-12 col-md-6 col-lg-3 col-xl>\n\n                            <a ion-button block outline text-wrap [id]="button.id" (click)="buttonClicked(button.data)" class="button-no-uppercase">{{ button.content }}</a>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <ion-item text-wrap *ngIf="lesson && lesson.progressbar && !canManage && pageData">\n\n                    <p>{{ \'addon.mod_lesson.progresscompleted\' | translate:{$a: pageData.progress} }}</p>\n\n                    <core-progress-bar [progress]="pageData.progress"></core-progress-bar>\n\n                </ion-item>\n\n                <div class="core-info-card" icon-start *ngIf="lesson && lesson.progressbar && canManage">\n\n                    <ion-icon name="information-circle"></ion-icon>\n\n                    {{ \'addon.mod_lesson.progressbarteacherwarning2\' | translate }}\n\n                </div>\n\n            </ion-list>\n\n\n\n            <!-- End of lesson reached. -->\n\n            <ion-card *ngIf="eolData && !processData">\n\n                <div class="core-warning-card" icon-start *ngIf="eolData.offline && eolData.offline.value">\n\n                    <ion-icon name="warning"></ion-icon>\n\n                    {{ \'addon.mod_lesson.finishretakeoffline\' | translate }}\n\n                </div>\n\n\n\n                <h3 padding *ngIf="eolData.gradelesson">{{ \'addon.mod_lesson.congratulations\' | translate }}</h3>\n\n                <ion-item text-wrap *ngIf="eolData.notenoughtimespent">\n\n                    <{{ eolData.notenoughtimespent.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.numberofpagesviewed">\n\n                    {{ eolData.numberofpagesviewed.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.youshouldview">\n\n                    {{ eolData.youshouldview.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.numberofcorrectanswers">\n\n                    {{ eolData.numberofcorrectanswers.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.displayscorewithessays">\n\n                    <span [innerHTML]="eolData.displayscorewithessays.message"></span>\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="!eolData.displayscorewithessays && eolData.displayscorewithoutessays">\n\n                    {{ eolData.displayscorewithoutessays.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.yourcurrentgradeisoutof">\n\n                    {{ eolData.yourcurrentgradeisoutof.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.eolstudentoutoftimenoanswers">\n\n                    {{ eolData.eolstudentoutoftimenoanswers.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.welldone">\n\n                    {{ eolData.welldone.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="lesson.progressbar && eolData.progresscompleted">\n\n                    <p>{{ \'addon.mod_lesson.progresscompleted\' | translate:{$a: eolData.progresscompleted.value} }}</p>\n\n                    <core-progress-bar [progress]="eolData.progresscompleted.value"></core-progress-bar>\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.displayofgrade">\n\n                    {{ eolData.displayofgrade.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.reviewlesson">\n\n                    <a ion-button block text-wrap (click)="reviewLesson(eolData.reviewlesson.pageid)" class="button-no-uppercase">\n\n                        {{ \'addon.mod_lesson.reviewlesson\' | translate }}\n\n                    </a>\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.modattemptsnoteacher">\n\n                    {{ eolData.modattemptsnoteacher.message }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="eolData.activitylink && eolData.activitylink.value">\n\n                    <ng-container *ngIf="eolData.activitylink.value.formatted">\n\n                        <!-- Activity link was successfully formatted, render the button. -->\n\n                        <a ion-button block text-wrap color="light" [href]="eolData.activitylink.value.href" core-link [capture]="true" class="button-no-uppercase">\n\n                            <core-format-text [text]="eolData.activitylink.value.label" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                        </a>\n\n                    </ng-container>\n\n                    <ng-container *ngIf="!eolData.activitylink.value.formatted">\n\n                        <!-- Activity link wasn\'t formatted, render the original link. -->\n\n                        <core-format-text [text]="eolData.activitylink.value.label" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                    </ng-container>\n\n                </ion-item>\n\n            </ion-card>\n\n\n\n            <!-- Feedback returned when processing an action. -->\n\n            <ion-list *ngIf="processData">\n\n                <ion-item text-wrap *ngIf="processData.ongoingscore && !processData.reviewmode" >\n\n                    {{ processData.ongoingscore }}\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="!processData.reviewmode || review">\n\n                    <p *ngIf="!processData.reviewmode">\n\n                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="processData.feedback" contextLevel="module" [contextInstanceId]="lesson.coursemodule" [courseId]="courseId"></core-format-text>\n\n                    </p>\n\n                    <div *ngIf="review">\n\n                        <p>{{ \'addon.mod_lesson.gotoendoflesson\' | translate }}</p>\n\n                        <p>{{ \'addon.mod_lesson.or\' | translate }}</p>\n\n                        <p>{{ \'addon.mod_lesson.continuetonextpage\' | translate }}</p>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-item text-wrap *ngIf="review || (processData.buttons && processData.buttons.length)">\n\n                    <a ion-button block text-wrap color="light" *ngIf="review" (click)="changePage(LESSON_EOL)">{{ \'addon.mod_lesson.finish\' | translate }}</a>\n\n                    <a ion-button block text-wrap color="light" *ngFor="let button of processData.buttons" (click)="changePage(button.pageId, true)">{{ button.label | translate }}</a>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\lesson\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_time__["b" /* CoreTimeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_lesson__["a" /* AddonModLessonProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_helper__["a" /* AddonModLessonHelperProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_lesson_sync__["a" /* AddonModLessonSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_lesson_offline__["a" /* AddonModLessonOfflineProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_utils_url__["b" /* CoreUrlUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_12__app_app_component__["a" /* MoodleMobileApp */]])
    ], AddonModLessonPlayerPage);
    return AddonModLessonPlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ })

});
//# sourceMappingURL=89.js.map