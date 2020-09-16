(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{122:function(e,t,a){e.exports=a(187)},131:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=a(8),l=a(28),u=(a(131),a(11)),s=a(4),m=a.n(s),d=a(7),p=a(22),f=a.n(p),b=function(){var e=window.localStorage.getItem("loggedRatingAppAdmin"),t=JSON.parse(e);if(t)return t;var a=window.localStorage.getItem("loggedRatingAppUser"),n=JSON.parse(a);return n||null},v=b,g=function(){var e=function(){var e=b();return e?"bearer ".concat(e.token):null}();return null===e?null:{headers:{auth:e}}},h="/api/items",E={getAll:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,f.a.get(h,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g(),e.next=3,f.a.get("".concat(h,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addItem:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=v(),console.log("New Item to be sent: ",t),"admin"===a.role){e.next=5;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only Admin can Add Items");case 5:return n=g(),e.next=8,f.a.post(h,t,n);case 8:return r=e.sent,console.log("New Item Added: ",r.data),e.abrupt("return",r.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editItem:function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(n=v()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only Admin can Add Items");case 4:return r=g(),e.next=7,f.a.put("".concat(h,"/").concat(t),a,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),rateItem:function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("user"===(n=v()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only User can Rate Items");case 4:return r=g(),e.next=7,f.a.put("".concat(h,"/rate/").concat(t),a,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),removeItem:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(a=v()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only Admin can Delete Items");case 4:return n=g(),e.next=7,f.a.delete("".concat(h,"/").concat(t),n);case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=0,O="",j=function(e){return{type:"NOTIFY",data:e}},y=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n(j(e)),(w+=1)>1&&clearTimeout(O),O=setTimeout((function(){n((w=0,{type:"CLEAR",data:""}))}),1e3*t);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":case"CLEAR":return t.data;default:return e}},S=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:a=e.sent,t({type:"ITEMS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getItem(e);case 2:n=t.sent,console.log("Single Item fetched: ",n),a({type:"GET_ITEM",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.addItem(e);case 2:n=t.sent,a({type:"NEW",data:n}),a(y({data:"".concat(n.name," added to collection"),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.editItem(e,t);case 2:r=a.sent,n({type:"EDITED",data:r}),n(y({data:"".concat(r.name," updated in collection"),category:"success"},5));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.rateItem(e,t);case 2:r=a.sent,n({type:"EDITED",data:r}),n(y({data:"Thank You for your feedback",category:"success"},3.5));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.removeItem(e.id);case 2:a({type:"DELETE",data:e}),a(y({data:"".concat(e.name," removed from collection"),category:"success"},5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS":case"GET_ITEM":return t.data;case"NEW":return e.concat(t.data);case"EDITED":var a=e.filter((function(e){return e.id!==t.data.id}));return a.concat(t.data);case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},T=a(10),R=(a(244),a(228)),U=a(221),L=a(29),z=(a(229),a(230),a(99)),B=a.n(z),q=a(100),W=a(224),P=a(241),F=a(243),G=a(59),M=a.n(G),_=a(106),J=a.n(_),Y={.5:"Completely Useless",.75:"Useless",1:"Almost Useless",1.25:"Disappointing",1.5:"Poor",1.75:"Very Bad",2:"Bad",2.25:"Not So Bad",2.5:"Barely Fine",2.75:"Fine",3:"Good",3.25:"Very Good",3.5:"Cool",3.75:"Very Cool",4:"Super",4.25:"Great",4.5:"Awesome",4.75:"Excellent",5:"Amazing"},V=Object(U.a)({root:{display:"flex",width:"90vw",margin:"auto",justifyContent:"center",marginBottom:"1%"},fixedRate:{display:"block",justifyContent:"center",textAlign:"center"},commentButton:{position:"absolute",right:"3%",bottom:"5%",zIndex:"1",margin:"1%",color:"#4d0f00"},commentSection:{position:"fixed",width:"100%",top:"15vh",margin:"auto",backgroundColor:"#b3b3b3",opacity:"0.9",color:"white"},commentForm:{width:"85%",margin:"auto",paddingBottom:"10%"}}),H=function(e){var t=e.item,a=e.setAuto,c=Object(n.useState)(0),i=Object(T.a)(c,2),l=i[0],u=i[1],s=Object(n.useState)(!1),m=Object(T.a)(s,2),d=m[0],p=m[1],f=Object(n.useState)(""),b=Object(T.a)(f,2),v=b[0],g=b[1],h=V(),E=Object(o.b)(),w=Object(o.c)((function(e){return e.logged})),O=function(){p(!1),u(0),g(""),a(!0)},j=function(){var e={};e.rate=l,e.comment=v,E(A(t.id,e)),O()};if(w&&"admin"===w.role&&t.review){var y=0;Array.from(t.review,(function(e){return y+=e.rate}));var x=y/t.review.length;t.rate=x}return r.a.createElement("div",{className:h.root},w&&"admin"===w.role?r.a.createElement("div",{className:h.fixedRate},r.a.createElement(F.a,{name:"rate",value:t.rate,precision:.25,size:"large",disabled:!0}),r.a.createElement("br",null),r.a.createElement("div",null,Y[t.rate])):r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{name:"size-large",value:l,precision:.5,size:"large",onChange:function(e,a){!function(){var e={};e.rate=l,e.comment="",E(A(t.id,e)),u(0)}()},onChangeActive:function(e,t){u(t)}}),r.a.createElement("span",null,r.a.createElement(W.a,{className:h.commentButton,onClick:function(){a(!1),p(!0)}},r.a.createElement(J.a,null))),function(){if(d)return r.a.createElement("div",{className:h.commentSection},r.a.createElement(W.a,{className:h.closeButton,onClick:O},r.a.createElement(M.a,null)),r.a.createElement("div",{className:h.commentForm},r.a.createElement("form",{className:h.fixedRate},r.a.createElement("h5",null,"Reviewing ",t.name),r.a.createElement("div",null,r.a.createElement(F.a,{name:"review-rate",value:l,precision:.5,size:"large",onChange:function(e,t){u(t)}})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(P.a,{id:"outlined-multiline-flexible",required:!0,rowsMax:"2",name:"comment",label:"Comment",value:v,onChange:function(e){var t=e.target;return g(t.value)},variant:"outlined"})),r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit",onClick:j},"Submit"))))}()))},K=Object(q.autoPlay)(B.a),Q=Object(U.a)((function(e){return{root:{width:"100%",flexGrow:1},header:{textAlign:"center"},reviewSection:{display:"flex"},imgContainer:{width:"100%",paddingTop:"0.5vmin"},img:{display:"flex",margin:"auto",height:"70vh",width:"auto",maxWidth:"90vw",overflow:"hidden"},stepper:{backgroundColor:"#282c34"},stepperLabel:{color:"white"}}})),X=function(e){var t=e.items,a=e.open,c=Q(),i=Object(L.a)(),o=Object(n.useState)(0),l=Object(T.a)(o,2),u=l[0],s=l[1],m=Object(n.useState)(!0),d=Object(T.a)(m,2),p=d[0],f=d[1];t.length;return r.a.createElement("div",{className:c.root},r.a.createElement(K,{axis:"rtl"===i.direction?"x-reverse":"x",index:u,onChangeIndex:function(e){s(e)},enableMouseEvents:!0,autoplay:p},t.map((function(e,n){return r.a.createElement("div",{className:c.imgContainer,key:n,onClick:function(){return a(t[u])}},Math.abs(u-n)<=2?r.a.createElement("img",{className:c.img,src:"/api/items/image/"+e.filename,alt:e.name}):null)}))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:c.header},t[u].name),r.a.createElement("div",{className:c.reviewSection},r.a.createElement(H,{item:t[u],setAuto:f}))))},Z=function(){var e=Object(u.f)(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){t(S())}),[a,t]);var c=Object(o.c)((function(e){return e.items}));console.log("Items: ",c);var i=function(t){"admin"===a.role?e.push("/item/".concat(t.id)):console.log("Not Authorized")};return r.a.createElement("div",null,c.length<1?null:r.a.createElement(X,{items:c,open:i}))},$=a(107),ee=a(3),te=a(231),ae=a(232),ne=a(245),re=a(233),ce=a(234),ie=a(235),oe=a(109),le=a.n(oe),ue=a(108),se=a.n(ue),me=a(63),de=a.n(me),pe=Object(U.a)((function(e){return{root:{maxWidth:"90vmin",margin:"auto",marginBottom:"4%"},imgContainer:{display:"flex",backgroundColor:"#282c34"},media:{height:"50vmin",margin:"auto"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"#282c34"},fixedRate:{display:"block",justifyContent:"center",textAlign:"center",borderStyle:"solid",borderWidth:"3px",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"},review:{display:"flex"},rates:{maxWidth:"40%"},comment:{width:"60%",marginLeft:"auto",textAlign:"center"}}})),fe=function(){var e=pe(),t=r.a.useState(!1),a=Object(T.a)(t,2),c=a[0],i=a[1],l=Object(o.b)(),s=Object(o.c)((function(e){return e.logged})),p=Object(u.f)(),f=Object(u.g)().id;Object(n.useEffect)((function(){l(k(f))}),[s,f,l]);var b=Object(o.c)((function(e){return e.items}));if(!b||b.length<1)return null;var v=b[0],g=function(){p.push("/edit/".concat(v.id))},h=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(D(v)),window.history.back();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){i(!c)};if(s&&"admin"===s.role&&v.review){var w=0;Array.from(v.review,(function(e){return w+=e.rate}));var O=w/v.review.length;v.rate=O}var j=new Date(Date.parse(v.posted)).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});console.log("Item: ",v);return r.a.createElement("div",null,r.a.createElement(te.a,{className:e.root,raised:!0},r.a.createElement(ae.a,{avatar:r.a.createElement(ne.a,{"aria-label":"recipe",className:e.avatar},v.name[0]),action:r.a.createElement(W.a,{"aria-label":"close",onClick:function(){window.history.back()}},r.a.createElement(M.a,null)),title:v.name,subheader:j}),r.a.createElement(re.a,null,v.category),r.a.createElement("div",{className:e.imgContainer},r.a.createElement("img",{className:e.media,alt:v.filename,src:"/api/items/image/"+v.filename})),r.a.createElement(re.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.fixedRate},"Average Rating",r.a.createElement("br",null),r.a.createElement(F.a,{name:"size-large",value:v.rate,precision:.25,size:"large",disabled:!0})),v.description)),r.a.createElement(ce.a,{disableSpacing:!0},r.a.createElement(W.a,{color:"inherit",onClick:g,"aria-label":"Edit"},r.a.createElement(se.a,null)),r.a.createElement(W.a,{color:"secondary",onClick:h,"aria-label":"Delete"},r.a.createElement(de.a,null)),r.a.createElement(W.a,{className:Object(ee.a)(e.expand,Object($.a)({},e.expandOpen,c)),color:"inherit",onClick:E,"aria-expanded":c,"aria-label":"show more"},r.a.createElement(le.a,null))),r.a.createElement(ie.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(re.a,null,v.review?r.a.createElement(r.a.Fragment,null,v.review.map((function(t,a){return r.a.createElement("div",{key:a,className:e.review},r.a.createElement("span",{className:e.rates},r.a.createElement(F.a,{name:"size-medium",value:t.rate,precision:.5,size:"medium",disabled:!0})),r.a.createElement("span",{className:e.comment},t.comment?t.comment:null))}))):null))))},be=(a(186),{login:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g(),e.next=3,f.a.post("/api/login/admin/",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),ve=function(e){return{type:"SET_LOGGED",user:e}},ge=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,be.login({email:e,password:t});case 3:return r=a.sent,window.localStorage.setItem("loggedRatingAppUser",JSON.stringify(r)),a.next=7,n(ve(r));case 7:return a.next=9,n(y({data:"Welcome",category:"success"},5));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},he=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),window.localStorage.removeItem("loggedRatingAppUser"),e.next=4,v();case 4:return a=e.sent,e.next=7,t(ve(a));case 7:return e.next=9,t(y({data:"See Ya!",category:"success"},5));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,be.adminLogin({adminPin:e});case 3:return n=t.sent,window.localStorage.setItem("loggedRatingAppAdmin",JSON.stringify(n)),t.next=7,a(y({data:"Admin mode",category:"success"},5));case 7:return t.next=9,a(ve(n));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},we=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),e.next=3,v();case 3:return a=e.sent,e.next=6,t(y({data:"User mode",category:"success"},5));case 6:return e.next=8,t(ve(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED":case"CLEAR_LOGGED":return t.user;default:return e}},je=Object(U.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),ye=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(T.a)(i,2),s=l[0],p=l[1],f=je(),b=Object(o.b)(),v=Object(u.f)(),g=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b(ge(a,s));case 3:c(""),p(""),v.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:f.root},r.a.createElement("h3",{className:f.header},"Login"),r.a.createElement("form",{onSubmit:g,className:f.form},r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:s,onChange:function(e){var t=e.target;return p(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement(R.a,{onClick:function(e){e.preventDefault(),v.push("/")}},"Cancel")))},xe=a(226),Se=Object(U.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),ke=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(T.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(""),b=Object(T.a)(f,2),v=b[0],g=b[1],h=Object(n.useState)(""),E=Object(T.a)(h,2),w=E[0],O=E[1],j=Object(n.useState)({}),y=Object(T.a)(j,2),x=y[0],S=y[1],k=Se(),N=Object(o.b)(),A=Object(o.c)((function(e){return e.logged})),D=Object(u.f)();if(!A)return r.a.createElement("h5",null,"Sign In");if("admin"!==A.role)return r.a.createElement("h5",null,"Sign In to Admin mode");var I=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("name",a),n.append("category",s),n.append("description",v),n.append("file",x),e.next=8,N(C(n));case 8:c(""),p(""),g(""),S({}),O(""),D.push("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:k.root},r.a.createElement("h3",{className:k.header},"Add New Service"),r.a.createElement("form",{onSubmit:I,className:k.form},r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:s,onChange:function(e){var t=e.target;return p(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{id:"outlined-multiline-flexible",name:"description",label:"Description",value:v,onChange:function(e){var t=e.target;return g(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(xe.a,{id:"raised-button-file",type:"file",name:"image",color:"primary",onChange:function(e){O(URL.createObjectURL(e.target.files[0])),S(e.target.files[0])}}),r.a.createElement("br",null),w.trim()?r.a.createElement("img",{src:w.trim()?w:null,alt:"upload",className:k.image}):null,r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(R.a,{onClick:function(e){e.preventDefault(),D.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},Ce={newUser:function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()){e.next=4;break}throw console.log("WOOPsss, it got caught: ",t),new Error("Already Signed In");case 4:return e.next=6,f.a.post("/api/user",t);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,f.a.get("/api/user",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),editUser:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g(),e.next=3,f.a.post("".concat("/api/user","/edit"),t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(t=v()).role){e.next=4;break}throw console.log("WOOPsss, it got caught",t.role),new Error("UnAuthorized Action");case 4:return a=g(),e.next=7,f.a.delete("/api/user",a);case 7:return n=e.sent,console.log("User Deleted",n.data),e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Ne=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce.getUser();case 2:a=e.sent,t({type:"SET_USER",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ae=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce.newUser(e);case 2:n=t.sent,a({type:"SET_USER",data:n}),a(y({data:"Welcome ".concat(n.name),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},De=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce.editUser(e);case 2:n=t.sent,a({type:"SET_USER",data:n}),a(y({data:"".concat(n.name," updated"),category:"success"},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"DELETE":return null;default:return e}},Te=Object(U.a)((function(e){return{root:{maxWidth:"95vmin",margin:"auto",marginBottom:"4%",padding:"1.5%",display:"flex"},media:{maxWidth:"55%",margin:"0%",padding:"0%"},img:{height:"30vmin",marginRight:"auto"},content:{width:"40%",marginLeft:"auto"},info:{display:"flex"}}})),Re=function(e){var t=e.item,a=Te(),n=Object(o.c)((function(e){return e.logged})),c=Object(u.f)();if(!t)return null;var i=function(){c.push("/item/".concat(t.id))};if(n&&"admin"===n.role&&t.review){var l=0;Array.from(t.review,(function(e){return l+=e.rate}));var s=l/t.review.length;t.rate=s}var m=new Date(Date.parse(t.posted)).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return r.a.createElement("div",null,r.a.createElement(te.a,{className:a.root,raised:!0,key:t.id,onClick:i},r.a.createElement("span",{className:a.media},r.a.createElement("img",{className:a.img,alt:t.filename,src:"/api/items/image/"+t.filename})),r.a.createElement("span",{className:a.content},r.a.createElement(F.a,{name:"size-medium",value:t.rate,precision:.25,size:"medium",disabled:!0,className:a.info}),r.a.createElement("span",{className:a.info},t.name,r.a.createElement("br",null),m,r.a.createElement("br",null),"Category: ",t.category,r.a.createElement("br",null),"Total Reviews: ",t.review?t.review.length:null))))},Ue=a(236),Le=a(111),ze=a.n(Le),Be=a(110),qe=a.n(Be),We=Object(U.a)((function(e){return{root:{maxWidth:"95vmin",margin:"auto"},buttons:{marginLeft:"auto"}}})),Pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.logged})),a=We();Object(n.useEffect)((function(){e(Ne())}),[e,t]),Object(n.useEffect)((function(){e(S())}),[t,e]);var c=Object(u.f)(),i=Object(o.c)((function(e){return e.user})),l=Object(o.c)((function(e){return e.items}));if(console.log("Dashboard user: ",i),!i)return null;return r.a.createElement("div",{className:a.root},r.a.createElement(Ue.a,null,r.a.createElement(ce.a,{disableSpacing:!0},r.a.createElement("h3",null,i.name,"'s DashBoard"),r.a.createElement("span",{className:a.buttons},r.a.createElement(W.a,{color:"inherit",onClick:function(e){e.preventDefault(),c.push("/addItem")},"aria-label":"Add an Item"},r.a.createElement(qe.a,null)),r.a.createElement(W.a,{color:"inherit",onClick:function(e){e.preventDefault(),c.push("/editUser")},"aria-label":"Edit"},r.a.createElement(ze.a,null)),r.a.createElement(W.a,{color:"secondary",onClick:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce.deleteUser();case 2:a({type:"DELETE",data:e}),a(y({data:"CIAO ".concat(e.name),category:"success"},3.5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i)),e(he()),c.push("/")},"aria-label":"Delete"},r.a.createElement(de.a,null))))),l?l.map((function(e,t){return r.a.createElement(Re,{key:t,item:e})})):null)},Fe=Object(U.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),Ge=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(T.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(""),b=Object(T.a)(f,2),v=b[0],g=b[1],h=Fe(),E=Object(u.f)(),w=Object(u.g)().id,O=Object(o.b)(),j=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){O(k(w))}),[O,w,j]);var y=Object(o.c)((function(e){return e.items}))[0];if(!j)return r.a.createElement("h5",null,"Sign In");if("admin"!==j.role)return r.a.createElement("h5",null,"Sign In to Admin mode");if(!y)return null;console.log("edit item form: ",y);var x=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:""===a?y.name:a,category:""===s?y.category:s,description:""===v?y.description:v},e.next=4,O(N(y.id,n));case 4:c(""),p(""),g(""),E.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:h.root},r.a.createElement("h3",{className:h.header},"Editing ",y.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:x,className:h.form},r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:s,onChange:function(e){var t=e.target;return p(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{id:"outlined-multiline-flexible",rowsMax:"4",name:"description",label:"Description",value:v,onChange:function(e){var t=e.target;return g(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(R.a,{onClick:function(e){e.preventDefault(),E.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},Me=Object(U.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),_e=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(T.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(""),b=Object(T.a)(f,2),v=b[0],g=b[1],h=Object(n.useState)(""),E=Object(T.a)(h,2),w=E[0],O=E[1],j=Me(),y=Object(o.b)(),x=Object(o.c)((function(e){return e.logged})),S=Object(u.f)(),k=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y(Ae({name:a,email:s,password:v,adminPin:w}));case 3:c(""),p(""),g(""),O(""),S.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null!==x?null:r.a.createElement("div",{className:j.root},r.a.createElement("h3",{className:j.header},"Join Us!!!"),r.a.createElement("form",{onSubmit:k,className:j.form},r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:s,onChange:function(e){var t=e.target;return p(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:v,onChange:function(e){var t=e.target;return g(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return O(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(R.a,{onClick:function(e){e.preventDefault(),S.push("/")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},Je=Object(U.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),Ye=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(T.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(""),b=Object(T.a)(f,2),v=b[0],g=b[1],h=Object(n.useState)(""),E=Object(T.a)(h,2),w=E[0],O=E[1],j=Je(),y=Object(u.f)(),x=Object(o.b)(),S=Object(o.c)((function(e){return e.logged}));Object(n.useEffect)((function(){x(Ne())}),[x,S]);var k=Object(o.c)((function(e){return e.user}));if(console.log("Editing user: ",k),!k)return null;var C=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x(De({name:a,email:s,password:v,adminPin:w}));case 3:c(""),p(""),g(""),O(""),y.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:j.root},r.a.createElement("h3",{className:j.header},"Editing ",k.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:C,className:j.form},r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:a,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:s,onChange:function(e){var t=e.target;return p(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:v,onChange:function(e){var t=e.target;return g(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return O(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(R.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(R.a,{onClick:function(e){e.preventDefault(),y.push("/dashboard")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},Ve=a(242),He=a(246),Ke=function(e){return r.a.createElement(Ve.a,Object.assign({elevation:6,variant:"filled"},e))},Qe=Object(U.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Xe=function(){var e=Object(o.c)((function(e){return e.notification})),t=Qe();return e?r.a.createElement("div",{className:t.root},r.a.createElement(He.a,{open:!0},r.a.createElement(Ke,{severity:e.category},e.data))):null},Ze=Object(U.a)({form:{display:"inline"},input:{color:"white"}}),$e=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],c=t[1],i=Ze(),l=Object(o.b)(),s=Object(u.f)(),p=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l(Ee(a)),c(""),s.push("/dashboard");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:p,className:i.form},r.a.createElement(xe.a,{name:"adminPin",type:"password",size:"small",color:"secondary",className:i.input,value:a,onChange:function(e){var t=e.target;return c(t.value)}})))},et=Object(U.a)({root:{},button:{fontSize:"calc(7px + 0.5vmin)"}}),tt=function(){var e=et(),t=Object(u.f)(),a=Object(o.b)(),c=Object(o.c)((function(e){return e.logged})),i=Object(n.useState)(!1),l=Object(T.a)(i,2),s=l[0],p=l[1],f=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(we());case 3:return e.next=5,a(he());case 5:p(!1),t.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){t.push("/login")},v=function(e){e.preventDefault(),a(we()),p(!1),t.push("/")},g=function(){p(!s)},h=function(e){e.preventDefault(),t.push("/dashboard")},E=function(){t.push("/join")};return r.a.createElement("div",null,c?"user"===c.role?r.a.createElement(r.a.Fragment,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:g},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:g},"Switch to Admin"),r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:f},"Logout"))):"admin"===c.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:v},"User Mode"),r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:h},"Dashboard"),r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:f},"Logout")):void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:e.button,size:"small",onClick:b,color:"inherit"},"Login"),r.a.createElement(R.a,{className:e.button,color:"inherit",size:"small",onClick:E},"Join")))},at=a(237),nt=a(238),rt=a(239),ct=a(64),it=a(112),ot=a.n(it),lt=Object(U.a)((function(e){return{root:{position:"relative",marginBottom:"2%"},appBar:{position:"relative",backgroundColor:"#282c34",flexGrow:"1",fontSize:"calc(8px + 1vmin)",height:"6.5vh",boxShadow:"none",padding:"1%"},toolbar:{display:"flex",color:"white",paddingLeft:"3vw",minHeight:"100%"},menuButton:{position:"relative",backgroundColor:"#282c34",color:"white",height:"6.5vh",borderRadius:"10%",padding:"1%"},title:{flexGrow:".90"}}})),ut=function(){var e=Object(n.useState)(!1),t=Object(T.a)(e,2),a=t[0],c=t[1],i=lt(),o=Object(u.f)();return r.a.createElement(at.a,{onClickAway:function(){c(!1)}},r.a.createElement("div",{className:i.root},a?r.a.createElement(nt.a,{color:"transparent",className:i.appBar},r.a.createElement(rt.a,{disableGutters:!0,className:i.toolbar},r.a.createElement(ct.a,{variant:"inherit",className:i.title},r.a.createElement("h3",{onClick:function(){o.push("/")}},"Rating App")),r.a.createElement(tt,null))):r.a.createElement(W.a,{type:"button",color:"inherit",onClick:function(){c((function(e){return!e}))},className:i.menuButton},r.a.createElement(ot.a,null))))},st=a(240),mt=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v(),e.next=3,t(ve(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.logged}));return console.log("APP Logged: ",t),r.a.createElement("div",{className:"App"},r.a.createElement(ut,null),r.a.createElement(st.a,{maxWidth:!1,className:"Content"},r.a.createElement(Xe,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/addItem/"},r.a.createElement(ke,null)),r.a.createElement(u.a,{path:"/login"},r.a.createElement(ye,null)),r.a.createElement(u.a,{path:"/join"},r.a.createElement(_e,null)),r.a.createElement(u.a,{path:"/edit/:id"},r.a.createElement(Ge,null)),r.a.createElement(u.a,{path:"/dashboard"},r.a.createElement(Pe,null)),r.a.createElement(u.a,{path:"/editUser"},r.a.createElement(Ye,null)),r.a.createElement(u.a,{path:"/item/:id"},r.a.createElement(fe,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(Z,null)))))},dt=a(41),pt=a(113),ft=a(114),bt=Object(dt.combineReducers)({items:I,logged:Oe,user:Ie,notification:x}),vt=Object(dt.createStore)(bt,Object(pt.composeWithDevTools)(Object(dt.applyMiddleware)(ft.a)));i.a.render(r.a.createElement(o.a,{store:vt},r.a.createElement(l.a,null,r.a.createElement(mt,null))),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.56a16ce0.chunk.js.map