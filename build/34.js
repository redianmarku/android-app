webpackJsonp([34],{

/***/ 2189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModule", function() { return CoreMainMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__(2347);
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





var CoreMainMenuPageModule = /** @class */ (function () {
    function CoreMainMenuPageModule() {
    }
    CoreMainMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__menu__["a" /* CoreMainMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__menu__["a" /* CoreMainMenuPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreMainMenuPageModule);
    return CoreMainMenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 2347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreMainMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ion_tabs_ion_tabs__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mainmenu__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_delegate__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_contentlinks_providers_delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_helper__ = __webpack_require__(17);
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
 * Page that displays the main menu of the app.
 */
var CoreMainMenuPage = /** @class */ (function () {
    function CoreMainMenuPage(menuDelegate, sitesProvider, navParams, navCtrl, eventsProvider, cdr, mainMenuProvider, linksDelegate, linksHelper, appProvider, platform) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.eventsProvider = eventsProvider;
        this.cdr = cdr;
        this.mainMenuProvider = mainMenuProvider;
        this.linksDelegate = linksDelegate;
        this.linksHelper = linksHelper;
        this.appProvider = appProvider;
        this.platform = platform;
        this.tabs = [];
        this.loaded = false;
        this.showTabs = false;
        this.tabsPlacement = 'bottom';
        this.mainMenuId = this.appProvider.getMainMenuId();
        // Check if the menu was loaded with a redirect.
        var redirectPage = navParams.get('redirectPage');
        if (redirectPage) {
            this.pendingRedirect = {
                redirectPage: redirectPage,
                redirectParams: navParams.get('redirectParams')
            };
        }
        this.urlToOpen = navParams.get('urlToOpen');
    }
    /**
     * View loaded.
     */
    CoreMainMenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.sitesProvider.isLoggedIn()) {
            this.navCtrl.setRoot('CoreLoginInitPage');
            return;
        }
        this.showTabs = true;
        this.redirectObs = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].LOAD_PAGE_MAIN_MENU, function (data) {
            if (!_this.loaded) {
                // View isn't ready yet, wait for it to be ready.
                _this.pendingRedirect = data;
            }
            else {
                delete _this.pendingRedirect;
                _this.handleRedirect(data);
            }
        });
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            // Remove the handlers that should only appear in the More menu.
            _this.allHandlers = handlers.filter(function (handler) {
                return !handler.onlyInMore;
            });
            _this.initHandlers();
            if (_this.loaded && _this.pendingRedirect) {
                // Wait for tabs to be initialized and then handle the redirect.
                setTimeout(function () {
                    if (_this.pendingRedirect) {
                        _this.handleRedirect(_this.pendingRedirect);
                        delete _this.pendingRedirect;
                    }
                });
            }
        });
        window.addEventListener('resize', this.initHandlers.bind(this));
        if (this.platform.is('ios')) {
            // In iOS, the resize event is triggered before the keyboard is opened/closed and not triggered again once done.
            // Init handlers again once keyboard is closed since the resize event doesn't have the updated height.
            this.keyboardObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */].KEYBOARD_CHANGE, function (kbHeight) {
                if (kbHeight === 0) {
                    _this.initHandlers();
                    // If the device is slow it can take a bit more to update the window height. Retry in a few ms.
                    setTimeout(function () {
                        _this.initHandlers();
                    }, 250);
                }
            });
        }
        this.appProvider.setMainMenuOpen(this.mainMenuId, true);
    };
    /**
     * Init handlers on change (size or handlers).
     */
    CoreMainMenuPage.prototype.initHandlers = function () {
        var _this = this;
        if (this.allHandlers) {
            this.tabsPlacement = this.mainMenuProvider.getTabPlacement(this.navCtrl);
            var handlers = this.allHandlers.slice(0, this.mainMenuProvider.getNumItems()); // Get main handlers.
            // Re-build the list of tabs. If a handler is already in the list, use existing object to prevent re-creating the tab.
            var newTabs = [];
            var _loop_1 = function (i) {
                var handler = handlers[i];
                // Check if the handler is already in the tabs list. If so, use it.
                var tab = this_1.tabs.find(function (tab) {
                    return tab.title == handler.title && tab.icon == handler.icon;
                });
                tab ? tab.hide = false : null;
                handler.hide = false;
                newTabs.push(tab || handler);
            };
            var this_1 = this;
            for (var i = 0; i < handlers.length; i++) {
                _loop_1(i);
            }
            // Maintain tab in phantom mode in case is not visible.
            var selectedTab_1 = this.mainTabs.getSelected();
            if (selectedTab_1) {
                var oldTab_1 = this.tabs.find(function (tab) {
                    return tab.page == selectedTab_1.root && tab.icon == selectedTab_1.tabIcon;
                });
                if (oldTab_1) {
                    // Check if the selected handler is visible.
                    var isVisible = newTabs.some(function (newTab) {
                        return oldTab_1.title == newTab.title && oldTab_1.icon == newTab.icon;
                    });
                    if (!isVisible) {
                        oldTab_1.hide = true;
                        newTabs.push(oldTab_1);
                    }
                }
            }
            this.tabs = newTabs;
            // Sort them by priority so new handlers are in the right position.
            this.tabs.sort(function (a, b) {
                return b.priority - a.priority;
            });
            this.loaded = this.menuDelegate.areHandlersLoaded();
        }
        if (this.urlToOpen) {
            // There's a content link to open.
            var url = this.urlToOpen;
            delete this.urlToOpen;
            this.linksDelegate.getActionsFor(url, undefined).then(function (actions) {
                var action = _this.linksHelper.getFirstValidAction(actions);
                if (action && action.sites.length) {
                    // Action should only have 1 site because we're filtering by username.
                    action.action(action.sites[0]);
                }
            });
        }
    };
    /**
     * Handle a redirect.
     *
     * @param data Data received.
     */
    CoreMainMenuPage.prototype.handleRedirect = function (data) {
        var _this = this;
        // Check if the redirect page is the root page of any of the tabs.
        var i = this.tabs.findIndex(function (tab, i) {
            return tab.page == data.redirectPage;
        });
        if (i >= 0) {
            // Tab found. Set the params.
            this.tabs[i].pageParams = Object.assign({}, data.redirectParams);
        }
        else {
            // Tab not found, use a phantom tab.
            this.redirectPage = data.redirectPage;
            this.redirectParams = data.redirectParams;
        }
        // Force change detection, otherwise sometimes the tab was selected before the params were applied.
        this.cdr.detectChanges();
        setTimeout(function () {
            // Let the tab load the params before navigating.
            _this.mainTabs.selectTabRootByIndex(i + 1);
        });
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuPage.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
        this.redirectObs && this.redirectObs.off();
        window.removeEventListener('resize', this.initHandlers.bind(this));
        this.appProvider.setMainMenuOpen(this.mainMenuId, false);
        this.keyboardObserver && this.keyboardObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_ion_tabs_ion_tabs__["a" /* CoreIonTabsComponent */])
    ], CoreMainMenuPage.prototype, "mainTabs", void 0);
    CoreMainMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-mainmenu',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\mainmenu\pages\menu\menu.html"*/'<core-ion-tabs #mainTabs [hidden]="!showTabs" [loaded]="loaded" tabsLayout="title-hide" [attr.tabsPlacement]="tabsPlacement">\n\n    <core-ion-tab [enabled]="false" [show]="false" [root]="redirectPage" [rootParams]="redirectParams"></core-ion-tab>\n\n    <core-ion-tab *ngFor="let tab of tabs" [root]="tab.page" [rootParams]="tab.pageParams" [tabTitle]="tab.title | translate" [tabIcon]="tab.icon" [tabBadge]="tab.badge" class="{{tab.class}}" [enabled]="!tab.hide" [show]="!tab.hide"></core-ion-tab>\n\n    <core-ion-tab root="CoreMainMenuMorePage" [tabTitle]="\'core.more\' | translate" tabIcon="menu"></core-ion-tab>\n\n</core-ion-tabs>\n\n<div class="core-network-message" [hidden]="!showTabs">\n\n    <div class="core-online-message">\n\n        {{ "core.youreonline" | translate }}\n\n    </div>\n\n    <div class="core-offline-message">\n\n        {{ "core.youreoffline" | translate }}\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\core\mainmenu\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_delegate__["a" /* CoreMainMenuDelegate */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["b" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["b" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mainmenu__["a" /* CoreMainMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */],
            __WEBPACK_IMPORTED_MODULE_9__core_contentlinks_providers_helper__["b" /* CoreContentLinksHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app__["b" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */]])
    ], CoreMainMenuPage);
    return CoreMainMenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=34.js.map