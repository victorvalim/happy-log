(this["webpackJsonphappy-log"]=this["webpackJsonphappy-log"]||[]).push([[0],{33:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var i=e(0),c=e(13),a=e.n(c),r=(e(33),e(6)),o=e(7),s=e(21),d=e(22),u=e(27),l=(e(8),e(9),{userActions:{defaultAction:function(){return{type:"DEFAULT"}},inputVisibility:function(){return{type:"INPUT_VISIBILITY"}},dateOnClick:function(n){return{type:"DATE_ON_CLICK",payload:n}},emoticonSelector:function(n){return{type:"EMOTICON",payload:n}},inputSelector:function(n){return{type:"INPUT",payload:n}},resetInput:function(){return{type:"RESET_INPUT"}},addInput:function(){return{type:"ADD_INPUT"}}}}),b=e(43),j=e(2);var p,O,h=function(n){var t=n.dayClick,e=(n.funct,n.data);return Object(j.jsx)(b.a,{view:"month",onClickDay:t,tileClassName:function(n){n.activeStartDate;var t=n.date,i=(n.view,e.find((function(n){return n.date==t.toJSON()})));return void 0===i?null:i.emoticon}})},f=e(3),x=e(4),v=(x.a.div(p||(p=Object(f.a)(["\n  display: ",";\n  flex:row;\n"])),(function(n){return n.visibility?"block":"none"})),x.a.section(O||(O=Object(f.a)(["\n  padding: 4em;\n  background: papayawhip;\n"]))),e.p+"static/media/smile.e86cf067.svg"),g=e.p+"static/media/normal.62841072.svg",y=e.p+"static/media/sad.4ab823e6.svg";var m,w,I=function(n){n.visibility;var t=n.funct;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{onClick:t,alt:"smile-face",src:v}),Object(j.jsx)("img",{onClick:t,alt:"normal-face",src:g}),Object(j.jsx)("img",{onClick:t,alt:"sad-face",src:y})]})},C=x.a.div(m||(m=Object(f.a)(["\ncolor:#555153;\nopacity:0,4;\ndisplay:flex;\nflex-direction:column;\nflex-wrap: nowrap;\nalign-items:center;\nbackground: #f8d4b0;\nheight:5vh;\nmax-height:5vh;\ndisplay: ",";\n  div {\n\n    width:50vw;\n    display:flex;\n    justify-content:space-evenly;\n  }\n\n  button {\n    display:inline-block;\n  }\n"])),(function(n){return n.visibility?"flex":"none"}));x.a.section(w||(w=Object(f.a)(["\n  padding: 4em;\n  background: papayawhip;\n"])));var k=function(n){n.visibility;var t=n.funct,e=n.inpuText;return Object(j.jsx)("form",{children:Object(j.jsxs)("label",{htmlFor:"main-input",children:["Tell us",Object(j.jsx)("textarea",{value:e,onChange:t,id:"main-input"})]})})},D=e.p+"static/media/add.389259b5.svg";var T=function(n){n.visibility;var t=n.funct;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{onClick:t,type:"button",children:Object(j.jsx)("img",{src:D})})})},A=e(26);e(19);var F,N,S,E,P,_=function(n){var t=n.funct,e=n.toggleBoolean;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{color:"#080910"},children:"Happy Log"}),Object(j.jsx)(A.a,{onColor:"#FF4D2D",offColor:"#B1AAAA",checked:e,onChange:function(n){return t(n)}})]})},R=x.a.div(F||(F=Object(f.a)(["\ndisplay:flex;\ndisplay-direction:row;\nflex-wrap: wrap;\nalign-content:flex-start;\n\n"]))),U=x.a.div(N||(N=Object(f.a)(["\noutline: none !important;\ncolor:#080910;\nborder-color: #AF8C79;\nbox-shadow: 0 0 1vw #AF8C79;\ndisplay:flex;\ndisplay-direction:row;\nflex-wrap: wrap;\njustify-content:space-between;\nwidth:23vw;\nheight:20vh;\nbackground-color: #FF4D2D;\nopacity:0.4;\nmargin:10px;\ncolor:#080910;\n\n"]))),V=x.a.div(S||(S=Object(f.a)(["\n\nmargin:0;\npadding:0;\ndisplay:inline-block;\nwidth:23vw;\nheight:15vh;\n\n\n\noverflow-x:hidden;\noverflow-y:scroll;\n::-webkit-scrollbar{\n  display:none;\n  width:0px;\n  background:transparent;\n}\n\nh3{\n\n  // padding:1px;\n  // background-color:blue;\n\n}\n"]))),L=x.a.div(E||(E=Object(f.a)(["\nmargin:0;\npadding:0;\ndisplay:inline;\nheight:4vh;\nh4{\n  margin:0;\npadding:0;\nwidth:15vw;\n}\n"]))),B=x.a.div(P||(P=Object(f.a)(["\ndisplay:inline-block;\nopacity:0.5;\nimg{\n  height:4vh;\n}\n\n"])));var J,M,z,K,Y=function(n){var t=n.data;function e(n){switch(n.substring(0,3)){case"nor":return g;case"sad":return y;default:return v}}return Object(j.jsx)(R,{children:t.map((function(n){return Object(j.jsxs)(U,{children:[Object(j.jsx)(L,{children:Object(j.jsx)("h4",{children:n.date})}),Object(j.jsx)(B,{children:Object(j.jsx)("img",{src:e(n.emoticon)})}),Object(j.jsx)(V,{children:Object(j.jsxs)("h3",{children:[" ",n.text]})})]})}))})},H=x.a.div(J||(J=Object(f.a)(["\nposition:fixed;\ndisplay:flex;\nflex-direction:row;\nwidth:100vw;\nmax-height:100%;\n\n"]))),W=x.a.div(M||(M=Object(f.a)(["\nwidth:50vw;\nmax-height:100%;\n\n// position:fixed;\nz-index:1;\npadding-top:20px;\ntop:0;\n  img{\n    width:40px;\n  }\n"]))),q=x.a.div(z||(z=Object(f.a)(["\nwidth:50vw;\nmax-height:100%;\n\nz-index:1;\noverflow-x:hidden;\npadding-top:20px;\ntop:0;\n"])));x.a.section(K||(K=Object(f.a)(["\n  padding: 4em;\n  background: papayawhip;\n"])));var G=function(){var n=Object(r.c)((function(n){return n.userReducer.isInputVisible})),t=Object(r.c)((function(n){return n.userReducer.dateClicked})),e=Object(r.c)((function(n){return n.userReducer.currentData.text})),c=Object(r.c)((function(n){return n.userReducer.currentData.emoticon})),a=Object(r.c)((function(n){return n.userReducer.data})),o=Object(i.useState)(!1),s=Object(u.a)(o,2),d=s[0],b=s[1],p=Object(r.b)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(H,{children:[Object(j.jsxs)(W,{children:[Object(j.jsx)(h,{data:a,funct:function(n,t,e,i){},dayClick:function(e){var i=e.toJSON();p(l.userActions.dateOnClick(e.toJSON())),(t==i||void 0==t||t!==i&&!n)&&p(l.userActions.inputVisibility())}}),Object(j.jsxs)(C,{visibility:n,children:[Object(j.jsx)(I,{funct:function(n){var t=n.target.alt;console.log(t),p(l.userActions.emoticonSelector(t))}}),Object(j.jsx)(k,{funct:function(n){var t=n.target.value;p(l.userActions.inputSelector(t))},inpuText:e}),Object(j.jsx)(T,{funct:function(){null!==t&&""!==e&&""!==c?(p(l.userActions.addInput()),p(l.userActions.resetInput()),p(l.userActions.inputVisibility())):window.alert("Fill everything :)")}})]})]}),Object(j.jsxs)(q,{children:[Object(j.jsx)(_,{funct:b,toggleBoolean:d}),d&&Object(j.jsx)(Y,{data:a})]})]})})},Q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(t){var e=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),i(n),c(n),a(n),r(n)}))},X=e(28),Z=e(5),$={isInputVisible:!1,currentData:{emoticon:"",text:""},data:[]},nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_VISIBILITY":return Object(Z.a)(Object(Z.a)({},n),{},{isInputVisible:!n.isInputVisible});case"ADD_INPUT":return Object(Z.a)(Object(Z.a)({},n),{},{data:[].concat(Object(X.a)(n.data),[{text:n.currentData.text,emoticon:n.currentData.emoticon,date:n.dateClicked}])});case"RESET_INPUT":return Object(Z.a)(Object(Z.a)({},n),{},{currentData:{text:"",emoticon:""}});case"EMOTICON":return Object(Z.a)(Object(Z.a)({},n),{},{currentData:Object(Z.a)(Object(Z.a)({},n.currentData),{},{emoticon:t.payload})});case"INPUT":return Object(Z.a)(Object(Z.a)({},n),{},{currentData:Object(Z.a)(Object(Z.a)({},n.currentData),{},{text:t.payload})});case"DATE_ON_CLICK":return Object(Z.a)(Object(Z.a)({},n),{},{dateClicked:t.payload});default:return n}},tn=Object(o.combineReducers)({userReducer:nn}),en=Object(o.createStore)(tn,Object(d.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));a.a.render(Object(j.jsx)(r.a,{store:en,children:Object(j.jsx)(G,{})}),document.getElementById("root")),Q()},9:function(n,t,e){}},[[41,1,2]]]);
//# sourceMappingURL=main.f337f26a.chunk.js.map