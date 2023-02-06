(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(537),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"body {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n  border: 2px solid red;\n  grid-column: 1 / span 2;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\n#itemList {\n  display: flex;\n  flex-direction: column;\n}\n.todo {\n  border: 1px solid black;\n  border-radius: 7px;\n  margin-top: 5px;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#projectHead {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newItemOverlay {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  /*width: 100%;\n  height: 100%;*/\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5); /*dim the background*/\n}\n\n.inputOverlay > div {\n  display: flex;\n  justify-content: space-between;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC;gBACc;EACd,WAAW;EACX,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC",sourcesContent:["body {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n  border: 2px solid red;\n  grid-column: 1 / span 2;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\n#itemList {\n  display: flex;\n  flex-direction: column;\n}\n.todo {\n  border: 1px solid black;\n  border-radius: 7px;\n  margin-top: 5px;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#projectHead {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newItemOverlay {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  /*width: 100%;\n  height: 100%;*/\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5); /*dim the background*/\n}\n\n.inputOverlay > div {\n  display: flex;\n  justify-content: space-between;\n}\n"],sourceRoot:""}]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var A=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:A,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),A={};A.styleTagTransform=u(),A.setAttributes=d(),A.insert=a().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=l(),t()(m.Z,A),m.Z&&m.Z.locals&&m.Z.locals;class f{constructor(e,t,n,o,r,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.checked=i}}class h{constructor(e,t){this.title=e,this.description=t,this.tasks=[]}}class C{constructor(e){const t=document.createElement("div"),n=document.createElement("input");n.type="checkbox",t.appendChild(n);const o=document.createElement("div");o.textContent=e.title,t.appendChild(o);const r=document.createElement("div");r.textContent=e.description,t.appendChild(r);const i=document.createElement("div");i.textContent=e.priority,t.appendChild(i);const a=document.createElement("div"),c=document.createElement("button");c.classList.add("delete"),c.textContent="D",a.appendChild(c);const d=document.createElement("button");return d.classList.add("edit"),d.textContent="E",a.appendChild(d),t.appendChild(a),t.classList.add("todo"),!0===e.checked&&(t.getElementsByTagName("input")[0].checked=!0),t}}function E(e){const t=document.createElement("button");return t.innerHTML=`\n        <input type="checkbox">\n        <div>\n        ${e.title}\n        </div>\n        <div>\n        ${e.description}\n        </div>\n        <div>\n          <button class="delete">D</button>\n          <button class="edit">E</button>\n        </div>`,t.addEventListener("click",(()=>function(e){console.table(e);const t=document.getElementById("itemList");t.innerHTML="",document.getElementById("projectHead").textContent=`${e.title}`;for(let n=0;n<e.tasks.length;n++){const o=new C(e.tasks[n]);t.appendChild(o)}t.appendChild(v("todo"))}(e))),t.classList.add("todo"),t}function v(e){const t=document.createElement("button");return t.textContent="New Item",t.classList.add("todo"),"todo"===e?t.addEventListener("click",(()=>document.body.appendChild(y(e)))):t.addEventListener("click",(()=>document.body.appendChild(y()))),t}function y(e){document.getElementById("newItemOverlay")&&(document.getElementById("newItemOverlay").outerHTML="");const t=document.createElement("form");t.id="newItemOverlay";const n=document.createElement("div");n.classList.add("inputOverlay"),t.appendChild(n);const o=(e,t,o="text")=>{const r=document.createElement("div");n.appendChild(r);const i=document.createElement("label");i.setAttribute("for",t);const a=document.createTextNode(e);i.appendChild(a);const c=document.createElement("input");c.id=t,c.type=o,r.appendChild(i),r.appendChild(c)};o("Title","inputTitle"),o("Description","inputDescription"),"todo"==e&&(o("Due-Date","inputDate"),o("Priority","inputPriority"),o("Notes","inputNotes"));const r=document.createElement("button");return r.textContent="Submit",t.appendChild(r),r.addEventListener("click",(function(e){e.preventDefault();const n=t.elements,o={};for(let e=0;e<n.length-1;e++)o[n[e].id]=n[e].value;console.log(o),document.getElementById("newItemOverlay").outerHTML=""})),t}let b={};function g(){b=JSON.parse(localStorage.getItem("projects"));const e=document.getElementById("itemList");if(e.innerHTML="",b){document.getElementById("projectHead").textContent="To Do";for(let t=0;t<b.length;t++){const n=E(b[t]);e.appendChild(n)}e.appendChild(v())}else console.log(`nothing was pulled! tasklist was ${b}`)}const x=[],B=new h("My Project","Sample"),w=new f("DOOD!","pretty rad","now",1,"cool",!0),k=new f("Prinnies!","super cool","later",2,"hehe",!1);B.tasks.push(w),B.tasks.push(k);const j=new h("OUR project","super cool"),L=new f("Onion Frog!","Squirtle Squad","NOW","1","smashing",!0);j.tasks.push(L),x.push(j),x.push(B),localStorage.setItem("projects",JSON.stringify(x)),function(){const e=document.createElement("nav"),t=document.createElement("div"),n=document.createElement("button"),o=document.createElement("button"),r=document.createElement("input"),i=document.createElement("div"),a=document.createTextNode("user stuff here"),c=document.createElement("sidebar"),d=document.createElement("button"),s=document.createElement("div"),l=document.createElement("button"),p=document.createElement("main"),u=document.createElement("h1"),m=document.createElement("div");n.textContent="Menu",o.textContent="Home",r.type="text",d.textContent="Today",d.id="todayToDo",l.textContent="View Projects",l.id="viewAllProjects",u.id="projectHead",m.id="itemList",t.appendChild(n),t.appendChild(o),t.appendChild(r),e.appendChild(t),e.appendChild(i),i.appendChild(a),c.appendChild(d),s.appendChild(l),c.appendChild(s),p.appendChild(u),p.appendChild(m),document.body.appendChild(e),document.body.appendChild(c),document.body.appendChild(p),document.getElementById("viewAllProjects").addEventListener("click",g),g()}()})()})();
//# sourceMappingURL=main.js.map