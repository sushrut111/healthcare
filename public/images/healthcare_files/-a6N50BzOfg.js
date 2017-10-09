if (self.CavalryLogger) { CavalryLogger.start_js(["uBzMG"]); }

__d("CreditCardTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86}}),null);
__d('HelpLink.react',['fbt','React','joinClasses','TooltipLink.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('TooltipLink.react'),babelHelpers['extends']({'aria-label':this.props.label},this.props,{className:c('joinClasses')(this.props.className,'uiHelpLink mls')}),undefined)};function k(){'use strict';i.apply(this,arguments)}k.defaultProps={href:'#',label:h._("Help")};f.exports=k}),null);
__d('GridInputLabel.react',['cx','invariant','Grid.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('Grid.react').GridItem,m=c('React').PropTypes,n=0;function o(){return 'js_grid_input_label_'+n++}j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;p.prototype.render=function(){'use strict';this.props.children.length===2||i(0);var q=this.props.children[0],r=this.props.children[1],s=q.type==='input';q=c('React').cloneElement(q,{className:c('joinClasses')(q.props.className,"uiGridInputLabelInput"+(s&&q.props.type==='radio'?' '+"uiInputLabelRadio":'')+(s&&q.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:q.props.id||o()});r=c('React').cloneElement(r,{className:c('joinClasses')(r.props.className,'uiInputLabelLabel'),htmlFor:q.props.id});var t="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(s?' '+"uiInputLabelLegacy":'');return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,t)}),c('React').createElement(c('Grid.react'),{cols:2},c('React').createElement(l,null,q),c('React').createElement(l,null,r)))};function p(){'use strict';j.apply(this,arguments)}p.propTypes={display:m.oneOf(['block','inline'])};p.defaultProps={display:'block'};f.exports=p}),null);
__d('XUIRadioList.react',['cx','Focus','GridInputLabel.react','InputLabel.react','Map','React','RTLKeys','XUIRadioInput.react','joinClasses','KeyStatus','VirtualCursorStatus'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m=c('KeyStatus').isKeyDown,n=c('VirtualCursorStatus').isVirtualCursorTriggered,o=c('React').PropTypes;i=babelHelpers.inherits(p,c('React').Component);j=i&&i.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=j.constructor).call.apply(q,[this].concat(t)),this.$XUIRadioList4=function(v){return function(event){switch(event.keyCode){case c('RTLKeys').UP:case c('RTLKeys').getLeft():event.preventDefault();this.$XUIRadioList3(v-1);break;case c('RTLKeys').DOWN:case c('RTLKeys').getRight():event.preventDefault();this.$XUIRadioList3(v+1);break;case c('RTLKeys').SPACE:event.preventDefault();this.$XUIRadioList3(v);break;}}.bind(this)}.bind(this),r}p.prototype.componentWillMount=function(){'use strict';this.$XUIRadioList1=new (c('Map'))();this.$XUIRadioList2=new (c('Map'))()};p.prototype.$XUIRadioList3=function(q){'use strict';if(q>=this.$XUIRadioList1.size){q=0}else if(q<0)q=this.$XUIRadioList1.size-1;var r=this.$XUIRadioList1.get(q),s=this.$XUIRadioList2.get(q);if(!r||!s)return;if(!r.props.disabled)s.getElementsByTagName('input')[0].click();c('Focus').set(s)};p.prototype.render=function(){'use strict';var q=c('React').Children.map(this.props.children,function(t){return t?t.props.value:null}).some(function(t){return t===this.props.selectedValue}.bind(this)),r=c('React').Children.map(this.props.children,function(t,u){return t===null?null:c('React').cloneElement(t,{name:this.props.name,onKeyDown:this.$XUIRadioList4(u),onSelect:this.props.onValueChange,ref:function(v){this.$XUIRadioList1.set(u,v)}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(v){this.$XUIRadioList2.set(u,v)}.bind(this),tabIndex:this.props.selectedValue===t.props.value||!q&&u===0?0:-1})},this),s=this.props.selectedValue!==undefined&&!this.props.onValueChange;return c('React').createElement('ul',babelHelpers['extends']({},this.props,{'aria-readonly':s,name:null,role:'radiogroup'}),r)};p.propTypes={name:o.string,onValueChange:o.func,selectedValue:o.any};p.Item=(l=k=function(){var q,r;q=babelHelpers.inherits(s,c('React').Component);r=q&&q.prototype;function s(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=r.constructor).call.apply(t,[this].concat(w)),this.state={showFocusRing:false},this.$_class1=function(){this.setState({showFocusRing:false})}.bind(this),this.$_class2=function(){if(m()||n())this.setState({showFocusRing:true});}.bind(this),this.$_class3=function(event){this.props.onSelect&&this.props.onSelect(event.target.value)}.bind(this),u}s.prototype.render=function(){'use strict';var t=this.props.selectedValue===this.props.value,u=!!this.props.disabled,v=this.props.centered?c('GridInputLabel.react'):c('InputLabel.react');return c('React').createElement('li',{'aria-checked':t,'aria-disabled':u,className:c('joinClasses')(this.props.className,!this.state.showFocusRing?"_1az7":''),onBlur:this.$_class1,onFocus:this.$_class2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:'radio',tabIndex:this.props.tabIndex},c('React').createElement(v,{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-testid':this.props['data-testid'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:t,disabled:u,name:this.props.name,onChange:this.$_class3,tabIndex:-1,value:this.props.value,labelDataTestID:this.props.inputLabelTestID}),c('React').createElement('label',null,this.props.children)))};return s}(),k.propTypes={centered:o.bool,'data-testid':o.string,disabled:o.bool,inputLabelTestID:o.string,name:o.string,onKeyDown:o.func,onSelect:o.func,selectedValue:o.any,setupRadioRef:o.func,tabIndex:o.number,value:o.any},l);f.exports=p}),null);
__d('Number.react',['React','formatNumber'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',null,c('formatNumber').withThousandDelimiters(this.props.value,this.props.decimals))};function k(){'use strict';h.apply(this,arguments)}k.defaultProps={decimals:0};k.propTypes={value:j.number.isRequired,decimals:j.number};f.exports=k}),null);
__d('errorDesc',['fbt','invariant'],(function a(b,c,d,e,f,g,h,i){'use strict';function j(k){i(0)}j.withParams=function(k,l){i(0)};j._=function(k,l){return k(h,l)};f.exports=j}),null);
__d('errorSummary',['fbt','invariant'],(function a(b,c,d,e,f,g,h,i){'use strict';function j(k){i(0)}j._=function(k){return k(h)};f.exports=j}),null);
__d('RecoveryCodeEntryPrecheck',['errorDesc','CSS','DOM','errorSummary','ge'],(function a(b,c,d,e,f,g,h){var i={init:function j(k,l){k.onsubmit=function(){var m=c('ge')('recovery_code_entry');if(m==null)return true;var n=i.getError(m.value,l);if(n==null)return true;try{var o=c('ge')('error_box');if(o==null)return true;c('DOM').setContent(o,n);c('CSS').show(o);m.focus();m.value='';return false}catch(p){return true}}},getError:function j(k,l){if(k.length===0){return c('errorSummary')._(function(m){return m._("Please enter a code.")})}else if(/[^\d]/i.test(k)){return h._(function(m,n){return m._("It looks like you entered some letters. Your code is 6 numbers long.")},{})}else if(k.length===1){return h._(function(m,n){return m._("You only entered 1 number. Please check your code and try again.")},{})}else if(k.length<l)return h._(function(m,n){return m._("You only entered {number_of_digits} numbers. Please check your code and try again.",[m.param("number_of_digits",n.number_of_digits)])},{number_of_digits:k.length});return null}};f.exports=i}),null);
__d("SlideshowCreationWaterfallEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SLIDESHOW_INTENT:"intent_slideshow",SLIDESHOW_CANCEL:"cancel_slideshow",SLIDESHOW_POST:"post_slideshow",SLIDESHOW_PREVIEW_INTENT:"intent_slideshow_preview",SLIDESHOW_PREVIEW_CANCEL:"cancel_slideshow_preview",SLIDESHOW_IMAGE_UPLOAD_STARTED:"image_upload_started_slideshow",SLIDESHOW_IMAGE_UPLOAD_SUCCESS:"image_upload_success_slideshow",SLIDESHOW_IMAGES_SELECT_CONFIRM:"images_select_confirm_slideshow",SLIDESHOW_IMAGE_REMOVE:"image_remove_slideshow",SLIDESHOW_ADD_VIDEO_CLICK:"add_video_click_slideshow",SLIDESHOW_VIDEO_UPLOAD_START:"video_upload_start_slideshow",SLIDESHOW_VIDEO_UPLOAD_ERROR:"video_upload_error_slideshow",SLIDESHOW_VIDEO_UPLOAD_SUCCESS:"video_upload_success_slideshow",SLIDESHOW_FRAME_IMAGES_START:"frame_images_start_slideshow",SLIDESHOW_FRAME_IMAGES_SUCCESS:"frame_images_success_slideshow",SLIDESHOW_FRAME_IMAGES_ERROR:"frame_images_error_slideshow",SLIDESHOW_STORYLINE_MOOD_SELECT:"storyline_mood_select_slideshow",SLIDESHOW_MUSIC_CATEGORY_SELECT:"music_category_select_slideshow",SLIDESHOW_STORYLINE_MOOD_REMOVE:"storyline_mood_remove_slideshow",SLIDESHOW_STORYLINE_MOOD_DELETE:"storyline_mood_delete_slideshow",SLIDESHOW_AUDIO_UPLOAD_START:"audio_upload_start_slideshow",SLIDESHOW_AUDIO_UPLOAD_ERROR:"audio_upload_error_slideshow",SLIDESHOW_AUDIO_UPLOAD_SUCCESS:"audio_upload_success_slideshow",SLIDESHOW_DURATION_CHANGE:"duration_change_slideshow",SLIDESHOW_TRANSITION_CHANGE:"transition_change_slideshow",SLIDESHOW_FORMAT_CHANGE:"format_change_slideshow",SLIDESHOW_TAB_CHANGE:"tab_change_slideshow"})}),null);
__d('SlideshowCreationWaterfallLogger',['MarauderLogger'],(function a(b,c,d,e,f,g){var h={logEvent:function i(j,k,l){k=k||{};c('MarauderLogger').log(j,l,k,undefined,undefined,undefined)}};f.exports=h}),null);
__d("SlideshowEntrypoint",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({COMPOSER_PHOTO_VIDEO_TAB:"composer_photo_video_tab",COMPOSER_CAMERA_ICON:"composer_camera_icon",COMPOSER_URL_PARAMS:"composer_url_params",ADS_CREATE_FLOW:"ads_create_flow",ADS_CREATE_FLOW_PLATFORM:"ads_create_flow_platform",ADS_POWER_EDITOR:"ads_power_editor",ADS_EXTENDED_DELIVERY:"ads_extended_delivery",BOOSTED_COMPONENT:"boosted_component",FB4A_PAGE_COMPOSER:"fb4a_page_composer",PMA_PAGE_COMPOSER:"pma_page_composer",UNKNOWN:"unknown"})}),null);
__d('ReactComposerSlideshowLoggingStore',['ComposerXSessionIDs','ReactComposerActionTypes','ReactComposerAttachmentActionType','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerDispatcher','ReactComposerMediaUploadActionType','ReactComposerSelectedImagesStore','ReactComposerSlideshowActionType','ReactComposerSlideshowAudioStore','ReactComposerSlideshowStore','ReactComposerStoreBase','SlideshowConstants','SlideshowCreationWaterfallEvent','SlideshowCreationWaterfallLogger','SlideshowEntrypoint','SlideshowFlowTypes','SlideshowMusicCategory'],(function a(b,c,d,e,f,g){var h,i,j=c('SlideshowFlowTypes').SlideshowTabKey;h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return {aspectRatioFormat:c('SlideshowConstants').formats.Original,deletedStorylineMoodID:null,durationInMS:1000,entrypoint:c('SlideshowEntrypoint').UNKNOWN,module:'composer_slideshow',photoCount:0,selectedMusicCategory:c('SlideshowMusicCategory').ALL_TRACKS,selectedStorylineMoodID:null,selectedTab:j.SETTINGS_TAB,transitionInMS:c('SlideshowConstants').transitions.None,uploadedStorylineMoodID:null}},function(m){switch(m.type){case c('ReactComposerSlideshowActionType').HIDE_SLIDESHOW_EDIT_FIELD:l&&l.$ReactComposerSlideshowLoggingStore1(m);break;case c('ReactComposerSlideshowActionType').TOGGLE_SLIDESHOW_DIALOG:l&&l.$ReactComposerSlideshowLoggingStore2(m);break;case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:l&&l.$ReactComposerSlideshowLoggingStore3(m);break;case c('ReactComposerActionTypes').POST_SUCCEEDED:l&&l.$ReactComposerSlideshowLoggingStore4(m);break;case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_ENQUEUED:l&&l.$ReactComposerSlideshowLoggingStore5(m);break;case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSelectedImagesStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore6(m);break;case c('ReactComposerSlideshowActionType').IMAGES_SELECT_CONFIRM:c('ReactComposerDispatcher').waitFor([c('ReactComposerSelectedImagesStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore7(m);break;case c('ReactComposerSlideshowActionType').IMAGE_REMOVE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSelectedImagesStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore8(m);break;case c('ReactComposerSlideshowActionType').MUSIC_CATEGORY_SELECT:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore9(m);break;case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_CHANGE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore10(m);break;case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_DELETE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore11(m);break;case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_STARTED:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore12(m);break;case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_ERROR:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore13(m);break;case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_SUCCESS:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowAudioStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore14(m);break;case c('ReactComposerSlideshowActionType').DURATION_CHANGE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore15(m);break;case c('ReactComposerSlideshowActionType').TRANSITION_CHANGE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore16(m);break;case c('ReactComposerSlideshowActionType').FORMAT_CHANGE:c('ReactComposerDispatcher').waitFor([c('ReactComposerSelectedImagesStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore17(m);break;case c('ReactComposerSlideshowActionType').SELECT_TAB:c('ReactComposerDispatcher').waitFor([c('ReactComposerSlideshowStore').getDispatchToken()]);l&&l.$ReactComposerSlideshowLoggingStore18(m);break;default:break;}});l=this}k.prototype.activate=function(){'use strict'};k.prototype.$ReactComposerSlideshowLoggingStore3=function(l){'use strict';var m=l.id,n=l.composerID,o=l.currentAttachmentID;if(this.$ReactComposerSlideshowLoggingStore19(n,m)){this.$ReactComposerSlideshowLoggingStore20(n,c('SlideshowCreationWaterfallEvent').SLIDESHOW_INTENT)}else if(this.$ReactComposerSlideshowLoggingStore19(n,o))this.$ReactComposerSlideshowLoggingStore20(n,c('SlideshowCreationWaterfallEvent').SLIDESHOW_CANCEL);};k.prototype.$ReactComposerSlideshowLoggingStore2=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);if(l.entrypoint!=null)n.entrypoint=l.entrypoint;if(l.shouldShowSlideshowDialog){this.$ReactComposerSlideshowLoggingStore20(l.composerID,c('SlideshowCreationWaterfallEvent').SLIDESHOW_INTENT)}else this.$ReactComposerSlideshowLoggingStore20(l.composerID,c('SlideshowCreationWaterfallEvent').SLIDESHOW_CANCEL);};k.prototype.$ReactComposerSlideshowLoggingStore1=function(l){'use strict';this.$ReactComposerSlideshowLoggingStore20(l.composerID,c('SlideshowCreationWaterfallEvent').SLIDESHOW_CANCEL)};k.prototype.$ReactComposerSlideshowLoggingStore5=function(l){'use strict';var m=l.composerID;if(!this.$ReactComposerSlideshowLoggingStore21(m))return;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_IMAGE_UPLOAD_STARTED)};k.prototype.$ReactComposerSlideshowLoggingStore6=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);if(!this.$ReactComposerSlideshowLoggingStore21(m))return;var o=c('ReactComposerSelectedImagesStore').getNumberOfImages(m);n.photoCount=o;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_IMAGE_UPLOAD_SUCCESS)};k.prototype.$ReactComposerSlideshowLoggingStore7=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m),o=c('ReactComposerSelectedImagesStore').getNumberOfImages(m);n.photoCount=o;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_IMAGES_SELECT_CONFIRM)};k.prototype.$ReactComposerSlideshowLoggingStore8=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m),o=c('ReactComposerSelectedImagesStore').getNumberOfImages(m);n.photoCount=o;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_IMAGE_REMOVE)};k.prototype.$ReactComposerSlideshowLoggingStore9=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.selectedMusicCategory=l.selectedMusicCategory;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_MUSIC_CATEGORY_SELECT)};k.prototype.$ReactComposerSlideshowLoggingStore10=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m),o=c('ReactComposerSlideshowAudioStore').getSelectedStorylineMood(m);if(o==null){n.selectedStorylineMoodID=null;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_STORYLINE_MOOD_REMOVE)}else{n.selectedStorylineMoodID=o.moodID;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_STORYLINE_MOOD_SELECT)}};k.prototype.$ReactComposerSlideshowLoggingStore12=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.selectedMusicCategory=c('ReactComposerSlideshowAudioStore').getSelectedMusicCategory(m);this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_AUDIO_UPLOAD_START)};k.prototype.$ReactComposerSlideshowLoggingStore13=function(l){'use strict';var m=l.composerID;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_AUDIO_UPLOAD_ERROR)};k.prototype.$ReactComposerSlideshowLoggingStore14=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.uploadedStorylineMoodID=l.uploadedMood.moodID;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_AUDIO_UPLOAD_SUCCESS)};k.prototype.$ReactComposerSlideshowLoggingStore11=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.deletedStorylineMoodID=l.selectedStorylineMood.moodID;this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_STORYLINE_MOOD_DELETE)};k.prototype.$ReactComposerSlideshowLoggingStore16=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.transitionInMS=c('ReactComposerSlideshowStore').getTransitionInMS(m);this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_TRANSITION_CHANGE)};k.prototype.$ReactComposerSlideshowLoggingStore15=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.durationInMS=c('ReactComposerSlideshowStore').getDurationInMS(m);this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_DURATION_CHANGE)};k.prototype.$ReactComposerSlideshowLoggingStore17=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.aspectRatioFormat=c('ReactComposerSelectedImagesStore').getFormat(m);this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_FORMAT_CHANGE)};k.prototype.$ReactComposerSlideshowLoggingStore18=function(l){'use strict';var m=l.composerID,n=this.getComposerData(m);n.selectedTab=c('ReactComposerSlideshowStore').getSelectedTab(m);this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_TAB_CHANGE)};k.prototype.$ReactComposerSlideshowLoggingStore4=function(l){'use strict';var m=l.composerID;if(this.$ReactComposerSlideshowLoggingStore19(m))this.$ReactComposerSlideshowLoggingStore20(m,c('SlideshowCreationWaterfallEvent').SLIDESHOW_POST);};k.prototype.$ReactComposerSlideshowLoggingStore21=function(l){'use strict';return c('ReactComposerSlideshowStore').shouldShowSlideshowDialog(l)};k.prototype.$ReactComposerSlideshowLoggingStore19=function(l){'use strict';var m=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l);if(!m)return false;var n=m===c('ReactComposerAttachmentType').MEDIA,o=c('ReactComposerSlideshowStore').isSlideshowSelected(l);return n&&o};k.prototype.$ReactComposerSlideshowLoggingStore20=function(l,m){'use strict';var n=this.getComposerData(l),o=c('ComposerXSessionIDs').getSessionID(l);c('SlideshowCreationWaterfallLogger').logEvent(m,{photo_count:n.photoCount,entrypoint:n.entrypoint,selected_music_category:n.selectedMusicCategory,selected_storyline_mood_id:n.selectedStorylineMoodID,uploaded_storyline_mood_id:n.uploadedStorylineMoodID,deleted_storyline_mood_id:n.deletedStorylineMoodID,duration_in_ms:n.durationInMS,transition_in_ms:n.transitionInMS,aspect_ratio_format:n.aspectRatioFormat,selected_tab:n.selectedTab,composer_session_id:o},n.module)};f.exports=new k()}),null);
__d('StaticSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','TokenizeUtil'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$StaticSearchSource1=k;this.$StaticSearchSource2=new (c('SearchSourceCallbackManager'))({parseFn:c('TokenizeUtil').parse,matchFn:c('TokenizeUtil').isQueryMatch,indexFn:l});this.$StaticSearchSource2.addLocalEntries(this.$StaticSearchSource1)}j.prototype.searchImpl=function(k,l,m){'use strict';if(!k){l(this.$StaticSearchSource1,k)}else this.$StaticSearchSource2.search(k,l,m);};f.exports=j}),null);
__d('ShareDialogAudienceTypes',['getObjectValues','ShareModeConst'],(function a(b,c,d,e,f,g){var h={OWN:c('ShareModeConst').SELF_POST,PERSON:c('ShareModeConst').FRIEND,GROUP:c('ShareModeConst').GROUP,EVENT:c('ShareModeConst').EVENT,PAGE:c('ShareModeConst').PAGE,FUNDRAISER:c('ShareModeConst').FUNDRAISER,MESSAGE:c('ShareModeConst').MESSAGE},i=c('getObjectValues')(h);function j(k){return i.some(function(l){return l===k})}f.exports=h;f.exports.ALL=i;f.exports.isValid=j;f.exports.propType=function(k,l){if(!j(k[l]))throw new Error('Invalid audience '+k[l]);}}),null);
__d('ResponsiveBlock.react',['cx','MutationObserver','React','ReactDOM','ResizeEventHandler','UserAgent','joinClasses','requestAnimationFrame'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('UserAgent').isBrowser('IE')&&'onresize' in document.createElement('div'),k={attributes:true,characterData:true,childList:true,subtree:true},l=c('React').createClass({displayName:'ResponsiveBlock',propTypes:{onResize:i.func.isRequired},componentDidMount:function m(){this._width=null;this._height=null;this._resizeHandler=new (c('ResizeEventHandler'))(this._didResize);this._bindResizeEvent();this._observer=new (c('MutationObserver'))(this._resizeHandler.handleEvent);this._observer.observe(c('ReactDOM').findDOMNode(this),k)},componentWillUnmount:function m(){if(this._sensorTarget){try{this._sensorTarget.onresize=null}catch(n){}this._sensorTarget=null}this._resizeHandler=null;if(this._observer){this._observer.disconnect();this._observer=null}this._width=null;this._height=null},render:function m(){var n=c('joinClasses')("_4u-c",this.props.className),o;if(j){o=c('React').createElement('div',{key:'sensor',ref:'sensorNode',className:"_4u-f"})}else o=c('React').createElement('div',{key:'sensor',className:"_4u-f"},c('React').createElement('iframe',{'aria-hidden':'true',ref:'sensorNode',className:"_1_xb",tabIndex:'-1'}));return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:n}),this.props.children,o)},_bindResizeEvent:function m(){if(!this.isMounted())return;if(j){this._sensorTarget=c('ReactDOM').findDOMNode(this.refs.sensorNode)}else this._sensorTarget=c('ReactDOM').findDOMNode(this.refs.sensorNode).contentWindow;if(this._sensorTarget){this._sensorTarget.onresize=this._resizeHandler.handleEvent;this._resizeHandler.handleEvent()}else c('requestAnimationFrame')(this._bindResizeEvent);},_didResize:function m(){if(this.isMounted()){var n=c('ReactDOM').findDOMNode(this),o=n.offsetWidth,p=n.offsetHeight;if(o!==this._width||p!==this._height){this._width=o;this._height=p;this.props.onResize(o,p)}}}});f.exports=l}),null);
__d('createCharacterList',['CharacterMetadata','immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List;function i(j,k){var l=j.map(function(m,n){var o=k[n];return c('CharacterMetadata').create({style:m,entity:o})});return h(l)}f.exports=i}),null);
__d('decodeEntityRanges',['UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';var h=c('UnicodeUtils').substr;function i(j,k){var l=Array(j.length).fill(null);if(k)k.forEach(function(m){var n=h(j,0,m.offset).length,o=n+h(j,m.offset,m.length).length;for(var p=n;p<o;p++)l[p]=m.key;});return l}f.exports=i}),null);
__d('decodeInlineStyleRanges',['immutable','UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedSet,i=c('UnicodeUtils').substr,j=h();function k(l,m){var n=Array(l.length).fill(j);if(m)m.forEach(function(o){var p=i(l,0,o.offset).length,q=p+i(l,o.offset,o.length).length;while(p<q){n[p]=n[p].add(o.style);p++}});return n}f.exports=k}),null);
__d('convertFromRawToDraftState',['ContentBlock','ContentState','DraftEntity','immutable','createCharacterList','decodeEntityRanges','decodeInlineStyleRanges','generateRandomKey'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').Map;function i(j){var k=j.blocks,l=j.entityMap,m={};Object.keys(l).forEach(function(o){var p=l[o],q=p.type,r=p.mutability,s=p.data,t=c('DraftEntity').__create(q,r,s||{});m[o]=t});var n=k.map(function(o){var p=o.key,q=o.type,r=o.text,s=o.depth,t=o.inlineStyleRanges,u=o.entityRanges,v=o.data;p=p||c('generateRandomKey')();q=q||'unstyled';s=s||0;t=t||[];u=u||[];v=h(v);var w=c('decodeInlineStyleRanges')(r,t),x=u.filter(function(aa){return Object.prototype.hasOwnProperty.call(m,aa.key)}).map(function(aa){return babelHelpers['extends']({},aa,{key:m[aa.key]})}),y=c('decodeEntityRanges')(r,x),z=c('createCharacterList')(w,y);return new (c('ContentBlock'))({key:p,type:q,text:r,depth:s,characterList:z,data:v})});return c('ContentState').createFromBlockArray(n)}f.exports=i}),null);
__d('decodeBlocks',['ComposedBlockType','ComposedInlineStyle','convertFromRawToDraftState','mapObject'],(function a(b,c,d,e,f,g){'use strict';function h(k,l){var m=k.map(function(o){var p=o.type,q=o.inlineStyleRanges,r=babelHelpers.objectWithoutProperties(o,['type','inlineStyleRanges']);return babelHelpers['extends']({type:i[p]||'unstyled',inlineStyleRanges:(q||[]).map(function(s){return babelHelpers['extends']({},s,{style:j[s.style]})})},r)}),n=c('mapObject')(l,function(o){return {type:o.getType(),mutability:o.getMutability(),data:o.getData()}});return c('convertFromRawToDraftState')({blocks:m,entityMap:n})}var i={};i[c('ComposedBlockType').UNSTYLED]='unstyled';i[c('ComposedBlockType').PARAGRAPH]='paragraph';i[c('ComposedBlockType').BLOCKQUOTE]='blockquote';i[c('ComposedBlockType').ORDERED_LIST_ITEM]='ordered-list-item';i[c('ComposedBlockType').UNORDERED_LIST_ITEM]='unordered-list-item';i[c('ComposedBlockType').CODE]='code-block';i[c('ComposedBlockType').HEADER_ONE]='header-one';i[c('ComposedBlockType').HEADER_TWO]='header-two';i[c('ComposedBlockType').MEDIA]='atomic';i[c('ComposedBlockType').PULLQUOTE]='pullquote';var j={};j[c('ComposedInlineStyle').BOLD]='BOLD';j[c('ComposedInlineStyle').CODE]='CODE';j[c('ComposedInlineStyle').ITALIC]='ITALIC';j[c('ComposedInlineStyle').STRIKETHROUGH]='STRIKETHROUGH';j[c('ComposedInlineStyle').UNDERLINE]='UNDERLINE';f.exports=h}),null);
__d('isCanvasAppURI',['isFacebookURI'],(function a(b,c,d,e,f,g){'use strict';function h(i){return c('isFacebookURI')(i)&&i.getSubdomain()==='apps'}f.exports=h}),null);
__d('distinctArray',['Set'],(function a(b,c,d,e,f,g){function h(i){return Array.from(new (c('Set'))(i).values())}f.exports=h}),null);
__d('firstKeyWithValue',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){for(var k in i){var l=k;if(Object.prototype.hasOwnProperty.call(i,l)&&i[l]===j)return l;}return null}f.exports=h}),null);
__d('groupArray',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k={};i.forEach(function(l,m){var n=j(l,m,i);if(!k[n])k[n]=[];k[n].push(l)});return k}f.exports=h}),null);
__d("CreditCardFormParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id"})}),null);
__d("CreditCardTypeField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club"})}),null);
__d("PageSettingsRef",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AYMT:"aymt",CTA:"cta",NOTIF:"notif",NOTIF_SETTINGS:"notifs",QP:"qp",TEST:"test",NAVBAR:"navbar",PAGES_MANAGER:"pages_manager",PAGE_ACTIONS:"page_actions",ADD_ACTION:"add_action",PAGE_EDIT:"page_edit",GLOBAL_PAGE_EDIT:"gpe",MANAGE_TABS_TIMELINE:"mtt",SHOP_SETTING_BANNER:"shop_setting_banner",SHOP_SETTINGS:"shop_settings",COMMERCE:"commerce",PRODUCT_COMPOSER:"product_composer",INSTANT_ARTICLES_ACTIVATION:"iaa",INSTANT_ARTICLES_SIGN_UP:"iasu",INSTANT_ARTICLES_CREATE:"iac",BOOSTED_POST_SETTINGS:"bps",BOOSTED_POST_TARGETING_ERRORS:"bpte",ADS_NOTICE:"ads_notice",INSTAGRAM_ADS:"instagram_ads",WHATSAPP:"whatsapp",NAME_REVIEW:"name_review",NAME_CHANGE_REQUEST:"ncr",VIDEO_CROSSPOSTING:"vcp",VIDEO_COPYRIGHT:"vcr",VIDEO_COMPOSER:"video_composer",SUPPORT_INBOX:"support_inbox",TPS:"tps",EVENT_TIP:"event_tip",TIMELINE:"timeline",LITE:"lite",PROMO:"promo",SERVICE:"service",REACTION:"reaction",ALARM_CLOCK:"ac",ASSISTANT:"assistant",LOST_PAGE_WARNING:"lpw",LOCATIONS:"locations",FAN_LIST:"fan_list",ADD_TO_FAVORITE:"atf",PLACE_TIPS:"place_tips",COMPOSER:"composer",SUPPORT:"support",DONATIONS:"donations",FRIEND_INVITER:"invites",PEOPLE_AND_OTHER_PAGES:"paop",UFI:"ufi",INCOMPLETE_PAGE_LIST:"ipl",CONTENT_VISIBILITY:"pcv",ADDRESS_PREVIEW:"apv",PRIMARY_PAGE_REACTIVATION:"ppr",BEACON:"beacon",MN_DEVELOPER:"messenger_developer",SHOWS_ACTION_BAR:"shows_action_bar",ADS_PERSONAL_SETTINGS:"ads_personal_settings",VERIFICATION_QP:"verification_qp"})}),null);
__d("XPaymentsCreditCardMutationType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATE:"create",UPDATE:"update",CACHE_CVV:"cache_cvv"})}),null);
__d("XPaymentsCreditCardMutatorParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUTH_LOG_ID:"auth_log_id",MUTATION_TYPE:"mutation_type",CARD_FBID:"cc_fbid",CACHE_TOKEN:"cache_token",ERRORS:"errors",GENERAL_ERROR:"general",FIELD_ERRORS:"fields",ERROR_CODE:"code",ERROR_MSG:"message",ERROR_TITLE:"title"})}),null);
__d('glyph',[],(function a(b,c,d,e,f,g){f.exports=function h(i){throw new Error('glyph: Unexpected glyph call.')}}),null);
__d('PaymentMethodUtils',['fbt','ix','CreditCardTypeEnum','CreditCardTypeField'],(function a(b,c,d,e,f,g,h,i){var j=16,k=4,l=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:'mc',cscDigits:3,digits:16,supported:true,code:77,type:c('CreditCardTypeField').MASTERCARD},{pattern:/^4/,name:'visa',cscDigits:3,digits:16,supported:true,code:86,type:c('CreditCardTypeField').VISA},{pattern:/^3[47]/,name:'amex',cscDigits:4,digits:15,supported:true,code:65,type:c('CreditCardTypeField').AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:'jcb',cscDigits:3,digits:16,supported:true,code:74,type:c('CreditCardTypeField').JCB},{pattern:/^62/,name:'cup',cscDigits:3,digits:16,supported:true,code:80,type:'china_union_pay'},{pattern:/^(6011|65|64[4-9])/,name:'disc',cscDigits:3,digits:16,supported:true,code:68,type:c('CreditCardTypeField').DISCOVER},{pattern:/^30[0-5]/,name:'diners',digits:14,cscDigits:3,supported:false,code:64,type:c('CreditCardTypeField').DINERS_CLUB},{name:'unknown',pattern:null,digits:16,cscDigits:3,supported:false,code:85,type:c('CreditCardTypeField').UNKNOWN}],m=function o(p){return p.replace(/[iIl]/g,'1').replace(/[Oo]/g,'0').replace(/[^\d]/gi,'')},n={getCardType:function o(p){p=m(p);p=p.substr(0,6);for(var q=0;q<l.length;q++)if(l[q].pattern&&p.match(l[q].pattern))return l[q];return l[l.length-1]},getCardTypeFromFieldType:function o(p){var q=l.find(function(r){return p===r.type})||l[l.length-1];return q},getCardTypeFromCode:function o(p){for(var q=0;q<l.length;q++)if(p==l[q].code)return l[q];return null},isValidCCNumber:function o(p){p=m(p);var q=n.getCardType(p);if(q.digits!==p.length)return false;if(!q.supported)return false;return n.isValidLuhn(p)},isValidLuhn:function o(p){p=m(p);var q=p.split('').reverse(),r='';for(var s=0;s<q.length;s++){var t=parseInt(q[s],10);if(s%2!==0)t=t*2;r=r+t}var u=0;for(s=0;s<r.length;s++)u=u+parseInt(r.charAt(s),10);return !!(u!==0&&u%10===0)},getMaxCardLength:function o(p){return j},getMaxCSCLength:function o(){return k},getImageForCard:function o(p){return this.getImageForCardType(p.name)},getImageForCardType:function o(p){switch(p){case 'visa':return i("95533");case 'mc':return i("95531");case 'amex':return i("95528");case 'disc':return i("95529");case 'jcb':return i("95530");default:return i("95526");}},getImageForPayPal:function o(){return i("95532")},getCreditCardString:function o(p){switch(p){case c('CreditCardTypeEnum').VISA:return h._("Visa");case c('CreditCardTypeEnum').MASTERCARD:return h._("Mastercard");case c('CreditCardTypeEnum').DISCOVER:return h._("Discover");case c('CreditCardTypeEnum').AMERICANEXPRESS:return h._("Amex");case c('CreditCardTypeEnum').JCB:return h._("JCB");case c('CreditCardTypeEnum').DINERSCLUB:return h._("Diners");default:return h._("Credit Card");}}};f.exports=n}),null);
__d('PaymentTokenProxyUtils',['CurrentEnvironment','URI'],(function a(b,c,d,e,f,g){var h={getURI:function i(j){var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],l=new (c('URI'))('/ajax/payment/token_proxy.php').setDomain(window.location.hostname).setProtocol('https').addQueryData(j),m=l.getDomain().split('.');if(m.indexOf('secure')<0){m.splice(1,0,'secure');if(k==='www'||k==='secure'){if(m[0]!=='secure')m.shift();}else if(k!==null){if(m[0]==='secure'){m.splice(0,0,k)}else m[0]=k;}else if(m[0]=='www')m.shift();l.setDomain(m.join('.'))}if(c('CurrentEnvironment').messengerdotcom){var n=l.getDomain();n=n.replace('messenger.com','facebook.com');l.setDomain(n)}return l}};f.exports=h}),null);
__d("XP2PAddressCreateController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/p2p\/address\/_create\/",{})}),null);
__d("XPaymentsCreditCardMutatorController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/payments\/credit_card\/mutator\/{mutation_type}\/",{mutation_type:{type:"Enum",enumType:1}})}),null);
__d("XShareDialogSubmitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/share\/dialog\/submit\/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"StringToStringMap"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:false},is_forced_reshare_of_post:{type:"Bool",defaultValue:false},is_throwback_post:{type:"Bool",defaultValue:false},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:false},shared_to_group_id:{type:"Int"}})}),null);