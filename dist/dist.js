/* Bundled with FJB */function _fjb_optional_chain(obj, key) {  if ((obj || {}).hasOwnProperty(key)) return obj[key];  return {};}function globalDef(value) {  return window && value && value.name && (window[value.name] = value);}var __jsx_queue = [];globalDef(__jsx_queue);function __isElement(obj) {  try {    return obj instanceof HTMLElement;  } catch (e) {    return (      typeof obj === "object" &&      obj.nodeType === 1 &&      typeof obj.style === "object" &&      typeof obj.ownerDocument === "object"    );  }}globalDef(__isElement);function __toElement(val) {  if (__isElement(val)) return val;  if (typeof val == "string" || typeof val == "number")    return document.createTextNode(val);    return val;}function __jsx_append_many(parent, elements) {  for (var i = 0; i < elements.length; i++) {    parent.appendChild(__toElement(elements[i]));  }}globalDef(__jsx_append_many);function __jsx_append(parent, el) {  if (!Array.isArray(el)) return parent.appendChild(__toElement(el));  return __jsx_append_many(parent, el);}globalDef(__jsx_append);function React_createTextNode(text) {  return React.createElement("span", null, text);}globalDef(React_createTextNode); ;var _fjb1=(function(module={},exports={}){function initializeNav (){const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);if($navbarBurgers.length > 0){$navbarBurgers.forEach((el)=>{el.addEventListener("click",()=>{const target=el.dataset.target;const $target=document.getElementById(target);el.classList.toggle("is-active");$target.classList.toggle("is-active");});});};const navItems=Array.prototype.slice.call(document.querySelectorAll(".navbar-item:not(.main-item)"),0);if(navItems.length > 0){navItems.forEach((el)=>{if(window.location.href.toString().indexOf(el.getAttribute("href")) > -1){el.classList.toggle("is-active");};});};} ;this.initializeNav=initializeNav;;return(Object.assign(this, module.exports||exports));}).call({},{},{},);let initializeNav=(_fjb1.initializeNav||_fjb1);
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
`;this.style=style;;;return(Object.assign(this, module.exports||exports));}).call({},{},{},);let style=(_fjb12.style||_fjb12); ;var _fjb9=(function(module={},exports={}){ function TerminalBase (state){return (function (){(this.ref=(this.element=(function(){let parent = document.createElement("div");__jsx_append(parent,document.createTextNode(`$ `));__jsx_append(parent,state.text);;return parent;})(/* style=style */))); this.ref.setAttribute("style", style);  return this.ref;}).apply(this);} ;this.TerminalBase=TerminalBase;; function Terminal (){let texts=["fjb index.js","fjb index.jsx","fjb index.ts","fjb index.tsx"];let terminalState={texts :texts,text :texts[0],index :0};setInterval(function   (){terminalState.index=terminalState.index >= texts.length - 1?0:terminalState.index+1;terminalState.text=terminalState.texts[terminalState.index];this.ref.innerHTML='$ '+terminalState.text;} ,500);return (function(){(this.ref =(this.element =(function(){ let parent = new TerminalBase(state=terminalState);TerminalBase;;return parent;})(/* state=terminalState */))); this.ref.setAttribute("state", terminalState);  return this.ref;}).apply(this);} ;this.Terminal=Terminal;;return(Object.assign(this, module.exports||exports));}).call({},{},{},);let Terminal=(_fjb9.Terminal||_fjb9); ;var _fjb6=(function(module={},exports={}){ function initializeTerminal (){const element=document.getElementById("terminal");if(element){element.appendChild((function(){(this.ref =(this.element =(function(){ let parent = new Terminal();Terminal;;return parent;})(/*  */)));   return this.ref;}).apply(this));};} ;this.initializeTerminal=initializeTerminal;;return(Object.assign(this, module.exports||exports));}).call({},{},{},);let initializeTerminal=(_fjb6.initializeTerminal||_fjb6);
/* IMPORT `src/static/js/app.js` */ initializeNav();initializeTerminal();
