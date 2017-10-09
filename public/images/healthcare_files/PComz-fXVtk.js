if (self.CavalryLogger) { CavalryLogger.start_js(["CNoDz"]); }

__d('PageSwitchRegionAction.react',['ix','Image.react','PageActionOpenURLAsyncDialog.react','React','fbglyph'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){return c('React').createElement(c('PageActionOpenURLAsyncDialog.react'),babelHelpers['extends']({},k,{image:c('React').createElement(c('Image.react'),{src:h("128018")})}))};f.exports=i}),null);
__d('PhotoUtils',['Event','URI'],(function a(b,c,d,e,f,g){var h={getImagesFromData:function i(j){var k=[];for(var l in j)if(l.indexOf('image')===0)k.push(j[l]);return k},getFBIDFromData:function i(j){return j&&j.id},getOriginalImageFromData:function i(j){return j.original||j.download_image},getDownloadURLFromData:function i(j){var k=this.getOriginalImageFromData(j);if(!k)return null;var l=new (c('URI'))(k.uri);l.addQueryData({dl:1});return l},getPermalinkFromData:function i(j){return j.permalink},canViewerMakeCoverPhoto:function i(j){return !!j.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function i(j){return new (c('URI'))('/profile.php').addQueryData({preview_cover:h.getFBIDFromData(j)})},preload:function i(j,k,l){var m=j.getDimensions();for(var n=0;n<k.length;++n){var o=m.getBestFitImageFromPhoto(k[n],m.getMaxStageDimensions()),p=new Image();l&&c('Event').listen(p,'load',l.bind(null,k[n]));j.getLogger().log(o.uri);p.src=o.uri}}};f.exports=h}),null);
__d('SpotlightViewer',['cx','React','Spotlight.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';if(!this.props.open)return null;var l="_n3";if(this.props.className)l+=' '+this.props.className;return c('React').createElement(c('Spotlight.react'),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:'photoLayer'},c('React').createElement('div',{className:l,onClick:this.props.onClick,role:'presentation'},this.props.children))};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('SpotlightViewerImage',['cx','Image.react','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this.$SpotlightViewerImage3=function(){this.setState({loading:false})}.bind(this);this.state={loading:true}}k.prototype.componentWillReceiveProps=function(l){'use strict';if(l.src!==this.props.src)this.setState({loading:true});};k.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_4-od"},this.$SpotlightViewerImage1(),this.$SpotlightViewerImage2())};k.prototype.$SpotlightViewerImage1=function(){'use strict';if(!this.state.loading)return null;return c('React').createElement(c('XUISpinner.react'),{className:"_enh",size:'large'})};k.prototype.$SpotlightViewerImage2=function(){'use strict';return c('React').createElement('div',{className:this.state.loading?"_eni":''},c('React').createElement(c('Image.react'),{onLoad:this.$SpotlightViewerImage3,src:this.props.src,style:{width:this.props.dimensions.x,height:this.props.dimensions.y}}))};f.exports=k}),null);
__d('SpotlightViewport',['csx','cx','Locale','Parent','React','ReactDOM','Vector','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k=c('React').createClass({displayName:'SpotlightViewport',propTypes:{stageDimensions:j.object.isRequired,useWidth:j.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function l(){return {currentActiveSection:this.sections.NONE,active:true}},componentDidMount:function l(){this._onMouseEnter()},componentWillUnmount:function l(){if(this.props.fadeInNOut)clearTimeout(this.timer);},_onMouseMove:function l(event){var m=c('ReactDOM').findDOMNode(this),n=c('Vector').getEventPosition(event.nativeEvent),o=c('Vector').getElementPosition(m),p=this.props.useWidth?this.props.stageDimensions.x:c('Vector').getElementDimensions(m).x;if(this.props.fadeInNOut)if(this._isMouseOverActionBars(n)){clearTimeout(this.timer)}else this._onMouseEnter();var q,r=n.x-o.x,s=r/p;if(c('Locale').isRTL()){q=s>1-this.PAGE_TO_PREV_PERCENTAGE}else q=s<this.PAGE_TO_PREV_PERCENTAGE;if(q){this.setState({currentActiveSection:this.sections.BACKWARD})}else this.setState({currentActiveSection:this.sections.FORWARD});},_onClick:function l(event){var m=this.state.currentActiveSection==this.sections.FORWARD,n=event.target;if(!c('Parent').bySelector(n,"._51an"))this.props.onClick&&this.props.onClick(m,event);},_isMouseOverActionBars:function l(m){return m.y<70||m.y>this.props.stageDimensions.y-70},_onMouseEnter:function l(){this.setState({active:true});if(this.props.fadeInNOut){clearTimeout(this.timer);this.timer=setTimeout(this._onMouseLeave,1000)}},_onMouseLeave:function l(){this.setState({active:false})},makeActive:function l(){this._onMouseEnter()},render:function l(){var m="_4-of"+(!this.state.active&&!this.props.active?' '+"_50-l":'')+(this.state.currentActiveSection===this.sections.BACKWARD?' '+"_516a":'')+(this.state.currentActiveSection===this.sections.FORWARD?' '+"_516b":'')+(this.props.showLoadingIndicator?' '+"_51jp":'');if(this.props.className)m=c('joinClasses')(m,this.props.className);var n={};if(this.props.stageDimensions){n={height:this.props.stageDimensions.y};if(this.props.useWidth)n.width=this.props.stageDimensions.x;}return c('React').createElement('div',{className:m,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:'presentation',style:n},this.props.children,c('React').createElement('div',{className:"_4-og"},c('React').createElement('span',{className:"_4-oh"}),this.props.media,c('React').createElement('div',{className:"_4-oi"})))}});f.exports=k}),null);
__d('AbstractDialogFitHeight',['csx','cx','CSS','DOM','Event','Style','SubscriptionsHandler','Vector','throttle'],(function a(b,c,d,e,f,g,h,i){var j=450,k=100,l=67,m=67;function n(o){'use strict';this.$AbstractDialogFitHeight1=o}n.prototype.enable=function(){'use strict';this.$AbstractDialogFitHeight2=new (c('SubscriptionsHandler'))();this.$AbstractDialogFitHeight2.addSubscriptions(this.$AbstractDialogFitHeight1.subscribe('beforeshow',this.$AbstractDialogFitHeight3.bind(this)),c('Event').listen(window,'resize',c('throttle')(this.$AbstractDialogFitHeight3.bind(this))));this.$AbstractDialogFitHeight4=c('DOM').find(this.$AbstractDialogFitHeight1.getRoot(),"._4-i2");c('CSS').addClass(this.$AbstractDialogFitHeight4,"_5pfh");c('CSS').addClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl");this.$AbstractDialogFitHeight5=k;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._4-i0").length)this.$AbstractDialogFitHeight5+=l;if(c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(),"._5a8u").length)this.$AbstractDialogFitHeight5+=m;};n.prototype.disable=function(){'use strict';this.$AbstractDialogFitHeight2.release();this.$AbstractDialogFitHeight2=null;c('CSS').removeClass(this.$AbstractDialogFitHeight4,"_5pfh");c('CSS').removeClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl")};n.prototype.$AbstractDialogFitHeight3=function(){'use strict';var o=c('Vector').getViewportDimensions().y,p=o-this.$AbstractDialogFitHeight5;c('Style').set(this.$AbstractDialogFitHeight4,this.getHeightProperty(),Math.max(j,p)+'px');this.$AbstractDialogFitHeight1.updatePosition()};f.exports=n}),null);
__d('DialogFitHeight',['AbstractDialogFitHeight'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.getHeightProperty=function(){'use strict';return 'height'};function j(){'use strict';h.apply(this,arguments)}f.exports=j}),null);
__d('StickersStoreController',['cx','Bootloader','DialogFitHeight','DOM','LayerAutoFocus','LayerFadeOnHide','LayerHideOnEscape','PureStoreBasedStateMixin','React','ReactDOM','StickersActions','StickersDispatcher','StickersStateStore','XUIDialog.react','XUIDialogBody.react','XUISpinner.react','isSocialPlugin','requestAnimationFrame'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=688,k=320,l=null,m=c('React').createClass({displayName:'StoreLayer',mixins:[c('PureStoreBasedStateMixin')(c('StickersStateStore'))],propTypes:{isComposer:i.bool,onToggle:i.func.isRequired,shown:i.bool.isRequired},getDefaultProps:function r(){return {isComposer:false}},statics:{calculateState:function r(){return {packID:c('StickersStateStore').getState().get('storePackID')}}},getInitialState:function r(){return {renderStore:function s(){return c('React').createElement('div',{className:"_5r5e"},c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large'}))}}},componentWillMount:function r(){c('StickersDispatcher').explicitlyRegisterStores([c('StickersStateStore')])},shouldComponentUpdate:function r(s){return !!s.shown},componentDidMount:function r(){c('Bootloader').loadModules(["StickersStore.react","RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(s,t,u,v){this.setState({renderStore:function(){var w=this.state.packID?new v({packID:this.state.packID}):new u();return c('React').createElement(t,{Component:s,route:w,renderFetched:function(x){return c('React').createElement(s,babelHelpers['extends']({},x,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),'StickersStoreController')},_onToggle:function r(s){c('requestAnimationFrame')(function(){return this.props.onToggle(s)}.bind(this))},render:function r(){var s=c('isSocialPlugin')()&&document.body.offsetWidth<j?k:j;return c('React').createElement(c('XUIDialog.react'),{behaviors:{DialogFitHeight:c('DialogFitHeight'),LayerAutoFocus:c('LayerAutoFocus'),LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')},onToggle:this._onToggle,shown:this.props.shown,width:s},c('React').createElement(c('XUIDialogBody.react'),{className:"_5rq- autofocus"},this.state.renderStore()))}}),n=function r(s){if(!l){l=c('DOM').create('div');c('DOM').appendContent(document.body,l)}c('ReactDOM').render(c('React').createElement(m,{isComposer:s,onToggle:p,shown:true}),l)},o=function r(){if(!l)return;c('ReactDOM').render(c('React').createElement(m,{shown:false,onToggle:p}),l)},p=function r(s){s?n():o()},q={showStore:function r(s,t){c('StickersActions').selectStorePack(s);n(!!t)}};f.exports=q}),null);
__d("QuestionPollType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CHOOSE_ONE:"CHOOSE_ONE",CHOOSE_MULTIPLE:"CHOOSE_MULTIPLE",GIF_CHOOSE_ONE:"GIF_CHOOSE_ONE",IMAGE_CHOOSE_ONE:"IMAGE_CHOOSE_ONE",VISUAL_TEXT_CHOOSE_ONE:"VISUAL_TEXT_CHOOSE_ONE",IMAGE_CHOOSE_MULTIPLE:"IMAGE_CHOOSE_MULTIPLE"})}),null);
__d("QuicksilverSources",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({EMBEDDED_PLAYER:"embedded_player",FB_CANVAS:"fb_canvas",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",GAME_CTA:"game_cta",M_ME_LINK:"m_me_link",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MSITE:"msite",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_LINK_SHARE:"www_link_share",WWW_PLAY_URL:"www_play_url",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_RHC_PAGELET:"canvas_rhc_pagelet",CANVAS_GAME_MODAL:"canvas_game_modal",UNKNOWN:"unknown"})}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/desktopapp\/download\/",{app_id:{type:"Int"},fbsource:{type:"Int"},ref:{type:"String"},canvas_url:{type:"String"}})}),null);