(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{297:function(e,t,n){"use strict";n.r(t);var a=n(122),c=n(0),i=n.n(c),r=n(292),s=n(293),o=n(275),l=n(276),j=n(63),d=n(301),u=n(294),b=n(254),O=n(258),x=n(306),h=n(259),p=n(257),m=n(220),f=n.n(m),v=n(43),g=n(149),y=Object(g.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(v.a)({},e.breakpoints.up("md"),{width:"240px",flexShrink:0}),appBar:(t={},Object(v.a)(t,e.breakpoints.up("md"),{width:"calc(100% - 240px)",marginLeft:"240px"}),Object(v.a)(t,"zIndex","200"),t),menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:"240px"},content:{flexGrow:1,padding:e.spacing(3),position:"relative",display:"flex",flexDirection:"column",height:"100vh"},languages:{color:"#000"},tools:{justifyContent:"space-between"},loginCard:{justifyContent:"center",display:"flex",flexDirection:"column",alignSelf:"center",padding:"1rem"},loginContainer:{display:"flex",justifyContent:"center",height:"100vh"}}})),C=n(117),k=n(186),w=n(247),N=n(248),D=n(249),S=n(250),P=n(252),I=n(191),A=n.n(I),L=n(189),E=n.n(L),F=n(190),_=n.n(F),M=n(192),R=n.n(M),T=Object(g.a)((function(e){return{toolbar:e.mixins.toolbar,menuList:{fontVariantCaps:"petite-caps",color:"inherit",textDecoration:"none"}}})),B=n(5),z=n(253),W=n(4),G=function(){var e=T(),t=Object(B.f)(),n=Object(B.g)(),a=function(e){t.push({pathname:e,search:n.search})};return Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{className:e.toolbar}),Object(W.jsx)(w.a,{}),Object(W.jsxs)(N.a,{className:e.menuList,children:[Object(W.jsxs)(D.a,{button:!0,onClick:function(){a("/dashboard")},children:[Object(W.jsx)(S.a,{children:Object(W.jsx)(E.a,{})}),Object(W.jsx)(P.a,{primary:"Manage events"})]},"Inspect"),Object(W.jsxs)(D.a,{button:!0,onClick:function(){a("/dashboard/create")},children:[Object(W.jsx)(S.a,{children:Object(W.jsx)(_.a,{})}),Object(W.jsx)(P.a,{primary:"Create event"})]},"create"),Object(W.jsxs)(D.a,{button:!0,onClick:function(){a("/dashboard/news")},children:[Object(W.jsx)(S.a,{children:Object(W.jsx)(z.a,{})}),Object(W.jsx)(P.a,{primary:"Newsletter"})]},"news"),Object(W.jsxs)(D.a,{button:!0,onClick:function(){a("/dashboard/statistics")},children:[Object(W.jsx)(S.a,{children:Object(W.jsx)(A.a,{})}),Object(W.jsx)(P.a,{primary:"Statistics"})]},"stats")]}),Object(W.jsx)(w.a,{}),Object(W.jsx)(N.a,{className:e.menuList,children:Object(W.jsxs)(D.a,{button:!0,onClick:function(){a("/")},children:[Object(W.jsx)(S.a,{children:Object(W.jsx)(R.a,{color:"secondary"})}),Object(W.jsx)(P.a,{primary:"Logout"})]},"logout")})]})},V=n(34),J=n(268),K=n(277),H=n(302),U=n(296),Y=n(152),q=n.n(Y),Q=Object(g.a)((function(e){return{fileInput:{width:"97%",margin:"10px 0"},createForm:{},titles:{marginBottom:"1rem"},inputField:{minWidth:"50%"}}})),X=n(125),Z=n.n(X),$=n(256),ee=n(298),te=n(195),ne=n.n(te),ae=n(194),ce=n.n(ae),ie=n(193),re=n.n(ie),se=n.p+"static/media/placeholder.157f088b.png",oe=Object(g.a)((function(e){return{media:Object(v.a)({paddingTop:"50%",position:"relative",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},e.breakpoints.up("md"),{width:"30%",paddingTop:0}),border:{border:"solid"},card:Object(v.a)({display:"flex",borderRadius:"15px",height:"auto",position:"relative",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row"}),content:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"space-between"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},overlay3:{position:"absolute",bottom:"20px",left:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px",marginBottom:"5px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},bodyContent:{whiteSpace:"pre-line"}}}));X.extend(re.a);var le=function(e){var t=e.event,n=oe();return Object(W.jsxs)(b.a,{className:n.card,children:[Object(W.jsx)($.a,{className:n.media,image:t.image?t.image:se,title:t.title}),Object(W.jsxs)(ee.a,{className:n.content,children:[Object(W.jsxs)("div",{className:n.overlay,children:[Object(W.jsx)(j.a,{variant:"h6",children:t.creator}),Object(W.jsx)(j.a,{variant:"body2",children:X(t.createdDate).fromNow()})]}),t.lastModified?Object(W.jsx)("div",{className:n.overlay3,children:Object(W.jsxs)(j.a,{variant:"body2",children:["Modified: ",X(t.lastModified).format("LLL")]})}):null,Object(W.jsx)("div",{className:n.overlay2,children:Object(W.jsx)(p.a,{style:{color:"white"},size:"small",onClick:function(){},children:Object(W.jsx)(ce.a,{fontSize:"default",color:"primary"})})}),Object(W.jsx)("div",{className:n.details,children:Object(W.jsx)(j.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(W.jsx)(j.a,{className:n.title,variant:"h4",gutterBottom:!0,children:t.title}),Object(W.jsxs)(j.a,{className:n.title,variant:"h6",gutterBottom:!0,children:["When: [",X(t.beginDate).format("LLL"),"]"]}),Object(W.jsxs)(j.a,{className:n.title,variant:"h6",gutterBottom:!0,children:["Where: ",t.location]}),Object(W.jsx)(O.a,{children:Object(W.jsx)(j.a,{variant:"h6",color:"textSecondary",component:"p",className:n.bodyContent,children:t.message})}),Object(W.jsxs)(h.a,{className:n.cardActions,children:[Object(W.jsxs)(j.a,{children:["Room for ",t.maxPartCount-t.partCount," people"]}),Object(W.jsxs)(j.a,{children:["Pricing: ",t.price?t.price:0," \u20ac"]}),Object(W.jsxs)(p.a,{size:"medium",variant:"contained",color:"primary",align:"right",onClick:function(){},children:[Object(W.jsx)(ne.a,{fontSize:"small"}),"\xa0 Enter \xa0"]})]})]})]})},je=n(260),de=n(265),ue=n(266),be=n(267),Oe=function(e){var t=e.open,n=e.handleCancel,a=e.handleAccept,c=e.notify;return Object(W.jsxs)(je.a,{open:t,children:[Object(W.jsx)(de.a,{children:"Are you sure?"}),Object(W.jsxs)(ue.a,{children:["This will make the event available ",c?" and notify all current subscribers":" but will not notify subscribers"]}),Object(W.jsxs)(be.a,{children:[Object(W.jsx)(p.a,{color:"secondary",variant:"outlined",onClick:n,children:"Cancel"}),Object(W.jsx)(p.a,{color:"primary",variant:"contained",onClick:a,children:"Accept"})]})]})},xe=n(42),he=n(154),pe=n.n(he),me=n(155),fe=n(15),ve=n(197),ge=n.n(ve),ye="https://vilkkoni-server.herokuapp.com/user",Ce=function(e){return ge.a.post("".concat(ye,"/login"),e)},ke=function(e){return ge.a.get("".concat(ye,"/").concat(e,"/events"))},we=function(e,t){return ge.a.post("".concat(ye,"/").concat(e,"/events"),t)},Ne=function(e,t,n){return ge.a.patch("".concat(ye,"/").concat(e,"/events/").concat(t),n)},De=function(e,t){return ge.a.delete("".concat(ye,"/").concat(e,"/events/").concat(t))},Se=function(e,t,n){return ge.a.patch("".concat(ye,"/").concat(e,"/events/").concat(t,"/signups"),n)},Pe=function(e,t){return ge.a.post("".concat(ye,"/").concat(e,"/news"),t)},Ie=function(e){return ge.a.get("".concat(ye,"/").concat(e,"/news"))},Ae=function(e){var t=e.api_key,n=Q(),i=Object(xe.b)(),r=Object(c.useState)({creator:"Vilkkoni",title:"",message:"",location:"",tags:[""],image:"",maxPartCount:3,partCount:0,price:0,beginDate:Z()().toDate()}),s=Object(a.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)(!0),u=Object(a.a)(d,2),b=u[0],O=u[1],h=Object(c.useState)(!1),m=Object(a.a)(h,2),f=m[0],v=m[1],g=function(){l({creator:"Vilkkoni",title:"",message:"",location:"",tags:[""],image:"",maxPartCount:3,partCount:0,price:0,beginDate:Z()().toDate()})};return Object(W.jsxs)("div",{children:[Object(W.jsx)(Oe,{open:f,handleCancel:function(){v(!1)},handleAccept:function(){var e,n;i((e=t,n=o,function(){var t=Object(me.a)(pe.a.mark((function t(a){var c,i;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,we(e,n);case 3:c=t.sent,i=c.data,a({type:fe.a,payload:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())),v(!1),g()},notify:b}),Object(W.jsx)(j.a,{className:n.titles,variant:"h5",children:"Create a new event"}),Object(W.jsx)("form",{className:n.createForm,children:Object(W.jsxs)(J.a,{container:!0,direction:"column",spacing:3,children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Title",value:o.title,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{title:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Content",multiline:!0,rows:4,inputProps:{style:{resize:"both"}},value:o.message,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{message:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Location",value:o.location,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{location:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Search tags, comma-delimited",value:o.tags,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{tags:e.target.value.split(",")}))}})}),Object(W.jsxs)(J.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"flex-start",children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"outlined",label:"Participant count",type:"number",value:o.maxPartCount,style:{marginRight:"2rem"},onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{maxPartCount:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(U.a,{label:"Date and time",value:o.beginDate,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{beginDate:e}))},ampm:!1})})]}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsxs)("div",{className:n.fileInput,children:[Object(W.jsx)(j.a,{children:"Select image for the event:"}),Object(W.jsx)(q.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(V.a)(Object(V.a)({},o),{},{image:t}))}})]})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(K.a,{control:Object(W.jsx)(H.a,{checked:b,onChange:function(e){O(!b)}}),label:"Notify subsribers on this event"})}),Object(W.jsxs)(J.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"flex-start",children:[Object(W.jsx)(J.a,{item:!0,style:{marginRight:"2rem"},children:Object(W.jsx)(p.a,{variant:"outlined",color:"secondary",onClick:g,children:"Clear"})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){v(!0)},children:"Submit"})})]})]})}),Object(W.jsxs)("div",{style:{marginTop:"3rem"},children:[Object(W.jsx)(j.a,{className:n.titles,variant:"h5",children:"Preview"}),Object(W.jsx)(le,{event:o})]})]})},Le=n(278),Ee=n(255),Fe=n(168),_e=Object(g.a)((function(e){return{root:{},eventCard:{borderRadius:"0",display:"flex",flexDirection:"row"},cardActions:{marginLeft:"auto"},editMenu:{width:"100%",height:"100vh",position:"absolute",top:0,left:0,display:"flex"},toolbar:e.mixins.toolbar,editContent:{flexGrow:1,padding:e.spacing(3),position:"relative",display:"flex",flexDirection:"column"},editTitle:{display:"flex"},editID:{marginLeft:"auto"},inputField:{minWidth:"50%"},fileInput:{width:"97%",margin:"10px 0"},editForm:{marginTop:"1rem"},partData:{marginTop:"1rem"},content:{display:"inline-flex",justifyContent:"space-between",width:"100%"},contentData:{textAlign:"center"}}})),Me=n(279),Re=n(280),Te=n(289),Be=n(290),ze=n(291),We=function(e){var t=e.api_key,n=e.ID,i=e.open,r=e.cancel,s=_e(),o=Object(xe.b)(),l=Object(xe.c)((function(e){return n?e.events.find((function(e){return e._id===n})):null})),d=Object(c.useState)({creator:"Vilkkoni",title:"",message:"",location:"",tags:[""],image:"",price:0,maxPartCount:3,partCount:0,beginDate:X().toDate(),lastModified:X().toDate()}),u=Object(a.a)(d,2),b=u[0],O=u[1],h=Object(c.useState)(!0),m=Object(a.a)(h,2),f=m[0],v=m[1];Object(c.useEffect)((function(){l&&O(l)}),[l]);return Object(W.jsx)(Le.a,{direction:"left",in:i,className:s.editMenu,mountOnEnter:!0,unmountOnExit:!0,children:Object(W.jsx)(Ee.a,{children:Object(W.jsxs)("div",{className:s.editContent,children:[Object(W.jsx)("div",{className:s.toolbar}),Object(W.jsxs)(J.a,{container:!0,spacing:3,children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsxs)(p.a,{variant:"contained",onClick:r,children:[Object(W.jsx)(Me.a,{}),"Back"]})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(j.a,{variant:"h4",children:"Edit Event"})}),Object(W.jsx)(J.a,{item:!0,className:s.editID,children:Object(W.jsxs)(j.a,{variant:"body2",children:["(ID: ",n,")"]})})]}),Object(W.jsx)("form",{className:s.editForm,onSubmit:function(e){e.preventDefault(),n&&o(function(e,t,n){return function(){var a=Object(me.a)(pe.a.mark((function a(c){var i,r;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ne(e,t,n);case 3:i=a.sent,r=i.data,c({type:fe.f,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,b)),r()},children:Object(W.jsxs)(J.a,{container:!0,direction:"column",spacing:3,children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:s.inputField,variant:"outlined",label:"Title",value:b.title,onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{title:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:s.inputField,variant:"outlined",label:"Content",multiline:!0,rows:4,inputProps:{style:{resize:"both"}},value:b.message,onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{message:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:s.inputField,variant:"outlined",label:"Location",value:b.location,onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{location:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:s.inputField,variant:"outlined",label:"Search tags, comma-delimited",value:b.tags,onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{tags:e.target.value.split(",")}))}})}),Object(W.jsxs)(J.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"flex-start",children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"outlined",label:"Participant count",type:"number",value:b.maxPartCount,style:{marginRight:"2rem"},onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{maxPartCount:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(U.a,{label:"Date and time",value:b.beginDate,style:{marginRight:"2rem"},onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{beginDate:e}))},ampm:!1})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"outlined",label:"Ticket price",type:"number",value:b.price,onChange:function(e){return O(Object(V.a)(Object(V.a)({},b),{},{price:e.target.value}))}})})]}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsxs)("div",{className:s.fileInput,children:[Object(W.jsx)(j.a,{children:"Select image for the event:"}),Object(W.jsx)(q.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return O(Object(V.a)(Object(V.a)({},b),{},{image:t}))}})]})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(K.a,{control:Object(W.jsx)(H.a,{checked:f,onChange:function(e){v(!f)}}),label:"Notify subscribers about this change"})}),Object(W.jsx)(J.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"flex-start",children:Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",children:"Save"})})})]})})]})})})},Ge=[{field:"name",headerName:"Name",flex:1},{field:"email",headerName:"Email",flex:1},{field:"phone",headerName:"Phone Number",flex:1},{field:"count",headerName:"Count",flex:1},{field:"additional",headerName:"Additional Information",flex:1},{field:"subscribed",headerName:"Subscribed",flex:1,type:"boolean"}],Ve=function(e){var t=0;return e.forEach((function(e){e.id=t,t++})),e},Je=function(e){var t=e.api_key,n=e.open,i=e.ID,r=e.cancel,s=_e(),o=Object(xe.c)((function(e){return i?e.events.find((function(e){return e._id===i})):null})),l=Object(c.useState)([]),j=Object(a.a)(l,2),d=j[0],u=j[1],b=Object(xe.b)();return i?Object(W.jsx)(Le.a,{direction:"left",in:n,className:s.editMenu,mountOnEnter:!0,unmountOnExit:!0,children:Object(W.jsx)(Ee.a,{children:Object(W.jsxs)("div",{className:s.editContent,children:[Object(W.jsx)("div",{className:s.toolbar}),Object(W.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(W.jsxs)(p.a,{variant:"contained",onClick:r,children:[Object(W.jsx)(Me.a,{}),"Back"]}),Object(W.jsxs)(p.a,{variant:"contained",color:"secondary",onClick:function(){if(d.length>0){var e=o.participants.filter((function(e,t){return d.includes(t)})).map((function(e){return e._id}));b((n=t,a=i,c=e,function(){var e=Object(me.a)(pe.a.mark((function e(t){var i;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se(n,a,c);case 3:i=e.sent,console.log(i.status),t({type:fe.c,payload:{event:a,parts:c}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),u([])}var n,a,c},disabled:!d.length,children:[Object(W.jsx)(Re.a,{}),"Remove Selected"]})]}),Object(W.jsx)(Fe.a,{components:{Toolbar:Fe.b},className:s.partData,columns:Ge,rows:Ve(o.participants.slice()),checkboxSelection:!0,disableSelectionOnClick:!0,sortModel:[{field:"name",sort:"asc"}],onSelectionModelChange:function(e){u(e.selectionModel)},selectionModel:d})]})})}):null},Ke=function(e){var t=e.open,n=e.cancel,a=e.deleteEvent;return Object(W.jsxs)(je.a,{open:t,children:[Object(W.jsx)(de.a,{children:"Cancel this event?"}),Object(W.jsx)(ue.a,{children:"Are you sure you want to cancel this event? All participants will be notified of this action. You cannot recover this event after deletion."}),Object(W.jsxs)(be.a,{style:{justifyContent:"space-between"},children:[Object(W.jsx)(p.a,{color:"primary",variant:"contained",onClick:n,children:"Go Back"}),Object(W.jsxs)(p.a,{color:"secondary",variant:"contained",onClick:a,children:[Object(W.jsx)(Re.a,{}),"Delete"]})]})]})},He=function(e){var t=e.api_key,n=_e(),i=Object(xe.b)(),r=Object(c.useState)(400),s=Object(a.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)(null),u=Object(a.a)(d,2),x=u[0],m=u[1],f=Object(c.useState)(!1),v=Object(a.a)(f,2),g=v[0],y=v[1],C=Object(c.useState)(!1),k=Object(a.a)(C,2),N=k[0],D=k[1],S=Object(xe.c)((function(e){return e.events})),P=Object(c.useState)(!1),I=Object(a.a)(P,2),A=I[0],L=I[1];Object(c.useEffect)((function(){var e,n;i((e=t,n=E,function(){var t=Object(me.a)(pe.a.mark((function t(a){var c,i;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ke(e);case 3:c=t.sent,i=c.data,a({type:fe.d,payload:i}),n({status:200}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n({status:401}),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,i]);var E=function(e){l(e.status)};return Object(W.jsxs)("div",{className:n.root,children:[Object(W.jsx)(J.a,{container:!0,direction:"column",spacing:2,children:200===o?S.length?S.map((function(e){return Object(W.jsx)(J.a,{item:!0,children:Object(W.jsxs)(b.a,{className:n.eventCard,children:[Object(W.jsxs)(O.a,{className:n.content,children:[Object(W.jsx)(j.a,{className:n.contentData,variant:"h5",children:e.title}),Object(W.jsx)(w.a,{orientation:"vertical"}),Object(W.jsx)(j.a,{className:n.contentData,variant:"h5",children:X(e.beginDate).format("LLL")})]}),Object(W.jsxs)(h.a,{className:n.cardActions,children:[Object(W.jsx)(p.a,{variant:"contained",disabled:!0,children:Object(W.jsx)(Te.a,{})}),Object(W.jsx)(p.a,{variant:"contained",onClick:function(){m(e._id),D(!0)},children:Object(W.jsx)(Be.a,{})}),Object(W.jsx)(p.a,{variant:"contained",onClick:function(){m(e._id),y(!0)},children:Object(W.jsx)(ze.a,{})}),Object(W.jsx)(p.a,{variant:"contained",color:"secondary",onClick:function(){m(e._id),L(!0)},children:Object(W.jsx)(Re.a,{})})]})]})},e._id)})):Object(W.jsx)(j.a,{children:"No events found"}):401===o?Object(W.jsx)(j.a,{children:"Invalid API key"}):Object(W.jsx)(j.a,{children:"Either still loading or an error, please be patient"})}),Object(W.jsx)(We,{api_key:t,ID:x,open:g,cancel:function(){y(!1),m(null)}}),Object(W.jsx)(Ke,{open:A,cancel:function(){L(!1),m(null)},deleteEvent:function(){var e,n;i((e=t,n=x,function(){var t=Object(me.a)(pe.a.mark((function t(a){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,De(e,n);case 3:a({type:fe.b,payload:n}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())),L(!1),m(null)}}),Object(W.jsx)(Je,{api_key:t,open:N,ID:x,cancel:function(){D(!1),m(null)}})]})},Ue=function(e){var t=e.open,n=e.handleCancel,a=e.handleAccept;return Object(W.jsxs)(je.a,{open:t,children:[Object(W.jsx)(de.a,{children:"Are you sure?"}),Object(W.jsx)(ue.a,{children:"This will send en email to all your current subscribers."}),Object(W.jsxs)(be.a,{children:[Object(W.jsx)(p.a,{color:"secondary",variant:"outlined",onClick:n,children:"Cancel"}),Object(W.jsx)(p.a,{color:"primary",variant:"contained",onClick:a,children:"Accept"})]})]})},Ye=Object(g.a)((function(e){return{titles:{marginBottom:"1rem",display:"inline-flex"},inputField:{minWidth:"50%"},newsContainer:{display:"flex",flexDirection:"column",flexGrow:1},oldData:{margin:"1rem 0",display:"flex",flexGrow:1,minHeight:"50vh"}}})),qe=[{field:"createdAt",headerName:"Date",flex:.2,type:"date"},{field:"title",headerName:"Title",flex:.5},{field:"content",headerName:"Content",flex:1}],Qe=function(e){var t=e.api_key,n=Ye(),i=Object(xe.b)(),r=Object(c.useState)({title:"",content:""}),s=Object(a.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)(!1),u=Object(a.a)(d,2),b=u[0],O=u[1],h=Object(xe.c)((function(e){return e.news.map((function(e,t){return e.id?e:Object(V.a)(Object(V.a)({},e),{},{id:t,createdAt:new Date(e.createdAt)})}))}));Object(c.useEffect)((function(){var e;i((e=t,function(){var t=Object(me.a)(pe.a.mark((function t(n){var a,c;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ie(e);case 3:a=t.sent,c=a.data,n({type:fe.e,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[i,t]);var m=function(){l({title:"",content:""})};return Object(W.jsxs)("div",{className:n.newsContainer,children:[Object(W.jsx)(Ue,{open:b,handleCancel:function(){O(!1)},handleAccept:function(){var e,n;i((e=t,n=o,function(){var t=Object(me.a)(pe.a.mark((function t(a){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Pe(e,n);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}())),O(!1),m()}}),Object(W.jsxs)("div",{children:[Object(W.jsx)(j.a,{className:n.titles,variant:"h5",children:"Post a newsletter - \xa0"}),Object(W.jsx)(j.a,{className:n.titles,variant:"h5",color:"secondary",children:" WORK IN PROGRESS"})]}),Object(W.jsx)("form",{className:n.createForm,children:Object(W.jsxs)(J.a,{container:!0,direction:"column",spacing:3,children:[Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Title",value:o.title,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{title:e.target.value}))}})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(x.a,{className:n.inputField,variant:"outlined",label:"Content",multiline:!0,rows:7,inputProps:{style:{resize:"both"}},value:o.content,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{content:e.target.value}))}})}),Object(W.jsxs)(J.a,{item:!0,container:!0,direction:"row",alignItems:"center",justify:"flex-start",children:[Object(W.jsx)(J.a,{item:!0,style:{marginRight:"2rem"},children:Object(W.jsx)(p.a,{variant:"outlined",color:"secondary",onClick:m,children:"Clear"})}),Object(W.jsx)(J.a,{item:!0,children:Object(W.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){""!==o.title&&""!==o.content&&O(!0),console.log(h)},children:"Submit"})})]})]})}),Object(W.jsx)(j.a,{variant:"h5",style:{marginTop:"2rem"},children:"Old Newsletters"}),Object(W.jsx)("div",{className:n.oldData,children:Object(W.jsx)(Fe.a,{columns:qe,rows:h,disableSelectionOnClick:!0,sortModel:[{field:"createdAt",sort:"asc"}]})})]})},Xe=n(52),Ze=n(295);t.default=function(){var e=y(),t=Object(c.useState)(""),n=Object(a.a)(t,2),m=n[0],v=n[1],g=Object(c.useState)(!1),w=Object(a.a)(g,2),N=w[0],D=w[1],S=Object(c.useState)(!1),P=Object(a.a)(S,2),I=P[0],A=P[1],L=Object(xe.b)(),E=Object(B.h)().path,F=i.a.useState(!1),_=Object(a.a)(F,2),M=_[0],R=_[1],T=function(){R(!M)},z=function(e){console.log(e),200===e.status?(D(!0),A(!1)):(A(!0),D(!1),console.log("error"))},V=void 0!==window?function(){return document.body}:void 0;return N?Object(W.jsxs)("div",{className:e.root,children:[Object(W.jsx)(r.a,{}),Object(W.jsx)(s.a,{position:"fixed",className:e.appBar,children:Object(W.jsxs)(o.a,{className:e.tools,children:[Object(W.jsx)(l.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:T,className:e.menuButton,children:Object(W.jsx)(f.a,{})}),Object(W.jsx)(j.a,{variant:"h6",noWrap:!0,children:"Vilkkoni Control Panel"})]})}),Object(W.jsxs)("nav",{className:e.drawer,children:[Object(W.jsx)(d.a,{mdUp:!0,implementation:"js",children:Object(W.jsx)(u.a,{container:V,variant:"temporary",anchor:"left",open:M,onClose:T,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0},children:Object(W.jsx)(G,{})})}),Object(W.jsx)(d.a,{smDown:!0,implementation:"js",children:Object(W.jsx)(u.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0,children:Object(W.jsx)(G,{})})})]}),Object(W.jsxs)("main",{className:e.content,children:[Object(W.jsx)("div",{className:e.toolbar}),Object(W.jsx)(C.a,{utils:k.a,children:Object(W.jsxs)(B.c,{children:[Object(W.jsx)(B.a,{exact:!0,path:E,children:Object(W.jsx)(He,{api_key:m})}),Object(W.jsx)(B.a,{path:"".concat(E,"/create"),children:Object(W.jsx)(Ae,{api_key:m})}),Object(W.jsx)(B.a,{path:"".concat(E,"/news"),children:Object(W.jsx)(Qe,{api_key:m})}),Object(W.jsx)(B.a,{path:"".concat(E,"/statistics"),children:Object(W.jsx)(j.a,{variant:"h5",color:"secondary",children:"WORK IN PROGRESS"})}),Object(W.jsx)(B.a,{component:Xe.a})]})})]})]}):Object(W.jsx)("div",{className:e.loginContainer,children:Object(W.jsxs)(b.a,{className:e.loginCard,children:[Object(W.jsx)(j.a,{children:"Enter credentials"}),Object(W.jsx)(O.a,{children:Object(W.jsx)(x.a,{variant:"outlined",value:m,onChange:function(e){return v(e.target.value)},error:I})}),Object(W.jsx)(h.a,{children:Object(W.jsxs)(p.a,{variant:"contained",color:"primary",onClick:function(){L(function(e,t){return function(){var n=Object(me.a)(pe.a.mark((function n(a){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ce({api:e});case 3:t({status:200}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),t({status:401});case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}(m,z))},children:["Log in \xa0",Object(W.jsx)(Ze.a,{})]})})]})})}}}]);
//# sourceMappingURL=4.a78112b9.chunk.js.map