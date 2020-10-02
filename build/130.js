webpackJsonp([130],{

/***/ 2208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return AddonMessagesDiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discussion__ = __webpack_require__(2368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(68);
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







var AddonMessagesDiscussionPageModule = /** @class */ (function () {
    function AddonMessagesDiscussionPageModule() {
    }
    AddonMessagesDiscussionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__discussion__["a" /* AddonMessagesDiscussionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__discussion__["a" /* AddonMessagesDiscussionPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessagesDiscussionPageModule);
    return AddonMessagesDiscussionPageModule;
}());

//# sourceMappingURL=discussion.module.js.map

/***/ }),

/***/ 2368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_messages_offline__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sync__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__classes_animations__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_split_view_split_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_infinite_loading_infinite_loading__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ts_md5_dist_md5__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_moment__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_moment__);
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



















/**
 * Page that displays a message discussion page.
 */
var AddonMessagesDiscussionPage = /** @class */ (function () {
    function AddonMessagesDiscussionPage(eventsProvider, sitesProvider, navParams, userProvider, navCtrl, messagesSync, domUtils, messagesProvider, logger, utils, appProvider, translate, svComponent, messagesOffline, modalCtrl, textUtils) {
        var _this = this;
        this.eventsProvider = eventsProvider;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.messagesSync = messagesSync;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.utils = utils;
        this.appProvider = appProvider;
        this.translate = translate;
        this.svComponent = svComponent;
        this.messagesOffline = messagesOffline;
        this.modalCtrl = modalCtrl;
        this.textUtils = textUtils;
        this.unreadMessageFrom = 0;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.favouriteIconSlash = false;
        this.deleteIcon = 'trash';
        this.blockIcon = 'close-circle';
        this.addRemoveIcon = 'person';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.muteEnabled = false;
        this.muteIcon = 'volume-off';
        this.newMessages = 0;
        this.siteId = sitesProvider.getCurrentSiteId();
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.groupMessagingEnabled = this.messagesProvider.isGroupMessagingEnabled();
        this.muteEnabled = this.messagesProvider.isMuteConversationEnabled();
        this.logger = logger.getInstance('AddonMessagesDiscussionPage');
        this.conversationId = navParams.get('conversationId');
        this.userId = navParams.get('userId');
        this.showKeyboard = navParams.get('showKeyboard');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_sync__["a" /* AddonMessagesSyncProvider */].AUTO_SYNCED, function (data) {
            if ((data.userId && data.userId == _this.userId) ||
                (data.conversationId && data.conversationId == _this.conversationId)) {
                // Fetch messages.
                _this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _this.domUtils.showErrorModal(data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.userId && (_this.members[data.userId] || _this.otherMember && data.userId == _this.otherMember.id)) {
                _this.fetchData();
            }
        }, this.siteId);
        this.scrollListener = this.scrollListenerFunction.bind(this);
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @return If message is not mine and was recently added.
     */
    AddonMessagesDiscussionPage.prototype.addMessage = function (message, keep) {
        if (keep === void 0) { keep = true; }
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        message.hash = __WEBPACK_IMPORTED_MODULE_17_ts_md5_dist_md5__["Md5"].hashAsciiStr(String(message.id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        var added = false;
        if (typeof this.keepMessageMap[message.hash] === 'undefined') {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    };
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    AddonMessagesDiscussionPage.prototype.removeMessage = function (hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        var position = this.messages.findIndex(function (message) {
            return message.hash == hash;
        });
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    };
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    AddonMessagesDiscussionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Disable the profile button if we're already coming from a profile.
        var backViewPage = this.navCtrl.getPrevious() && this.navCtrl.getPrevious().component.name;
        this.showInfo = !backViewPage || backViewPage !== 'CoreUserProfilePage';
        // Recalculate footer position when keyboard is shown or hidden.
        this.keyboardObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */].KEYBOARD_CHANGE, function (kbHeight) {
            _this.content.resize();
        });
        this.fetchData();
    };
    /**
     * Convenience function to fetch the conversation data.
     *
     * @return Resolved when done.
     */
    AddonMessagesDiscussionPage.prototype.fetchData = function () {
        var _this = this;
        var loader;
        if (this.showLoadingModal) {
            loader = this.domUtils.showModalLoading();
        }
        if (!this.groupMessagingEnabled && this.userId) {
            // Get the user profile to retrieve the user fullname and image.
            this.userProvider.getProfile(this.userId, undefined, true).then(function (user) {
                if (!_this.title) {
                    _this.title = user.fullname;
                }
                _this.conversationImage = user.profileimageurl;
            });
        }
        // Synchronize messages if needed.
        return this.messagesSync.syncDiscussion(this.conversationId, this.userId).catch(function () {
            // Ignore errors.
        }).then(function (warnings) {
            if (warnings && warnings[0]) {
                _this.domUtils.showErrorModal(warnings[0]);
            }
            if (_this.groupMessagingEnabled) {
                // Get the conversation ID if it exists and we don't have it yet.
                return _this.getConversation(_this.conversationId, _this.userId).then(function (exists) {
                    var promises = [];
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(_this.fetchMessages());
                    }
                    if (_this.userId) {
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_this.messagesProvider.invalidateMemberInfo(_this.userId).catch(function () {
                            // Shouldn't happen.
                        }).then(function () {
                            return _this.messagesProvider.getMemberInfo(_this.userId);
                        }).then(function (member) {
                            _this.otherMember = member;
                            if (!exists && member) {
                                _this.conversationImage = member.profileimageurl;
                                _this.title = member.fullname;
                            }
                            _this.blockIcon = _this.otherMember && _this.otherMember.isblocked ? 'checkmark-circle' : 'close-circle';
                        }));
                    }
                    else {
                        _this.otherMember = null;
                    }
                    return Promise.all(promises);
                });
            }
            else {
                _this.otherMember = null;
                // Fetch the messages for the first time.
                return _this.fetchMessages().then(function () {
                    if (!_this.title && _this.messages.length) {
                        // Didn't receive the fullname via argument. Try to get it from messages.
                        // It's possible that name cannot be resolved when no messages were yet exchanged.
                        var firstMessage = _this.messages[0];
                        if (firstMessage.useridto != _this.currentUserId) {
                            _this.title = firstMessage.usertofullname || '';
                        }
                        else {
                            _this.title = firstMessage.userfromfullname || '';
                        }
                    }
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
        }).finally(function () {
            _this.checkCanDelete();
            _this.resizeContent();
            _this.loaded = true;
            _this.setPolling(); // Make sure we're polling messages.
            _this.setContactRequestInfo();
            _this.setFooterType();
            loader && loader.dismiss();
        });
    };
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    AddonMessagesDiscussionPage.prototype.ionViewDidEnter = function () {
        this.setPolling();
    };
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    AddonMessagesDiscussionPage.prototype.ionViewWillLeave = function () {
        this.unsetPolling();
    };
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @return Resolved when done.
     */
    AddonMessagesDiscussionPage.prototype.fetchMessages = function (messagesAreNew) {
        var _this = this;
        if (messagesAreNew === void 0) { messagesAreNew = true; }
        this.loadMoreError = false;
        if (this.messagesBeingSent > 0) {
            // We do not poll while a message is being sent or we could confuse the user.
            // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
            return Promise.reject(null);
        }
        else if (this.fetching) {
            // Already fetching.
            return Promise.reject(null);
        }
        else if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to fetch messages.
            return Promise.reject(null);
        }
        if (this.conversationId) {
            this.logger.debug("Polling new messages for conversation '" + this.conversationId + "'");
        }
        else {
            this.logger.debug("Polling new messages for discussion with user '" + this.userId + "'");
        }
        this.fetching = true;
        // Wait for synchronization process to finish.
        return this.messagesSync.waitForSyncConversation(this.conversationId, this.userId).then(function () {
            // Fetch messages. Invalidate the cache before fetching.
            if (_this.groupMessagingEnabled) {
                return _this.messagesProvider.invalidateConversationMessages(_this.conversationId).catch(function () {
                    // Ignore errors.
                }).then(function () {
                    return _this.getConversationMessages(_this.pagesLoaded);
                });
            }
            else {
                return _this.messagesProvider.invalidateDiscussionCache(_this.userId).catch(function () {
                    // Ignore errors.
                }).then(function () {
                    return _this.getDiscussionMessages(_this.pagesLoaded);
                });
            }
        }).then(function (messages) {
            _this.loadMessages(messages, messagesAreNew);
        }).finally(function () {
            _this.fetching = false;
        });
    };
    /**
     * Format and load a list of messages into the view.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @param messages Messages to load.
     */
    AddonMessagesDiscussionPage.prototype.loadMessages = function (messages, messagesAreNew) {
        var _this = this;
        if (messagesAreNew === void 0) { messagesAreNew = true; }
        if (this.viewDestroyed) {
            return;
        }
        // Don't use domUtils.getScrollHeight because it gives an outdated value after receiving a new message.
        var scrollHeight = this.content && this.content.getScrollElement() ? this.content.getScrollElement().scrollHeight : 0;
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = Math.abs(scrollHeight - this.domUtils.getScrollTop(this.content) -
            this.domUtils.getContentHeight(this.content)) < 5;
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        var newMessages = messages.reduce(function (val, message) {
            return val + (_this.addMessage(message) ? 1 : 0);
        }, 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (var hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        this.messagesProvider.sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach(function (message, index) {
            message.showDate = _this.showDate(message, _this.messages[index - 1]);
            message.showUserData = _this.showUserData(message, _this.messages[index - 1]);
            message.showTail = _this.showTail(message, _this.messages[index + 1]);
        });
        // Call resize to recalculate the dimensions.
        this.content && this.content.resize();
        // If we received a new message while using group messaging, force mark messages as read.
        var last = this.messages[this.messages.length - 1], forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    };
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages NUmber of messages still to be read.
     */
    AddonMessagesDiscussionPage.prototype.setNewMessagesBadge = function (addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            // Setup scrolling.
            this.content.getScrollElement().addEventListener('scroll', this.scrollListener);
            this.scrollListenerFunction();
        }
        else if (this.newMessages > 0 && addMessages == 0) {
            // Remove scrolling.
            this.content.getScrollElement().removeEventListener('scroll', this.scrollListener);
        }
        this.newMessages = addMessages;
    };
    /**
     * The scroll was moved. Update new messages count.
     */
    AddonMessagesDiscussionPage.prototype.scrollListenerFunction = function () {
        if (this.newMessages > 0) {
            var scrollBottom = this.domUtils.getScrollTop(this.content) + this.domUtils.getContentHeight(this.content);
            var scrollHeight = this.domUtils.getScrollHeight(this.content);
            if (scrollBottom > scrollHeight - 40) {
                // At the bottom, reset.
                this.setNewMessagesBadge(0);
                return;
            }
            var scrollElRect = this.content.getScrollElement().getBoundingClientRect();
            var scrollBottomPos_1 = (scrollElRect && scrollElRect.bottom) || 0;
            if (scrollBottomPos_1 == 0) {
                return;
            }
            var messages = Array.from(document.querySelectorAll('.addon-message-not-mine')).slice(-this.newMessages).reverse();
            var newMessagesUnread = messages.findIndex(function (message, index) {
                var elementRect = message.getBoundingClientRect();
                if (!elementRect) {
                    return false;
                }
                return elementRect.bottom <= scrollBottomPos_1;
            });
            if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
                this.setNewMessagesBadge(newMessagesUnread);
            }
        }
    };
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @return Promise resolved with a boolean: whether the conversation exists or not.
     */
    AddonMessagesDiscussionPage.prototype.getConversation = function (conversationId, userId) {
        var _this = this;
        var promise, fallbackConversation;
        // Try to get the conversationId if we don't have it.
        if (conversationId) {
            promise = Promise.resolve(conversationId);
        }
        else {
            var subPromise = void 0;
            if (userId == this.currentUserId && this.messagesProvider.isSelfConversationEnabled()) {
                subPromise = this.messagesProvider.getSelfConversation();
            }
            else {
                subPromise = this.messagesProvider.getConversationBetweenUsers(userId, undefined, true);
            }
            promise = subPromise.then(function (conversation) {
                fallbackConversation = conversation;
                return conversation.id;
            });
        }
        return promise.then(function (conversationId) {
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            return _this.messagesProvider.invalidateConversation(conversationId).catch(function () {
                // Ignore errors.
            }).then(function () {
                return _this.messagesProvider.getConversation(conversationId, undefined, true);
            }).catch(function (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    return fallbackConversation;
                }
                return Promise.reject(error);
            }).then(function (conversation) {
                _this.conversation = conversation;
                if (conversation) {
                    _this.conversationId = conversation.id;
                    _this.title = conversation.name;
                    _this.conversationImage = conversation.imageurl;
                    _this.isGroup = conversation.type == __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_GROUP;
                    _this.favouriteIcon = 'fa-star';
                    _this.favouriteIconSlash = conversation.isfavourite;
                    _this.muteIcon = conversation.ismuted ? 'volume-up' : 'volume-off';
                    if (!_this.isGroup) {
                        _this.userId = conversation.userid;
                    }
                    _this.isSelf = conversation.type == __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_SELF;
                    return true;
                }
                else {
                    return false;
                }
            });
        }, function (error) {
            // Probably conversation does not exist or user is offline. Try to load offline messages.
            _this.isSelf = userId == _this.currentUserId;
            return _this.messagesOffline.getMessages(userId).then(function (messages) {
                if (messages && messages.length) {
                    // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                    messages.forEach(function (message) {
                        message.pending = true;
                        message.text = message.smallmessage;
                    });
                    _this.loadMessages(messages);
                }
                else if (error.errorcode != 'errorconversationdoesnotexist') {
                    // Display the error.
                    return Promise.reject(error);
                }
                return false;
            });
        });
    };
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @return Promise resolved with the list of messages.
     */
    AddonMessagesDiscussionPage.prototype.getConversationMessages = function (pagesToLoad, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        var excludePending = offset > 0;
        return this.messagesProvider.getConversationMessages(this.conversationId, excludePending, offset).then(function (result) {
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach(function (member) {
                    _this.members[member.id] = member;
                });
            }
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].LIMIT_MESSAGES;
                // Get more messages.
                return _this.getConversationMessages(pagesToLoad, offset).then(function (nextMessages) {
                    return result.messages.concat(nextMessages);
                });
            }
            else {
                // No more messages to load, return them.
                _this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    };
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @return Resolved when done.
     */
    AddonMessagesDiscussionPage.prototype.getDiscussionMessages = function (pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead) {
        var _this = this;
        if (lfReceivedUnread === void 0) { lfReceivedUnread = 0; }
        if (lfReceivedRead === void 0) { lfReceivedRead = 0; }
        if (lfSentUnread === void 0) { lfSentUnread = 0; }
        if (lfSentRead === void 0) { lfSentRead = 0; }
        // Only get offline messages if we're loading the first "page".
        var excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
        // Get next messages.
        return this.messagesProvider.getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead).then(function (result) {
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach(function (message) {
                    if (!message.pending) {
                        if (message.useridfrom == _this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                return _this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead)
                    .then(function (nextMessages) {
                    return result.messages.concat(nextMessages);
                });
            }
            else {
                // No more messages to load, return them.
                _this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    };
    /**
     * Mark messages as read.
     */
    AddonMessagesDiscussionPage.prototype.markMessagesAsRead = function (forceMark) {
        var _this = this;
        var readChanged = false;
        var promises = [];
        if (this.messagesProvider.isMarkAllMessagesReadEnabled()) {
            var messageUnreadFound = false;
            // Mark all messages at a time if there is any unread message.
            if (forceMark) {
                messageUnreadFound = true;
            }
            else if (this.groupMessagingEnabled) {
                messageUnreadFound = this.conversation && this.conversation.unreadcount > 0 && this.conversationId > 0;
            }
            else {
                for (var x in this.messages) {
                    var message = this.messages[x];
                    // If an unread message is found, mark all messages as read.
                    if (message.useridfrom != this.currentUserId &&
                        message.read == 0) {
                        messageUnreadFound = true;
                        break;
                    }
                }
            }
            if (messageUnreadFound) {
                this.setUnreadLabelPosition();
                var promise = void 0;
                if (this.groupMessagingEnabled) {
                    promise = this.messagesProvider.markAllConversationMessagesRead(this.conversationId);
                }
                else {
                    promise = this.messagesProvider.markAllMessagesRead(this.userId).then(function () {
                        // Mark all messages as read.
                        _this.messages.forEach(function (message) {
                            message.read = 1;
                        });
                    });
                }
                promises.push(promise.then(function () {
                    readChanged = true;
                }));
            }
        }
        else {
            this.setUnreadLabelPosition();
            // Mark each message as read one by one.
            this.messages.forEach(function (message) {
                // If the message is unread, call this.messagesProvider.markMessageRead.
                if (message.useridfrom != _this.currentUserId && message.read == 0) {
                    promises.push(_this.messagesProvider.markMessageRead(message.id).then(function () {
                        readChanged = true;
                        message.read = 1;
                    }));
                }
            });
        }
        Promise.all(promises).finally(function () {
            if (readChanged) {
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, {
                    conversationId: _this.conversationId,
                    userId: _this.userId
                }, _this.siteId);
            }
        });
    };
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    AddonMessagesDiscussionPage.prototype.notifyNewMessage = function () {
        var last = this.messages[this.messages.length - 1];
        var trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text, timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: this.conversation && this.conversation.isfavourite,
                type: this.conversation && this.conversation.type
            }, this.siteId);
            // Update navBar links and buttons.
            var newCanDelete = (last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    };
    /**
     * Set the place where the unread label position has to be.
     */
    AddonMessagesDiscussionPage.prototype.setUnreadLabelPosition = function () {
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && this.conversation.unreadcount > 0 && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                var found = 0;
                for (var i = this.messages.length - 1; i >= 0; i--) {
                    var message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            var previousMessageRead = false;
            for (var x in this.messages) {
                var message = this.messages[x];
                if (message.useridfrom != this.currentUserId) {
                    var unreadFrom = message.read == 0 && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = message.read != 0;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    };
    /**
     * Check if there's any message in the list that can be deleted.
     */
    AddonMessagesDiscussionPage.prototype.checkCanDelete = function () {
        // All messages being sent should be at the end of the list.
        var first = this.messages[0];
        this.canDelete = first && !first.sending;
    };
    /**
     * Hide unread label when sending messages.
     */
    AddonMessagesDiscussionPage.prototype.hideUnreadLabel = function () {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    };
    /**
     * Wait until fetching is false.
     * @return Resolved when done.
     */
    AddonMessagesDiscussionPage.prototype.waitForFetch = function () {
        var _this = this;
        if (!this.fetching) {
            return Promise.resolve();
        }
        var deferred = this.utils.promiseDefer();
        setTimeout(function () {
            return _this.waitForFetch().finally(function () {
                deferred.resolve();
            });
        }, 400);
        return deferred.promise;
    };
    /**
     * Set a polling to get new messages every certain time.
     */
    AddonMessagesDiscussionPage.prototype.setPolling = function () {
        var _this = this;
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = setInterval(function () {
                _this.fetchMessages().catch(function () {
                    // Ignore errors.
                });
            }, __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].POLL_INTERVAL);
        }
    };
    /**
     * Unset polling.
     */
    AddonMessagesDiscussionPage.prototype.unsetPolling = function () {
        if (this.polling) {
            this.logger.debug("Cancelling polling for conversation with user '" + this.userId + "'");
            clearInterval(this.polling);
            this.polling = undefined;
        }
    };
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    AddonMessagesDiscussionPage.prototype.copyMessage = function (message) {
        var text = this.textUtils.decodeHTMLEntities(message.smallmessage || message.text || '');
        this.utils.copyToClipboard(text);
    };
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    AddonMessagesDiscussionPage.prototype.deleteMessage = function (message, index) {
        var _this = this;
        var canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers, langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
            'addon.messages.deletemessageconfirmation', options = {};
        if (canDeleteAll && !message.pending) {
            // Show delete for all checkbox.
            options.inputs = [{
                    type: 'checkbox',
                    name: 'deleteforall',
                    checked: false,
                    value: true,
                    label: this.translate.instant('addon.messages.deleteforeveryone')
                }];
        }
        this.domUtils.showConfirm(this.translate.instant(langKey), undefined, undefined, undefined, options).then(function (data) {
            var modal = _this.domUtils.showModalLoading('core.deleting', true);
            return _this.messagesProvider.deleteMessage(message, data && data[0]).then(function () {
                // Remove message from the list without having to wait for re-fetch.
                _this.messages.splice(index, 1);
                _this.removeMessage(message.hash);
                _this.notifyNewMessage();
                _this.fetchMessages(); // Re-fetch messages to update cached data.
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
        });
    };
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    AddonMessagesDiscussionPage.prototype.loadPrevious = function (infiniteComplete) {
        var _this = this;
        var infiniteHeight = this.infinite ? this.infinite.getHeight() : 0;
        var scrollHeight = this.domUtils.getScrollHeight(this.content);
        // If there is an ongoing fetch, wait for it to finish.
        return this.waitForFetch().finally(function () {
            _this.pagesLoaded++;
            _this.fetchMessages(false).then(function () {
                // Try to keep the scroll position.
                var scrollBottom = scrollHeight - _this.domUtils.getScrollTop(_this.content);
                if (_this.canLoadMore && infiniteHeight && _this.infinite) {
                    // The height of the infinite is different while spinner is shown. Add that difference.
                    infiniteHeight = infiniteHeight - _this.infinite.getHeight();
                }
                else if (!_this.canLoadMore) {
                    // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                    infiniteHeight = infiniteHeight || (_this.infinite ? _this.infinite.getHeight() : 0);
                }
                _this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
            }).catch(function (error) {
                _this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                _this.pagesLoaded--;
                _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }).finally(function () {
                infiniteComplete && infiniteComplete();
            });
        });
    };
    /**
     * Keep scroll position after loading previous messages.
     * We don't use resizeContent because the approach used is different and it isn't easy to calculate these positions.
     */
    AddonMessagesDiscussionPage.prototype.keepScroll = function (oldScrollHeight, oldScrollBottom, infiniteHeight, retries) {
        var _this = this;
        retries = retries || 0;
        setTimeout(function () {
            var newScrollHeight = _this.domUtils.getScrollHeight(_this.content);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    _this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            var scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
            _this.domUtils.scrollTo(_this.content, 0, scrollTo, 0);
        }, 30);
    };
    /**
     * Content or scroll has been resized. For content, only call it if it's been added on top.
     */
    AddonMessagesDiscussionPage.prototype.resizeContent = function () {
        var _this = this;
        var top = this.content.getContentDimensions().scrollTop;
        this.content.resize();
        // Wait for new content height to be calculated.
        setTimeout(function () {
            // Visible content size changed, maintain the bottom position.
            if (!_this.viewDestroyed && _this.content && _this.domUtils.getContentHeight(_this.content) != _this.oldContentHeight) {
                if (!top) {
                    top = _this.content.getContentDimensions().scrollTop;
                }
                top += _this.oldContentHeight - _this.domUtils.getContentHeight(_this.content);
                _this.oldContentHeight = _this.domUtils.getContentHeight(_this.content);
                _this.domUtils.scrollTo(_this.content, 0, top, 0);
            }
        });
    };
    /**
     * Scroll bottom when render has finished.
     */
    AddonMessagesDiscussionPage.prototype.scrollToBottom = function () {
        var _this = this;
        // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
        if (this.scrollBottom) {
            // Need a timeout to leave time to the view to be rendered.
            setTimeout(function () {
                if (!_this.viewDestroyed) {
                    _this.domUtils.scrollToBottom(_this.content, 0);
                }
            });
            this.scrollBottom = false;
            // Reset the badge.
            this.setNewMessagesBadge(0);
        }
    };
    /**
     * Scroll to the first new unread message.
     */
    AddonMessagesDiscussionPage.prototype.scrollToFirstUnreadMessage = function () {
        if (this.newMessages > 0) {
            var messages = Array.from(document.querySelectorAll('.addon-message-not-mine'));
            this.domUtils.scrollToElement(this.content, messages[messages.length - this.newMessages]);
        }
    };
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    AddonMessagesDiscussionPage.prototype.sendMessage = function (text) {
        var _this = this;
        var message;
        this.hideUnreadLabel();
        this.showDelete = false;
        this.scrollBottom = true;
        this.setNewMessagesBadge(0);
        message = {
            id: null,
            pending: true,
            sending: true,
            useridfrom: this.currentUserId,
            smallmessage: text,
            text: text,
            timecreated: new Date().getTime()
        };
        message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
        this.addMessage(message, false);
        this.messagesBeingSent++;
        // If there is an ongoing fetch, wait for it to finish.
        // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
        this.waitForFetch().finally(function () {
            var promise;
            if (_this.conversationId) {
                promise = _this.messagesProvider.sendMessageToConversation(_this.conversation, text);
            }
            else {
                promise = _this.messagesProvider.sendMessage(_this.userId, text);
            }
            promise.then(function (data) {
                var promise;
                _this.messagesBeingSent--;
                if (data.sent) {
                    if (!_this.conversationId && data.message && data.message.conversationid) {
                        // Message sent to a new conversation, try to load the conversation.
                        promise = _this.getConversation(data.message.conversationid, _this.userId).then(function () {
                            // Now fetch messages.
                            return _this.fetchMessages();
                        }).finally(function () {
                            // Start polling messages now that the conversation exists.
                            _this.setPolling();
                        });
                    }
                    else {
                        // Message was sent, fetch messages right now.
                        promise = _this.fetchMessages();
                    }
                }
                else {
                    promise = Promise.reject(null);
                }
                promise.catch(function () {
                    // Fetch failed or is offline message, mark the message as sent.
                    // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                    message.sending = false;
                    if (data.sent) {
                        // Message sent to server, not pending anymore.
                        message.pending = false;
                    }
                    else if (data.message) {
                        message.timecreated = data.message.timecreated;
                    }
                    _this.notifyNewMessage();
                });
            }).catch(function (error) {
                _this.messagesBeingSent--;
                // Only close the keyboard if an error happens.
                // We want the user to be able to send multiple messages without the keyboard being closed.
                _this.appProvider.closeKeyboard();
                _this.domUtils.showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                _this.removeMessage(message.hash);
            });
        });
    };
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @return If date has changed and should be shown.
     */
    AddonMessagesDiscussionPage.prototype.showDate = function (message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !__WEBPACK_IMPORTED_MODULE_18_moment__(message.timecreated).isSame(prevMessage.timecreated, 'day');
    };
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @return Whether user data should be shown.
     */
    AddonMessagesDiscussionPage.prototype.showUserData = function (message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[message.useridfrom] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || message.showDate);
    };
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @return Whether user data should be shown.
     */
    AddonMessagesDiscussionPage.prototype.showTail = function (message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || nextMessage.showDate;
    };
    /**
     * Toggles delete state.
     */
    AddonMessagesDiscussionPage.prototype.toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    AddonMessagesDiscussionPage.prototype.viewInfo = function () {
        var _this = this;
        if (this.isGroup) {
            // Display the group information.
            var modal = this.modalCtrl.create('AddonMessagesConversationInfoPage', {
                conversationId: this.conversationId
            });
            modal.present();
            modal.onDidDismiss(function (userId) {
                if (typeof userId != 'undefined') {
                    // Open user conversation.
                    if (_this.svComponent) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].OPEN_CONVERSATION_EVENT, { userId: userId }, _this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _this.navCtrl.push('AddonMessagesDiscussionPage', { userId: userId });
                    }
                }
            });
        }
        else {
            // Open the user profile.
            var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
            navCtrl.push('CoreUserProfilePage', { userId: this.userId });
        }
    };
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    AddonMessagesDiscussionPage.prototype.changeFavourite = function (done) {
        var _this = this;
        this.favouriteIcon = 'spinner';
        this.messagesProvider.setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite).then(function () {
            _this.conversation.isfavourite = !_this.conversation.isfavourite;
            // Get the conversation data so it's cached. Don't block the user for this.
            _this.messagesProvider.getConversation(_this.conversation.id, undefined, true);
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                conversationId: _this.conversation.id,
                action: 'favourite',
                value: _this.conversation.isfavourite
            }, _this.siteId);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error changing favourite state.');
        }).finally(function () {
            _this.favouriteIcon = 'fa-star';
            _this.favouriteIconSlash = _this.conversation.isfavourite;
            done && done();
        });
    };
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    AddonMessagesDiscussionPage.prototype.changeMute = function (done) {
        var _this = this;
        this.muteIcon = 'spinner';
        this.messagesProvider.muteConversation(this.conversation.id, !this.conversation.ismuted).then(function () {
            _this.conversation.ismuted = !_this.conversation.ismuted;
            // Get the conversation data so it's cached. Don't block the user for this.
            _this.messagesProvider.getConversation(_this.conversation.id, undefined, true);
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                conversationId: _this.conversation.id,
                action: 'mute',
                value: _this.conversation.ismuted
            }, _this.siteId);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error changing muted state.');
        }).finally(function () {
            _this.muteIcon = _this.conversation.ismuted ? 'volume-up' : 'volume-off';
            done && done();
        });
    };
    /**
     * Calculate whether there are pending contact requests.
     */
    AddonMessagesDiscussionPage.prototype.setContactRequestInfo = function () {
        var _this = this;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = this.otherMember.contactrequests.some(function (request) {
                return request.userid == _this.currentUserId && request.requesteduserid == _this.otherMember.id;
            });
            this.requestContactReceived = this.otherMember.contactrequests.some(function (request) {
                return request.userid == _this.otherMember.id && request.requesteduserid == _this.currentUserId;
            });
        }
    };
    /**
     * Calculate what to display in the footer.
     */
    AddonMessagesDiscussionPage.prototype.setFooterType = function () {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    };
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @return Promise resolved when user is blocked or dialog is cancelled.
     */
    AddonMessagesDiscussionPage.prototype.blockUser = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var template = this.translate.instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
        var okText = this.translate.instant('addon.messages.blockuser');
        return this.domUtils.showConfirm(template, undefined, okText).then(function () {
            _this.blockIcon = 'spinner';
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            _this.showLoadingModal = true;
            return _this.messagesProvider.blockContact(_this.otherMember.id).finally(function () {
                modal.dismiss();
                _this.showLoadingModal = false;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        }).finally(function () {
            _this.blockIcon = _this.otherMember.isblocked ? 'close-circle' : 'checkmark-circle';
        });
    };
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    AddonMessagesDiscussionPage.prototype.deleteConversation = function (done) {
        var _this = this;
        var confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
        this.domUtils.showDeleteConfirm(confirmMessage).then(function () {
            _this.deleteIcon = 'spinner';
            return _this.messagesProvider.deleteConversation(_this.conversation.id).then(function () {
                _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: _this.conversation.id,
                    action: 'delete'
                }, _this.siteId);
                _this.messages = [];
            }).finally(function () {
                _this.deleteIcon = 'trash';
                done && done();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error deleting conversation.');
        });
    };
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @return Promise resolved when user is unblocked or dialog is cancelled.
     */
    AddonMessagesDiscussionPage.prototype.unblockUser = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var template = this.translate.instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
        var okText = this.translate.instant('addon.messages.unblockuser');
        return this.domUtils.showConfirm(template, undefined, okText).then(function () {
            _this.blockIcon = 'spinner';
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            _this.showLoadingModal = true;
            return _this.messagesProvider.unblockContact(_this.otherMember.id).finally(function () {
                modal.dismiss();
                _this.showLoadingModal = false;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        }).finally(function () {
            _this.blockIcon = _this.otherMember.isblocked ? 'close-circle' : 'checkmark-circle';
        });
    };
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    AddonMessagesDiscussionPage.prototype.createContactRequest = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var template = this.translate.instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
        var okText = this.translate.instant('core.add');
        return this.domUtils.showConfirm(template, undefined, okText).then(function () {
            _this.addRemoveIcon = 'spinner';
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            _this.showLoadingModal = true;
            return _this.messagesProvider.createContactRequest(_this.otherMember.id).finally(function () {
                modal.dismiss();
                _this.showLoadingModal = false;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        }).finally(function () {
            _this.addRemoveIcon = 'person';
        });
    };
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    AddonMessagesDiscussionPage.prototype.confirmContactRequest = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.showLoadingModal = true;
        return this.messagesProvider.confirmContactRequest(this.otherMember.id).finally(function () {
            modal.dismiss();
            _this.showLoadingModal = false;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        });
    };
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    AddonMessagesDiscussionPage.prototype.declineContactRequest = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.showLoadingModal = true;
        return this.messagesProvider.declineContactRequest(this.otherMember.id).finally(function () {
            modal.dismiss();
            _this.showLoadingModal = false;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        });
    };
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    AddonMessagesDiscussionPage.prototype.removeContact = function () {
        var _this = this;
        if (!this.otherMember) {
            // Should never happen.
            return Promise.reject(null);
        }
        var template = this.translate.instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
        var okText = this.translate.instant('core.remove');
        return this.domUtils.showConfirm(template, undefined, okText).then(function () {
            _this.addRemoveIcon = 'spinner';
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            _this.showLoadingModal = true;
            return _this.messagesProvider.removeContact(_this.otherMember.id).finally(function () {
                modal.dismiss();
                _this.showLoadingModal = false;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.error', true);
        }).finally(function () {
            _this.addRemoveIcon = 'person';
        });
    };
    /**
     * Page destroyed.
     */
    AddonMessagesDiscussionPage.prototype.ngOnDestroy = function () {
        // Unset again, just in case.
        this.unsetPolling();
        this.syncObserver && this.syncObserver.off();
        this.keyboardObserver && this.keyboardObserver.off();
        this.memberInfoObserver && this.memberInfoObserver.off();
        this.viewDestroyed = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonMessagesDiscussionPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_16__components_infinite_loading_infinite_loading__["a" /* CoreInfiniteLoadingComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__components_infinite_loading_infinite_loading__["a" /* CoreInfiniteLoadingComponent */])
    ], AddonMessagesDiscussionPage.prototype, "infinite", void 0);
    AddonMessagesDiscussionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-messages-discussion',template:/*ion-inline-start:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\pages\discussion\discussion.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>\n\n            <img *ngIf="loaded && !otherMember && conversationImage" class="core-bar-button-image" [src]="conversationImage" [alt]="title" onError="this.src=\'assets/img/group-avatar.png\'" core-external-content role="presentation" [siteId]="siteId || null">\n\n            <ion-avatar *ngIf="loaded && otherMember" class="core-bar-button-image" core-user-avatar [user]="otherMember" [linkProfile]="false" [checkOnline]="otherMember.showonlinestatus" item-start (click)="showInfo && viewInfo()"></ion-avatar>\n\n            <core-format-text [text]="title" contextLevel="system" [contextInstanceId]="0" (click)="showInfo && !isGroup && viewInfo()"></core-format-text>\n\n            <core-icon *ngIf="conversation && conversation.isfavourite" name="fa-star" [label]="\'core.favourites\' | translate"></core-icon>\n\n            <core-icon *ngIf="conversation && conversation.ismuted" name="volume-off" [label]="\'addon.messages.mutedconversation\' | translate"></core-icon>\n\n        </ion-title>\n\n        <ion-buttons end></ion-buttons>\n\n    </ion-navbar>\n\n    <core-navbar-buttons end>\n\n        <core-context-menu [aria-label]="\'addon.messages.conversationactions\' | translate">\n\n            <core-context-menu-item [hidden]="isSelf || !showInfo || isGroup" [priority]="1000" [content]="\'addon.messages.info\' | translate" (action)="viewInfo()" iconAction="information-circle"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !showInfo || !isGroup" [priority]="1000" [content]="\'addon.messages.groupinfo\' | translate" (action)="viewInfo()" iconAction="information-circle"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="!groupMessagingEnabled || !conversation" [priority]="800" [content]="(conversation && conversation.isfavourite ? \'addon.messages.removefromfavourites\' : \'addon.messages.addtofavourites\') | translate" (action)="changeFavourite($event)" [closeOnClick]="false" [iconAction]="favouriteIcon" [iconSlash]="favouriteIconSlash"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !otherMember || otherMember.isblocked" [priority]="700" [content]="\'addon.messages.blockuser\' | translate" (action)="blockUser()" [iconAction]="blockIcon"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !otherMember || !otherMember.isblocked" [priority]="700" [content]="\'addon.messages.unblockuser\' | translate" (action)="unblockUser()" [iconAction]="blockIcon"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !muteEnabled || !conversation" [priority]="600" [content]="(conversation && conversation.ismuted ? \'addon.messages.unmuteconversation\' : \'addon.messages.muteconversation\') | translate" (action)="changeMute($event)" [closeOnClick]="false" [iconAction]="muteIcon"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="!canDelete || !messages || !messages.length" [priority]="400" [content]="\'addon.messages.showdeletemessages\' | translate" (action)="toggleDelete()" [iconAction]="(showDelete ? \'checkbox-outline\' : \'square-outline\')"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length" [priority]="200" [content]="\'addon.messages.deleteconversation\' | translate" (action)="deleteConversation($event)" [closeOnClick]="false" [iconAction]="deleteIcon"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived" [priority]="100" [content]="\'addon.messages.addtoyourcontacts\' | translate" (action)="createContactRequest()" [iconAction]="addRemoveIcon"></core-context-menu-item>\n\n            <core-context-menu-item [hidden]="isSelf || !otherMember || !otherMember.iscontact" [priority]="100" [content]="\'addon.messages.removefromyourcontacts\' | translate" (action)="removeContact()" [iconAction]="addRemoveIcon" [iconSlash]="true"></core-context-menu-item>\n\n        </core-context-menu>\n\n    </core-navbar-buttons>\n\n</ion-header>\n\n<ion-content class="has-footer">\n\n    <core-loading [hideUntil]="loaded" class="safe-area-page">\n\n        <!-- Load previous messages. -->\n\n        <core-infinite-loading [enabled]="canLoadMore" (action)="loadPrevious($event)" position="top" [error]="loadMoreError"></core-infinite-loading>\n\n\n\n        <ng-container *ngIf="isSelf && !canLoadMore">\n\n            <p text-center>{{ \'addon.messages.selfconversation\' | translate }}</p>\n\n            <p text-center><i>{{ \'addon.messages.selfconversationdefaultmessage\' | translate }}</i></p>\n\n        </ng-container>\n\n\n\n        <ion-list class="addon-messages-discussion-container" [class.addon-messages-discussion-group]="isGroup" [attr.aria-live]="\'polite\'">\n\n            <ng-container *ngFor="let message of messages; index as index; last as last">\n\n                <h6 text-center *ngIf="message.showDate" class="addon-messages-date">\n\n                    {{ message.timecreated | coreFormatDate: "strftimedayshort" }}\n\n                </h6>\n\n\n\n                <ion-chip class="addon-messages-unreadfrom" *ngIf="unreadMessageFrom && message.id == unreadMessageFrom" color="light">\n\n                    <ion-label>{{ \'addon.messages.newmessages\' | translate }}</ion-label>\n\n                    <ion-icon name="arrow-round-down"></ion-icon>\n\n                </ion-chip>\n\n\n\n                <ion-item text-wrap (longPress)="copyMessage(message)" class="addon-message" [class.addon-message-mine]="message.useridfrom == currentUserId" [class.addon-message-not-mine]="message.useridfrom != currentUserId" [class.addon-message-no-user]="!message.showUserData" [@coreSlideInOut]="message.useridfrom == currentUserId ? \'\' : \'fromLeft\'">\n\n                    <!-- User data. -->\n\n                    <h2 class="addon-message-user">\n\n                        <ion-avatar item-start core-user-avatar [user]="members[message.useridfrom]" [linkProfile]="false" *ngIf="message.showUserData"></ion-avatar>\n\n\n\n                        <div *ngIf="message.showUserData">{{ members[message.useridfrom].fullname }}</div>\n\n\n\n                        <ion-note *ngIf="!message.pending">{{ message.timecreated | coreFormatDate: "strftimetime" }}</ion-note>\n\n                        <ion-note *ngIf="message.pending"><ion-icon name="time"></ion-icon></ion-note>\n\n                    </h2>\n\n\n\n                    <!-- Some messages have <p> and some others don\'t. Add a <p> so they all have same styles. -->\n\n                    <p class="addon-message-text">\n\n                        <core-format-text (afterRender)="last && scrollToBottom()" [text]="message.text" contextLevel="system" [contextInstanceId]="0"></core-format-text>\n\n                    </p>\n\n\n\n                    <button ion-button icon-only clear="true" *ngIf="!message.sending && showDelete" (click)="deleteMessage(message, index)" class="addon-messages-delete-button" [@coreSlideInOut]="\'fromRight\'" [attr.aria-label]=" \'addon.messages.deletemessage\' | translate">\n\n                        <ion-icon name="trash" color="danger"></ion-icon>\n\n                    </button>\n\n                    <div class="tail" *ngIf="message.showTail"></div>\n\n                </ion-item>\n\n            </ng-container>\n\n        </ion-list>\n\n        <!-- Scroll bottom. -->\n\n        <ion-fab core-fab bottom end *ngIf="newMessages > 0">\n\n            <button ion-fab mini (click)="scrollToFirstUnreadMessage(true)" color="light" [attr.aria-label]="\'addon.messages.newmessages\' | translate">\n\n                <ion-icon name="arrow-round-down"></ion-icon>\n\n                <span class="core-discussion-messages-badge">{{ newMessages }}</span>\n\n            </button>\n\n        </ion-fab>\n\n        <core-empty-box *ngIf="!messages || messages.length <= 0" icon="chatbubbles" [message]="\'addon.messages.nomessagesfound\' | translate"></core-empty-box>\n\n    </core-loading>\n\n</ion-content>\n\n<ion-footer color="light" class="footer-adjustable" *ngIf="loaded && (!conversationId || conversation)">\n\n    <ion-toolbar color="light" position="bottom">\n\n        <p *ngIf="footerType == \'unable\'" text-center margin-horizontal>{{ \'addon.messages.unabletomessage\' | translate }}</p>\n\n        <div *ngIf="footerType == \'blocked\'" padding-horizontal>\n\n            <p text-center>{{ \'addon.messages.youhaveblockeduser\' | translate }}</p>\n\n            <button ion-button block text-wrap margin-bottom (click)="unblockUser()">{{ \'addon.messages.unblockuser\' | translate }}</button>\n\n        </div>\n\n        <div *ngIf="footerType == \'requiresContact\'" padding-horizontal>\n\n            <p text-center><strong>{{ \'addon.messages.isnotinyourcontacts\' | translate: {$a: otherMember.fullname} }}</strong></p>\n\n            <p text-center>{{ \'addon.messages.requirecontacttomessage\' | translate: {$a: otherMember.fullname} }}</p>\n\n            <button ion-button block text-wrap margin-bottom (click)="createContactRequest()">{{ \'addon.messages.sendcontactrequest\' | translate }}</button>\n\n        </div>\n\n        <div *ngIf="footerType == \'requestReceived\'" padding-horizontal>\n\n            <p text-center>{{ \'addon.messages.userwouldliketocontactyou\' | translate: {$a: otherMember.fullname} }}</p>\n\n            <button ion-button block text-wrap margin-bottom (click)="confirmContactRequest()">{{ \'addon.messages.acceptandaddcontact\' | translate }}</button>\n\n            <button ion-button block text-wrap margin-bottom color="light" (click)="declineContactRequest()">{{ \'addon.messages.decline\' | translate }}</button>\n\n        </div>\n\n        <div *ngIf="footerType == \'requestSent\' || (footerType == \'message\' && requestContactSent)" padding-horizontal>\n\n            <p text-center><strong>{{ \'addon.messages.contactrequestsent\' | translate }}</strong></p>\n\n            <p text-center>{{ \'addon.messages.yourcontactrequestpending\' | translate: {$a: otherMember.fullname} }}</p>\n\n        </div>\n\n        <core-send-message-form *ngIf="footerType == \'message\'" (onSubmit)="sendMessage($event)" [showKeyboard]="showKeyboard" [placeholder]="\'addon.messages.newmessage\' | translate" (onResize)="resizeContent()"></core-send-message-form>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\redi1\Desktop\moodleapp-vet4a\src\addon\messages\pages\discussion\discussion.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_14__classes_animations__["b" /* coreSlideInOut */]]
        }),
        __param(12, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__core_user_providers_user__["b" /* CoreUserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_sync__["a" /* AddonMessagesSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_logger__["b" /* CoreLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_app__["b" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_15__components_split_view_split_view__["a" /* CoreSplitViewComponent */], __WEBPACK_IMPORTED_MODULE_6__providers_messages_offline__["a" /* AddonMessagesOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__providers_utils_text__["b" /* CoreTextUtilsProvider */]])
    ], AddonMessagesDiscussionPage);
    return AddonMessagesDiscussionPage;
}());

//# sourceMappingURL=discussion.js.map

/***/ })

});
//# sourceMappingURL=130.js.map