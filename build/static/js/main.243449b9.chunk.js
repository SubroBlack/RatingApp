(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{121:function(e,t,a){e.exports=a(186)},130:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=a(8),u=a(28),l=(a(130),a(12)),s=a(10),m=a(4),d=a.n(m),p=a(7),f=a(22),b=a.n(f),v=function(){var e=window.localStorage.getItem("loggedRatingAppAdmin"),t=JSON.parse(e);if(t)return t;var a=window.localStorage.getItem("loggedRatingAppUser"),n=JSON.parse(a);return n||null},g=v,E=function(){var e=function(){var e=v();return e?"bearer ".concat(e.token):null}();return null===e?null:{headers:{auth:e}}},h="/api/items",O={getAll:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(),e.next=3,b.a.get(h,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E(),e.next=3,b.a.get("".concat(h,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=g(),console.log("New Item to be sent: ",t),"admin"===a.role){e.next=5;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only Admin can Add Items");case 5:return n=E(),e.next=8,b.a.post(h,t,n);case 8:return r=e.sent,console.log("New Item Added: ",r.data),e.abrupt("return",r.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editItem:function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(n=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only Admin can Add Items");case 4:return r=E(),e.next=7,b.a.put("".concat(h,"/").concat(t),a,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),rateItem:function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("user"===(n=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only User can Rate Items");case 4:return r=E(),e.next=7,b.a.put("".concat(h,"/rate/").concat(t),a,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),removeItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(a=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only Admin can Delete Items");case 4:return n=E(),e.next=7,b.a.delete("".concat(h,"/").concat(t),n);case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=0,j="",y=function(e){return{type:"NOTIFY",data:e}},x=function(e,t){return function(){var a=Object(p.a)(d.a.mark((function a(n){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n(y(e)),(w+=1)>1&&clearTimeout(j),j=setTimeout((function(){n((w=0,{type:"CLEAR",data:""}))}),1e3*t);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":case"CLEAR":return t.data;default:return e}},k=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:a=e.sent,t({type:"ITEMS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.addItem(e);case 2:n=t.sent,a({type:"NEW",data:n}),a(x({data:"".concat(n.name," added to collection"),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e,t){return function(){var a=Object(p.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.editItem(e,t);case 2:r=a.sent,n({type:"EDITED",data:r}),n(x({data:"".concat(r.name," updated in collection"),category:"success"},5));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.removeItem(e.id);case 2:a({type:"DELETE",data:e}),a(x({data:"".concat(e.name," removed from collection"),category:"success"},5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS":case"GET_ITEM":return t.data;case"NEW":return e.concat(t.data);case"EDITED":var a=e.filter((function(e){return e.id!==t.data.id}));return a.concat(t.data);case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},I=a(98),T=a(220),R=a(3),U=a(223),z=a(225),L=a(243),q=a(226),B=a(227),W=a(228),P=a(229),G=a(242),F=a(106),M=a.n(F),_=a(103),J=a.n(_),Y=a(105),V=a.n(Y),H=a(60),K=a.n(H),Q=Object(T.a)((function(e){return{root:{maxWidth:"90vmin",margin:"auto",marginBottom:"4%"},imgContainer:{display:"flex",backgroundColor:"#282c34"},media:{height:"50vmin",margin:"auto"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"#282c34"},fixedRate:{display:"block",justifyContent:"center",textAlign:"center",borderStyle:"solid",borderWidth:"3px",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"}}})),X=function(e){var t=e.item,a=e.clear,n=Q(),c=r.a.useState(!1),i=Object(s.a)(c,2),u=i[0],m=i[1],f=Object(o.b)(),b=Object(o.c)((function(e){return e.logged})),v=Object(l.f)(),g=function(){v.push("/edit/".concat(t.id))},E=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(A(t)),a();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){m(!u)};if(!t)return null;if(b&&"admin"===b.role&&t.review){var O=0;Array.from(t.review,(function(e){return O+=e.rate}));var w=O/t.review.length;t.rate=w}var j=new Date(Date.parse(t.posted)).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});console.log("Item: ",t);return r.a.createElement("div",null,r.a.createElement(U.a,{className:n.root,raised:!0},r.a.createElement(z.a,{avatar:r.a.createElement(L.a,{"aria-label":"recipe",className:n.avatar},t.name[0]),action:r.a.createElement(q.a,{"aria-label":"close",onClick:function(){a()}},r.a.createElement(J.a,null)),title:t.name,subheader:j}),r.a.createElement(B.a,null,t.category),r.a.createElement("div",{className:n.imgContainer},r.a.createElement("img",{className:n.media,src:"/api/items/image/"+t.filename})),r.a.createElement(B.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.fixedRate},"Average Rating",r.a.createElement("br",null),r.a.createElement(G.a,{name:"size-large",value:t.rate,precision:.25,size:"large",disabled:!0})),t.description)),r.a.createElement(W.a,{disableSpacing:!0},r.a.createElement(q.a,{color:"inherit",onClick:g,"aria-label":"Edit"},r.a.createElement(V.a,null)),r.a.createElement(q.a,{color:"secondary",onClick:E,"aria-label":"Delete"},r.a.createElement(K.a,null)),r.a.createElement(q.a,{className:Object(R.a)(n.expand,Object(I.a)({},n.expandOpen,u)),color:"inherit",onClick:h,"aria-expanded":u,"aria-label":"show more"},r.a.createElement(M.a,null))),r.a.createElement(P.a,{in:u,timeout:"auto",unmountOnExit:!0},r.a.createElement(B.a,null,t.review?r.a.createElement(r.a.Fragment,null,t.review.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(G.a,{name:"size-medium",value:e.rate,precision:.5,size:"medium",disabled:!0}),r.a.createElement("b",null,e.comment?e.comment:null))}))):null))))},Z=a(244),$=a(230),ee=a(29),te=a(231),ae=a(232),ne=a(107),re=a.n(ne),ce=a(108),ie={.5:"Completely Useless",.75:"Useless",1:"Almost Useless",1.25:"Disappointing",1.5:"Poor",1.75:"Very Bad",2:"Bad",2.25:"Not So Bad",2.5:"Barely Fine",2.75:"Fine",3:"Good",3.25:"Very Good",3.5:"Cool",3.75:"Very Cool",4:"Super",4.25:"Great",4.5:"Awesome",4.75:"Excellent",5:"Amazing"},oe=Object(T.a)({root:{display:"flex",width:"90vw",margin:"auto",justifyContent:"center"},fixedRate:{display:"block",justifyContent:"center",textAlign:"center"}}),ue=function(e){var t=e.item,a=r.a.useState(0),n=Object(s.a)(a,2),c=n[0],i=n[1],u=r.a.useState(-1),l=Object(s.a)(u,2),m=(l[0],l[1]),f=oe(),b=Object(o.b)(),v=Object(o.c)((function(e){return e.logged})),g=function(e){var a,n,r={};r.rate=e,r.comment="",b((a=t.id,n=r,function(){var e=Object(p.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.rateItem(a,n);case 2:r=e.sent,t({type:"EDITED",data:r}),t(x({data:"Thank You for your feedback",category:"success"},3.5));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),i(0)};if(v&&"admin"===v.role&&t.review){var E=0;Array.from(t.review,(function(e){return E+=e.rate}));var h=E/t.review.length;t.rate=h}return console.log("The Average Rating of the Item: ",t.rate),r.a.createElement("div",{className:f.root},v&&"admin"===v.role?r.a.createElement("div",{className:f.fixedRate},r.a.createElement(G.a,{name:"size-large",value:t.rate,precision:.25,size:"large",disabled:!0}),r.a.createElement("br",null),r.a.createElement("div",null,ie[t.rate])):r.a.createElement(G.a,{name:"size-large",value:c,precision:.5,size:"large",onChange:function(e,t){i(t),g(t)},onChangeActive:function(e,t){m(t)}}))},le=Object(ce.autoPlay)(re.a),se=Object(T.a)((function(e){return{root:{width:"100%",flexGrow:1},header:{textAlign:"center"},imgContainer:{width:"100%",paddingTop:"0.5vmin"},img:{display:"flex",margin:"auto",height:"70vh",width:"auto",maxWidth:"90vw",overflow:"hidden"}}})),me=function(e){var t=e.items,a=e.open,c=se(),i=Object(ee.a)(),o=Object(n.useState)(0),u=Object(s.a)(o,2),l=u[0],m=u[1],d=t.length;return r.a.createElement("div",{className:c.root},r.a.createElement(le,{axis:"rtl"===i.direction?"x-reverse":"x",index:l,onChangeIndex:function(e){m(e)},enableMouseEvents:!0},t.map((function(e,n){return r.a.createElement("div",{className:c.imgContainer,key:n,onClick:function(){return a(t[l])}},Math.abs(l-n)<=2?r.a.createElement("img",{className:c.img,src:"/api/items/image/"+e.filename,alt:e.name}):null)}))),r.a.createElement("div",{className:c.header},r.a.createElement("div",{onClick:function(){return a(t[l])}},t[l].name),r.a.createElement(ue,{item:t[l]})),r.a.createElement(Z.a,{steps:d,position:"static",variant:"dots",activeStep:l,nextButton:r.a.createElement($.a,{size:"small",onClick:function(){m((function(e){return e+1}))},disabled:l===d-1},"Next","rtl"===i.direction?r.a.createElement(te.a,null):r.a.createElement(ae.a,null)),backButton:r.a.createElement($.a,{size:"small",onClick:function(){m((function(e){return e-1}))},disabled:0===l},"rtl"===i.direction?r.a.createElement(ae.a,null):r.a.createElement(te.a,null),"Back")}))},de=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),u=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){i(k())}),[u,i]);var l=Object(o.c)((function(e){return e.items}));console.log("Items: ",l);var m=function(e){"admin"===u.role?c(e):console.log("Not Authorized")};return r.a.createElement("div",null,l.length<1?null:a?r.a.createElement(X,{item:a,clear:c}):r.a.createElement(me,{items:l,open:m}))},pe=(a(185),{login:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E(),e.next=3,b.a.post("/api/login/admin/",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),fe=function(e){return{type:"SET_LOGGED",user:e}},be=function(e,t){return function(){var a=Object(p.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,pe.login({email:e,password:t});case 3:return r=a.sent,window.localStorage.setItem("loggedRatingAppUser",JSON.stringify(r)),a.next=7,n(fe(r));case 7:return a.next=9,n(x({data:"Welcome",category:"success"},5));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),window.localStorage.removeItem("loggedRatingAppUser"),e.next=4,g();case 4:return a=e.sent,e.next=7,t(fe(a));case 7:return e.next=9,t(x({data:"See Ya!",category:"success"},5));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pe.adminLogin({adminPin:e});case 3:return n=t.sent,window.localStorage.setItem("loggedRatingAppAdmin",JSON.stringify(n)),t.next=7,a(x({data:"Admin mode",category:"success"},5));case 7:return t.next=9,a(fe(n));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},Ee=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),e.next=3,g();case 3:return a=e.sent,e.next=6,t(x({data:"User mode",category:"success"},5));case 6:return e.next=8,t(fe(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED":case"CLEAR_LOGGED":return t.user;default:return e}},Oe=a(240),we=Object(T.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),je=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],b=we(),v=Object(o.b)(),g=Object(l.f)(),E=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(be(a,m));case 3:c(""),f(""),g.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:b.root},r.a.createElement("h3",{className:b.header},"Login"),r.a.createElement("form",{onSubmit:E,className:b.form},r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement($.a,{type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement($.a,{onClick:function(e){e.preventDefault(),g.push("/")}},"Cancel")))},ye=a(233),xe=Object(T.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),Se=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),g=v[0],E=v[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),w=O[0],j=O[1],y=Object(n.useState)({}),x=Object(s.a)(y,2),S=x[0],k=x[1],N=xe(),A=Object(o.b)(),D=Object(o.c)((function(e){return e.logged})),I=Object(l.f)();if(!D)return r.a.createElement("h5",null,"Sign In");if("admin"!==D.role)return r.a.createElement("h5",null,"Sign In to Admin mode");var T=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("name",a),n.append("category",m),n.append("description",g),n.append("file",S),e.next=8,A(C(n));case 8:c(""),f(""),E(""),k({}),j(""),I.push("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:N.root},r.a.createElement("h3",{className:N.header},"Add New Service"),r.a.createElement("form",{onSubmit:T,className:N.form},r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{id:"outlined-multiline-flexible",name:"description",label:"Description",value:g,onChange:function(e){var t=e.target;return E(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(ye.a,{id:"raised-button-file",type:"file",name:"image",color:"primary",onChange:function(e){j(URL.createObjectURL(e.target.files[0])),k(e.target.files[0])}}),r.a.createElement("br",null),w.trim()?r.a.createElement("img",{src:w.trim()?w:null,alt:"upload",className:N.image}):null,r.a.createElement("br",null),r.a.createElement($.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement($.a,{onClick:function(e){e.preventDefault(),I.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},ke={newUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g()){e.next=4;break}throw console.log("WOOPsss, it got caught: ",t),new Error("Already Signed In");case 4:return e.next=6,b.a.post("/api/user",t);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(),e.next=3,b.a.get("/api/user",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),editUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E(),e.next=3,b.a.post("".concat("/api/user","/edit"),t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(t=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught",t.role),new Error("UnAuthorized Action");case 4:return a=E(),e.next=7,b.a.delete("/api/user",a);case 7:return n=e.sent,console.log("User Deleted",n.data),e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Ce=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.getUser();case 2:a=e.sent,t({type:"SET_USER",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke.newUser(e);case 2:n=t.sent,a({type:"SET_USER",data:n}),a(x({data:"Welcome ".concat(n.name),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ae=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke.editUser(e);case 2:n=t.sent,a({type:"SET_USER",data:n}),a(x({data:"".concat(n.name," updated"),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"DELETE":return null;default:return e}},Ie=Object(T.a)((function(e){return{root:{maxWidth:"90vmin",margin:"auto",marginBottom:"2%",padding:"2%",display:"flex"},img:{height:"25vmin",marginRight:"auto"},content:{width:"40%",marginLeft:"auto"},info:{display:"flex"}}})),Te=function(e){var t=e.item,a=Ie(),n=r.a.useState(!1),c=Object(s.a)(n,2),i=(c[0],c[1],Object(o.b)(),Object(o.c)((function(e){return e.logged})));Object(l.f)();if(!t)return null;if(i&&"admin"===i.role&&t.review){var u=0;Array.from(t.review,(function(e){return u+=e.rate}));var m=u/t.review.length;t.rate=m}var d=new Date(Date.parse(t.posted)).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});console.log("Item: ",t);return r.a.createElement("div",null,r.a.createElement(U.a,{className:a.root,raised:!0,key:t.id},r.a.createElement("span",{className:a.media},r.a.createElement("img",{className:a.img,src:"/api/items/image/"+t.filename})),r.a.createElement("span",{className:a.content},r.a.createElement(G.a,{name:"size-medium",value:t.rate,precision:.25,size:"medium",disabled:!0,className:a.info}),r.a.createElement("span",{className:a.info},t.name,r.a.createElement("br",null),d,r.a.createElement("br",null),"Category: ",t.category,r.a.createElement("br",null)))))},Re=a(235),Ue=a(110),ze=a.n(Ue),Le=a(109),qe=a.n(Le),Be=Object(T.a)((function(e){return{root:{maxWidth:"95vmin",margin:"auto"},buttons:{marginLeft:"auto"}}})),We=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.logged})),a=Be();Object(n.useEffect)((function(){e(Ce())}),[e,t]),Object(n.useEffect)((function(){e(k())}),[t,e]);var c=Object(l.f)(),i=Object(o.c)((function(e){return e.user})),u=Object(o.c)((function(e){return e.items}));if(console.log("Dashboard user: ",i),!i)return null;return r.a.createElement("div",{className:a.root},r.a.createElement(Re.a,null,r.a.createElement(W.a,{disableSpacing:!0},r.a.createElement("h3",null,i.name,"'s DashBoard"),r.a.createElement("span",{className:a.buttons},r.a.createElement(q.a,{color:"inherit",onClick:function(e){e.preventDefault(),c.push("/addItem")},"aria-label":"Add an Item"},r.a.createElement(qe.a,null)),r.a.createElement(q.a,{color:"inherit",onClick:function(e){e.preventDefault(),c.push("/editUser")},"aria-label":"Edit"},r.a.createElement(ze.a,null)),r.a.createElement(q.a,{color:"secondary",onClick:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke.deleteUser();case 2:a({type:"DELETE",data:e}),a(x({data:"CIAO ".concat(e.name),category:"success"},3.5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i)),e(ve()),c.push("/")},"aria-label":"Delete"},r.a.createElement(K.a,null))))),u?u.map((function(e,t){return r.a.createElement(Te,{item:e})})):null)},Pe=Object(T.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),Ge=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),g=v[0],E=v[1],h=Pe(),w=Object(l.f)(),j=Object(l.g)().id,y=Object(o.b)(),x=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){var e;y((e=j,function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getItem(e);case 2:n=t.sent,console.log("Single Item fetched: ",n),a({type:"GET_ITEM",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[y,j,x]);var S=Object(o.c)((function(e){return e.items}))[0];if(!x)return r.a.createElement("h5",null,"Sign In");if("admin"!==x.role)return r.a.createElement("h5",null,"Sign In to Admin mode");if(!S)return null;console.log("edit item form: ",S);var k=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:""===a?S.name:a,category:""===m?S.category:m,description:""===g?S.description:g},e.next=4,y(N(S.id,n));case 4:c(""),f(""),E(""),w.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:h.root},r.a.createElement("h3",{className:h.header},"Editing ",S.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:k,className:h.form},r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{id:"outlined-multiline-flexible",rowsMax:"4",name:"description",label:"Description",value:g,onChange:function(e){var t=e.target;return E(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement($.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement($.a,{onClick:function(e){e.preventDefault(),w.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},Fe=Object(T.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),Me=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),g=v[0],E=v[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),w=O[0],j=O[1],y=Fe(),x=Object(o.b)(),S=Object(o.c)((function(e){return e.logged})),k=Object(l.f)(),C=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x(Ne({name:a,email:m,password:g,adminPin:w}));case 3:c(""),f(""),E(""),j(""),k.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null!==S?null:r.a.createElement("div",{className:y.root},r.a.createElement("h3",{className:y.header},"Join Us!!!"),r.a.createElement("form",{onSubmit:C,className:y.form},r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:g,onChange:function(e){var t=e.target;return E(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return j(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement($.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement($.a,{onClick:function(e){e.preventDefault(),k.push("/")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},_e=Object(T.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),Je=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],f=u[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),g=v[0],E=v[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),w=O[0],j=O[1],y=_e(),x=Object(l.f)(),S=Object(o.b)(),k=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){S(Ce())}),[S,k]);var C=Object(o.c)((function(e){return e.user}));if(console.log("Editing user: ",C),!C)return null;var N=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S(Ae({name:a,email:m,password:g,adminPin:w}));case 3:c(""),f(""),E(""),j(""),x.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:y.root},r.a.createElement("h3",{className:y.header},"Editing ",C.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:N,className:y.form},r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:g,onChange:function(e){var t=e.target;return E(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(Oe.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return j(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement($.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement($.a,{onClick:function(e){e.preventDefault(),x.push("/dashboard")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},Ye=a(241),Ve=a(245),He=function(e){return r.a.createElement(Ye.a,Object.assign({elevation:6,variant:"filled"},e))},Ke=Object(T.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Qe=function(){var e=Object(o.c)((function(e){return e.notification})),t=Ke();return e?r.a.createElement("div",{className:t.root},r.a.createElement(Ve.a,{open:!0},r.a.createElement(He,{severity:e.category},e.data))):null},Xe=Object(T.a)({form:{display:"inline"},input:{color:"white"}}),Ze=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Xe(),u=Object(o.b)(),m=Object(l.f)(),f=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(ge(a)),c(""),m.push("/dashboard");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:f,className:i.form},r.a.createElement(ye.a,{name:"adminPin",type:"password",size:"small",color:"secondary",className:i.input,value:a,onChange:function(e){var t=e.target;return c(t.value)}})))},$e=Object(T.a)({root:{},button:{fontSize:"calc(7px + 0.5vmin)"}}),et=function(){var e=$e(),t=Object(l.f)(),a=Object(o.b)(),c=Object(o.c)((function(e){return e.logged})),i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],f=u[1],b=function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(Ee());case 3:return e.next=5,a(ve());case 5:f(!1),t.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){t.push("/login")},g=function(e){e.preventDefault(),a(Ee()),f(!1),t.push("/")},E=function(){f(!m)},h=function(e){e.preventDefault(),t.push("/dashboard")},O=function(){t.push("/join")};return r.a.createElement("div",null,c?"user"===c.role?r.a.createElement(r.a.Fragment,null,m?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:E},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:E},"Switch to Admin"),r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:b},"Logout"))):"admin"===c.role?r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:g},"User Mode"),r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:h},"Dashboard"),r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:b},"Logout")):void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:e.button,size:"small",onClick:v,color:"inherit"},"Login"),r.a.createElement($.a,{className:e.button,color:"inherit",size:"small",onClick:O},"Join")))},tt=a(236),at=a(237),nt=a(238),rt=a(63),ct=a(111),it=a.n(ct),ot=Object(T.a)((function(e){return{root:{position:"relative",marginBottom:"2%"},appBar:{position:"relative",flexGrow:"1",fontSize:"calc(8px + 1vmin)",height:"6.5vh",boxShadow:"none"},toolbar:{backgroundColor:"#282c34",display:"flex",color:"white",paddingLeft:"3vw",minHeight:"100%"},menuButton:{position:"relative",backgroundColor:"#282c34",color:"white",height:"6.5vh",borderRadius:"10%"},title:{flexGrow:".90"}}})),ut=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=ot(),o=Object(l.f)();return r.a.createElement(tt.a,{onClickAway:function(){c(!1)}},r.a.createElement("div",{className:i.root},a?r.a.createElement(at.a,{color:"transparent",className:i.appBar},r.a.createElement(nt.a,{disableGutters:!0,className:i.toolbar},r.a.createElement(rt.a,{variant:"inherit",className:i.title},r.a.createElement("h3",{onClick:function(){o.push("/")}},"Rating App")),r.a.createElement(et,null))):r.a.createElement(q.a,{type:"button",color:"inherit",onClick:function(){c((function(e){return!e}))},className:i.menuButton},r.a.createElement(it.a,null))))},lt=a(239),st=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g(),e.next=3,t(fe(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.logged}));return console.log("APP Logged: ",t),r.a.createElement("div",{className:"App"},r.a.createElement(ut,null),r.a.createElement(lt.a,{maxWidth:!1,className:"Content"},r.a.createElement(Qe,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/addItem/"},r.a.createElement(Se,null)),r.a.createElement(l.a,{path:"/login"},r.a.createElement(je,null)),r.a.createElement(l.a,{path:"/join"},r.a.createElement(Me,null)),r.a.createElement(l.a,{path:"/edit/:id"},r.a.createElement(Ge,null)),r.a.createElement(l.a,{path:"/dashboard"},r.a.createElement(We,null)),r.a.createElement(l.a,{path:"/editUser"},r.a.createElement(Je,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(de,null)))))},mt=a(41),dt=a(112),pt=a(113),ft=Object(mt.combineReducers)({items:D,logged:he,user:De,notification:S}),bt=Object(mt.createStore)(ft,Object(dt.composeWithDevTools)(Object(mt.applyMiddleware)(pt.a)));i.a.render(r.a.createElement(o.a,{store:bt},r.a.createElement(u.a,null,r.a.createElement(st,null))),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.243449b9.chunk.js.map