webpackJsonp([7],{

/***/ 2207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return AddonModQuizPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_question_components_components_module__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player__ = __webpack_require__(2366);
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







var AddonModQuizPlayerPageModule = /** @class */ (function () {
    function AddonModQuizPlayerPageModule() {
    }
    AddonModQuizPlayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__player__["a" /* AddonModQuizPlayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_question_components_components_module__["a" /* CoreQuestionComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__player__["a" /* AddonModQuizPlayerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModQuizPlayerPageModule);
    return AddonModQuizPlayerPageModule;
}());

//# sourceMappingURL=player.module.js.map

/***/ }),

/***/ 2366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sync__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_time__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_question_providers_helper__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_question_components_question_question__ = __webpack_require__(1066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_app_component__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_quiz__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_quiz_sync__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_helper__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classes_auto_save__ = __webpack_require__(2367);
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
 * Page that allows attempting a quiz.
 */
var AddonModQuizPlayerPage = /** @class */ (function () {
    function AddonModQuizPlayerPage(navParams, logger, translate, eventsProvider, sitesProvider, syncProvider, domUtils, popoverCtrl, timeUtils, quizProvider, quizHelper, quizSync, questionHelper, cdr, modalCtrl, navCtrl, mmApp) {
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.quizProvider = quizProvider;
        this.quizHelper = quizHelper;
        this.quizSync = quizSync;
        this.questionHelper = questionHelper;
        this.cdr = cdr;
        this.navCtrl = navCtrl;
        this.mmApp = mmApp;
        this.component = __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigaton = false; // Whether navigation needs to be reloaded because some data was sent to server.
        this.quizId = navParams.get('quizId');
        this.courseId = navParams.get('courseId');
        this.moduleUrl = navParams.get('moduleUrl');
        // Block the quiz so it cannot be synced.
        this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT, this.quizId);
        // Create the auto save instance.
        this.autoSave = new __WEBPACK_IMPORTED_MODULE_15__classes_auto_save__["a" /* AddonModQuizAutoSave */]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button', logger, popoverCtrl, questionHelper, quizProvider);
        // Create the navigation modal.
        this.navigationModal = modalCtrl.create('AddonModQuizNavigationModalPage', {
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
    AddonModQuizPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe(function (error) {
            _this.autoSaveError = error;
            _this.cdr.detectChanges();
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModQuizPlayerPage.prototype.ngOnDestroy = function () {
        // Stop auto save.
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        this.autoSaveErrorSubscription && this.autoSaveErrorSubscription.unsubscribe();
        // Unblock the quiz so it can be synced.
        this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].COMPONENT, this.quizId);
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModQuizPlayerPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave) {
                            return [2 /*return*/];
                        }
                        if (!(this.questions && this.questions.length && !this.showSummary)) return [3 /*break*/, 6];
                        modal = this.domUtils.showModalLoading('core.sending', true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 5, 6]);
                        return [4 /*yield*/, this.processAttempt(false, false)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        error_1 = _a.sent();
                        // Save attempt failed. Show confirmation.
                        modal.dismiss();
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('addon.mod_quiz.confirmleavequizonerror'))];
                    case 4:
                        _a.sent();
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [3 /*break*/, 6];
                    case 5:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    AddonModQuizPlayerPage.prototype.ionViewWillLeave = function () {
        this.mmApp.closeModal();
    };
    /**
     * Abort the quiz.
     */
    AddonModQuizPlayerPage.prototype.abortQuiz = function () {
        this.quizAborted = true;
    };
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param button Clicked button.
     */
    AddonModQuizPlayerPage.prototype.behaviourButtonClicked = function (button) {
        var _this = this;
        // Confirm that the user really wants to do it.
        this.domUtils.showConfirm(this.translate.instant('core.areyousure')).then(function () {
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            // Get the answers.
            return _this.prepareAnswers().then(function (answers) {
                // Add the clicked button data.
                answers[button.name] = button.value;
                // Behaviour checks are always in online.
                return _this.quizProvider.processAttempt(_this.quiz, _this.attempt, answers, _this.preflightData);
            }).then(function () {
                _this.reloadNavigaton = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                var scrollElement = _this.content.getScrollElement(), scrollTop = scrollElement.scrollTop || 0, scrollLeft = scrollElement.scrollLeft || 0;
                _this.loaded = false;
                _this.domUtils.scrollToTop(_this.content); // Scroll top so the spinner is seen.
                return _this.loadPage(_this.attempt.currentpage).finally(function () {
                    _this.loaded = true;
                    _this.domUtils.scrollTo(_this.content, scrollLeft, scrollTop);
                });
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error performing action.');
        });
    };
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means summary.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     */
    AddonModQuizPlayerPage.prototype.changePage = function (page, fromModal, slot) {
        var _this = this;
        if (page != -1 && (this.attempt.state == __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
            // We can't load a page if overdue or the local attempt is finished.
            return;
        }
        else if (page == this.attempt.currentpage && !this.showSummary && typeof slot != 'undefined') {
            // Navigating to a question in the current page.
            this.scrollToQuestion(slot);
            return;
        }
        else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.quiz.isSequential && page != -1)) {
            // If the user is navigating to the current page we do nothing.
            // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
            return;
        }
        else if (page === -1 && this.showSummary) {
            // Summary already shown.
            return;
        }
        this.loaded = false;
        this.domUtils.scrollToTop(this.content);
        // First try to save the attempt data. We only save it if we're not seeing the summary.
        var promise = this.showSummary ? Promise.resolve() : this.processAttempt(false, false);
        promise.then(function () {
            if (!_this.showSummary) {
                _this.reloadNavigaton = true; // Data sent to server, navigation should be reloaded.
            }
            // Attempt data successfully saved, load the page or summary.
            var subPromise;
            // Stop checking for changes during page change.
            _this.autoSave.stopCheckChangesProcess();
            if (page === -1) {
                subPromise = _this.loadSummary();
            }
            else {
                subPromise = _this.loadPage(page);
            }
            return subPromise.catch(function (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!_this.showSummary) {
                    _this.autoSave.startCheckChangesProcess(_this.quiz, _this.attempt, _this.preflightData, _this.offline);
                }
                _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            });
        }, function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
        }).finally(function () {
            _this.loaded = true;
            if (typeof slot != 'undefined') {
                // Scroll to the question. Give some time to the questions to render.
                setTimeout(function () {
                    _this.scrollToQuestion(slot);
                }, 2000);
            }
        });
    };
    /**
     * Convenience function to get the quiz data.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.fetchData = function () {
        var _this = this;
        // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
        return this.quizSync.waitForSync(this.quizId).then(function () {
            // Sync finished, now get the quiz.
            return _this.quizProvider.getQuizById(_this.courseId, _this.quizId);
        }).then(function (quizData) {
            _this.quiz = quizData;
            _this.quiz.isSequential = _this.quizProvider.isNavigationSequential(_this.quiz);
            if (_this.quizProvider.isQuizOffline(_this.quiz)) {
                // Quiz supports offline.
                return true;
            }
            else {
                // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                // If we have an unfinished offline attempt then we'll use offline mode.
                return _this.quizProvider.isLastAttemptOfflineUnfinished(_this.quiz);
            }
        }).then(function (offlineMode) {
            _this.offline = offlineMode;
            if (_this.quiz.timelimit > 0) {
                _this.quiz.readableTimeLimit = _this.timeUtils.formatTime(_this.quiz.timelimit);
            }
            // Get access information for the quiz.
            return _this.quizProvider.getQuizAccessInformation(_this.quiz.id, _this.offline, true);
        }).then(function (info) {
            _this.quizAccessInfo = info;
            // Get user attempts to determine last attempt.
            return _this.quizProvider.getUserAttempts(_this.quiz.id, 'all', true, _this.offline, true);
        }).then(function (attempts) {
            if (!attempts.length) {
                // There are no attempts, start a new one.
                _this.newAttempt = true;
            }
            else {
                var promises = [];
                // Get the last attempt. If it's finished, start a new one.
                _this.lastAttempt = attempts[attempts.length - 1];
                _this.newAttempt = _this.quizProvider.isAttemptFinished(_this.lastAttempt.state);
                // Load quiz last sync time.
                promises.push(_this.quizSync.getSyncTime(_this.quiz.id).then(function (time) {
                    _this.quiz.syncTime = time;
                    _this.quiz.syncTimeReadable = _this.quizSync.getReadableTimeFromTimestamp(time);
                }));
                // Load flag to show if attempts are finished but not synced.
                promises.push(_this.quizProvider.loadFinishedOfflineData(attempts));
                return Promise.all(promises);
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
        });
    };
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.finishAttempt = function (userFinish, timeUp) {
        var _this = this;
        var promise;
        // Show confirm if the user clicked the finish button and the quiz is in progress.
        if (!timeUp && this.attempt.state == __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS) {
            promise = this.domUtils.showConfirm(this.translate.instant('addon.mod_quiz.confirmclose'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            return _this.processAttempt(userFinish, timeUp).then(function () {
                // Trigger an event to notify the attempt was finished.
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_FINISHED_EVENT, {
                    quizId: _this.quizId,
                    attemptId: _this.attempt.id,
                    synced: !_this.offline
                }, _this.sitesProvider.getCurrentSiteId());
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'quiz' });
                // Leave the player.
                _this.forceLeave = true;
                _this.navCtrl.pop();
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
        });
    };
    /**
     * Fix sequence checks of current page.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.fixSequenceChecks = function () {
        var _this = this;
        // Get current page data again to get the latest sequencechecks.
        return this.quizProvider.getAttemptData(this.attempt.id, this.attempt.currentpage, this.preflightData, this.offline, true)
            .then(function (data) {
            var newSequenceChecks = {};
            data.questions.forEach(function (question) {
                newSequenceChecks[question.slot] = _this.questionHelper.getQuestionSequenceCheckFromHtml(question.html);
            });
            // Notify the new sequence checks to the components.
            _this.questionComponents.forEach(function (component) {
                component.updateSequenceCheck(newSequenceChecks);
            });
        });
    };
    /**
     * Get the input answers.
     *
     * @return Object with the answers.
     */
    AddonModQuizPlayerPage.prototype.getAnswers = function () {
        return this.questionHelper.getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    };
    /**
     * Initializes the timer if enabled.
     */
    AddonModQuizPlayerPage.prototype.initTimer = function () {
        if (this.attemptAccessInfo.endtime > 0) {
            // Quiz has an end time. Check if time left should be shown.
            if (this.quizProvider.shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime)) {
                this.endTime = this.attemptAccessInfo.endtime;
            }
            else {
                delete this.endTime;
            }
        }
    };
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadPage = function (page) {
        var _this = this;
        return this.quizProvider.getAttemptData(this.attempt.id, page, this.preflightData, this.offline, true).then(function (data) {
            // Update attempt, status could change during the execution.
            _this.attempt = data.attempt;
            _this.attempt.currentpage = page;
            _this.questions = data.questions;
            _this.nextPage = data.nextpage;
            _this.previousPage = _this.quiz.isSequential ? -1 : page - 1;
            _this.showSummary = false;
            _this.questions.forEach(function (question) {
                // Get the readable mark for each question.
                question.readableMark = _this.quizHelper.getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _this.questionHelper.extractQuestionInfoBox(question, '.info');
                // Set the preferred behaviour.
                question.preferredBehaviour = _this.quiz.preferredbehaviour;
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_this.quizProvider.isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed. We'll ignore errors in this call.
            _this.quizProvider.logViewAttempt(_this.attempt.id, page, _this.preflightData, _this.offline, _this.quiz).catch(function (error) {
                // Ignore errors.
            });
            // Start looking for changes.
            _this.autoSave.startCheckChangesProcess(_this.quiz, _this.attempt, _this.preflightData, _this.offline);
        });
    };
    /**
     * Load attempt summary.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadSummary = function () {
        var _this = this;
        this.summaryQuestions = [];
        return this.quizProvider.getAttemptSummary(this.attempt.id, this.preflightData, this.offline, true, true).then(function (qs) {
            _this.showSummary = true;
            _this.summaryQuestions = qs;
            _this.canReturn = _this.attempt.state == __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS && !_this.attempt.finishedOffline;
            _this.preventSubmitMessages = _this.quizProvider.getPreventSubmitMessages(_this.summaryQuestions);
            _this.attempt.dueDateWarning = _this.quizProvider.getAttemptDueDateWarning(_this.quiz, _this.attempt);
            // Log summary as viewed.
            _this.quizProvider.logViewAttemptSummary(_this.attempt.id, _this.preflightData, _this.quizId, _this.quiz.name)
                .catch(function (error) {
                // Ignore errors.
            });
        });
    };
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.loadNavigation = function () {
        var _this = this;
        // We use the attempt summary to build the navigation because it contains all the questions.
        return this.quizProvider.getAttemptSummary(this.attempt.id, this.preflightData, this.offline, true, true)
            .then(function (questions) {
            questions.forEach(function (question) {
                question.stateClass = _this.questionHelper.getQuestionStateClass(question.state);
            });
            _this.navigation = questions;
        });
    };
    /**
     * Open the navigation modal.
     *
     * @return Promise resolved when done.
     */
    AddonModQuizPlayerPage.prototype.openNavigation = function () {
        var _this = this;
        var promise;
        if (this.reloadNavigaton) {
            // Some data has changed, reload the navigation.
            var modal_1 = this.domUtils.showModalLoading();
            promise = this.loadNavigation().catch(function () {
                // Ignore errors.
            }).then(function () {
                modal_1.dismiss();
                _this.reloadNavigaton = false;
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.finally(function () {
            _this.navigationModal.present();
        });
    };
    // Prepare the answers to be sent for the attempt.
    AddonModQuizPlayerPage.prototype.prepareAnswers = function () {
        return this.questionHelper.prepareAnswers(this.questions, this.getAnswers(), this.offline);
    };
    /**
     * Process attempt.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @return Promise resolved when done.
     * @param retrying Whether we're retrying the change.
     */
    AddonModQuizPlayerPage.prototype.processAttempt = function (userFinish, timeUp, retrying) {
        var _this = this;
        // Get the answers to send.
        return this.prepareAnswers().then(function (answers) {
            // Send the answers.
            return _this.quizProvider.processAttempt(_this.quiz, _this.attempt, answers, _this.preflightData, userFinish, timeUp, _this.offline).catch(function (error) {
                if (error && error.errorcode == 'submissionoutofsequencefriendlymessage') {
                    // There was an error with the sequence check. Try to ammend it.
                    return _this.fixSequenceChecks().then(function () {
                        if (retrying) {
                            // We're already retrying, don't send the data again because it could cause an infinite loop.
                            return Promise.reject(error);
                        }
                        // Sequence checks updated, try to send the data again.
                        return _this.processAttempt(userFinish, timeUp, true);
                    }, function () {
                        return Promise.reject(error);
                    });
                }
                return Promise.reject(error);
            });
        }).then(function () {
            // Answers saved, cancel auto save.
            _this.autoSave.cancelAutoSave();
            _this.autoSave.hideAutoSaveError();
            if (_this.formElement) {
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, !_this.offline, _this.sitesProvider.getCurrentSiteId());
            }
        });
    };
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    AddonModQuizPlayerPage.prototype.scrollToQuestion = function (slot) {
        this.domUtils.scrollToElementBySelector(this.content, '#addon-mod_quiz-question-' + slot);
    };
    /**
     * Show connection error.
     *
     * @param ev Click event.
     */
    AddonModQuizPlayerPage.prototype.showConnectionError = function (ev) {
        this.autoSave.showAutoSaveError(ev);
    };
    /**
     * Convenience function to start the player.
     */
    AddonModQuizPlayerPage.prototype.start = function () {
        var _this = this;
        var promise;
        this.loaded = false;
        if (this.quizDataLoaded) {
            // Quiz data has been loaded, try to start or continue.
            promise = this.startOrContinueAttempt();
        }
        else {
            // Fetch data.
            promise = this.fetchData().then(function () {
                _this.quizDataLoaded = true;
                return _this.startOrContinueAttempt();
            });
        }
        promise.finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Start or continue an attempt.
     *
     * @return [description]
     */
    AddonModQuizPlayerPage.prototype.startOrContinueAttempt = function () {
        var _this = this;
        var attempt = this.newAttempt ? undefined : this.lastAttempt;
        // Get the preflight data and start attempt if needed.
        return this.quizHelper.getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt').then(function (attempt) {
            // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
            return _this.quizProvider.getAttemptAccessInformation(_this.quiz.id, attempt.id, _this.offline, true).then(function (info) {
                _this.attemptAccessInfo = info;
                _this.attempt = attempt;
                return _this.loadNavigation();
            }).then(function () {
                if (_this.attempt.state != __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */].ATTEMPT_OVERDUE && !_this.attempt.finishedOffline) {
                    // Attempt not overdue and not finished in offline, load page.
                    return _this.loadPage(_this.attempt.currentpage).then(function () {
                        _this.initTimer();
                    });
                }
                else {
                    // Attempt is overdue or finished in offline, we can only load the summary.
                    return _this.loadSummary();
                }
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
        });
    };
    /**
     * Quiz time has finished.
     */
    AddonModQuizPlayerPage.prototype.timeUp = function () {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModQuizPlayerPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_10__core_question_components_question_question__["a" /* CoreQuestionComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AddonModQuizPlayerPage.prototype, "questionComponents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('quizForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModQuizPlayerPage.prototype, "formElement", void 0);
    AddonModQuizPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-quiz-player',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\player\player.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text *ngIf="quiz" [text]="quiz.name" contextLevel="module" [contextInstanceId]="quiz.coursemodule" [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button id="addon-mod_quiz-connection-error-button" ion-button icon-only [hidden]="!autoSaveError" (click)="showConnectionError($event)" [attr.aria-label]="\'core.error\' | translate">\n\n                <ion-icon name="alert"></ion-icon>\n\n            </button>\n\n            <button *ngIf="navigation && navigation.length" ion-button icon-only [attr.aria-label]="\'addon.mod_quiz.opentoc\' | translate" (click)="openNavigation()">\n\n                <ion-icon name="bookmark"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Navigation arrows and time left. -->\n\n    <ion-toolbar *ngIf="loaded && endTime && questions && questions.length && !quizAborted && !showSummary" color="light" ion-fixed>\n\n        <ion-title>\n\n            <core-timer [endTime]="endTime" (finished)="timeUp()" [timerText]="\'addon.mod_quiz.timeleft\' | translate" align="center"></core-timer>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <a ion-button icon-only *ngIf="previousPage >= 0" (click)="changePage(previousPage)" [title]="\'core.previous\' | translate">\n\n                <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n            </a>\n\n            <a ion-button icon-only *ngIf="nextPage >= -1" (click)="changePage(nextPage)" [title]="\'core.next\' | translate">\n\n                <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n            </a>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n    <core-loading [hideUntil]="loaded" [class.core-has-fixed-timer]="endTime">\n\n        <!-- Navigation arrows and time left. -->\n\n        <ion-toolbar *ngIf="!endTime && questions && questions.length && !quizAborted && !showSummary" color="light">\n\n            <ion-buttons end>\n\n                <a ion-button icon-only *ngIf="previousPage >= 0" (click)="changePage(previousPage)" [title]="\'core.previous\' | translate">\n\n                    <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n                </a>\n\n                <a ion-button icon-only *ngIf="nextPage >= -1" (click)="changePage(nextPage)" [title]="\'core.next\' | translate">\n\n                    <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n                </a>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n        <!-- Button to start attempting. -->\n\n        <div padding *ngIf="!attempt">\n\n            <button ion-button block (click)="start()">{{ \'addon.mod_quiz.startattempt\' | translate }}</button>\n\n        </div>\n\n\n\n        <!-- Questions -->\n\n        <form name="addon-mod_quiz-player-form" *ngIf="questions && questions.length && !quizAborted && !showSummary" #quizForm>\n\n            <div *ngFor="let question of questions">\n\n                <ion-card id="addon-mod_quiz-question-{{question.slot}}">\n\n                    <!-- "Header" of the question. -->\n\n                    <ion-item-divider>\n\n                        <h2 *ngIf="question.number" class="inline">{{ \'core.question.questionno\' | translate:{$a: question.number} }}</h2>\n\n                        <h2 *ngIf="!question.number" class="inline">{{ \'core.question.information\' | translate }}</h2>\n\n                        <ion-note text-wrap item-end *ngIf="question.status || question.readableMark">\n\n                            <p *ngIf="question.status" class="block">{{question.status}}</p>\n\n                            <p *ngIf="question.readableMark">{{ question.readableMark }}</p>\n\n                        </ion-note>\n\n                    </ion-item-divider>\n\n                    <!-- Body of the question. -->\n\n                    <core-question text-wrap [question]="question" [component]="component" [componentId]="quiz.coursemodule" [attemptId]="attempt.id" [usageId]="attempt.uniqueid" [offlineEnabled]="offline" contextLevel="module" [contextInstanceId]="quiz.coursemodule" [courseId]="courseId" (onAbort)="abortQuiz()" (buttonClicked)="behaviourButtonClicked($event)"></core-question>\n\n                </ion-card>\n\n            </div>\n\n        </form>\n\n\n\n        <!-- Go to next or previous page. -->\n\n        <ion-grid text-wrap *ngIf="questions && questions.length && !quizAborted && !showSummary">\n\n            <ion-row>\n\n                <ion-col *ngIf="previousPage >= 0" >\n\n                    <button ion-button block icon-start color="light" (click)="changePage(previousPage)">\n\n                        <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n\n                        {{ \'core.previous\' | translate }}\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col *ngIf="nextPage >= -1">\n\n                    <button ion-button block icon-end (click)="changePage(nextPage)">\n\n                        {{ \'core.next\' | translate }}\n\n                        <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <!-- Summary -->\n\n        <ion-card *ngIf="!quizAborted && showSummary && summaryQuestions && summaryQuestions.length" class="addon-mod_quiz-table">\n\n            <ion-card-header text-wrap>\n\n                <h2>{{ \'addon.mod_quiz.summaryofattempt\' | translate }}</h2>\n\n            </ion-card-header>\n\n            <!-- "Header" of the summary table. -->\n\n            <ion-item text-wrap>\n\n                <ion-row align-items-center>\n\n                    <ion-col col-3 text-center class="hidden-phone"><b>{{ \'addon.mod_quiz.question\' | translate }}</b></ion-col>\n\n                    <ion-col col-3 text-center class="hidden-tablet"><b>#</b></ion-col>\n\n                    <ion-col col-9 text-center><b>{{ \'addon.mod_quiz.status\' | translate }}</b></ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n            <!-- Lift of questions of the summary table. -->\n\n            <ng-container *ngFor="let question of summaryQuestions">\n\n                <a ion-item (click)="changePage(question.page, false, question.slot)" *ngIf="question.number" [attr.aria-label]="\'core.question.questionno\' | translate:{$a: question.number}" [attr.detail-push]="!quiz.isSequential && canReturn ? true : null">\n\n                    <ion-row align-items-center>\n\n                        <ion-col col-3 text-center>{{ question.number }}</ion-col>\n\n                        <ion-col col-9 text-center text-wrap>{{ question.status }}</ion-col>\n\n                    </ion-row>\n\n                </a>\n\n            </ng-container>\n\n            <!-- Button to return to last page seen. -->\n\n            <ion-item *ngIf="canReturn">\n\n                <a ion-button block (click)="changePage(attempt.currentpage)">{{ \'addon.mod_quiz.returnattempt\' | translate }}</a>\n\n            </ion-item>\n\n            <!-- Due date warning. -->\n\n            <ion-item text-wrap *ngIf="attempt.dueDateWarning">\n\n                {{ attempt.dueDateWarning }}\n\n            </ion-item>\n\n            <!-- Time left (if quiz is timed). -->\n\n            <core-timer *ngIf="endTime" [endTime]="endTime" (finished)="timeUp()" [timerText]="\'addon.mod_quiz.timeleft\' | translate"></core-timer>\n\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\n\n            <ion-item text-wrap *ngIf="preventSubmitMessages.length">\n\n                <p class="item-heading">{{ \'addon.mod_quiz.cannotsubmitquizdueto\' | translate }}</p>\n\n                <p *ngFor="let message of preventSubmitMessages">{{message}}</p>\n\n                <a ion-button block icon-end [href]="moduleUrl" core-link>\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                    <ion-icon name="open"></ion-icon>\n\n                </a>\n\n            </ion-item>\n\n            <!-- Button to submit the quiz. -->\n\n            <ion-item *ngIf="!attempt.finishedOffline && !preventSubmitMessages.length">\n\n                <a ion-button block (click)="finishAttempt(true)">{{ \'addon.mod_quiz.submitallandfinish\' | translate }}</a>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <!-- Quiz aborted -->\n\n        <ion-card *ngIf="attempt && (((!questions || !questions.length) && !showSummary) || quizAborted)">\n\n            <ion-item text-wrap>\n\n                <p>{{ \'addon.mod_quiz.errorparsequestions\' | translate }}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <a ion-button block icon-end [href]="moduleUrl" core-link>\n\n                    {{ \'core.openinbrowser\' | translate }}\n\n                    <ion-icon name="open"></ion-icon>\n\n                </a>\n\n            </ion-item>\n\n        </ion-card>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\quiz\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_logger__["b" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_time__["b" /* CoreTimeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_quiz__["a" /* AddonModQuizProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_helper__["a" /* AddonModQuizHelperProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_quiz_sync__["a" /* AddonModQuizSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_question_providers_helper__["a" /* CoreQuestionHelperProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__app_app_component__["a" /* MoodleMobileApp */]])
    ], AddonModQuizPlayerPage);
    return AddonModQuizPlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 2367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModQuizAutoSave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connection_error_connection_error__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
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


/**
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
var AddonModQuizAutoSave = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     * @param loggerProvider CoreLoggerProvider instance.
     * @param popoverCtrl PopoverController instance.
     * @param questionHelper CoreQuestionHelperProvider instance.
     * @param quizProvider AddonModQuizProvider instance.
     */
    function AddonModQuizAutoSave(formName, buttonSelector, loggerProvider, popoverCtrl, questionHelper, quizProvider) {
        var _this = this;
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.popoverCtrl = popoverCtrl;
        this.questionHelper = questionHelper;
        this.quizProvider = quizProvider;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = loggerProvider.getInstance('AddonModQuizAutoSave');
        // Create the popover.
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_connection_error_connection_error__["a" /* AddonModQuizConnectionErrorComponent */]);
        this.popover.onDidDismiss(function () {
            _this.popoverShown = false;
        });
        // Create the observable to notify if an error happened.
        this.errorObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    AddonModQuizAutoSave.prototype.cancelAutoSave = function () {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    };
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.checkChanges = function (quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        var answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
        }
        else {
            // Check if answers have changed.
            var equal = true;
            for (var name_1 in answers) {
                if (this.previousAnswers[name_1] != answers[name_1]) {
                    equal = false;
                    break;
                }
            }
            if (!equal) {
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
            this.previousAnswers = answers;
        }
    };
    /**
     * Get answers from a form.
     *
     * @return Answers.
     */
    AddonModQuizAutoSave.prototype.getAnswers = function () {
        return this.questionHelper.getAnswersFromForm(document.forms[this.formName]);
    };
    /**
     * Hide the auto save error.
     */
    AddonModQuizAutoSave.prototype.hideAutoSaveError = function () {
        this.errorObservable.next(false);
        this.popover.dismiss();
    };
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return Observable.
     */
    AddonModQuizAutoSave.prototype.onError = function () {
        return this.errorObservable;
    };
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.setAutoSaveTimer = function (quiz, attempt, preflightData, offline) {
        var _this = this;
        // Don't schedule if already shceduled or quiz is almost closed.
        if (quiz.autosaveperiod && !this.autoSaveTimeout && !this.quizProvider.isAttemptTimeNearlyOver(quiz, attempt)) {
            // Schedule save.
            this.autoSaveTimeout = setTimeout(function () {
                var answers = _this.getAnswers();
                _this.cancelAutoSave();
                _this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
                _this.quizProvider.saveAttempt(quiz, attempt, answers, preflightData, offline).then(function () {
                    // Save successful, we can hide the connection error if it was shown.
                    _this.hideAutoSaveError();
                }).catch(function (error) {
                    // Error auto-saving. Show error and set timer again.
                    _this.logger.warn('Error auto-saving data.', error);
                    // If there was no error already, show the error message.
                    if (!_this.errorObservable.getValue()) {
                        _this.errorObservable.next(true);
                        _this.showAutoSaveError();
                    }
                    // Try again.
                    _this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
                });
            }, quiz.autosaveperiod * 1000);
        }
    };
    /**
     * Show an error popover due to an auto save error.
     */
    AddonModQuizAutoSave.prototype.showAutoSaveError = function (ev) {
        // Don't show popover if it was already shown.
        if (!this.popoverShown) {
            this.popoverShown = true;
            // If no event is provided, simulate it targeting the button.
            this.popover.present({
                ev: ev || { target: document.querySelector(this.buttonSelector) }
            });
        }
    };
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    AddonModQuizAutoSave.prototype.startCheckChangesProcess = function (quiz, attempt, preflightData, offline) {
        var _this = this;
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = setTimeout(function () {
            _this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = setInterval(function () {
            _this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    };
    /**
     * Stops the periodical check for changes.
     */
    AddonModQuizAutoSave.prototype.stopCheckChangesProcess = function () {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    };
    return AddonModQuizAutoSave;
}());

//# sourceMappingURL=auto-save.js.map

/***/ })

});
//# sourceMappingURL=7.js.map