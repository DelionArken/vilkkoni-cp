(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l}));var c="CREATE",r="UPDATE",a="DELETE",i="FETCH_ALL",s="DELETE_PART",l="FETCH_NEWS"},52:function(e,t,n){"use strict";var c=n(63),r=(n(0),n(31)),a=n(4);t.a=function(){return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"90vh"},children:Object(a.jsxs)("div",{style:{alignSelf:"center",display:"flex"},children:[Object(a.jsx)(c.a,{variant:"h1",bold:!0,children:"404"}),Object(a.jsx)("span",{style:{width:"0.5rem",backgroundColor:"black",margin:"0 2rem"}}),Object(a.jsxs)(c.a,{variant:"h5",style:{alignSelf:"end"},children:["You are not supposed to be here, ",Object(a.jsx)(r.b,{to:"/",children:"Go back"})]})]})})}},77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(25),a=n.n(r),i=n(42),s=n(16),l=n(55),o=n(31),d=n(5),u=n(56),j=n(34),b=n(53),f=n(15),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.d:return t.payload.slice().sort((function(e,t){return new Date(e.beginDate)-new Date(t.beginDate)}));case f.a:return[].concat(Object(b.a)(e),[t.payload]);case f.f:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case f.b:return e.filter((function(e){return e._id!==t.payload}));case f.c:return e.map((function(e){return e._id===t.payload.event?Object(j.a)(Object(j.a)({},e),{},{participants:e.participants.filter((function(e){return!t.payload.parts.includes(e._id)}))}):e}));default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.e:return t.payload.slice().sort((function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)}));default:return e}},O=Object(s.c)({events:h,news:p}),y=n(90),x=n(95),v=n(4),g=function(){return Object(v.jsx)(y.a,{style:{display:"flex",justifyContent:"center",height:"90vh"},children:Object(v.jsx)(x.a,{style:{alignSelf:"center"}})})},E=n(52),m=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,297))})),w=Object(s.e)(O,Object(s.d)(Object(s.a)(l.a)));a.a.render(Object(v.jsxs)(i.a,{store:w,children:[Object(v.jsx)(u.a,{children:Object(v.jsx)("title",{children:"Vilkkoni | Control Panel"})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(c.Suspense,{fallback:Object(v.jsx)(g,{}),children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{exact:!0,path:"/",component:m}),Object(v.jsx)(d.b,{component:E.a})]})})})]}),document.getElementById("root"))}},[[77,1,3]]]);
//# sourceMappingURL=main.831cd737.chunk.js.map