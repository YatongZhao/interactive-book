(this["webpackJsonpinteractive-book"]=this["webpackJsonpinteractive-book"]||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),a=n.n(i),r=n(12),o=n.n(r),s=n(18),l=n(15),u=n(91),j=n(8),d=n(155),b=n(182),h=n(179),p=n(160),O=n(161),f=n(57),x=n(159),g=n(163),m=n(165),v=n(168),S=n(169),y=n(170),I=n(171),C=n(167),k=n(83),N={apiHost:"",phoneRegExp:/^1[3|4|5|7|8][0-9]{9}$/,passwordRegExp:/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/,nickRegExp:/^\S{4,20}$/},w=Object(i.createContext)({}),T=w.Provider,B=n(90),L=n.n(B),E=n(56),H=n(157),R=n(183),z=n(162),F=n(164),P=n(178),W=n(166),M=n(89),A=n.n(M),J=Object(d.a)((function(e){return Object(b.a)({section:Object(E.a)(Object(E.a)({},e.typography.body1),{},{minHeight:"1.5rem",textIndent:e.spacing(4),marginTop:e.spacing(1),marginBottom:e.spacing(1)}),container:{outline:"none",border:function(t){return"1px solid ".concat(t.error?e.palette.error.main:e.palette.grey[600])},borderRadius:e.spacing(1),minHeight:e.spacing(50),position:"relative",marginTop:e.spacing(2),"&::before":{content:'"\u5185\u5bb9"',position:"absolute",fontSize:e.typography.body1.fontSize,color:function(t){return t.error?e.palette.error.main:e.palette.grey[600]},left:0,bottom:"calc(100% + ".concat(e.spacing(.5),"px)")},"&:focus":{borderColor:function(t){return t.error?e.palette.error.main:e.palette.primary.main},"&::before":{color:function(t){return t.error?e.palette.error.main:e.palette.primary.main}},"&::after":{color:function(t){return t.error?e.palette.error.main:e.palette.primary.main}}},"&::after":{content:function(e){return'"'.concat(e.helpText,'"')},fontSize:e.typography.caption.fontSize,color:function(t){return t.error?e.palette.error.main:e.palette.grey[600]},position:"absolute",left:"40px",bottom:"calc(100% + ".concat(e.spacing(.5),"px)")}}})})),U=function(e){var t=e.value,n=e.onChange,a=e.error,r=e.helpText,o=J({error:a,helpText:r}),s=Object(i.useRef)(),l=Object(i.useState)([]),u=Object(j.a)(l,2),d=u[0],b=u[1];return Object(i.useEffect)((function(){b(t)}),[]),Object(c.jsxs)("div",{ref:s,contentEditable:!0,className:o.container,suppressContentEditableWarning:!0,onInput:function(e){n(Array.prototype.map.call(e.target.children,(function(e){return e.innerText})))},children:[0===d.length&&Object(c.jsx)(h.a,{className:o.section}),d.map((function(e){return Object(c.jsx)(h.a,{className:o.section,children:e})}))]})},G=Object(d.a)((function(e){return Object(b.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},container:{padding:e.spacing(2)},progress:{position:"fixed",top:0,left:0,width:"100vw",zIndex:1e4},contentHeader:{fontSize:e.typography.body1.fontSize,color:e.palette.grey[700]}})})),D=a.a.forwardRef((function(e,t){return Object(c.jsx)(H.a,Object(E.a)({direction:"up",ref:t},e))})),$=function(e){var t=e.open,n=e.handleClose,a=e.onSubmit,r=e.titleLabel,o=e.dialogTitle,s=(e.contentPlaceHolder,G()),l=Object(i.useState)(""),u=Object(j.a)(l,2),d=u[0],b=u[1],h=Object(i.useState)(!1),x=Object(j.a)(h,2),m=x[0],v=x[1],S=Object(i.useState)(""),y=Object(j.a)(S,2),I=y[0],C=y[1],k=Object(i.useState)([]),N=Object(j.a)(k,2),w=N[0],T=N[1],B=Object(i.useState)(!1),L=Object(j.a)(B,2),E=L[0],M=L[1],J=Object(i.useState)(""),$=Object(j.a)(J,2),Z=$[0],K=$[1],q=Object(i.useState)(!1),Q=Object(j.a)(q,2),V=Q[0],X=Q[1];return Object(i.useEffect)((function(){v(!1),C("")}),[d]),Object(i.useEffect)((function(){M(!1),K("")}),[w]),Object(c.jsxs)(R.a,{fullScreen:!0,open:t,onClose:n,TransitionComponent:D,children:[Object(c.jsx)(p.a,{className:s.appBar,color:"default",children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(z.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:Object(c.jsx)(A.a,{})}),Object(c.jsx)(f.a,{variant:"h6",className:s.title,children:o}),Object(c.jsx)(g.a,{autoFocus:!0,color:"inherit",onClick:function(){if(!d)return v(!0),void C("".concat(r,"\u4e0d\u80fd\u4e3a\u7a7a"));if(0===w.length)return M(!0),void K("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");if(!w.reduce((function(e,t){return e+t.trim()}),""))return M(!0),void K("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");X(!0),a({content:w,title:d}).then((function(e){X(!1),n()}))},children:"\u63d0\u4ea4"})]})}),Object(c.jsxs)(F.a,{container:!0,spacing:4,className:s.container,children:[Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{autoFocus:!0,value:d,error:m,helperText:I,onChange:function(e){return b(e.target.value)},label:r,fullWidth:!0})}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(U,{value:w,onChange:T,helpText:Z,error:E})})]}),Object(c.jsx)(H.a,{in:V,direction:"down",children:Object(c.jsx)(W.a,{className:s.progress})})]})},Z=Object(d.a)((function(e){return Object(b.a)({title:{flexGrow:1},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},loginTips:{textAlign:"center",marginTop:e.spacing(10),marginBottom:e.spacing(10),color:e.palette.grey[400]}})})),K=function(){var e=Z(),t=Object(i.useState)([]),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(l.e)(),d=Object(i.useContext)(w),b=Object(i.useState)(!1),T=Object(j.a)(b,2),B=T[0],E=T[1];return Object(i.useEffect)((function(){fetch("".concat(N.apiHost,"/api/book"),{method:"get"}).then((function(e){return e.json()})).then((function(e){r(e.books)}))}),[]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(p.a,{position:"sticky",color:"primary",children:Object(c.jsxs)(O.a,{variant:"dense",children:[Object(c.jsx)(f.a,{variant:"h6",className:e.title,children:"ZBOOK"}),Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:d.isIsLoginReady?Object(c.jsx)(c.Fragment,{children:d.isLogin?Object(c.jsx)(x.a,{in:d.isLogin,children:Object(c.jsx)(g.a,{color:"inherit",onClick:function(){return o.push("/center")},children:d.userInfo.nick})}):Object(c.jsx)(x.a,{in:!d.isLogin,children:Object(c.jsx)(g.a,{color:"inherit",onClick:function(){return o.push("/login")},children:"Login"})})}):Object(c.jsx)(C.a,{animation:"wave",width:60})})}})]})}),Object(c.jsx)(m.a,{children:a.map((function(e){return Object(c.jsxs)(v.a,{button:!0,onClick:function(){return t=e.id,void o.push("/book-ver2/".concat(t));var t},children:[Object(c.jsx)(S.a,{primary:e.title,secondary:e.content[0]}),Object(c.jsx)(h.a,{children:e.author})]},e.id)}))}),Object(c.jsx)(k.a,{children:function(){return Object(c.jsxs)(c.Fragment,{children:[!d.isLogin&&a.length>0&&Object(c.jsx)(h.a,{className:e.loginTips,children:Object(c.jsxs)(f.a,{variant:"caption",children:["\u5feb\u53bb",Object(c.jsx)(y.a,{component:s.b,to:"/login",children:"\u767b\u5f55"}),"\u5f00\u59cb\u81ea\u5df1\u7684\u521b\u4f5c\u5427\uff5e"]})}),d.isLogin&&Object(c.jsx)(I.a,{className:e.fab,color:"primary",onClick:function(){return E(!0)},children:Object(c.jsx)(L.a,{})})]})}}),Object(c.jsx)($,{open:B,dialogTitle:"\u521b\u5efa\u56fe\u4e66",contentPlaceHolder:"\u672c\u4e66\u524d\u8a00\u90e8\u5206\u5185\u5bb9",titleLabel:"\u4e66\u540d",handleClose:function(){return E(!1)},onSubmit:function(e){var t=e.content,n=e.title;return fetch("".concat(N.apiHost,"/api/book"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,content:t})}).then((function(e){return e.json()})).then((function(e){var t;1e3!==e.errCode?(t=e.book,r([].concat(Object(u.a)(a),[t]))):o.push("/login")}))}})]})},q=n(175),Q=n(65),V=n(63),X=n(55),Y=n(9),_=n(77);console.log(Object(_.v4)());var ee=function(){function e(t){Object(V.a)(this,e),this.title="",this.author="",this.content=[],this.sub=[],this.subMap={},this.id="",this.selectedSubId="",this.initialized=!1,t&&this.initialize(t),Object(Y.g)(this,{initialized:Y.h,id:Y.h,title:Y.h,author:Y.h,content:Y.h,sub:Y.h,subMap:Y.h,selectedSubId:Y.h,selectedSubIdIndex:Y.d,hasPreSubId:Y.d,hasNextSubId:Y.d,addSub:Y.b,addSubMap:Y.b,setSelectedSubId:Y.b,setNextSelectedSubId:Y.b,setPreSelectedSubId:Y.b,initialize:Y.b})}return Object(X.a)(e,[{key:"selectedSubIdIndex",get:function(){var e=this;return this.sub.findIndex((function(t){return e.selectedSubId===t.id}))}},{key:"hasPreSubId",get:function(){return this.selectedSubIdIndex>0}},{key:"hasNextSubId",get:function(){return this.selectedSubIdIndex<this.sub.length-1}}]),Object(X.a)(e,[{key:"initialize",value:function(e){this.id=e.id||Object(_.v4)(),this.title=e.title,this.author=e.author,this.content=e.content,this.sub=e.sub||[],this.initialized=!0}},{key:"addSub",value:function(t){this.sub.push({id:t.id,title:t.title,author:t.author}),this.addSubMap(new e(t))}},{key:"addSubMap",value:function(e){this.subMap[e.id]=e}},{key:"setSelectedSubId",value:function(e){this.selectedSubId=e}},{key:"setNextSelectedSubId",value:function(){this.selectedSubId=this.sub[this.selectedSubIdIndex+1].id}},{key:"setPreSelectedSubId",value:function(){this.selectedSubId=this.sub[this.selectedSubIdIndex-1].id}}]),e}(),te=n(172),ne=n(173),ce=n(180),ie=Object(d.a)((function(e){return Object(b.a)({loginTips:{marginTop:e.spacing(1),marginBottom:e.spacing(1),color:e.palette.grey[400]}})})),ae=function(e){var t=e.onSubmit,n=Object(i.useState)(!1),a=Object(j.a)(n,2),r=a[0],o=a[1],l=Object(i.useContext)(w),u=ie();return Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:l.isLogin?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{onClick:function(){return o(!0)},fullWidth:!0,variant:"outlined",children:"\u521b\u4f5c\u5267\u60c5"}),Object(c.jsx)($,{titleLabel:"\u6807\u9898",dialogTitle:"\u6dfb\u52a0\u7ae0\u8282",contentPlaceHolder:"\u672c\u7ae0\u5185\u5bb9...",open:r,handleClose:function(){return o(!1)},onSubmit:t})]}):Object(c.jsx)(h.a,{className:u.loginTips,children:Object(c.jsxs)(f.a,{variant:"caption",children:["\u5feb\u53bb",Object(c.jsx)(y.a,{to:"/login",component:s.b,children:"\u767b\u5f55"}),"\u5f00\u59cb\u81ea\u5df1\u5bf9\u672c\u7ae0\u7684\u521b\u4f5c\u5427\uff5e"]})})})}})},re=Object(d.a)((function(e){return Object(b.a)({container:{marginTop:e.spacing(2),backgroundColor:e.palette.grey[300]},addChapterBox:{padding:e.spacing(4)}})})),oe=function(e){var t=e.data,n=e.onSelect,i=e.selectId,a=e.onSubmit,r=e.header,o=re();return Object(c.jsxs)(h.a,{className:o.container,children:[0!==t.sub.length&&Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(m.a,{subheader:Object(c.jsx)(te.a,{disableSticky:!0,children:r}),children:t.sub.map((function(e){return Object(c.jsxs)(v.a,{button:!0,onClick:function(){return n(e.id)},children:[Object(c.jsx)(ne.a,{children:Object(c.jsx)(ce.a,{checked:e.id===i})}),Object(c.jsx)(S.a,{primary:e.title})]},e.id)}))})}}),Object(c.jsx)(h.a,{className:o.addChapterBox,children:Object(c.jsx)(ae,{onSubmit:a})})]})},se=Object(d.a)((function(e){return Object(b.a)({title:{marginTop:e.spacing(8),width:"100%",alignItems:"flex-start",flexDirection:"column"},author:{fontWeight:400,color:e.palette.grey[400],fontSize:e.spacing(2),textAlign:"right",width:"100%",marginTop:e.spacing(1)},content:{marginTop:e.spacing(6),textIndent:e.spacing(4),lineHeight:e.spacing(.22)},selectorContainer:{paddingLeft:e.spacing(3),marginTop:e.spacing(2),marginBottom:e.spacing(2)}})})),le=function e(t){var n=t.data,a=t.parent,r=t.setParentId,o=se(),s=Object(i.useState)(""),u=Object(j.a)(s,2),d=u[0],b=u[1],p=Object(i.useState)(null),O=Object(j.a)(p,2),x=O[0],g=O[1],m=Object(i.useState)(!1),v=Object(j.a)(m,2),S=v[0],y=v[1],I=Object(l.e)(),C=function(e){b(e),y(!1)};function w(e){return function(t){var n=t.content,c=t.title;return fetch("".concat(N.apiHost,"/api/chapter"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:c,content:n,parentId:e.id})}).then((function(e){return e.json()})).then((function(t){1e3!==t.errCode?e.addSub(t.chapter):I.push("/login")}))}}return Object(i.useEffect)((function(){0!==n.sub.length&&b(n.sub[0].id)}),[n]),Object(i.useEffect)((function(){d&&(n.subMap[d]?g(n.subMap[d]):fetch("".concat(N.apiHost,"/api/chapter/").concat(d),{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=e.chapter,c=new ee(t);g(c),n.addSubMap(c)})))}),[d,n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{className:o.content,children:n.content.map((function(e){return Object(c.jsx)(h.a,{children:e})}))}),a&&Object(c.jsx)(oe,{header:"\u89c9\u5f97\u672c\u7ae0\u770b\u7684\u4e0d\u8fc7\u763e\uff1f\u770b\u770b\u5176\u4ed6\u540c\u6837\u4f18\u79c0\u7684\u7248\u672c\u5427\uff1a",onSubmit:w(a),data:a,onSelect:function(e){r&&r(e)},selectId:n.id}),x&&Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(Q.a,{className:o.title,onClick:function(){return y(!S)},children:[Object(c.jsx)(f.a,{variant:"h4",children:x.title}),Object(c.jsxs)(h.a,{className:o.author,children:["author: ",x.author]})]})}),Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:(!d||S)&&Object(c.jsx)(oe,{header:"\u672c\u7ae0\u5176\u4ed6\u5206\u652f\uff1a",onSubmit:w(n),data:n,onSelect:C,selectId:d})})}}),Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:x&&Object(c.jsx)(e,{data:x,parent:n,setParentId:b},x.id)})}})]})},ue=n(174),je=function(e){var t=e.children,n=Object(ue.a)();return Object(c.jsx)(H.a,{appear:!1,direction:"down",in:!n,children:t})},de=n(38),be=n.n(de),he=Object(d.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{marginTop:e.spacing(3)},menuButton:{marginRight:e.spacing(2)}})})),pe=function(){var e=he(),t=Object(l.f)().id,n=Object(i.useState)(null),a=Object(j.a)(n,2),r=a[0],o=a[1],s=Object(l.e)();return Object(i.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(e){o(new ee(e.chapter))}))}),[t]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(je,{children:Object(c.jsx)(p.a,{position:"sticky",color:"default",children:Object(c.jsxs)(O.a,{variant:"dense",children:[Object(c.jsx)(z.a,{onClick:function(){return s.goBack()},edge:"start",className:e.menuButton,color:"inherit",children:Object(c.jsx)(be.a,{})}),Object(c.jsx)(f.a,{variant:"h6",className:e.title,children:r?Object(c.jsx)(x.a,{in:!!r,children:Object(c.jsx)(h.a,{children:r.title})}):Object(c.jsx)(C.a,{animation:"wave",width:100})})]})})}),Object(c.jsx)(q.a,{className:e.container,children:Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:r?r.initialized?Object(c.jsx)(le,{data:r}):Object(c.jsx)(h.a,{children:"error"}):Object(c.jsx)(h.a,{children:"waiting..."})})}})})]})},Oe=Object(d.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{},menuButton:{marginRight:e.spacing(2)},line:{textIndent:e.spacing(4)},nextChapterBox:{marginTop:e.spacing(2)},nextChapterBtn:{display:"block",width:"100%",textAlign:"left"}})})),fe=function(){var e=Oe(),t=Object(l.f)().id,n=Object(i.useState)(null),a=Object(j.a)(n,2),r=a[0],o=a[1],s=Object(l.e)();return Object(i.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(e){o(new ee(e.chapter))}))}),[t]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(je,{children:Object(c.jsx)(p.a,{position:"sticky",color:"default",children:Object(c.jsxs)(O.a,{variant:"dense",children:[Object(c.jsx)(z.a,{onClick:function(){return s.push("/")},edge:"start",className:e.menuButton,color:"inherit",children:Object(c.jsx)(be.a,{})}),Object(c.jsx)(f.a,{variant:"h6",className:e.title,children:r?Object(c.jsx)(x.a,{in:!!r,children:Object(c.jsx)(h.a,{children:r.title})}):Object(c.jsx)(C.a,{animation:"wave",width:100})})]})})}),Object(c.jsxs)(q.a,{className:e.container,children:[Object(c.jsx)(g.a,{fullWidth:!0,children:"\u52a0\u8f7d\u4e0a\u4e00\u7bc7"}),Object(c.jsx)(h.a,{children:null===r||void 0===r?void 0:r.content.map((function(t){return Object(c.jsx)(h.a,{className:e.line,children:Object(c.jsx)(f.a,{variant:"body1",children:t})})}))}),Object(c.jsxs)(h.a,{className:e.nextChapterBox,children:[Object(c.jsx)(h.a,{children:"\u4e0b\u4e00\u4e2a\u5267\u60c5\u8282\u70b9\uff1a"}),null===r||void 0===r?void 0:r.sub.map((function(t){return Object(c.jsx)(Q.a,{className:e.nextChapterBtn,onClick:function(){s.push("/book-new/".concat(t.id))},children:Object(c.jsx)(h.a,{children:t.title})})}))]}),Object(c.jsx)(g.a,{fullWidth:!0,children:"\u52a0\u8f7d\u4e0b\u4e00\u7bc7"})]})]})},xe=n(176),ge=function(){var e=Object(l.e)();return Object(c.jsx)(p.a,{position:"sticky",color:"inherit",elevation:0,children:Object(c.jsx)(O.a,{variant:"dense",children:Object(c.jsx)(z.a,{onClick:function(){return e.goBack()},edge:"start",color:"inherit",children:Object(c.jsx)(be.a,{})})})})},me=Object(d.a)((function(e){return Object(b.a)({container:{margin:"".concat(e.spacing(4),"px auto"),maxWidth:e.spacing(40)},submitBtnContainer:{position:"relative"},submitBtn:{marginTop:e.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-12},signInBox:{display:"flex",justifyContent:"center"}})})),ve=function(){var e=Object(l.e)(),t=Object(i.useState)(""),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(i.useState)(!1),u=Object(j.a)(o,2),d=u[0],b=u[1],p=Object(i.useState)(""),O=Object(j.a)(p,2),x=O[0],m=O[1],v=Object(i.useState)(""),S=Object(j.a)(v,2),I=S[0],C=S[1],k=Object(i.useState)(!1),T=Object(j.a)(k,2),B=T[0],L=T[1],E=Object(i.useState)(""),H=Object(j.a)(E,2),R=H[0],z=H[1],W=Object(i.useState)(!1),M=Object(j.a)(W,2),A=M[0],J=M[1],U=Object(i.useContext)(w),G=me();return Object(i.useEffect)((function(){m(""),b(!1)}),[a]),Object(i.useEffect)((function(){z(""),L(!1)}),[I]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(ge,{}),Object(c.jsxs)(F.a,{container:!0,className:G.container,spacing:4,children:[Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{autoFocus:!0,error:d,helperText:x,value:a,onChange:function(e){return r(e.target.value)},label:"\u624b\u673a",type:"number",fullWidth:!0})}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{error:B,helperText:R,value:I,type:"password",onChange:function(e){return C(e.target.value)},label:"\u5bc6\u7801",fullWidth:!0})}),Object(c.jsxs)(F.a,{item:!0,xs:12,className:G.submitBtnContainer,children:[Object(c.jsx)(g.a,{disabled:A,onClick:function(){if(!d&&!B){if(!a)return m("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),void b(!0);if(!N.phoneRegExp.test(a))return m("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"),void b(!0);J(!0),fetch("".concat(N.apiHost,"/api/user/sign-in"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:a,password:I})}).then((function(e){return e.json()})).then((function(t){if(J(!1),!t.errCode)return e.goBack(),U.setIsLogin(!0),void U.setUserInfo(t.info);1===t.errCode?(m(t.errMsg),b(!0)):2===t.errCode&&(z(t.errMsg),L(!0))}))}},className:G.submitBtn,variant:"outlined",color:"primary",fullWidth:!0,children:"\u767b\u5f55"}),A&&Object(c.jsx)(xe.a,{size:24,className:G.buttonProgress})]}),Object(c.jsx)(F.a,{item:!0,xs:12,className:G.signInBox,children:Object(c.jsxs)(f.a,{variant:"caption",children:["\u8fd8\u6ca1\u6709\u8d26\u53f7\uff0c\u7acb\u5373\u524d\u5f80",Object(c.jsx)(y.a,{component:s.b,to:"/sign-up",children:"\u6ce8\u518c"})]})})]})]})},Se=Object(d.a)((function(e){return Object(b.a)({container:{margin:"".concat(e.spacing(4),"px auto"),maxWidth:e.spacing(40)},submitBtnContainer:{position:"relative"},submitBtn:{marginTop:e.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-12}})})),ye=function(){var e=Object(l.e)(),t=Object(i.useState)(""),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(i.useState)(!1),s=Object(j.a)(o,2),u=s[0],d=s[1],b=Object(i.useState)(""),p=Object(j.a)(b,2),O=p[0],f=p[1],x=Object(i.useState)(""),m=Object(j.a)(x,2),v=m[0],S=m[1],y=Object(i.useState)(!1),I=Object(j.a)(y,2),C=I[0],k=I[1],T=Object(i.useState)(""),B=Object(j.a)(T,2),L=B[0],E=B[1],H=Object(i.useState)(""),R=Object(j.a)(H,2),z=R[0],W=R[1],M=Object(i.useState)(!1),A=Object(j.a)(M,2),J=A[0],U=A[1],G=Object(i.useState)(""),D=Object(j.a)(G,2),$=D[0],Z=D[1],K=Object(i.useState)(""),q=Object(j.a)(K,2),Q=q[0],V=q[1],X=Object(i.useState)(!1),Y=Object(j.a)(X,2),_=Y[0],ee=Y[1],te=Object(i.useState)(""),ne=Object(j.a)(te,2),ce=ne[0],ie=ne[1],ae=Object(i.useState)(!1),re=Object(j.a)(ae,2),oe=re[0],se=re[1],le=Object(i.useContext)(w),ue=Se();return Object(i.useEffect)((function(){f(""),d(!1)}),[a]),Object(i.useEffect)((function(){E(""),k(!1)}),[v]),Object(i.useEffect)((function(){Z(""),U(!1)}),[z]),Object(i.useEffect)((function(){ie(""),ee(!1)}),[Q]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(ge,{}),Object(c.jsxs)(F.a,{container:!0,className:ue.container,spacing:4,children:[Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{autoFocus:!0,error:u,helperText:O,value:a,onChange:function(e){return r(e.target.value)},label:"\u6635\u79f0",fullWidth:!0})}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{error:C,helperText:L,value:v,onChange:function(e){return S(e.target.value)},label:"\u624b\u673a",type:"number",fullWidth:!0})}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{error:J,helperText:$,value:z,type:"password",onChange:function(e){return W(e.target.value)},label:"\u5bc6\u7801",fullWidth:!0})}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(P.a,{error:_,helperText:ce,value:Q,type:"password",onChange:function(e){return V(e.target.value)},label:"\u786e\u8ba4\u5bc6\u7801",fullWidth:!0})}),Object(c.jsxs)(F.a,{item:!0,xs:12,className:ue.submitBtnContainer,children:[Object(c.jsx)(g.a,{disabled:oe,onClick:function(){return v?N.phoneRegExp.test(v)?a?N.nickRegExp.test(a)?z?N.passwordRegExp.test(z)?Q?z!==Q?(ie("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u76f8\u540c"),ee(!0),void U(!0)):(se(!0),void fetch("".concat(N.apiHost,"/api/user/sign-up"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:v,password:z,nick:a})}).then((function(e){return e.json()})).then((function(t){if(se(!1),!t.errCode)return le.setIsLogin(!0),le.setUserInfo(t.info),void e.push("/");4===t.errCode?(E("\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c"),k(!0)):5===t.errCode&&(f("\u8be5\u6635\u79f0\u5df2\u5b58\u5728"),d(!0))}))):(ie("\u8bf7\u8f93\u5165\u4e8c\u6b21\u786e\u8ba4\u5bc6\u7801"),void ee(!0)):(Z("\u5bc6\u7801\u683c\u5f0f\u4e0d\u6b63\u786e(\u5fc5\u987b\u6709\u6570\u5b57\u548c\u5b57\u6bcd\uff0c6-20\u4e2a\u5b57\u7b26)"),void U(!0)):(Z("\u8bf7\u8bbe\u7f6e\u5bc6\u7801"),void U(!0)):(f("\u6635\u79f0\u683c\u5f0f\u4e0d\u7b26\u5408\u8981\u6c42(4-20\u4e2a\u5b57\u7b26)"),void d(!0)):(f("\u8bf7\u8f93\u5165\u6635\u79f0"),void d(!0)):(E("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"),void k(!0)):(E("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),void k(!0))},className:ue.submitBtn,variant:"outlined",color:"primary",fullWidth:!0,children:"\u6ce8\u518c"}),oe&&Object(c.jsx)(xe.a,{size:24,className:ue.buttonProgress})]})]})]})},Ie=Object(d.a)((function(e){return Object(b.a)({container:{padding:e.spacing(4)}})})),Ce=function(){var e=Object(i.useContext)(w),t=Object(l.e)(),n=Ie();function a(){fetch("".concat(N.apiHost,"/api/user/logout"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(n){e.setIsLogin(!1),e.setUserInfo({phone:"",nick:"",id:""}),t.replace("/")}))}return Object(i.useEffect)((function(){return Object(Y.c)((function(){e.isIsLoginReady&&!e.isLogin&&t.replace("/login")}))}),[e,t]),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(ge,{}),Object(c.jsx)(k.a,{children:function(){return Object(c.jsxs)(F.a,{container:!0,spacing:2,className:n.container,children:[Object(c.jsxs)(F.a,{item:!0,xs:12,children:["\u6635\u79f0\uff1a",e.userInfo.nick]}),Object(c.jsxs)(F.a,{item:!0,xs:12,children:["\u7535\u8bdd\uff1a",e.userInfo.phone]}),Object(c.jsx)(F.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{fullWidth:!0,variant:"outlined",onClick:a,children:"\u9000\u51fa\u767b\u5f55"})})]})}})]})},ke=n(184),Ne=Object(d.a)((function(e){return Object(b.a)({titleBox:{position:"sticky",zIndex:10,top:0,backgroundColor:e.palette.background.default,paddingBottom:e.spacing(1),boxShadow:"0px -3px 3px 1px ".concat(e.palette.grey[200])},title:{width:"100%",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"flex-start",borderBottom:"1px solid ".concat(e.palette.divider),paddingRight:e.spacing(1)},titleMiddle:{display:"flex",flexDirection:"column",flexGrow:1,width:0},mainTitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},subTitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},titleCreateBtn:{height:"100%"},author:{fontWeight:400,color:e.palette.grey[400],fontSize:e.spacing(2),textAlign:"right",width:"100%",marginTop:e.spacing(1)},content:{marginTop:e.spacing(6),marginBottom:e.spacing(8),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),textIndent:e.spacing(4),lineHeight:e.spacing(.22)},selectorContainer:{paddingLeft:e.spacing(3),marginTop:e.spacing(2),marginBottom:e.spacing(2)},bottomBar:{borderTop:"1px solid ".concat(e.palette.divider),display:"flex",justifyContent:"flex-end",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),position:"sticky",bottom:0,backgroundColor:e.palette.background.default}})})),we=function e(t){var n=t.data,a=t.parent,r=Ne(),o=Object(i.useState)(void 0),s=Object(j.a)(o,2),u=s[0],d=s[1],b=Object(l.e)(),p=Object(i.useState)(!1),O=Object(j.a)(p,2),x=O[0],m=O[1],v=Object(i.useContext)(w),S=Object(i.useState)(!1),y=Object(j.a)(S,2),I=y[0],C=y[1];function k(e){var t=e.content,n=e.title;return fetch("".concat(N.apiHost,"/api/chapter"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,content:t,parentId:null===a||void 0===a?void 0:a.id})}).then((function(e){return e.json()})).then((function(e){1e3!==e.errCode?null===a||void 0===a||a.addSub(e.chapter):b.push("/login")}))}Object(i.useEffect)((function(){return Object(Y.c)((function(){(null===n||void 0===n?void 0:n.selectedSubId)&&((null===n||void 0===n?void 0:n.subMap[null===n||void 0===n?void 0:n.selectedSubId])?d(null===n||void 0===n?void 0:n.subMap[null===n||void 0===n?void 0:n.selectedSubId]):fetch("".concat(N.apiHost,"/api/chapter/").concat(null===n||void 0===n?void 0:n.selectedSubId),{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=e.chapter,c=new ee(t);d(c),null===n||void 0===n||n.addSubMap(c)})))}))}),[n]);var T=Object(i.useCallback)((function(){v.isIsLoginReady&&v.isLogin?C(!0):b.push("/login")}),[v,b]);return Object(ke.a)((function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(h.a,{className:r.titleBox,children:[n&&Object(c.jsxs)(h.a,{className:r.title,children:[Object(c.jsx)(z.a,{onClick:b.goBack,children:Object(c.jsx)(be.a,{})}),Object(c.jsxs)(h.a,{className:r.titleMiddle,onClick:function(){return m(!x)},children:[Object(c.jsx)(f.a,{className:r.mainTitle,variant:"subtitle1",children:n.title}),Object(c.jsx)(f.a,{className:r.subTitle,variant:"caption",children:n.content[0]})]}),Object(c.jsx)(g.a,{className:r.titleCreateBtn,color:"primary",onClick:T,children:"\u5199\u5267\u60c5"}),v.isIsLoginReady&&v.isLogin&&Object(c.jsx)($,{open:I,handleClose:function(){return C(!1)},onSubmit:k,titleLabel:"\u6807\u9898",dialogTitle:"\u6dfb\u52a0\u5267\u60c5",contentPlaceHolder:"\u672c\u7ae0\u5185\u5bb9..."})]}),a&&x&&Object(c.jsx)(oe,{header:"\u5267\u60c5\u5206\u652f\u9009\u62e9\uff1a",onSubmit:k,data:a,onSelect:function(e){m(!1),a&&a.setSelectedSubId(e)},selectId:a.selectedSubId})]}),a&&!n&&Object(c.jsx)(oe,{header:"\u5267\u60c5\u5206\u652f\u9009\u62e9\uff1a",onSubmit:k,data:a,onSelect:function(e){a&&a.setSelectedSubId(e)},selectId:a.selectedSubId}),n&&Object(c.jsx)(h.a,{className:r.content,children:null===n||void 0===n?void 0:n.content.map((function(e,t){return Object(c.jsx)(h.a,{children:e},t)}))}),n&&a&&Object(c.jsxs)(h.a,{className:r.bottomBar,children:[Object(c.jsx)(g.a,{onClick:function(){return a.setPreSelectedSubId()},disabled:!a.hasPreSubId,children:"\u4e0a\u4e00\u4e2a\u5267\u60c5"}),Object(c.jsx)(g.a,{onClick:function(){return a.setNextSelectedSubId()},disabled:!a.hasNextSubId,children:"\u4e0b\u4e00\u4e2a\u5267\u60c5"})]})]}),(n||u)&&Object(c.jsx)(e,{data:u,parent:n},""+(null===u||void 0===u?void 0:u.id)+(null===n||void 0===n?void 0:n.id))]})}))},Te=Object(d.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{},menuButton:{marginRight:e.spacing(2)}})})),Be=function(){var e=Te(),t=Object(l.f)().id,n=Object(i.useState)(null),a=Object(j.a)(n,2),r=a[0],o=a[1];Object(l.e)();return Object(i.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(e){o(new ee(e.chapter))}))}),[t]),Object(c.jsx)(h.a,{className:e.container,children:Object(c.jsx)(k.a,{children:function(){return Object(c.jsx)(c.Fragment,{children:r?r.initialized?Object(c.jsx)(we,{data:r}):Object(c.jsx)(h.a,{children:"error"}):Object(c.jsx)(h.a,{children:"waiting..."})})}})})},Le=function(){var e=Object(i.useContext)(w);return Object(i.useEffect)((function(){fetch("".concat(N.apiHost,"/api/user/info"),{method:"get",credentials:"include"}).then((function(e){return e.json()})).then((function(t){1e3===t.errCode?e.setIsLogin(!1):(e.setIsLogin(!0),e.setUserInfo(t.info))}))}),[e]),Object(c.jsxs)(s.a,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,children:Object(c.jsx)(K,{})}),Object(c.jsx)(l.a,{path:"/book/:id",children:Object(c.jsx)(pe,{})}),Object(c.jsx)(l.a,{path:"/book-ver2/:id",children:Object(c.jsx)(Be,{})}),Object(c.jsx)(l.a,{path:"/book-new/:id",children:Object(c.jsx)(fe,{})}),Object(c.jsx)(l.a,{path:"/login",children:Object(c.jsx)(ve,{})}),Object(c.jsx)(l.a,{path:"/sign-up",children:Object(c.jsx)(ye,{})}),Object(c.jsx)(l.a,{path:"/center",children:Object(c.jsx)(Ce,{})})]})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},He=n(177),Re=new(function(){function e(){Object(V.a)(this,e),this.isLogin=!1,this.isIsLoginReady=!1,this.userInfo={phone:"",nick:"",id:""},Object(Y.g)(this,{isLogin:Y.h,isIsLoginReady:Y.h,userInfo:Y.h,setIsLogin:Y.b,setUserInfo:Y.b})}return Object(X.a)(e,[{key:"setIsLogin",value:function(e){this.isLogin=e,this.isIsLoginReady=!0}},{key:"setUserInfo",value:function(e){this.userInfo=e}}]),e}());o.a.render(Object(c.jsxs)(T,{value:Re,children:[Object(c.jsx)(He.a,{}),Object(c.jsx)(Le,{})]}),document.getElementById("root")),Ee()}},[[123,1,2]]]);
//# sourceMappingURL=main.22e391c7.chunk.js.map