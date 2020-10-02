webpackJsonp([112],{

/***/ 2175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataSearchPageModule", function() { return AddonModDataSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search__ = __webpack_require__(2331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(464);
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







var AddonModDataSearchPageModule = /** @class */ (function () {
    function AddonModDataSearchPageModule() {
    }
    AddonModDataSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__search__["a" /* AddonModDataSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* AddonModDataComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__search__["a" /* AddonModDataSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModDataSearchPageModule);
    return AddonModDataSearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 2331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModDataSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fields_delegate__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_helper__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_tag_providers_tag__ = __webpack_require__(134);
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
 * Page that displays the search modal.
 */
var AddonModDataSearchPage = /** @class */ (function () {
    function AddonModDataSearchPage(params, viewCtrl, fb, utils, domUtils, fieldsDelegate, textUtils, dataHelper, tagProvider, eventsProvider, sitesProvider) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.textUtils = textUtils;
        this.dataHelper = dataHelper;
        this.tagProvider = tagProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.extraImports = [__WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* AddonModDataComponentsModule */]];
        this.search = params.get('search');
        this.fields = params.get('fields');
        this.data = params.get('data');
        var advanced = {};
        if (typeof this.search.advanced == 'object') {
            Object.keys(this.search.advanced).forEach(function (index) {
                if (typeof _this.search.advanced[index] != 'undefined' && typeof _this.search.advanced[index].name != 'undefined') {
                    advanced[_this.search.advanced[index].name] = _this.search.advanced[index].value ?
                        _this.textUtils.parseJSON(_this.search.advanced[index].value) : '';
                }
                else {
                    advanced[index] = _this.search.advanced[index] ?
                        _this.textUtils.parseJSON(_this.search.advanced[index]) : '';
                }
            });
        }
        else {
            this.search.advanced.forEach(function (field) {
                advanced[field.name] = field.value ? _this.textUtils.parseJSON(field.value) : '';
            });
        }
        this.search.advanced = advanced;
        this.searchForm = fb.group({
            text: [this.search.text],
            sortBy: [this.search.sortBy || '0'],
            sortDirection: [this.search.sortDirection || 'DESC'],
            firstname: [this.search.advanced['firstname'] || ''],
            lastname: [this.search.advanced['lastname'] || '']
        });
        this.fieldsArray = this.utils.objectToArray(this.fields);
        this.advancedSearch = this.renderAdvancedSearchFields();
    }
    /**
     * Displays Advanced Search Fields.
     *
     * @return Generated HTML.
     */
    AddonModDataSearchPage.prototype.renderAdvancedSearchFields = function () {
        this.jsData = {
            fields: this.fields,
            form: this.searchForm,
            search: this.search.advanced
        };
        var template = this.dataHelper.getTemplate(this.data, 'asearchtemplate', this.fieldsArray), replace, render;
        // Replace the fields found on template.
        this.fieldsArray.forEach(function (field) {
            replace = '[[' + field.name + ']]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            render = '<addon-mod-data-field-plugin mode="search" [field]="fields[' + field.id +
                ']" [form]="form" [search]="search"></addon-mod-data-field-plugin>';
            template = template.replace(replace, render);
        });
        // Not pluginable other search elements.
        // Replace firstname field by the text input.
        replace = new RegExp('##firstname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="firstname" \
        [placeholder]="\'addon.mod_data.authorfirstname\' | translate" formControlName="firstname"></ion-input></span>';
        template = template.replace(replace, render);
        // Replace lastname field by the text input.
        replace = new RegExp('##lastname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="lastname" \
        [placeholder]="\'addon.mod_data.authorlastname\' | translate" formControlName="lastname"></ion-input></span>';
        template = template.replace(replace, render);
        // Searching by tags is not supported.
        replace = new RegExp('##tags##', 'gi');
        var message = '<p class="item-dimmed">{{ \'addon.mod_data.searchbytagsnotsupported\' | translate }}</p>';
        template = template.replace(replace, this.tagProvider.areTagsAvailableInSite() ? message : '');
        return template;
    };
    /**
     * Retrieve the entered data in search in a form.
     *
     * @param searchedData Array with the entered form values.
     * @return Array with the answers.
     */
    AddonModDataSearchPage.prototype.getSearchDataFromForm = function (searchedData) {
        var _this = this;
        var advancedSearch = [];
        // Filter and translate fields to each field plugin.
        this.fieldsArray.forEach(function (field) {
            var fieldData = _this.fieldsDelegate.getFieldSearchData(field, searchedData);
            if (fieldData) {
                fieldData.forEach(function (data) {
                    data.value = JSON.stringify(data.value);
                    // WS wants values in Json format.
                    advancedSearch.push(data);
                });
            }
        });
        // Not pluginable other search elements.
        if (searchedData['firstname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'firstname',
                value: JSON.stringify(searchedData['firstname'])
            });
        }
        if (searchedData['lastname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'lastname',
                value: JSON.stringify(searchedData['lastname'])
            });
        }
        return advancedSearch;
    };
    /**
     * Close modal.
     *
     * @param data Data to return to the page.
     */
    AddonModDataSearchPage.prototype.closeModal = function (data) {
        if (typeof data == 'undefined') {
            this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        }
        else {
            this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        }
        this.viewCtrl.dismiss(data);
    };
    /**
     * Toggles between advanced to normal search.
     *
     * @param advanced True for advanced, false for basic.
     */
    AddonModDataSearchPage.prototype.changeAdvanced = function (advanced) {
        this.search.searchingAdvanced = advanced;
    };
    /**
     * Done editing.
     *
     * @param e Event.
     */
    AddonModDataSearchPage.prototype.searchEntries = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var searchedData = this.searchForm.value;
        if (this.search.searchingAdvanced) {
            this.search.advanced = this.getSearchDataFromForm(searchedData);
            this.search.searching = this.search.advanced.length > 0;
        }
        else {
            this.search.text = searchedData.text;
            this.search.searching = this.search.text.length > 0;
        }
        this.search.sortBy = searchedData.sortBy;
        this.search.sortDirection = searchedData.sortDirection;
        this.closeModal(this.search);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModDataSearchPage.prototype, "formElement", void 0);
    AddonModDataSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-data-search',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\data\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_data.search\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="fixed-content core-tabs-bar">\n\n        <a class="tab-slide" [attr.aria-selected]="!search.searchingAdvanced" (click)="changeAdvanced(false)">{{ \'addon.mod_data.search\' | translate}}</a>\n\n        <a class="tab-slide" [attr.aria-selected]="search.searchingAdvanced" (click)="changeAdvanced(true)">{{ \'addon.mod_data.advancedsearch\' | translate }}</a>\n\n    </div>\n\n    <form (ngSubmit)="searchEntries($event)" [formGroup]="searchForm" #searchFormEl>\n\n        <ion-list no-margin>\n\n            <ion-item [hidden]="search.searchingAdvanced">\n\n                <ion-input type="text" placeholder="{{ \'addon.mod_data.search\' | translate}}" [(ngModel)]="search.text" name="text" formControlName="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <ion-label stacked>{{ \'core.sortby\' | translate }}</ion-label>\n\n                <ion-select interface="action-sheet" name="sortBy" formControlName="sortBy" [placeholder]="\'core.sortby\' | translate">\n\n                    <optgroup *ngIf="fieldsArray.length" label="{{ \'addon.mod_data.fields\' | translate }}">\n\n                        <ion-option *ngFor="let field of fieldsArray" [value]="field.id">{{field.name}}</ion-option>\n\n                    </optgroup>\n\n                    <optgroup label="{{ \'addon.mod_data.other\' | translate }}">\n\n                        <ion-option value="0">{{ \'addon.mod_data.timeadded\' | translate }}</ion-option>\n\n                        <ion-option value="-4">{{ \'addon.mod_data.timemodified\' | translate }}</ion-option>\n\n                        <ion-option value="-1">{{ \'addon.mod_data.authorfirstname\' | translate }}</ion-option>\n\n                        <ion-option value="-2">{{ \'addon.mod_data.authorlastname\' | translate }}</ion-option>\n\n                        <ion-option value="-3" *ngIf="data.approval">{{ \'addon.mod_data.approved\' | translate }}</ion-option>\n\n                    </optgroup>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-list radio-group [(ngModel)]="search.sortDirection" name="sortDirection" formControlName="sortDirection">\n\n                <ion-item>\n\n                    <ion-label>{{ \'addon.mod_data.ascending\' | translate }}</ion-label>\n\n                    <ion-radio value="ASC"></ion-radio>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>{{ \'addon.mod_data.descending\' | translate }}</ion-label>\n\n                    <ion-radio value="DESC"></ion-radio>\n\n                </ion-item>\n\n            </ion-list>\n\n            <div padding [hidden]="!advancedSearch || !search.searchingAdvanced" class="addon-data-advanced-search">\n\n                <core-compile-html [text]="advancedSearch" [jsData]="jsData" [extraImports]="extraImports"></core-compile-html>\n\n            </div>\n\n        </ion-list>\n\n        <div padding>\n\n            <button ion-button block type="submit" icon-start>\n\n                <ion-icon name="search"></ion-icon>\n\n                {{ \'addon.mod_data.search\' | translate }}\n\n            </button>\n\n        </div>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\mod\data\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["b" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["b" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fields_delegate__["a" /* AddonModDataFieldsDelegate */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_text__["b" /* CoreTextUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_helper__["a" /* AddonModDataHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_11__core_tag_providers_tag__["a" /* CoreTagProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */]])
    ], AddonModDataSearchPage);
    return AddonModDataSearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=112.js.map