webpackJsonp([75],{

/***/ 2196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWikiEditPageModule", function() { return AddonModWikiEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit__ = __webpack_require__(2355);
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







var AddonModWikiEditPageModule = /** @class */ (function () {
    function AddonModWikiEditPageModule() {
    }
    AddonModWikiEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit__["a" /* AddonModWikiEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_editor_components_components_module__["a" /* CoreEditorComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__edit__["a" /* AddonModWikiEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWikiEditPageModule);
    return AddonModWikiEditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 2355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWikiEditPage; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_course_providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_wiki__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_wiki_offline__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wiki_sync__ = __webpack_require__(264);
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
 * Page that allows adding or editing a wiki page.
 */
var AddonModWikiEditPage = /** @class */ (function () {
    function AddonModWikiEditPage(navParams, fb, navCtrl, sitesProvider, syncProvider, domUtils, translate, courseProvider, eventsProvider, wikiProvider, wikiOffline, wikiSync, textUtils, courseHelper) {
        this.navCtrl = navCtrl;
        this.sitesProvider = sitesProvider;
        this.syncProvider = syncProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.courseProvider = courseProvider;
        this.eventsProvider = eventsProvider;
        this.wikiProvider = wikiProvider;
        this.wikiOffline = wikiOffline;
        this.wikiSync = wikiSync;
        this.textUtils = textUtils;
        this.courseHelper = courseHelper;
        this.component = __WEBPACK_IMPORTED_MODULE_11__providers_wiki__["a" /* AddonModWikiProvider */].COMPONENT; // Component to link the files to.
        this.editorExtraParams = {};
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.isDestroyed = false; // Whether the page has been destroyed.
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
        this.subwikiId = navParams.get('subwikiId');
        this.wikiId = navParams.get('wikiId');
        this.pageId = navParams.get('pageId');
        this.section = navParams.get('section');
        this.groupId = navParams.get('groupId');
        this.userId = navParams.get('userId');
        var pageTitle = navParams.get('pageTitle');
        pageTitle = pageTitle ? pageTitle.replace(/\+/g, ' ') : '';
        this.initialSubwikiId = this.subwikiId;
        this.componentId = this.module.id;
        this.canEditTitle = !pageTitle;
        this.title = pageTitle ? this.translate.instant('addon.mod_wiki.editingpage', { $a: pageTitle }) :
            this.translate.instant('addon.mod_wiki.newpagehdr');
        this.blockId = this.wikiSync.getSubwikiBlockId(this.subwikiId, this.wikiId, this.userId, this.groupId);
        // Create the form group and its controls.
        this.contentControl = fb.control('');
        this.pageForm = fb.group({
            title: pageTitle
        });
        this.pageForm.addControl('text', this.contentControl);
        // Block the wiki so it cannot be synced.
        this.syncProvider.blockOperation(this.component, this.blockId);
        if (!this.module.id) {
            this.editorExtraParams.type = 'wiki';
        }
        if (this.pageId) {
            this.editorExtraParams.pageid = this.pageId;
            if (this.section) {
                this.editorExtraParams.section = this.section;
            }
        }
        else if (pageTitle) {
            this.editorExtraParams.pagetitle = pageTitle;
        }
    }
    /**
     * Component being initialized.
     */
    AddonModWikiEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchWikiPageData().then(function (success) {
            if (success && _this.blockId && !_this.isDestroyed) {
                // Block the subwiki now that we have blockId for sure.
                var newBlockId = _this.wikiSync.getSubwikiBlockId(_this.subwikiId, _this.wikiId, _this.userId, _this.groupId);
                if (newBlockId != _this.blockId) {
                    _this.syncProvider.unblockOperation(_this.component, _this.blockId);
                    _this.blockId = newBlockId;
                    _this.syncProvider.blockOperation(_this.component, _this.blockId);
                }
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Convenience function to get wiki page data.
     *
     * @return Promise resolved with boolean: whether it was successful.
     */
    AddonModWikiEditPage.prototype.fetchWikiPageData = function () {
        var _this = this;
        var promise, canEdit = false;
        if (this.pageId) {
            // Editing a page that already exists.
            this.canEditTitle = false;
            this.editing = true;
            this.editOffline = false; // Cannot edit pages in offline.
            // Get page contents to obtain title and editing permission
            promise = this.wikiProvider.getPageContents(this.pageId).then(function (pageContents) {
                _this.pageForm.controls.title.setValue(pageContents.title); // Set the title in the form group.
                _this.wikiId = pageContents.wikiid;
                _this.subwikiId = pageContents.subwikiid;
                _this.title = _this.translate.instant('addon.mod_wiki.editingpage', { $a: pageContents.title });
                _this.groupId = pageContents.groupid;
                _this.userId = pageContents.userid;
                canEdit = pageContents.caneditpage;
                // Wait for sync to be over (if any).
                return _this.wikiSync.waitForSync(_this.blockId);
            }).then(function () {
                // Get subwiki files, needed to replace URLs for rich text editor.
                return _this.wikiProvider.getSubwikiFiles(_this.wikiId, _this.groupId, _this.userId);
            }).then(function (files) {
                _this.subwikiFiles = files;
                // Get editable text of the page/section.
                return _this.wikiProvider.getPageForEditing(_this.pageId, _this.section);
            }).then(function (editContents) {
                // Get the original page contents, treating file URLs if needed.
                var content = _this.textUtils.replacePluginfileUrls(editContents.content, _this.subwikiFiles);
                _this.contentControl.setValue(content);
                _this.originalContent = content;
                _this.version = editContents.version;
                if (canEdit) {
                    // Renew the lock every certain time.
                    _this.renewLockInterval = setInterval(function () {
                        _this.renewLock();
                    }, __WEBPACK_IMPORTED_MODULE_11__providers_wiki__["a" /* AddonModWikiProvider */].RENEW_LOCK_TIME);
                }
            });
        }
        else {
            var pageTitle_1 = this.pageForm.controls.title.value;
            // New page. Wait for sync to be over (if any).
            promise = this.wikiSync.waitForSync(this.blockId);
            if (pageTitle_1) {
                // Title is set, it could be editing an offline page or creating a new page using an edit link.
                promise = promise.then(function (result) {
                    // First of all, verify if this page was created in the current sync.
                    if (result) {
                        var page = result.created.find(function (page) {
                            return page.title == pageTitle_1;
                        });
                        if (page && page.pageId > 0) {
                            // Page was created, now it exists in the site.
                            _this.pageId = page.pageId;
                            return _this.fetchWikiPageData();
                        }
                    }
                    // Check if there's already some offline data for this page.
                    return _this.wikiOffline.getNewPage(pageTitle_1, _this.subwikiId, _this.wikiId, _this.userId, _this.groupId);
                }).then(function (page) {
                    // Load offline content.
                    _this.contentControl.setValue(page.cachedcontent);
                    _this.originalContent = page.cachedcontent;
                    _this.editOffline = true;
                }).catch(function () {
                    // No offline data found.
                    _this.editOffline = false;
                });
            }
            else {
                this.editOffline = false;
            }
            promise.then(function () {
                _this.editing = false;
                canEdit = !!_this.blockId; // If no blockId, the user cannot edit the page.
            });
        }
        return promise.then(function () {
            return true;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting wiki data.');
            // Go back.
            _this.forceLeavePage();
            return false;
        }).finally(function () {
            if (!canEdit) {
                // Cannot edit, show alert and go back.
                _this.domUtils.showAlert(_this.translate.instant('core.notice'), _this.translate.instant('addon.mod_wiki.cannoteditpage'));
                _this.forceLeavePage();
            }
        });
    };
    /**
     * Force leaving the page, without checking for changes.
     */
    AddonModWikiEditPage.prototype.forceLeavePage = function () {
        this.forceLeave = true;
        this.navCtrl.pop();
    };
    /**
     * Navigate to a new offline page.
     *
     * @param title Page title.
     */
    AddonModWikiEditPage.prototype.goToNewOfflinePage = function (title) {
        if (this.courseId && (this.module.id || this.wikiId)) {
            // We have enough data to navigate to the page.
            if (!this.editOffline || this.previousViewPageIsDifferentOffline(title)) {
                this.pageParamsToLoad = {
                    module: this.module,
                    courseId: this.courseId,
                    pageId: null,
                    pageTitle: title,
                    wikiId: this.wikiId,
                    subwikiId: this.subwikiId,
                    userId: this.userId,
                    groupId: this.groupId
                };
            }
        }
        else {
            this.domUtils.showAlert(this.translate.instant('core.success'), this.translate.instant('core.datastoredoffline'));
        }
        this.forceLeavePage();
    };
    /**
     * Check if we need to navigate to a new state.
     *
     * @param title Page title.
     * @return Promise resolved when done.
     */
    AddonModWikiEditPage.prototype.gotoPage = function (title) {
        var _this = this;
        return this.retrieveModuleInfo(this.wikiId).then(function () {
            var openPage = false;
            // Not the firstpage.
            if (_this.initialSubwikiId) {
                if (!_this.editing && _this.editOffline && _this.previousViewPageIsDifferentOffline(title)) {
                    // The user submitted an offline page that isn't loaded in the back view, open it.
                    openPage = true;
                }
                else if (!_this.editOffline && _this.previousViewIsDifferentPageOnline()) {
                    // The user submitted an offline page that isn't loaded in the back view, open it.
                    openPage = true;
                }
            }
            if (openPage) {
                // Setting that will do the app navigate to the page.
                _this.pageParamsToLoad = {
                    module: _this.module,
                    courseId: _this.courseId,
                    pageId: _this.pageId,
                    pageTitle: title,
                    wikiId: _this.wikiId,
                    subwikiId: _this.subwikiId,
                    userId: _this.userId,
                    groupId: _this.groupId
                };
            }
            _this.forceLeavePage();
        }).catch(function () {
            // Go back if it fails.
            _this.forceLeavePage();
        });
    };
    /**
     * Check if data has changed.
     *
     * @return Whether data has changed.
     */
    AddonModWikiEditPage.prototype.hasDataChanged = function () {
        var values = this.pageForm.value;
        return !(this.originalContent == values.text || (!this.editing && !values.text && !values.title));
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModWikiEditPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave) {
                            return [2 /*return*/];
                        }
                        if (!this.hasDataChanged()) return [3 /*break*/, 2];
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
     * View left.
     */
    AddonModWikiEditPage.prototype.ionViewDidLeave = function () {
        if (this.pageParamsToLoad) {
            // Go to the page we've just created/edited.
            this.navCtrl.push('AddonModWikiIndexPage', this.pageParamsToLoad);
        }
    };
    /**
     * In case we are NOT editing an offline page, check if the page loaded in previous view is different than this view.
     *
     * @return Whether previous view wiki page is different than current page.
     */
    AddonModWikiEditPage.prototype.previousViewIsDifferentPageOnline = function () {
        // We cannot precisely detect when the state is the same but this is close to it.
        var previousView = this.navCtrl.getPrevious();
        return !this.editing || previousView.component.name != 'AddonModWikiIndexPage' ||
            previousView.data.module.id != this.module.id || previousView.data.pageId != this.pageId;
    };
    /**
     * In case we're editing an offline page, check if the page loaded in previous view is different than this view.
     *
     * @param title The current page title.
     * @return Whether previous view wiki page is different than current page.
     */
    AddonModWikiEditPage.prototype.previousViewPageIsDifferentOffline = function (title) {
        // We cannot precisely detect when the state is the same but this is close to it.
        var previousView = this.navCtrl.getPrevious();
        if (previousView.component.name != 'AddonModWikiIndexPage' || previousView.data.module.id != this.module.id ||
            previousView.data.wikiId != this.wikiId || previousView.data.pageTitle != title) {
            return true;
        }
        // Check subwiki using subwiki or user and group.
        var previousSubwikiId = parseInt(previousView.data.subwikiId, 10) || 0;
        if (previousSubwikiId > 0 && this.subwikiId > 0) {
            return previousSubwikiId != this.subwikiId;
        }
        var previousUserId = parseInt(previousView.data.userId, 10) || 0, previousGroupId = parseInt(previousView.data.groupId, 10) || 0;
        return this.userId != previousUserId || this.groupId != previousGroupId;
    };
    /**
     * Save the data.
     */
    AddonModWikiEditPage.prototype.save = function () {
        var _this = this;
        var values = this.pageForm.value, title = values.title, modal = this.domUtils.showModalLoading('core.sending', true);
        var promise, text = values.text;
        text = this.textUtils.restorePluginfileUrls(text, this.subwikiFiles);
        text = this.textUtils.formatHtmlLines(text);
        if (this.editing) {
            // Edit existing page.
            promise = this.wikiProvider.editPage(this.pageId, text, this.section).then(function () {
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true, _this.sitesProvider.getCurrentSiteId());
                // Invalidate page since it changed.
                return _this.wikiProvider.invalidatePage(_this.pageId).then(function () {
                    return _this.gotoPage(title);
                });
            });
        }
        else {
            // Creating a new page.
            if (!title) {
                // Title is mandatory, stop.
                this.domUtils.showAlert(this.translate.instant('core.notice'), this.translate.instant('addon.mod_wiki.titleshouldnotbeempty'));
                modal.dismiss();
                return;
            }
            if (!this.editOffline) {
                // Check if the user has an offline page with the same title.
                promise = this.wikiOffline.getNewPage(title, this.subwikiId, this.wikiId, this.userId, this.groupId).then(function () {
                    // There's a page with same name, reject with error message.
                    return Promise.reject(_this.translate.instant('addon.mod_wiki.pageexists'));
                }, function () {
                    // Not found, page can be sent.
                });
            }
            else {
                promise = Promise.resolve();
            }
            promise = promise.then(function () {
                // Try to send the page.
                var wikiId = _this.wikiId || (_this.module && _this.module.instance);
                return _this.wikiProvider.newPage(title, text, _this.subwikiId, wikiId, _this.userId, _this.groupId).then(function (id) {
                    _this.domUtils.triggerFormSubmittedEvent(_this.formElement, id > 0, _this.sitesProvider.getCurrentSiteId());
                    if (id > 0) {
                        _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'wiki' });
                        // Page was created, get its data and go to the page.
                        _this.pageId = id;
                        return _this.wikiProvider.getPageContents(_this.pageId).then(function (pageContents) {
                            var promises = [];
                            wikiId = parseInt(pageContents.wikiid, 10);
                            if (!_this.subwikiId) {
                                // Subwiki was not created, invalidate subwikis as well.
                                promises.push(_this.wikiProvider.invalidateSubwikis(wikiId));
                            }
                            _this.subwikiId = parseInt(pageContents.subwikiid, 10);
                            _this.userId = parseInt(pageContents.userid, 10);
                            _this.groupId = parseInt(pageContents.groupid, 10);
                            // Invalidate subwiki pages since there are new.
                            promises.push(_this.wikiProvider.invalidateSubwikiPages(wikiId));
                            return Promise.all(promises).then(function () {
                                return _this.gotoPage(title);
                            });
                        }).finally(function () {
                            // Notify page created.
                            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_wiki__["a" /* AddonModWikiProvider */].PAGE_CREATED_EVENT, {
                                pageId: _this.pageId,
                                subwikiId: _this.subwikiId,
                                pageTitle: title,
                            }, _this.sitesProvider.getCurrentSiteId());
                        });
                    }
                    else {
                        // Page stored in offline. Go to see the offline page.
                        _this.goToNewOfflinePage(title);
                    }
                });
            });
        }
        return promise.catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error saving wiki data.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Renew lock and control versions.
     */
    AddonModWikiEditPage.prototype.renewLock = function () {
        var _this = this;
        this.wikiProvider.getPageForEditing(this.pageId, this.section, true).then(function (response) {
            if (response.version && _this.version != response.version) {
                _this.wrongVersionLock = true;
            }
        });
    };
    /**
     * Fetch module information to redirect when needed.
     *
     * @param wikiId Wiki ID.
     * @return Promise resolved when done.
     */
    AddonModWikiEditPage.prototype.retrieveModuleInfo = function (wikiId) {
        var _this = this;
        if (this.module.id && this.courseId) {
            // We have enough data.
            return Promise.resolve();
        }
        var promise = this.module.id ? Promise.resolve(this.module) :
            this.courseProvider.getModuleBasicInfoByInstance(wikiId, 'wiki');
        return promise.then(function (mod) {
            _this.module = mod;
            _this.componentId = _this.module.id;
            if (!_this.courseId && _this.module.course) {
                _this.courseId = _this.module.course;
            }
            else if (!_this.courseId) {
                return _this.courseHelper.getModuleCourseIdByInstance(wikiId, 'wiki').then(function (course) {
                    _this.courseId = course;
                });
            }
        });
    };
    /**
     * Component being destroyed.
     */
    AddonModWikiEditPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        clearInterval(this.renewLockInterval);
        // Unblock the subwiki.
        if (this.blockId) {
            this.syncProvider.unblockOperation(this.component, this.blockId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editPageForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModWikiEditPage.prototype, "formElement", void 0);
    AddonModWikiEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-wiki-edit',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\wiki\pages\edit\edit.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="save()" [attr.aria-label]="\'core.save\' | translate">\n\n                {{ \'core.save\' | translate }}\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <core-loading [hideUntil]="loaded">\n\n        <form ion-list [formGroup]="pageForm" #editPageForm>\n\n            <ion-item text-wrap *ngIf="canEditTitle" class="item-title">\n\n                <ion-input name="title" type="text" [placeholder]="\'addon.mod_wiki.newpagetitle\' | translate" [formControlName]="\'title\'"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <core-rich-text-editor item-content [control]="contentControl" [placeholder]="\'core.content\' | translate" name="wiki_page_content" [component]="component" [componentId]="componentId" [autoSave]="true" contextLevel="module" [contextInstanceId]="module.id || 0" elementId="newcontent_editor" [draftExtraParams]="editorExtraParams"></core-rich-text-editor>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="wrongVersionLock" text-center class="addon-mod_wiki-wrongversionlock" >\n\n                <ion-badge color="danger" padding>{{ \'addon.mod_wiki.wrongversionlock\' | translate }}</ion-badge>\n\n            </ion-item>\n\n        </form>\n\n    </core-loading>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\wiki\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sync__["a" /* CoreSyncProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_9__core_course_providers_course__["b" /* CoreCourseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_wiki__["a" /* AddonModWikiProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_wiki_offline__["a" /* AddonModWikiOfflineProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_wiki_sync__["a" /* AddonModWikiSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_text__["b" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__core_course_providers_helper__["b" /* CoreCourseHelperProvider */]])
    ], AddonModWikiEditPage);
    return AddonModWikiEditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=75.js.map