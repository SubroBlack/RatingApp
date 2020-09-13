(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{105:function(e,t,n){e.exports=n(171)},114:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),u=n(9),i=n(27),l=(n(114),n(13)),s=n(10),m=n(3),d=n.n(m),p=n(7),f=n(20),b=n.n(f),v=function(){var e=window.localStorage.getItem("loggedRatingAppAdmin"),t=JSON.parse(e);if(t)return t;var n=window.localStorage.getItem("loggedRatingAppUser"),a=JSON.parse(n);return a||null},g=v,h=function(){var e=function(){var e=v();return e?"bearer ".concat(e.token):null}();return null===e?null:{headers:{auth:e}}},E="/api/items",O={getAll:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),e.next=3,b.a.get(E,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),e.next=3,b.a.get("".concat(E,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g(),console.log("New Item to be sent: ",t),"admin"===n.role){e.next=5;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only Admin can Add Items");case 5:return a=h(),e.next=8,b.a.post(E,t,a);case 8:return r=e.sent,console.log("New Item Added: ",r.data),e.abrupt("return",r.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editItem:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(a=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only Admin can Add Items");case 4:return r=h(),e.next=7,b.a.put("".concat(E,"/").concat(t),n,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),rateItem:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("user"===(a=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",a.role),new Error("Only User can Rate Items");case 4:return r=h(),e.next=7,b.a.put("".concat(E,"/rate/").concat(t),n,r);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeItem:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(n=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught: ",n.role),new Error("Only Admin can Delete Items");case 4:return a=h(),e.next=7,b.a.delete("".concat(E,"/").concat(t),a);case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=0,j="",x=function(e){return{type:"NOTIFY",data:e}},y=function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a(x(e)),(w+=1)>1&&clearTimeout(j),j=setTimeout((function(){a((w=0,{type:"CLEAR",data:""}))}),1e3*t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":case"CLEAR":return t.data;default:return e}},k=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.addItem(e);case 2:a=t.sent,n({type:"NEW",data:a}),n(y({data:"".concat(a.name," added to collection")},3));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.editItem(e,t);case 2:r=n.sent,a({type:"EDITED",data:r}),a(y({data:"".concat(r.name," updated in collection")},3));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.removeItem(e.id);case 2:n({type:"DELETE",data:e}),n(y({data:"".concat(e.name," removed from collection")},3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS":case"GET_ITEM":return t.data;case"NEW":return e.concat(t.data);case"EDITED":var n=e.filter((function(e){return e.id!==t.data.id}));return n.concat(t.data);case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},I=function(e){var t=e.item,n=e.clear,a=Object(u.b)(),c=Object(l.f)(),o=function(){c.push("/edit/".concat(t.id))},i=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(N(t)),n();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!t)return null;console.log("Item: ",t);return r.a.createElement("div",null,r.a.createElement("div",{key:t.id},r.a.createElement("h4",null,"Details"),r.a.createElement("b",null,t.name),r.a.createElement("h5",null,"Category: ",t.category),r.a.createElement("b",null,t.posted),r.a.createElement("p",null,t.description),r.a.createElement("button",{onClick:o},"Edit"),r.a.createElement("button",{onClick:i},"Delete"),r.a.createElement("button",{onClick:function(){n()}},"Cancel")))},D=n(218),T=n(206),R=n(202),U=n(31),q=n(207),P=n(208),z=n(86),L=n.n(z),W=n(87),B=n(217),G={.5:"Completely Useless",.75:"Useless",1:"Almost Useless",1.25:"Disappointing",1.5:"Poor",1.75:"Very Bad",2:"Bad",2.25:"Not So Bad",2.5:"Barely Fine",2.75:"Fine",3:"Good",3.25:"Very Good",3.5:"Cool",3.75:"Very Cool",4:"Super",4.25:"Great",4.5:"Awesome",4.75:"Excellent",5:"Amazing"},F=Object(R.a)({root:{display:"flex",width:"90vw",margin:"auto",justifyContent:"center"},fixedRate:{display:"block",justifyContent:"center",textAlign:"center"}}),_=function(e){var t=e.item,n=r.a.useState(0),a=Object(s.a)(n,2),c=a[0],o=a[1],i=r.a.useState(-1),l=Object(s.a)(i,2),m=(l[0],l[1]),f=F(),b=Object(u.b)(),v=(Object(u.c)((function(e){return e.logged})),function(e){var n,a,r={};r.rate=e,r.comment="",b((n=t.id,a=r,function(){var e=Object(p.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.rateItem(n,a);case 2:r=e.sent,t({type:"EDITED",data:r}),t(y({data:"Thank You for your feedback"},1.5));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),o(0)});if(t.review){var g=0;Array.from(t.review,(function(e){return g+=e.rate}));var h=g/t.review.length;t.rate=h}return console.log("The Average Rating of the Item: ",t.rate),r.a.createElement("div",{className:f.root},t.rate?r.a.createElement("div",{className:f.fixedRate},r.a.createElement(B.a,{name:"size-large",value:t.rate,precision:.25,size:"large",disabled:!0}),r.a.createElement("br",null),r.a.createElement("div",null,G[t.rate])):r.a.createElement(B.a,{name:"size-large",value:c,precision:.5,size:"large",onChange:function(e,t){o(t),v(t)},onChangeActive:function(e,t){m(t)}}))},J=Object(W.autoPlay)(L.a),M=Object(R.a)((function(e){return{root:{width:"100%",flexGrow:1},header:{textAlign:"center"},imgContainer:{width:"100%",paddingTop:"0.5vmin"},img:{display:"flex",margin:"auto",height:"70vh",width:"auto",maxWidth:"90vw",overflow:"hidden"}}})),Y=function(e){var t=e.items,n=e.open,c=M(),o=Object(U.a)(),u=Object(a.useState)(0),i=Object(s.a)(u,2),l=i[0],m=i[1],d=t.length;return r.a.createElement("div",{className:c.root},r.a.createElement(J,{axis:"rtl"===o.direction?"x-reverse":"x",index:l,onChangeIndex:function(e){m(e)},enableMouseEvents:!0},t.map((function(e,t){return r.a.createElement("div",{className:c.imgContainer,key:t},Math.abs(l-t)<=2?r.a.createElement("img",{className:c.img,src:"/api/items/image/"+e.filename,alt:e.name}):null)}))),r.a.createElement("div",{className:c.header},r.a.createElement("div",{onClick:function(){return n(t[l])}},t[l].name),r.a.createElement(_,{item:t[l]})),r.a.createElement(D.a,{steps:d,position:"static",variant:"dots",activeStep:l,nextButton:r.a.createElement(T.a,{size:"small",onClick:function(){m((function(e){return e+1}))},disabled:l===d-1},"Next","rtl"===o.direction?r.a.createElement(q.a,null):r.a.createElement(P.a,null)),backButton:r.a.createElement(T.a,{size:"small",onClick:function(){m((function(e){return e-1}))},disabled:0===l},"rtl"===o.direction?r.a.createElement(P.a,null):r.a.createElement(q.a,null),"Back")}))},V=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(u.b)(),i=Object(u.c)((function(e){return e.logged}));Object(a.useEffect)((function(){o(function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:n=e.sent,t({type:"ITEMS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[i,o]);var l=Object(u.c)((function(e){return e.items}));console.log("Items: ",l);var m=function(e){"admin"===i.role?c(e):console.log("Not Authorized")};return r.a.createElement("div",null,l.length<1?null:n?r.a.createElement(I,{item:n,clear:c}):r.a.createElement(Y,{items:l,open:m}))},H=(n(169),{login:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),e.next=3,b.a.post("/api/login/admin/",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),K=function(e){return{type:"SET_LOGGED",user:e}},Q=function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H.login({email:e,password:t});case 3:return r=n.sent,window.localStorage.setItem("loggedRatingAppUser",JSON.stringify(r)),n.next=7,a(K(r));case 7:return n.next=9,a(y({data:"Welcome"},5));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},X=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),window.localStorage.removeItem("loggedRatingAppUser"),e.next=4,g();case 4:return n=e.sent,e.next=7,t(K(n));case 7:return e.next=9,t(y({data:"See Ya!"},5));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.adminLogin({adminPin:e});case 3:return a=t.sent,window.localStorage.setItem("loggedRatingAppAdmin",JSON.stringify(a)),t.next=7,n(y({data:"Admin mode"},5));case 7:return t.next=9,n(K(a));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},$=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("loggedRatingAppAdmin"),e.next=3,g();case 3:return n=e.sent,e.next=6,t(y({data:"User mode"},5));case 6:return e.next=8,t(K(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED":case"CLEAR_LOGGED":return t.user;default:return e}},te=n(216),ne=Object(R.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),ae=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],f=i[1],b=ne(),v=Object(u.b)(),g=Object(l.f)(),h=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(Q(n,m));case 3:c(""),f(""),g.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:b.root},r.a.createElement("h3",{className:b.header},"Login"),r.a.createElement("form",{onSubmit:h,className:b.form},r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:n,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(T.a,{type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),g.push("/")}},"Cancel")))},re=n(209),ce=Object(R.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),oe=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],f=i[1],b=Object(a.useState)(""),v=Object(s.a)(b,2),g=v[0],h=v[1],E=Object(a.useState)(""),O=Object(s.a)(E,2),w=O[0],j=O[1],x=Object(a.useState)({}),y=Object(s.a)(x,2),S=y[0],C=y[1],N=ce(),A=Object(u.b)(),I=Object(u.c)((function(e){return e.logged})),D=Object(l.f)();if(!I)return r.a.createElement("h5",null,"Sign In");if("admin"!==I.role)return r.a.createElement("h5",null,"Sign In to Admin mode");var R=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("name",n),a.append("category",m),a.append("description",g),a.append("file",S),e.next=8,A(k(a));case 8:c(""),f(""),h(""),C({}),j(""),D.push("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:N.root},r.a.createElement("h3",{className:N.header},"Add New Service"),r.a.createElement("form",{onSubmit:R,className:N.form},r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:n,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-multiline-flexible",name:"description",label:"Description",value:g,onChange:function(e){var t=e.target;return h(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(re.a,{id:"raised-button-file",type:"file",name:"image",color:"primary",onChange:function(e){j(URL.createObjectURL(e.target.files[0])),C(e.target.files[0])}}),r.a.createElement("br",null),w.trim()?r.a.createElement("img",{src:w.trim()?w:null,alt:"upload",className:N.image}):null,r.a.createElement("br",null),r.a.createElement(T.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),D.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},ue={newUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g()){e.next=4;break}throw console.log("WOOPsss, it got caught: ",t),new Error("Already Signed In");case 4:return e.next=6,b.a.post("/api/user",t);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),e.next=3,b.a.get("/api/user",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),editUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),e.next=3,b.a.post("".concat("/api/user","/edit"),t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"===(t=g()).role){e.next=4;break}throw console.log("WOOPsss, it got caught",t.role),new Error("UnAuthorized Action");case 4:return n=h(),e.next=7,b.a.delete("/api/user",n);case 7:return a=e.sent,console.log("User Deleted",a.data),e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},ie=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getUser();case 2:n=e.sent,t({type:"SET_USER",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.newUser(e);case 2:a=t.sent,n({type:"SET_USER",data:a}),n(y({data:"Welcome ".concat(a.name)},5));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.editUser(e);case 2:a=t.sent,n({type:"SET_USER",data:a}),n(y({data:"".concat(a.name," updated")},3));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"DELETE":return null;default:return e}},de=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.logged}));Object(a.useEffect)((function(){e(ie())}),[e,t]);var n=Object(l.f)(),c=Object(u.c)((function(e){return e.user}));if(console.log("Dashboard user: ",c),!c)return null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,c.name,"'s DashBoard"),r.a.createElement(T.a,{color:"primary",onClick:function(e){e.preventDefault(),n.push("/addItem")}},"Add an Item"),r.a.createElement(T.a,{color:"primary",onClick:function(e){e.preventDefault(),n.push("/editUser")}},"Settings"),r.a.createElement(T.a,{color:"secondary",onClick:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.deleteUser();case 2:n({type:"DELETE",data:e}),n(y({data:"CIAO ".concat(e.name)},3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c)),e(X()),n.push("/")}},"Remove Your Account"))},pe=Object(R.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"},image:{width:"25vmax",height:"auto",alignSelf:"center",justifyself:"center"}}),fe=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],f=i[1],b=Object(a.useState)(""),v=Object(s.a)(b,2),g=v[0],h=v[1],E=pe(),w=Object(l.f)(),j=Object(l.g)().id,x=Object(u.b)(),y=Object(u.c)((function(e){return e.logged}));Object(a.useEffect)((function(){var e;x((e=j,function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getItem(e);case 2:a=t.sent,console.log("Single Item fetched: ",a),n({type:"GET_ITEM",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[x,j,y]);var S=Object(u.c)((function(e){return e.items}))[0];if(!y)return r.a.createElement("h5",null,"Sign In");if("admin"!==y.role)return r.a.createElement("h5",null,"Sign In to Admin mode");if(!S)return null;console.log("edit item form: ",S);var k=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:""===n?S.name:n,category:""===m?S.category:m,description:""===g?S.description:g},e.next=4,x(C(S.id,a));case 4:c(""),f(""),h(""),w.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:E.root},r.a.createElement("h3",{className:E.header},"Editing ",S.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:k,className:E.form},r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Title",name:"name",value:n,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-required",name:"category",label:"Category",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-multiline-flexible",name:"description",label:"Description",value:g,onChange:function(e){var t=e.target;return h(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(T.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),w.push("/dashboard")},color:"secondary"},"Cancel")),r.a.createElement("br",null))},be=Object(R.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),ve=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],f=i[1],b=Object(a.useState)(""),v=Object(s.a)(b,2),g=v[0],h=v[1],E=Object(a.useState)(""),O=Object(s.a)(E,2),w=O[0],j=O[1],x=be(),y=Object(u.b)(),S=Object(u.c)((function(e){return e.logged})),k=Object(l.f)(),C=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y(le({name:n,email:m,password:g,adminPin:w}));case 3:c(""),f(""),h(""),j(""),k.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null!==S?null:r.a.createElement("div",{className:x.root},r.a.createElement("h3",{className:x.header},"Join Us!!!"),r.a.createElement("form",{onSubmit:C,className:x.form},r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:n,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:g,onChange:function(e){var t=e.target;return h(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return j(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(T.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),k.push("/")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},ge=Object(R.a)({root:{borderStyle:"solid",borderRadius:"1%",borderWidth:"4px",margin:"2%",paddingTop:"2%",paddingBottom:"2%"},header:{textAlign:"center"},form:{display:"grid",width:"25vmax",margin:"auto"}}),he=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],f=i[1],b=Object(a.useState)(""),v=Object(s.a)(b,2),g=v[0],h=v[1],E=Object(a.useState)(""),O=Object(s.a)(E,2),w=O[0],j=O[1],x=ge(),y=Object(l.f)(),S=Object(u.b)(),k=Object(u.c)((function(e){return e.logged}));Object(a.useEffect)((function(){S(ie())}),[S,k]);var C=Object(u.c)((function(e){return e.user}));if(console.log("Editing user: ",C),!C)return null;var N=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S(se({name:n,email:m,password:g,adminPin:w}));case 3:c(""),f(""),h(""),j(""),y.push("/");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:x.root},r.a.createElement("h3",{className:x.header},"Editing ",C.name),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:N,className:x.form},r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Name",name:"name",value:n,onChange:function(e){var t=e.target;return c(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-required",label:"Email",name:"email",value:m,onChange:function(e){var t=e.target;return f(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",value:g,onChange:function(e){var t=e.target;return h(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(te.a,{required:!0,id:"outlined-password-input",label:"Admin Pin",name:"adminPin",type:"password",value:w,onChange:function(e){var t=e.target;return j(t.value)},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(T.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement("br",null),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),y.push("/dashboard")},color:"secondary"},"Cancel"),r.a.createElement("br",null)))},Ee=function(){var e=Object(u.c)((function(e){return e.notification}));if(!e)return null;var t={display:null===e.data?"none":"block",border:"solid",padding:10,borderWidth:1};return r.a.createElement("div",{style:t,className:"notification"},e.data)},Oe=Object(R.a)({form:{display:"inline"},input:{color:"white"}}),we=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Oe(),i=Object(u.b)(),m=Object(l.f)(),f=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),i(Z(n)),c(""),m.push("/dashboard");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:f,className:o.form},r.a.createElement(re.a,{name:"adminPin",type:"password",size:"small",className:o.input,value:n,onChange:function(e){var t=e.target;return c(t.value)}})))},je=Object(R.a)({root:{},button:{fontSize:"calc(7px + 0.5vmin)"}}),xe=function(){var e=je(),t=Object(l.f)(),n=Object(u.b)(),c=Object(u.c)((function(e){return e.logged})),o=Object(a.useState)(!1),i=Object(s.a)(o,2),m=i[0],f=i[1],b=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,n($());case 3:return e.next=5,n(X());case 5:f(!1),t.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){t.push("/login")},g=function(e){e.preventDefault(),n($()),f(!1),t.push("/")},h=function(){f(!m)},E=function(e){e.preventDefault(),t.push("/dashboard")},O=function(){t.push("/join")};return r.a.createElement("div",null,c?"user"===c.role?r.a.createElement(r.a.Fragment,null,m?r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:h},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:h},"Switch to Admin"),r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:b},"Logout"))):"admin"===c.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:g},"User Mode"),r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:E},"Dashboard"),r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:b},"Logout")):void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:e.button,size:"small",onClick:v,color:"inherit"},"Login"),r.a.createElement(T.a,{className:e.button,color:"inherit",size:"small",onClick:O},"Join")))},ye=n(210),Se=n(211),ke=n(212),Ce=n(213),Ne=n(214),Ae=n(94),Ie=n.n(Ae),De=Object(R.a)((function(e){return{root:{position:"relative"},appBar:{position:"relative",flexGrow:"1",fontSize:"calc(8px + 1vmin)",height:"6.5vh",boxShadow:"none"},toolbar:{backgroundColor:"#282c34",display:"flex",color:"white",paddingLeft:"3vw",minHeight:"100%"},menuButton:{position:"relative",backgroundColor:"#282c34",color:"white",height:"6.5vh",borderRadius:"10%"},title:{flexGrow:".90"}}})),Te=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],o=De(),u=Object(l.f)();return r.a.createElement(ye.a,{onClickAway:function(){c(!1)}},r.a.createElement("div",{className:o.root},n?r.a.createElement(Se.a,{color:"transparent",className:o.appBar},r.a.createElement(ke.a,{disableGutters:!0,className:o.toolbar},r.a.createElement(Ce.a,{variant:"inherit",className:o.title},r.a.createElement("h3",{onClick:function(){u.push("/")}},"Rating App")),r.a.createElement(xe,null))):r.a.createElement(Ne.a,{type:"button",color:"inherit",onClick:function(){c((function(e){return!e}))},className:o.menuButton},r.a.createElement(Ie.a,null))))},Re=n(215),Ue=function(){var e=Object(u.b)();Object(a.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,t(K(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(u.c)((function(e){return e.logged}));return console.log("APP Logged: ",t),r.a.createElement("div",{className:"App"},r.a.createElement(Te,null),r.a.createElement(Re.a,{maxWidth:!1,className:"Content"},r.a.createElement(Ee,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/addItem/"},r.a.createElement(oe,null)),r.a.createElement(l.a,{path:"/login"},r.a.createElement(ae,null)),r.a.createElement(l.a,{path:"/join"},r.a.createElement(ve,null)),r.a.createElement(l.a,{path:"/edit/:id"},r.a.createElement(fe,null)),r.a.createElement(l.a,{path:"/dashboard"},r.a.createElement(de,null)),r.a.createElement(l.a,{path:"/editUser"},r.a.createElement(he,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(V,null)))))},qe=n(37),Pe=n(95),ze=n(96),Le=Object(qe.combineReducers)({items:A,logged:ee,user:me,notification:S}),We=Object(qe.createStore)(Le,Object(Pe.composeWithDevTools)(Object(qe.applyMiddleware)(ze.a)));o.a.render(r.a.createElement(u.a,{store:We},r.a.createElement(i.a,null,r.a.createElement(Ue,null))),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.ce8af0f9.chunk.js.map