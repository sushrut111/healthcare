if (self.CavalryLogger) { CavalryLogger.start_js(["tB5DD"]); }

__d("XReactFeedComposerXBootloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/feedx\/bootload\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},friend_list_id:{type:"String"},section_id:{type:"String"},target_id:{type:"String",required:true}})}),null);
__d('ReactFeedComposerX',['csx','cx','fbt','invariant','Arbiter','AsyncRequest','Bootloader','ComposerEntryPointRef','CSS','DOM','Event','FeedComposerIDStore','FeedReactComposerBootloadPerfTypedLogger','ReactComposerAttachmentType','ReactComposerEvents','ReactComposerFocusInit','ReactComposerLoggingActions','ReactComposerLoggingName','Run','SubscriptionsHandler','XReactComposerLoggingODSController','XReactFeedComposerXBootloadController','$','requestAnimationFrame'],(function a(b,c,d,e,f,g,h,i,j,k){'use strict';function l(m){this.$ReactFeedComposerX1=m.actorID;this.$ReactFeedComposerX8=m.root;this.$ReactFeedComposerX3=m.composerID;this.$ReactFeedComposerX12=m.targetID;this.$ReactFeedComposerX4=m.composerType;this.$ReactFeedComposerX6=m.friendListID;this.$ReactFeedComposerX9=m.sectionID;this.$ReactFeedComposerX7=m.gks;this.$ReactFeedComposerX14=m.largeTextThreshold;this.$ReactFeedComposerX16=m.ReactComposerFocusExtraConfigData;this.$ReactFeedComposerX2=false;this.$ReactFeedComposerX5=c('DOM').find(this.$ReactFeedComposerX8,'form');this.$ReactFeedComposerX13=c('DOM').find(this.$ReactFeedComposerX8,"._3en1");this.$ReactFeedComposerX11=new (c('SubscriptionsHandler'))();this.$ReactFeedComposerX11.addSubscriptions(c('Event').listen(this.$ReactFeedComposerX8,'click',this.$ReactFeedComposerX17.bind(this)),c('Event').listen(this.$ReactFeedComposerX13,'focus',this.$ReactFeedComposerX17.bind(this)),c('Event').listen(this.$ReactFeedComposerX5,'success',this.$ReactFeedComposerX18.bind(this)),c('Arbiter').subscribeOnce('ReactFeedComposerXBootloader/bootload/'+this.$ReactFeedComposerX3,function(){new (c('FeedReactComposerBootloadPerfTypedLogger'))().setBootloadDurationMillis(Date.now()-this.$ReactFeedComposerX15).log();this.$ReactFeedComposerX19()}.bind(this)),c('Arbiter').subscribeOnce('ReactFeedComposerXBootloader/selectcomposer/'+this.$ReactFeedComposerX3,this.$ReactFeedComposerX17.bind(this)),c('Arbiter').subscribe('ReactComposerFocus/reset/'+this.$ReactFeedComposerX3,function(){this.$ReactFeedComposerX13.value=''}.bind(this)),c('Arbiter').subscribe(c('ReactComposerEvents').TEXT_PREFILL_BEFORE_BOOTLOAD+this.$ReactFeedComposerX3,function(p,q){this.$ReactFeedComposerX13.value=q;this.$ReactFeedComposerX13.selectionEnd=0}.bind(this)));this.$ReactFeedComposerX11.addSubscriptions(c('Event').listen(this.$ReactFeedComposerX13,'keydown',this.$ReactFeedComposerX20.bind(this)));if(this.$ReactFeedComposerX7&&!this.$ReactFeedComposerX7.shouldRedirectOnClickingProfilePic)this.$ReactFeedComposerX11.addSubscriptions(c('Arbiter').subscribe(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.$ReactFeedComposerX3,function(){this.$ReactFeedComposerX13.focus()}.bind(this)));c('FeedComposerIDStore').set(this.$ReactFeedComposerX3);var n=c('DOM').find(this.$ReactFeedComposerX8,"._4d6h"),o=c('DOM').scry(n,'input[name="composer_photo[]"]')[0];if(o){this.$ReactFeedComposerX11.addSubscriptions(c('Event').listen(o,'click',this.$ReactFeedComposerX17.bind(this)),c('Event').listen(o,'change',this.$ReactFeedComposerX17.bind(this)));if(o.files&&o.files.length>0)this.$ReactFeedComposerX17();}this.$ReactFeedComposerX10=c('DOM').scry(this.$ReactFeedComposerX8,"._4-h7");this.$ReactFeedComposerX10.forEach(function(p){return this.$ReactFeedComposerX11.addSubscriptions(c('Event').listen(p,'click',this.$ReactFeedComposerX21.bind(this)))}.bind(this));if(m.jsModules&&m.jsModules.composerFocus&&m.gks&&m.gks.focusExperiment)c('ReactComposerFocusInit').handler(c('$')('feedx_container'),this.$ReactFeedComposerX3,this.$ReactFeedComposerX1,this.$ReactFeedComposerX7,m.jsModules.composerFocus,false,this.$ReactFeedComposerX16);c('Run').onLeave(this.$ReactFeedComposerX19.bind(this))}l.prototype.$ReactFeedComposerX20=function(m){if(this.$ReactFeedComposerX13.value.length<this.$ReactFeedComposerX14){c('CSS').addClass(this.$ReactFeedComposerX13,"_480e")}else c('CSS').removeClass(this.$ReactFeedComposerX13,"_480e");};l.prototype.$ReactFeedComposerX21=function(m){var n=m.getTarget(),o=null;while(n){if(n.nodeType===1&&n.nodeName==='A'){o=n;break}n=n.parentNode}o!==null||k(0);this.$ReactFeedComposerX22(o);var p=c('CSS').hasClass(o,"._5qtn");if(p)return;this.$ReactFeedComposerX10.forEach(function(s){return c('CSS').removeClass(s,"_5qtn")});c('CSS').addClass(o,"_5qtn");var q=c('DOM').find(this.$ReactFeedComposerX8,"._559p"),r=c('DOM').find(this.$ReactFeedComposerX8,"._559q");switch(o.getAttribute('data-attachment-type')){case c('ReactComposerAttachmentType').STATUS:c('CSS').hide(r);c('CSS').show(q);break;case c('ReactComposerAttachmentType').MEDIA:case c('ReactComposerAttachmentType').QANDA:case c('ReactComposerAttachmentType').LIVE_VIDEO:c('CSS').show(r);c('CSS').hide(q);break;}};l.prototype.$ReactFeedComposerX17=function(m){if(this.$ReactFeedComposerX2)return;if(this.$ReactFeedComposerX7&&!this.$ReactFeedComposerX7.shouldRedirectOnClickingProfilePic)c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.$ReactFeedComposerX3);this.$ReactFeedComposerX15=Date.now();this.$ReactFeedComposerX2=true;this.$ReactFeedComposerX23();var n=c('XReactFeedComposerXBootloadController').getURIBuilder().setString('composer_id',this.$ReactFeedComposerX3).setString('target_id',this.$ReactFeedComposerX12).setEnum('composer_type',this.$ReactFeedComposerX4).setString('friend_list_id',this.$ReactFeedComposerX6).setString('section_id',this.$ReactFeedComposerX9).getURI();new (c('AsyncRequest'))(n).send();var o=c('XReactComposerLoggingODSController').getURIBuilder().setString('event','bootload_start').setEnum('composer_type',c('ComposerEntryPointRef').FEEDX).getURI();new (c('AsyncRequest'))(o).send()};l.prototype.$ReactFeedComposerX22=function(m){var n=c('ReactComposerLoggingName').INLINE_COMPOSER;switch(m.getAttribute('data-attachment-type')){case c('ReactComposerAttachmentType').STATUS:n=c('ReactComposerLoggingName').STATUS_TAB_SELECTOR;break;case c('ReactComposerAttachmentType').MEDIA:n=c('ReactComposerLoggingName').MEDIA_TAB_SELECTOR;break;case c('ReactComposerAttachmentType').LIVE_VIDEO:n=c('ReactComposerLoggingName').LIVE_VIDEO_TAB_SELECTOR;break;case c('ReactComposerAttachmentType').ALBUM:n=c('ReactComposerLoggingName').ALBUM_TAB_SELECTOR;break;case c('ReactComposerAttachmentType').NOTES:n=c('ReactComposerLoggingName').NOTES_TAB_SELECTOR;break;case c('ReactComposerAttachmentType').QANDA:n=c('ReactComposerLoggingName').QANDA_TAB_SELECTOR;break;}c('ReactComposerLoggingActions').composerEntry(this.$ReactFeedComposerX3,n)};l.prototype.$ReactFeedComposerX23=function(){c('ReactComposerLoggingActions').composerEntry(this.$ReactFeedComposerX3,c('ReactComposerLoggingName').INLINE_COMPOSER)};l.prototype.$ReactFeedComposerX19=function(){this.$ReactFeedComposerX11.release()};l.prototype.$ReactFeedComposerX18=function(){this.$ReactFeedComposerX13.value='';c('Arbiter').inform(c('ReactComposerEvents').POST_SUCCEEDED+this.$ReactFeedComposerX3);this.$ReactFeedComposerX19()};f.exports=l}),null);