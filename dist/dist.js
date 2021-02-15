/* Bundled with FJB */function globalDef(value) {  return window && value && value.name && (window[value.name] = value);}var __jsx_queue = [];globalDef(__jsx_queue);function __isElement(obj) {  try {    return obj instanceof HTMLElement;  } catch (e) {    return (      typeof obj === "object" &&      obj.nodeType === 1 &&      typeof obj.style === "object" &&      typeof obj.ownerDocument === "object"    );  }}globalDef(__isElement);function __toElement(val) {  if (__isElement(val)) return val;  if (typeof val == "string" || typeof val == "number")    return document.createTextNode(val);    return val;}function __jsx_append_many(parent, elements) {  for (var i = 0; i < elements.length; i++) {    parent.appendChild(__toElement(elements[i]));  }}globalDef(__jsx_append_many);function __jsx_append(parent, el) {  if (!Array.isArray(el)) return parent.appendChild(__toElement(el));  return __jsx_append_many(parent, el);}globalDef(__jsx_append);function React_createTextNode(text) {  return React.createElement("span", null, text);}globalDef(React_createTextNode); ;var _fjb1=(function(module={},exports={}){function initializeNav (){const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);if($navbarBurgers.length > 0){$navbarBurgers.forEach((el)=>{el.addEventListener("click",()=>{const target=el.dataset.target;const $target=document.getElementById(target);el.classList.toggle("is-active");$target.classList.toggle("is-active");});});};const navItems=Array.prototype.slice.call(document.querySelectorAll(".navbar-item:not(.main-item)"),0);if(navItems.length > 0){navItems.forEach((el)=>{if(window.location.href.toString().indexOf(el.getAttribute("href")) > -1){el.classList.toggle("is-active");};});};} ;if (typeof this !== "undefined"){this.initializeNav=initializeNav;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let initializeNav=(_fjb1.initializeNav||_fjb1);
/* IMPORT `src/static/js/./terminal/././style.css` */
;var _fjb12=(function(module={},exports={}){let style=`background-color: rgb(48,48,48);
color: white;
width: 100%;
box-sizing: border-box;
padding: 1rem;
width: 50vw;
display: inline-block;
text-align: left;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;if (typeof this !== "undefined"){this.style=style;};;var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let style=(_fjb12.style||_fjb12); ;var _fjb9=(function(module={},exports={}){ function TerminalBase (state){return (function (){(this.ref=(this.element=(function(){let parent = document.createElement("div");__jsx_append(parent,document.createTextNode(`$ `));__jsx_append(parent,state.text);;return parent;})(/* style=style */))); this.ref.setAttribute("style", style);  return this.ref;}).apply(this);} ;if (typeof this !== "undefined"){this.TerminalBase=TerminalBase;}; function Terminal (){let texts=["fjb index.js","fjb index.jsx","fjb index.ts","fjb index.tsx"];let terminalState={texts:texts,text:texts[0],index:0};setInterval(function   (){terminalState.index=terminalState.index >= texts.length - 1?0:terminalState.index+1;terminalState.text=terminalState.texts[terminalState.index];this.ref.innerHTML='$ '+terminalState.text;} ,500);return (function(){(this.ref =(this.element =(function(){ let parent = new TerminalBase(state=terminalState);TerminalBase;;return parent;})(/* state=terminalState */))); this.ref.setAttribute("state", terminalState);  return this.ref;}).apply(this);} ;if (typeof this !== "undefined"){this.Terminal=Terminal;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let Terminal=(_fjb9.Terminal||_fjb9); ;var _fjb6=(function(module={},exports={}){ function initializeTerminal (){const element=document.getElementById("terminal");if(element){element.appendChild((function(){(this.ref =(this.element =(function(){ let parent = new Terminal();Terminal;;return parent;})(/*  */)));   return this.ref;}).apply(this));};} ;if (typeof this !== "undefined"){this.initializeTerminal=initializeTerminal;};var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let initializeTerminal=(_fjb6.initializeTerminal||_fjb6); ;var _fjb18=(function(module={},exports={}){!(function   (context){function contentLoaded (e,t){var i=!1,o=!0,n=e.document,s=n.documentElement,a=n.addEventListener?"addEventListener":"attachEvent",r=n.addEventListener?"removeEventListener":"detachEvent",c=n.addEventListener?"":"on",l=function   (o){("readystatechange" == o.type && "complete" != n.readyState) || (("load" == o.type?e:n)[r](c+o.type,l,!1),!i && (i=!0) && t.call(e,o.type || o));} ,p=function   (){try{s.doScroll("left");}catch(e){return void setTimeout(p,50);};l("poll");} ;if("complete" == n.readyState){t.call(e,"lazy")} else {if(n.createEventObject && s.doScroll){try{o=!e.frameElement;}catch(e){};o && p();};n[a](c+"DOMContentLoaded",l,!1),n[a](c+"readystatechange",l,!1),e[a](c+"load",l,!1);};} ;var win=context,doc=win.document,global_instance_name="cbinstance",Cookies={get:function   (e){return (decodeURIComponent(doc.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")) || null);} ,set:function   (e,t,i,o,n,s){if(!e || /^(?:expires|max-age|path|domain|secure)$/i.test(e)){return !1};var a="";if(i){switch(i.constructor){case Number:a=i === 1 / 0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+i;break;case String:a="; expires="+i;break;case Date:a="; expires="+i.toUTCString();}};return ((doc.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+a+(n?"; domain="+n:"")+(o?"; path="+o:"")+(s?"; secure":"")),!0);} ,has:function   (e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(doc.cookie);} ,remove:function   (e,t,i){return (!(!e || !this.has(e)) && ((doc.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(i?"; domain="+i:"")+(t?"; path="+t:"")),!0));} },Utils={merge:function   (){var e,t={},i=0,o=arguments.length;if(0 === o){return t};for(;i < o;i++){for(e in arguments[i]){Object.prototype.hasOwnProperty.call(arguments[i],e) && (t[e]=arguments[i][e])}};return t;} ,str2bool:function   (e){switch(((e=String(e)),e.toLowerCase())){case "false":case "no":case "0":case "":return !1;default :return !0;};} ,fade_in:function   (e){e.style.opacity < 1 && ((e.style.opacity=(parseFloat(e.style.opacity)+0.05).toFixed(2)),win.setTimeout(function   (){Utils.fade_in(e);} ,50));} ,fade_out:function   (e,t){if("undefined" != typeof e){e.style.opacity=1;var i=t / 1e3;(e.style.transition="opacity "+i+"s ease"),(e.style.opacity=0),setTimeout(function   (){e.parentNode.removeChild(e);} ,t);};} ,get_data_attribs:function   (script){var data={};if(Object.prototype.hasOwnProperty.call(script,"dataset")){data=script.dataset} else {var attribs=script.attributes,key;for(key in attribs){if(Object.prototype.hasOwnProperty.call(attribs,key)){var attr=attribs[key];if(/^data-/.test(attr.name)){var camelized=Utils.camelize(attr.name.substr(5)),isFunction=0 === camelized.lastIndexOf("on",0);data[camelized]=isFunction?eval(attr.value):attr.value;};}};};return data;} ,normalize_keys:function   (e){var t={};for(var i in e){if(Object.prototype.hasOwnProperty.call(e,i)){var o=Utils.camelize(i);t[o]=e[o]?e[o]:e[i];}};return t;} ,camelize:function   (e){for(var t="-",i=e.indexOf(t);i !== -1;){var o=i === e.length - 1,n=o?"":e[i+1],s=n.toUpperCase(),a=o?t:t+n;(e=e.replace(a,s)),(i=e.indexOf(t));};return e;} ,find_script_by_id:function   (e){for(var t=doc.getElementsByTagName("script"),i=0,o=t.length;i < o;i++){if(e === t[i].id){return t[i]}};return null;} ,is_numeric:function   (e){return parseFloat(e) == e;} },script_el_invoker=Utils.find_script_by_id("cookiebanner"),Cookiebanner=(context.Cookiebanner=function   (e){this.init(e);} );(Cookiebanner.prototype={cookiejar:Cookies,init:function   (e){(this.inserted=!1),(this.closed=!1);var t="We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",i="Learn more";if(((this.default_options={cookie:"cookiebanner-accepted",closeText:"&#10006;",closeStyle:"float:right;padding-left:5px;",closePrecedes:!0,cookiePath:"/",cookieDomain:null,cookieSecure:!1,debug:!1,expires:0,zindex:255,mask:!1,maskOpacity:0.5,maskBackground:"#000",height:"auto",minHeight:"21px",bg:"#000",fg:"#ddd",link:"#aaa",position:"bottom",padding:"5px 16px",message:t,linkmsg:i,moreinfo:"http://aboutcookies.org",moreinfoTarget:"_blank",moreinfoRel:"noopener noreferrer",moreinfoDecoration:"none",moreinfoFontWeight:"normal",moreinfoFontSize:null,moreinfoClass:null,effect:null,fontSize:"14px",fontFamily:"arial, sans-serif",instance:global_instance_name,textAlign:"center",acceptOnScroll:!1,acceptOnClick:!1,acceptOnTimeout:null,acceptOnFirstVisit:!1,onInserted:null,onClosed:null,delayBeforeClose:null,fadeOutDurationMs:2e3}),(this.options=this.default_options),(this.script_el=script_el_invoker),this.script_el)){var o=Utils.get_data_attribs(this.script_el);this.options=Utils.merge(this.options,o);};e && ((e=Utils.normalize_keys(e)),(this.options=Utils.merge(this.options,e))),(global_instance_name=this.options.instance),(this.options.zindex=parseInt(this.options.zindex,10)),(this.options.mask=Utils.str2bool(this.options.mask)),(this.options.closePrecedes=Utils.str2bool(this.options.closePrecedes)),"string" == typeof this.options.expires && ("function" == typeof context[this.options.expires]?(this.options.expires=context[this.options.expires]):Utils.is_numeric(this.options.expires) && (this.options.expires=Number(parseFloat(this.options.expires)))),"function" == typeof this.options.expires && (this.options.expires=this.options.expires()),this.script_el && this.run();} ,log:function   (){"undefined" != typeof console && console.log.apply(console,arguments);} ,run:function   (){if(!this.agreed()){var e=this;contentLoaded(win,function   (){e.insert();} );};} ,build_viewport_mask:function   (){var e=null;if(!0 === this.options.mask){var t=this.options.maskOpacity,i=this.options.maskBackground,o='<div id=\"cookiebanner-mask\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;background:'+i+";zoom:1;filter:alpha(opacity="+100 * t+");opacity:"+t+";z-index:"+this.options.zindex+';\"></div>',n=doc.createElement("div");(n.innerHTML=o),(e=n.firstChild);};return e;} ,agree:function   (){return (this.cookiejar.set(this.options.cookie,1,this.options.expires,this.options.cookiePath,"" !== this.options.cookieDomain?this.options.cookieDomain:"",!!this.options.cookieSecure),!0);} ,agreed:function   (){return this.cookiejar.has(this.options.cookie);} ,close:function   (){if("fade" === this.options.effect){Utils.fade_out(this.element,this.options.fadeOutDurationMs),(this.closed=!0)} else if(this.inserted){this.closed || (this.element && this.element.parentNode.removeChild(this.element),this.element_mask && this.element_mask.parentNode.removeChild(this.element_mask),(this.closed=!0)),(this.closed=!0);var e=this.options.onClosed;e && "function" == typeof e && e(this);};return this.closed;} ,agree_and_close:function   (){if((this.options.debug || this.agree(),!this.options.delayBeforeClose || isNaN(parseFloat(this.options.delayBeforeClose)) || !isFinite(this.options.delayBeforeClose))){return this.close()};var e=this;setTimeout(function   (){e.close();} ,this.options.delayBeforeClose);} ,cleanup:function   (){return this.close(),this.unload();} ,unload:function   (){return (this.script_el && this.script_el.parentNode.removeChild(this.script_el),(context[global_instance_name]=void 0),!0);} ,insert:function   (){function e (e,t,i){var o=e.addEventListener?"addEventListener":"attachEvent",n=e.addEventListener?"":"on";e[o](n+t,i,!1);} ;this.element_mask=this.build_viewport_mask();var t=this.options.zindex;this.element_mask && (t += 1);var i=doc.createElement("div");(i.className="cookiebanner"),(i.style.position="fixed"),(i.style.left=0),(i.style.right=0),(i.style.height=this.options.height),(i.style.minHeight=this.options.minHeight),(i.style.zIndex=t),(i.style.background=this.options.bg),(i.style.color=this.options.fg),(i.style.lineHeight=i.style.minHeight),(i.style.padding=this.options.padding),(i.style.fontFamily=this.options.fontFamily),(i.style.fontSize=this.options.fontSize),(i.style.textAlign=this.options.textAlign),"top" === this.options.position?(i.style.top=0):(i.style.bottom=0);var o='<div class=\"cookiebanner-close\" style=\"'+this.options.closeStyle+'\">'+this.options.closeText+"</div>",n="";null !== this.options.moreinfoClass && (n=' class=\"'+this.options.moreinfoClass+'\" ');var s="<span>"+this.options.message+(this.options.linkmsg?" <a"+n+">"+this.options.linkmsg+"</a>":"")+"</span>";this.options.closePrecedes?(i.innerHTML=o+s):(i.innerHTML=s+o),(this.element=i);var a;(a=null !== this.options.moreinfoClass?i.getElementsByClassName(this.options.moreinfoClass)[0]:i.getElementsByTagName("a")[0]),a && ((a.href=this.options.moreinfo),(a.target=this.options.moreinfoTarget),this.options.moreinfoRel && "" !== this.options.moreinfoRel && (a.rel=this.options.moreinfoRel),(a.style.textDecoration=this.options.moreinfoDecoration),(a.style.color=this.options.link),(a.style.fontWeight=this.options.moreinfoFontWeight),"" !== this.options.moreinfoFontSize && (a.style.fontSize=this.options.moreinfoFontSize));var r=i.getElementsByTagName("div")[0];r.style.cursor="pointer";var c=this;e(r,"click",function   (){c.agree_and_close();} ),this.element_mask && (e(this.element_mask,"click",function   (){c.agree_and_close();} ),doc.body.appendChild(this.element_mask)),this.options.acceptOnScroll && e(window,"scroll",function   (){c.agree_and_close();} ),this.options.acceptOnClick && e(window,"click",function   (){c.agree_and_close();} ),this.options.acceptOnTimeout && !isNaN(parseFloat(this.options.acceptOnTimeout)) && isFinite(this.options.acceptOnTimeout) && setTimeout(function   (){c.agree_and_close();} ,this.options.acceptOnTimeout),this.options.acceptOnFirstVisit && c.agree(),doc.body.appendChild(this.element),(this.inserted=!0);var l=this.options.onInserted;l && "function" == typeof l && l(this),"fade" === this.options.effect?((this.element.style.opacity=0),Utils.fade_in(this.element)):(this.element.style.opacity=1);} }),script_el_invoker && (context[global_instance_name] || (context[global_instance_name]=new Cookiebanner()));} )(window);;var __exp = module.exports || exports;return typeof __exp=="function"?__exp:(Object.assign(this, __exp));}).call({},{},{},);let CookieBanner=(_fjb18.CookieBanner||_fjb18);
/* IMPORT `src/static/js/app.js` */ const options={message:"We use cookies to enhance your experience. If you continue to use this website, you consent.",moreinfo:"https://gdpr.eu/cookies/"};const cb=new Cookiebanner(options);cb.run();initializeNav();initializeTerminal();
