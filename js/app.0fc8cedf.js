(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1dfe4c93":"4e1988cf","chunk-327bc0c8":"713e4109","chunk-4f30bfa0":"9533ebfb","chunk-534a7a3d":"28debbda","chunk-9c026e14":"162322d1"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1dfe4c93":1,"chunk-327bc0c8":1,"chunk-4f30bfa0":1,"chunk-534a7a3d":1,"chunk-9c026e14":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1dfe4c93":"93862724","chunk-327bc0c8":"d68d7d6d","chunk-4f30bfa0":"1202bdb1","chunk-534a7a3d":"ea2a00f5","chunk-9c026e14":"48cb03c5"}[t]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],m.parentNode.removeChild(m),n(o)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/visualization-project/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18b4":function(t,e,n){},"2dac":function(t,e,n){},"332c":function(t,e,n){"use strict";n("18b4")},"36bf":function(t,e,n){"use strict";n("2dac")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("nav-bar"),n("v-main",[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{clas:""}},[a("v-app-bar",{attrs:{color:"accent-4",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),a("a",{attrs:{href:"https://github.com/pateras95/visualization-project",target:"_blank"}},[a("button",{staticClass:"github-button"})])],1),a("v-navigation-drawer",{staticClass:"outer-container",attrs:{absolute:"",temporary:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("div",{staticClass:"nav-top-container"},[a("img",{staticClass:"avatar-img",attrs:{src:n("b0b3")}}),a("div",{staticClass:"mt-3"},[t._v("Visualization")]),a("dir",{staticClass:"mt-n1"},[t._v("Project")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-divider"),a("v-list",{attrs:{nav:""}},[a("v-list-item-group",{attrs:{"active-class":"text--accent-4 nav-bar"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-home")]),t._v("Home")],1)],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/about-me"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-account-multiple")]),t._v("About The Team")],1)],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/resume"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-folder-download")]),t._v("Datasets.csv ")],1)],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/data-visualization"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-chart-histogram")]),t._v("Parents & Students")],1)],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/data-visualization-2"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-chart-histogram")]),t._v("Educational Authorities")],1)],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/data-visualization-3"}},[a("v-list-item",{staticClass:"nav-bar-text"},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-5"},[t._v("mdi-chart-histogram")]),t._v("Students Assess Influence")],1)],1)],1)],1)],1)],1)],1)},c=[],s={name:"NavBar",data:function(){return{drawer:!1,tems:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]}}},u=s,l=(n("332c"),n("2877")),d=n("6544"),m=n.n(d),p=n("40dc"),f=n("5bc1"),h=n("ce7e"),v=n("132d"),b=n("8860"),g=n("da13"),y=n("1baa"),w=n("5d23"),k=n("f774"),_=n("2fa4"),C=Object(l["a"])(u,o,c,!1,null,"c5064b88",null),x=C.exports;m()(C,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VDivider:h["a"],VIcon:v["a"],VList:b["a"],VListItem:g["a"],VListItemGroup:y["a"],VListItemTitle:w["a"],VNavigationDrawer:k["a"],VSpacer:_["a"]});var S={name:"App",components:{NavBar:x}},F=S,P=n("7496"),j=n("f6c4"),A=Object(l["a"])(F,i,r,!1,null,null,null),E=A.exports;m()(A,{VApp:P["a"],VMain:j["a"]});n("d3b7"),n("3ca3"),n("ddb0");var V=n("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer-container"},[n("div",{staticClass:"header-text"},[t._v(" Video Presentation ")]),n("div",{staticClass:"simple-text"},[t._v(" Online education has been widely applied for the last 2 years, due to the pandemic conditions. Initially it was perceived as a temporary solution to an urgent condition, but as years went by, students became familiar with this new kind of education and started to adapt to it. Some may argue that online education is here to stay, initiating a new era in education from anywhere, anytime. However, is online education enough? No matter the overall students performance, online education is considered to be insufficient with regards to students' social interaction with each other, culture, ethics, etc. This work aims to highlight and combine the facts into visualisations that will help us build a solid view on whether students are well adapted to online education and under which circumstances. ")])])}],D={name:"Home",methods:{goToResume:function(){this.$router.push("/about-me")}}},T=D,N=(n("36bf"),Object(l["a"])(T,O,z,!1,null,"23681e2f",null)),B=N.exports,L=n("5f35"),I=n.n(L);a["a"].use(V["a"]);var M=new V["a"]({mode:"history",base:I.a.publicPath,routes:[{path:"/",name:"Home",component:B},{path:"/about-me",name:"AboutMe",component:function(){return n.e("chunk-4f30bfa0").then(n.bind(null,"fe94"))}},{path:"/data-visualization",name:"DataVisualization",component:function(){return n.e("chunk-327bc0c8").then(n.bind(null,"ebdd"))}},{path:"/data-visualization-2",name:"DataVisualization2",component:function(){return n.e("chunk-9c026e14").then(n.bind(null,"26f4"))}},{path:"/data-visualization-3",name:"DataVisualization3",component:function(){return n.e("chunk-1dfe4c93").then(n.bind(null,"da00"))}},{path:"/resume",name:"Resume",component:function(){return n.e("chunk-534a7a3d").then(n.bind(null,"a4c3"))}}]});M.beforeEach((function(t,e,n){n()}));var H=M,$=n("f309");n("5363");a["a"].use($["a"],{options:{customProperties:!0}});var q=new $["a"]({theme:{themes:{light:{primary:"#1565C0",onPrimary:"#FFFFFF",secondary:"#9C27B0",onSecondary:"#000000",warning:"#ED6C02",error:"#D32F2F",info:"#0288D1",success:"#4CAF50",background:"#FFFFFF"},dark:{primary:"#90CAF9",onPrimary:"#000000",secondary:"#CE93D8",onSecondary:"#000000",warning:"#FFA726",error:"#F44336",info:"#29B6F6",success:"#81C784",background:"#121212"}}},icons:{iconfont:"mdi"}}),J=n("1dce"),R=n.n(J),U=n("58ca"),G=n("8f0d");a["a"].config.productionTip=!1,a["a"].use(R.a),a["a"].use(U["a"]),a["a"].use(G["a"]),new a["a"]({router:H,vuetify:q,render:function(t){return t(E)}}).$mount("#app")},"5f35":function(t,e){t.exports={publicPath:"/visualization-project/",transpileDependencies:["vuetify"]}},b0b3:function(t,e,n){t.exports=n.p+"img/uoa_logo.0070eb9c.png"}});
//# sourceMappingURL=app.0fc8cedf.js.map