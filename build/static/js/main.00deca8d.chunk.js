(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{35:function(e,t,n){e.exports=n(65)},44:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),l=n(9),i=n(12),o=(n(44),n(2)),s=n(8),m=n.n(s),f=n(13),p=n(19),d=n.n(p),E={getAll:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/items");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("/api/items","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ITEMS":case"GET_ITEM":return t.data;default:return e}},b=function(){var e=Object(l.c)((function(e){return e.items}));if(!e)return null;console.log("Items: ",e);return r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(i.b,{to:"/items/".concat(e.id)},r.a.createElement("b",null," ",e.name)),r.a.createElement("h3",null,e.category))})))},h=function(){var e=Object(l.c)((function(e){return e.items})),t=Object(o.f)().id,n=e.find((function(e){return e.id===t}));if(!n)return null;console.log("Item: ",n);return r.a.createElement("div",null,r.a.createElement("div",{key:n.id},r.a.createElement("h3",null,"Details"),r.a.createElement("b",null,n.name),r.a.createElement("h3",null,n.category),r.a.createElement("p",null,n.description)))},g=(n(64),function(){var e=Object(l.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_ITEMS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",{className:"App"},"Hello World!!",r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/items/:id"},r.a.createElement(h,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(b,null))))}),j=n(10),O=n(33),y=n(34),I=Object(j.combineReducers)({items:v}),w=Object(j.createStore)(I,Object(O.composeWithDevTools)(Object(j.applyMiddleware)(y.a)));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:w},r.a.createElement(i.a,null,r.a.createElement(g,null)))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.00deca8d.chunk.js.map