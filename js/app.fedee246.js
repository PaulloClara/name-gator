(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/name-gator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("3003"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("header",{staticClass:"pa-2"},[a("m-logo")],1),a("v-container",{attrs:{tag:"main"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",{staticClass:"px-4 pb-4"},[a("m-card-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Prefixos")]},proxy:!0},{key:"total",fn:function(){return[t._v(t._s(t.prefixes.length))]},proxy:!0}])}),a("m-list-items",{attrs:{type:"prefix",items:t.prefixes,icon:{name:"trash",color:"ternary"}},on:{selectRemoveItem:t.removeItem}}),a("m-input",{attrs:{label:"Prefixo",type:"prefix"},on:{addItem:t.addItem}})],1)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",{staticClass:"px-4 pb-4"},[a("m-card-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Sufixos")]},proxy:!0},{key:"total",fn:function(){return[t._v(t._s(t.suffixes.length))]},proxy:!0}])}),a("m-list-items",{attrs:{type:"suffix",items:t.suffixes,icon:{name:"trash",color:"ternary"}},on:{selectRemoveItem:t.removeItem}}),a("m-input",{attrs:{label:"Sufixo",type:"suffix"},on:{addItem:t.addItem}})],1)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",{staticClass:"px-4 pb-4"},[a("m-card-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("TLDs")]},proxy:!0},{key:"total",fn:function(){return[t._v(t._s(t.tlds.length))]},proxy:!0}])}),a("m-list-items",{attrs:{type:"tld",items:t.tlds,icon:{name:"trash",color:"ternary"}},on:{selectRemoveItem:t.removeItem}}),a("m-input",{attrs:{label:"TLD",type:"tld"},on:{addItem:t.addItem}})],1)],1)],1),a("v-card",{staticClass:"px-4 pb-4 mt-4"},[a("m-card-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Domínios")]},proxy:!0},{key:"total",fn:function(){return[t._v(t._s(t.domains?t.domains.length:0))]},proxy:!0}])}),a("m-list-items",{attrs:{type:"domain",items:t.domains,icon:{name:"shopping-cart",color:"primary"}},on:{selectItem:t.buyDomain}})],1)],1)],1)},i=[],s=(a("99af"),a("4160"),a("d81d"),a("a434"),a("b0c0"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),l=a("bc3a"),c=a.n(l),u=c.a.create({baseURL:"https://api-checkdomain.herokuapp.com",timeout:2e4}),m=function(t){return u.get("/".concat(t))},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-3"},[t._v("NameGat"),a("m-set-theme"),t._v("r")],1),a("h2",{staticClass:"subtitle-2 mt-2"},[t._v(" Gerador de nomes utilizando Vue.js ❤ ")])])},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{id:"button-theme",color:t.color,fab:"",small:"",outlined:""},on:{click:t.setTheme}})},v=[],h={name:"SetTheme",data:function(){return{color:"primary"}},methods:{setTheme:function(){localStorage.setItem("theme","dark"===localStorage.getItem("theme")?"light":"dark"),this.$vuetify.theme.dark="dark"===localStorage.getItem("theme")}},mounted:function(){var t=this;setInterval((function(){"primary"===t.color?t.color="secondary":"secondary"===t.color?t.color="ternary":t.color="primary"}),2e3)}},y=h,b=(a("af41"),a("2877")),x=a("6544"),g=a.n(x),_=a("8336"),I=Object(b["a"])(y,p,v,!1,null,null,null),k=I.exports;g()(I,{VBtn:_["a"]});var w={name:"Logo",components:{"m-set-theme":k}},V=w,C=Object(b["a"])(V,d,f,!1,null,null,null),S=C.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"mt-2",attrs:{label:t.label,color:"secondary",solo:"",outlined:"","hide-details":""},on:{change:t.change},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-icon",{attrs:{color:"secondary"},on:{click:t.change}},[t._v(" fa-plus ")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},j=[],O=(a("fb6a"),a("498a"),{name:"Input",props:["label","type"],data:function(){return{value:""}},methods:{change:function(){var t=this.$props.type,e=this.$data.value,a={};e.trim()&&("tld"===t&&"."===e[0]?a.value=e.slice(1):a.value=e,a.type=t,this.$emit("addItem",a),this.value="")}}}),T=O,L=a("132d"),E=a("8654"),P=Object(b["a"])(T,$,j,!1,null,null,null),N=P.exports;g()(P,{VIcon:L["a"],VTextField:E["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{selected:""}},t._l(t.items,(function(e,n){return a("v-list-item",{key:""+n+e.name,class:n%2===0?"light":"quaternary",on:{click:function(e){return t.$emit("selectItem",{index:n,type:t.type})}}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.name)}})],1),a("v-list-item-icon",{on:{click:function(e){return t.$emit("selectRemoveItem",{index:n,type:t.type})}}},["domain"!==t.type?a("v-icon",{attrs:{color:t.icon.color}},[t._v(" fa-"+t._s(t.icon.name)+" ")]):a("v-icon",{attrs:{color:e.available?t.icon.color:"error"}},[t._v(" fa-"+t._s(e.available?t.icon.name:"exclamation-triangle")+" ")])],1)],1)})),1)},D=[],M={name:"ListItems",props:["items","icon","type"]},q=M,z=a("8860"),A=a("da13"),B=a("5d23"),G=a("34c3"),J=Object(b["a"])(q,R,D,!1,null,null,null),F=J.exports;g()(J,{VIcon:L["a"],VList:z["a"],VListItem:A["a"],VListItemContent:B["a"],VListItemIcon:G["a"],VListItemTitle:B["b"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card-title",{staticClass:"pb-2"},[a("span",{staticClass:"pr-3"},[t._t("total")],2),t._t("title")],2),a("v-divider")],1)},H=[],K={name:"CardTitle"},Q=K,W=a("99d9"),X=a("ce7e"),Y=Object(b["a"])(Q,U,H,!1,null,null,null),Z=Y.exports;g()(Y,{VCardTitle:W["a"],VDivider:X["a"]});var tt={name:"App",components:{"m-logo":S,"m-input":N,"m-list-items":F,"m-card-title":Z},data:function(){return{prefixes:[],suffixes:[],tlds:[]}},asyncComputed:{domains:function(){var t=this,e=[];return this.$data.prefixes.forEach((function(a){return t.$data.suffixes.forEach((function(n){return t.$data.tlds.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o="".concat(a.name).concat(n.name,".").concat(r.name),t.next=3,m(o);case 3:i=t.sent.data.free,e.push({name:o,available:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))})),e}},methods:{addItem:function(t){var e=t.type,a=t.value;e="".concat(e,"tld"===e?"s":"es"),this.$data[e].push({name:a})},removeItem:function(t){var e=t.type,a=t.index;e="".concat(e,"tld"===e?"s":"es"),this.$data[e].splice(a,1)},buyDomain:function(t){var e=t.index,a="https://checkout.hostgator.com.br/?a=add",n=this.domains[e].name;window.open(a+"&sld=".concat(n,"&tld=.com"))},loadItem:function(t){var e=t.itemName,a=t.defaultValues;this.$data[e]=(localStorage.getItem(e)?localStorage.getItem(e).split(","):a).map((function(t){return{name:t}}))},saveItem:function(t){var e=t.itemName;localStorage.setItem(e,this.$data[e].map((function(t){return t.name})))}},beforeMount:function(){var t=this;this.loadItem({itemName:"tlds",defaultValues:["io","com"]}),this.loadItem({itemName:"prefixes",defaultValues:["git","name"]}),this.loadItem({itemName:"suffixes",defaultValues:["hub","gator"]}),window.addEventListener("beforeunload",(function(){t.saveItem({itemName:"tlds"}),t.saveItem({itemName:"prefixes"}),t.saveItem({itemName:"suffixes"})}))}},et=tt,at=a("7496"),nt=a("b0af"),rt=a("62ad"),ot=a("a523"),it=a("0fd9"),st=Object(b["a"])(et,o,i,!1,null,null,null),lt=st.exports;g()(st,{VApp:at["a"],VCard:nt["a"],VCol:rt["a"],VContainer:ot["a"],VRow:it["a"]});var ct=a("f309"),ut=a("fcf4");n["a"].use(ct["a"]);var mt=new ct["a"]({icons:{iconfont:"fa"},theme:{dark:"dark"===localStorage.getItem("theme"),themes:{light:{primary:ut["a"].lightBlue,secondary:ut["a"].green.lighten1,ternary:ut["a"].red,quaternary:ut["a"].grey.lighten3},dark:{primary:ut["a"].blue.darken2,secondary:ut["a"].green.darken2,ternary:ut["a"].red.darken1,quaternary:ut["a"].grey.darken3}}}});a("7f10");n["a"].use(r["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:mt,render:function(t){return t(lt)}}).$mount("#app")},af41:function(t,e,a){"use strict";var n=a("d636"),r=a.n(n);r.a},d636:function(t,e,a){}});
//# sourceMappingURL=app.fedee246.js.map