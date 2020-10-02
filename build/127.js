webpackJsonp([127],{

/***/ 2170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditPageModule", function() { return AddonModAssignEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit__ = __webpack_require__(2326);
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







var AddonModAssignEditPageModule = /** @class */ (function () {
    function AddonModAssignEditPageModule() {
    }
    AddonModAssignEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__edit__["a" /* AddonModAssignEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* AddonModAssignComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__edit__["a" /* AddonModAssignEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModAssignEditPageModule);
    return AddonModAssignEditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 2326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModAssignEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sync__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fileuploader_providers_helper__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_assign__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_assign_offline__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_assign_sync__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_helper__ = __webpack_require__(137);
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
 * Page that allows adding or editing an assigment submission.
 */
var AddonModAssignEditPage = /** @class */ (function () {
    function AddonModAssignEditPage(navParams, navCtrl, sitesProvider, syncProvider, domUtils, translate, fileUploaderHelper, eventsProvider, assignProvider, assignOfflineProvider, assignHelper, assignSyncProvider) {
        this.navCtrl = navCtrl;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.fileUploaderHelper = fileUploaderHelper;
        this.eventsProvider = eventsProvider;
        this.assignProvider = assignProvider;
        this.assignOfflineProvider = assignOfflineProvider;
        this.assignHelper = assignHelper;
        this.assignSyncProvider = assignSyncProvider;
        this.saveOffline = false; // Whether to save data in offline.
        this.hasOffline = false; // Whether the assignment has offline data.
        this.isDestroyed = false; // Whether the component has been destroyed.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.moduleId = navParams.get('moduleId');
        this.courseId = navParams.get('courseId');
        this.userId = sitesProvider.getCurrentSiteUserId(); // Right now we can only edit current user's submissions.
        this.isBlind = !!navParams.get('blindId');
        this.editText = translate.instant('addon.mod_assign.editsubmission');
        this.title = this.editText;
    }
    /**
     * Component being initialized.
     */
    AddonModAssignEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAssignment().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModAssignEditPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hasDataChanged()];
                    case 1:
                        changed = _a.sent();
                        if (!changed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // Nothing has changed or user confirmed to leave. Clear temporary data from plugins.
                        this.assignHelper.clearSubmissionPluginTmpData(this.assign, this.userSubmission, this.getInputData());
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch assignment data.
     *
     * @return Promise resolved when done.
     */
    AddonModAssignEditPage.prototype.fetchAssignment = function () {
        var _this = this;
        var currentUserId = this.sitesProvider.getCurrentSiteUserId();
        // Get assignment data.
        return this.assignProvider.getAssignment(this.courseId, this.moduleId).then(function (assign) {
            _this.assign = assign;
            _this.title = assign.name || _this.title;
            if (!_this.isDestroyed) {
                // Block the assignment.
                _this.syncProvider.blockOperation(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].COMPONENT, assign.id);
            }
            // Wait for sync to be over (if any).
            return _this.assignSyncProvider.waitForSync(assign.id);
        }).then(function () {
            // Get submission status. Ignore cache to get the latest data.
            return _this.assignProvider.getSubmissionStatus(_this.assign.id, _this.userId, undefined, _this.isBlind, false, true)
                .catch(function (err) {
                // Cannot connect. Get cached data.
                return _this.assignProvider.getSubmissionStatus(_this.assign.id, _this.userId, undefined, _this.isBlind)
                    .then(function (response) {
                    var userSubmission = _this.assignProvider.getSubmissionObjectFromAttempt(_this.assign, response.lastattempt);
                    // Check if the user can edit it in offline.
                    return _this.assignHelper.canEditSubmissionOffline(_this.assign, userSubmission).then(function (canEditOffline) {
                        if (canEditOffline) {
                            return response;
                        }
                        // Submission cannot be edited in offline, reject.
                        _this.allowOffline = false;
                        return Promise.reject(err);
                    });
                });
            }).then(function (response) {
                if (!response.lastattempt.canedit) {
                    // Can't edit. Reject.
                    return Promise.reject(_this.translate.instant('core.nopermissions', { $a: _this.editText }));
                }
                _this.userSubmission = _this.assignProvider.getSubmissionObjectFromAttempt(_this.assign, response.lastattempt);
                _this.allowOffline = true; // If offline isn't allowed we shouldn't have reached this point.
                // Only show submission statement if we are editing our own submission.
                if (_this.assign.requiresubmissionstatement && !_this.assign.submissiondrafts && _this.userId == currentUserId) {
                    _this.submissionStatement = _this.assign.submissionstatement;
                }
                else {
                    _this.submissionStatement = undefined;
                }
                // Check if there's any offline data for this submission.
                return _this.assignOfflineProvider.getSubmission(_this.assign.id, _this.userId).then(function (data) {
                    _this.hasOffline = data && data.plugindata && Object.keys(data.plugindata).length > 0;
                }).catch(function () {
                    // No offline data found.
                    _this.hasOffline = false;
                });
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting assigment data.');
            // Leave the player.
            _this.leaveWithoutCheck();
        });
    };
    /**
     * Get the input data.
     *
     * @return Input data.
     */
    AddonModAssignEditPage.prototype.getInputData = function () {
        return this.domUtils.getDataFromForm(document.forms['addon-mod_assign-edit-form']);
    };
    /**
     * Check if data has changed.
     *
     * @return Promise resolved with boolean: whether data has changed.
     */
    AddonModAssignEditPage.prototype.hasDataChanged = function () {
        var _this = this;
        // Usually the hasSubmissionDataChanged call will be resolved inmediately, causing the modal to be shown just an instant.
        // We'll wait a bit before showing it to prevent this "blink".
        var modal, showModal = true;
        setTimeout(function () {
            if (showModal) {
                modal = _this.domUtils.showModalLoading();
            }
        }, 100);
        var data = this.getInputData();
        return this.assignHelper.hasSubmissionDataChanged(this.assign, this.userSubmission, data).finally(function () {
            if (modal) {
                modal.dismiss();
            }
            else {
                showModal = false;
            }
        });
    };
    /**
     * Leave the view without checking for changes.
     */
    AddonModAssignEditPage.prototype.leaveWithoutCheck = function () {
        this.forceLeave = true;
        this.navCtrl.pop();
    };
    /**
     * Get data to submit based on the input data.
     *
     * @param inputData The input data.
     * @return Promise resolved with the data to submit.
     */
    AddonModAssignEditPage.prototype.prepareSubmissionData = function (inputData) {
        var _this = this;
        // If there's offline data, always save it in offline.
        this.saveOffline = this.hasOffline;
        return this.assignHelper.prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, this.hasOffline)
            .catch(function (error) {
            if (_this.allowOffline && !_this.saveOffline) {
                // Cannot submit in online, prepare for offline usage.
                _this.saveOffline = true;
                return _this.assignHelper.prepareSubmissionPluginData(_this.assign, _this.userSubmission, inputData, true);
            }
            return Promise.reject(error);
        });
    };
    /**
     * Save the submission.
     */
    AddonModAssignEditPage.prototype.save = function () {
        var _this = this;
        // Check if data has changed.
        this.hasDataChanged().then(function (changed) {
            if (changed) {
                _this.saveSubmission().then(function () {
                    _this.leaveWithoutCheck();
                }).catch(function (error) {
                    _this.domUtils.showErrorModalDefault(error, 'Error saving submission.');
                });
            }
            else {
                // Nothing to save, just go back.
                _this.leaveWithoutCheck();
            }
        });
    };
    /**
     * Save the submission.
     *
     * @return Promise resolved when done.
     */
    AddonModAssignEditPage.prototype.saveSubmission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputData, modal, size, error_1, pluginData, sent, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputData = this.getInputData();
                        if (this.submissionStatement && (!inputData.submissionstatement || inputData.submissionstatement === 'false')) {
                            throw this.translate.instant('addon.mod_assign.acceptsubmissionstatement');
                        }
                        modal = this.domUtils.showModalLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.assignHelper.getSubmissionSizeForEdit(this.assign, this.userSubmission, inputData)];
                    case 2:
                        size = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // Error calculating size, return -1.
                        size = -1;
                        return [3 /*break*/, 4];
                    case 4:
                        modal.dismiss();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, , 13, 14]);
                        // Confirm action.
                        return [4 /*yield*/, this.fileUploaderHelper.confirmUploadFile(size, true, this.allowOffline)];
                    case 6:
                        // Confirm action.
                        _a.sent();
                        modal = this.domUtils.showModalLoading('core.sending', true);
                        return [4 /*yield*/, this.prepareSubmissionData(inputData)];
                    case 7:
                        pluginData = _a.sent();
                        if (!Object.keys(pluginData).length) {
                            // Nothing to save.
                            return [2 /*return*/];
                        }
                        sent = void 0;
                        if (!this.saveOffline) return [3 /*break*/, 9];
                        // Save submission in offline.
                        sent = false;
                        return [4 /*yield*/, this.assignOfflineProvider.saveSubmission(this.assign.id, this.courseId, pluginData, this.userSubmission.timemodified, !this.assign.submissiondrafts, this.userId)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.assignProvider.saveSubmission(this.assign.id, this.courseId, pluginData, this.allowOffline, this.userSubmission.timemodified, !!this.assign.submissiondrafts, this.userId)];
                    case 10:
                        // Try to send it to server.
                        sent = _a.sent();
                        _a.label = 11;
                    case 11: 
                    // Clear temporary data from plugins.
                    return [4 /*yield*/, this.assignHelper.clearSubmissionPluginTmpData(this.assign, this.userSubmission, inputData)];
                    case 12:
                        // Clear temporary data from plugins.
                        _a.sent();
                        if (sent) {
                            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'assign' });
                        }
                        // Submission saved, trigger events.
                        this.domUtils.triggerFormSubmittedEvent(this.formElement, sent, this.sitesProvider.getCurrentSiteId());
                        params = {
                            assignmentId: this.assign.id,
                            submissionId: this.userSubmission.id,
                            userId: this.userId,
                        };
                        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].SUBMISSION_SAVED_EVENT, params, this.sitesProvider.getCurrentSiteId());
                        if (!this.assign.submissiondrafts) {
                            // No drafts allowed, so it was submitted. Trigger event.
                            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].SUBMITTED_FOR_GRADING_EVENT, params, this.sitesProvider.getCurrentSiteId());
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        modal.dismiss();
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModAssignEditPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        // Unblock the assignment.
        if (this.assign) {
            this.syncProvider.unblockOperation(__WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */].COMPONENT, this.assign.id);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editSubmissionForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModAssignEditPage.prototype, "formElement", void 0);
    AddonModAssignEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-assign-edit',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\assign\pages\edit\edit.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="moduleId" [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="save()" [attr.aria-label]="\'core.save\' | translate">\n\n                {{ \'core.save\' | translate }}\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <ion-list>\n\n            <!-- @todo: plagiarism_print_disclosure -->\n\n            <form name="addon-mod_assign-edit-form" *ngIf="userSubmission && userSubmission.plugins && userSubmission.plugins.length" #editSubmissionForm>\n\n                <!-- Submission statement. -->\n\n                <ion-item text-wrap *ngIf="submissionStatement">\n\n                    <ion-label><core-format-text [text]="submissionStatement" [filter]="false"></core-format-text></ion-label>\n\n                    <ion-checkbox item-end name="submissionstatement" [(ngModel)]="submissionStatementAccepted"></ion-checkbox>\n\n\n\n                    <!-- ion-checkbox doesn\'t use an input. Create a hidden input to hold the value. -->\n\n                    <input item-content type="hidden" [ngModel]="submissionStatementAccepted" name="submissionstatement">\n\n                </ion-item>\n\n\n\n                <addon-mod-assign-submission-plugin *ngFor="let plugin of userSubmission.plugins" [assign]="assign" [submission]="userSubmission" [plugin]="plugin" [edit]="true" [allowOffline]="allowOffline"></addon-mod-assign-submission-plugin>\n\n            </form>\n\n        </ion-list>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\assign\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__core_fileuploader_providers_helper__["a" /* CoreFileUploaderHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_assign__["a" /* AddonModAssignProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_assign_offline__["a" /* AddonModAssignOfflineProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_helper__["a" /* AddonModAssignHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_assign_sync__["a" /* AddonModAssignSyncProvider */]])
    ], AddonModAssignEditPage);
    return AddonModAssignEditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=127.js.map