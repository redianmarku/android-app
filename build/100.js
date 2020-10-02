webpackJsonp([100],{

/***/ 2177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryNewDiscussionPageModule", function() { return AddonModGlossaryNewDiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit__ = __webpack_require__(2333);
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







var AddonModGlossaryNewDiscussionPageModule = /** @class */ (function () {
    function AddonModGlossaryNewDiscussionPageModule() {
    }
    AddonModGlossaryNewDiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit__["a" /* AddonModGlossaryEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_editor_components_components_module__["a" /* CoreEditorComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__edit__["a" /* AddonModGlossaryEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModGlossaryNewDiscussionPageModule);
    return AddonModGlossaryNewDiscussionPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 2333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModGlossaryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_fileuploader_providers_fileuploader__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_glossary__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_offline__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_helper__ = __webpack_require__(488);
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
 * Page that displays the edit form.
 */
var AddonModGlossaryEditPage = /** @class */ (function () {
    function AddonModGlossaryEditPage(navParams, navCtrl, translate, domUtils, eventsProvider, sitesProvider, uploaderProvider, textUtils, glossaryProvider, glossaryOffline, glossaryHelper) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.uploaderProvider = uploaderProvider;
        this.textUtils = textUtils;
        this.glossaryProvider = glossaryProvider;
        this.glossaryOffline = glossaryOffline;
        this.glossaryHelper = glossaryHelper;
        this.component = __WEBPACK_IMPORTED_MODULE_9__providers_glossary__["a" /* AddonModGlossaryProvider */].COMPONENT;
        this.loaded = false;
        this.entry = {
            concept: '',
            definition: '',
            timecreated: 0,
        };
        this.options = {
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false
        };
        this.attachments = [];
        this.definitionControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.categories = [];
        this.editorExtraParams = {};
        this.isDestroyed = false;
        this.saved = false;
        this.courseId = navParams.get('courseId');
        this.module = navParams.get('module');
        this.glossary = navParams.get('glossary');
    }
    /**
     * Component being initialized.
     */
    AddonModGlossaryEditPage.prototype.ngOnInit = function () {
        var _this = this;
        var entry = this.navParams.get('entry');
        var promise;
        if (entry) {
            this.entry.concept = entry.concept || '';
            this.entry.definition = entry.definition || '';
            this.entry.timecreated = entry.timecreated || 0;
            this.originalData = {
                concept: this.entry.concept,
                definition: this.entry.definition,
                files: [],
            };
            if (entry.options) {
                this.options.categories = entry.options.categories || [];
                this.options.aliases = entry.options.aliases || '';
                this.options.usedynalink = !!entry.options.usedynalink;
                if (this.options.usedynalink) {
                    this.options.casesensitive = !!entry.options.casesensitive;
                    this.options.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if (entry.attachments && entry.attachments.offline) {
                promise = this.glossaryHelper.getStoredFiles(this.glossary.id, entry.concept, entry.timecreated).then(function (files) {
                    _this.attachments = files;
                    _this.originalData.files = files.slice();
                });
            }
            if (entry.id) {
                this.editorExtraParams.id = entry.id;
            }
        }
        this.definitionControl.setValue(this.entry.definition);
        Promise.resolve(promise).then(function () {
            _this.glossaryProvider.getAllCategories(_this.glossary.id).then(function (categories) {
                _this.categories = categories;
            }).finally(function () {
                _this.loaded = true;
            });
        });
    };
    /**
     * Definition changed.
     *
     * @param text The new text.
     */
    AddonModGlossaryEditPage.prototype.onDefinitionChange = function (text) {
        this.entry.definition = text;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModGlossaryEditPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.saved) {
                            return [2 /*return*/];
                        }
                        if (!this.glossaryHelper.hasEntryDataChanged(this.entry, this.attachments, this.originalData)) return [3 /*break*/, 2];
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Delete the local files from the tmp folder.
                        this.uploaderProvider.clearTmpFiles(this.attachments);
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save the entry.
     */
    AddonModGlossaryEditPage.prototype.save = function () {
        var _this = this;
        var definition = this.entry.definition, saveOffline = false, promise;
        var timecreated = this.entry.timecreated || Date.now();
        if (!this.entry.concept || !definition) {
            this.domUtils.showErrorModal('addon.mod_glossary.fillfields', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        // Add some HTML to the definition if needed.
        definition = this.textUtils.formatHtmlLines(definition);
        // Upload attachments first if any.
        if (this.attachments.length > 0) {
            promise = this.glossaryHelper.uploadOrStoreFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments, false).catch(function () {
                // Cannot upload them in online, save them in offline.
                saveOffline = true;
                return _this.glossaryHelper.uploadOrStoreFiles(_this.glossary.id, _this.entry.concept, timecreated, _this.attachments, true);
            });
        }
        else {
            promise = Promise.resolve();
        }
        promise.then(function (attach) {
            var options = {
                aliases: _this.options.aliases,
                categories: _this.options.categories.join(',')
            };
            if (_this.glossary.usedynalink) {
                options.usedynalink = _this.options.usedynalink ? 1 : 0;
                if (_this.options.usedynalink) {
                    options.casesensitive = _this.options.casesensitive ? 1 : 0;
                    options.fullmatch = _this.options.fullmatch ? 1 : 0;
                }
            }
            if (saveOffline) {
                var promise_1;
                if (_this.entry && !_this.glossary.allowduplicatedentries) {
                    // Check if the entry is duplicated in online or offline mode.
                    promise_1 = _this.glossaryProvider.isConceptUsed(_this.glossary.id, _this.entry.concept, _this.entry.timecreated)
                        .then(function (used) {
                        if (used) {
                            // There's a entry with same name, reject with error message.
                            return Promise.reject(_this.translate.instant('addon.mod_glossary.errconceptalreadyexists'));
                        }
                    });
                }
                else {
                    promise_1 = Promise.resolve();
                }
                return promise_1.then(function () {
                    // Save entry in offline.
                    return _this.glossaryOffline.addNewEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, timecreated, undefined, undefined, _this.entry).then(function () {
                        // Don't return anything.
                    });
                });
            }
            else {
                // Try to send it to server.
                // Don't allow offline if there are attachments since they were uploaded fine.
                return _this.glossaryProvider.addEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, timecreated, undefined, _this.entry, !_this.attachments.length, !_this.glossary.allowduplicatedentries);
            }
        }).then(function (entryId) {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.attachments);
            if (entryId) {
                // Data sent to server, delete stored files (if any).
                _this.glossaryHelper.deleteStoredFiles(_this.glossary.id, _this.entry.concept, timecreated);
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'glossary' });
            }
            var data = {
                glossaryId: _this.glossary.id,
            };
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_9__providers_glossary__["a" /* AddonModGlossaryProvider */].ADD_ENTRY_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, !!entryId, _this.sitesProvider.getCurrentSiteId());
            _this.saved = true;
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
        }).finally(function () {
            modal.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModGlossaryEditPage.prototype, "formElement", void 0);
    AddonModGlossaryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-glossary-edit',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\glossary\pages\edit\edit.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="module.name" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="save()"> {{ \'core.save\' | translate }}</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <form ion-list #editFormEl>\n\n            <ion-item>\n\n                <ion-label stacked>{{ \'addon.mod_glossary.concept\' | translate }}</ion-label>\n\n                <ion-input type="text" [placeholder]="\'addon.mod_glossary.concept\' | translate" [(ngModel)]="entry.concept" name="concept"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>{{ \'addon.mod_glossary.definition\' | translate }}</ion-label>\n\n                <core-rich-text-editor item-content [control]="definitionControl" (contentChanged)="onDefinitionChange($event)" [placeholder]="\'addon.mod_glossary.definition\' | translate" name="addon_mod_glossary_edit" [component]="component" [componentId]="glossary.cmid" [autoSave]="true" contextLevel="module" [contextInstanceId]="module.id" elementId="definition_editor" [draftExtraParams]="editorExtraParams"></core-rich-text-editor>\n\n            </ion-item>\n\n            <ion-item *ngIf="categories.length > 0">\n\n                <ion-label stacked id="addon-mod-glossary-categories-label">{{ \'addon.mod_glossary.categories\' | translate }}</ion-label>\n\n                <ion-select [(ngModel)]="options.categories" multiple="true" aria-labelledby="addon-mod-glossary-categories-label" interface="action-sheet" [placeholder]="\'addon.mod_glossary.categories\' | translate" name="categories">\n\n                    <ion-option *ngFor="let category of categories" [value]="category.id">{{ category.name }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked id="addon-mod-glossary-aliases-label">{{ \'addon.mod_glossary.aliases\' | translate }}</ion-label>\n\n                <ion-textarea [(ngModel)]="options.aliases" rows="1" core-auto-rows aria-labelledby="addon-mod-glossary-aliases-label" name="aliases"></ion-textarea>\n\n            </ion-item>\n\n            <ion-item-divider>{{ \'addon.mod_glossary.attachment\' | translate }}</ion-item-divider>\n\n            <core-attachments [files]="attachments" [component]="component" [componentId]="glossary.cmid" [allowOffline]="true"></core-attachments>\n\n            <ng-container *ngIf="glossary.usedynalink">\n\n                <ion-item-divider>{{ \'addon.mod_glossary.linking\' | translate }}</ion-item-divider>\n\n                <ion-item text-wrap>\n\n                    <ion-label>{{ \'addon.mod_glossary.entryusedynalink\' | translate }}</ion-label>\n\n                    <ion-toggle [(ngModel)]="options.usedynalink" name="usedynalink"></ion-toggle>\n\n                </ion-item>\n\n                <ion-item text-wrap>\n\n                    <ion-label>{{ \'addon.mod_glossary.casesensitive\' | translate }}</ion-label>\n\n                    <ion-toggle [disabled]="!options.usedynalink" [(ngModel)]="options.casesensitive" name="casesensitive"></ion-toggle>\n\n                </ion-item>\n\n                <ion-item text-wrap>\n\n                    <ion-label>{{ \'addon.mod_glossary.fullmatch\' | translate }}</ion-label>\n\n                    <ion-toggle [disabled]="!options.usedynalink" [(ngModel)]="options.fullmatch" name="fullmatch"></ion-toggle>\n\n                </ion-item>\n\n            </ng-container>\n\n        </form>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\glossary\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_fileuploader_providers_fileuploader__["a" /* CoreFileUploaderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_glossary__["a" /* AddonModGlossaryProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_offline__["a" /* AddonModGlossaryOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_helper__["a" /* AddonModGlossaryHelperProvider */]])
    ], AddonModGlossaryEditPage);
    return AddonModGlossaryEditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=100.js.map