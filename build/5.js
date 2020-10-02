webpackJsonp([5],{

/***/ 2197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopSubmissionPageModule", function() { return AddonModWorkshopSubmissionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__submission__ = __webpack_require__(2356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_editor_components_components_module__ = __webpack_require__(133);
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








var AddonModWorkshopSubmissionPageModule = /** @class */ (function () {
    function AddonModWorkshopSubmissionPageModule() {
    }
    AddonModWorkshopSubmissionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__submission__["a" /* AddonModWorkshopSubmissionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* AddonModWorkshopComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_editor_components_components_module__["a" /* CoreEditorComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__submission__["a" /* AddonModWorkshopSubmissionPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWorkshopSubmissionPageModule);
    return AddonModWorkshopSubmissionPageModule;
}());

//# sourceMappingURL=submission.module.js.map

/***/ }),

/***/ 2356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWorkshopSubmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sync__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_course_providers_course__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_grades_providers_helper__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_assessment_strategy_assessment_strategy__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_workshop__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_helper__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_offline__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_sync__ = __webpack_require__(255);
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
 * Page that displays a workshop submission.
 */
var AddonModWorkshopSubmissionPage = /** @class */ (function () {
    function AddonModWorkshopSubmissionPage(navParams, sitesProvider, workshopProvider, workshopOffline, syncProvider, workshopHelper, navCtrl, textUtils, domUtils, fb, translate, eventsProvider, courseProvider, content, gradesHelper, userProvider) {
        var _this = this;
        this.workshopProvider = workshopProvider;
        this.workshopOffline = workshopOffline;
        this.syncProvider = syncProvider;
        this.workshopHelper = workshopHelper;
        this.navCtrl = navCtrl;
        this.textUtils = textUtils;
        this.domUtils = domUtils;
        this.fb = fb;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.courseProvider = courseProvider;
        this.content = content;
        this.gradesHelper = gradesHelper;
        this.userProvider = userProvider;
        this.loaded = false;
        this.ownAssessment = false;
        this.canAddFeedback = false;
        this.canEdit = false;
        this.canDelete = false;
        this.originalEvaluation = {
            published: '',
            text: '',
            grade: ''
        };
        this.hasOffline = false;
        this.component = __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].COMPONENT;
        this.forceLeave = false;
        this.isDestroyed = false;
        this.module = navParams.get('module');
        this.workshop = navParams.get('workshop');
        this.access = navParams.get('access');
        this.courseId = navParams.get('courseId');
        this.profile = navParams.get('profile');
        this.submissionInfo = navParams.get('submission') || {};
        this.assessment = navParams.get('assessment') || null;
        this.title = this.module.name;
        this.workshopId = this.module.instance;
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.siteId = sitesProvider.getCurrentSiteId();
        this.submissionId = this.submissionInfo.submissionid || this.submissionInfo.id;
        this.userId = this.submissionInfo.userid || null;
        this.strategy = (this.assessment && this.assessment.strategy) || (this.workshop && this.workshop.strategy);
        this.assessmentId = this.assessment && (this.assessment.assessmentid || this.assessment.id);
        this.assessmentUserId = this.assessment && (this.assessment.reviewerid || this.assessment.userid);
        this.feedbackForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
        this.feedbackForm.addControl('published', this.fb.control(''));
        this.feedbackForm.addControl('grade', this.fb.control(''));
        this.feedbackForm.addControl('text', this.fb.control(''));
        this.obsAssessmentSaved = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].ASSESSMENT_SAVED, function (data) {
            _this.eventReceived(data);
        }, this.siteId);
        // Refresh workshop on sync.
        this.syncObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_16__providers_sync__["a" /* AddonModWorkshopSyncProvider */].AUTO_SYNCED, function (data) {
            // Update just when all database is synced.
            _this.eventReceived(data);
        }, this.siteId);
    }
    /**
     * Component being initialized.
     */
    AddonModWorkshopSubmissionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchSubmissionData().then(function () {
            _this.workshopProvider.logViewSubmission(_this.submissionId, _this.workshopId, _this.workshop.name).then(function () {
                _this.courseProvider.checkModuleCompletion(_this.courseId, _this.module.completiondata);
            }).catch(function () {
                // Ignore errors.
            });
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModWorkshopSubmissionPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var assessmentHasChanged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assessmentHasChanged = this.assessmentStrategy && this.assessmentStrategy.hasDataChanged();
                        if (this.forceLeave || (!this.hasEvaluationChanged() && !assessmentHasChanged)) {
                            return [2 /*return*/];
                        }
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.siteId);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Goto edit submission page.
     */
    AddonModWorkshopSubmissionPage.prototype.editSubmission = function () {
        var params = {
            module: module,
            access: this.access,
            courseid: this.courseId,
            submissionId: this.submission.id
        };
        this.navCtrl.push('AddonModWorkshopEditSubmissionPage', params);
    };
    /**
     * Function called when we receive an event of submission changes.
     *
     * @param data Event data received.
     */
    AddonModWorkshopSubmissionPage.prototype.eventReceived = function (data) {
        if (this.workshopId === data.workshopId) {
            this.domUtils.scrollToTop(this.content);
            this.loaded = false;
            this.refreshAllData();
        }
    };
    /**
     * Fetch the submission data.
     *
     * @return Resolved when done.
     */
    AddonModWorkshopSubmissionPage.prototype.fetchSubmissionData = function () {
        var _this = this;
        return this.workshopHelper.getSubmissionById(this.workshopId, this.submissionId).then(function (submissionData) {
            var promises = [];
            _this.submission = submissionData;
            _this.submission.attachmentfiles = submissionData.attachmentfiles || [];
            _this.submission.submissiongrade = _this.submissionInfo && _this.submissionInfo.submissiongrade;
            _this.submission.gradinggrade = _this.submissionInfo && _this.submissionInfo.gradinggrade;
            _this.submission.submissiongradeover = _this.submissionInfo && _this.submissionInfo.submissiongradeover;
            _this.userId = submissionData.authorid || _this.userId;
            _this.canEdit = _this.currentUserId == _this.userId && _this.access.cansubmit && _this.access.modifyingsubmissionallowed;
            _this.canDelete = _this.access.candeletesubmissions;
            _this.canAddFeedback = !_this.assessmentId && _this.workshop.phase > __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].PHASE_ASSESSMENT &&
                _this.workshop.phase < __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].PHASE_CLOSED && _this.access.canoverridegrades;
            _this.ownAssessment = false;
            if (_this.access.canviewallassessments) {
                // Get new data, different that came from stateParams.
                promises.push(_this.workshopProvider.getSubmissionAssessments(_this.workshopId, _this.submissionId)
                    .then(function (subAssessments) {
                    // Only allow the student to delete their own submission if it's still editable and hasn't been assessed.
                    if (_this.canDelete) {
                        _this.canDelete = !subAssessments.length;
                    }
                    _this.submissionInfo.reviewedby = subAssessments;
                    _this.submissionInfo.reviewedby.forEach(function (assessment) {
                        assessment.userid = assessment.reviewerid;
                        assessment = _this.workshopHelper.realGradeValue(_this.workshop, assessment);
                        if (_this.currentUserId == assessment.userid) {
                            _this.ownAssessment = assessment;
                            assessment.ownAssessment = true;
                        }
                    });
                }));
            }
            else if (_this.currentUserId == _this.userId && _this.assessmentId) {
                // Get new data, different that came from stateParams.
                promises.push(_this.workshopProvider.getAssessment(_this.workshopId, _this.assessmentId).then(function (assessment) {
                    // Only allow the student to delete their own submission if it's still editable and hasn't been assessed.
                    if (_this.canDelete) {
                        _this.canDelete = !assessment;
                    }
                    assessment = _this.parseAssessment(assessment);
                    _this.submissionInfo.reviewedby = [assessment];
                }));
            }
            else if (_this.workshop.phase == __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].PHASE_CLOSED && _this.userId == _this.currentUserId) {
                _this.workshopProvider.getSubmissionAssessments(_this.workshopId, _this.submissionId).then(function (assessments) {
                    _this.submissionInfo.reviewedby = assessments.map(function (assessment) {
                        return _this.parseAssessment(assessment);
                    });
                });
            }
            if (_this.canAddFeedback || _this.workshop.phase == __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].PHASE_CLOSED) {
                _this.evaluate = {
                    published: submissionData.published,
                    text: submissionData.feedbackauthor || ''
                };
            }
            if (_this.canAddFeedback) {
                if (!_this.isDestroyed) {
                    // Block the workshop.
                    _this.syncProvider.blockOperation(_this.component, _this.workshopId);
                }
                var defaultGrade_1 = _this.translate.instant('addon.mod_workshop.notoverridden');
                promises.push(_this.gradesHelper.makeGradesMenu(_this.workshop.grade, undefined, defaultGrade_1, -1).then(function (grades) {
                    _this.evaluationGrades = grades;
                    _this.evaluate.grade = {
                        label: _this.gradesHelper.getGradeLabelFromValue(grades, _this.submissionInfo.submissiongradeover) ||
                            defaultGrade_1,
                        value: _this.submissionInfo.submissiongradeover || -1
                    };
                    return _this.workshopOffline.getEvaluateSubmission(_this.workshopId, _this.submissionId)
                        .then(function (offlineSubmission) {
                        _this.hasOffline = true;
                        _this.evaluate.published = offlineSubmission.published;
                        _this.evaluate.text = offlineSubmission.feedbacktext;
                        _this.evaluate.grade = {
                            label: _this.gradesHelper.getGradeLabelFromValue(grades, offlineSubmission.gradeover) || defaultGrade_1,
                            value: offlineSubmission.gradeover || -1
                        };
                    }).catch(function () {
                        _this.hasOffline = false;
                        // Ignore errors.
                    }).finally(function () {
                        _this.originalEvaluation.published = _this.evaluate.published;
                        _this.originalEvaluation.text = _this.evaluate.text;
                        _this.originalEvaluation.grade = _this.evaluate.grade.value;
                        _this.feedbackForm.controls['published'].setValue(_this.evaluate.published);
                        _this.feedbackForm.controls['grade'].setValue(_this.evaluate.grade.value);
                        _this.feedbackForm.controls['text'].setValue(_this.evaluate.text);
                    });
                }));
            }
            else if (_this.workshop.phase == __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].PHASE_CLOSED && submissionData.gradeoverby &&
                _this.evaluate && _this.evaluate.text) {
                promises.push(_this.userProvider.getProfile(submissionData.gradeoverby, _this.courseId, true).then(function (profile) {
                    _this.evaluateByProfile = profile;
                }));
            }
            if (_this.assessmentId && !_this.access.assessingallowed && _this.assessment.feedbackreviewer &&
                _this.assessment.gradinggradeoverby) {
                promises.push(_this.userProvider.getProfile(_this.assessment.gradinggradeoverby, _this.courseId, true)
                    .then(function (profile) {
                    _this.evaluateGradingByProfile = profile;
                }));
            }
            return Promise.all(promises);
        }).then(function () {
            return _this.workshopOffline.getSubmissions(_this.workshopId).then(function (submissionsActions) {
                var actions = _this.workshopHelper.filterSubmissionActions(submissionsActions, _this.submissionId);
                return _this.workshopHelper.applyOfflineData(_this.submission, actions).then(function (submission) {
                    _this.submission = submission;
                });
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Parse assessment to be shown.
     *
     * @param  assessment Original assessment.
     * @return Parsed assessment.
     */
    AddonModWorkshopSubmissionPage.prototype.parseAssessment = function (assessment) {
        assessment.userid = assessment.reviewerid;
        assessment = this.workshopHelper.realGradeValue(this.workshop, assessment);
        if (this.currentUserId == assessment.userid) {
            this.ownAssessment = assessment;
            assessment.ownAssessment = true;
        }
        return assessment;
    };
    /**
     * Force leaving the page, without checking for changes.
     */
    AddonModWorkshopSubmissionPage.prototype.forceLeavePage = function () {
        this.forceLeave = true;
        this.navCtrl.pop();
    };
    /**
     * Check if data has changed.
     *
     * @return True if changed, false otherwise.
     */
    AddonModWorkshopSubmissionPage.prototype.hasEvaluationChanged = function () {
        if (!this.loaded || !this.access.canoverridegrades) {
            return false;
        }
        var inputData = this.feedbackForm.value;
        if (this.originalEvaluation.published != inputData.published) {
            return true;
        }
        if (this.originalEvaluation.text != inputData.text) {
            return true;
        }
        if (this.originalEvaluation.grade != inputData.grade) {
            return true;
        }
        return false;
    };
    /**
     * Convenience function to refresh all the data.
     *
     * @return Resolved when done.
     */
    AddonModWorkshopSubmissionPage.prototype.refreshAllData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.workshopProvider.invalidateSubmissionData(this.workshopId, this.submissionId));
        promises.push(this.workshopProvider.invalidateSubmissionsData(this.workshopId));
        promises.push(this.workshopProvider.invalidateSubmissionAssesmentsData(this.workshopId, this.submissionId));
        if (this.assessmentId) {
            promises.push(this.workshopProvider.invalidateAssessmentFormData(this.workshopId, this.assessmentId));
            promises.push(this.workshopProvider.invalidateAssessmentData(this.workshopId, this.assessmentId));
        }
        if (this.assessmentUserId) {
            promises.push(this.workshopProvider.invalidateReviewerAssesmentsData(this.workshopId, this.assessmentId));
        }
        return Promise.all(promises).finally(function () {
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].ASSESSMENT_INVALIDATED, _this.siteId);
            return _this.fetchSubmissionData();
        });
    };
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    AddonModWorkshopSubmissionPage.prototype.refreshSubmission = function (refresher) {
        if (this.loaded) {
            this.refreshAllData().finally(function () {
                refresher.complete();
            });
        }
    };
    /**
     * Save the assessment.
     */
    AddonModWorkshopSubmissionPage.prototype.saveAssessment = function () {
        var _this = this;
        if (this.assessmentStrategy && this.assessmentStrategy.hasDataChanged()) {
            this.assessmentStrategy.saveAssessment().then(function () {
                _this.forceLeavePage();
            }).catch(function () {
                // Error, stay on the page.
            });
        }
        else {
            // Nothing to save, just go back.
            this.forceLeavePage();
        }
    };
    /**
     * Save the submission evaluation.
     */
    AddonModWorkshopSubmissionPage.prototype.saveEvaluation = function () {
        var _this = this;
        // Check if data has changed.
        if (this.hasEvaluationChanged()) {
            this.sendEvaluation().then(function () {
                _this.forceLeavePage();
            });
        }
        else {
            // Nothing to save, just go back.
            this.forceLeavePage();
        }
    };
    /**
     * Sends the evaluation to be saved on the server.
     *
     * @return Resolved when done.
     */
    AddonModWorkshopSubmissionPage.prototype.sendEvaluation = function () {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        var inputData = this.feedbackForm.value;
        inputData.grade = inputData.grade >= 0 ? inputData.grade : '';
        // Add some HTML to the message if needed.
        inputData.text = this.textUtils.formatHtmlLines(inputData.text);
        // Try to send it to server.
        return this.workshopProvider.evaluateSubmission(this.workshopId, this.submissionId, this.courseId, inputData.text, inputData.published, inputData.grade).then(function (result) {
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, !!result, _this.siteId);
            var data = {
                workshopId: _this.workshopId,
                cmId: _this.module.cmid,
                submissionId: _this.submissionId
            };
            return _this.workshopProvider.invalidateSubmissionData(_this.workshopId, _this.submissionId).finally(function () {
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].SUBMISSION_CHANGED, data, _this.siteId);
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Cannot save submission evaluation');
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Perform the submission delete action.
     */
    AddonModWorkshopSubmissionPage.prototype.deleteSubmission = function () {
        var _this = this;
        this.domUtils.showDeleteConfirm('addon.mod_workshop.submissiondeleteconfirm').then(function () {
            var modal = _this.domUtils.showModalLoading('core.deleting', true);
            var success = false;
            _this.workshopProvider.deleteSubmission(_this.workshopId, _this.submissionId, _this.courseId).then(function () {
                success = true;
                return _this.workshopProvider.invalidateSubmissionData(_this.workshopId, _this.submissionId);
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'Cannot delete submission');
            }).finally(function () {
                modal.dismiss();
                if (success) {
                    var data = {
                        workshopId: _this.workshopId,
                        cmId: _this.module.cmid,
                        submissionId: _this.submissionId
                    };
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].SUBMISSION_CHANGED, data, _this.siteId);
                    _this.forceLeavePage();
                }
            });
        });
    };
    /**
     * Undo the submission delete action.
     *
     * @return Resolved when done.
     */
    AddonModWorkshopSubmissionPage.prototype.undoDeleteSubmission = function () {
        var _this = this;
        return this.workshopOffline.deleteSubmissionAction(this.workshopId, this.submissionId, 'delete').finally(function () {
            var data = {
                workshopId: _this.workshopId,
                cmId: _this.module.cmid,
                submissionId: _this.submissionId
            };
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */].SUBMISSION_CHANGED, data, _this.siteId);
            return _this.refreshAllData();
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModWorkshopSubmissionPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.syncObserver && this.syncObserver.off();
        this.obsAssessmentSaved && this.obsAssessmentSaved.off();
        // Restore original back functions.
        this.syncProvider.unblockOperation(this.component, this.workshopId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_12__components_assessment_strategy_assessment_strategy__["a" /* AddonModWorkshopAssessmentStrategyComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_assessment_strategy_assessment_strategy__["a" /* AddonModWorkshopAssessmentStrategyComponent */])
    ], AddonModWorkshopSubmissionPage.prototype, "assessmentStrategy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('feedbackFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModWorkshopSubmissionPage.prototype, "formElement", void 0);
    AddonModWorkshopSubmissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-workshop-submission-page',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\workshop\pages\submission\submission.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n        <ion-buttons end [hidden]="!loaded">\n\n            <button *ngIf="assessmentId && access.assessingallowed" ion-button clear (click)="saveAssessment()" [attr.aria-label]="\'core.save\' | translate">\n\n                {{ \'core.save\' | translate }}\n\n            </button>\n\n            <button *ngIf="canAddFeedback" ion-button clear (click)="saveEvaluation()" [attr.aria-label]="\'core.save\' | translate">\n\n                {{ \'core.save\' | translate }}\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshSubmission($event)" *ngIf="!((assessmentId && access.assessingallowed) || canAddFeedback)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list *ngIf="submission">\n\n            <addon-mod-workshop-submission [submission]="submission" [courseId]="courseId" [module]="module" [workshop]="workshop" [access]="access"></addon-mod-workshop-submission>\n\n            <ion-item text-wrap *ngIf="canEdit || canDelete">\n\n                <button ion-button block icon-start *ngIf="canEdit" (click)="editSubmission()">\n\n                    <ion-icon name="create"></ion-icon>\n\n                    {{ \'addon.mod_workshop.editsubmission\' | translate }}\n\n                </button>\n\n                <button ion-button block icon-start *ngIf="!submission.deleted && canDelete" color="danger" (click)="deleteSubmission()">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                    {{ \'addon.mod_workshop.deletesubmission\' | translate }}\n\n                </button>\n\n                <button ion-button block icon-start outline *ngIf="submission.deleted && canDelete" color="danger" (click)="undoDeleteSubmission()">\n\n                    <ion-icon name="undo"></ion-icon>\n\n                    {{ \'core.restore\' | translate }}\n\n                </button>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="!canAddFeedback && evaluate && evaluate.text">\n\n            <ion-item text-wrap>\n\n                <ion-avatar core-user-avatar *ngIf="evaluateByProfile" [user]="evaluateByProfile" item-start [courseId]="courseId" [userId]="evaluateByProfile.id"></ion-avatar>\n\n                <h2 *ngIf="evaluateByProfile && evaluateByProfile.fullname">{{ \'addon.mod_workshop.feedbackby\' | translate : {$a: evaluateByProfile.fullname} }}</h2>\n\n                <core-format-text [text]="evaluate.text" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="ownAssessment && !assessment">\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'addon.mod_workshop.yourassessment\' | translate }}</h2>\n\n            </ion-item>\n\n            <addon-mod-workshop-assessment [submission]="submission" [assessment]="ownAssessment" [courseId]="courseId" summary="true" [access]="access" [module]="module" [workshop]="workshop"></addon-mod-workshop-assessment>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="submissionInfo && submissionInfo.reviewedby && submissionInfo.reviewedby.length && !assessment">\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'addon.mod_workshop.receivedgrades\' | translate }}</h2>\n\n            </ion-item>\n\n            <ng-container *ngFor="let reviewer of submissionInfo.reviewedby">\n\n                <addon-mod-workshop-assessment *ngIf="!reviewer.ownAssessment" [submission]="submission" [assessment]="reviewer" [courseId]="courseId" summary="true" [access]="access" [workshop]="workshop"></addon-mod-workshop-assessment>\n\n            </ng-container>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="submissionInfo && submissionInfo.reviewerof && submissionInfo.reviewerof.length && !assessment">\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'addon.mod_workshop.givengrades\' | translate }}</h2>\n\n            </ion-item>\n\n            <addon-mod-workshop-assessment *ngFor="let reviewer of submissionInfo.reviewerof" [assessment]="reviewer" [courseId]="courseId" summary="true" [workshop]="workshop" [access]="access"></addon-mod-workshop-assessment>\n\n        </ion-list>\n\n\n\n        <form ion-list [formGroup]="feedbackForm" *ngIf="canAddFeedback" #feedbackFormEl>\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'addon.mod_workshop.feedbackauthor\' | translate }}</h2>\n\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="access.canpublishsubmissions">\n\n                <ion-label>{{ \'addon.mod_workshop.publishsubmission\' | translate }}</ion-label>\n\n                <ion-toggle formControlName="published"></ion-toggle>\n\n                <p class="item-help">{{ \'addon.mod_workshop.publishsubmission_help\' | translate }}</p>\n\n            </ion-item>\n\n\n\n            <ion-item text-wrap>\n\n                <h2>{{ \'addon.mod_workshop.gradecalculated\' | translate }}</h2>\n\n                <p>{{ submission.submissiongrade }}</p>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked>{{ \'addon.mod_workshop.gradeover\' | translate }}</ion-label>\n\n                <ion-select formControlName="grade" interface="action-sheet">\n\n                    <ion-option *ngFor="let grade of evaluationGrades" [value]="grade.value">{{grade.label}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>{{ \'addon.mod_workshop.feedbackauthor\' | translate }}</ion-label>\n\n                <core-rich-text-editor item-content [control]="feedbackForm.controls[\'text\']" formControlName="text" [autoSave]="true" contextLevel="module" [contextInstanceId]="module.id" elementId="feedbackauthor_editor" [draftExtraParams]="{id: submissionId}"></core-rich-text-editor>\n\n            </ion-item>\n\n        </form>\n\n\n\n        <addon-mod-workshop-assessment-strategy *ngIf="assessmentId" [workshop]="workshop" [access]="access" [assessmentId]="assessmentId" [userId]="assessmentUserId" [strategy]="strategy" [edit]="access.assessingallowed"></addon-mod-workshop-assessment-strategy>\n\n\n\n        <ion-list *ngIf="assessmentId && !access.assessingallowed && assessment.feedbackreviewer">\n\n            <ion-item text-wrap>\n\n                <ion-avatar core-user-avatar *ngIf="evaluateGradingByProfile" [user]="evaluateGradingByProfile" item-start [courseId]="courseId" [userId]="evaluateGradingByProfile.id"></ion-avatar>\n\n                <h2 *ngIf="evaluateGradingByProfile && evaluateGradingByProfile.fullname">{{ \'addon.mod_workshop.feedbackby\' | translate : {$a: evaluateGradingByProfile.fullname} }}</h2>\n\n                <core-format-text [text]="assessment.feedbackreviewer" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text>\n\n            </ion-item>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\workshop\pages\submission\submission.html"*/,
        }),
        __param(13, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_workshop__["a" /* AddonModWorkshopProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_offline__["a" /* AddonModWorkshopOfflineProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_sync__["a" /* CoreSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_helper__["a" /* AddonModWorkshopHelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_text__["b" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_course_providers_course__["b" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */],
            __WEBPACK_IMPORTED_MODULE_11__core_grades_providers_helper__["a" /* CoreGradesHelperProvider */], __WEBPACK_IMPORTED_MODULE_10__core_user_providers_user__["b" /* CoreUserProvider */]])
    ], AddonModWorkshopSubmissionPage);
    return AddonModWorkshopSubmissionPage;
}());

//# sourceMappingURL=submission.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2357)(module)))

/***/ }),

/***/ 2357:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

});
//# sourceMappingURL=5.js.map