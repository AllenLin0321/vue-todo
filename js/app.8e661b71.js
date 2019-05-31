(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-todo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("bb71");a("da64");n["a"].use(i["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",{staticClass:"mx-4 mb-4"},[a("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("Awesome! You added a new project.")]),a("v-btn",{attrs:{flat:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-toolbar",{staticClass:"text-uppercase grey--text",attrs:{flat:"",app:""}},[a("v-toolbar-side-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[a("span",{staticClass:"font-weight-light"},[t._v("Todo")]),a("span",[t._v("Allen")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{flat:"",color:"grey"}},n),[a("v-icon",{attrs:{left:""}},[t._v("expand_more")]),a("span",[t._v("Menu")])],1)]}}])},[a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.text,attrs:{to:e.route}},[a("v-list-tile-title",[t._v(t._s(e.text))])],1)}),1)],1),a("v-menu",[a("v-btn",t._g({attrs:{flat:"",color:"grey"}},t.on),[a("v-icon",{attrs:{left:""}},[t._v("expand_more")]),a("span",[t._v("Menu")])],1)],1),a("v-btn",{attrs:{flat:"",color:"grey"}},[a("span",[t._v("Sing Out")]),a("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1)],1),a("v-navigation-drawer",{staticClass:"deep-purple lighten-2",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"avatar-1.jpg"}})]),a("p",{staticClass:"white--text subheading mt-1"},[t._v("Allen Lin")])],1),a("v-flex",{staticClass:"mt-4 mb-3"},[a("Popup",{on:{projectAdded:function(e){t.snackbar=!0}}})],1)],1),a("v-list",t._l(t.links,function(e,n){return a("v-list-tile",{key:n,attrs:{to:e.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"success",attrs:{flat:""}},n),[t._v("Add new project")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[t._v("Add a new project")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"folder",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{label:"Infomation","prepend-icon":"edit",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-menu",{attrs:{"full-width":"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Due day",value:t.computedDateFormattedDatefns,"prepend-icon":"date_range"}},n))]}}])},[a("v-date-picker",{model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),a("v-btn",{staticClass:"success mt-3 mx-0",attrs:{flat:"",loading:t.loading},on:{click:t.submit}},[t._v("Add project")])],1)],1)],1)],1)},u=[],d=a("70f2"),p=a.n(d),m=a("59ca"),v=a.n(m),f=(a("e71f"),{apiKey:"AIzaSyCyrf1Kq6VV3XNbhdR-GmSMAJzFsm13GL8",authDomain:"vue-todo-5d833.firebaseapp.com",databaseURL:"https://vue-todo-5d833.firebaseio.com",projectId:"vue-todo-5d833",storageBucket:"vue-todo-5d833.appspot.com",messagingSenderId:"887371286810",appId:"1:887371286810:web:bb1f50b318cabf8b"});v.a.initializeApp(f);var g=v.a.firestore();g.settings({timestampsInSnapshots:!0});var b=g,h={data:function(){return{dialog:!1,title:"",content:"",due:"",inputRules:[function(t){return t.length>=3||"Minimun length is 3 characters"}],loading:!1}},computed:{computedDateFormattedDatefns:function(){return this.due?p()(this.due,"Do MMMM YYYY"):""}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var e={title:this.title,content:this.content,due:p()(this.due,"Do MMM YYYY"),person:"Allen Lin",status:"ongoing"};b.collection("projects").add(e).then(function(e){t.dialog=!1,t.loading=!1,t.$emit("projectAdded")})}else alert("輸入資料錯誤")}}},x=h,_=a("2877"),y=a("6544"),C=a.n(y),V=a("8336"),j=a("b0af"),w=a("99d9"),k=a("12b2"),S=a("2e4b"),q=a("169a"),T=a("4bd4"),L=a("e449"),A=a("2677"),D=a("a844"),O=Object(_["a"])(x,c,u,!1,null,null,null),M=O.exports;C()(O,{VBtn:V["a"],VCard:j["a"],VCardText:w["b"],VCardTitle:k["a"],VDatePicker:S["a"],VDialog:q["a"],VForm:T["a"],VMenu:L["a"],VTextField:A["a"],VTextarea:D["a"]});var P={components:{Popup:M},data:function(){return{drawer:!0,links:[{icon:"dashboard",text:"Dashboard",route:"/"},{icon:"folder",text:"My Projects",route:"/projects"},{icon:"person",text:"Team",route:"/team"}],snackbar:!1}}},B=P,E=a("8212"),I=a("0e8f"),R=a("132d"),Y=a("a722"),$=a("8860"),F=a("ba95"),J=a("40fe"),N=a("5d23"),G=a("f774"),z=a("2db4"),K=a("9910"),W=a("71d9"),U=a("706c"),X=a("2a7f"),H=Object(_["a"])(B,r,l,!1,null,null,null),Q=H.exports;C()(H,{VAvatar:E["a"],VBtn:V["a"],VFlex:I["a"],VIcon:R["a"],VLayout:Y["a"],VList:$["a"],VListTile:F["a"],VListTileAction:J["a"],VListTileContent:N["a"],VListTileTitle:N["b"],VMenu:L["a"],VNavigationDrawer:G["a"],VSnackbar:z["a"],VSpacer:K["a"],VToolbar:W["a"],VToolbarSideIcon:U["a"],VToolbarTitle:X["a"]});var Z={name:"App",components:{Navbar:Q}},tt=Z,et=a("7496"),at=a("549c"),nt=Object(_["a"])(tt,s,o,!1,null,null,null),it=nt.exports;C()(nt,{VApp:et["a"],VContent:at["a"]});var st=a("8c4f"),ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3"},[a("v-tooltip",{attrs:{top:""}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}},slot:"activator"},[a("v-icon",{attrs:{left:"",small:""}},[t._v("folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By Project Name")])],1),a("span",[t._v("Sort projects by project name")])],1),a("v-tooltip",{attrs:{top:""}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(e){return t.sortBy("person")}},slot:"activator"},[a("v-icon",{attrs:{left:"",small:""}},[t._v("person")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By person")])],1),a("span",[t._v("Sort projects by person")])],1)],1),t._l(t.projects,function(e){return a("v-card",{key:e.title,attrs:{flat:""}},[a("v-layout",{class:e.status+" pa-3 project",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Project Title")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Person")]),a("div",[t._v(t._s(e.person))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Due by")]),a("div",[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"right"},[a("v-chip",{class:e.status+" white--text caption my-2",attrs:{small:""}},[t._v(t._s(e.status))])],1)])],1),a("v-divider")],1)})],2)],1)},rt=[],lt=a("cebc"),ct=(a("ac6a"),a("55dd"),{data:function(){return{projects:[{title:"Design a new website",person:"The Net Ninja",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Roll up the homepage",person:"Chun Li",due:"10th Jan 2019",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design video thumbnails",person:"Ryu",due:"20th Dec 2018",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Create a community forum",person:"Gouken",due:"20th Oct 2018",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}]}},methods:{sortBy:function(t){this.projects.sort(function(e,a){return e[t]<a[t]?-1:1})}},created:function(){var t=this;b.collection("projects").onSnapshot(function(e){var a=e.docChanges();a.forEach(function(e){"added"===e.type&&t.projects.push(Object(lt["a"])({},e.doc.data(),{id:e.doc.id}))})})}}),ut=ct,dt=(a("a0af"),a("cc20")),pt=a("a523"),mt=a("ce7e6"),vt=a("3a2f"),ft=Object(_["a"])(ut,ot,rt,!1,null,"5cb0f3d4",null),gt=ft.exports;C()(ft,{VBtn:V["a"],VCard:j["a"],VChip:dt["a"],VContainer:pt["a"],VDivider:mt["a"],VFlex:I["a"],VIcon:R["a"],VLayout:Y["a"],VTooltip:vt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Projects")]),a("v-container",{staticClass:"my-5"},[a("v-expansion-panel",t._l(t.myProjects,function(e){return a("v-expansion-panel-content",{key:e.title,scopedSlots:t._u([{key:"header",fn:function(){return[a("div",[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[a("v-card",[a("v-card-text",{staticClass:"px-4 grey--text"},[a("div",{staticClass:"font-weight-bold"},[t._v("due by "+t._s(e.due))]),a("div",[t._v(t._s(e.content))])])],1)],1)}),1)],1)],1)},ht=[],xt={data:function(){return{projects:[{title:"Design a new website",person:"Allen",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Roll up the homepage",person:"Chun Li",due:"10th Jan 2019",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design video thumbnails",person:"Allen",due:"20th Dec 2018",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Create a community forum",person:"Gouken",due:"20th Oct 2018",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}]}},computed:{myProjects:function(){return this.projects.filter(function(t){return"Allen"===t.person})}},created:function(){var t=this;b.collection("projects").onSnapshot(function(e){var a=e.docChanges();a.forEach(function(e){"added"===e.type&&t.projects.push(Object(lt["a"])({},e.doc.data(),{id:e.doc.id}))})})}},_t=xt,yt=a("cd55"),Ct=a("49e2"),Vt=Object(_["a"])(_t,bt,ht,!1,null,null,null),jt=Vt.exports;C()(Vt,{VCard:j["a"],VCardText:w["b"],VContainer:pt["a"],VExpansionPanel:yt["a"],VExpansionPanelContent:Ct["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Team")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{attrs:{wrap:""}},t._l(t.team,function(e){return a("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"text-sm-center ma-3",attrs:{flat:""}},[a("v-responsive",{staticClass:"pt-4"},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:""+e.avatar}})])],1),a("v-card-text",[a("div",{staticClass:"subheading"},[t._v(t._s(e.name))]),a("div",{staticClass:"grey--text"},[t._v(t._s(e.role))])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"grey"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("message")]),a("span",[t._v("Message")])],1)],1)],1)],1)}),1)],1)],1)},kt=[],St={data:function(){return{team:[{name:"Allen",role:"Web developer",avatar:"./avatar-1.jpg"},{name:"Ryu",role:"Graphic designer",avatar:"./avatar-2.png"},{name:"Chun Li",role:"Web developer",avatar:"./avatar-3.png"},{name:"Gouken",role:"Social media maverick",avatar:"./avatar-4.png"},{name:"Yoshi",role:"Sales guru",avatar:"./avatar-5.png"}]}}},qt=St,Tt=a("6b53"),Lt=Object(_["a"])(qt,wt,kt,!1,null,null,null),At=Lt.exports;C()(Lt,{VAvatar:E["a"],VBtn:V["a"],VCard:j["a"],VCardActions:w["a"],VCardText:w["b"],VContainer:pt["a"],VFlex:I["a"],VIcon:R["a"],VLayout:Y["a"],VResponsive:Tt["a"]}),n["a"].use(st["a"]);var Dt=new st["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"dashboard",component:gt},{path:"/team",name:"team",component:At},{path:"/projects",name:"projects",component:jt}]}),Ot=a("2f62");n["a"].use(Ot["a"]);var Mt=new Ot["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:Dt,store:Mt,render:function(t){return t(it)}}).$mount("#app")},a0af:function(t,e,a){"use strict";var n=a("cd97"),i=a.n(n);i.a},cd97:function(t,e,a){}});
//# sourceMappingURL=app.8e661b71.js.map