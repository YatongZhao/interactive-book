(this["webpackJsonpinteractive-book"]=this["webpackJsonpinteractive-book"]||[]).push([[0],{113:function(t,e,n){"use strict";n.r(e);var i=n(3),c=n(0),a=n(10),s=n.n(a),r=n(49),o=n(13),j=n(16),u=n(143),l=n(175),b=n(171),d=n(145),h=n(147),O=n(42),f=n(148),x=n(149),p=n(151),g=n(152),m=n(153),v=n(150),C=n(172),k={apiHost:""},S=Object(c.createContext)({}),y=S.Provider,I=Object(u.a)((function(t){return Object(l.a)({title:{flexGrow:1}})})),L=function(){var t=I(),e=Object(c.useState)([]),n=Object(j.a)(e,2),a=n[0],s=n[1],r=Object(o.e)(),u=Object(c.useContext)(S);return Object(c.useEffect)((function(){fetch("".concat(k.apiHost,"/api/book"),{method:"get"}).then((function(t){return t.json()})).then((function(t){s(t.books)}))}),[]),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(d.a,{position:"sticky",color:"primary",children:Object(i.jsxs)(h.a,{variant:"dense",children:[Object(i.jsx)(O.a,{variant:"h6",className:t.title,children:"ZBOOK"}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:u.isIsLoginReady?Object(i.jsx)(i.Fragment,{children:u.isLogin?Object(i.jsx)(f.a,{in:u.isLogin,children:Object(i.jsx)(b.a,{children:u.userInfo.nick})}):Object(i.jsx)(f.a,{in:!u.isLogin,children:Object(i.jsx)(x.a,{color:"inherit",onClick:function(){return r.push("/login")},children:"Login"})})}):Object(i.jsx)(v.a,{animation:"wave",width:60})})}})]})}),Object(i.jsx)(p.a,{children:a.map((function(t){return Object(i.jsx)(g.a,{button:!0,onClick:function(){return e=t.id,void r.push("/book/".concat(e));var e},children:Object(i.jsx)(m.a,{primary:t.title})},t.id)}))})]})},w=n(156),F=n(166),N=n(176),T=n(157),B=n(158),M=n(159),z=n(170),E=n(162),W=n(70),H=n(160),P=n(161),R=n(177),J=n(163),U=n(173),G=n(57),D=n(58),A=n(12),K=n(69);console.log(Object(K.v4)());var Z=function(){function t(e){Object(G.a)(this,t),this.title="",this.author="",this.content="",this.sub=[],this.subMap={},this.id="",this.initialized=!1,e&&this.initialize(e),Object(A.d)(this,{initialized:A.e,id:A.e,title:A.e,author:A.e,content:A.e,sub:A.e,subMap:A.e,addSub:A.b,addSubMap:A.b,initialize:A.b})}return Object(D.a)(t,[{key:"initialize",value:function(t){this.id=t.id||Object(K.v4)(),this.title=t.title,this.author=t.author,this.content=t.content,this.sub=t.sub||[],this.initialized=!0}},{key:"addSub",value:function(e){this.sub.push({id:e.id,title:e.title,author:e.author}),this.addSubMap(new t(e))}},{key:"addSubMap",value:function(t){this.subMap[t.id]=t}}]),t}(),$=n(154),q=n(155),Q=Object(u.a)((function(t){return Object(l.a)({container:{marginTop:t.spacing(2)}})})),V=function(t){var e=t.data,n=t.onSelect,c=t.selectId,a=Q();return Object(i.jsx)(b.a,{className:a.container,children:Object(i.jsx)(p.a,{subheader:Object(i.jsx)($.a,{disableSticky:!0,children:"\u89c9\u5f97\u672c\u7ae0\u770b\u7684\u4e0d\u8fc7\u763e\uff1f\u770b\u770b\u5176\u4ed6\u540c\u6837\u4f18\u79c0\u7684\u7248\u672c\u5427\uff1a"}),children:e.sub.map((function(t){return Object(i.jsxs)(g.a,{button:!0,onClick:function(){return n(t.id)},children:[Object(i.jsx)(q.a,{children:Object(i.jsx)(U.a,{checked:t.id===c})}),Object(i.jsx)(m.a,{primary:t.title})]},t.id)}))})})},X=function(t){var e=t.data,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(""),h=Object(j.a)(d,2),O=h[0],f=h[1],p=Object(c.useState)(""),g=Object(j.a)(p,2),m=g[0],v=g[1],C=function(){return r(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x.a,{variant:"contained",color:"default",disableElevation:!0,size:"small",onClick:function(){return r(!0)},children:"\u5728\u5f53\u524d\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u7ae0\u8282"}),Object(i.jsxs)(N.a,{onClose:C,open:s,children:[Object(i.jsx)(T.a,{children:"\u6dfb\u52a0\u4e00\u4e2a\u7ae0\u8282"}),Object(i.jsxs)(B.a,{children:[Object(i.jsx)(M.a,{children:"\u5728\u5f53\u524d\u4f4d\u7f6e\uff0c\u6dfb\u52a0\u4e00\u4e2a\u7ae0\u8282\u9009\u62e9"}),Object(i.jsx)(z.a,{autoFocus:!0,value:l,onChange:function(t){return b(t.target.value)},label:"\u6807\u9898",fullWidth:!0}),Object(i.jsx)(z.a,{autoFocus:!0,value:O,onChange:function(t){return f(t.target.value)},label:"\u4f5c\u8005",fullWidth:!0}),Object(i.jsx)(z.a,{autoFocus:!0,value:m,onChange:function(t){return v(t.target.value)},label:"\u5185\u5bb9",fullWidth:!0,multiline:!0,rowsMax:10})]}),Object(i.jsxs)(E.a,{children:[Object(i.jsx)(x.a,{onClick:function(){fetch("".concat(k.apiHost,"/api/chapter"),{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:l,author:O,content:m,parentId:e.id})}).then((function(t){return t.json()})).then((function(t){e.addSub({title:l,author:O,content:m,id:t.id}),r(!1)}))},color:"primary",children:"\u786e\u5b9a"}),Object(i.jsx)(x.a,{onClick:C,color:"primary",children:"\u53d6\u6d88"})]})]})]})},Y=Object(u.a)((function(t){return Object(l.a)({title:{marginTop:t.spacing(8),width:"100%",alignItems:"flex-start",flexDirection:"column"},author:{fontWeight:400,color:t.palette.grey[400],fontSize:t.spacing(2),textAlign:"right",width:"100%",marginTop:t.spacing(1)},content:{marginTop:t.spacing(6),textIndent:t.spacing(4),lineHeight:t.spacing(.22)},selectorContainer:{paddingLeft:t.spacing(3),marginTop:t.spacing(2),marginBottom:t.spacing(2)}})})),_=function t(e){var n=e.data,a=e.parent,s=e.setParentId,r=Y(),o=Object(c.useState)(""),u=Object(j.a)(o,2),l=u[0],d=u[1],h=Object(c.useState)(null),f=Object(j.a)(h,2),x=f[0],p=f[1],g=Object(c.useState)(!1),m=Object(j.a)(g,2),v=m[0],S=m[1],y=function(t){d(t.target.value),S(!1)};return Object(c.useEffect)((function(){0!==n.sub.length&&d(n.sub[0].id)}),[n]),Object(c.useEffect)((function(){l&&(n.subMap[l]?p(n.subMap[l]):fetch("".concat(k.apiHost,"/api/chapter/").concat(l),{method:"get"}).then((function(t){return t.json()})).then((function(t){var e=t.chapter,i=new Z(e);p(i),n.addSubMap(i)})))}),[l,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b.a,{className:r.content,children:n.content}),a&&Object(i.jsx)(V,{data:a,onSelect:function(t){s&&s(t)},selectId:n.id}),x&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(W.a,{className:r.title,onClick:function(){return S(!v)},children:[Object(i.jsx)(O.a,{variant:"h4",children:x.title}),Object(i.jsxs)(b.a,{className:r.author,children:["author: ",x.author]})]})}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:(!l||v)&&Object(i.jsxs)(b.a,{className:r.selectorContainer,children:[0!==n.sub.length&&Object(i.jsxs)(H.a,{component:"fieldset",fullWidth:!0,children:[Object(i.jsx)(P.a,{component:"legend",children:"\u9009\u62e9\u4e00\u6761\u5206\u652f"}),Object(i.jsx)(R.a,{value:l,onChange:y,children:n.sub.map((function(t){return Object(i.jsx)(J.a,{value:t.id,control:Object(i.jsx)(U.a,{size:"small"}),label:t.title},t.id)}))})]}),Object(i.jsx)(X,{data:n})]})})}}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:x&&Object(i.jsx)(t,{data:x,parent:n,setParentId:d},x.id)})}})]})},tt=n(164),et=n(165),nt=function(t){var e=t.children,n=Object(tt.a)();return Object(i.jsx)(et.a,{appear:!1,direction:"down",in:!n,children:e})},it=n(61),ct=n.n(it),at=Object(u.a)((function(t){return Object(l.a)({title:{flexGrow:1},container:{marginTop:t.spacing(3)},menuButton:{marginRight:t.spacing(2)}})})),st=function(){var t=at(),e=Object(o.f)().id,n=Object(c.useState)(null),a=Object(j.a)(n,2),s=a[0],r=a[1],u=Object(o.e)();return Object(c.useEffect)((function(){fetch("".concat(k.apiHost,"/api/chapter/").concat(e),{method:"get"}).then((function(t){return t.json()})).then((function(t){r(new Z(t.chapter))}))}),[e]),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(nt,{children:Object(i.jsx)(d.a,{position:"sticky",color:"default",children:Object(i.jsxs)(h.a,{variant:"dense",children:[Object(i.jsx)(w.a,{onClick:function(){return u.goBack()},edge:"start",className:t.menuButton,color:"inherit",children:Object(i.jsx)(ct.a,{})}),Object(i.jsx)(O.a,{variant:"h6",className:t.title,children:s?Object(i.jsx)(f.a,{in:!!s,children:Object(i.jsx)(b.a,{children:s.title})}):Object(i.jsx)(v.a,{animation:"wave",width:100})})]})})}),Object(i.jsx)(F.a,{className:t.container,children:Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:s?s.initialized?Object(i.jsx)(_,{data:s}):Object(i.jsx)(b.a,{children:"error"}):Object(i.jsx)(b.a,{children:"waiting..."})})}})})]})},rt=n(167),ot=n(168),jt=Object(u.a)((function(t){return Object(l.a)({container:{margin:"".concat(t.spacing(4),"px auto"),maxWidth:t.spacing(40)},submitBtnContainer:{position:"relative"},submitBtn:{marginTop:t.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-12}})})),ut=/^1[3|4|5|7|8][0-9]{9}$/,lt=function(){var t=Object(o.e)(),e=Object(c.useState)(""),n=Object(j.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(!1),u=Object(j.a)(r,2),l=u[0],O=u[1],f=Object(c.useState)(""),p=Object(j.a)(f,2),g=p[0],m=p[1],v=Object(c.useState)(""),C=Object(j.a)(v,2),y=C[0],I=C[1],L=Object(c.useState)(!1),F=Object(j.a)(L,2),N=F[0],T=F[1],B=Object(c.useState)(""),M=Object(j.a)(B,2),E=M[0],W=M[1],H=Object(c.useState)(!1),P=Object(j.a)(H,2),R=P[0],J=P[1],U=Object(c.useContext)(S),G=jt();return Object(c.useEffect)((function(){m(""),O(!1)}),[a]),Object(c.useEffect)((function(){W(""),T(!1)}),[y]),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(d.a,{position:"sticky",color:"inherit",elevation:0,children:Object(i.jsx)(h.a,{variant:"dense",children:Object(i.jsx)(w.a,{onClick:function(){return t.goBack()},edge:"start",color:"inherit",children:Object(i.jsx)(ct.a,{})})})}),Object(i.jsxs)(rt.a,{container:!0,className:G.container,spacing:4,children:[Object(i.jsx)(rt.a,{item:!0,xs:12,children:Object(i.jsx)(z.a,{autoFocus:!0,error:l,helperText:g,value:a,onChange:function(t){return s(t.target.value)},label:"\u624b\u673a",type:"number",fullWidth:!0})}),Object(i.jsx)(rt.a,{item:!0,xs:12,children:Object(i.jsx)(z.a,{error:N,helperText:E,value:y,type:"password",onChange:function(t){return I(t.target.value)},label:"\u5bc6\u7801",fullWidth:!0})}),Object(i.jsxs)(rt.a,{item:!0,xs:12,className:G.submitBtnContainer,children:[Object(i.jsx)(x.a,{disabled:R,onClick:function(){if(!l&&!N){if(!a)return m("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),void O(!0);if(!ut.test(a))return m("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"),void O(!0);J(!0),fetch("".concat(k.apiHost,"/api/user/sign-in"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:a,password:y})}).then((function(t){return t.json()})).then((function(e){if(J(!1),!e.errCode)return t.goBack(),U.setIsLogin(!0),void U.setUserInfo(e.info);1===e.errCode?(m(e.errMsg),O(!0)):2===e.errCode&&(W(e.errMsg),T(!0))}))}},className:G.submitBtn,variant:"outlined",color:"primary",fullWidth:!0,children:"LOGIN"}),R&&Object(i.jsx)(ot.a,{size:24,className:G.buttonProgress})]})]})]})},bt=function(){var t=Object(c.useContext)(S);return Object(c.useEffect)((function(){fetch("".concat(k.apiHost,"/api/user/info"),{method:"get",credentials:"include"}).then((function(t){return t.json()})).then((function(e){1e3===e.errCode?t.setIsLogin(!1):(t.setIsLogin(!0),t.setUserInfo(e.info))}))}),[t]),Object(i.jsxs)(r.a,{children:[Object(i.jsx)(o.a,{path:"/",exact:!0,children:Object(i.jsx)(L,{})}),Object(i.jsx)(o.a,{path:"/book/:id",children:Object(i.jsx)(st,{})}),Object(i.jsx)(o.a,{path:"/login",children:Object(i.jsx)(lt,{})})]})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))},ht=n(169),Ot=new(function(){function t(){Object(G.a)(this,t),this.isLogin=!1,this.isIsLoginReady=!1,this.userInfo={phone:"",nick:"",id:""},Object(A.d)(this,{isLogin:A.e,isIsLoginReady:A.e,setIsLogin:A.b,setUserInfo:A.b})}return Object(D.a)(t,[{key:"setIsLogin",value:function(t){this.isLogin=t,this.isIsLoginReady=!0}},{key:"setUserInfo",value:function(t){this.userInfo=t}}]),t}());s.a.render(Object(i.jsxs)(y,{value:Ot,children:[Object(i.jsx)(ht.a,{}),Object(i.jsx)(bt,{})]}),document.getElementById("root")),dt()}},[[113,1,2]]]);
//# sourceMappingURL=main.7c85a7b7.chunk.js.map