(function(e){function t(t){for(var r,a,c=t[0],d=t[1],u=t[2],s=0,l=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var r={},a={index:0},o={index:0},i=[];function c(e){return d.p+"static/js/"+({}[e]||e)+"."+{"chunk-070caa46":"ff0457f7","chunk-16252d3e":"b084deff","chunk-10ddd388":"e0a453a8","chunk-2d0cfa55":"21f9c502","chunk-23adc7c7":"3adec42a","chunk-25608b2b":"d29ff8e4","chunk-2d0c94ce":"f072f51b","chunk-2d0e57a1":"fe2db3fc","chunk-2d0f083e":"5e365111","chunk-2d213326":"1d0e014f","chunk-2d225004":"b0db7338","chunk-2d22d779":"36b803a7","chunk-3df75e87":"b6465751","chunk-4e905ab6":"b226ede0","chunk-6d406743":"566b0844","chunk-729072a8":"fd89a0be","chunk-908a034e":"60394e10","chunk-db40b1fa":"4e6271ff","chunk-fd1e441e":"58f4f127"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-3df75e87":1,"chunk-4e905ab6":1,"chunk-729072a8":1,"chunk-db40b1fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-070caa46":"31d6cfe0","chunk-16252d3e":"31d6cfe0","chunk-10ddd388":"31d6cfe0","chunk-2d0cfa55":"31d6cfe0","chunk-23adc7c7":"31d6cfe0","chunk-25608b2b":"31d6cfe0","chunk-2d0c94ce":"31d6cfe0","chunk-2d0e57a1":"31d6cfe0","chunk-2d0f083e":"31d6cfe0","chunk-2d213326":"31d6cfe0","chunk-2d225004":"31d6cfe0","chunk-2d22d779":"31d6cfe0","chunk-3df75e87":"9731fe9b","chunk-4e905ab6":"81594d1f","chunk-6d406743":"31d6cfe0","chunk-729072a8":"2b7ae924","chunk-908a034e":"31d6cfe0","chunk-db40b1fa":"9731fe9b","chunk-fd1e441e":"31d6cfe0"}[e]+".css",o=d.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=c(e);var l=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},o=[],i=n("5530"),c=n("2f62"),d={data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["getThemeMode"])),{},{themeName:function(){return this.getThemeMode.dark?"dark-theme":" "},rtl:function(){return this.getThemeMode.rtl?"rtl":" "}}),metaInfo:function(){return{title:"Gull",titleTemplate:"%s | Gull - Vuejs Admin Dashboard Template",bodyAttrs:{class:[this.themeName,"text-left"]},htmlAttrs:{dir:this.rtl}}}},u=d,s=n("2877"),l=Object(s["a"])(u,a,o,!1,null,null,null),p=l.exports,f=(n("d3b7"),{sidebarToggleProperties:{isSideNavOpen:!0,isSecondarySideNavOpen:!1,isActiveSecondarySideNav:!1}}),h={getSideBarToggleProperties:function(e){return e.sidebarToggleProperties}},m={changeSidebarProperties:function(e){var t=e.commit;t("toggleSidebarProperties")},changeSecondarySidebarProperties:function(e){var t=e.commit;t("toggleSecondarySidebarProperties")},changeSecondarySidebarPropertiesViaMenuItem:function(e,t){var n=e.commit;n("toggleSecondarySidebarPropertiesViaMenuItem",t)},changeSecondarySidebarPropertiesViaOverlay:function(e){var t=e.commit;t("toggleSecondarySidebarPropertiesViaOverlay")}},b={toggleSidebarProperties:function(e){return e.sidebarToggleProperties.isSideNavOpen=!e.sidebarToggleProperties.isSideNavOpen},toggleSecondarySidebarProperties:function(e){return e.sidebarToggleProperties.isSecondarySideNavOpen=!e.sidebarToggleProperties.isSecondarySideNavOpen},toggleSecondarySidebarPropertiesViaMenuItem:function(e,t){e.sidebarToggleProperties.isSecondarySideNavOpen=t,e.sidebarToggleProperties.isActiveSecondarySideNav=t},toggleSecondarySidebarPropertiesViaOverlay:function(e){e.sidebarToggleProperties.isSecondarySideNavOpen=!e.sidebarToggleProperties.isSecondarySideNavOpen}},g={state:f,getters:h,actions:m,mutations:b},v={compactSidebarToggleProperties:{isSideNavOpen:!0,isActiveSecondarySideNav:!1},compactLeftSideBarBgColor:"sidebar-dark-purple"},S={getCompactSideBarToggleProperties:function(e){return e.compactSidebarToggleProperties},getcompactLeftSideBarBgColor:function(e){return e.compactLeftSideBarBgColor}},k={changeCompactSidebarProperties:function(e){var t=e.commit;t("toggleCompactSidebarProperties")},changecompactLeftSideBarBgColor:function(e,t){var n=e.commit;n("togglecompactLeftSideBarBgColor",t)}},y={toggleCompactSidebarProperties:function(e){return e.compactSidebarToggleProperties.isSideNavOpen=!e.compactSidebarToggleProperties.isSideNavOpen},togglecompactLeftSideBarBgColor:function(e,t){e.compactLeftSideBarBgColor=t}},C={state:v,getters:S,actions:k,mutations:y},T={themeMode:{dark:!1,light:!0,semi_dark:!1,theme_color:"lite-purple",layout:"large-sidebar",rtl:!1}},P={getThemeMode:function(e){return e.themeMode}},O={changeThemeMode:function(e){var t=e.commit;t("toggleThemeMode")},changeThemeLayout:function(e,t){var n=e.commit;n("toggleThemeLayout",t)},changeThemeRtl:function(e){var t=e.commit;t("toggleThemeRtl")}},N={toggleThemeMode:function(e){e.themeMode.dark=!e.themeMode.dark},toggleThemeLayout:function(e,t){e.themeMode.layout=t},toggleThemeRtl:function(e){e.themeMode.rtl=!e.themeMode.rtl}},B={state:T,getters:P,actions:O,mutations:N},M={verticalSidebar:{isVerticalSidebar:!0,isVerticalCompact:!1,isMobileCompact:!0},verticalCompact:{isSidebarCompact:!1,isItemName:!1}},_={getVerticalSidebar:function(e){return e.verticalSidebar},getVerticalCompact:function(e){return e.verticalCompact}},I={switchSidebar:function(e,t){var n=e.commit;n("SWITCH_SIDEBAR",t)},sidebarCompact:function(e,t){var n=e.commit;n("SIDEBAR_COMPACT",t)},removeSidebarCompact:function(e,t){var n=e.commit;n("REMOVE_SIDEBAR_COMPACT",t)},mobileSidebar:function(e,t){var n=e.commit;n("MOBILE_SIDEBAR",t)}},w={SWITCH_SIDEBAR:function(e,t){e.verticalSidebar.isVerticalSidebar=!e.verticalSidebar.isVerticalSidebar,e.verticalSidebar.isVerticalCompact=!e.verticalSidebar.isVerticalCompact,console.log("test")},SIDEBAR_COMPACT:function(e,t){0==e.verticalSidebar.isVerticalSidebar&&(e.verticalCompact.isSidebarCompact=!e.verticalCompact.isSidebarCompact,e.verticalCompact.isItemName=!e.verticalCompact.isItemName),console.log("test")},REMOVE_SIDEBAR_COMPACT:function(e,t){1==e.verticalCompact.isSidebarCompact&&(e.verticalCompact.isSidebarCompact=!e.verticalCompact.isSidebarCompact,e.verticalCompact.isItemName=!e.verticalCompact.isItemName)},MOBILE_SIDEBAR:function(e,t){e.verticalSidebar.isMobileCompact=!e.verticalSidebar.isMobileCompact}},E={state:M,getters:_,actions:I,mutations:w};r["default"].use(c["a"]);var A=new c["a"].Store({modules:{largeSidebar:g,compactSidebar:C,config:B,verticalSidebar:E}}),V=n("8c4f"),j=n("323e"),x=n.n(j);r["default"].use(V["a"]);var L=[{path:"/",component:function(){return n.e("chunk-2d22d779").then(n.bind(null,"f82c"))},redirect:"/app/pages/blank",children:[{path:"/app/pages",component:function(){return n.e("chunk-2d225004").then(n.bind(null,"e311"))},redirect:"/app/pages/profile",children:[{path:"profile",component:function(){return n.e("chunk-908a034e").then(n.bind(null,"3a1f"))}},{path:"error",component:function(){return n.e("chunk-2d213326").then(n.bind(null,"ac3a"))}},{path:"icons",component:function(){return n.e("chunk-070caa46").then(n.bind(null,"676b"))}},{path:"search-result",component:function(){return n.e("chunk-fd1e441e").then(n.bind(null,"71dc"))}},{path:"pricing-table",component:function(){return n.e("chunk-2d0e57a1").then(n.bind(null,"953b"))}},{path:"faq",component:function(){return n.e("chunk-23adc7c7").then(n.bind(null,"4423"))}},{path:"blank",component:function(){return n.e("chunk-729072a8").then(n.bind(null,"385f"))}}]}]},{path:"/app/sessions",component:function(){return n.e("chunk-2d0c94ce").then(n.bind(null,"590d"))},redirect:"/app/sessions/signIn",children:[{path:"signIn",component:function(){return n.e("chunk-3df75e87").then(n.bind(null,"f6ee"))}},{path:"signUp",component:function(){return n.e("chunk-db40b1fa").then(n.bind(null,"da5c"))}},{path:"forgot",component:function(){return n.e("chunk-25608b2b").then(n.bind(null,"a2e7"))}}]},{path:"*",component:function(){return n.e("chunk-2d213326").then(n.bind(null,"ac3a"))}}],D=new V["a"]({mode:"history",linkActiveClass:"open",routes:L,scrollBehavior:function(e,t,n){return{x:0,y:0}}});D.beforeEach((function(e,t,n){e.path&&(x.a.start(),x.a.set(.1)),n()})),D.afterEach((function(){var e=document.getElementById("loading_wrap");e&&(e.style.display="none"),setTimeout((function(){return x.a.done()}),500),window.innerWidth<=1200?(A.dispatch("changeSidebarProperties"),A.getters.getSideBarToggleProperties.isSecondarySideNavOpen&&A.dispatch("changeSecondarySidebarProperties"),A.getters.getCompactSideBarToggleProperties.isSideNavOpen&&A.dispatch("changeCompactSidebarProperties")):A.getters.getSideBarToggleProperties.isSecondarySideNavOpen&&A.dispatch("changeSecondarySidebarProperties")}));var R=D,F=n("5f5b"),J=n("1dce"),q=n.n(J),H=n("caf9"),W=n("58ca"),$=n("d61f"),z=(n("78b2"),{install:function(e){e.use(F["a"]),e.component("large-sidebar",(function(){return Promise.all([n.e("chunk-16252d3e"),n.e("chunk-2d0cfa55")]).then(n.bind(null,"6533"))})),e.component("compact-sidebar",(function(){return Promise.all([n.e("chunk-16252d3e"),n.e("chunk-10ddd388")]).then(n.bind(null,"f579"))})),e.component("vertical-sidebar",(function(){return n.e("chunk-4e905ab6").then(n.bind(null,"9758"))})),e.component("customizer",(function(){return n.e("chunk-6d406743").then(n.bind(null,"5903"))})),e.component("vue-perfect-scrollbar",(function(){return n.e("chunk-2d0f083e").then(n.t.bind(null,"9d63",7))})),e.use(W["a"],{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-server-rendered",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0}),e.use($["a"]),e.use(q.a),e.use(H["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}}),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[e._t("header",[n("h1",[e._v(e._s(e.page))]),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v(" "+e._s(e.folder)+" ")])]),n("li",[e._v(" "+e._s(e.page)+" ")])])])],2),n("div",{staticClass:"separator-breadcrumb border-top"})])},K=[],U={props:["page","folder"]},Q=U,X=Object(s["a"])(Q,G,K,!1,null,null,null),Y=X.exports,Z=n("a925");r["default"].use(Z["a"]);var ee="en",te={bn:n("af69"),en:n("d255"),de:n("8f52")},ne=new Z["a"]({locale:ee,messages:te}),re=ne;r["default"].component("breadcumb",Y),r["default"].use(z),r["default"].config.productionTip=!1,new r["default"]({store:A,router:R,i18n:re,render:function(e){return e(p)}}).$mount("#app")},"78b2":function(e,t,n){},"8f52":function(e){e.exports=JSON.parse('{"dashboard":"Instrumententafel","dashboardItems":{"versionOne":"Version Eins","versionTwo":"Version zwei","versionThree":"Version drei","versionFour":"Version vier"}}')},af69:function(e){e.exports=JSON.parse('{"dashboard":"পানেল","dashboardItems":{"versionOne":"সংস্করণ এক","versionTwo":"দ্বিতীয় সংস্করণ","versionThree":"সংস্করণ তিন","versionFour":"সংস্করণ চার"}}')},d255:function(e){e.exports=JSON.parse('{"dashboard":"Dashboard","dashboardItems":{"versionOne":"Version One","versionTwo":"Version Two","versionThree":"Version Three","versionFour":"Version Four"}}')}});